import type { TestInfo } from '@playwright/test';
import winston from 'winston';
import { Writable } from 'node:stream';

// A log4j-style logger (built on winston) whose output is attached to each test, so the log shows up in both the
// Playwright report and the Allure report. It writes only to that attachment, not to the console; the existing
// console lines stay as they are.
//
// Every line looks like:
//   2026-10-25 10:04:12.345 INFO  [SharedFilterFlows] Clicked '10% off or more'
//
// Each class makes its own logger:  const log = Logger.for('SharedFilterFlows');
// The spec calls Logger.startTest() before a test and Logger.attachTo(testInfo) after it.

// Collects the formatted lines in memory, so there is no file to flush before the log is attached.
type Current = { winston: winston.Logger; lines: string[] };

// A worker runs one test at a time, so one current log is enough.
let current: Current | undefined;

class Logger {
  private constructor(private readonly source: string) {}

  static for(source: string): Logger {
    return new Logger(source);
  }

  // Call before each test: starts an empty log for it.
  static startTest(): void {
    const lines: string[] = [];
    const sink = new Writable({
      write(chunk, _encoding, done) {
        lines.push(String(chunk).trimEnd());
        done();
      },
    });
    const logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level.toUpperCase().padEnd(5)} [${info.source}] ${info.message}`,
        ),
      ),
      transports: [new winston.transports.Stream({ stream: sink })],
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

  // Outside a test (no startTest yet) the line is dropped.
  private write(level: 'debug' | 'info' | 'warn' | 'error', message: string): void {
    current?.winston.log({ level, message, source: this.source });
  }
}

export default Logger;
