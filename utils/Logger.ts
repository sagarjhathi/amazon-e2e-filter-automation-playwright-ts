import type { TestInfo } from '@playwright/test';
import winston from 'winston';
import { Writable } from 'node:stream';

// A log4j-style logger (built on winston) whose output is attached to each test, so the log shows up in both the
// Playwright report and the Allure report. The existing console lines stay as they are.
//
// Every line in the attachment looks like:
//   2026-10-25 10:04:12.345 INFO  [SharedFilterFlows] Clicked '10% off or more'
//
// The same lines are also printed to the console, with the test title added (tests run in parallel, so the title says
// which test a line belongs to). The console output is on for local runs and off on CI, where the attachment has it.
// Override it with LOG_TO_CONSOLE=true or LOG_TO_CONSOLE=false.
//
// Each class makes its own logger:  const log = Logger.for('SharedFilterFlows');
// The spec calls Logger.startTest(title) before a test and Logger.attachTo(testInfo) after it.

const toConsole: boolean = process.env.LOG_TO_CONSOLE
  ? process.env.LOG_TO_CONSOLE.toLowerCase() === 'true'
  : !process.env.CI;

// Collects the formatted lines in memory, so there is no file to flush before the log is attached.
type Current = { winston: winston.Logger; lines: string[] };

// One log line. A message that starts with a newline (a section banner) gets its blank line before the timestamp.
function line(info: winston.Logform.TransformableInfo, where: string): string {
  const message = String(info.message);
  const blank = message.startsWith('\n') ? '\n' : '';
  return `${blank}${info.timestamp} ${info.level.toUpperCase().padEnd(5)} ${where} ${message.trimStart()}`;
}

// A worker runs one test at a time, so one current log is enough.
let current: Current | undefined;

class Logger {
  private constructor(private readonly source: string) {}

  static for(source: string): Logger {
    return new Logger(source);
  }

  // Call before each test: starts an empty log for it.
  static startTest(title: string): void {
    const lines: string[] = [];
    const sink = new Writable({
      write(chunk, _encoding, done) {
        lines.push(String(chunk).trimEnd());
        done();
      },
    });
    const logger = winston.createLogger({
      level: 'debug',
      format: winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
      transports: [
        // The attachment belongs to one test, so its lines do not repeat the test title.
        new winston.transports.Stream({
          stream: sink,
          format: winston.format.printf((info) => line(info, `[${info.source}]`)),
        }),
        ...(toConsole
          ? [new winston.transports.Console({
              level: 'info',
              format: winston.format.printf((info) => line(info, `[${title}] [${info.source}]`)),
            })]
          : []),
      ],
    });
    current = { winston: logger, lines };
  }

  // Call after each test (also after a failure or timeout): attaches the log to the test.
  static async attachTo(testInfo: TestInfo): Promise<void> {
    if (!current) {
      return;
    }
    const { winston: logger, lines } = current;
    current = undefined;

    // Winston logs through streams; ending the logger waits for every queued line to reach the transport.
    await new Promise<void>((resolve) => {
      logger.on('finish', () => resolve());
      logger.end();
    });

    if (lines.length > 0) {
      await testInfo.attach('test-log', { body: lines.join('\n'), contentType: 'text/plain' });
    }
  }

  debug(message: string): void {
    this.write('debug', message);
  }

  info(message: string): void {
    this.write('info', message);
  }

  warn(message: string): void {
    this.write('warn', message);
  }

  error(message: string): void {
    this.write('error', message);
  }

  // A banner line with an empty line before it, to split the log into parts (for example one part per brand).
  section(title: string): void {
    this.write('info', `\n${'='.repeat(12)} ${title} ${'='.repeat(12)}`);
  }

  // Outside a test (no startTest yet) the line is dropped.
  private write(level: 'debug' | 'info' | 'warn' | 'error', message: string): void {
    current?.winston.log({ level, message, source: this.source });
  }
}

export default Logger;
