# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AmazonAll.spec.ts >> Mobile: verifyingDiscountFilterFunctionality 
- Location: tests/AmazonAll.spec.ts:312:44

# Error details

```
Error: Card discount fits filter '25% off or more' (the card shows 20% off): realme p4 lite 5g (mosaic green, 4gb ram, 64gb) | 13mp camera | 6.8" 144hz displ

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 25
Received:    20
```

```
Error: Card discount fits filter '35% off or more' (the card shows 20% off): realme p4 lite 5g (mosaic green, 4gb ram, 64gb) | 13mp camera | 6.8" 144hz displ

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 35
Received:    20
```

```
Error: Card discount fits filter '50% off or more' (the card shows 41% off): motorola moto g37 5g (pantone nautical blue, 64gb storage, 4gb ram) | 5g smartph

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    41
```

```
Error: Card discount fits filter '50% off or more' (the card shows 37% off): oppo f35 5g | 8gb+128gb | titanium grey | 8000mah battery + 80w supervooc | 6.57

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    37
```

```
Error: Card discount fits filter '50% off or more' (the card shows 41% off): motorola g37 5g (pantone capri, 4gb ram, 64gb storage) | mediatek dimensity 6400

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    41
```

```
Error: Card discount fits filter '50% off or more' (the card shows 42% off): motorola g37 power (pantone capri, 4gb ram, 64gb storage) | mediatek dimensity 6

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    42
```

```
Error: Card discount fits filter '50% off or more' (the card shows 42% off): motorola g37 power (pantone impenetrable, 4gb ram, 64gb storage) | mediatek dime

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    42
```

```
Error: Card discount fits filter '50% off or more' (the card shows 30% off): lava virat v1 pro 5g 6gb+128gb sikkim midnight
a premium design inspired by natu

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    30
```

```
Error: Card discount fits filter '50% off or more' (the card shows 43% off): motorola g37 power (pantone nautical blue, 4gb ram, 64gb storage) | mediatek dim

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    43
```

```
Error: Card discount fits filter '50% off or more' (the card shows 30% off): lava virat v1 pro 5g 6gb+128gb spiti frost
lava virat v1 pro 5g 6gb 128gb spiti 

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    30
```

```
Error: Card discount fits filter '60% off or more' (the card shows 41% off): motorola moto g37 5g (pantone nautical blue, 64gb storage, 4gb ram) | 5g smartph

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    41
```

```
Error: Card discount fits filter '60% off or more' (the card shows 41% off): motorola g37 5g (pantone capri, 4gb ram, 64gb storage) | mediatek dimensity 6400

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    41
```

```
Error: Card discount fits filter '60% off or more' (the card shows 42% off): motorola g37 power (pantone capri, 4gb ram, 64gb storage) | mediatek dimensity 6

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    42
```

```
Error: Card discount fits filter '60% off or more' (the card shows 42% off): motorola g37 power (pantone impenetrable, 4gb ram, 64gb storage) | mediatek dime

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    42
```

```
Error: Card discount fits filter '60% off or more' (the card shows 43% off): motorola g37 power (pantone nautical blue, 4gb ram, 64gb storage) | mediatek dim

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    43
```

```
Error: Card discount fits filter '60% off or more' (the card shows 30% off): lava virat v1 pro 5g 6gb+128gb spiti frost
lava virat v1 pro 5g 6gb 128gb spiti 

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    30
```

```
Error: Card discount fits filter '60% off or more' (the card shows 30% off): lava virat v1 pro 5g 6gb+128gb sikkim midnight
a premium design inspired by natu

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    30
```

```
Error: Card discount fits filter '60% off or more' (the card shows 34% off): motorola g37 (pantone impenetrable, 4gb ram, 64gb storage) | mediatek dimensity 

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    34
```

```
Error: Card discount fits filter '60% off or more' (the card shows 38% off): google pixel 6 pro smartphone

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    38
```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - navigation "Shortcuts menu" [ref=f4e3]:
    - heading "Skip to" [level=2] [ref=f4e4]
    - list "Skip to" [ref=f4e5]:
      - listitem [ref=f4e6]:
        - link "main content" [ref=f4e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
      - listitem [ref=f4e8]:
        - link "Results" [ref=f4e9] [cursor=pointer]:
          - /url: .s-asin a:has(h2)
    - separator [aria-hidden] [ref=f4e10]
    - heading "Keyboard shortcuts" [level=2] [ref=f4e11]
    - list "Keyboard shortcuts" [ref=f4e12]:
      - listitem [ref=f4e13]:
        - link "Search, alt, forward slash" [ref=f4e14] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f4e15]:
            - generic [ref=f4e16]: Search
            - generic [ref=f4e17]:
              - generic [ref=f4e18]: alt
              - generic [ref=f4e19]: +
              - generic [ref=f4e20]: /
      - listitem [ref=f4e21]:
        - link "Cart, shift, alt, c" [ref=f4e22] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f4e23]:
            - generic [ref=f4e24]: Cart
            - generic [ref=f4e25]:
              - generic [ref=f4e26]: shift
              - generic [ref=f4e27]: +
              - generic [ref=f4e28]: alt
              - generic [ref=f4e29]: +
              - generic [ref=f4e30]: C
      - listitem [ref=f4e31]:
        - link "Home, shift, alt, h" [ref=f4e32] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f4e33]:
            - generic [ref=f4e34]: Home
            - generic [ref=f4e35]:
              - generic [ref=f4e36]: shift
              - generic [ref=f4e37]: +
              - generic [ref=f4e38]: alt
              - generic [ref=f4e39]: +
              - generic [ref=f4e40]: H
      - listitem [ref=f4e41]:
        - link "Your orders, shift, alt, o" [ref=f4e42] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f4e43]:
            - generic [ref=f4e44]: Orders
            - generic [ref=f4e45]:
              - generic [ref=f4e46]: shift
              - generic [ref=f4e47]: +
              - generic [ref=f4e48]: alt
              - generic [ref=f4e49]: +
              - generic [ref=f4e50]: O
      - listitem [ref=f4e51]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=f4e52] [cursor=pointer]:
          - generic [aria-hidden] [ref=f4e53]:
            - generic [ref=f4e54]: Show/Hide shortcuts
            - generic [ref=f4e55]:
              - generic [ref=f4e56]: shift
              - generic [ref=f4e57]: +
              - generic [ref=f4e58]: alt
              - generic [ref=f4e59]: +
              - generic [ref=f4e60]: Z
    - generic [ref=f4e61]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=f4e67]:
    - navigation "Primary" [ref=f4e68]:
      - generic [ref=f4e69]:
        - generic [ref=f4e70]:
          - link "Amazon.in" [ref=f4e72] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Mumbai 400001 Update location" [ref=f4e75] [cursor=pointer]:
            - generic [ref=f4e77]:
              - generic [ref=f4e78]: Delivering to Mumbai 400001
              - generic [ref=f4e79]: Update location
        - search [ref=f4e82]:
          - generic [ref=f4e85]:
            - generic [ref=f4e86]: All
            - combobox "Select the department you want to search in" [ref=f4e89] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh Meat"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [ref=f4e92]: Mobile
          - generic "Go" [ref=f4e95] [cursor=pointer]:
            - button "Go" [ref=f4e96]
        - generic [ref=f4e98]:
          - generic [ref=f4e99]:
            - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=f4e100] [cursor=pointer]:
              - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
              - generic [ref=f4e103]:
                - img "India" [ref=f4e104]
                - generic [ref=f4e105]: EN
            - button "Expand to Change Language or Country" [ref=f4e106] [cursor=pointer]
          - generic [ref=f4e107]:
            - link "Hello, sign in Account & Lists" [ref=f4e108] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DMobile%26crid%3D82IBZTJS9VYS%26sprefix%3Dmobile%252Caps%252C277%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=f4e109]: Hello, sign in
              - generic [ref=f4e111]: Account & Lists
            - button "Expand Account and Lists" [ref=f4e112] [cursor=pointer]
          - link "Returns & Orders" [ref=f4e113] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=f4e114]: Returns
            - generic [ref=f4e115]: "& Orders"
          - link "0 items in cart" [ref=f4e116] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [aria-hidden] [ref=f4e118]: "0"
            - generic [aria-hidden] [ref=f4e121]: Cart
      - generic [ref=f4e122]:
        - button "Open All Categories Menu" [ref=f4e124] [cursor=pointer]:
          - generic [ref=f4e126]: All
        - list [ref=f4e130]:
          - listitem [ref=f4e131]:
            - link "Amazon Pay" [ref=f4e133] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=f4e134]:
            - link "Mobiles" [ref=f4e136] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=f4e137]:
            - generic [ref=f4e138]:
              - link "Prime" [ref=f4e139] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=f4e140] [cursor=pointer]
          - listitem [ref=f4e141]:
            - link "Today's Deals" [ref=f4e143] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=f4e144]:
            - link "Coupons" [ref=f4e146] [cursor=pointer]:
              - /url: /coupons?ref_=nav_cs_coupons
          - listitem [ref=f4e147]:
            - link "Flights" [ref=f4e149] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
          - listitem [ref=f4e150]:
            - link "Fresh Meat" [ref=f4e152] [cursor=pointer]:
              - /url: /freshmeat?ref_=nav_cs_fm
          - listitem [ref=f4e153]:
            - link "Grocery & Gourmet Foods" [ref=f4e155] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=f4e156]:
            - link "Electronics" [ref=f4e158] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=f4e159]:
            - link "New Releases" [ref=f4e161] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=f4e162]:
            - link "Bestsellers" [ref=f4e164] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=f4e165]:
            - link "Fashion" [ref=f4e167] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=f4e168]:
            - link "Computers" [ref=f4e170] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=f4e171]:
            - link "Custom Products" [ref=f4e173] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=f4e174]:
            - link "Sports, Fitness & Outdoors" [ref=f4e176] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=f4e177]:
            - link "Pet Supplies" [ref=f4e179] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=f4e180]:
            - link "Home & Kitchen" [ref=f4e182] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=f4e183]:
            - link "Video Games" [ref=f4e185] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=f4e186]:
            - link "Baby" [ref=f4e188] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=f4e189]:
            - link "Books" [ref=f4e191] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=f4e192]:
            - link "Kindle eBooks" [ref=f4e194] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=f4e195]:
            - link "Toys & Games" [ref=f4e197] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=f4e198]:
            - link "Car & Motorbike" [ref=f4e200] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=f4e201]:
            - link "Customer Service" [ref=f4e203] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=f4e204]:
            - link "Gift Cards" [ref=f4e206] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=f4e207]:
            - link "Home Improvement" [ref=f4e209] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=f4e210]:
            - link "Audible" [ref=f4e212] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=f4e213]:
            - link "Beauty & Personal Care" [ref=f4e215] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=f4e216]:
            - link "AmazonBasics" [ref=f4e218] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=f4e219]:
            - link "Subscribe & Save" [ref=f4e221] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
        - link "Apay_Travel" [ref=f4e225] [cursor=pointer]:
          - /url: /flights/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=960ce25c-288d-43b7-b5ff-860afbe291b3&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=GY6Z870N3T2J7HQQKEY6
          - img "Apay_Travel" [ref=f4e226]
      - dialog [ref=f4e227]
  - generic [ref=f4e229]:
    - heading [level=1] [ref=f4e232]:
      - generic [ref=f4e233]:
        - heading "1-16 of over 60,000 results for \"Mobile\"" [level=2] [ref=f4e238]
        - generic [ref=f4e243]:
          - generic [aria-hidden] [ref=f4e244]: "Sort by:"
          - combobox "Sort by:" [ref=f4e245]:
            - option "Featured" [selected]
            - 'option "Price: Low to High"'
            - 'option "Price: High to Low"'
            - option "Avg. Customer Review"
            - option "Newest Arrivals"
            - option "Best Sellers"
          - generic [aria-hidden] [ref=f4e248] [cursor=pointer]: Sort by:Featured
    - generic [ref=f4e250]:
      - generic [ref=f4e252]:
        - generic [ref=f4e254]:
          - generic [ref=f4e258]:
            - link "Sponsored ad from Xiaomi. \"Smartphones by Redmi.\" Shop Xiaomi." [ref=f4e259] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kctu00AUhtVWQAkgqixalB1ZZFExyXjsOHGRVY0vucdu7IRG2VgTe5JYdW3HM6Epi7wB4hXYsEHiJZB4BnbAnpdAaSokFvyr7-jcdP6T8w9___rx_WH-GUbCsOOMRpbUbb4p7gmnxzMah2tvLNcThw4cyNP1MuinZ8fpCAmofjue2AJdL-0eWxLmYucJkuSyJJflahlO9l1teojNYct02m7-JPcooOyKJ2n-6chyTN1uWu2JaRTe7-UOtxmP8Fn-Mbkm75K4HMaFF2wKVnE4C2kAGCWZvwApmVMgFB_Q2Gtbp4hNAV_QaxoAP4ki6vMwicH9EuCTLGAgJWHMaQb8JOY05uil5mDL8HS71zP1Ydu2XM-9wE63Z3qG6XaH9kXxPLcHjz5-_fTzwzejcEJWPAEsJdlVRMGCEcApz0JWfI4gFARRURQkViVJQAdtyzk70C_0Uzv_2tCwnjbaoIY32nKnOd5oA57ZgxX-VxttvtEGGw3fwbxwpM_NdbPz1seh0eYLSUVf9nOf9xecp-ysUrm5uSn_NanCeJJRVtkaU9G1BtQb0ACmaYpA0moiUEQoA4xEXTCrGBqycH7X4GV0prqahyGSRbEOkdVp1aVOS5nofQ1gqChKtV4Vh0iuQnjZGg-bTikNvCzw0mgRZCovLRjx_MwLAxWWotQjLIyZqsEWUkS3MXRe3WFt3BK7O2zU-_XODkVL7w52WB3XesZ97UAXJ9tRyxXNbtV-Mg0juo1ZlHD1P18ohSpJWYlszwn7goiZYAXrP9Ma4HE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
            - generic [ref=f4e260]:
              - generic [ref=f4e262]:
                - link "Xiaomi" [ref=f4e264] [cursor=pointer]:
                  - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kctu00AUhtVWQAkgqixalB1ZZFExyXjsOHGRVY0vucdu7IRG2VgTe5JYdW3HM6Epi7wB4hXYsEHiJZB4BnbAnpdAaSokFvyr7-jcdP6T8w9___rx_WH-GUbCsOOMRpbUbb4p7gmnxzMah2tvLNcThw4cyNP1MuinZ8fpCAmofjue2AJdL-0eWxLmYucJkuSyJJflahlO9l1teojNYct02m7-JPcooOyKJ2n-6chyTN1uWu2JaRTe7-UOtxmP8Fn-Mbkm75K4HMaFF2wKVnE4C2kAGCWZvwApmVMgFB_Q2Gtbp4hNAV_QaxoAP4ki6vMwicH9EuCTLGAgJWHMaQb8JOY05uil5mDL8HS71zP1Ydu2XM-9wE63Z3qG6XaH9kXxPLcHjz5-_fTzwzejcEJWPAEsJdlVRMGCEcApz0JWfI4gFARRURQkViVJQAdtyzk70C_0Uzv_2tCwnjbaoIY32nKnOd5oA57ZgxX-VxttvtEGGw3fwbxwpM_NdbPz1seh0eYLSUVf9nOf9xecp-ysUrm5uSn_NanCeJJRVtkaU9G1BtQb0ACmaYpA0moiUEQoA4xEXTCrGBqycH7X4GV0prqahyGSRbEOkdVp1aVOS5nofQ1gqChKtV4Vh0iuQnjZGg-bTikNvCzw0mgRZCovLRjx_MwLAxWWotQjLIyZqsEWUkS3MXRe3WFt3BK7O2zU-_XODkVL7w52WB3XesZ97UAXJ9tRyxXNbtV-Mg0juo1ZlHD1P18ohSpJWYlszwn7goiZYAXrP9Ma4HE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_logo&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                  - img "Xiaomi" [ref=f4e266]
                - generic [ref=f4e268]:
                  - link "Smartphones by Redmi" [ref=f4e269] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kctu00AUhtVWQAkgqixalB1ZZFExyXjsOHGRVY0vucdu7IRG2VgTe5JYdW3HM6Epi7wB4hXYsEHiJZB4BnbAnpdAaSokFvyr7-jcdP6T8w9___rx_WH-GUbCsOOMRpbUbb4p7gmnxzMah2tvLNcThw4cyNP1MuinZ8fpCAmofjue2AJdL-0eWxLmYucJkuSyJJflahlO9l1teojNYct02m7-JPcooOyKJ2n-6chyTN1uWu2JaRTe7-UOtxmP8Fn-Mbkm75K4HMaFF2wKVnE4C2kAGCWZvwApmVMgFB_Q2Gtbp4hNAV_QaxoAP4ki6vMwicH9EuCTLGAgJWHMaQb8JOY05uil5mDL8HS71zP1Ydu2XM-9wE63Z3qG6XaH9kXxPLcHjz5-_fTzwzejcEJWPAEsJdlVRMGCEcApz0JWfI4gFARRURQkViVJQAdtyzk70C_0Uzv_2tCwnjbaoIY32nKnOd5oA57ZgxX-VxttvtEGGw3fwbxwpM_NdbPz1seh0eYLSUVf9nOf9xecp-ysUrm5uSn_NanCeJJRVtkaU9G1BtQb0ACmaYpA0moiUEQoA4xEXTCrGBqycH7X4GV0prqahyGSRbEOkdVp1aVOS5nofQ1gqChKtV4Vh0iuQnjZGg-bTikNvCzw0mgRZCovLRjx_MwLAxWWotQjLIyZqsEWUkS3MXRe3WFt3BK7O2zU-_XODkVL7w52WB3XesZ97UAXJ9tRyxXNbtV-Mg0juo1ZlHD1P18ohSpJWYlszwn7goiZYAXrP9Ma4HE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_hl&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                    - generic [ref=f4e270]:
                      - generic [ref=f4e271]: Smartphones by Redmi
                      - generic [aria-hidden] [ref=f4e272]: Smartphones by Redmi
                  - generic [ref=f4e273]:
                    - button "Leave feedback on Sponsored ad" [ref=f4e277] [cursor=pointer]: Sponsored
                    - generic [ref=f4e279]: "|"
                    - generic [ref=f4e280]: Top 10 best-selling brand in this category
                    - generic [ref=f4e281]: "|"
                    - link "Shop Xiaomi" [ref=f4e283] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kctu00AUhtVWQAkgqixalB1ZZFExyXjsOHGRVY0vucdu7IRG2VgTe5JYdW3HM6Epi7wB4hXYsEHiJZB4BnbAnpdAaSokFvyr7-jcdP6T8w9___rx_WH-GUbCsOOMRpbUbb4p7gmnxzMah2tvLNcThw4cyNP1MuinZ8fpCAmofjue2AJdL-0eWxLmYucJkuSyJJflahlO9l1teojNYct02m7-JPcooOyKJ2n-6chyTN1uWu2JaRTe7-UOtxmP8Fn-Mbkm75K4HMaFF2wKVnE4C2kAGCWZvwApmVMgFB_Q2Gtbp4hNAV_QaxoAP4ki6vMwicH9EuCTLGAgJWHMaQb8JOY05uil5mDL8HS71zP1Ydu2XM-9wE63Z3qG6XaH9kXxPLcHjz5-_fTzwzejcEJWPAEsJdlVRMGCEcApz0JWfI4gFARRURQkViVJQAdtyzk70C_0Uzv_2tCwnjbaoIY32nKnOd5oA57ZgxX-VxttvtEGGw3fwbxwpM_NdbPz1seh0eYLSUVf9nOf9xecp-ysUrm5uSn_NanCeJJRVtkaU9G1BtQb0ACmaYpA0moiUEQoA4xEXTCrGBqycH7X4GV0prqahyGSRbEOkdVp1aVOS5nofQ1gqChKtV4Vh0iuQnjZGg-bTikNvCzw0mgRZCovLRjx_MwLAxWWotQjLIyZqsEWUkS3MXRe3WFt3BK7O2zU-_XODkVL7w52WB3XesZ97UAXJ9tRyxXNbtV-Mg0juo1ZlHD1P18ohSpJWYlszwn7goiZYAXrP9Ma4HE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_cta&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                      - generic [ref=f4e286]:
                        - text: Shop
                        - generic [ref=f4e287]: Xiaomi
              - group [ref=f4e290]:
                - generic [ref=f4e292]:
                  - group [ref=f4e294]:
                    - list [ref=f4e295]:
                      - listitem [ref=f4e296]:
                        - generic [ref=f4e298]:
                          - link [aria-hidden] [ref=f4e299] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdUWNGw67hpscOJAM7QylbDHNpi1dtgvbQgtmw6WZdoa2WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV40Pf3z_-uVe7bGB4OzSn89dZTR80ajA1vGS5tkuvFZPC59OfVmw3Zpcsf4xmyOITl9dLzxId2tvzNeYB4b_EClqW1HbarctL-4EZnRo2LML23eC2kn1PqH8RhSs9mju-rblDV1nYQ_qbyrVw18mxGJZe4Bv8esib2d5_SmPwCbPlhklgFNcxilgOKEANu7SPHTcFuIRECm9pQTExWpFY5EVOfh7AmJcEg4YznJBSxAXuaC5QM9M33AHoeWNx7Y1czw3CIOJ4Y_Gdjiwg9HMmzTOqhX56MOnj9_efh7UT_BGFIAzXN6sKEg5BoKKMuONJ0iWIexomoY6XUWB6MBx_f6BNbFaXu35wDQsdu6AnrE3139IjL05FaU33Rj_szeTvTndm8bvkdSPrMTeDS9fxkY2cESq6Oh9pfqukgrBeF-Stttt-18kKWES3kpEMuULpHWC85l_xkhYkpCtUlLqoplyHMZlmBFdbq4zosOepqiwp3Rhk5c6BBBoCqQR7WqAoG4EFI3IIEJQARDFcTdS1ViTl81Mx4w3cUmXenYFOwaHLtn9BLezsjY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - link [ref=f4e301] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdUWNGw67hpscOJAM7QylbDHNpi1dtgvbQgtmw6WZdoa2WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV40Pf3z_-uVe7bGB4OzSn89dZTR80ajA1vGS5tkuvFZPC59OfVmw3Zpcsf4xmyOITl9dLzxId2tvzNeYB4b_EClqW1HbarctL-4EZnRo2LML23eC2kn1PqH8RhSs9mju-rblDV1nYQ_qbyrVw18mxGJZe4Bv8esib2d5_SmPwCbPlhklgFNcxilgOKEANu7SPHTcFuIRECm9pQTExWpFY5EVOfh7AmJcEg4YznJBSxAXuaC5QM9M33AHoeWNx7Y1czw3CIOJ4Y_Gdjiwg9HMmzTOqhX56MOnj9_efh7UT_BGFIAzXN6sKEg5BoKKMuONJ0iWIexomoY6XUWB6MBx_f6BNbFaXu35wDQsdu6AnrE3139IjL05FaU33Rj_szeTvTndm8bvkdSPrMTeDS9fxkY2cESq6Oh9pfqukgrBeF-Stttt-18kKWES3kpEMuULpHWC85l_xkhYkpCtUlLqoplyHMZlmBFdbq4zosOepqiwp3Rhk5c6BBBoCqQR7WqAoG4EFI3IIEJQARDFcTdS1ViTl81Mx4w3cUmXenYFOwaHLtn9BLezsjY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_0_img&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - img "REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.9) 120Hz Display | 50MP Sony OIS Camera" [ref=f4e304]
                          - generic [ref=f4e306]:
                            - link [aria-hidden] [ref=f4e307] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdUWNGw67hpscOJAM7QylbDHNpi1dtgvbQgtmw6WZdoa2WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV40Pf3z_-uVe7bGB4OzSn89dZTR80ajA1vGS5tkuvFZPC59OfVmw3Zpcsf4xmyOITl9dLzxId2tvzNeYB4b_EClqW1HbarctL-4EZnRo2LML23eC2kn1PqH8RhSs9mju-rblDV1nYQ_qbyrVw18mxGJZe4Bv8esib2d5_SmPwCbPlhklgFNcxilgOKEANu7SPHTcFuIRECm9pQTExWpFY5EVOfh7AmJcEg4YznJBSxAXuaC5QM9M33AHoeWNx7Y1czw3CIOJ4Y_Gdjiwg9HMmzTOqhX56MOnj9_efh7UT_BGFIAzXN6sKEg5BoKKMuONJ0iWIexomoY6XUWB6MBx_f6BNbFaXu35wDQsdu6AnrE3139IjL05FaU33Rj_szeTvTndm8bvkdSPrMTeDS9fxkY2cESq6Oh9pfqukgrBeF-Stttt-18kKWES3kpEMuULpHWC85l_xkhYkpCtUlLqoplyHMZlmBFdbq4zosOepqiwp3Rhk5c6BBBoCqQR7WqAoG4EFI3IIEJQARDFcTdS1ViTl81Mx4w3cUmXenYFOwaHLtn9BLezsjY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - link "REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.9) 120Hz Display | 50MP Sony OIS Camera" [ref=f4e310] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdUWNGw67hpscOJAM7QylbDHNpi1dtgvbQgtmw6WZdoa2WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV40Pf3z_-uVe7bGB4OzSn89dZTR80ajA1vGS5tkuvFZPC59OfVmw3Zpcsf4xmyOITl9dLzxId2tvzNeYB4b_EClqW1HbarctL-4EZnRo2LML23eC2kn1PqH8RhSs9mju-rblDV1nYQ_qbyrVw18mxGJZe4Bv8esib2d5_SmPwCbPlhklgFNcxilgOKEANu7SPHTcFuIRECm9pQTExWpFY5EVOfh7AmJcEg4YznJBSxAXuaC5QM9M33AHoeWNx7Y1czw3CIOJ4Y_Gdjiwg9HMmzTOqhX56MOnj9_efh7UT_BGFIAzXN6sKEg5BoKKMuONJ0iWIexomoY6XUWB6MBx_f6BNbFaXu35wDQsdu6AnrE3139IjL05FaU33Rj_szeTvTndm8bvkdSPrMTeDS9fxkY2cESq6Oh9pfqukgrBeF-Stttt-18kKWES3kpEMuULpHWC85l_xkhYkpCtUlLqoplyHMZlmBFdbq4zosOepqiwp3Rhk5c6BBBoCqQR7WqAoG4EFI3IIEJQARDFcTdS1ViTl81Mx4w3cUmXenYFOwaHLtn9BLezsjY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e311]:
                                - generic [ref=f4e312]: REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.9) 120Hz Display | 50MP Sony OIS Camera
                                - generic [aria-hidden] [ref=f4e313]: REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dim…
                            - link "Rated 4.1 out of 5 stars by 1109 reviews. Go to review section." [ref=f4e314] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdUWNGw67hpscOJAM7QylbDHNpi1dtgvbQgtmw6WZdoa2WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV40Pf3z_-uVe7bGB4OzSn89dZTR80ajA1vGS5tkuvFZPC59OfVmw3Zpcsf4xmyOITl9dLzxId2tvzNeYB4b_EClqW1HbarctL-4EZnRo2LML23eC2kn1PqH8RhSs9mju-rblDV1nYQ_qbyrVw18mxGJZe4Bv8esib2d5_SmPwCbPlhklgFNcxilgOKEANu7SPHTcFuIRECm9pQTExWpFY5EVOfh7AmJcEg4YznJBSxAXuaC5QM9M33AHoeWNx7Y1czw3CIOJ4Y_Gdjiwg9HMmzTOqhX56MOnj9_efh7UT_BGFIAzXN6sKEg5BoKKMuONJ0iWIexomoY6XUWB6MBx_f6BNbFaXu35wDQsdu6AnrE3139IjL05FaU33Rj_szeTvTndm8bvkdSPrMTeDS9fxkY2cESq6Oh9pfqukgrBeF-Stttt-18kKWES3kpEMuULpHWC85l_xkhYkpCtUlLqoplyHMZlmBFdbq4zosOepqiwp3Rhk5c6BBBoCqQR7WqAoG4EFI3IIEJQARDFcTdS1ViTl81Mx4w3cUmXenYFOwaHLtn9BLezsjY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_0_rating&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e#customerReviews
                              - generic [ref=f4e315]:
                                - generic [ref=f4e316]: "4.1"
                                - generic [ref=f4e317]: 4.1 out of 5 stars.
                                - generic [ref=f4e319]: (1.1k)
                            - link "₹41,999.00" [ref=f4e321] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdUWNGw67hpscOJAM7QylbDHNpi1dtgvbQgtmw6WZdoa2WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV40Pf3z_-uVe7bGB4OzSn89dZTR80ajA1vGS5tkuvFZPC59OfVmw3Zpcsf4xmyOITl9dLzxId2tvzNeYB4b_EClqW1HbarctL-4EZnRo2LML23eC2kn1PqH8RhSs9mju-rblDV1nYQ_qbyrVw18mxGJZe4Bv8esib2d5_SmPwCbPlhklgFNcxilgOKEANu7SPHTcFuIRECm9pQTExWpFY5EVOfh7AmJcEg4YznJBSxAXuaC5QM9M33AHoeWNx7Y1czw3CIOJ4Y_Gdjiwg9HMmzTOqhX56MOnj9_efh7UT_BGFIAzXN6sKEg5BoKKMuONJ0iWIexomoY6XUWB6MBx_f6BNbFaXu35wDQsdu6AnrE3139IjL05FaU33Rj_szeTvTndm8bvkdSPrMTeDS9fxkY2cESq6Oh9pfqukgrBeF-Stttt-18kKWES3kpEMuULpHWC85l_xkhYkpCtUlLqoplyHMZlmBFdbq4zosOepqiwp3Rhk5c6BBBoCqQR7WqAoG4EFI3IIEJQARDFcTdS1ViTl81Mx4w3cUmXenYFOwaHLtn9BLezsjY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_0_price&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e323]:
                                - generic [ref=f4e324]: ₹41,999.00
                                - generic [aria-hidden] [ref=f4e325]:
                                  - text: ₹
                                  - generic [ref=f4e326]:
                                    - text: 41,999
                                    - generic [ref=f4e327]: .
                                  - text: "00"
                            - generic [ref=f4e328]: "M.R.P: ₹54,999.00"
                      - listitem [ref=f4e331]:
                        - generic [ref=f4e333]:
                          - link [aria-hidden] [ref=f4e334] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbdRc1bjjsGm5y4EAy0BlK2WKaTb-ELmwLLRjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTjo9_fP_65V7lkY7g9MqfzVx52H9RK8HG2ZJm6T6cKxe5Tye-JNh-Q65Z74zNEEQXr-YLD9L9xhvxDeaB7j9AstKUlabSaUqLO4ERHev2dGD7TlA5L98nlN-InFUezlzfNr2-6yxsq_qmVD7-ZUIslpUTfItf51kzzapPeAS2WbpMKQGc4iJOAMMrCmDtLs1Cx20gHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01PB11wpNbzSyzanjuUEYjHV_OLJDyw6GU29cuyyXpNMPnz5-e_vZqp7jrcgBZ7i4WVOQcAwEFUXKa4-RJEHYVlUVtTuyDNGR4_q9I3NsNrzKM8vQTfbcAV39YGz-sNIPxkQU3mSr_8_BWB2MycHQf49V9dRc2fv-1ctYTy1HJLKG3pfK70qJEIz3Wq3dbtf8F6m1Yi28a5GWIQ2Q2p0P2sNLRsKChGydkEIT9YTjMC7ClGhSfZMSDXZVWYFduQPrvNAgQECVIY1oRwUEdSIgq0QCEYIygCiOO5GixKq0rKcaZryOC7rU0mvY1jl0yf4nq7WyGg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_1_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - link [ref=f4e336] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbdRc1bjjsGm5y4EAy0BlK2WKaTb-ELmwLLRjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTjo9_fP_65V7lkY7g9MqfzVx52H9RK8HG2ZJm6T6cKxe5Tye-JNh-Q65Z74zNEEQXr-YLD9L9xhvxDeaB7j9AstKUlabSaUqLO4ERHev2dGD7TlA5L98nlN-InFUezlzfNr2-6yxsq_qmVD7-ZUIslpUTfItf51kzzapPeAS2WbpMKQGc4iJOAMMrCmDtLs1Cx20gHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01PB11wpNbzSyzanjuUEYjHV_OLJDyw6GU29cuyyXpNMPnz5-e_vZqp7jrcgBZ7i4WVOQcAwEFUXKa4-RJEHYVlUVtTuyDNGR4_q9I3NsNrzKM8vQTfbcAV39YGz-sNIPxkQU3mSr_8_BWB2MycHQf49V9dRc2fv-1ctYTy1HJLKG3pfK70qJEIz3Wq3dbtf8F6m1Yi28a5GWIQ2Q2p0P2sNLRsKChGydkEIT9YTjMC7ClGhSfZMSDXZVWYFduQPrvNAgQECVIY1oRwUEdSIgq0QCEYIygCiOO5GixKq0rKcaZryOC7rU0mvY1jl0yf4nq7WyGg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_1_img&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - img "REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e339]
                          - generic [ref=f4e341]:
                            - link [aria-hidden] [ref=f4e342] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbdRc1bjjsGm5y4EAy0BlK2WKaTb-ELmwLLRjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTjo9_fP_65V7lkY7g9MqfzVx52H9RK8HG2ZJm6T6cKxe5Tye-JNh-Q65Z74zNEEQXr-YLD9L9xhvxDeaB7j9AstKUlabSaUqLO4ERHev2dGD7TlA5L98nlN-InFUezlzfNr2-6yxsq_qmVD7-ZUIslpUTfItf51kzzapPeAS2WbpMKQGc4iJOAMMrCmDtLs1Cx20gHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01PB11wpNbzSyzanjuUEYjHV_OLJDyw6GU29cuyyXpNMPnz5-e_vZqp7jrcgBZ7i4WVOQcAwEFUXKa4-RJEHYVlUVtTuyDNGR4_q9I3NsNrzKM8vQTfbcAV39YGz-sNIPxkQU3mSr_8_BWB2MycHQf49V9dRc2fv-1ctYTy1HJLKG3pfK70qJEIz3Wq3dbtf8F6m1Yi28a5GWIQ2Q2p0P2sNLRsKChGydkEIT9YTjMC7ClGhSfZMSDXZVWYFduQPrvNAgQECVIY1oRwUEdSIgq0QCEYIygCiOO5GixKq0rKcaZryOC7rU0mvY1jl0yf4nq7WyGg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_1_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - link "REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e345] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbdRc1bjjsGm5y4EAy0BlK2WKaTb-ELmwLLRjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTjo9_fP_65V7lkY7g9MqfzVx52H9RK8HG2ZJm6T6cKxe5Tye-JNh-Q65Z74zNEEQXr-YLD9L9xhvxDeaB7j9AstKUlabSaUqLO4ERHev2dGD7TlA5L98nlN-InFUezlzfNr2-6yxsq_qmVD7-ZUIslpUTfItf51kzzapPeAS2WbpMKQGc4iJOAMMrCmDtLs1Cx20gHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01PB11wpNbzSyzanjuUEYjHV_OLJDyw6GU29cuyyXpNMPnz5-e_vZqp7jrcgBZ7i4WVOQcAwEFUXKa4-RJEHYVlUVtTuyDNGR4_q9I3NsNrzKM8vQTfbcAV39YGz-sNIPxkQU3mSr_8_BWB2MycHQf49V9dRc2fv-1ctYTy1HJLKG3pfK70qJEIz3Wq3dbtf8F6m1Yi28a5GWIQ2Q2p0P2sNLRsKChGydkEIT9YTjMC7ClGhSfZMSDXZVWYFduQPrvNAgQECVIY1oRwUEdSIgq0QCEYIygCiOO5GixKq0rKcaZryOC7rU0mvY1jl0yf4nq7WyGg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_1_title&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e346]:
                                - generic [ref=f4e347]: REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                                - generic [aria-hidden] [ref=f4e348]: REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 85…
                            - link "Rated 4.1 out of 5 stars by 1109 reviews. Go to review section." [ref=f4e349] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbdRc1bjjsGm5y4EAy0BlK2WKaTb-ELmwLLRjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTjo9_fP_65V7lkY7g9MqfzVx52H9RK8HG2ZJm6T6cKxe5Tye-JNh-Q65Z74zNEEQXr-YLD9L9xhvxDeaB7j9AstKUlabSaUqLO4ERHev2dGD7TlA5L98nlN-InFUezlzfNr2-6yxsq_qmVD7-ZUIslpUTfItf51kzzapPeAS2WbpMKQGc4iJOAMMrCmDtLs1Cx20gHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01PB11wpNbzSyzanjuUEYjHV_OLJDyw6GU29cuyyXpNMPnz5-e_vZqp7jrcgBZ7i4WVOQcAwEFUXKa4-RJEHYVlUVtTuyDNGR4_q9I3NsNrzKM8vQTfbcAV39YGz-sNIPxkQU3mSr_8_BWB2MycHQf49V9dRc2fv-1ctYTy1HJLKG3pfK70qJEIz3Wq3dbtf8F6m1Yi28a5GWIQ2Q2p0P2sNLRsKChGydkEIT9YTjMC7ClGhSfZMSDXZVWYFduQPrvNAgQECVIY1oRwUEdSIgq0QCEYIygCiOO5GixKq0rKcaZryOC7rU0mvY1jl0yf4nq7WyGg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_1_rating&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e#customerReviews
                              - generic [ref=f4e350]:
                                - generic [ref=f4e351]: "4.1"
                                - generic [ref=f4e352]: 4.1 out of 5 stars.
                                - generic [ref=f4e354]: (1.1k)
                            - link "₹41,999.00" [ref=f4e356] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbdRc1bjjsGm5y4EAy0BlK2WKaTb-ELmwLLRjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTjo9_fP_65V7lkY7g9MqfzVx52H9RK8HG2ZJm6T6cKxe5Tye-JNh-Q65Z74zNEEQXr-YLD9L9xhvxDeaB7j9AstKUlabSaUqLO4ERHev2dGD7TlA5L98nlN-InFUezlzfNr2-6yxsq_qmVD7-ZUIslpUTfItf51kzzapPeAS2WbpMKQGc4iJOAMMrCmDtLs1Cx20gHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01PB11wpNbzSyzanjuUEYjHV_OLJDyw6GU29cuyyXpNMPnz5-e_vZqp7jrcgBZ7i4WVOQcAwEFUXKa4-RJEHYVlUVtTuyDNGR4_q9I3NsNrzKM8vQTfbcAV39YGz-sNIPxkQU3mSr_8_BWB2MycHQf49V9dRc2fv-1ctYTy1HJLKG3pfK70qJEIz3Wq3dbtf8F6m1Yi28a5GWIQ2Q2p0P2sNLRsKChGydkEIT9YTjMC7ClGhSfZMSDXZVWYFduQPrvNAgQECVIY1oRwUEdSIgq0QCEYIygCiOO5GixKq0rKcaZryOC7rU0mvY1jl0yf4nq7WyGg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_1_price&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e358]:
                                - generic [ref=f4e359]: ₹41,999.00
                                - generic [aria-hidden] [ref=f4e360]:
                                  - text: ₹
                                  - generic [ref=f4e361]:
                                    - text: 41,999
                                    - generic [ref=f4e362]: .
                                  - text: "00"
                            - generic [ref=f4e363]: "M.R.P: ₹54,999.00"
                      - listitem [aria-hidden] [ref=f4e366]:
                        - generic [ref=f4e368]:
                          - link [aria-hidden] [ref=f4e369] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbFVHjhsOu4SYHDiQDnaEtFNNs2tJly0cLBcyGSzPtDLRZth06g6AH_oHxYOLZi3_ExN_gTb37J4wfMfE5vclzeJOnFBV_fP_65V75sYHgfOAvFq487L-oFmD9bEXT5BBcq53Mp1NfEuywJWPWPWMLBFHn1fXSg_Sw9UZ8i_nM8B8iWW3IakNVGtLyzswMi4Y9v7J9Z1Y-L90nlN-IjJUfLVzftry-6yztXuVNoVT8ZQIsVuUH-Ba_ztJGklae8hDs0mSVUAI4xXkUA4bXFMDqXZoGjltHPAQipreUgCjbbGgkkiwFf09AhHPCAcNJKmgOoiwVNBXomekbbi-wvNHItuaO586C2cTwhyM76Nmz4dybVC9KBen0w6eP395-7lXO8U5kgDOc32woiDkGgoo84dUnSJIgbGmahlqKLEN04rh-98SaWHWv_LxnGha7dEDbOJrbP6yNozkVuTfdGf9zNNdHc3o0jd9jXTm11vahP3gZGUnPEbGso_eF0rtCLATj3WZzv983_kVqrlkT75ukaUpXSLvsjDuDC0aCnARsE5NcF7WY4yDKg4ToUm2bEB22NVmFbVmBNZ7rELSAJkMaUkUDBCkhkDUigRBBGUAURUqoqpEmrWqJjhmv4Zyu9GQMWwaHLjn8BKh8shM&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_2_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - link [ref=f4e371] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbFVHjhsOu4SYHDiQDnaEtFNNs2tJly0cLBcyGSzPtDLRZth06g6AH_oHxYOLZi3_ExN_gTb37J4wfMfE5vclzeJOnFBV_fP_65V75sYHgfOAvFq487L-oFmD9bEXT5BBcq53Mp1NfEuywJWPWPWMLBFHn1fXSg_Sw9UZ8i_nM8B8iWW3IakNVGtLyzswMi4Y9v7J9Z1Y-L90nlN-IjJUfLVzftry-6yztXuVNoVT8ZQIsVuUH-Ba_ztJGklae8hDs0mSVUAI4xXkUA4bXFMDqXZoGjltHPAQipreUgCjbbGgkkiwFf09AhHPCAcNJKmgOoiwVNBXomekbbi-wvNHItuaO586C2cTwhyM76Nmz4dybVC9KBen0w6eP395-7lXO8U5kgDOc32woiDkGgoo84dUnSJIgbGmahlqKLEN04rh-98SaWHWv_LxnGha7dEDbOJrbP6yNozkVuTfdGf9zNNdHc3o0jd9jXTm11vahP3gZGUnPEbGso_eF0rtCLATj3WZzv983_kVqrlkT75ukaUpXSLvsjDuDC0aCnARsE5NcF7WY4yDKg4ToUm2bEB22NVmFbVmBNZ7rELSAJkMaUkUDBCkhkDUigRBBGUAURUqoqpEmrWqJjhmv4Zyu9GQMWwaHLjn8BKh8shM&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_2_img&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - generic [ref=f4e376]:
                            - link [aria-hidden] [ref=f4e377] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbFVHjhsOu4SYHDiQDnaEtFNNs2tJly0cLBcyGSzPtDLRZth06g6AH_oHxYOLZi3_ExN_gTb37J4wfMfE5vclzeJOnFBV_fP_65V75sYHgfOAvFq487L-oFmD9bEXT5BBcq53Mp1NfEuywJWPWPWMLBFHn1fXSg_Sw9UZ8i_nM8B8iWW3IakNVGtLyzswMi4Y9v7J9Z1Y-L90nlN-IjJUfLVzftry-6yztXuVNoVT8ZQIsVuUH-Ba_ztJGklae8hDs0mSVUAI4xXkUA4bXFMDqXZoGjltHPAQipreUgCjbbGgkkiwFf09AhHPCAcNJKmgOoiwVNBXomekbbi-wvNHItuaO586C2cTwhyM76Nmz4dybVC9KBen0w6eP395-7lXO8U5kgDOc32woiDkGgoo84dUnSJIgbGmahlqKLEN04rh-98SaWHWv_LxnGha7dEDbOJrbP6yNozkVuTfdGf9zNNdHc3o0jd9jXTm11vahP3gZGUnPEbGso_eF0rtCLATj3WZzv983_kVqrlkT75ukaUpXSLvsjDuDC0aCnARsE5NcF7WY4yDKg4ToUm2bEB22NVmFbVmBNZ7rELSAJkMaUkUDBCkhkDUigRBBGUAURUqoqpEmrWqJjhmv4Zyu9GQMWwaHLjn8BKh8shM&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_2_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - link [ref=f4e380] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbFVHjhsOu4SYHDiQDnaEtFNNs2tJly0cLBcyGSzPtDLRZth06g6AH_oHxYOLZi3_ExN_gTb37J4wfMfE5vclzeJOnFBV_fP_65V75sYHgfOAvFq487L-oFmD9bEXT5BBcq53Mp1NfEuywJWPWPWMLBFHn1fXSg_Sw9UZ8i_nM8B8iWW3IakNVGtLyzswMi4Y9v7J9Z1Y-L90nlN-IjJUfLVzftry-6yztXuVNoVT8ZQIsVuUH-Ba_ztJGklae8hDs0mSVUAI4xXkUA4bXFMDqXZoGjltHPAQipreUgCjbbGgkkiwFf09AhHPCAcNJKmgOoiwVNBXomekbbi-wvNHItuaO586C2cTwhyM76Nmz4dybVC9KBen0w6eP395-7lXO8U5kgDOc32woiDkGgoo84dUnSJIgbGmahlqKLEN04rh-98SaWHWv_LxnGha7dEDbOJrbP6yNozkVuTfdGf9zNNdHc3o0jd9jXTm11vahP3gZGUnPEbGso_eF0rtCLATj3WZzv983_kVqrlkT75ukaUpXSLvsjDuDC0aCnARsE5NcF7WY4yDKg4ToUm2bEB22NVmFbVmBNZ7rELSAJkMaUkUDBCkhkDUigRBBGUAURUqoqpEmrWqJjhmv4Zyu9GQMWwaHLjn8BKh8shM&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_2_title&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e381]:
                                - generic [ref=f4e382]: REDMI Turbo 5 (8GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                                - generic [aria-hidden] [ref=f4e383]: REDMI Turbo 5 (8GB + 256GB) Nitro Blue | Dimensity 8500…
                            - link [ref=f4e384] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbFVHjhsOu4SYHDiQDnaEtFNNs2tJly0cLBcyGSzPtDLRZth06g6AH_oHxYOLZi3_ExN_gTb37J4wfMfE5vclzeJOnFBV_fP_65V75sYHgfOAvFq487L-oFmD9bEXT5BBcq53Mp1NfEuywJWPWPWMLBFHn1fXSg_Sw9UZ8i_nM8B8iWW3IakNVGtLyzswMi4Y9v7J9Z1Y-L90nlN-IjJUfLVzftry-6yztXuVNoVT8ZQIsVuUH-Ba_ztJGklae8hDs0mSVUAI4xXkUA4bXFMDqXZoGjltHPAQipreUgCjbbGgkkiwFf09AhHPCAcNJKmgOoiwVNBXomekbbi-wvNHItuaO586C2cTwhyM76Nmz4dybVC9KBen0w6eP395-7lXO8U5kgDOc32woiDkGgoo84dUnSJIgbGmahlqKLEN04rh-98SaWHWv_LxnGha7dEDbOJrbP6yNozkVuTfdGf9zNNdHc3o0jd9jXTm11vahP3gZGUnPEbGso_eF0rtCLATj3WZzv983_kVqrlkT75ukaUpXSLvsjDuDC0aCnARsE5NcF7WY4yDKg4ToUm2bEB22NVmFbVmBNZ7rELSAJkMaUkUDBCkhkDUigRBBGUAURUqoqpEmrWqJjhmv4Zyu9GQMWwaHLjn8BKh8shM&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_2_rating&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e#customerReviews
                              - generic [ref=f4e385]:
                                - generic [ref=f4e386]: "4.1"
                                - generic [ref=f4e387]: 4.1 out of 5 stars.
                                - generic [ref=f4e389]: (1.1k)
                            - link [ref=f4e391] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMbFVHjhsOu4SYHDiQDnaEtFNNs2tJly0cLBcyGSzPtDLRZth06g6AH_oHxYOLZi3_ExN_gTb37J4wfMfE5vclzeJOnFBV_fP_65V75sYHgfOAvFq487L-oFmD9bEXT5BBcq53Mp1NfEuywJWPWPWMLBFHn1fXSg_Sw9UZ8i_nM8B8iWW3IakNVGtLyzswMi4Y9v7J9Z1Y-L90nlN-IjJUfLVzftry-6yztXuVNoVT8ZQIsVuUH-Ba_ztJGklae8hDs0mSVUAI4xXkUA4bXFMDqXZoGjltHPAQipreUgCjbbGgkkiwFf09AhHPCAcNJKmgOoiwVNBXomekbbi-wvNHItuaO586C2cTwhyM76Nmz4dybVC9KBen0w6eP395-7lXO8U5kgDOc32woiDkGgoo84dUnSJIgbGmahlqKLEN04rh-98SaWHWv_LxnGha7dEDbOJrbP6yNozkVuTfdGf9zNNdHc3o0jd9jXTm11vahP3gZGUnPEbGso_eF0rtCLATj3WZzv983_kVqrlkT75ukaUpXSLvsjDuDC0aCnARsE5NcF7WY4yDKg4ToUm2bEB22NVmFbVmBNZ7rELSAJkMaUkUDBCkhkDUigRBBGUAURUqoqpEmrWqJjhmv4Zyu9GQMWwaHLjn8BKh8shM&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_2_price&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e393]:
                                - generic [ref=f4e394]: ₹41,999.00
                                - generic [aria-hidden] [ref=f4e395]:
                                  - text: ₹
                                  - generic [ref=f4e396]:
                                    - text: 41,999
                                    - generic [ref=f4e397]: .
                                  - text: "00"
                            - generic [ref=f4e398]: "M.R.P: ₹54,999.00"
                      - listitem [aria-hidden] [ref=f4e401]:
                        - generic [ref=f4e403]:
                          - link [aria-hidden] [ref=f4e404] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHrHs4eTc0aikkRslZLSEM2U4ygpo4wYcnOdEQN2dUWDXUWFTV4aEChAVyCNqaoDgtQYKDqRQYygAiBKEjXWtESXF83MwIw3cUkXRnYFOyaHHtn9BLCxsic&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_3_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - link [ref=f4e406] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHrHs4eTc0aikkRslZLSEM2U4ygpo4wYcnOdEQN2dUWDXUWFTV4aEChAVyCNqaoDgtQYKDqRQYygAiBKEjXWtESXF83MwIw3cUkXRnYFOyaHHtn9BLCxsic&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_3_img&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - generic [ref=f4e411]:
                            - link [aria-hidden] [ref=f4e412] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHrHs4eTc0aikkRslZLSEM2U4ygpo4wYcnOdEQN2dUWDXUWFTV4aEChAVyCNqaoDgtQYKDqRQYygAiBKEjXWtESXF83MwIw3cUkXRnYFOyaHHtn9BLCxsic&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_3_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - link [ref=f4e415] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHrHs4eTc0aikkRslZLSEM2U4ygpo4wYcnOdEQN2dUWDXUWFTV4aEChAVyCNqaoDgtQYKDqRQYygAiBKEjXWtESXF83MwIw3cUkXRnYFOyaHHtn9BLCxsic&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_3_title&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e416]:
                                - generic [ref=f4e417]: REDMI Turbo 5 (12GB + 256GB) Turbo White | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                                - generic [aria-hidden] [ref=f4e418]: REDMI Turbo 5 (12GB + 256GB) Turbo White | Dimensity 850…
                            - link [ref=f4e419] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHrHs4eTc0aikkRslZLSEM2U4ygpo4wYcnOdEQN2dUWDXUWFTV4aEChAVyCNqaoDgtQYKDqRQYygAiBKEjXWtESXF83MwIw3cUkXRnYFOyaHHtn9BLCxsic&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_3_rating&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e#customerReviews
                              - generic [ref=f4e420]:
                                - generic [ref=f4e421]: "4.2"
                                - generic [ref=f4e422]: 4.2 out of 5 stars.
                                - generic [ref=f4e424]: (406)
                            - link [ref=f4e426] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHrHs4eTc0aikkRslZLSEM2U4ygpo4wYcnOdEQN2dUWDXUWFTV4aEChAVyCNqaoDgtQYKDqRQYygAiBKEjXWtESXF83MwIw3cUkXRnYFOyaHHtn9BLCxsic&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_3_price&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e428]:
                                - generic [ref=f4e429]: ₹46,999.00
                                - generic [aria-hidden] [ref=f4e430]:
                                  - text: ₹
                                  - generic [ref=f4e431]:
                                    - text: 46,999
                                    - generic [ref=f4e432]: .
                                  - text: "00"
                            - generic [ref=f4e433]: "M.R.P: ₹57,999.00"
                      - listitem [aria-hidden] [ref=f4e436]:
                        - generic [ref=f4e438]:
                          - link [aria-hidden] [ref=f4e439] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMblUWNGw67hpscOJAMdIa2bDHNpl-yXdgWChjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTics_vn_9cq_6yEBwehXMZp486L-ol2DzdEmzdB_O1fM8oONAEmy_Idesd8pmCKLzV_OFD-l-4w_5BvOJETxAstqS1ZaqtKTFnYkZlQ1neukE7qR6VrlPKL8ROas-nHmBY_l9z104du1NqVL-ZUIsltVjfItf51krzWpPeAS2WbpMKQGc4iJOAMMrCmD9Ls1C12siHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01AwMzw4tfzh0rKnre5NwMjKCwdAJbWcymPqj-kWlJJ18-PTx29vPdu0Mb0UOOMPFzZqChGMgqChSXn-MJAnCjqZpqKPIMkRHrhf0jqyR1fSrz2zTsNhzF3SNg7n5w8o4mGNR-OOt8T8Hc3UwxwfT-D1WtRNr5ez7Vy9jI7Vdkcg6el-qvCslQjDea7d3u13rX6T2irXxrk3apnSJNGXeHdoXjIQFCdk6IYUuGgnHYVyEKdGlxiYlOuxqsgq7sgIbvNAhUIAmQxpRRQMEKRGQNSKBCEEZQBTHSqSqsSYtG6mOGW_ggi719Bp2DA49sv8Jq-yyHA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_4_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - link [ref=f4e441] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMblUWNGw67hpscOJAMdIa2bDHNpl-yXdgWChjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTics_vn_9cq_6yEBwehXMZp486L-ol2DzdEmzdB_O1fM8oONAEmy_Idesd8pmCKLzV_OFD-l-4w_5BvOJETxAstqS1ZaqtKTFnYkZlQ1neukE7qR6VrlPKL8ROas-nHmBY_l9z104du1NqVL-ZUIsltVjfItf51krzWpPeAS2WbpMKQGc4iJOAMMrCmD9Ls1C12siHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01AwMzw4tfzh0rKnre5NwMjKCwdAJbWcymPqj-kWlJJ18-PTx29vPdu0Mb0UOOMPFzZqChGMgqChSXn-MJAnCjqZpqKPIMkRHrhf0jqyR1fSrz2zTsNhzF3SNg7n5w8o4mGNR-OOt8T8Hc3UwxwfT-D1WtRNr5ez7Vy9jI7Vdkcg6el-qvCslQjDea7d3u13rX6T2irXxrk3apnSJNGXeHdoXjIQFCdk6IYUuGgnHYVyEKdGlxiYlOuxqsgq7sgIbvNAhUIAmQxpRRQMEKRGQNSKBCEEZQBTHSqSqsSYtG6mOGW_ggi719Bp2DA49sv8Jq-yyHA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_4_img&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - generic [ref=f4e446]:
                            - link [aria-hidden] [ref=f4e447] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMblUWNGw67hpscOJAMdIa2bDHNpl-yXdgWChjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTics_vn_9cq_6yEBwehXMZp486L-ol2DzdEmzdB_O1fM8oONAEmy_Idesd8pmCKLzV_OFD-l-4w_5BvOJETxAstqS1ZaqtKTFnYkZlQ1neukE7qR6VrlPKL8ROas-nHmBY_l9z104du1NqVL-ZUIsltVjfItf51krzWpPeAS2WbpMKQGc4iJOAMMrCmD9Ls1C12siHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01AwMzw4tfzh0rKnre5NwMjKCwdAJbWcymPqj-kWlJJ18-PTx29vPdu0Mb0UOOMPFzZqChGMgqChSXn-MJAnCjqZpqKPIMkRHrhf0jqyR1fSrz2zTsNhzF3SNg7n5w8o4mGNR-OOt8T8Hc3UwxwfT-D1WtRNr5ez7Vy9jI7Vdkcg6el-qvCslQjDea7d3u13rX6T2irXxrk3apnSJNGXeHdoXjIQFCdk6IYUuGgnHYVyEKdGlxiYlOuxqsgq7sgIbvNAhUIAmQxpRRQMEKRGQNSKBCEEZQBTHSqSqsSYtG6mOGW_ggi719Bp2DA49sv8Jq-yyHA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_4_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - link [ref=f4e450] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMblUWNGw67hpscOJAMdIa2bDHNpl-yXdgWChjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTics_vn_9cq_6yEBwehXMZp486L-ol2DzdEmzdB_O1fM8oONAEmy_Idesd8pmCKLzV_OFD-l-4w_5BvOJETxAstqS1ZaqtKTFnYkZlQ1neukE7qR6VrlPKL8ROas-nHmBY_l9z104du1NqVL-ZUIsltVjfItf51krzWpPeAS2WbpMKQGc4iJOAMMrCmD9Ls1C12siHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01AwMzw4tfzh0rKnre5NwMjKCwdAJbWcymPqj-kWlJJ18-PTx29vPdu0Mb0UOOMPFzZqChGMgqChSXn-MJAnCjqZpqKPIMkRHrhf0jqyR1fSrz2zTsNhzF3SNg7n5w8o4mGNR-OOt8T8Hc3UwxwfT-D1WtRNr5ez7Vy9jI7Vdkcg6el-qvCslQjDea7d3u13rX6T2irXxrk3apnSJNGXeHdoXjIQFCdk6IYUuGgnHYVyEKdGlxiYlOuxqsgq7sgIbvNAhUIAmQxpRRQMEKRGQNSKBCEEZQBTHSqSqsSYtG6mOGW_ggi719Bp2DA49sv8Jq-yyHA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_4_title&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e451]:
                                - generic [ref=f4e452]: REDMI Turbo 5 (12GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                                - generic [aria-hidden] [ref=f4e453]: REDMI Turbo 5 (12GB + 256GB) Asphalt Black | Dimensity 85…
                            - link [ref=f4e454] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMblUWNGw67hpscOJAMdIa2bDHNpl-yXdgWChjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTics_vn_9cq_6yEBwehXMZp486L-ol2DzdEmzdB_O1fM8oONAEmy_Idesd8pmCKLzV_OFD-l-4w_5BvOJETxAstqS1ZaqtKTFnYkZlQ1neukE7qR6VrlPKL8ROas-nHmBY_l9z104du1NqVL-ZUIsltVjfItf51krzWpPeAS2WbpMKQGc4iJOAMMrCmD9Ls1C12siHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01AwMzw4tfzh0rKnre5NwMjKCwdAJbWcymPqj-kWlJJ18-PTx29vPdu0Mb0UOOMPFzZqChGMgqChSXn-MJAnCjqZpqKPIMkRHrhf0jqyR1fSrz2zTsNhzF3SNg7n5w8o4mGNR-OOt8T8Hc3UwxwfT-D1WtRNr5ez7Vy9jI7Vdkcg6el-qvCslQjDea7d3u13rX6T2irXxrk3apnSJNGXeHdoXjIQFCdk6IYUuGgnHYVyEKdGlxiYlOuxqsgq7sgIbvNAhUIAmQxpRRQMEKRGQNSKBCEEZQBTHSqSqsSYtG6mOGW_ggi719Bp2DA49sv8Jq-yyHA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_4_rating&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e#customerReviews
                              - generic [ref=f4e455]:
                                - generic [ref=f4e456]: "4.2"
                                - generic [ref=f4e457]: 4.2 out of 5 stars.
                                - generic [ref=f4e459]: (406)
                            - link [ref=f4e461] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkE2P0kAAhoMblUWNGw67hpscOJAMdIa2bDHNpl-yXdgWChjCpZl2Btos2w6dQdAD_8B4MPHsxT9i4m_wpt79E8aPmPic3uQ5vMlTics_vn_9cq_6yEBwehXMZp486L-ol2DzdEmzdB_O1fM8oONAEmy_Idesd8pmCKLzV_OFD-l-4w_5BvOJETxAstqS1ZaqtKTFnYkZlQ1neukE7qR6VrlPKL8ROas-nHmBY_l9z104du1NqVL-ZUIsltVjfItf51krzWpPeAS2WbpMKQGc4iJOAMMrCmD9Ls1C12siHgGR0FtKQJyv1zQWaZ6BvycgxgXhgOE0E7QAcZ4Jmgn01AwMzw4tfzh0rKnre5NwMjKCwdAJbWcymPqj-kWlJJ18-PTx29vPdu0Mb0UOOMPFzZqChGMgqChSXn-MJAnCjqZpqKPIMkRHrhf0jqyR1fSrz2zTsNhzF3SNg7n5w8o4mGNR-OOt8T8Hc3UwxwfT-D1WtRNr5ez7Vy9jI7Vdkcg6el-qvCslQjDea7d3u13rX6T2irXxrk3apnSJNGXeHdoXjIQFCdk6IYUuGgnHYVyEKdGlxiYlOuxqsgq7sgIbvNAhUIAmQxpRRQMEKRGQNSKBCEEZQBTHSqSqsSYtG6mOGW_ggi719Bp2DA49sv8Jq-yyHA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_4_price&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e463]:
                                - generic [ref=f4e464]: ₹46,999.00
                                - generic [aria-hidden] [ref=f4e465]:
                                  - text: ₹
                                  - generic [ref=f4e466]:
                                    - text: 46,999
                                    - generic [ref=f4e467]: .
                                  - text: "00"
                            - generic [ref=f4e468]: "M.R.P: ₹57,999.00"
                      - listitem [aria-hidden] [ref=f4e471]:
                        - generic [ref=f4e473]:
                          - link [aria-hidden] [ref=f4e474] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHp3Ynfm54xEJYnYKiWlIZopx1FSRhkx5OY6Iwbs6ooGu4oKm7w0INCArkAaU1UHBKkxUHQigxhBBUCUJGqsaYkuL5qZgRlv4pIujOwKdkwOPbL7Ca3KsiE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_5_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - link [ref=f4e476] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHp3Ynfm54xEJYnYKiWlIZopx1FSRhkx5OY6Iwbs6ooGu4oKm7w0INCArkAaU1UHBKkxUHQigxhBBUCUJGqsaYkuL5qZgRlv4pIujOwKdkwOPbL7Ca3KsiE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_5_img&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                          - generic [ref=f4e481]:
                            - link [aria-hidden] [ref=f4e482] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHp3Ynfm54xEJYnYKiWlIZopx1FSRhkx5OY6Iwbs6ooGu4oKm7w0INCArkAaU1UHBKkxUHQigxhBBUCUJGqsaYkuL5qZgRlv4pIujOwKdkwOPbL7Ca3KsiE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_5_bkgd&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                            - link [ref=f4e485] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHp3Ynfm54xEJYnYKiWlIZopx1FSRhkx5OY6Iwbs6ooGu4oKm7w0INCArkAaU1UHBKkxUHQigxhBBUCUJGqsaYkuL5qZgRlv4pIujOwKdkwOPbL7Ca3KsiE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_5_title&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e486]:
                                - generic [ref=f4e487]: REDMI Turbo 5 (12GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                                - generic [aria-hidden] [ref=f4e488]: REDMI Turbo 5 (12GB + 256GB) Nitro Blue | Dimensity 8500…
                            - link [ref=f4e489] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHp3Ynfm54xEJYnYKiWlIZopx1FSRhkx5OY6Iwbs6ooGu4oKm7w0INCArkAaU1UHBKkxUHQigxhBBUCUJGqsaYkuL5qZgRlv4pIujOwKdkwOPbL7Ca3KsiE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_5_rating&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e#customerReviews
                              - generic [ref=f4e490]:
                                - generic [ref=f4e491]: "4.2"
                                - generic [ref=f4e492]: 4.2 out of 5 stars.
                                - generic [ref=f4e494]: (406)
                            - link [ref=f4e496] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkM-O0kAAh4MbdRc1bjjsGm5y4EAytDO0ZYtpNm2pbBe2hRbMhksz7Qy0WbYdOoOgB97AeDDx7MUXMfEZvKl3X8L4JyZ-p1_yHX7JV00Of3z_-uVe7ZGJ4PQymM08ZTh40ajA1smC5tkuutbOioBOAlmw3Zpcsd4JmyGIzl5dz31Id2t_xNeYh2bwAClaW9HamtqW53dCKz40nemFE7hh7bR6n1B-IwpWezjzAsf2B547d_r1N5Xq4S8TYbGoHeFb_LrI21lef8JjsMmzRUYJ4BSXSQoYXlIAG3dpHrleC_EYiJTeUgKSYrWiiciKHPw9AQkuCQcMZ7mgJUiKXNBcoKdWYHr9yPZHI8eeur4XRuHYDIYjJ-o74XDqjxvn1Yp8_OHTx29vP_frp3gjCsAZLm9WFKQcA0FFmfHGYyTLEHZ0XUcdVVEgOnC9oHdgj-2WX3vWt0ybPXdB19xb6z8szb01EaU_2Zj_s7eWe2uyt8zfY1k_tpfObnD5MjGzvitSxUDvK9V3lVQIxnuStN1u2_8iSUsm4a1EJEu-QHp3Ynfm54xEJYnYKiWlIZopx1FSRhkx5OY6Iwbs6ooGu4oKm7w0INCArkAaU1UHBKkxUHQigxhBBUCUJGqsaYkuL5qZgRlv4pIujOwKdkwOPbL7Ca3KsiE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx_s_sparkle_sbtcd_asin_5_price&pd_rd_w=hE1QA&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=Gvmcw&pd_rd_r=6ece6527-b3ab-4d22-94ed-07f604d6c74e
                              - generic [ref=f4e498]:
                                - generic [ref=f4e499]: ₹46,999.00
                                - generic [aria-hidden] [ref=f4e500]:
                                  - text: ₹
                                  - generic [ref=f4e501]:
                                    - text: 46,999
                                    - generic [ref=f4e502]: .
                                  - text: "00"
                            - generic [ref=f4e503]: "M.R.P: ₹57,999.00"
                  - button "Next page" [ref=f4e507] [cursor=pointer]
          - generic [ref=f4e512]:
            - generic [ref=f4e515]:
              - heading "Results" [level=2] [ref=f4e516]
              - generic [ref=f4e517]: Check each product page for other buying options.
            - generic:
              - list:
                - listitem [ref=f4e518]:
                  - generic [ref=f4e524]:
                    - link [aria-hidden] [ref=f4e530] [cursor=pointer]:
                      - /url: /15C-Midnight-Segments-MediaTek-Dimensity/dp/B0G2BBWKCP/ref=sr_1_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-1
                    - generic [ref=f4e535]:
                      - link [ref=f4e537] [cursor=pointer]:
                        - /url: /15C-Midnight-Segments-MediaTek-Dimensity/dp/B0G2BBWKCP/ref=sr_1_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-1
                        - heading "Redmi 15C 5G Prime Edition (Midnight Black, 6GB + 128GB) | Massive 6000mAh Battery | Segment's Largest 17.53cm Display Up to 120Hz | MediaTek Dimensity 6300 | 33W Fast Charging | 50MP AI Dual Camera" [level=2] [ref=f4e538]
                      - generic [ref=f4e539]:
                        - generic [ref=f4e540]:
                          - text: "3.9"
                          - button "3.9 out of 5 stars, rating details" [ref=f4e542] [cursor=pointer]:
                            - generic [ref=f4e544]: 3.9 out of 5 stars
                          - link "1,152 ratings" [ref=f4e546] [cursor=pointer]:
                            - /url: /15C-Midnight-Segments-MediaTek-Dimensity/dp/B0G2BBWKCP/ref=sr_1_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-1#customerReviews
                            - text: (1.1K)
                        - generic [ref=f4e547]: 5K+ bought in past month
                      - generic [ref=f4e550]:
                        - generic [ref=f4e551]:
                          - generic [ref=f4e553]:
                            - generic [ref=f4e554]: Price, product page
                            - 'link "₹18,999 M.R.P: ₹31,999 M.R.P: ₹31,999" [ref=f4e555] [cursor=pointer]':
                              - /url: /15C-Midnight-Segments-MediaTek-Dimensity/dp/B0G2BBWKCP/ref=sr_1_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-1
                              - generic [ref=f4e556]:
                                - generic [ref=f4e557]: ₹18,999
                                - generic [aria-hidden] [ref=f4e558]: ₹18,999
                              - generic [ref=f4e559]: "M.R.P: ₹31,999"
                              - generic [ref=f4e560]:
                                - text: "M.R.P:"
                                - generic [ref=f4e561]:
                                  - generic [ref=f4e562]: ₹31,999
                                  - text: ₹31,999
                            - text: (41% off)
                          - generic [ref=f4e566]:
                            - generic [ref=f4e567]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e568]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e571]:
                          - generic [ref=f4e572]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e574]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e589] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e590]
                          - generic [aria-hidden] [ref=f4e591]: Add to cart
                        - group "colours available" [ref=f4e593]:
                          - list [ref=f4e594]:
                            - generic [ref=f4e595]:
                              - listitem:
                                - link "Midnight Black":
                                  - /url: /15C-Midnight-Segments-MediaTek-Dimensity/dp/B0G2BBWKCP/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-1
                                  - generic [ref=f4e596] [cursor=pointer]
                            - generic [ref=f4e598]:
                              - listitem:
                                - link "Dusk Purple":
                                  - /url: /15C-Midnight-Segments-MediaTek-Dimensity/dp/B0G2B2QVLL/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-1
                                  - generic [ref=f4e599] [cursor=pointer]
                            - generic [ref=f4e601]:
                              - listitem:
                                - link "Moonlight Blue":
                                  - /url: /15C-Midnight-Segments-MediaTek-Dimensity/dp/B0G2B251KD/ref=cs_sr_dp_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-1
                                  - generic [ref=f4e602] [cursor=pointer]
                - listitem [ref=f4e606]:
                  - generic [ref=f4e612]:
                    - generic [ref=f4e614]:
                      - generic "Amazon's Choice" [ref=f4e617]:
                        - group "Amazon's Choice for \"Mobile\"" [ref=f4e620]:
                          - generic [ref=f4e622]: Amazon's Choice
                      - link [aria-hidden] [ref=f4e626] [cursor=pointer]:
                        - /url: /realme-6300mAh-Segments-Biggest-Battery/dp/B0H6HY2C29/ref=sr_1_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-2
                    - generic [ref=f4e631]:
                      - link [ref=f4e633] [cursor=pointer]:
                        - /url: /realme-6300mAh-Segments-Biggest-Battery/dp/B0H6HY2C29/ref=sr_1_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-2
                        - 'heading "realme narzo 80 Lite 4G (See Blue,4GB+64GB) 2026 | 6300mAh Segment''s Biggest Battery | 7.94mm Slim Design | 300% Ultra Volume | Pulse Light: 9 Colors, 5 Glow Modes | Ai Assist" [level=2] [ref=f4e634]'
                      - generic [ref=f4e635]:
                        - generic [ref=f4e636]:
                          - text: "4.1"
                          - button "4.1 out of 5 stars, rating details" [ref=f4e638] [cursor=pointer]:
                            - generic [ref=f4e640]: 4.1 out of 5 stars
                          - link "2,374 ratings" [ref=f4e642] [cursor=pointer]:
                            - /url: /realme-6300mAh-Segments-Biggest-Battery/dp/B0H6HY2C29/ref=sr_1_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-2#customerReviews
                            - text: (2.3K)
                        - generic [ref=f4e643]: 3K+ bought in past month
                      - generic [ref=f4e646]:
                        - generic [ref=f4e647]:
                          - link "Limited time deal" [ref=f4e649] [cursor=pointer]:
                            - /url: /deals
                          - generic [ref=f4e655]:
                            - generic [ref=f4e656]: Price, product page
                            - 'link "₹11,998 M.R.P: ₹16,999 M.R.P: ₹16,999" [ref=f4e657] [cursor=pointer]':
                              - /url: /realme-6300mAh-Segments-Biggest-Battery/dp/B0H6HY2C29/ref=sr_1_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-2
                              - generic [ref=f4e658]:
                                - generic [ref=f4e659]: ₹11,998
                                - generic [aria-hidden] [ref=f4e660]: ₹11,998
                              - generic [ref=f4e661]: "M.R.P: ₹16,999"
                              - generic [ref=f4e662]:
                                - text: "M.R.P:"
                                - generic [ref=f4e663]:
                                  - generic [ref=f4e664]: ₹16,999
                                  - text: ₹16,999
                            - text: (29% off)
                          - generic [ref=f4e668]:
                            - generic [ref=f4e669]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e670]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e671]: FREE delivery Tue, 17 Nov
                        - generic [ref=f4e689] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e690]
                          - generic [aria-hidden] [ref=f4e691]: Add to cart
                        - group "colours available" [ref=f4e693]:
                          - list [ref=f4e694]:
                            - generic [ref=f4e695]:
                              - listitem:
                                - link "See Blue":
                                  - /url: /realme-6300mAh-Segments-Biggest-Battery/dp/B0H6HY2C29/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-2
                                  - generic [ref=f4e696] [cursor=pointer]
                            - generic [ref=f4e698]:
                              - listitem:
                                - link "Obsidian Black 2026":
                                  - /url: /realme-6300mAh-Segments-Biggest-Battery/dp/B0H1BMBX9R/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-2
                                  - generic [ref=f4e699] [cursor=pointer]
                - listitem [ref=f4e703]:
                  - generic [ref=f4e709]:
                    - link [aria-hidden] [ref=f4e715] [cursor=pointer]:
                      - /url: /Samsung-Storage-MediaTek-Charging-Upgrades/dp/B0FN7QTRPY/ref=sr_1_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-3
                    - generic [ref=f4e720]:
                      - link [ref=f4e722] [cursor=pointer]:
                        - /url: /Samsung-Storage-MediaTek-Charging-Upgrades/dp/B0FN7QTRPY/ref=sr_1_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-3
                        - heading "Samsung Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger" [level=2] [ref=f4e723]
                      - generic [ref=f4e724]:
                        - generic [ref=f4e725]:
                          - text: "4.1"
                          - button "4.1 out of 5 stars, rating details" [ref=f4e727] [cursor=pointer]:
                            - generic [ref=f4e729]: 4.1 out of 5 stars
                          - link "2,942 ratings" [ref=f4e731] [cursor=pointer]:
                            - /url: /Samsung-Storage-MediaTek-Charging-Upgrades/dp/B0FN7QTRPY/ref=sr_1_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-3#customerReviews
                            - text: (2.9K)
                        - generic [ref=f4e732]: 5K+ bought in past month
                      - generic [ref=f4e735]:
                        - generic [ref=f4e736]:
                          - generic [ref=f4e738]:
                            - generic [ref=f4e739]: Price, product page
                            - 'link "₹11,999 M.R.P: ₹16,999 M.R.P: ₹16,999" [ref=f4e740] [cursor=pointer]':
                              - /url: /Samsung-Storage-MediaTek-Charging-Upgrades/dp/B0FN7QTRPY/ref=sr_1_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-3
                              - generic [ref=f4e741]:
                                - generic [ref=f4e742]: ₹11,999
                                - generic [aria-hidden] [ref=f4e743]: ₹11,999
                              - generic [ref=f4e744]: "M.R.P: ₹16,999"
                              - generic [ref=f4e745]:
                                - text: "M.R.P:"
                                - generic [ref=f4e746]:
                                  - generic [ref=f4e747]: ₹16,999
                                  - text: ₹16,999
                            - text: (29% off)
                          - generic [ref=f4e751]:
                            - generic [ref=f4e752]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e753]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e754]: FREE delivery Tue, 17 Nov
                        - generic [ref=f4e772] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e773]
                          - generic [aria-hidden] [ref=f4e774]: Add to cart
          - generic [ref=f4e779]:
            - link "Sponsored ad from Xiaomi. \"Smartphones by Redmi.\" Shop Xiaomi." [ref=f4e780] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AUhtVWQAm3KosihV0QWVRMMvbYThxkIV8miXNxGidpo2xGjj1JTF3b9UzblEVegVdgwwvwAEgg8QzsgD0vgdoUpJ7Vd3TO_59Lzt_98_vnj_v5J7oojNrueOxIneZRcUs42J_TOFyRC6XajZanHI-7xnG6elffvxJwGPu4OQRnzklWpjieT2YD95EoKWVJKStyGU63h8ZsV8ejFnbtYf557kFA2QlP0vzjseNis9907Cm2Cp-3ci9vK4RRL_OXJKWZn0QepySMozCmZMbn-Yfeqfc-icthXHjBZsCPPMZCH2wkYNMIUqF4j8bEdg5kNgN8SU9pAPwkiqjPwyQGFyK4nQV8LwsYSL0w5jQDfhJzGnPxleHqjkXMfreLzZHdd4bEdrq2g0nXPsLEwsPOqH9YVHJbcO_jt0-_Pny3Ck__WW6WKD4TIRQEpKqqiGRJEsQd23HrO-ahedDPv7EM3UwbNqjqa-NsEwt9bQx41h-c63djbSzWxmBt6DewKOyZC7xqti98PbRsvpQ08et27sv2kvOU1SuVy8vL8v8vVRhPMsoqqbegFdNoQLMBLYAxRkAyqgioCCpAF5EpYFmHliK8vRGQjM61oUF0KCoI1aDotFs1qd1Sp2bPADpUVVWuyWgkKjKEx63JqOmW0oBkAUmjZZBpvLRkHvEzEgYaLEUp8VgYM82ALVFFw8bIfX2D1UkLdTbYqPVq7Q0ix-wMNihPql3rtndgoum11dk5za60XjILI3qdsyjh2t3nl1iQEi8giyw5TzUEoYgQhAKUkIqkUqh5KSt51yeGPQHpTHCC1V8rzPD8&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300233001043934%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
            - generic [ref=f4e781]:
              - generic [ref=f4e783]:
                - link "Xiaomi" [ref=f4e785] [cursor=pointer]:
                  - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AUhtVWQAm3KosihV0QWVRMMvbYThxkIV8miXNxGidpo2xGjj1JTF3b9UzblEVegVdgwwvwAEgg8QzsgD0vgdoUpJ7Vd3TO_59Lzt_98_vnj_v5J7oojNrueOxIneZRcUs42J_TOFyRC6XajZanHI-7xnG6elffvxJwGPu4OQRnzklWpjieT2YD95EoKWVJKStyGU63h8ZsV8ejFnbtYf557kFA2QlP0vzjseNis9907Cm2Cp-3ci9vK4RRL_OXJKWZn0QepySMozCmZMbn-Yfeqfc-icthXHjBZsCPPMZCH2wkYNMIUqF4j8bEdg5kNgN8SU9pAPwkiqjPwyQGFyK4nQV8LwsYSL0w5jQDfhJzGnPxleHqjkXMfreLzZHdd4bEdrq2g0nXPsLEwsPOqH9YVHJbcO_jt0-_Pny3Ck__WW6WKD4TIRQEpKqqiGRJEsQd23HrO-ahedDPv7EM3UwbNqjqa-NsEwt9bQx41h-c63djbSzWxmBt6DewKOyZC7xqti98PbRsvpQ08et27sv2kvOU1SuVy8vL8v8vVRhPMsoqqbegFdNoQLMBLYAxRkAyqgioCCpAF5EpYFmHliK8vRGQjM61oUF0KCoI1aDotFs1qd1Sp2bPADpUVVWuyWgkKjKEx63JqOmW0oBkAUmjZZBpvLRkHvEzEgYaLEUp8VgYM82ALVFFw8bIfX2D1UkLdTbYqPVq7Q0ix-wMNihPql3rtndgoum11dk5za60XjILI3qdsyjh2t3nl1iQEi8giyw5TzUEoYgQhAKUkIqkUqh5KSt51yeGPQHpTHCC1V8rzPD8&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300233001043934%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_logo&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                  - img "Xiaomi" [ref=f4e787]
                - generic [ref=f4e789]:
                  - link "Smartphones by Redmi" [ref=f4e790] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AUhtVWQAm3KosihV0QWVRMMvbYThxkIV8miXNxGidpo2xGjj1JTF3b9UzblEVegVdgwwvwAEgg8QzsgD0vgdoUpJ7Vd3TO_59Lzt_98_vnj_v5J7oojNrueOxIneZRcUs42J_TOFyRC6XajZanHI-7xnG6elffvxJwGPu4OQRnzklWpjieT2YD95EoKWVJKStyGU63h8ZsV8ejFnbtYf557kFA2QlP0vzjseNis9907Cm2Cp-3ci9vK4RRL_OXJKWZn0QepySMozCmZMbn-Yfeqfc-icthXHjBZsCPPMZCH2wkYNMIUqF4j8bEdg5kNgN8SU9pAPwkiqjPwyQGFyK4nQV8LwsYSL0w5jQDfhJzGnPxleHqjkXMfreLzZHdd4bEdrq2g0nXPsLEwsPOqH9YVHJbcO_jt0-_Pny3Ck__WW6WKD4TIRQEpKqqiGRJEsQd23HrO-ahedDPv7EM3UwbNqjqa-NsEwt9bQx41h-c63djbSzWxmBt6DewKOyZC7xqti98PbRsvpQ08et27sv2kvOU1SuVy8vL8v8vVRhPMsoqqbegFdNoQLMBLYAxRkAyqgioCCpAF5EpYFmHliK8vRGQjM61oUF0KCoI1aDotFs1qd1Sp2bPADpUVVWuyWgkKjKEx63JqOmW0oBkAUmjZZBpvLRkHvEzEgYaLEUp8VgYM82ALVFFw8bIfX2D1UkLdTbYqPVq7Q0ix-wMNihPql3rtndgoum11dk5za60XjILI3qdsyjh2t3nl1iQEi8giyw5TzUEoYgQhAKUkIqkUqh5KSt51yeGPQHpTHCC1V8rzPD8&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300233001043934%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_hl&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                    - generic [ref=f4e791]:
                      - generic [ref=f4e792]: Smartphones by Redmi
                      - generic [aria-hidden] [ref=f4e793]: Smartphones by Redmi
                  - generic [ref=f4e794]:
                    - button "Leave feedback on Sponsored ad" [ref=f4e798] [cursor=pointer]: Sponsored
                    - generic [ref=f4e800]: "|"
                    - generic [ref=f4e801]: Top 10 best-selling brand in this category
                    - generic [ref=f4e802]: "|"
                    - link "Shop Xiaomi" [ref=f4e804] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AUhtVWQAm3KosihV0QWVRMMvbYThxkIV8miXNxGidpo2xGjj1JTF3b9UzblEVegVdgwwvwAEgg8QzsgD0vgdoUpJ7Vd3TO_59Lzt_98_vnj_v5J7oojNrueOxIneZRcUs42J_TOFyRC6XajZanHI-7xnG6elffvxJwGPu4OQRnzklWpjieT2YD95EoKWVJKStyGU63h8ZsV8ejFnbtYf557kFA2QlP0vzjseNis9907Cm2Cp-3ci9vK4RRL_OXJKWZn0QepySMozCmZMbn-Yfeqfc-icthXHjBZsCPPMZCH2wkYNMIUqF4j8bEdg5kNgN8SU9pAPwkiqjPwyQGFyK4nQV8LwsYSL0w5jQDfhJzGnPxleHqjkXMfreLzZHdd4bEdrq2g0nXPsLEwsPOqH9YVHJbcO_jt0-_Pny3Ck__WW6WKD4TIRQEpKqqiGRJEsQd23HrO-ahedDPv7EM3UwbNqjqa-NsEwt9bQx41h-c63djbSzWxmBt6DewKOyZC7xqti98PbRsvpQ08et27sv2kvOU1SuVy8vL8v8vVRhPMsoqqbegFdNoQLMBLYAxRkAyqgioCCpAF5EpYFmHliK8vRGQjM61oUF0KCoI1aDotFs1qd1Sp2bPADpUVVWuyWgkKjKEx63JqOmW0oBkAUmjZZBpvLRkHvEzEgYaLEUp8VgYM82ALVFFw8bIfX2D1UkLdTbYqPVq7Q0ix-wMNihPql3rtndgoum11dk5za60XjILI3qdsyjh2t3nl1iQEi8giyw5TzUEoYgQhAKUkIqkUqh5KSt51yeGPQHpTHCC1V8rzPD8&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FCBF0CF0D-EEE3-4B73-9306-A23C1E5A0D61%3Fstore_ref%3DSB_A02633802NJH84JH9ZCMB-A09995853T26500WHXTGR%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0H293SFTR%2CB0H297XH3K%2CB0H29F8M8J%2CB0H293NCKQ%2CB0H295X7LD%2CB0H297QC3Z%26lp_query%3DMobile%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300233001043934%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_cta&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                      - generic [ref=f4e807]:
                        - text: Shop
                        - generic [ref=f4e808]: Xiaomi
              - group [ref=f4e812]:
                - group [ref=f4e816]:
                  - list [ref=f4e817]:
                    - listitem [ref=f4e818]:
                      - generic [ref=f4e820]:
                        - link [aria-hidden] [ref=f4e821] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUM-O0kAcDm7UFf9tOKwJ3jByIBnaKaWkmMa0ZZbtLpalwK7Zy2Q6M6XjllLaEdADr-DBxLMXX8BHMPEZvKl3X8JEVhO_05d8f36_fGW6_-vn92-3KvdtDU5OgunU10_757USbBxGPBUbvDI6gySeSzQdOBfZ5lX38A1EIqWoPwZL_ypvcpRGL8NRcFfTjaZuNI12U728MXbCfRtNjlHgjSuPyrcZL67kIqvcm_oBcod937tEvernUvnJtYILTnIa44zndJEQybFIE5FyHMqocofMydtF2hRp9XERApqQohAU7CJgZwQZrN3kKfb8RrsIgYz5nDNAF0nCqRSLFKw0cH0LUJKzAmREpJLngC5SyVOpPXUC2-9hdzgYIHfiDf0x9vyB5yM88M4R7qHx6WR4VjPKJfXg45dPP9597VUf_K3cPVF7qKkqhC3TNLVWW9ehtuf5QXfPPXMbw8qznmO72ZEHOvbWWe4ws7fOSObD0Wv7f2yd2dYZbR37D5lVD9wZ2vRPVtQWPU_GuqV9KJXfl2Ips6KrKOv1uvlvJWWWKWStMMVRjzWzNT6aBM8zhnOGsyRmuSXrcUEwzbFgllpfCmbBjqkbsKO3Yb3ILQggMCOmc4MaQI1aGtAhDIFJQgpYxMwOYyoljNWFRbKiTnIeWeIFbNkF9NnmN7cFvtE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_0_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                        - link [ref=f4e823] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUM-O0kAcDm7UFf9tOKwJ3jByIBnaKaWkmMa0ZZbtLpalwK7Zy2Q6M6XjllLaEdADr-DBxLMXX8BHMPEZvKl3X8JEVhO_05d8f36_fGW6_-vn92-3KvdtDU5OgunU10_757USbBxGPBUbvDI6gySeSzQdOBfZ5lX38A1EIqWoPwZL_ypvcpRGL8NRcFfTjaZuNI12U728MXbCfRtNjlHgjSuPyrcZL67kIqvcm_oBcod937tEvernUvnJtYILTnIa44zndJEQybFIE5FyHMqocofMydtF2hRp9XERApqQohAU7CJgZwQZrN3kKfb8RrsIgYz5nDNAF0nCqRSLFKw0cH0LUJKzAmREpJLngC5SyVOpPXUC2-9hdzgYIHfiDf0x9vyB5yM88M4R7qHx6WR4VjPKJfXg45dPP9597VUf_K3cPVF7qKkqhC3TNLVWW9ehtuf5QXfPPXMbw8qznmO72ZEHOvbWWe4ws7fOSObD0Wv7f2yd2dYZbR37D5lVD9wZ2vRPVtQWPU_GuqV9KJXfl2Ips6KrKOv1uvlvJWWWKWStMMVRjzWzNT6aBM8zhnOGsyRmuSXrcUEwzbFgllpfCmbBjqkbsKO3Yb3ILQggMCOmc4MaQI1aGtAhDIFJQgpYxMwOYyoljNWFRbKiTnIeWeIFbNkF9NnmN7cFvtE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_0_img&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - img "REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.9) 120Hz Display | 50MP Sony OIS Camera" [ref=f4e826]
                        - generic [ref=f4e827]:
                          - link [aria-hidden] [ref=f4e828] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUM-O0kAcDm7UFf9tOKwJ3jByIBnaKaWkmMa0ZZbtLpalwK7Zy2Q6M6XjllLaEdADr-DBxLMXX8BHMPEZvKl3X8JEVhO_05d8f36_fGW6_-vn92-3KvdtDU5OgunU10_757USbBxGPBUbvDI6gySeSzQdOBfZ5lX38A1EIqWoPwZL_ypvcpRGL8NRcFfTjaZuNI12U728MXbCfRtNjlHgjSuPyrcZL67kIqvcm_oBcod937tEvernUvnJtYILTnIa44zndJEQybFIE5FyHMqocofMydtF2hRp9XERApqQohAU7CJgZwQZrN3kKfb8RrsIgYz5nDNAF0nCqRSLFKw0cH0LUJKzAmREpJLngC5SyVOpPXUC2-9hdzgYIHfiDf0x9vyB5yM88M4R7qHx6WR4VjPKJfXg45dPP9597VUf_K3cPVF7qKkqhC3TNLVWW9ehtuf5QXfPPXMbw8qznmO72ZEHOvbWWe4ws7fOSObD0Wv7f2yd2dYZbR37D5lVD9wZ2vRPVtQWPU_GuqV9KJXfl2Ips6KrKOv1uvlvJWWWKWStMMVRjzWzNT6aBM8zhnOGsyRmuSXrcUEwzbFgllpfCmbBjqkbsKO3Yb3ILQggMCOmc4MaQI1aGtAhDIFJQgpYxMwOYyoljNWFRbKiTnIeWeIFbNkF9NnmN7cFvtE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_0_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - link "REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.9) 120Hz Display | 50MP Sony OIS Camera" [ref=f4e830] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUM-O0kAcDm7UFf9tOKwJ3jByIBnaKaWkmMa0ZZbtLpalwK7Zy2Q6M6XjllLaEdADr-DBxLMXX8BHMPEZvKl3X8JEVhO_05d8f36_fGW6_-vn92-3KvdtDU5OgunU10_757USbBxGPBUbvDI6gySeSzQdOBfZ5lX38A1EIqWoPwZL_ypvcpRGL8NRcFfTjaZuNI12U728MXbCfRtNjlHgjSuPyrcZL67kIqvcm_oBcod937tEvernUvnJtYILTnIa44zndJEQybFIE5FyHMqocofMydtF2hRp9XERApqQohAU7CJgZwQZrN3kKfb8RrsIgYz5nDNAF0nCqRSLFKw0cH0LUJKzAmREpJLngC5SyVOpPXUC2-9hdzgYIHfiDf0x9vyB5yM88M4R7qHx6WR4VjPKJfXg45dPP9597VUf_K3cPVF7qKkqhC3TNLVWW9ehtuf5QXfPPXMbw8qznmO72ZEHOvbWWe4ws7fOSObD0Wv7f2yd2dYZbR37D5lVD9wZ2vRPVtQWPU_GuqV9KJXfl2Ips6KrKOv1uvlvJWWWKWStMMVRjzWzNT6aBM8zhnOGsyRmuSXrcUEwzbFgllpfCmbBjqkbsKO3Yb3ILQggMCOmc4MaQI1aGtAhDIFJQgpYxMwOYyoljNWFRbKiTnIeWeIFbNkF9NnmN7cFvtE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_0_title&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e831]:
                              - generic [ref=f4e832]: REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.9) 120Hz Display | 50MP Sony OIS Camera
                              - generic [aria-hidden] [ref=f4e833]: REDMI Turbo 5 (8GB + 256GB) Turbo White | MediaTek Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W Hy…
                          - link "Rated 4.1 out of 5 stars by 1109 reviews. Go to review section." [ref=f4e834] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUM-O0kAcDm7UFf9tOKwJ3jByIBnaKaWkmMa0ZZbtLpalwK7Zy2Q6M6XjllLaEdADr-DBxLMXX8BHMPEZvKl3X8JEVhO_05d8f36_fGW6_-vn92-3KvdtDU5OgunU10_757USbBxGPBUbvDI6gySeSzQdOBfZ5lX38A1EIqWoPwZL_ypvcpRGL8NRcFfTjaZuNI12U728MXbCfRtNjlHgjSuPyrcZL67kIqvcm_oBcod937tEvernUvnJtYILTnIa44zndJEQybFIE5FyHMqocofMydtF2hRp9XERApqQohAU7CJgZwQZrN3kKfb8RrsIgYz5nDNAF0nCqRSLFKw0cH0LUJKzAmREpJLngC5SyVOpPXUC2-9hdzgYIHfiDf0x9vyB5yM88M4R7qHx6WR4VjPKJfXg45dPP9597VUf_K3cPVF7qKkqhC3TNLVWW9ehtuf5QXfPPXMbw8qznmO72ZEHOvbWWe4ws7fOSObD0Wv7f2yd2dYZbR37D5lVD9wZ2vRPVtQWPU_GuqV9KJXfl2Ips6KrKOv1uvlvJWWWKWStMMVRjzWzNT6aBM8zhnOGsyRmuSXrcUEwzbFgllpfCmbBjqkbsKO3Yb3ILQggMCOmc4MaQI1aGtAhDIFJQgpYxMwOYyoljNWFRbKiTnIeWeIFbNkF9NnmN7cFvtE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_0_rating&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550#customerReviews
                            - generic [ref=f4e835]:
                              - generic [ref=f4e836]: "4.1"
                              - generic [ref=f4e837]: 4.1 out of 5 stars.
                              - generic [ref=f4e839]: 1,109
                          - link "₹41,999.00" [ref=f4e841] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUM-O0kAcDm7UFf9tOKwJ3jByIBnaKaWkmMa0ZZbtLpalwK7Zy2Q6M6XjllLaEdADr-DBxLMXX8BHMPEZvKl3X8JEVhO_05d8f36_fGW6_-vn92-3KvdtDU5OgunU10_757USbBxGPBUbvDI6gySeSzQdOBfZ5lX38A1EIqWoPwZL_ypvcpRGL8NRcFfTjaZuNI12U728MXbCfRtNjlHgjSuPyrcZL67kIqvcm_oBcod937tEvernUvnJtYILTnIa44zndJEQybFIE5FyHMqocofMydtF2hRp9XERApqQohAU7CJgZwQZrN3kKfb8RrsIgYz5nDNAF0nCqRSLFKw0cH0LUJKzAmREpJLngC5SyVOpPXUC2-9hdzgYIHfiDf0x9vyB5yM88M4R7qHx6WR4VjPKJfXg45dPP9597VUf_K3cPVF7qKkqhC3TNLVWW9ehtuf5QXfPPXMbw8qznmO72ZEHOvbWWe4ws7fOSObD0Wv7f2yd2dYZbR37D5lVD9wZ2vRPVtQWPU_GuqV9KJXfl2Ips6KrKOv1uvlvJWWWKWStMMVRjzWzNT6aBM8zhnOGsyRmuSXrcUEwzbFgllpfCmbBjqkbsKO3Yb3ILQggMCOmc4MaQI1aGtAhDIFJQgpYxMwOYyoljNWFRbKiTnIeWeIFbNkF9NnmN7cFvtE&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293SFTR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_0_price&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e843]:
                              - generic [ref=f4e844]: ₹41,999.00
                              - generic [aria-hidden] [ref=f4e845]:
                                - text: ₹
                                - generic [ref=f4e846]:
                                  - text: 41,999
                                  - generic [ref=f4e847]: .
                                - text: "00"
                          - generic [ref=f4e848]: "M.R.P: ₹54,999.00"
                    - listitem [ref=f4e851]:
                      - generic [ref=f4e853]:
                        - link [aria-hidden] [ref=f4e854] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SmlTTGPaMkIXLMvX7mYvk-nMlI5bSmlHQA_8BQ8mnr34B_wJJv4Gb-rdP2Eiq4nP6Umej_fNU6SHv35-_3ardN9W4fRkPJv5Wr97VinA2nHIE7HFa90YxNFCotnAOU-3r9rHbyASCUXdCVj5V1mdoyS8CEbju6qm1zW9rrfqyuWNiRMc2mjaQ2NvUnpUvM14fiWXaenezB8jd9j1vUvUKX8uFJ9cKzjnJKMRTnlGlzGRHIskFgnHgQxLd8iCvF0mdZGUH-cBoDHJc0HBPgL2RpDCyk2eYM-vtfIAyIgvOAN0GcecSrFMwFoF17cAJRnLQUpEInkG6DKRPJHqU2ds-x3sDgcD5E69oT_Bnj_wfIQH3hnCHTTpT4enFb1YUI4-fvn0493XTvnB38r9E5WHqqJA2DRNU222NA2qB54_bh-4p25tWHrWcWw3feEBw945qz3m9s4ZyWw4em3_j50z3zmjnWP_IfPykTtH2-7Jmtqi48lIs9QPheL7QiRlmrcbjc1mU_-3UmOeNsimwRqO0lNN46LX7D9PGc4YTuOIZZasRjnBNMOCWUp1JZgFDVPToaG1YDXPLAhUYIZM4zrVgRI2VaBBGACTBBSwkJkGYwoljFWFRdK8SjIeWuIlbNo59Nn2N6sHvrU&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_1_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                        - link [ref=f4e856] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SmlTTGPaMkIXLMvX7mYvk-nMlI5bSmlHQA_8BQ8mnr34B_wJJv4Gb-rdP2Eiq4nP6Umej_fNU6SHv35-_3ardN9W4fRkPJv5Wr97VinA2nHIE7HFa90YxNFCotnAOU-3r9rHbyASCUXdCVj5V1mdoyS8CEbju6qm1zW9rrfqyuWNiRMc2mjaQ2NvUnpUvM14fiWXaenezB8jd9j1vUvUKX8uFJ9cKzjnJKMRTnlGlzGRHIskFgnHgQxLd8iCvF0mdZGUH-cBoDHJc0HBPgL2RpDCyk2eYM-vtfIAyIgvOAN0GcecSrFMwFoF17cAJRnLQUpEInkG6DKRPJHqU2ds-x3sDgcD5E69oT_Bnj_wfIQH3hnCHTTpT4enFb1YUI4-fvn0493XTvnB38r9E5WHqqJA2DRNU222NA2qB54_bh-4p25tWHrWcWw3feEBw945qz3m9s4ZyWw4em3_j50z3zmjnWP_IfPykTtH2-7Jmtqi48lIs9QPheL7QiRlmrcbjc1mU_-3UmOeNsimwRqO0lNN46LX7D9PGc4YTuOIZZasRjnBNMOCWUp1JZgFDVPToaG1YDXPLAhUYIZM4zrVgRI2VaBBGACTBBSwkJkGYwoljFWFRdK8SjIeWuIlbNo59Nn2N6sHvrU&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_1_img&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - img "REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e859]
                        - generic [ref=f4e860]:
                          - link [aria-hidden] [ref=f4e861] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SmlTTGPaMkIXLMvX7mYvk-nMlI5bSmlHQA_8BQ8mnr34B_wJJv4Gb-rdP2Eiq4nP6Umej_fNU6SHv35-_3ardN9W4fRkPJv5Wr97VinA2nHIE7HFa90YxNFCotnAOU-3r9rHbyASCUXdCVj5V1mdoyS8CEbju6qm1zW9rrfqyuWNiRMc2mjaQ2NvUnpUvM14fiWXaenezB8jd9j1vUvUKX8uFJ9cKzjnJKMRTnlGlzGRHIskFgnHgQxLd8iCvF0mdZGUH-cBoDHJc0HBPgL2RpDCyk2eYM-vtfIAyIgvOAN0GcecSrFMwFoF17cAJRnLQUpEInkG6DKRPJHqU2ds-x3sDgcD5E69oT_Bnj_wfIQH3hnCHTTpT4enFb1YUI4-fvn0493XTvnB38r9E5WHqqJA2DRNU222NA2qB54_bh-4p25tWHrWcWw3feEBw945qz3m9s4ZyWw4em3_j50z3zmjnWP_IfPykTtH2-7Jmtqi48lIs9QPheL7QiRlmrcbjc1mU_-3UmOeNsimwRqO0lNN46LX7D9PGc4YTuOIZZasRjnBNMOCWUp1JZgFDVPToaG1YDXPLAhUYIZM4zrVgRI2VaBBGACTBBSwkJkGYwoljFWFRdK8SjIeWuIlbNo59Nn2N6sHvrU&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_1_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - link "REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e863] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SmlTTGPaMkIXLMvX7mYvk-nMlI5bSmlHQA_8BQ8mnr34B_wJJv4Gb-rdP2Eiq4nP6Umej_fNU6SHv35-_3ardN9W4fRkPJv5Wr97VinA2nHIE7HFa90YxNFCotnAOU-3r9rHbyASCUXdCVj5V1mdoyS8CEbju6qm1zW9rrfqyuWNiRMc2mjaQ2NvUnpUvM14fiWXaenezB8jd9j1vUvUKX8uFJ9cKzjnJKMRTnlGlzGRHIskFgnHgQxLd8iCvF0mdZGUH-cBoDHJc0HBPgL2RpDCyk2eYM-vtfIAyIgvOAN0GcecSrFMwFoF17cAJRnLQUpEInkG6DKRPJHqU2ds-x3sDgcD5E69oT_Bnj_wfIQH3hnCHTTpT4enFb1YUI4-fvn0493XTvnB38r9E5WHqqJA2DRNU222NA2qB54_bh-4p25tWHrWcWw3feEBw945qz3m9s4ZyWw4em3_j50z3zmjnWP_IfPykTtH2-7Jmtqi48lIs9QPheL7QiRlmrcbjc1mU_-3UmOeNsimwRqO0lNN46LX7D9PGc4YTuOIZZasRjnBNMOCWUp1JZgFDVPToaG1YDXPLAhUYIZM4zrVgRI2VaBBGACTBBSwkJkGYwoljFWFRdK8SjIeWuIlbNo59Nn2N6sHvrU&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_1_title&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e864]:
                              - generic [ref=f4e865]: REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                              - generic [aria-hidden] [ref=f4e866]: REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharg…
                          - link "Rated 4.1 out of 5 stars by 1109 reviews. Go to review section." [ref=f4e867] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SmlTTGPaMkIXLMvX7mYvk-nMlI5bSmlHQA_8BQ8mnr34B_wJJv4Gb-rdP2Eiq4nP6Umej_fNU6SHv35-_3ardN9W4fRkPJv5Wr97VinA2nHIE7HFa90YxNFCotnAOU-3r9rHbyASCUXdCVj5V1mdoyS8CEbju6qm1zW9rrfqyuWNiRMc2mjaQ2NvUnpUvM14fiWXaenezB8jd9j1vUvUKX8uFJ9cKzjnJKMRTnlGlzGRHIskFgnHgQxLd8iCvF0mdZGUH-cBoDHJc0HBPgL2RpDCyk2eYM-vtfIAyIgvOAN0GcecSrFMwFoF17cAJRnLQUpEInkG6DKRPJHqU2ds-x3sDgcD5E69oT_Bnj_wfIQH3hnCHTTpT4enFb1YUI4-fvn0493XTvnB38r9E5WHqqJA2DRNU222NA2qB54_bh-4p25tWHrWcWw3feEBw945qz3m9s4ZyWw4em3_j50z3zmjnWP_IfPykTtH2-7Jmtqi48lIs9QPheL7QiRlmrcbjc1mU_-3UmOeNsimwRqO0lNN46LX7D9PGc4YTuOIZZasRjnBNMOCWUp1JZgFDVPToaG1YDXPLAhUYIZM4zrVgRI2VaBBGACTBBSwkJkGYwoljFWFRdK8SjIeWuIlbNo59Nn2N6sHvrU&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_1_rating&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550#customerReviews
                            - generic [ref=f4e868]:
                              - generic [ref=f4e869]: "4.1"
                              - generic [ref=f4e870]: 4.1 out of 5 stars.
                              - generic [ref=f4e872]: 1,109
                          - link "₹41,999.00" [ref=f4e874] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SmlTTGPaMkIXLMvX7mYvk-nMlI5bSmlHQA_8BQ8mnr34B_wJJv4Gb-rdP2Eiq4nP6Umej_fNU6SHv35-_3ardN9W4fRkPJv5Wr97VinA2nHIE7HFa90YxNFCotnAOU-3r9rHbyASCUXdCVj5V1mdoyS8CEbju6qm1zW9rrfqyuWNiRMc2mjaQ2NvUnpUvM14fiWXaenezB8jd9j1vUvUKX8uFJ9cKzjnJKMRTnlGlzGRHIskFgnHgQxLd8iCvF0mdZGUH-cBoDHJc0HBPgL2RpDCyk2eYM-vtfIAyIgvOAN0GcecSrFMwFoF17cAJRnLQUpEInkG6DKRPJHqU2ds-x3sDgcD5E69oT_Bnj_wfIQH3hnCHTTpT4enFb1YUI4-fvn0493XTvnB38r9E5WHqqJA2DRNU222NA2qB54_bh-4p25tWHrWcWw3feEBw945qz3m9s4ZyWw4em3_j50z3zmjnWP_IfPykTtH2-7Jmtqi48lIs9QPheL7QiRlmrcbjc1mU_-3UmOeNsimwRqO0lNN46LX7D9PGc4YTuOIZZasRjnBNMOCWUp1JZgFDVPToaG1YDXPLAhUYIZM4zrVgRI2VaBBGACTBBSwkJkGYwoljFWFRdK8SjIeWuIlbNo59Nn2N6sHvrU&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297XH3K%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_1_price&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e876]:
                              - generic [ref=f4e877]: ₹41,999.00
                              - generic [aria-hidden] [ref=f4e878]:
                                - text: ₹
                                - generic [ref=f4e879]:
                                  - text: 41,999
                                  - generic [ref=f4e880]: .
                                - text: "00"
                          - generic [ref=f4e881]: "M.R.P: ₹54,999.00"
                    - listitem [ref=f4e884]:
                      - generic [ref=f4e886]:
                        - link [aria-hidden] [ref=f4e887] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3GcOshCtjNNnbpO8yqom9F4ZhwPdRzHHpLAIr_AAok1G36AT0DiG9gBe34CiRQkzupI53GvTpHu__r5_dut0n1LhZP-aDr1tdPeRaUAa4chT8QGr_S2F0dziaae_SLdvOocvoFIJBT1xmDpX2V1jpLwZTAc3VU1va7pdb1VVy5vjO1g30KTEzRyx6VHxduM51dykZbuTf0RcgY9371E3fLnQvHJtYJzTjIa4ZRndBETybFIYpFwHMiwdIfMydtFUhdJ-XEeABqTPBcU7CJgZwQprNzkCXb9WisPgIz4nDNAF3HMqRSLBKxUcH0LUJKxHKREJJJngC4SyROpPrVHlt_FzsDzkDNxB_4Yu77n-gh77gXCXTQ-nQzOK3qxoBx8_PLpx7uv3fKDv5W7JyoPVUWBsGkYhtpsaRpU91x_1Nlzzp3aoPSsa1tOeuyCtrW1lzvMrK09lNlg-Nr6H1t7trWHW9v6Q2blA2eGNr3-ilqi68pIM9UPheL7QiRlmncajfV6Xf-3UmOWNsi6wRq2cqIax0dnR_3nKcMZw2kcscyU1SgnmGZYMFOpLgUzYdvQdNjWWrCaZyYETWCETOM61YESNlWgQRgAgwQUsJAZbcYUShirCpOkeZVkPDTFGWxaOfTZ5jenzr6u&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_2_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                        - link [ref=f4e889] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3GcOshCtjNNnbpO8yqom9F4ZhwPdRzHHpLAIr_AAok1G36AT0DiG9gBe34CiRQkzupI53GvTpHu__r5_dut0n1LhZP-aDr1tdPeRaUAa4chT8QGr_S2F0dziaae_SLdvOocvoFIJBT1xmDpX2V1jpLwZTAc3VU1va7pdb1VVy5vjO1g30KTEzRyx6VHxduM51dykZbuTf0RcgY9371E3fLnQvHJtYJzTjIa4ZRndBETybFIYpFwHMiwdIfMydtFUhdJ-XEeABqTPBcU7CJgZwQprNzkCXb9WisPgIz4nDNAF3HMqRSLBKxUcH0LUJKxHKREJJJngC4SyROpPrVHlt_FzsDzkDNxB_4Yu77n-gh77gXCXTQ-nQzOK3qxoBx8_PLpx7uv3fKDv5W7JyoPVUWBsGkYhtpsaRpU91x_1Nlzzp3aoPSsa1tOeuyCtrW1lzvMrK09lNlg-Nr6H1t7trWHW9v6Q2blA2eGNr3-ilqi68pIM9UPheL7QiRlmncajfV6Xf-3UmOWNsi6wRq2cqIax0dnR_3nKcMZw2kcscyU1SgnmGZYMFOpLgUzYdvQdNjWWrCaZyYETWCETOM61YESNlWgQRgAgwQUsJAZbcYUShirCpOkeZVkPDTFGWxaOfTZ5jenzr6u&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_2_img&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - img "REDMI Turbo 5 (8GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e892]
                        - generic [ref=f4e893]:
                          - link [aria-hidden] [ref=f4e894] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3GcOshCtjNNnbpO8yqom9F4ZhwPdRzHHpLAIr_AAok1G36AT0DiG9gBe34CiRQkzupI53GvTpHu__r5_dut0n1LhZP-aDr1tdPeRaUAa4chT8QGr_S2F0dziaae_SLdvOocvoFIJBT1xmDpX2V1jpLwZTAc3VU1va7pdb1VVy5vjO1g30KTEzRyx6VHxduM51dykZbuTf0RcgY9371E3fLnQvHJtYJzTjIa4ZRndBETybFIYpFwHMiwdIfMydtFUhdJ-XEeABqTPBcU7CJgZwQprNzkCXb9WisPgIz4nDNAF3HMqRSLBKxUcH0LUJKxHKREJJJngC4SyROpPrVHlt_FzsDzkDNxB_4Yu77n-gh77gXCXTQ-nQzOK3qxoBx8_PLpx7uv3fKDv5W7JyoPVUWBsGkYhtpsaRpU91x_1Nlzzp3aoPSsa1tOeuyCtrW1lzvMrK09lNlg-Nr6H1t7trWHW9v6Q2blA2eGNr3-ilqi68pIM9UPheL7QiRlmncajfV6Xf-3UmOWNsi6wRq2cqIax0dnR_3nKcMZw2kcscyU1SgnmGZYMFOpLgUzYdvQdNjWWrCaZyYETWCETOM61YESNlWgQRgAgwQUsJAZbcYUShirCpOkeZVkPDTFGWxaOfTZ5jenzr6u&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_2_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - link "REDMI Turbo 5 (8GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e896] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3GcOshCtjNNnbpO8yqom9F4ZhwPdRzHHpLAIr_AAok1G36AT0DiG9gBe34CiRQkzupI53GvTpHu__r5_dut0n1LhZP-aDr1tdPeRaUAa4chT8QGr_S2F0dziaae_SLdvOocvoFIJBT1xmDpX2V1jpLwZTAc3VU1va7pdb1VVy5vjO1g30KTEzRyx6VHxduM51dykZbuTf0RcgY9371E3fLnQvHJtYJzTjIa4ZRndBETybFIYpFwHMiwdIfMydtFUhdJ-XEeABqTPBcU7CJgZwQprNzkCXb9WisPgIz4nDNAF3HMqRSLBKxUcH0LUJKxHKREJJJngC4SyROpPrVHlt_FzsDzkDNxB_4Yu77n-gh77gXCXTQ-nQzOK3qxoBx8_PLpx7uv3fKDv5W7JyoPVUWBsGkYhtpsaRpU91x_1Nlzzp3aoPSsa1tOeuyCtrW1lzvMrK09lNlg-Nr6H1t7trWHW9v6Q2blA2eGNr3-ilqi68pIM9UPheL7QiRlmncajfV6Xf-3UmOWNsi6wRq2cqIax0dnR_3nKcMZw2kcscyU1SgnmGZYMFOpLgUzYdvQdNjWWrCaZyYETWCETOM61YESNlWgQRgAgwQUsJAZbcYUShirCpOkeZVkPDTFGWxaOfTZ5jenzr6u&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_2_title&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e897]:
                              - generic [ref=f4e898]: REDMI Turbo 5 (8GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                              - generic [aria-hidden] [ref=f4e899]: REDMI Turbo 5 (8GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Comp…
                          - link "Rated 4.1 out of 5 stars by 1109 reviews. Go to review section." [ref=f4e900] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3GcOshCtjNNnbpO8yqom9F4ZhwPdRzHHpLAIr_AAok1G36AT0DiG9gBe34CiRQkzupI53GvTpHu__r5_dut0n1LhZP-aDr1tdPeRaUAa4chT8QGr_S2F0dziaae_SLdvOocvoFIJBT1xmDpX2V1jpLwZTAc3VU1va7pdb1VVy5vjO1g30KTEzRyx6VHxduM51dykZbuTf0RcgY9371E3fLnQvHJtYJzTjIa4ZRndBETybFIYpFwHMiwdIfMydtFUhdJ-XEeABqTPBcU7CJgZwQprNzkCXb9WisPgIz4nDNAF3HMqRSLBKxUcH0LUJKxHKREJJJngC4SyROpPrVHlt_FzsDzkDNxB_4Yu77n-gh77gXCXTQ-nQzOK3qxoBx8_PLpx7uv3fKDv5W7JyoPVUWBsGkYhtpsaRpU91x_1Nlzzp3aoPSsa1tOeuyCtrW1lzvMrK09lNlg-Nr6H1t7trWHW9v6Q2blA2eGNr3-ilqi68pIM9UPheL7QiRlmncajfV6Xf-3UmOWNsi6wRq2cqIax0dnR_3nKcMZw2kcscyU1SgnmGZYMFOpLgUzYdvQdNjWWrCaZyYETWCETOM61YESNlWgQRgAgwQUsJAZbcYUShirCpOkeZVkPDTFGWxaOfTZ5jenzr6u&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_2_rating&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550#customerReviews
                            - generic [ref=f4e901]:
                              - generic [ref=f4e902]: "4.1"
                              - generic [ref=f4e903]: 4.1 out of 5 stars.
                              - generic [ref=f4e905]: 1,109
                          - link "₹41,999.00" [ref=f4e907] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3GcOshCtjNNnbpO8yqom9F4ZhwPdRzHHpLAIr_AAok1G36AT0DiG9gBe34CiRQkzupI53GvTpHu__r5_dut0n1LhZP-aDr1tdPeRaUAa4chT8QGr_S2F0dziaae_SLdvOocvoFIJBT1xmDpX2V1jpLwZTAc3VU1va7pdb1VVy5vjO1g30KTEzRyx6VHxduM51dykZbuTf0RcgY9371E3fLnQvHJtYJzTjIa4ZRndBETybFIYpFwHMiwdIfMydtFUhdJ-XEeABqTPBcU7CJgZwQprNzkCXb9WisPgIz4nDNAF3HMqRSLBKxUcH0LUJKxHKREJJJngC4SyROpPrVHlt_FzsDzkDNxB_4Yu77n-gh77gXCXTQ-nQzOK3qxoBx8_PLpx7uv3fKDv5W7JyoPVUWBsGkYhtpsaRpU91x_1Nlzzp3aoPSsa1tOeuyCtrW1lzvMrK09lNlg-Nr6H1t7trWHW9v6Q2blA2eGNr3-ilqi68pIM9UPheL7QiRlmncajfV6Xf-3UmOWNsi6wRq2cqIax0dnR_3nKcMZw2kcscyU1SgnmGZYMFOpLgUzYdvQdNjWWrCaZyYETWCETOM61YESNlWgQRgAgwQUsJAZbcYUShirCpOkeZVkPDTFGWxaOfTZ5jenzr6u&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H29F8M8J%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_2_price&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e909]:
                              - generic [ref=f4e910]: ₹41,999.00
                              - generic [aria-hidden] [ref=f4e911]:
                                - text: ₹
                                - generic [ref=f4e912]:
                                  - text: 41,999
                                  - generic [ref=f4e913]: .
                                - text: "00"
                          - generic [ref=f4e914]: "M.R.P: ₹54,999.00"
                    - listitem [ref=f4e917]:
                      - generic [ref=f4e919]:
                        - link [aria-hidden] [ref=f4e920] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SikppjFtGdkutSxfq9nLZDozpeOWtrQjoAf-ggcTz178A_4EE3-DN_XunzCR1cTn9CTPx_vmKdPDXz-_f7tRuWupcHY6mc99bTg4r5Vg4zjkidjitd714mgp0dyzX2TbV73jNxCJhKLBFKz8y7zJURK-DMaT26qmNzW9qXeaysW1qR0cWmh2gibutPKgfJPx4lKmWeXO3J8gZzTw3QvUr34ulR9dKbjgJKcRznhO05hIjkUSi4TjQIaVW2RJ3qZJUyTVh0UAaEyKQlCwj4C9EWSwdp0n2PUbnSIAMuJLzgBN45hTKdIErFVwdQtQkrMCZEQkkueAponkiVQf2xPL72Nn5HnImbkjf4pd33N9hD33HOE-mg5no7OaXi4pRx-_fPrx7mu_eu9v5f6J2n1VUSBsG4ahtjuaBtUD15_0DpwzpzGqPOnblpM9c0HX2tmrPRbWzh7LfDR-bf2Pnb3Y2eOdbf0hi-qRs0DbwemaWqLvykgz1Q-l8vtSJGVW9FqtzWbT_LdSa5G1yKbFWrZyohpt3xmOn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEGjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfsAO-wg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_3_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                        - link [ref=f4e922] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SikppjFtGdkutSxfq9nLZDozpeOWtrQjoAf-ggcTz178A_4EE3-DN_XunzCR1cTn9CTPx_vmKdPDXz-_f7tRuWupcHY6mc99bTg4r5Vg4zjkidjitd714mgp0dyzX2TbV73jNxCJhKLBFKz8y7zJURK-DMaT26qmNzW9qXeaysW1qR0cWmh2gibutPKgfJPx4lKmWeXO3J8gZzTw3QvUr34ulR9dKbjgJKcRznhO05hIjkUSi4TjQIaVW2RJ3qZJUyTVh0UAaEyKQlCwj4C9EWSwdp0n2PUbnSIAMuJLzgBN45hTKdIErFVwdQtQkrMCZEQkkueAponkiVQf2xPL72Nn5HnImbkjf4pd33N9hD33HOE-mg5no7OaXi4pRx-_fPrx7mu_eu9v5f6J2n1VUSBsG4ahtjuaBtUD15_0DpwzpzGqPOnblpM9c0HX2tmrPRbWzh7LfDR-bf2Pnb3Y2eOdbf0hi-qRs0DbwemaWqLvykgz1Q-l8vtSJGVW9FqtzWbT_LdSa5G1yKbFWrZyohpt3xmOn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEGjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfsAO-wg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_3_img&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - img "REDMI Turbo 5 (12GB + 256GB) Turbo White | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e925]
                        - generic [ref=f4e926]:
                          - link [aria-hidden] [ref=f4e927] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SikppjFtGdkutSxfq9nLZDozpeOWtrQjoAf-ggcTz178A_4EE3-DN_XunzCR1cTn9CTPx_vmKdPDXz-_f7tRuWupcHY6mc99bTg4r5Vg4zjkidjitd714mgp0dyzX2TbV73jNxCJhKLBFKz8y7zJURK-DMaT26qmNzW9qXeaysW1qR0cWmh2gibutPKgfJPx4lKmWeXO3J8gZzTw3QvUr34ulR9dKbjgJKcRznhO05hIjkUSi4TjQIaVW2RJ3qZJUyTVh0UAaEyKQlCwj4C9EWSwdp0n2PUbnSIAMuJLzgBN45hTKdIErFVwdQtQkrMCZEQkkueAponkiVQf2xPL72Nn5HnImbkjf4pd33N9hD33HOE-mg5no7OaXi4pRx-_fPrx7mu_eu9v5f6J2n1VUSBsG4ahtjuaBtUD15_0DpwzpzGqPOnblpM9c0HX2tmrPRbWzh7LfDR-bf2Pnb3Y2eOdbf0hi-qRs0DbwemaWqLvykgz1Q-l8vtSJGVW9FqtzWbT_LdSa5G1yKbFWrZyohpt3xmOn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEGjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfsAO-wg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_3_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - link "REDMI Turbo 5 (12GB + 256GB) Turbo White | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e929] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SikppjFtGdkutSxfq9nLZDozpeOWtrQjoAf-ggcTz178A_4EE3-DN_XunzCR1cTn9CTPx_vmKdPDXz-_f7tRuWupcHY6mc99bTg4r5Vg4zjkidjitd714mgp0dyzX2TbV73jNxCJhKLBFKz8y7zJURK-DMaT26qmNzW9qXeaysW1qR0cWmh2gibutPKgfJPx4lKmWeXO3J8gZzTw3QvUr34ulR9dKbjgJKcRznhO05hIjkUSi4TjQIaVW2RJ3qZJUyTVh0UAaEyKQlCwj4C9EWSwdp0n2PUbnSIAMuJLzgBN45hTKdIErFVwdQtQkrMCZEQkkueAponkiVQf2xPL72Nn5HnImbkjf4pd33N9hD33HOE-mg5no7OaXi4pRx-_fPrx7mu_eu9v5f6J2n1VUSBsG4ahtjuaBtUD15_0DpwzpzGqPOnblpM9c0HX2tmrPRbWzh7LfDR-bf2Pnb3Y2eOdbf0hi-qRs0DbwemaWqLvykgz1Q-l8vtSJGVW9FqtzWbT_LdSa5G1yKbFWrZyohpt3xmOn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEGjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfsAO-wg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_3_title&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e930]:
                              - generic [ref=f4e931]: REDMI Turbo 5 (12GB + 256GB) Turbo White | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                              - generic [aria-hidden] [ref=f4e932]: REDMI Turbo 5 (12GB + 256GB) Turbo White | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Comp…
                          - link "Rated 4.2 out of 5 stars by 406 reviews. Go to review section." [ref=f4e933] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SikppjFtGdkutSxfq9nLZDozpeOWtrQjoAf-ggcTz178A_4EE3-DN_XunzCR1cTn9CTPx_vmKdPDXz-_f7tRuWupcHY6mc99bTg4r5Vg4zjkidjitd714mgp0dyzX2TbV73jNxCJhKLBFKz8y7zJURK-DMaT26qmNzW9qXeaysW1qR0cWmh2gibutPKgfJPx4lKmWeXO3J8gZzTw3QvUr34ulR9dKbjgJKcRznhO05hIjkUSi4TjQIaVW2RJ3qZJUyTVh0UAaEyKQlCwj4C9EWSwdp0n2PUbnSIAMuJLzgBN45hTKdIErFVwdQtQkrMCZEQkkueAponkiVQf2xPL72Nn5HnImbkjf4pd33N9hD33HOE-mg5no7OaXi4pRx-_fPrx7mu_eu9v5f6J2n1VUSBsG4ahtjuaBtUD15_0DpwzpzGqPOnblpM9c0HX2tmrPRbWzh7LfDR-bf2Pnb3Y2eOdbf0hi-qRs0DbwemaWqLvykgz1Q-l8vtSJGVW9FqtzWbT_LdSa5G1yKbFWrZyohpt3xmOn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEGjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfsAO-wg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_3_rating&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550#customerReviews
                            - generic [ref=f4e934]:
                              - generic [ref=f4e935]: "4.2"
                              - generic [ref=f4e936]: 4.2 out of 5 stars.
                              - generic [ref=f4e938]: "406"
                          - link "₹46,999.00" [ref=f4e940] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUE2P0kAYDm7UFb82HNYEbxg5kAx0SikppjFtGdkutSxfq9nLZDozpeOWtrQjoAf-ggcTz178A_4EE3-DN_XunzCR1cTn9CTPx_vmKdPDXz-_f7tRuWupcHY6mc99bTg4r5Vg4zjkidjitd714mgp0dyzX2TbV73jNxCJhKLBFKz8y7zJURK-DMaT26qmNzW9qXeaysW1qR0cWmh2gibutPKgfJPx4lKmWeXO3J8gZzTw3QvUr34ulR9dKbjgJKcRznhO05hIjkUSi4TjQIaVW2RJ3qZJUyTVh0UAaEyKQlCwj4C9EWSwdp0n2PUbnSIAMuJLzgBN45hTKdIErFVwdQtQkrMCZEQkkueAponkiVQf2xPL72Nn5HnImbkjf4pd33N9hD33HOE-mg5no7OaXi4pRx-_fPrx7mu_eu9v5f6J2n1VUSBsG4ahtjuaBtUD15_0DpwzpzGqPOnblpM9c0HX2tmrPRbWzh7LfDR-bf2Pnb3Y2eOdbf0hi-qRs0DbwemaWqLvykgz1Q-l8vtSJGVW9FqtzWbT_LdSa5G1yKbFWrZyohpt3xmOn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEGjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfsAO-wg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H293NCKQ%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-4-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_3_price&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e942]:
                              - generic [ref=f4e943]: ₹46,999.00
                              - generic [aria-hidden] [ref=f4e944]:
                                - text: ₹
                                - generic [ref=f4e945]:
                                  - text: 46,999
                                  - generic [ref=f4e946]: .
                                - text: "00"
                          - generic [ref=f4e947]: "M.R.P: ₹57,999.00"
                    - listitem [ref=f4e950]:
                      - generic [ref=f4e952]:
                        - link [aria-hidden] [ref=f4e953] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3EcOchCfgypW-M0r7bqZjSeGcdDHcexhySwyC-wQGLNhh_gE5D4BnbAnp9AIgWJszrSedyrU6b7v35-_3arct9S4eR4NJ0G2kn_rFaCjcOIp2KDV3rXT-K5RFPfPs82r3qHbyASKUX9MVgGV3mTozS6CIeju6qmNzW9qXeayuWNsR3uW2hyhEbeuPKofJvx4koussq9aTBCzqAfeJfIrX4ulZ9cK7jgJKcxznhOFwmRHIs0ESnHoYwqd8icvF2kTZFWHxchoAkpCkHBLgJ2RpDB2k2eYi9odIoQyJjPOQN0kSScSrFIwUoF17cAJTkrQEZEKnkO6CKVPJXqU3tkBS52Br6PnIk3CMbYC3wvQNj3zhB20fhkMjit6eWScvDxy6cf77661Qd_K3dP1B6qigJh2zAMtd3RNKjuecGot-ecOo1B5ZlrW072wgNda2svd5hZW3so88HwtfU_tvZsaw-3tvWHzKoHzgxt-scragnXk7Fmqh9K5felWMqs6LVa6_W6-W-l1ixrkXWLtWzlSDU6F13ffZ4xnDOcJTHLTVmPC4JpjgUzlfpSMBN2DU2HXa0D60VuQtABRsQ0rlMdKFFbBRqEITBISAGLmNFlTKGEsbowSVbUSc4jU7yEbauAAdv8Bqs-vrc&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_4_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                        - link [ref=f4e955] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3EcOchCfgypW-M0r7bqZjSeGcdDHcexhySwyC-wQGLNhh_gE5D4BnbAnp9AIgWJszrSedyrU6b7v35-_3arct9S4eR4NJ0G2kn_rFaCjcOIp2KDV3rXT-K5RFPfPs82r3qHbyASKUX9MVgGV3mTozS6CIeju6qmNzW9qXeayuWNsR3uW2hyhEbeuPKofJvx4koussq9aTBCzqAfeJfIrX4ulZ9cK7jgJKcxznhOFwmRHIs0ESnHoYwqd8icvF2kTZFWHxchoAkpCkHBLgJ2RpDB2k2eYi9odIoQyJjPOQN0kSScSrFIwUoF17cAJTkrQEZEKnkO6CKVPJXqU3tkBS52Br6PnIk3CMbYC3wvQNj3zhB20fhkMjit6eWScvDxy6cf77661Qd_K3dP1B6qigJh2zAMtd3RNKjuecGot-ecOo1B5ZlrW072wgNda2svd5hZW3so88HwtfU_tvZsaw-3tvWHzKoHzgxt-scragnXk7Fmqh9K5felWMqs6LVa6_W6-W-l1ixrkXWLtWzlSDU6F13ffZ4xnDOcJTHLTVmPC4JpjgUzlfpSMBN2DU2HXa0D60VuQtABRsQ0rlMdKFFbBRqEITBISAGLmNFlTKGEsbowSVbUSc4jU7yEbauAAdv8Bqs-vrc&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_4_img&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - img "REDMI Turbo 5 (12GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e958]
                        - generic [ref=f4e959]:
                          - link [aria-hidden] [ref=f4e960] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3EcOchCfgypW-M0r7bqZjSeGcdDHcexhySwyC-wQGLNhh_gE5D4BnbAnp9AIgWJszrSedyrU6b7v35-_3arct9S4eR4NJ0G2kn_rFaCjcOIp2KDV3rXT-K5RFPfPs82r3qHbyASKUX9MVgGV3mTozS6CIeju6qmNzW9qXeayuWNsR3uW2hyhEbeuPKofJvx4koussq9aTBCzqAfeJfIrX4ulZ9cK7jgJKcxznhOFwmRHIs0ESnHoYwqd8icvF2kTZFWHxchoAkpCkHBLgJ2RpDB2k2eYi9odIoQyJjPOQN0kSScSrFIwUoF17cAJTkrQEZEKnkO6CKVPJXqU3tkBS52Br6PnIk3CMbYC3wvQNj3zhB20fhkMjit6eWScvDxy6cf77661Qd_K3dP1B6qigJh2zAMtd3RNKjuecGot-ecOo1B5ZlrW072wgNda2svd5hZW3so88HwtfU_tvZsaw-3tvWHzKoHzgxt-scragnXk7Fmqh9K5felWMqs6LVa6_W6-W-l1ixrkXWLtWzlSDU6F13ffZ4xnDOcJTHLTVmPC4JpjgUzlfpSMBN2DU2HXa0D60VuQtABRsQ0rlMdKFFbBRqEITBISAGLmNFlTKGEsbowSVbUSc4jU7yEbauAAdv8Bqs-vrc&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_4_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - link "REDMI Turbo 5 (12GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e962] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3EcOchCfgypW-M0r7bqZjSeGcdDHcexhySwyC-wQGLNhh_gE5D4BnbAnp9AIgWJszrSedyrU6b7v35-_3arct9S4eR4NJ0G2kn_rFaCjcOIp2KDV3rXT-K5RFPfPs82r3qHbyASKUX9MVgGV3mTozS6CIeju6qmNzW9qXeayuWNsR3uW2hyhEbeuPKofJvx4koussq9aTBCzqAfeJfIrX4ulZ9cK7jgJKcxznhOFwmRHIs0ESnHoYwqd8icvF2kTZFWHxchoAkpCkHBLgJ2RpDB2k2eYi9odIoQyJjPOQN0kSScSrFIwUoF17cAJTkrQEZEKnkO6CKVPJXqU3tkBS52Br6PnIk3CMbYC3wvQNj3zhB20fhkMjit6eWScvDxy6cf77661Qd_K3dP1B6qigJh2zAMtd3RNKjuecGot-ecOo1B5ZlrW072wgNda2svd5hZW3so88HwtfU_tvZsaw-3tvWHzKoHzgxt-scragnXk7Fmqh9K5felWMqs6LVa6_W6-W-l1ixrkXWLtWzlSDU6F13ffZ4xnDOcJTHLTVmPC4JpjgUzlfpSMBN2DU2HXa0D60VuQtABRsQ0rlMdKFFbBRqEITBISAGLmNFlTKGEsbowSVbUSc4jU7yEbauAAdv8Bqs-vrc&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_4_title&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e963]:
                              - generic [ref=f4e964]: REDMI Turbo 5 (12GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                              - generic [aria-hidden] [ref=f4e965]: REDMI Turbo 5 (12GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | 7540mAh Battery | 100W HyperCharge | Comp…
                          - link "Rated 4.2 out of 5 stars by 406 reviews. Go to review section." [ref=f4e966] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3EcOchCfgypW-M0r7bqZjSeGcdDHcexhySwyC-wQGLNhh_gE5D4BnbAnp9AIgWJszrSedyrU6b7v35-_3arct9S4eR4NJ0G2kn_rFaCjcOIp2KDV3rXT-K5RFPfPs82r3qHbyASKUX9MVgGV3mTozS6CIeju6qmNzW9qXeayuWNsR3uW2hyhEbeuPKofJvx4koussq9aTBCzqAfeJfIrX4ulZ9cK7jgJKcxznhOFwmRHIs0ESnHoYwqd8icvF2kTZFWHxchoAkpCkHBLgJ2RpDB2k2eYi9odIoQyJjPOQN0kSScSrFIwUoF17cAJTkrQEZEKnkO6CKVPJXqU3tkBS52Br6PnIk3CMbYC3wvQNj3zhB20fhkMjit6eWScvDxy6cf77661Qd_K3dP1B6qigJh2zAMtd3RNKjuecGot-ecOo1B5ZlrW072wgNda2svd5hZW3so88HwtfU_tvZsaw-3tvWHzKoHzgxt-scragnXk7Fmqh9K5felWMqs6LVa6_W6-W-l1ixrkXWLtWzlSDU6F13ffZ4xnDOcJTHLTVmPC4JpjgUzlfpSMBN2DU2HXa0D60VuQtABRsQ0rlMdKFFbBRqEITBISAGLmNFlTKGEsbowSVbUSc4jU7yEbauAAdv8Bqs-vrc&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_4_rating&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550#customerReviews
                            - generic [ref=f4e967]:
                              - generic [ref=f4e968]: "4.2"
                              - generic [ref=f4e969]: 4.2 out of 5 stars.
                              - generic [ref=f4e971]: "406"
                          - link "₹46,999.00" [ref=f4e973] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJx3EcOchCfgypW-M0r7bqZjSeGcdDHcexhySwyC-wQGLNhh_gE5D4BnbAnp9AIgWJszrSedyrU6b7v35-_3arct9S4eR4NJ0G2kn_rFaCjcOIp2KDV3rXT-K5RFPfPs82r3qHbyASKUX9MVgGV3mTozS6CIeju6qmNzW9qXeayuWNsR3uW2hyhEbeuPKofJvx4koussq9aTBCzqAfeJfIrX4ulZ9cK7jgJKcxznhOFwmRHIs0ESnHoYwqd8icvF2kTZFWHxchoAkpCkHBLgJ2RpDB2k2eYi9odIoQyJjPOQN0kSScSrFIwUoF17cAJTkrQEZEKnkO6CKVPJXqU3tkBS52Br6PnIk3CMbYC3wvQNj3zhB20fhkMjit6eWScvDxy6cf77661Qd_K3dP1B6qigJh2zAMtd3RNKjuecGot-ecOo1B5ZlrW072wgNda2svd5hZW3so88HwtfU_tvZsaw-3tvWHzKoHzgxt-scragnXk7Fmqh9K5felWMqs6LVa6_W6-W-l1ixrkXWLtWzlSDU6F13ffZ4xnDOcJTHLTVmPC4JpjgUzlfpSMBN2DU2HXa0D60VuQtABRsQ0rlMdKFFbBRqEITBISAGLmNFlTKGEsbowSVbUSc4jU7yEbauAAdv8Bqs-vrc&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H295X7LD%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-5-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_4_price&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e975]:
                              - generic [ref=f4e976]: ₹46,999.00
                              - generic [aria-hidden] [ref=f4e977]:
                                - text: ₹
                                - generic [ref=f4e978]:
                                  - text: 46,999
                                  - generic [ref=f4e979]: .
                                - text: "00"
                          - generic [ref=f4e980]: "M.R.P: ₹57,999.00"
                    - listitem [ref=f4e983]:
                      - generic [ref=f4e985]:
                        - link [aria-hidden] [ref=f4e986] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVULuO00AUVVgBS3itUixS6IJIEWkSj-M4cpCF_Biy3g3O5rWgNKPxzDge1rEde0gCRX6BAomahh_gE5D4Bjqg5yeQyILEqY50HvfqlOnhr5_fv92o3LVUOD0dz2a-dta_qJVg4zjkidjitd4dxNFSotnAfpFtX_WO30AkEor6E7DyL_MmR0n4MhiNb6ua3tT0pt5pKvNrEzs4tND0BI29SeVB-SbjxaVMs8qdmT9GzrDve3PkVj-Xyo-uFFxwktMIZzynaUwkxyKJRcJxIMPKLbIkb9OkKZLqwyIANCZFISjYR8DeCDJYu84T7PmNThEAGfElZ4CmccypFGkC1iq4ugUoyVkBMiISyXNA00TyRKqP7bHlu9gZDgbImXpDf4I9f-D5CA-8C4RdNDmbDs9rermkHH388unHu69u9d7fyv0TtfuqokDYNgxDbXc0DaoHnj_uHTjnTmNYeeLalpM980DX2tmrPRbWzh7JfDh6bf2Pnb3Y2aOdbf0hi-qRs0Db_umaWsL1ZKSZ6odS-X0pkjIreq3WZrNp_luptchaZNNiLVs5UY3uyGnPn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEOjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfrRy-vA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_5_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                        - link [ref=f4e988] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVULuO00AUVVgBS3itUixS6IJIEWkSj-M4cpCF_Biy3g3O5rWgNKPxzDge1rEde0gCRX6BAomahh_gE5D4Bjqg5yeQyILEqY50HvfqlOnhr5_fv92o3LVUOD0dz2a-dta_qJVg4zjkidjitd4dxNFSotnAfpFtX_WO30AkEor6E7DyL_MmR0n4MhiNb6ua3tT0pt5pKvNrEzs4tND0BI29SeVB-SbjxaVMs8qdmT9GzrDve3PkVj-Xyo-uFFxwktMIZzynaUwkxyKJRcJxIMPKLbIkb9OkKZLqwyIANCZFISjYR8DeCDJYu84T7PmNThEAGfElZ4CmccypFGkC1iq4ugUoyVkBMiISyXNA00TyRKqP7bHlu9gZDgbImXpDf4I9f-D5CA-8C4RdNDmbDs9rermkHH388unHu69u9d7fyv0TtfuqokDYNgxDbXc0DaoHnj_uHTjnTmNYeeLalpM980DX2tmrPRbWzh7JfDh6bf2Pnb3Y2aOdbf0hi-qRs0Db_umaWsL1ZKSZ6odS-X0pkjIreq3WZrNp_luptchaZNNiLVs5UY3uyGnPn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEOjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfrRy-vA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_5_img&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - img "REDMI Turbo 5 (12GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e991]
                        - generic [ref=f4e992]:
                          - link [aria-hidden] [ref=f4e993] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVULuO00AUVVgBS3itUixS6IJIEWkSj-M4cpCF_Biy3g3O5rWgNKPxzDge1rEde0gCRX6BAomahh_gE5D4Bjqg5yeQyILEqY50HvfqlOnhr5_fv92o3LVUOD0dz2a-dta_qJVg4zjkidjitd4dxNFSotnAfpFtX_WO30AkEor6E7DyL_MmR0n4MhiNb6ua3tT0pt5pKvNrEzs4tND0BI29SeVB-SbjxaVMs8qdmT9GzrDve3PkVj-Xyo-uFFxwktMIZzynaUwkxyKJRcJxIMPKLbIkb9OkKZLqwyIANCZFISjYR8DeCDJYu84T7PmNThEAGfElZ4CmccypFGkC1iq4ugUoyVkBMiISyXNA00TyRKqP7bHlu9gZDgbImXpDf4I9f-D5CA-8C4RdNDmbDs9rermkHH388unHu69u9d7fyv0TtfuqokDYNgxDbXc0DaoHnj_uHTjnTmNYeeLalpM980DX2tmrPRbWzh7JfDh6bf2Pnb3Y2aOdbf0hi-qRs0Db_umaWsL1ZKSZ6odS-X0pkjIreq3WZrNp_luptchaZNNiLVs5UY3uyGnPn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEOjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfrRy-vA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_5_bkgd&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                          - link "REDMI Turbo 5 (12GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera" [ref=f4e995] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVULuO00AUVVgBS3itUixS6IJIEWkSj-M4cpCF_Biy3g3O5rWgNKPxzDge1rEde0gCRX6BAomahh_gE5D4Bjqg5yeQyILEqY50HvfqlOnhr5_fv92o3LVUOD0dz2a-dta_qJVg4zjkidjitd4dxNFSotnAfpFtX_WO30AkEor6E7DyL_MmR0n4MhiNb6ua3tT0pt5pKvNrEzs4tND0BI29SeVB-SbjxaVMs8qdmT9GzrDve3PkVj-Xyo-uFFxwktMIZzynaUwkxyKJRcJxIMPKLbIkb9OkKZLqwyIANCZFISjYR8DeCDJYu84T7PmNThEAGfElZ4CmccypFGkC1iq4ugUoyVkBMiISyXNA00TyRKqP7bHlu9gZDgbImXpDf4I9f-D5CA-8C4RdNDmbDs9rermkHH388unHu69u9d7fyv0TtfuqokDYNgxDbXc0DaoHnj_uHTjnTmNYeeLalpM980DX2tmrPRbWzh7JfDh6bf2Pnb3Y2aOdbf0hi-qRs0Db_umaWsL1ZKSZ6odS-X0pkjIreq3WZrNp_luptchaZNNiLVs5UY3uyGnPn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEOjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfrRy-vA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_5_title&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e996]:
                              - generic [ref=f4e997]: REDMI Turbo 5 (12GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Compact 16.75cm(6.59) 120Hz AMOLED Screen | 50MP Sony OIS Camera
                              - generic [aria-hidden] [ref=f4e998]: REDMI Turbo 5 (12GB + 256GB) Nitro Blue | Dimensity 8500 Ultra | Mega 7540mAh Battery | 100W HyperCharge | Comp…
                          - link "Rated 4.2 out of 5 stars by 406 reviews. Go to review section." [ref=f4e999] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVULuO00AUVVgBS3itUixS6IJIEWkSj-M4cpCF_Biy3g3O5rWgNKPxzDge1rEde0gCRX6BAomahh_gE5D4Bjqg5yeQyILEqY50HvfqlOnhr5_fv92o3LVUOD0dz2a-dta_qJVg4zjkidjitd4dxNFSotnAfpFtX_WO30AkEor6E7DyL_MmR0n4MhiNb6ua3tT0pt5pKvNrEzs4tND0BI29SeVB-SbjxaVMs8qdmT9GzrDve3PkVj-Xyo-uFFxwktMIZzynaUwkxyKJRcJxIMPKLbIkb9OkKZLqwyIANCZFISjYR8DeCDJYu84T7PmNThEAGfElZ4CmccypFGkC1iq4ugUoyVkBMiISyXNA00TyRKqP7bHlu9gZDgbImXpDf4I9f-D5CA-8C4RdNDmbDs9rermkHH388unHu69u9d7fyv0TtfuqokDYNgxDbXc0DaoHnj_uHTjnTmNYeeLalpM980DX2tmrPRbWzh7JfDh6bf2Pnb3Y2aOdbf0hi-qRs0Db_umaWsL1ZKSZ6odS-X0pkjIreq3WZrNp_luptchaZNNiLVs5UY3uyGnPn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEOjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfrRy-vA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_5_rating&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550#customerReviews
                            - generic [ref=f4e1000]:
                              - generic [ref=f4e1001]: "4.2"
                              - generic [ref=f4e1002]: 4.2 out of 5 stars.
                              - generic [ref=f4e1004]: "406"
                          - link "₹46,999.00" [ref=f4e1006] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVULuO00AUVVgBS3itUixS6IJIEWkSj-M4cpCF_Biy3g3O5rWgNKPxzDge1rEde0gCRX6BAomahh_gE5D4Bjqg5yeQyILEqY50HvfqlOnhr5_fv92o3LVUOD0dz2a-dta_qJVg4zjkidjitd4dxNFSotnAfpFtX_WO30AkEor6E7DyL_MmR0n4MhiNb6ua3tT0pt5pKvNrEzs4tND0BI29SeVB-SbjxaVMs8qdmT9GzrDve3PkVj-Xyo-uFFxwktMIZzynaUwkxyKJRcJxIMPKLbIkb9OkKZLqwyIANCZFISjYR8DeCDJYu84T7PmNThEAGfElZ4CmccypFGkC1iq4ugUoyVkBMiISyXNA00TyRKqP7bHlu9gZDgbImXpDf4I9f-D5CA-8C4RdNDmbDs9rermkHH388unHu69u9d7fyv0TtfuqokDYNgxDbXc0DaoHnj_uHTjnTmNYeeLalpM980DX2tmrPRbWzh7JfDh6bf2Pnb3Y2aOdbf0hi-qRs0Db_umaWsL1ZKSZ6odS-X0pkjIreq3WZrNp_luptchaZNNiLVs5UY3uyGnPn2YM5wxnccRyU9ajgmCaY8FMpb4SzIRdQ9NhV-vAepGbEOjACJnGdaoDJWyrQIMwAAYJKGAhM7qMKZQwVhcmyYo6yXloiuewbRXQZ9vfrRy-vA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0H297QC3Z%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617451%26sr%3D1-6-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DiM13As1Ndx&ref_=sbx__sbtcd2_asin_5_price&pd_rd_w=1Z1uI&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=AifsY&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
                            - generic [ref=f4e1008]:
                              - generic [ref=f4e1009]: ₹46,999.00
                              - generic [aria-hidden] [ref=f4e1010]:
                                - text: ₹
                                - generic [ref=f4e1011]:
                                  - text: 46,999
                                  - generic [ref=f4e1012]: .
                                - text: "00"
                          - generic [ref=f4e1013]: "M.R.P: ₹57,999.00"
          - generic [ref=f4e1017]:
            - heading "More results" [level=2] [ref=f4e1021]
            - generic:
              - list:
                - listitem [ref=f4e1022]:
                  - generic [ref=f4e1028]:
                    - link [aria-hidden] [ref=f4e1034] [cursor=pointer]:
                      - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0H1WY55ZL/ref=sr_1_4?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4
                    - generic [ref=f4e1039]:
                      - link [ref=f4e1041] [cursor=pointer]:
                        - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0H1WY55ZL/ref=sr_1_4?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4
                        - heading "Samsung Galaxy A56 5G Mobile (Awesome Violet Glow, 8GB, 128GB) | Segment Most Complete Triple Camera | 50MP | AI Editing | 4nm Processor | sAMOLED | 5000mAh | Gorilla Glass Victus+| Knox Security" [level=2] [ref=f4e1042]
                      - generic [ref=f4e1043]:
                        - generic [ref=f4e1044]:
                          - text: "4.4"
                          - button "4.4 out of 5 stars, rating details" [ref=f4e1046] [cursor=pointer]:
                            - generic [ref=f4e1048]: 4.4 out of 5 stars
                          - link "1,350 ratings" [ref=f4e1050] [cursor=pointer]:
                            - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0H1WY55ZL/ref=sr_1_4?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4#customerReviews
                            - text: (1.3K)
                        - generic [ref=f4e1051]: 5K+ bought in past month
                      - generic [ref=f4e1054]:
                        - generic [ref=f4e1055]:
                          - link "Limited time deal" [ref=f4e1057] [cursor=pointer]:
                            - /url: /deals
                          - generic [ref=f4e1063]:
                            - generic [ref=f4e1064]: Price, product page
                            - 'link "₹31,999 M.R.P: ₹49,999 M.R.P: ₹49,999" [ref=f4e1065] [cursor=pointer]':
                              - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0H1WY55ZL/ref=sr_1_4?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4
                              - generic [ref=f4e1066]:
                                - generic [ref=f4e1067]: ₹31,999
                                - generic [aria-hidden] [ref=f4e1068]: ₹31,999
                              - generic [ref=f4e1069]: "M.R.P: ₹49,999"
                              - generic [ref=f4e1070]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1071]:
                                  - generic [ref=f4e1072]: ₹49,999
                                  - text: ₹49,999
                            - text: (36% off)
                          - generic [ref=f4e1076]:
                            - generic [ref=f4e1077]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1078]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1081]:
                          - generic [ref=f4e1082]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1084]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1099] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1100]
                          - generic [aria-hidden] [ref=f4e1101]: Add to cart
                        - group "colours available" [ref=f4e1103]:
                          - list [ref=f4e1104]:
                            - generic [ref=f4e1105]:
                              - listitem:
                                - link "Awesome Violet Glow":
                                  - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0H1WY55ZL/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4
                                  - generic [ref=f4e1106] [cursor=pointer]
                            - generic [ref=f4e1108]:
                              - listitem:
                                - link "Awesome Midnight Blue":
                                  - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0HKJ245Y6/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4
                                  - generic [ref=f4e1109] [cursor=pointer]
                            - generic [ref=f4e1111]:
                              - listitem:
                                - link "Awesome Olive":
                                  - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0DYDQYVN6/ref=cs_sr_dp_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4
                                  - generic [ref=f4e1112] [cursor=pointer]
                            - generic [ref=f4e1114]:
                              - listitem:
                                - link "Awesome Pink":
                                  - /url: /Samsung-Awesome-Complete-Processor-Security/dp/B0FQB6YPMT/ref=cs_sr_dp_4?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-4
                                  - generic [ref=f4e1115] [cursor=pointer]
                - listitem [ref=f4e1119]:
                  - generic [ref=f4e1125]:
                    - link [aria-hidden] [ref=f4e1131] [cursor=pointer]:
                      - /url: /iQOO-Titanium-Dimensity-Processor-Shock-Resistance/dp/B0H1JD62J1/ref=sr_1_5?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-5
                    - generic [ref=f4e1136]:
                      - link [ref=f4e1138] [cursor=pointer]:
                        - /url: /iQOO-Titanium-Dimensity-Processor-Shock-Resistance/dp/B0H1JD62J1/ref=sr_1_5?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-5
                        - heading "iQOO Z10 Lite 5G (Titanium Blue 2026, 4GB RAM, 128GB Storage) | Dimensity 6300 5G Processor | 50MP Sony AI Camera | 6000 mAh Battery | IP64 Rated & Military Grade Shock-Resistance*" [level=2] [ref=f4e1139]
                      - generic [ref=f4e1140]:
                        - generic [ref=f4e1141]:
                          - text: "4.0"
                          - button "4.0 out of 5 stars, rating details" [ref=f4e1143] [cursor=pointer]:
                            - generic [ref=f4e1145]: 4.0 out of 5 stars
                          - link "2,166 ratings" [ref=f4e1147] [cursor=pointer]:
                            - /url: /iQOO-Titanium-Dimensity-Processor-Shock-Resistance/dp/B0H1JD62J1/ref=sr_1_5?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-5#customerReviews
                            - text: (2.1K)
                        - generic [ref=f4e1148]: 500+ bought in past month
                      - generic [ref=f4e1151]:
                        - generic [ref=f4e1152]:
                          - generic [ref=f4e1154]:
                            - generic [ref=f4e1155]: Price, product page
                            - 'link "₹18,999 M.R.P: ₹28,999 M.R.P: ₹28,999" [ref=f4e1156] [cursor=pointer]':
                              - /url: /iQOO-Titanium-Dimensity-Processor-Shock-Resistance/dp/B0H1JD62J1/ref=sr_1_5?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-5
                              - generic [ref=f4e1157]:
                                - generic [ref=f4e1158]: ₹18,999
                                - generic [aria-hidden] [ref=f4e1159]: ₹18,999
                              - generic [ref=f4e1160]: "M.R.P: ₹28,999"
                              - generic [ref=f4e1161]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1162]:
                                  - generic [ref=f4e1163]: ₹28,999
                                  - text: ₹28,999
                            - text: (34% off)
                          - generic [ref=f4e1167]:
                            - generic [ref=f4e1168]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1169]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1172]:
                          - generic [ref=f4e1173]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1175]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1190] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1191]
                          - generic [aria-hidden] [ref=f4e1192]: Add to cart
                        - group "colours available" [ref=f4e1194]:
                          - list [ref=f4e1195]:
                            - generic [ref=f4e1196]:
                              - listitem:
                                - link "Titanium Blue 2026":
                                  - /url: /iQOO-Titanium-Dimensity-Processor-Shock-Resistance/dp/B0H1JD62J1/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-5
                                  - generic [ref=f4e1197] [cursor=pointer]
                            - generic [ref=f4e1199]:
                              - listitem:
                                - link "Cyber Green":
                                  - /url: /iQOO-Titanium-Dimensity-Processor-Shock-Resistance/dp/B0GCF6LDKF/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-5
                                  - generic [ref=f4e1200] [cursor=pointer]
                - listitem [ref=f4e1204]:
                  - generic [ref=f4e1210]:
                    - link [aria-hidden] [ref=f4e1216] [cursor=pointer]:
                      - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYF57G9/ref=sr_1_6?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-6
                    - generic [ref=f4e1221]:
                      - link [ref=f4e1223] [cursor=pointer]:
                        - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYF57G9/ref=sr_1_6?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-6
                        - heading "OnePlus Nord CE6 Lite | 8GB+256GB | Vivid Mint | Segment's Fastest Dimensity 7400 Apex Processor | 7000mAh Battery | Segment's Highest 144Hz Refresh Rate | 50MP Main Camera, 4K Video Recording" [level=2] [ref=f4e1224]
                      - generic [ref=f4e1225]:
                        - generic [ref=f4e1226]:
                          - text: "4.3"
                          - button "4.3 out of 5 stars, rating details" [ref=f4e1228] [cursor=pointer]:
                            - generic [ref=f4e1230]: 4.3 out of 5 stars
                          - link "906 ratings" [ref=f4e1232] [cursor=pointer]:
                            - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYF57G9/ref=sr_1_6?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-6#customerReviews
                            - text: (906)
                        - generic [ref=f4e1233]: 2K+ bought in past month
                      - generic [ref=f4e1236]:
                        - generic [ref=f4e1237]:
                          - generic [ref=f4e1239]:
                            - generic [ref=f4e1240]: Price, product page
                            - 'link "₹34,999 M.R.P: ₹36,999 M.R.P: ₹36,999" [ref=f4e1241] [cursor=pointer]':
                              - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYF57G9/ref=sr_1_6?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-6
                              - generic [ref=f4e1242]:
                                - generic [ref=f4e1243]: ₹34,999
                                - generic [aria-hidden] [ref=f4e1244]: ₹34,999
                              - generic [ref=f4e1245]: "M.R.P: ₹36,999"
                              - generic [ref=f4e1246]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1247]:
                                  - generic [ref=f4e1248]: ₹36,999
                                  - text: ₹36,999
                            - text: (5% off)
                          - generic [ref=f4e1252]:
                            - generic [ref=f4e1253]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1254]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1257]:
                          - generic [ref=f4e1258]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1260]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1275] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1276]
                          - generic [aria-hidden] [ref=f4e1277]: Add to cart
                        - group "colours available" [ref=f4e1279]:
                          - list [ref=f4e1280]:
                            - generic [ref=f4e1281]:
                              - listitem:
                                - link "Vivid Mint":
                                  - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYF57G9/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-6
                                  - generic [ref=f4e1282] [cursor=pointer]
                            - generic [ref=f4e1284]:
                              - listitem:
                                - link "Hyper Black":
                                  - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYFM7QZ/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-6
                                  - generic [ref=f4e1285] [cursor=pointer]
                - listitem [ref=f4e1289]:
                  - generic [ref=f4e1295]:
                    - link [aria-hidden] [ref=f4e1301] [cursor=pointer]:
                      - /url: /Lava-Opulent-Storage-6000mAh-Battery/dp/B0HHFH1VV4/ref=sr_1_7?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-7
                    - generic [ref=f4e1306]:
                      - link [ref=f4e1308] [cursor=pointer]:
                        - /url: /Lava-Opulent-Storage-6000mAh-Battery/dp/B0HHFH1VV4/ref=sr_1_7?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-7
                        - heading "Lava Bold N4 Pro 5G (Opulent Lilac, 6GB RAM, 128GB Storage) | 50MP AI Rear Camera | 6000mAh Battery with 18W Fast Charge | 500K+ Antutu | IP64 Rated |Clean Android 16 | Free Service @ Home" [level=2] [ref=f4e1309]
                      - generic [ref=f4e1310]:
                        - generic [ref=f4e1311]:
                          - text: "3.5"
                          - button "3.5 out of 5 stars, rating details" [ref=f4e1313] [cursor=pointer]:
                            - generic [ref=f4e1315]: 3.5 out of 5 stars
                          - link "260 ratings" [ref=f4e1317] [cursor=pointer]:
                            - /url: /Lava-Opulent-Storage-6000mAh-Battery/dp/B0HHFH1VV4/ref=sr_1_7?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-7#customerReviews
                            - text: (260)
                        - generic [ref=f4e1318]: 2K+ bought in past month
                      - generic [ref=f4e1321]:
                        - generic [ref=f4e1322]:
                          - generic [ref=f4e1324]:
                            - generic [ref=f4e1325]: Price, product page
                            - 'link "₹14,999 M.R.P: ₹21,999 M.R.P: ₹21,999" [ref=f4e1326] [cursor=pointer]':
                              - /url: /Lava-Opulent-Storage-6000mAh-Battery/dp/B0HHFH1VV4/ref=sr_1_7?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-7
                              - generic [ref=f4e1327]:
                                - generic [ref=f4e1328]: ₹14,999
                                - generic [aria-hidden] [ref=f4e1329]: ₹14,999
                              - generic [ref=f4e1330]: "M.R.P: ₹21,999"
                              - generic [ref=f4e1331]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1332]:
                                  - generic [ref=f4e1333]: ₹21,999
                                  - text: ₹21,999
                            - text: (32% off)
                          - generic [ref=f4e1337]:
                            - generic [ref=f4e1338]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1339]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1342]:
                          - generic [ref=f4e1343]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1345]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1360] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1361]
                          - generic [aria-hidden] [ref=f4e1362]: Add to cart
                        - group "colours available" [ref=f4e1364]:
                          - list [ref=f4e1365]:
                            - generic [ref=f4e1366]:
                              - listitem:
                                - link "Opulent Lilac":
                                  - /url: /Lava-Opulent-Storage-6000mAh-Battery/dp/B0HHFH1VV4/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-7
                                  - generic [ref=f4e1367] [cursor=pointer]
                            - generic [ref=f4e1369]:
                              - listitem:
                                - link "Monaco Blue":
                                  - /url: /Lava-Opulent-Storage-6000mAh-Battery/dp/B0HHFBKKM6/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-7
                                  - generic [ref=f4e1370] [cursor=pointer]
                - listitem [ref=f4e1374]:
                  - generic [ref=f4e1380]:
                    - link [aria-hidden] [ref=f4e1386] [cursor=pointer]:
                      - /url: /OnePlus-Midnight-Smoothness-Military-Grade-Durability/dp/B0H3LB843J/ref=sr_1_8?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-8
                    - generic [ref=f4e1391]:
                      - link [ref=f4e1393] [cursor=pointer]:
                        - /url: /OnePlus-Midnight-Smoothness-Military-Grade-Durability/dp/B0H3LB843J/ref=sr_1_8?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-8
                        - heading "OnePlus N6 | 4GB+128GB | Midnight Green | Segment's Biggest 8000mAh Battery | Segment's Fastest 45W Charging | 48-Month Smoothness | Smooth 120Hz Display | 50MP Camera | Military-Grade Durability" [level=2] [ref=f4e1394]
                      - generic [ref=f4e1395]:
                        - generic [ref=f4e1396]:
                          - text: "3.6"
                          - button "3.6 out of 5 stars, rating details" [ref=f4e1398] [cursor=pointer]:
                            - generic [ref=f4e1400]: 3.6 out of 5 stars
                          - link "687 ratings" [ref=f4e1402] [cursor=pointer]:
                            - /url: /OnePlus-Midnight-Smoothness-Military-Grade-Durability/dp/B0H3LB843J/ref=sr_1_8?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-8#customerReviews
                            - text: (687)
                        - generic [ref=f4e1403]: 3K+ bought in past month
                      - generic [ref=f4e1406]:
                        - generic [ref=f4e1407]:
                          - generic [ref=f4e1409]:
                            - generic [ref=f4e1410]: Price, product page
                            - 'link "₹24,999 M.R.P: ₹30,999 M.R.P: ₹30,999" [ref=f4e1411] [cursor=pointer]':
                              - /url: /OnePlus-Midnight-Smoothness-Military-Grade-Durability/dp/B0H3LB843J/ref=sr_1_8?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-8
                              - generic [ref=f4e1412]:
                                - generic [ref=f4e1413]: ₹24,999
                                - generic [aria-hidden] [ref=f4e1414]: ₹24,999
                              - generic [ref=f4e1415]: "M.R.P: ₹30,999"
                              - generic [ref=f4e1416]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1417]:
                                  - generic [ref=f4e1418]: ₹30,999
                                  - text: ₹30,999
                            - text: (19% off)
                          - generic [ref=f4e1422]:
                            - generic [ref=f4e1423]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1424]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1427]:
                          - generic [ref=f4e1428]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1430]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1445] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1446]
                          - generic [aria-hidden] [ref=f4e1447]: Add to cart
                        - group "colours available" [ref=f4e1449]:
                          - list [ref=f4e1450]:
                            - generic [ref=f4e1451]:
                              - listitem:
                                - link "Midnight Green":
                                  - /url: /OnePlus-Midnight-Smoothness-Military-Grade-Durability/dp/B0H3LB843J/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-8
                                  - generic [ref=f4e1452] [cursor=pointer]
                            - generic [ref=f4e1454]:
                              - listitem:
                                - link "Fresh Mint":
                                  - /url: /OnePlus-Midnight-Smoothness-Military-Grade-Durability/dp/B0H3LBSGF8/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-8
                                  - generic [ref=f4e1455] [cursor=pointer]
                - listitem [ref=f4e1459]:
                  - generic [ref=f4e1465]:
                    - link [aria-hidden] [ref=f4e1471] [cursor=pointer]:
                      - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYGLNH7/ref=sr_1_9?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-9
                    - generic [ref=f4e1476]:
                      - link [ref=f4e1478] [cursor=pointer]:
                        - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYGLNH7/ref=sr_1_9?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-9
                        - heading "OnePlus Nord CE6 Lite | 8GB+128GB | Vivid Mint | Segment's Fastest Dimensity 7400 Apex Processor | 7000mAh Battery | Segment's Highest 144Hz Refresh Rate | 50MP Main Camera, 4K Video Recording" [level=2] [ref=f4e1479]
                      - generic [ref=f4e1480]:
                        - generic [ref=f4e1481]:
                          - text: "4.4"
                          - button "4.4 out of 5 stars, rating details" [ref=f4e1483] [cursor=pointer]:
                            - generic [ref=f4e1485]: 4.4 out of 5 stars
                          - link "1,323 ratings" [ref=f4e1487] [cursor=pointer]:
                            - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYGLNH7/ref=sr_1_9?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-9#customerReviews
                            - text: (1.3K)
                        - generic [ref=f4e1488]: 5K+ bought in past month
                      - generic [ref=f4e1491]:
                        - generic [ref=f4e1492]:
                          - generic [ref=f4e1494]:
                            - generic [ref=f4e1495]: Price, product page
                            - 'link "₹30,999 M.R.P: ₹33,999 M.R.P: ₹33,999" [ref=f4e1496] [cursor=pointer]':
                              - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYGLNH7/ref=sr_1_9?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-9
                              - generic [ref=f4e1497]:
                                - generic [ref=f4e1498]: ₹30,999
                                - generic [aria-hidden] [ref=f4e1499]: ₹30,999
                              - generic [ref=f4e1500]: "M.R.P: ₹33,999"
                              - generic [ref=f4e1501]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1502]:
                                  - generic [ref=f4e1503]: ₹33,999
                                  - text: ₹33,999
                            - text: (9% off)
                          - generic [ref=f4e1507]:
                            - generic [ref=f4e1508]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1509]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1512]:
                          - generic [ref=f4e1513]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1515]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1530] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1531]
                          - generic [aria-hidden] [ref=f4e1532]: Add to cart
                        - group "colours available" [ref=f4e1534]:
                          - list [ref=f4e1535]:
                            - generic [ref=f4e1536]:
                              - listitem:
                                - link "Vivid Mint":
                                  - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYGLNH7/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-9
                                  - generic [ref=f4e1537] [cursor=pointer]
                            - generic [ref=f4e1539]:
                              - listitem:
                                - link "Hyper Black":
                                  - /url: /OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYXPZBS/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-9
                                  - generic [ref=f4e1540] [cursor=pointer]
                - listitem [ref=f4e1544]:
                  - generic [ref=f4e1550]:
                    - link [aria-hidden] [ref=f4e1556] [cursor=pointer]:
                      - /url: /Lava-Storage-Display-Fingerprint-Phone-Cover/dp/B0HDPDGKJ4/ref=sr_1_10?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-10
                    - generic [ref=f4e1561]:
                      - link [ref=f4e1563] [cursor=pointer]:
                        - /url: /Lava-Storage-Display-Fingerprint-Phone-Cover/dp/B0HDPDGKJ4/ref=sr_1_10?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-10
                        - heading "Lava Bold N4 Lite (Empire Gold, 3GB RAM, 32GB Storage) | 6.56\" qHD Display | 8MP Rear Camera | 5000 mAh Battery | Free Service @ Home | Fingerprint Reader | Charger & Phone-Cover in Box" [level=2] [ref=f4e1564]
                      - generic [ref=f4e1565]:
                        - generic [ref=f4e1566]:
                          - text: "3.3"
                          - button "3.3 out of 5 stars, rating details" [ref=f4e1568] [cursor=pointer]:
                            - generic [ref=f4e1570]: 3.3 out of 5 stars
                          - link "142 ratings" [ref=f4e1572] [cursor=pointer]:
                            - /url: /Lava-Storage-Display-Fingerprint-Phone-Cover/dp/B0HDPDGKJ4/ref=sr_1_10?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-10#customerReviews
                            - text: (142)
                        - generic [ref=f4e1573]: 3K+ bought in past month
                      - generic [ref=f4e1576]:
                        - generic [ref=f4e1577]:
                          - generic [ref=f4e1579]:
                            - generic [ref=f4e1580]: Price, product page
                            - 'link "₹8,299 M.R.P: ₹9,999 M.R.P: ₹9,999" [ref=f4e1581] [cursor=pointer]':
                              - /url: /Lava-Storage-Display-Fingerprint-Phone-Cover/dp/B0HDPDGKJ4/ref=sr_1_10?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-10
                              - generic [ref=f4e1582]:
                                - generic [ref=f4e1583]: ₹8,299
                                - generic [aria-hidden] [ref=f4e1584]: ₹8,299
                              - generic [ref=f4e1585]: "M.R.P: ₹9,999"
                              - generic [ref=f4e1586]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1587]:
                                  - generic [ref=f4e1588]: ₹9,999
                                  - text: ₹9,999
                            - text: (17% off)
                          - generic [ref=f4e1592]:
                            - generic [ref=f4e1593]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1594]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1597]:
                          - generic [ref=f4e1598]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1600]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1615] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1616]
                          - generic [aria-hidden] [ref=f4e1617]: Add to cart
                        - group "colours available" [ref=f4e1619]:
                          - list [ref=f4e1620]:
                            - generic [ref=f4e1621]:
                              - listitem:
                                - link "Empire Gold":
                                  - /url: /Lava-Storage-Display-Fingerprint-Phone-Cover/dp/B0HDPDGKJ4/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-10
                                  - generic [ref=f4e1622] [cursor=pointer]
                            - generic [ref=f4e1624]:
                              - listitem:
                                - link "Ghost Silver":
                                  - /url: /Lava-Storage-Display-Fingerprint-Phone-Cover/dp/B0HDPBG7R1/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-10
                                  - generic [ref=f4e1625] [cursor=pointer]
                - listitem [ref=f4e1629]:
                  - generic [ref=f4e1635]:
                    - link [aria-hidden] [ref=f4e1641] [cursor=pointer]:
                      - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GVZ3MP99/ref=sr_1_11?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                    - generic [ref=f4e1646]:
                      - link [ref=f4e1648] [cursor=pointer]:
                        - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GVZ3MP99/ref=sr_1_11?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                        - heading "POCO C85X 5G Smartphone, Emerald Green, 4GB RAM, 64GB Storage" [level=2] [ref=f4e1649]
                      - generic [ref=f4e1650]:
                        - generic [ref=f4e1651]:
                          - text: "3.5"
                          - button "3.5 out of 5 stars, rating details" [ref=f4e1653] [cursor=pointer]:
                            - generic [ref=f4e1655]: 3.5 out of 5 stars
                          - link "455 ratings" [ref=f4e1657] [cursor=pointer]:
                            - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GVZ3MP99/ref=sr_1_11?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11#customerReviews
                            - text: (455)
                        - generic [ref=f4e1658]: 3K+ bought in past month
                      - generic [ref=f4e1661]:
                        - generic [ref=f4e1662]:
                          - generic [ref=f4e1664]:
                            - generic [ref=f4e1665]: Price, product page
                            - 'link "₹13,749 M.R.P: ₹20,999 M.R.P: ₹20,999" [ref=f4e1666] [cursor=pointer]':
                              - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GVZ3MP99/ref=sr_1_11?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                              - generic [ref=f4e1667]:
                                - generic [ref=f4e1668]: ₹13,749
                                - generic [aria-hidden] [ref=f4e1669]: ₹13,749
                              - generic [ref=f4e1670]: "M.R.P: ₹20,999"
                              - generic [ref=f4e1671]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1672]:
                                  - generic [ref=f4e1673]: ₹20,999
                                  - text: ₹20,999
                            - text: (35% off)
                          - generic [ref=f4e1677]:
                            - generic [ref=f4e1678]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1679]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1682]:
                          - generic [ref=f4e1683]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1685]: Or fastest delivery Today
                        - generic [ref=f4e1700] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1701]
                          - generic [aria-hidden] [ref=f4e1702]: Add to cart
                        - generic [ref=f4e1704]:
                          - text: More Buying Choices₹13,745
                          - link "(18 new offers)" [ref=f4e1706] [cursor=pointer]:
                            - /url: /gp/offer-listing/B0GVZ3MP99/ref=sr_1_11_olp?keywords=Mobile&crid=82IBZTJS9VYS&sprefix=mobile%2Caps%2C277&dib_tag=se&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&qid=1794617451&sr=8-11
                        - group "colours available" [ref=f4e1708]:
                          - list [ref=f4e1709]:
                            - generic [ref=f4e1710]:
                              - listitem:
                                - link "Emerald Green":
                                  - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GVZ3MP99/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                                  - generic [ref=f4e1711] [cursor=pointer]
                            - generic [ref=f4e1713]:
                              - listitem:
                                - link "Black":
                                  - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GVZKMS6D/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                                  - generic [ref=f4e1714] [cursor=pointer]
                            - generic [ref=f4e1716]:
                              - listitem:
                                - link "Elite Black":
                                  - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GX1SJTF4/ref=cs_sr_dp_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                                  - generic [ref=f4e1717] [cursor=pointer]
                            - generic [ref=f4e1719]:
                              - listitem:
                                - link "Gold":
                                  - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GX23GFR7/ref=cs_sr_dp_4?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                                  - generic [ref=f4e1720] [cursor=pointer]
                            - generic [ref=f4e1722]:
                              - listitem:
                                - link "Green":
                                  - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GXZBX9HG/ref=cs_sr_dp_5?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                                  - generic [ref=f4e1723] [cursor=pointer]
                            - generic [ref=f4e1725]:
                              - listitem:
                                - link "Sunset Gold":
                                  - /url: /Poco-Smartphone-Emerald-Green-Storage/dp/B0GW8DSXW8/ref=cs_sr_dp_6?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-11
                                  - generic [ref=f4e1726] [cursor=pointer]
          - generic [ref=f4e1737]:
            - link "Sponsored video; click to navigate to featured product page. KAPAVER iON - X | Samsung Galaxy A18/M17 5G/F17 5G/A17/A17 5G Case [Drop Protection] [Rugged] Galaxy A18/M17 5G/F17 5G/A17/A17 5G Back Cover | (TPU + PC) - Smoke Black" [ref=f4e1741] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3a5CsEtLEGSIAmKn5UXhgKAsuQ4E0cB35Nv6A_0KEf0dahde8PdGxLV-s5PXu-9kCNwufH--sGvCtQZK9u9Ps63VAGaI6sHijX7csFdpWm6bTp1TkSEL7GusY2RTMYzWBMGSOGa11xVBDkniobWhc-hDZtJ74FsxDe6euGLLUUXRvKNUSCjlaGGTtWNPbM0InGs6kFHNMPpn7gmCMwgbesOyudBZgfIFA8mpeWWXTdCUxNRxkoRxQfv57enl9qyN5qr7Sso_sUQZAEybEsUy5XaJLKa7pRzUtt6aQFn9VEQQovtBIrZOL9Eq6QiR0QtToPwn9kopuJnUwUfoiLFCVXXij1-VjwaxrwaJ4aQD0PgDCu4niSJNjvadwOcZFQVbVNVZr0uRU5E_7mtOVaXDIMuOPQNiPb9Pm_yEoKp54d8eAbW959Dw&v=c1&r=https://www.amazon.in/dp/B0HHHP29M4?aref=Y3Oga8wZn8&pd_rd_i=B0HHHP29M4&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pd_rd_wg=AifsY&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_w=75WS7&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550
            - generic [ref=f4e1751]:
              - link [aria-hidden] [ref=f4e1757] [cursor=pointer]:
                - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3a5CsEtLEGSIAmKn5UXhgKAsuQ4E0cB35Nv6A_0KEf0dahde8PdGxLV-s5PXu-9kCNwufH--sGvCtQZK9u9Ps63VAGaI6sHijX7csFdpWm6bTp1TkSEL7GusY2RTMYzWBMGSOGa11xVBDkniobWhc-hDZtJ74FsxDe6euGLLUUXRvKNUSCjlaGGTtWNPbM0InGs6kFHNMPpn7gmCMwgbesOyudBZgfIFA8mpeWWXTdCUxNRxkoRxQfv57enl9qyN5qr7Sso_sUQZAEybEsUy5XaJLKa7pRzUtt6aQFn9VEQQovtBIrZOL9Eq6QiR0QtToPwn9kopuJnUwUfoiLFCVXXij1-VjwaxrwaJ4aQD0PgDCu4niSJNjvadwOcZFQVbVNVZr0uRU5E_7mtOVaXDIMuOPQNiPb9Pm_yEoKp54d8eAbW959Dw&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxin_24_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550&pd_rd_w=75WS7&pd_rd_wg=AifsY&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
              - generic [ref=f4e1762]:
                - generic [ref=f4e1763]:
                  - generic [ref=f4e1764]: Sponsored
                  - link [ref=f4e1768] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3a5CsEtLEGSIAmKn5UXhgKAsuQ4E0cB35Nv6A_0KEf0dahde8PdGxLV-s5PXu-9kCNwufH--sGvCtQZK9u9Ps63VAGaI6sHijX7csFdpWm6bTp1TkSEL7GusY2RTMYzWBMGSOGa11xVBDkniobWhc-hDZtJ74FsxDe6euGLLUUXRvKNUSCjlaGGTtWNPbM0InGs6kFHNMPpn7gmCMwgbesOyudBZgfIFA8mpeWWXTdCUxNRxkoRxQfv57enl9qyN5qr7Sso_sUQZAEybEsUy5XaJLKa7pRzUtt6aQFn9VEQQovtBIrZOL9Eq6QiR0QtToPwn9kopuJnUwUfoiLFCVXXij1-VjwaxrwaJ4aQD0PgDCu4niSJNjvadwOcZFQVbVNVZr0uRU5E_7mtOVaXDIMuOPQNiPb9Pm_yEoKp54d8eAbW959Dw&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxin_24_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550&pd_rd_w=75WS7&pd_rd_wg=AifsY&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
                    - heading "KAPAVER iON - X | Samsung Galaxy A18/M17 5G/F17 5G/A17/A17 5G Case [Drop Protection] [Rugged] Galaxy A18/M17 5G/F17 5G/A17/A17 5G Back Cover | (TPU + PC) - Smoke Black" [level=2] [ref=f4e1769]
                - generic [ref=f4e1770]:
                  - generic [ref=f4e1771]:
                    - text: "4.5"
                    - button "4.5 out of 5 stars, rating details" [ref=f4e1773] [cursor=pointer]:
                      - generic [ref=f4e1775]: 4.5 out of 5 stars
                    - link "666 ratings" [ref=f4e1777] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3a5CsEtLEGSIAmKn5UXhgKAsuQ4E0cB35Nv6A_0KEf0dahde8PdGxLV-s5PXu-9kCNwufH--sGvCtQZK9u9Ps63VAGaI6sHijX7csFdpWm6bTp1TkSEL7GusY2RTMYzWBMGSOGa11xVBDkniobWhc-hDZtJ74FsxDe6euGLLUUXRvKNUSCjlaGGTtWNPbM0InGs6kFHNMPpn7gmCMwgbesOyudBZgfIFA8mpeWWXTdCUxNRxkoRxQfv57enl9qyN5qr7Sso_sUQZAEybEsUy5XaJLKa7pRzUtt6aQFn9VEQQovtBIrZOL9Eq6QiR0QtToPwn9kopuJnUwUfoiLFCVXXij1-VjwaxrwaJ4aQD0PgDCu4niSJNjvadwOcZFQVbVNVZr0uRU5E_7mtOVaXDIMuOPQNiPb9Pm_yEoKp54d8eAbW959Dw&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxin_24_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550&pd_rd_w=75WS7&pd_rd_wg=AifsY&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413#customerReviews
                      - text: (666)
                  - generic [ref=f4e1778]: 300+ bought in past month
                - generic [ref=f4e1781]:
                  - generic [ref=f4e1782]:
                    - link "Limited time deal" [ref=f4e1784] [cursor=pointer]:
                      - /url: /deals
                    - generic [ref=f4e1790]:
                      - generic [ref=f4e1791]: Price, product page
                      - 'link "₹699 M.R.P: ₹999 M.R.P: ₹999" [ref=f4e1792] [cursor=pointer]':
                        - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3a5CsEtLEGSIAmKn5UXhgKAsuQ4E0cB35Nv6A_0KEf0dahde8PdGxLV-s5PXu-9kCNwufH--sGvCtQZK9u9Ps63VAGaI6sHijX7csFdpWm6bTp1TkSEL7GusY2RTMYzWBMGSOGa11xVBDkniobWhc-hDZtJ74FsxDe6euGLLUUXRvKNUSCjlaGGTtWNPbM0InGs6kFHNMPpn7gmCMwgbesOyudBZgfIFA8mpeWWXTdCUxNRxkoRxQfv57enl9qyN5qr7Sso_sUQZAEybEsUy5XaJLKa7pRzUtt6aQFn9VEQQovtBIrZOL9Eq6QiR0QtToPwn9kopuJnUwUfoiLFCVXXij1-VjwaxrwaJ4aQD0PgDCu4niSJNjvadwOcZFQVbVNVZr0uRU5E_7mtOVaXDIMuOPQNiPb9Pm_yEoKp54d8eAbW959Dw&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxin_24_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=827775ec-b319-4328-af73-bcd96061e550&pd_rd_w=75WS7&pd_rd_wg=AifsY&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
                        - generic [ref=f4e1793]:
                          - generic [ref=f4e1794]: ₹699
                          - generic [aria-hidden] [ref=f4e1795]: ₹699
                        - generic [ref=f4e1796]: "M.R.P: ₹999"
                        - generic [ref=f4e1797]:
                          - text: "M.R.P:"
                          - generic [ref=f4e1798]:
                            - generic [ref=f4e1799]: ₹999
                            - text: ₹999
                      - text: (30% off)
                    - generic [ref=f4e1803]:
                      - generic [ref=f4e1804]: Up to 5% back with Amazon Pay ICICI card
                      - generic [aria-hidden] [ref=f4e1805]: Up to 5% back with Amazon Pay ICI...
                  - generic [ref=f4e1808]:
                    - generic [ref=f4e1809]: FREE delivery Mon, 16 Nov
                    - generic [ref=f4e1811]: Or fastest delivery Today
          - generic [ref=f4e1814]:
            - heading "More results" [level=2] [ref=f4e1818]
            - generic:
              - list:
                - listitem [ref=f4e1819]:
                  - generic [ref=f4e1825]:
                    - link [aria-hidden] [ref=f4e1831] [cursor=pointer]:
                      - /url: /OnePlus-36-Months-Smoothness-Military-Grade-Durability/dp/B0H7SB1JH7/ref=sr_1_12?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-12
                    - generic [ref=f4e1836]:
                      - link [ref=f4e1838] [cursor=pointer]:
                        - /url: /OnePlus-36-Months-Smoothness-Military-Grade-Durability/dp/B0H7SB1JH7/ref=sr_1_12?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-12
                        - heading "OnePlus N6x | 4GB+64GB | Burgundy Red | 7000mAh Battery | Power for Days | 36-Months Smoothness | Smooth 120Hz Display | Largest 5300mm2 Cooling System | Military-Grade Durability" [level=2] [ref=f4e1839]
                      - generic [ref=f4e1840]:
                        - generic [ref=f4e1841]:
                          - text: "3.6"
                          - button "3.6 out of 5 stars, rating details" [ref=f4e1843] [cursor=pointer]:
                            - generic [ref=f4e1845]: 3.6 out of 5 stars
                          - link "202 ratings" [ref=f4e1847] [cursor=pointer]:
                            - /url: /OnePlus-36-Months-Smoothness-Military-Grade-Durability/dp/B0H7SB1JH7/ref=sr_1_12?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-12#customerReviews
                            - text: (202)
                        - generic [ref=f4e1848]: 1K+ bought in past month
                      - generic [ref=f4e1851]:
                        - generic [ref=f4e1852]:
                          - generic [ref=f4e1854]:
                            - generic [ref=f4e1855]: Price, product page
                            - 'link "₹20,999 M.R.P: ₹26,999 M.R.P: ₹26,999" [ref=f4e1856] [cursor=pointer]':
                              - /url: /OnePlus-36-Months-Smoothness-Military-Grade-Durability/dp/B0H7SB1JH7/ref=sr_1_12?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-12
                              - generic [ref=f4e1857]:
                                - generic [ref=f4e1858]: ₹20,999
                                - generic [aria-hidden] [ref=f4e1859]: ₹20,999
                              - generic [ref=f4e1860]: "M.R.P: ₹26,999"
                              - generic [ref=f4e1861]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1862]:
                                  - generic [ref=f4e1863]: ₹26,999
                                  - text: ₹26,999
                            - text: (22% off)
                          - generic [ref=f4e1867]:
                            - generic [ref=f4e1868]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1869]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1872]:
                          - generic [ref=f4e1873]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1875]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1890] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1891]
                          - generic [aria-hidden] [ref=f4e1892]: Add to cart
                        - group "colours available" [ref=f4e1894]:
                          - list [ref=f4e1895]:
                            - generic [ref=f4e1896]:
                              - listitem:
                                - link "Burgundy Red":
                                  - /url: /OnePlus-36-Months-Smoothness-Military-Grade-Durability/dp/B0H7SB1JH7/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-12
                                  - generic [ref=f4e1897] [cursor=pointer]
                            - generic [ref=f4e1899]:
                              - listitem:
                                - link "Ice Blue":
                                  - /url: /OnePlus-36-Months-Smoothness-Military-Grade-Durability/dp/B0H7S8V4WC/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-12
                                  - generic [ref=f4e1900] [cursor=pointer]
                - listitem [ref=f4e1904]:
                  - generic [ref=f4e1910]:
                    - link [aria-hidden] [ref=f4e1916] [cursor=pointer]:
                      - /url: /Samsung-Sapphire-Storage-Upgrades-Lag-Free/dp/B0FN7RN9TH/ref=sr_1_13?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-13
                    - generic [ref=f4e1921]:
                      - link [ref=f4e1923] [cursor=pointer]:
                        - /url: /Samsung-Sapphire-Storage-Upgrades-Lag-Free/dp/B0FN7RN9TH/ref=sr_1_13?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-13
                        - heading "Samsung Galaxy M17 5G Mobile (Sapphire Black, 4GB RAM, 128GB Storage) | 50MP OIS Triple Camera | Super AMOLED Display | Gorilla Glass Victus | 6 Gen OS Upgrades | Knox Security | AI" [level=2] [ref=f4e1924]
                      - generic [ref=f4e1925]:
                        - generic [ref=f4e1926]:
                          - text: "3.9"
                          - button "3.9 out of 5 stars, rating details" [ref=f4e1928] [cursor=pointer]:
                            - generic [ref=f4e1930]: 3.9 out of 5 stars
                          - link "1,115 ratings" [ref=f4e1932] [cursor=pointer]:
                            - /url: /Samsung-Sapphire-Storage-Upgrades-Lag-Free/dp/B0FN7RN9TH/ref=sr_1_13?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-13#customerReviews
                            - text: (1.1K)
                        - generic [ref=f4e1933]: 1K+ bought in past month
                      - generic [ref=f4e1936]:
                        - generic [ref=f4e1937]:
                          - generic [ref=f4e1939]:
                            - generic [ref=f4e1940]: Price, product page
                            - link "₹17,999" [ref=f4e1941] [cursor=pointer]:
                              - /url: /Samsung-Sapphire-Storage-Upgrades-Lag-Free/dp/B0FN7RN9TH/ref=sr_1_13?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-13
                              - generic [ref=f4e1942]:
                                - generic [ref=f4e1943]: ₹17,999
                                - generic [aria-hidden] [ref=f4e1944]: ₹17,999
                          - generic [ref=f4e1948]:
                            - generic [ref=f4e1949]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1950]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1953]:
                          - generic [ref=f4e1954]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1956]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1971] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1972]
                          - generic [aria-hidden] [ref=f4e1973]: Add to cart
                - listitem [ref=f4e1976]:
                  - generic [ref=f4e1982]:
                    - link [aria-hidden] [ref=f4e1988] [cursor=pointer]:
                      - /url: /Motorola-Impenetrable-Dimensity-Processor-Expandable/dp/B0H2X3K2BP/ref=sr_1_14?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-14
                    - generic [ref=f4e1993]:
                      - link [ref=f4e1995] [cursor=pointer]:
                        - /url: /Motorola-Impenetrable-Dimensity-Processor-Expandable/dp/B0H2X3K2BP/ref=sr_1_14?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-14
                        - heading "Motorola g37 Power (Pantone Impenetrable, 8GB RAM, 128GB Storage) | Dimensity 6400 Processor | 50MP Rear Camera | 8MP Front Camera | 6.66\" HD+ Display | 7000mAh Battery | Expandable Up to 1TB" [level=2] [ref=f4e1996]
                      - generic [ref=f4e1997]:
                        - generic [ref=f4e1998]:
                          - text: "3.8"
                          - button "3.8 out of 5 stars, rating details" [ref=f4e2000] [cursor=pointer]:
                            - generic [ref=f4e2002]: 3.8 out of 5 stars
                          - link "109 ratings" [ref=f4e2004] [cursor=pointer]:
                            - /url: /Motorola-Impenetrable-Dimensity-Processor-Expandable/dp/B0H2X3K2BP/ref=sr_1_14?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-14#customerReviews
                            - text: (109)
                        - generic [ref=f4e2005]: 1K+ bought in past month
                      - generic [ref=f4e2008]:
                        - generic [ref=f4e2009]:
                          - generic [ref=f4e2011]:
                            - generic [ref=f4e2012]: Price, product page
                            - 'link "₹21,249 M.R.P: ₹37,999 M.R.P: ₹37,999" [ref=f4e2013] [cursor=pointer]':
                              - /url: /Motorola-Impenetrable-Dimensity-Processor-Expandable/dp/B0H2X3K2BP/ref=sr_1_14?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-14
                              - generic [ref=f4e2014]:
                                - generic [ref=f4e2015]: ₹21,249
                                - generic [aria-hidden] [ref=f4e2016]: ₹21,249
                              - generic [ref=f4e2017]: "M.R.P: ₹37,999"
                              - generic [ref=f4e2018]:
                                - text: "M.R.P:"
                                - generic [ref=f4e2019]:
                                  - generic [ref=f4e2020]: ₹37,999
                                  - text: ₹37,999
                            - text: (44% off)
                          - generic [ref=f4e2024]:
                            - generic [ref=f4e2025]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e2026]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e2029]:
                          - generic [ref=f4e2030]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e2032]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e2047] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e2048]
                          - generic [aria-hidden] [ref=f4e2049]: Add to cart
                - listitem [ref=f4e2052]:
                  - generic [ref=f4e2058]:
                    - link [aria-hidden] [ref=f4e2064] [cursor=pointer]:
                      - /url: /Itel-6000mAh-Smartphone-Charging-Octa-Core/dp/B0HJ2L72NP/ref=sr_1_15?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-15
                    - generic [ref=f4e2069]:
                      - link [ref=f4e2071] [cursor=pointer]:
                        - /url: /Itel-6000mAh-Smartphone-Charging-Octa-Core/dp/B0HJ2L72NP/ref=sr_1_15?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-15
                        - heading "Itel Zeno 300 | 6000mAh Mega Battery Smartphone | 18W Type-C Fast Charging | 6.56” HD+ 90Hz Display | Unisoc T7100 Octa-Core | 4GB + 8GB RAM, 64GB Storage | Android 16 Go | Black" [level=2] [ref=f4e2072]
                      - generic [ref=f4e2073]:
                        - generic [ref=f4e2074]:
                          - text: "3.0"
                          - button "3.0 out of 5 stars, rating details" [ref=f4e2076] [cursor=pointer]:
                            - generic [ref=f4e2078]: 3.0 out of 5 stars
                          - link "62 ratings" [ref=f4e2080] [cursor=pointer]:
                            - /url: /Itel-6000mAh-Smartphone-Charging-Octa-Core/dp/B0HJ2L72NP/ref=sr_1_15?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-15#customerReviews
                            - text: (62)
                        - generic [ref=f4e2081]: 2K+ bought in past month
                      - generic [ref=f4e2084]:
                        - generic [ref=f4e2085]:
                          - generic [ref=f4e2087]:
                            - generic [ref=f4e2088]: Price, product page
                            - 'link "₹9,549 M.R.P: ₹14,999 M.R.P: ₹14,999" [ref=f4e2089] [cursor=pointer]':
                              - /url: /Itel-6000mAh-Smartphone-Charging-Octa-Core/dp/B0HJ2L72NP/ref=sr_1_15?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-15
                              - generic [ref=f4e2090]:
                                - generic [ref=f4e2091]: ₹9,549
                                - generic [aria-hidden] [ref=f4e2092]: ₹9,549
                              - generic [ref=f4e2093]: "M.R.P: ₹14,999"
                              - generic [ref=f4e2094]:
                                - text: "M.R.P:"
                                - generic [ref=f4e2095]:
                                  - generic [ref=f4e2096]: ₹14,999
                                  - text: ₹14,999
                            - text: (36% off)
                          - generic [ref=f4e2100]:
                            - generic [ref=f4e2101]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e2102]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e2105]:
                          - generic [ref=f4e2106]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e2108]: Or fastest delivery Tomorrow, 15 Nov
                        - generic [ref=f4e2123] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e2124]
                          - generic [aria-hidden] [ref=f4e2125]: Add to cart
                        - group "colours available" [ref=f4e2127]:
                          - list [ref=f4e2128]:
                            - generic [ref=f4e2129]:
                              - listitem:
                                - link "Classic Black":
                                  - /url: /Itel-6000mAh-Smartphone-Charging-Octa-Core/dp/B0HJ2L72NP/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-15
                                  - generic [ref=f4e2130] [cursor=pointer]
                            - generic [ref=f4e2132]:
                              - listitem:
                                - link "Lavender Purple":
                                  - /url: /Itel-6000mAh-Smartphone-Charging-Octa-Core/dp/B0HJ2WM92Y/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-15
                                  - generic [ref=f4e2133] [cursor=pointer]
                            - generic [ref=f4e2135]:
                              - listitem:
                                - link "Silver Mist":
                                  - /url: /Itel-6000mAh-Smartphone-Charging-Octa-Core/dp/B0HJ2PR3FN/ref=cs_sr_dp_3?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-15
                                  - generic [ref=f4e2136] [cursor=pointer]
                - listitem [ref=f4e2140]:
                  - generic [ref=f4e2146]:
                    - link [aria-hidden] [ref=f4e2152] [cursor=pointer]:
                      - /url: /Samsung-Storage-Snapdragon-Processor-Security/dp/B0H4L5CSHK/ref=sr_1_16?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-16
                    - generic [ref=f4e2157]:
                      - link [ref=f4e2159] [cursor=pointer]:
                        - /url: /Samsung-Storage-Snapdragon-Processor-Security/dp/B0H4L5CSHK/ref=sr_1_16?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-16
                        - heading "Samsung Galaxy M47 5G Mobile (Blaze Blue, 8GB RAM, 128GB Storage, 6000mAh Battery)| 50MP OIS| Snapdragon Processor| LPDDR5X RAM,UFS 3.1 Storage| Gorilla Glass Victus+| sAMOLED| Knox Security| AI" [level=2] [ref=f4e2160]
                      - generic [ref=f4e2161]:
                        - generic [ref=f4e2162]:
                          - text: "3.7"
                          - button "3.7 out of 5 stars, rating details" [ref=f4e2164] [cursor=pointer]:
                            - generic [ref=f4e2166]: 3.7 out of 5 stars
                          - link "565 ratings" [ref=f4e2168] [cursor=pointer]:
                            - /url: /Samsung-Storage-Snapdragon-Processor-Security/dp/B0H4L5CSHK/ref=sr_1_16?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-16#customerReviews
                            - text: (565)
                        - generic [ref=f4e2169]: 1K+ bought in past month
                      - generic [ref=f4e2172]:
                        - generic [ref=f4e2173]:
                          - link "Limited time deal" [ref=f4e2175] [cursor=pointer]:
                            - /url: /deals
                          - generic [ref=f4e2181]:
                            - generic [ref=f4e2182]: Price, product page
                            - 'link "₹28,999 M.R.P: ₹49,999 M.R.P: ₹49,999" [ref=f4e2183] [cursor=pointer]':
                              - /url: /Samsung-Storage-Snapdragon-Processor-Security/dp/B0H4L5CSHK/ref=sr_1_16?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-16
                              - generic [ref=f4e2184]:
                                - generic [ref=f4e2185]: ₹28,999
                                - generic [aria-hidden] [ref=f4e2186]: ₹28,999
                              - generic [ref=f4e2187]: "M.R.P: ₹49,999"
                              - generic [ref=f4e2188]:
                                - text: "M.R.P:"
                                - generic [ref=f4e2189]:
                                  - generic [ref=f4e2190]: ₹49,999
                                  - text: ₹49,999
                            - text: (42% off)
                          - generic [ref=f4e2194]:
                            - generic [ref=f4e2195]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e2196]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e2199]:
                          - generic [ref=f4e2200]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e2202]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e2217] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e2218]
                          - generic [aria-hidden] [ref=f4e2219]: Add to cart
                        - group "colours available" [ref=f4e2221]:
                          - list [ref=f4e2222]:
                            - generic [ref=f4e2223]:
                              - listitem:
                                - link "Blaze Blue":
                                  - /url: /Samsung-Storage-Snapdragon-Processor-Security/dp/B0H4L5CSHK/ref=cs_sr_dp_1?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-16
                                  - generic [ref=f4e2224] [cursor=pointer]
                            - generic [ref=f4e2226]:
                              - listitem:
                                - link "Rogue Red":
                                  - /url: /Samsung-Storage-Snapdragon-Processor-Security/dp/B0HBW2CW1C/ref=cs_sr_dp_2?crid=82IBZTJS9VYS&dib=eyJ2IjoiMSJ9.vZ1k-e9Aq_XsX3VfIZyxhumjr3j6LbaQgtzdg_hQ5azbvcv5qO57qWvfJKhVbIrssOy-W5vkuGQVNHZf880i9IJBiKOphDKWXdiqPPDQYBJfa8tqoxlb7YBSuYo_i2ecoYplul117SslnS8vEuXtHp4TMSMpA-jyhy4CyygQzFJ0NeYNjGzL7h9SuoYWQXlsEq9T1ZBabsvD7Nt5v6GuucJKIlSnM0dxw6EStusTR6U.CfsKIvxv3BTNOPJMjGUfkiVdXNwl0eNVZWr4_jBUtkw&dib_tag=se&keywords=Mobile&qid=1794617451&sprefix=mobile%2Caps%2C277&sr=8-16
                                  - generic [ref=f4e2227] [cursor=pointer]
          - generic [ref=f4e2238]:
            - link "Sponsored video; click to navigate to featured product page. KAPAVER iON - X | Samsung Galaxy A18/M17 5G/F17 5G/A17/A17 5G Case [Drop Protection] [Rugged] Galaxy A18/M17 5G/F17 5G/A17/A17 5G Back Cover | (TPU + PC) - Smoke Black" [ref=f4e2242] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8uZ4_eDedTYhXkcjwxCvoNBQPxNv9zAlRkMrscjg5ESD4uTg3HCDiEzTctPgIh9Xp8AgbiMTMz0TMz0zUz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAkh-bbu0_7CLFBzUWpobfyMDA0MDQwtzczNTU0sTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8A0sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4GHh0eAkaWviX1iUWqabaSxf3qiRXlUnoVaQUp8UUp8pi1CCVSoICcjpci2BABP1n_l&v=c1&r=https://www.amazon.in/dp/B0HHHP29M4?aref=Y3Oga8wZn8&pd_rd_i=B0HHHP29M4&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pd_rd_wg=i2khv&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_w=rMyx1&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b
            - generic [ref=f4e2252]:
              - link [aria-hidden] [ref=f4e2258] [cursor=pointer]:
                - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8uZ4_eDedTYhXkcjwxCvoNBQPxNv9zAlRkMrscjg5ESD4uTg3HCDiEzTctPgIh9Xp8AgbiMTMz0TMz0zUz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAkh-bbu0_7CLFBzUWpobfyMDA0MDQwtzczNTU0sTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8A0sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4GHh0eAkaWviX1iUWqabaSxf3qiRXlUnoVaQUp8UUp8pi1CCVSoICcjpci2BABP1n_l&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxbs_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&pd_rd_w=rMyx1&pd_rd_wg=i2khv&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
              - generic [ref=f4e2263]:
                - generic [ref=f4e2264]:
                  - generic [ref=f4e2265]: Sponsored
                  - link [ref=f4e2269] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8uZ4_eDedTYhXkcjwxCvoNBQPxNv9zAlRkMrscjg5ESD4uTg3HCDiEzTctPgIh9Xp8AgbiMTMz0TMz0zUz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAkh-bbu0_7CLFBzUWpobfyMDA0MDQwtzczNTU0sTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8A0sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4GHh0eAkaWviX1iUWqabaSxf3qiRXlUnoVaQUp8UUp8pi1CCVSoICcjpci2BABP1n_l&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxbs_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&pd_rd_w=rMyx1&pd_rd_wg=i2khv&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
                    - heading "KAPAVER iON - X | Samsung Galaxy A18/M17 5G/F17 5G/A17/A17 5G Case [Drop Protection] [Rugged] Galaxy A18/M17 5G/F17 5G/A17/A17 5G Back Cover | (TPU + PC) - Smoke Black" [level=2] [ref=f4e2270]
                - generic [ref=f4e2271]:
                  - generic [ref=f4e2272]:
                    - text: "4.5"
                    - button "4.5 out of 5 stars, rating details" [ref=f4e2274] [cursor=pointer]:
                      - generic [ref=f4e2276]: 4.5 out of 5 stars
                    - link "666 ratings" [ref=f4e2278] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8uZ4_eDedTYhXkcjwxCvoNBQPxNv9zAlRkMrscjg5ESD4uTg3HCDiEzTctPgIh9Xp8AgbiMTMz0TMz0zUz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAkh-bbu0_7CLFBzUWpobfyMDA0MDQwtzczNTU0sTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8A0sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4GHh0eAkaWviX1iUWqabaSxf3qiRXlUnoVaQUp8UUp8pi1CCVSoICcjpci2BABP1n_l&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxbs_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&pd_rd_w=rMyx1&pd_rd_wg=i2khv&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1#customerReviews
                      - text: (666)
                  - generic [ref=f4e2279]: 300+ bought in past month
                - generic [ref=f4e2282]:
                  - generic [ref=f4e2283]:
                    - link "Limited time deal" [ref=f4e2285] [cursor=pointer]:
                      - /url: /deals
                    - generic [ref=f4e2291]:
                      - generic [ref=f4e2292]: Price, product page
                      - 'link "₹699 M.R.P: ₹999 M.R.P: ₹999" [ref=f4e2293] [cursor=pointer]':
                        - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8uZ4_eDedTYhXkcjwxCvoNBQPxNv9zAlRkMrscjg5ESD4uTg3HCDiEzTctPgIh9Xp8AgbiMTMz0TMz0zUz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAkh-bbu0_7CLFBzUWpobfyMDA0MDQwtzczNTU0sTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8A0sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4GHh0eAkaWviX1iUWqabaSxf3qiRXlUnoVaQUp8UUp8pi1CCVSoICcjpci2BABP1n_l&v=c1&r=https://www.amazon.in/KAPAVER-iON-Samsung-Galaxy-Protection/dp/B0HHHP29M4/ref=sxbs_sbv_search_btf?aref=Y3Oga8wZn8&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=82IBZTJS9VYS&cv_ct_cx=Mobile&keywords=Mobile&pd_rd_i=B0HHHP29M4&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&pd_rd_w=rMyx1&pd_rd_wg=i2khv&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=FVKAG7VA4FX45X01B9P3&qid=1794617451&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mobile%2Caps%2C277&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
                        - generic [ref=f4e2294]:
                          - generic [ref=f4e2295]: ₹699
                          - generic [aria-hidden] [ref=f4e2296]: ₹699
                        - generic [ref=f4e2297]: "M.R.P: ₹999"
                        - generic [ref=f4e2298]:
                          - text: "M.R.P:"
                          - generic [ref=f4e2299]:
                            - generic [ref=f4e2300]: ₹999
                            - text: ₹999
                      - text: (30% off)
                    - generic [ref=f4e2304]:
                      - generic [ref=f4e2305]: Up to 5% back with Amazon Pay ICICI card
                      - generic [aria-hidden] [ref=f4e2306]: Up to 5% back with Amazon Pay ICI...
                  - generic [ref=f4e2309]:
                    - generic [ref=f4e2310]: FREE delivery Mon, 16 Nov
                    - generic [ref=f4e2312]: Or fastest delivery Today
          - generic [ref=f4e2319]:
            - generic "Related searches in Mobile" [ref=f4e2320]:
              - heading "Related searches" [level=2] [ref=f4e2323]
            - list [ref=f4e2325]:
              - generic [ref=f4e2326]:
                - listitem [ref=f4e2327]:
                  - link "mobile vivo" [ref=f4e2329] [cursor=pointer]:
                    - /url: /s?k=mobile+vivo&ref=rsl_sug_0_0&pd_rd_w=OzP7H&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=i2khv&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&qid=1794617451
                - listitem [ref=f4e2335]:
                  - link "samsung mobiles" [ref=f4e2337] [cursor=pointer]:
                    - /url: /s?k=samsung+mobiles&ref=rsl_sug_0_3&pd_rd_w=OzP7H&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=i2khv&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&qid=1794617451
              - generic [ref=f4e2343]:
                - listitem [ref=f4e2344]:
                  - link "mobile 5g" [ref=f4e2346] [cursor=pointer]:
                    - /url: /s?k=mobile+5g&ref=rsl_sug_0_1&pd_rd_w=OzP7H&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=i2khv&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&qid=1794617451
                - listitem [ref=f4e2352]:
                  - link "mobile oppo" [ref=f4e2354] [cursor=pointer]:
                    - /url: /s?k=mobile+oppo&ref=rsl_sug_0_4&pd_rd_w=OzP7H&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=i2khv&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&qid=1794617451
              - generic [ref=f4e2360]:
                - listitem [ref=f4e2361]:
                  - link "mobiles under 10000" [ref=f4e2363] [cursor=pointer]:
                    - /url: /s?k=mobiles+under+10000&ref=rsl_sug_0_2&pd_rd_w=OzP7H&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=i2khv&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&qid=1794617451
                - listitem [ref=f4e2369]:
                  - link "iphone" [ref=f4e2371] [cursor=pointer]:
                    - /url: /s?k=iphone&ref=rsl_sug_0_5&pd_rd_w=OzP7H&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=i2khv&pd_rd_r=02926725-57d2-428b-bf00-30d852379e3b&qid=1794617451
          - navigation "pagination" [ref=f4e2379]:
            - list [ref=f4e2381]:
              - listitem [ref=f4e2382]:
                - button "Previous" [disabled] [ref=f4e2384]
              - listitem [ref=f4e2387]:
                - button "Page 1" [ref=f4e2389]: "1"
              - listitem [ref=f4e2390]:
                - button "Go to page 2" [ref=f4e2392] [cursor=pointer]: "2"
              - listitem [ref=f4e2393]:
                - button "Go to page 3" [ref=f4e2395] [cursor=pointer]: "3"
              - button [disabled] [ref=f4e2396]:
                - img [aria-hidden] [ref=f4e2397]: ...
              - button "20" [disabled] [ref=f4e2399]
              - listitem [ref=f4e2400]:
                - button "Go to next page, page 2" [ref=f4e2402] [cursor=pointer]: Next
          - generic [ref=f4e2408]:
            - separator [aria-hidden] [ref=f4e2409]
            - generic [ref=f4e2410]:
              - heading "Brands related to your search" [ref=f4e2411]
              - button "Leave feedback on Sponsored ad" [ref=f4e2416] [cursor=pointer]: Sponsored
              - generic [ref=f4e2420]:
                - generic [ref=f4e2422]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtUioAQQURZFyjISWVRMMuOxE6fIQh7n5qR1EjsX0Y01sSeJ1cR2ZyZJ6SJ7JN4BqY_Cmh0Ldog9PARKuUjwr76jc36dc_5McPT929cvD3JPTQUNO-5o5Kjd1rhwgE6OZyyOrv2OR7vxBqfb9Th122fW6bHn3Wxa0dytksuL_s2ENLU1cAfuY0WtlNRKqaKV4MWhR6ZHZmPYbri2l3ueeRgycSmTNPdk5LgNq9dy7ItGPf_uIHO07_hTOcs9oit6k8SlKM6_WAgKOAuS1YrFIZVREgPB-CYKGBCM8mABpnJWuM9i33ZOlNV6KSMw5TQOQcAZldGGgd8bQUB5KEBKo1gyDoIkliyWSvacWD7ue2d-veF1h71-Qc8cwOyP958_3X6s57N_3PtDcCqWhWcKhLBWUWtY0dSKipR7tuOe3rP61kkv96pOTCtt2qBq7sjVL83NHRlI3huszX-1I_MdGeyIeQfzfNaaN65bnU1gRnVbLlRDuT3MfDhcSJmK03J5u92W_iZTFjLhTJRTOmflJtab1TquAUVHBKjIsoBuoiZAGoHQ1BHWUeP1ncHnbGZ4xDehhtVatYI7Q6R5HdLV1DMXmFCp4mpNwWMVQqyPBxYyJ8U09Hnop8tFyA1ZXAjqB9yPQgMWl6lPRRQLg8B2c4JrrjZ5ucfxm5bnOHc4QVpbr-wnr9aMvzXOk2m0ZPtaLBNp_J9uUYSpT0N_zpN1amAIFaSqug4hRFgtRgZNRZHuf0BR6Nij6_FV8BP-i9vi&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FF38F7D39-281B-41CC-8A1F-15B00A81381E%3Fstore_ref%3DSB_A05349763JT15SJBK54LR-A02737923V40038VQC1AW%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HFW39R5W%2CB0HFVYGSNN%2CB0HFW15H86%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300214488000134%26i%3Daps%26aref%3D1idNIUxVqc&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                      - link [ref=f4e2423] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtUioAQQURZFyjISWVRMMuOxE6fIQh7n5qR1EjsX0Y01sSeJ1cR2ZyZJ6SJ7JN4BqY_Cmh0Ldog9PARKuUjwr76jc36dc_5McPT929cvD3JPTQUNO-5o5Kjd1rhwgE6OZyyOrv2OR7vxBqfb9Th122fW6bHn3Wxa0dytksuL_s2ENLU1cAfuY0WtlNRKqaKV4MWhR6ZHZmPYbri2l3ueeRgycSmTNPdk5LgNq9dy7ItGPf_uIHO07_hTOcs9oit6k8SlKM6_WAgKOAuS1YrFIZVREgPB-CYKGBCM8mABpnJWuM9i33ZOlNV6KSMw5TQOQcAZldGGgd8bQUB5KEBKo1gyDoIkliyWSvacWD7ue2d-veF1h71-Qc8cwOyP958_3X6s57N_3PtDcCqWhWcKhLBWUWtY0dSKipR7tuOe3rP61kkv96pOTCtt2qBq7sjVL83NHRlI3huszX-1I_MdGeyIeQfzfNaaN65bnU1gRnVbLlRDuT3MfDhcSJmK03J5u92W_iZTFjLhTJRTOmflJtab1TquAUVHBKjIsoBuoiZAGoHQ1BHWUeP1ncHnbGZ4xDehhtVatYI7Q6R5HdLV1DMXmFCp4mpNwWMVQqyPBxYyJ8U09Hnop8tFyA1ZXAjqB9yPQgMWl6lPRRQLg8B2c4JrrjZ5ucfxm5bnOHc4QVpbr-wnr9aMvzXOk2m0ZPtaLBNp_J9uUYSpT0N_zpN1amAIFaSqug4hRFgtRgZNRZHuf0BR6Nij6_FV8BP-i9vi&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FF38F7D39-281B-41CC-8A1F-15B00A81381E%3Fstore_ref%3DSB_A05349763JT15SJBK54LR-A02737923V40038VQC1AW%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HFW39R5W%2CB0HFVYGSNN%2CB0HFW15H86%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300214488000134%26i%3Daps%26aref%3D1idNIUxVqc&ref_=sbx_be_s_3psl_mbd_mb0_ls&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                        - img "Xiaomi Phones" [ref=f4e2424]
                      - generic [ref=f4e2426]:
                        - generic [ref=f4e2427]:
                          - link [aria-hidden] [ref=f4e2428] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtUioAQQURZFyjISWVRMMuOxE6fIQh7n5qR1EjsX0Y01sSeJ1cR2ZyZJ6SJ7JN4BqY_Cmh0Ldog9PARKuUjwr76jc36dc_5McPT929cvD3JPTQUNO-5o5Kjd1rhwgE6OZyyOrv2OR7vxBqfb9Th122fW6bHn3Wxa0dytksuL_s2ENLU1cAfuY0WtlNRKqaKV4MWhR6ZHZmPYbri2l3ueeRgycSmTNPdk5LgNq9dy7ItGPf_uIHO07_hTOcs9oit6k8SlKM6_WAgKOAuS1YrFIZVREgPB-CYKGBCM8mABpnJWuM9i33ZOlNV6KSMw5TQOQcAZldGGgd8bQUB5KEBKo1gyDoIkliyWSvacWD7ue2d-veF1h71-Qc8cwOyP958_3X6s57N_3PtDcCqWhWcKhLBWUWtY0dSKipR7tuOe3rP61kkv96pOTCtt2qBq7sjVL83NHRlI3huszX-1I_MdGeyIeQfzfNaaN65bnU1gRnVbLlRDuT3MfDhcSJmK03J5u92W_iZTFjLhTJRTOmflJtab1TquAUVHBKjIsoBuoiZAGoHQ1BHWUeP1ncHnbGZ4xDehhtVatYI7Q6R5HdLV1DMXmFCp4mpNwWMVQqyPBxYyJ8U09Hnop8tFyA1ZXAjqB9yPQgMWl6lPRRQLg8B2c4JrrjZ5ucfxm5bnOHc4QVpbr-wnr9aMvzXOk2m0ZPtaLBNp_J9uUYSpT0N_zpN1amAIFaSqug4hRFgtRgZNRZHuf0BR6Nij6_FV8BP-i9vi&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FF38F7D39-281B-41CC-8A1F-15B00A81381E%3Fstore_ref%3DSB_A05349763JT15SJBK54LR-A02737923V40038VQC1AW%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HFW39R5W%2CB0HFVYGSNN%2CB0HFW15H86%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300214488000134%26i%3Daps%26aref%3D1idNIUxVqc&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                          - link [ref=f4e2429] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtUioAQQURZFyjISWVRMMuOxE6fIQh7n5qR1EjsX0Y01sSeJ1cR2ZyZJ6SJ7JN4BqY_Cmh0Ldog9PARKuUjwr76jc36dc_5McPT929cvD3JPTQUNO-5o5Kjd1rhwgE6OZyyOrv2OR7vxBqfb9Th122fW6bHn3Wxa0dytksuL_s2ENLU1cAfuY0WtlNRKqaKV4MWhR6ZHZmPYbri2l3ueeRgycSmTNPdk5LgNq9dy7ItGPf_uIHO07_hTOcs9oit6k8SlKM6_WAgKOAuS1YrFIZVREgPB-CYKGBCM8mABpnJWuM9i33ZOlNV6KSMw5TQOQcAZldGGgd8bQUB5KEBKo1gyDoIkliyWSvacWD7ue2d-veF1h71-Qc8cwOyP958_3X6s57N_3PtDcCqWhWcKhLBWUWtY0dSKipR7tuOe3rP61kkv96pOTCtt2qBq7sjVL83NHRlI3huszX-1I_MdGeyIeQfzfNaaN65bnU1gRnVbLlRDuT3MfDhcSJmK03J5u92W_iZTFjLhTJRTOmflJtab1TquAUVHBKjIsoBuoiZAGoHQ1BHWUeP1ncHnbGZ4xDehhtVatYI7Q6R5HdLV1DMXmFCp4mpNwWMVQqyPBxYyJ8U09Hnop8tFyA1ZXAjqB9yPQgMWl6lPRRQLg8B2c4JrrjZ5ucfxm5bnOHc4QVpbr-wnr9aMvzXOk2m0ZPtaLBNp_J9uUYSpT0N_zpN1amAIFaSqug4hRFgtRgZNRZHuf0BR6Nij6_FV8BP-i9vi&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FF38F7D39-281B-41CC-8A1F-15B00A81381E%3Fstore_ref%3DSB_A05349763JT15SJBK54LR-A02737923V40038VQC1AW%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HFW39R5W%2CB0HFVYGSNN%2CB0HFW15H86%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300214488000134%26i%3Daps%26aref%3D1idNIUxVqc&ref_=sbx_be_s_3psl_mbd_mb0_logo&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                            - img "Xiaomi Phones" [ref=f4e2431]
                        - generic [ref=f4e2432]:
                          - link [aria-hidden] [ref=f4e2433] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtUioAQQURZFyjISWVRMMuOxE6fIQh7n5qR1EjsX0Y01sSeJ1cR2ZyZJ6SJ7JN4BqY_Cmh0Ldog9PARKuUjwr76jc36dc_5McPT929cvD3JPTQUNO-5o5Kjd1rhwgE6OZyyOrv2OR7vxBqfb9Th122fW6bHn3Wxa0dytksuL_s2ENLU1cAfuY0WtlNRKqaKV4MWhR6ZHZmPYbri2l3ueeRgycSmTNPdk5LgNq9dy7ItGPf_uIHO07_hTOcs9oit6k8SlKM6_WAgKOAuS1YrFIZVREgPB-CYKGBCM8mABpnJWuM9i33ZOlNV6KSMw5TQOQcAZldGGgd8bQUB5KEBKo1gyDoIkliyWSvacWD7ue2d-veF1h71-Qc8cwOyP958_3X6s57N_3PtDcCqWhWcKhLBWUWtY0dSKipR7tuOe3rP61kkv96pOTCtt2qBq7sjVL83NHRlI3huszX-1I_MdGeyIeQfzfNaaN65bnU1gRnVbLlRDuT3MfDhcSJmK03J5u92W_iZTFjLhTJRTOmflJtab1TquAUVHBKjIsoBuoiZAGoHQ1BHWUeP1ncHnbGZ4xDehhtVatYI7Q6R5HdLV1DMXmFCp4mpNwWMVQqyPBxYyJ8U09Hnop8tFyA1ZXAjqB9yPQgMWl6lPRRQLg8B2c4JrrjZ5ucfxm5bnOHc4QVpbr-wnr9aMvzXOk2m0ZPtaLBNp_J9uUYSpT0N_zpN1amAIFaSqug4hRFgtRgZNRZHuf0BR6Nij6_FV8BP-i9vi&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FF38F7D39-281B-41CC-8A1F-15B00A81381E%3Fstore_ref%3DSB_A05349763JT15SJBK54LR-A02737923V40038VQC1AW%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HFW39R5W%2CB0HFVYGSNN%2CB0HFW15H86%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300214488000134%26i%3Daps%26aref%3D1idNIUxVqc&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                          - link "Redmi Note 17 Pro Series 5G | Sale Is Live" [ref=f4e2434] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtUioAQQURZFyjISWVRMMuOxE6fIQh7n5qR1EjsX0Y01sSeJ1cR2ZyZJ6SJ7JN4BqY_Cmh0Ldog9PARKuUjwr76jc36dc_5McPT929cvD3JPTQUNO-5o5Kjd1rhwgE6OZyyOrv2OR7vxBqfb9Th122fW6bHn3Wxa0dytksuL_s2ENLU1cAfuY0WtlNRKqaKV4MWhR6ZHZmPYbri2l3ueeRgycSmTNPdk5LgNq9dy7ItGPf_uIHO07_hTOcs9oit6k8SlKM6_WAgKOAuS1YrFIZVREgPB-CYKGBCM8mABpnJWuM9i33ZOlNV6KSMw5TQOQcAZldGGgd8bQUB5KEBKo1gyDoIkliyWSvacWD7ue2d-veF1h71-Qc8cwOyP958_3X6s57N_3PtDcCqWhWcKhLBWUWtY0dSKipR7tuOe3rP61kkv96pOTCtt2qBq7sjVL83NHRlI3huszX-1I_MdGeyIeQfzfNaaN65bnU1gRnVbLlRDuT3MfDhcSJmK03J5u92W_iZTFjLhTJRTOmflJtab1TquAUVHBKjIsoBuoiZAGoHQ1BHWUeP1ncHnbGZ4xDehhtVatYI7Q6R5HdLV1DMXmFCp4mpNwWMVQqyPBxYyJ8U09Hnop8tFyA1ZXAjqB9yPQgMWl6lPRRQLg8B2c4JrrjZ5ucfxm5bnOHc4QVpbr-wnr9aMvzXOk2m0ZPtaLBNp_J9uUYSpT0N_zpN1amAIFaSqug4hRFgtRgZNRZHuf0BR6Nij6_FV8BP-i9vi&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FF38F7D39-281B-41CC-8A1F-15B00A81381E%3Fstore_ref%3DSB_A05349763JT15SJBK54LR-A02737923V40038VQC1AW%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HFW39R5W%2CB0HFVYGSNN%2CB0HFW15H86%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300214488000134%26i%3Daps%26aref%3D1idNIUxVqc&ref_=sbx_be_s_3psl_mbd_mb0_hl&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                - generic [ref=f4e2439]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdUMtu00AAVFsBJYCIcihSjpHIoWKTtb1xnCILrR9JHLd5uSnQy2pjbxLTxHZ3N0nLIScu3JH4Hf6AC4gTiDs_gVIeEsxpRqPRjCYX7v_4_u3L7cIDrCqnneFo1EV-66y0oxweTFgSX5FOQP1kpWXr5Vk2bB_bRwev0PoqxVF_JYF32Rq0BY8ZwsN7KtIrSK_otQo83w2s8T52T9vu0AsKj3J3IiYuZJoV7o-6Q9futbreuesU3-7k9rcOGctJ4S5d0NdpUomT4uOZoICzMF0sWBJRGacJEIyv4pABwSgPZ2AsJ6VbLCFe91BdLOcyBmNOkwiEnFEZrxj43QhCyiMBMhonknEQpolkiVTzJ5ZNtH5wTBw38E97_ZKR21Hyb75--vzxg1PM_0lvh2iZmJceqhBCAyk1QzUQRIq653WHR3t23z7sFZ46FrazpgfqeGNd_sIUb6yB5L3BEv-LjTXdWIONhW_ItJi3p-5Vq7MKcex4coZM9f1u7t3uTMpMHFWr6_W68veZqpApZ6Ka0SmrOlqjiWy3Cep1qABkYAiw0XSA5kC7UXNc23Dgs5sA4WxiBhbBUDV0Xa1rHhy0z_r6S-wHGGCIdARRTdNQU7WgPRrY_XY5iwiPSDafRdyU5ZmgJOQkjkxYnmeEijgRpgUb_WP_3O_YT25oB9lWsLUvl4xfmyfpOJ6zrRbzVJr_X1oWUUZoRKY8XWamBqHSaNQMBUJd11A5NmkmynQ73JHX6vML-cJXfgJs29n-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FD39F4CEF-7701-48A0-A8FD-3D0C95DEC8D0%3Fstore_ref%3DSB_A02866273I0QHVP6YAKSA-A0464045334F2B0CUQCPH%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB09PLKZKJC%2CB09PLJ4CBS%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300199581006634%26i%3Daps%26aref%3DDty2WktXK1&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                      - link [ref=f4e2440] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdUMtu00AAVFsBJYCIcihSjpHIoWKTtb1xnCILrR9JHLd5uSnQy2pjbxLTxHZ3N0nLIScu3JH4Hf6AC4gTiDs_gVIeEsxpRqPRjCYX7v_4_u3L7cIDrCqnneFo1EV-66y0oxweTFgSX5FOQP1kpWXr5Vk2bB_bRwev0PoqxVF_JYF32Rq0BY8ZwsN7KtIrSK_otQo83w2s8T52T9vu0AsKj3J3IiYuZJoV7o-6Q9futbreuesU3-7k9rcOGctJ4S5d0NdpUomT4uOZoICzMF0sWBJRGacJEIyv4pABwSgPZ2AsJ6VbLCFe91BdLOcyBmNOkwiEnFEZrxj43QhCyiMBMhonknEQpolkiVTzJ5ZNtH5wTBw38E97_ZKR21Hyb75--vzxg1PM_0lvh2iZmJceqhBCAyk1QzUQRIq653WHR3t23z7sFZ46FrazpgfqeGNd_sIUb6yB5L3BEv-LjTXdWIONhW_ItJi3p-5Vq7MKcex4coZM9f1u7t3uTMpMHFWr6_W68veZqpApZ6Ka0SmrOlqjiWy3Cep1qABkYAiw0XSA5kC7UXNc23Dgs5sA4WxiBhbBUDV0Xa1rHhy0z_r6S-wHGGCIdARRTdNQU7WgPRrY_XY5iwiPSDafRdyU5ZmgJOQkjkxYnmeEijgRpgUb_WP_3O_YT25oB9lWsLUvl4xfmyfpOJ6zrRbzVJr_X1oWUUZoRKY8XWamBqHSaNQMBUJd11A5NmkmynQ73JHX6vML-cJXfgJs29n-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FD39F4CEF-7701-48A0-A8FD-3D0C95DEC8D0%3Fstore_ref%3DSB_A02866273I0QHVP6YAKSA-A0464045334F2B0CUQCPH%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB09PLKZKJC%2CB09PLJ4CBS%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300199581006634%26i%3Daps%26aref%3DDty2WktXK1&ref_=sbx_be_s_3psl_mbd_mb1_ls&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                        - img "TDG" [ref=f4e2441]
                      - generic [ref=f4e2443]:
                        - generic [ref=f4e2444]:
                          - link [aria-hidden] [ref=f4e2445] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdUMtu00AAVFsBJYCIcihSjpHIoWKTtb1xnCILrR9JHLd5uSnQy2pjbxLTxHZ3N0nLIScu3JH4Hf6AC4gTiDs_gVIeEsxpRqPRjCYX7v_4_u3L7cIDrCqnneFo1EV-66y0oxweTFgSX5FOQP1kpWXr5Vk2bB_bRwev0PoqxVF_JYF32Rq0BY8ZwsN7KtIrSK_otQo83w2s8T52T9vu0AsKj3J3IiYuZJoV7o-6Q9futbreuesU3-7k9rcOGctJ4S5d0NdpUomT4uOZoICzMF0sWBJRGacJEIyv4pABwSgPZ2AsJ6VbLCFe91BdLOcyBmNOkwiEnFEZrxj43QhCyiMBMhonknEQpolkiVTzJ5ZNtH5wTBw38E97_ZKR21Hyb75--vzxg1PM_0lvh2iZmJceqhBCAyk1QzUQRIq653WHR3t23z7sFZ46FrazpgfqeGNd_sIUb6yB5L3BEv-LjTXdWIONhW_ItJi3p-5Vq7MKcex4coZM9f1u7t3uTMpMHFWr6_W68veZqpApZ6Ka0SmrOlqjiWy3Cep1qABkYAiw0XSA5kC7UXNc23Dgs5sA4WxiBhbBUDV0Xa1rHhy0z_r6S-wHGGCIdARRTdNQU7WgPRrY_XY5iwiPSDafRdyU5ZmgJOQkjkxYnmeEijgRpgUb_WP_3O_YT25oB9lWsLUvl4xfmyfpOJ6zrRbzVJr_X1oWUUZoRKY8XWamBqHSaNQMBUJd11A5NmkmynQ73JHX6vML-cJXfgJs29n-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FD39F4CEF-7701-48A0-A8FD-3D0C95DEC8D0%3Fstore_ref%3DSB_A02866273I0QHVP6YAKSA-A0464045334F2B0CUQCPH%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB09PLKZKJC%2CB09PLJ4CBS%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300199581006634%26i%3Daps%26aref%3DDty2WktXK1&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                          - link [ref=f4e2446] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdUMtu00AAVFsBJYCIcihSjpHIoWKTtb1xnCILrR9JHLd5uSnQy2pjbxLTxHZ3N0nLIScu3JH4Hf6AC4gTiDs_gVIeEsxpRqPRjCYX7v_4_u3L7cIDrCqnneFo1EV-66y0oxweTFgSX5FOQP1kpWXr5Vk2bB_bRwev0PoqxVF_JYF32Rq0BY8ZwsN7KtIrSK_otQo83w2s8T52T9vu0AsKj3J3IiYuZJoV7o-6Q9futbreuesU3-7k9rcOGctJ4S5d0NdpUomT4uOZoICzMF0sWBJRGacJEIyv4pABwSgPZ2AsJ6VbLCFe91BdLOcyBmNOkwiEnFEZrxj43QhCyiMBMhonknEQpolkiVTzJ5ZNtH5wTBw38E97_ZKR21Hyb75--vzxg1PM_0lvh2iZmJceqhBCAyk1QzUQRIq653WHR3t23z7sFZ46FrazpgfqeGNd_sIUb6yB5L3BEv-LjTXdWIONhW_ItJi3p-5Vq7MKcex4coZM9f1u7t3uTMpMHFWr6_W68veZqpApZ6Ka0SmrOlqjiWy3Cep1qABkYAiw0XSA5kC7UXNc23Dgs5sA4WxiBhbBUDV0Xa1rHhy0z_r6S-wHGGCIdARRTdNQU7WgPRrY_XY5iwiPSDafRdyU5ZmgJOQkjkxYnmeEijgRpgUb_WP_3O_YT25oB9lWsLUvl4xfmyfpOJ6zrRbzVJr_X1oWUUZoRKY8XWamBqHSaNQMBUJd11A5NmkmynQ73JHX6vML-cJXfgJs29n-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FD39F4CEF-7701-48A0-A8FD-3D0C95DEC8D0%3Fstore_ref%3DSB_A02866273I0QHVP6YAKSA-A0464045334F2B0CUQCPH%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB09PLKZKJC%2CB09PLJ4CBS%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300199581006634%26i%3Daps%26aref%3DDty2WktXK1&ref_=sbx_be_s_3psl_mbd_mb1_logo&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                            - img "TDG" [ref=f4e2448]
                        - generic [ref=f4e2449]:
                          - link [aria-hidden] [ref=f4e2450] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdUMtu00AAVFsBJYCIcihSjpHIoWKTtb1xnCILrR9JHLd5uSnQy2pjbxLTxHZ3N0nLIScu3JH4Hf6AC4gTiDs_gVIeEsxpRqPRjCYX7v_4_u3L7cIDrCqnneFo1EV-66y0oxweTFgSX5FOQP1kpWXr5Vk2bB_bRwev0PoqxVF_JYF32Rq0BY8ZwsN7KtIrSK_otQo83w2s8T52T9vu0AsKj3J3IiYuZJoV7o-6Q9futbreuesU3-7k9rcOGctJ4S5d0NdpUomT4uOZoICzMF0sWBJRGacJEIyv4pABwSgPZ2AsJ6VbLCFe91BdLOcyBmNOkwiEnFEZrxj43QhCyiMBMhonknEQpolkiVTzJ5ZNtH5wTBw38E97_ZKR21Hyb75--vzxg1PM_0lvh2iZmJceqhBCAyk1QzUQRIq653WHR3t23z7sFZ46FrazpgfqeGNd_sIUb6yB5L3BEv-LjTXdWIONhW_ItJi3p-5Vq7MKcex4coZM9f1u7t3uTMpMHFWr6_W68veZqpApZ6Ka0SmrOlqjiWy3Cep1qABkYAiw0XSA5kC7UXNc23Dgs5sA4WxiBhbBUDV0Xa1rHhy0z_r6S-wHGGCIdARRTdNQU7WgPRrY_XY5iwiPSDafRdyU5ZmgJOQkjkxYnmeEijgRpgUb_WP_3O_YT25oB9lWsLUvl4xfmyfpOJ6zrRbzVJr_X1oWUUZoRKY8XWamBqHSaNQMBUJd11A5NmkmynQ73JHX6vML-cJXfgJs29n-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FD39F4CEF-7701-48A0-A8FD-3D0C95DEC8D0%3Fstore_ref%3DSB_A02866273I0QHVP6YAKSA-A0464045334F2B0CUQCPH%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB09PLKZKJC%2CB09PLJ4CBS%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300199581006634%26i%3Daps%26aref%3DDty2WktXK1&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                          - link "Wide Range Of Gifting for Men" [ref=f4e2451] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdUMtu00AAVFsBJYCIcihSjpHIoWKTtb1xnCILrR9JHLd5uSnQy2pjbxLTxHZ3N0nLIScu3JH4Hf6AC4gTiDs_gVIeEsxpRqPRjCYX7v_4_u3L7cIDrCqnneFo1EV-66y0oxweTFgSX5FOQP1kpWXr5Vk2bB_bRwev0PoqxVF_JYF32Rq0BY8ZwsN7KtIrSK_otQo83w2s8T52T9vu0AsKj3J3IiYuZJoV7o-6Q9futbreuesU3-7k9rcOGctJ4S5d0NdpUomT4uOZoICzMF0sWBJRGacJEIyv4pABwSgPZ2AsJ6VbLCFe91BdLOcyBmNOkwiEnFEZrxj43QhCyiMBMhonknEQpolkiVTzJ5ZNtH5wTBw38E97_ZKR21Hyb75--vzxg1PM_0lvh2iZmJceqhBCAyk1QzUQRIq653WHR3t23z7sFZ46FrazpgfqeGNd_sIUb6yB5L3BEv-LjTXdWIONhW_ItJi3p-5Vq7MKcex4coZM9f1u7t3uTMpMHFWr6_W68veZqpApZ6Ka0SmrOlqjiWy3Cep1qABkYAiw0XSA5kC7UXNc23Dgs5sA4WxiBhbBUDV0Xa1rHhy0z_r6S-wHGGCIdARRTdNQU7WgPRrY_XY5iwiPSDafRdyU5ZmgJOQkjkxYnmeEijgRpgUb_WP_3O_YT25oB9lWsLUvl4xfmyfpOJ6zrRbzVJr_X1oWUUZoRKY8XWamBqHSaNQMBUJd11A5NmkmynQ73JHX6vML-cJXfgJs29n-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FD39F4CEF-7701-48A0-A8FD-3D0C95DEC8D0%3Fstore_ref%3DSB_A02866273I0QHVP6YAKSA-A0464045334F2B0CUQCPH%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB09PLKZKJC%2CB09PLJ4CBS%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300199581006634%26i%3Daps%26aref%3DDty2WktXK1&ref_=sbx_be_s_3psl_mbd_mb1_hl&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                - generic [ref=f4e2456]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksqiYZHxJXBdZyONL4iR17iXtxprYE8cisaczk6SwyB6JZ0DiDXgDHoIFO8QCiQUvgdICEvyr7-icX-ecPxce_vz29cvdwiNTlkatwXjsq-3GeWlPOj6akTS5DlpD3E7XCt2szumg2bFOj_qkgWd-7Mdg2vbYbIJoIi_6gweyWq-o9Uq9VoGX-0M0PTSdUdMZeMPCk9y9iPBXIqOFh2N_4Fjdhu9dOnbx7V7ucNcJpmJWuI-X-E2WVpK0-HTOMWAkzJZLkkZYJFkKOGHrJCSAE8zCOZiKWekOSQPPP5aXq4VIwJThNAIhI1gkawJ-bwQhZhEHFCepIAyEWSpIKuT8GbICpTfsBLYzbI-6vdJJbk_Ov_vx-funj3Yx_8e9O0ShfFF6rEAIa1Jdq0s61JW6fOD5g9MDq2cddwvPbWRa1PWAZm7R1a1ic4v6gnX7K_NfbVG8Rf0tMm8gLuat2LlutNahmdiemKuG_GE_935_LgTlp9XqZrOp_E2mykXGCK9SHJOqBB3oypoJENQdoEoOBCeq6wBNclzkmgjpdfXFjSFgZGYMUWBCRYG6qkmu0juvNT3F9EcWMKEKa1DVBiPbnjQmaNRttco0ClgU0MU8YoYozzkOQhYkkQHLCxpgnqTcQNA9c-1hx-4922H_pd65tG9x5Pda2m7yakXYa-MsmyYLsqv5IhPG_-GWeUQDHAUxy1bUUCCUZFXWoaxrNUUtJwamvIx3L-BGk03s6wt5_AuMCdz-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F10E0F27A-B09E-41E0-84FE-71EFBFABB964%3Fstore_ref%3DSB_A03309471F3PV5HI3ANTC-A0405047RTDDXGXBTOJJ%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0FMFDSLDP%2CB0FMQW9LZD%2CB0FMQTNPJ7%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300124290297534%26i%3Daps%26aref%3DaGHrXDxY2U&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                      - link [ref=f4e2457] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksqiYZHxJXBdZyONL4iR17iXtxprYE8cisaczk6SwyB6JZ0DiDXgDHoIFO8QCiQUvgdICEvyr7-icX-ecPxce_vz29cvdwiNTlkatwXjsq-3GeWlPOj6akTS5DlpD3E7XCt2szumg2bFOj_qkgWd-7Mdg2vbYbIJoIi_6gweyWq-o9Uq9VoGX-0M0PTSdUdMZeMPCk9y9iPBXIqOFh2N_4Fjdhu9dOnbx7V7ucNcJpmJWuI-X-E2WVpK0-HTOMWAkzJZLkkZYJFkKOGHrJCSAE8zCOZiKWekOSQPPP5aXq4VIwJThNAIhI1gkawJ-bwQhZhEHFCepIAyEWSpIKuT8GbICpTfsBLYzbI-6vdJJbk_Ov_vx-funj3Yx_8e9O0ShfFF6rEAIa1Jdq0s61JW6fOD5g9MDq2cddwvPbWRa1PWAZm7R1a1ic4v6gnX7K_NfbVG8Rf0tMm8gLuat2LlutNahmdiemKuG_GE_935_LgTlp9XqZrOp_E2mykXGCK9SHJOqBB3oypoJENQdoEoOBCeq6wBNclzkmgjpdfXFjSFgZGYMUWBCRYG6qkmu0juvNT3F9EcWMKEKa1DVBiPbnjQmaNRttco0ClgU0MU8YoYozzkOQhYkkQHLCxpgnqTcQNA9c-1hx-4922H_pd65tG9x5Pda2m7yakXYa-MsmyYLsqv5IhPG_-GWeUQDHAUxy1bUUCCUZFXWoaxrNUUtJwamvIx3L-BGk03s6wt5_AuMCdz-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F10E0F27A-B09E-41E0-84FE-71EFBFABB964%3Fstore_ref%3DSB_A03309471F3PV5HI3ANTC-A0405047RTDDXGXBTOJJ%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0FMFDSLDP%2CB0FMQW9LZD%2CB0FMQTNPJ7%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300124290297534%26i%3Daps%26aref%3DaGHrXDxY2U&ref_=sbx_be_s_3psl_mbd_mb2_ls&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                        - img "Hollyland" [ref=f4e2458]
                      - generic [ref=f4e2460]:
                        - generic [ref=f4e2461]:
                          - link [aria-hidden] [ref=f4e2462] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksqiYZHxJXBdZyONL4iR17iXtxprYE8cisaczk6SwyB6JZ0DiDXgDHoIFO8QCiQUvgdICEvyr7-icX-ecPxce_vz29cvdwiNTlkatwXjsq-3GeWlPOj6akTS5DlpD3E7XCt2szumg2bFOj_qkgWd-7Mdg2vbYbIJoIi_6gweyWq-o9Uq9VoGX-0M0PTSdUdMZeMPCk9y9iPBXIqOFh2N_4Fjdhu9dOnbx7V7ucNcJpmJWuI-X-E2WVpK0-HTOMWAkzJZLkkZYJFkKOGHrJCSAE8zCOZiKWekOSQPPP5aXq4VIwJThNAIhI1gkawJ-bwQhZhEHFCepIAyEWSpIKuT8GbICpTfsBLYzbI-6vdJJbk_Ov_vx-funj3Yx_8e9O0ShfFF6rEAIa1Jdq0s61JW6fOD5g9MDq2cddwvPbWRa1PWAZm7R1a1ic4v6gnX7K_NfbVG8Rf0tMm8gLuat2LlutNahmdiemKuG_GE_935_LgTlp9XqZrOp_E2mykXGCK9SHJOqBB3oypoJENQdoEoOBCeq6wBNclzkmgjpdfXFjSFgZGYMUWBCRYG6qkmu0juvNT3F9EcWMKEKa1DVBiPbnjQmaNRttco0ClgU0MU8YoYozzkOQhYkkQHLCxpgnqTcQNA9c-1hx-4922H_pd65tG9x5Pda2m7yakXYa-MsmyYLsqv5IhPG_-GWeUQDHAUxy1bUUCCUZFXWoaxrNUUtJwamvIx3L-BGk03s6wt5_AuMCdz-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F10E0F27A-B09E-41E0-84FE-71EFBFABB964%3Fstore_ref%3DSB_A03309471F3PV5HI3ANTC-A0405047RTDDXGXBTOJJ%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0FMFDSLDP%2CB0FMQW9LZD%2CB0FMQTNPJ7%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300124290297534%26i%3Daps%26aref%3DaGHrXDxY2U&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                          - link [ref=f4e2463] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksqiYZHxJXBdZyONL4iR17iXtxprYE8cisaczk6SwyB6JZ0DiDXgDHoIFO8QCiQUvgdICEvyr7-icX-ecPxce_vz29cvdwiNTlkatwXjsq-3GeWlPOj6akTS5DlpD3E7XCt2szumg2bFOj_qkgWd-7Mdg2vbYbIJoIi_6gweyWq-o9Uq9VoGX-0M0PTSdUdMZeMPCk9y9iPBXIqOFh2N_4Fjdhu9dOnbx7V7ucNcJpmJWuI-X-E2WVpK0-HTOMWAkzJZLkkZYJFkKOGHrJCSAE8zCOZiKWekOSQPPP5aXq4VIwJThNAIhI1gkawJ-bwQhZhEHFCepIAyEWSpIKuT8GbICpTfsBLYzbI-6vdJJbk_Ov_vx-funj3Yx_8e9O0ShfFF6rEAIa1Jdq0s61JW6fOD5g9MDq2cddwvPbWRa1PWAZm7R1a1ic4v6gnX7K_NfbVG8Rf0tMm8gLuat2LlutNahmdiemKuG_GE_935_LgTlp9XqZrOp_E2mykXGCK9SHJOqBB3oypoJENQdoEoOBCeq6wBNclzkmgjpdfXFjSFgZGYMUWBCRYG6qkmu0juvNT3F9EcWMKEKa1DVBiPbnjQmaNRttco0ClgU0MU8YoYozzkOQhYkkQHLCxpgnqTcQNA9c-1hx-4922H_pd65tG9x5Pda2m7yakXYa-MsmyYLsqv5IhPG_-GWeUQDHAUxy1bUUCCUZFXWoaxrNUUtJwamvIx3L-BGk03s6wt5_AuMCdz-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F10E0F27A-B09E-41E0-84FE-71EFBFABB964%3Fstore_ref%3DSB_A03309471F3PV5HI3ANTC-A0405047RTDDXGXBTOJJ%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0FMFDSLDP%2CB0FMQW9LZD%2CB0FMQTNPJ7%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300124290297534%26i%3Daps%26aref%3DaGHrXDxY2U&ref_=sbx_be_s_3psl_mbd_mb2_logo&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                            - img "Hollyland" [ref=f4e2465]
                        - generic [ref=f4e2466]:
                          - link [aria-hidden] [ref=f4e2467] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksqiYZHxJXBdZyONL4iR17iXtxprYE8cisaczk6SwyB6JZ0DiDXgDHoIFO8QCiQUvgdICEvyr7-icX-ecPxce_vz29cvdwiNTlkatwXjsq-3GeWlPOj6akTS5DlpD3E7XCt2szumg2bFOj_qkgWd-7Mdg2vbYbIJoIi_6gweyWq-o9Uq9VoGX-0M0PTSdUdMZeMPCk9y9iPBXIqOFh2N_4Fjdhu9dOnbx7V7ucNcJpmJWuI-X-E2WVpK0-HTOMWAkzJZLkkZYJFkKOGHrJCSAE8zCOZiKWekOSQPPP5aXq4VIwJThNAIhI1gkawJ-bwQhZhEHFCepIAyEWSpIKuT8GbICpTfsBLYzbI-6vdJJbk_Ov_vx-funj3Yx_8e9O0ShfFF6rEAIa1Jdq0s61JW6fOD5g9MDq2cddwvPbWRa1PWAZm7R1a1ic4v6gnX7K_NfbVG8Rf0tMm8gLuat2LlutNahmdiemKuG_GE_935_LgTlp9XqZrOp_E2mykXGCK9SHJOqBB3oypoJENQdoEoOBCeq6wBNclzkmgjpdfXFjSFgZGYMUWBCRYG6qkmu0juvNT3F9EcWMKEKa1DVBiPbnjQmaNRttco0ClgU0MU8YoYozzkOQhYkkQHLCxpgnqTcQNA9c-1hx-4922H_pd65tG9x5Pda2m7yakXYa-MsmyYLsqv5IhPG_-GWeUQDHAUxy1bUUCCUZFXWoaxrNUUtJwamvIx3L-BGk03s6wt5_AuMCdz-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F10E0F27A-B09E-41E0-84FE-71EFBFABB964%3Fstore_ref%3DSB_A03309471F3PV5HI3ANTC-A0405047RTDDXGXBTOJJ%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0FMFDSLDP%2CB0FMQW9LZD%2CB0FMQTNPJ7%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300124290297534%26i%3Daps%26aref%3DaGHrXDxY2U&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
                          - link "Lark A1 Mini Wireless Microphone for Phone" [ref=f4e2468] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksqiYZHxJXBdZyONL4iR17iXtxprYE8cisaczk6SwyB6JZ0DiDXgDHoIFO8QCiQUvgdICEvyr7-icX-ecPxce_vz29cvdwiNTlkatwXjsq-3GeWlPOj6akTS5DlpD3E7XCt2szumg2bFOj_qkgWd-7Mdg2vbYbIJoIi_6gweyWq-o9Uq9VoGX-0M0PTSdUdMZeMPCk9y9iPBXIqOFh2N_4Fjdhu9dOnbx7V7ucNcJpmJWuI-X-E2WVpK0-HTOMWAkzJZLkkZYJFkKOGHrJCSAE8zCOZiKWekOSQPPP5aXq4VIwJThNAIhI1gkawJ-bwQhZhEHFCepIAyEWSpIKuT8GbICpTfsBLYzbI-6vdJJbk_Ov_vx-funj3Yx_8e9O0ShfFF6rEAIa1Jdq0s61JW6fOD5g9MDq2cddwvPbWRa1PWAZm7R1a1ic4v6gnX7K_NfbVG8Rf0tMm8gLuat2LlutNahmdiemKuG_GE_935_LgTlp9XqZrOp_E2mykXGCK9SHJOqBB3oypoJENQdoEoOBCeq6wBNclzkmgjpdfXFjSFgZGYMUWBCRYG6qkmu0juvNT3F9EcWMKEKa1DVBiPbnjQmaNRttco0ClgU0MU8YoYozzkOQhYkkQHLCxpgnqTcQNA9c-1hx-4922H_pd65tG9x5Pda2m7yakXYa-MsmyYLsqv5IhPG_-GWeUQDHAUxy1bUUCCUZFXWoaxrNUUtJwamvIx3L-BGk03s6wt5_AuMCdz-&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F10E0F27A-B09E-41E0-84FE-71EFBFABB964%3Fstore_ref%3DSB_A03309471F3PV5HI3ANTC-A0405047RTDDXGXBTOJJ%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0FMFDSLDP%2CB0FMQW9LZD%2CB0FMQTNPJ7%26lp_query%3DMobile%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300124290297534%26i%3Daps%26aref%3DaGHrXDxY2U&ref_=sbx_be_s_3psl_mbd_mb2_hl&pd_rd_w=ln11j&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=FVKAG7VA4FX45X01B9P3&pd_rd_wg=bLyIS&pd_rd_r=4aecea88-d4b5-4101-aa09-7e7f5a7da7d4
          - generic [ref=f4e2477]:
            - heading "Need help?" [level=2] [ref=f4e2480]
            - generic [ref=f4e2481]:
              - link "Visit the help section" [ref=f4e2482] [cursor=pointer]:
                - /url: /gp/help/customer/display.html?nodeId=201889520
              - text: or
              - link "contact us" [ref=f4e2483] [cursor=pointer]:
                - /url: /gp/help/customer/contact-us
        - link "Go back to filtering menu" [ref=f4e2484] [cursor=pointer]:
          - /url: "#s-skipLinkTargetForFilterOptions"
      - dialog "Filters" [ref=f4e2485]:
        - generic [ref=f4e2486]:
          - link "Skip to main search results" [ref=f4e2487] [cursor=pointer]:
            - /url: "#s-skipLinkTargetForMainSearchResults"
          - generic [ref=f4e2493]:
            - group [ref=f4e2494]:
              - heading "Popular Shopping Ideas" [level=2] [ref=f4e2495]
              - list [ref=f4e2496]:
                - listitem [ref=f4e2497]:
                  - link "Samsung" [ref=f4e2499] [cursor=pointer]:
                    - /url: /s?k=samsung+mobile&ref=sr_nr_p_rag_integrated_qb_0
                - listitem [ref=f4e2500]:
                  - link "6gb + 128gb" [ref=f4e2502] [cursor=pointer]:
                    - /url: /s?k=6+gb+ram+128gb+storage+mobile&ref=sr_nr_p_rag_integrated_qb_1
                - listitem [ref=f4e2503]:
                  - link "Budget" [ref=f4e2505] [cursor=pointer]:
                    - /url: /s?k=mobile+under+15000&ref=sr_nr_p_rag_integrated_qb_2
                - listitem [ref=f4e2506]:
                  - link "Under ₹21,000" [ref=f4e2508] [cursor=pointer]:
                    - /url: /s?k=mobile+under+21000&ref=sr_nr_p_rag_integrated_qb_3
                - listitem [ref=f4e2509]:
                  - button "See more" [ref=f4e2512] [cursor=pointer]
            - separator [aria-hidden] [ref=f4e2514]
            - group [ref=f4e2515]:
              - heading "Delivery Day" [level=2] [ref=f4e2516]
              - list "Delivery Day" [ref=f4e2517]:
                - listitem "Popular Shopping Ideas" [ref=f4e2518]:
                  - link "Apply the filter Get It Today to narrow results" [ref=f4e2520] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_90%3A6741117031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=6741116031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_90_1&ds=v1%3ASX%2Fr2wH606ZqtPuIbw8fqzMs4YQwZzeMY%2Be%2Fay8I0SE
                    - checkbox [aria-hidden] [ref=f4e2523]
                    - text: Get It Today
                - listitem "Popular Shopping Ideas" [ref=f4e2525]:
                  - link "Apply the filter Get It by Tomorrow to narrow results" [ref=f4e2527] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_90%3A6741118031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=6741116031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_90_2&ds=v1%3AjnErT2kSy533pB2LrGDhEx46l59yVajnadG5lSSlU%2Fo
                    - checkbox [aria-hidden] [ref=f4e2530]
                    - text: Get It by Tomorrow
                - listitem "Popular Shopping Ideas" [ref=f4e2532]:
                  - link "Apply the filter Get It in 2 Days to narrow results" [ref=f4e2534] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_90%3A20912642031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=6741116031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_90_3&ds=v1%3A1vY857mxFScQxQ5V0MAc3UOP8QWTdEXbh%2BAxZCYEDII
                    - checkbox [aria-hidden] [ref=f4e2537]
                    - text: Get It in 2 Days
              - heading "Eligible for Free Delivery" [level=2] [ref=f4e2539]
              - list "Eligible for Free Delivery" [ref=f4e2540]:
                - listitem "Popular Shopping Ideas" [ref=f4e2541]:
                  - link "Apply the filter Free Shipping to narrow results" [ref=f4e2543] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_free_shipping_eligible%3A205563695031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=205563694031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_free_shipping_eligible_1&ds=v1%3AjtGN4rWKTLQBMzanLgBRNd%2Fd5QK%2FqDtgslI6VNUsRsc
                    - checkbox [aria-hidden] [ref=f4e2546]
                    - text: Free Shipping
                    - generic [ref=f4e2548]: Get FREE Shipping on eligible orders shipped by Amazon
            - group [ref=f4e2549]:
              - heading "Customer Reviews" [level=2] [ref=f4e2550]
              - list "Customer Reviews" [ref=f4e2551]:
                - listitem [ref=f4e2552]:
                  - link "Apply the filter 4 Stars & Up to narrow results" [ref=f4e2555] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_72%3A1318476031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318475031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_72_1&ds=v1%3AVmEWWUxJFQQiJOnISOjJ6T2DO4T4SDUj28uxabtjuek
                    - generic [ref=f4e2556]: 4 Stars
                    - text: "& Up"
            - group [ref=f4e2558]:
              - heading "Brands" [level=2] [ref=f4e2559]
              - list "Brands" [ref=f4e2560]:
                - listitem "Popular Shopping Ideas" [ref=f4e2561]:
                  - link "Apply the filter Samsung to narrow results" [ref=f4e2563] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_123%3A46655&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91049095031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_123_1&ds=v1%3AmnvNe0iWWqL66zowVmGYR%2Fqm2oD74QNWUl5YliNKZQM
                    - checkbox [aria-hidden] [ref=f4e2566]
                    - text: Samsung
                - listitem "Popular Shopping Ideas" [ref=f4e2568]:
                  - link "Apply the filter realme to narrow results" [ref=f4e2570] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_123%3A568349&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91049095031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_123_2&ds=v1%3AjP0vaK%2BTFaSjGIzvupqp9t312U8l1eJ9JyD5N8sKfdk
                    - checkbox [aria-hidden] [ref=f4e2573]
                    - text: realme
                - listitem "Popular Shopping Ideas" [ref=f4e2575]:
                  - link "Apply the filter OnePlus to narrow results" [ref=f4e2577] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_123%3A253649&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91049095031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_123_3&ds=v1%3AhdZON84ykt7bPQYXyAJu7aJ8v70yERt6RD03sfVqBmg
                    - checkbox [aria-hidden] [ref=f4e2580]
                    - text: OnePlus
                - listitem "Popular Shopping Ideas" [ref=f4e2582]:
                  - link "Apply the filter Apple to narrow results" [ref=f4e2584] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_123%3A110955&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91049095031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_123_4&ds=v1%3ASzXx3paqWyFsgEaSwvY1k6wlN%2BDwINupjsV4hjSldGI
                    - checkbox [aria-hidden] [ref=f4e2587]
                    - text: Apple
                - listitem "Popular Shopping Ideas" [ref=f4e2589]:
                  - link "Apply the filter OPPO to narrow results" [ref=f4e2591] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_123%3A559198&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91049095031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_123_5&ds=v1%3AnWoMIQPyAw1UwOFZKrWkZf0wcYI%2Bx8VGArHU4CoPs4s
                    - checkbox [aria-hidden] [ref=f4e2594]
                    - text: OPPO
                - listitem "Popular Shopping Ideas" [ref=f4e2596]:
                  - link "Apply the filter Xiaomi to narrow results" [ref=f4e2598] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_123%3A338933&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91049095031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_123_6&ds=v1%3ADLzzx5aqOd%2B3ordrAKENByXl%2FfOgyogt4a5r0BTCtQY
                    - checkbox [aria-hidden] [ref=f4e2601]
                    - text: Xiaomi
                - listitem "Popular Shopping Ideas" [ref=f4e2603]:
                  - link "Apply the filter Motorola to narrow results" [ref=f4e2605] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_123%3A146762&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91049095031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_123_7&ds=v1%3AVDUMSGTrrbKNgCqV5QuTrl4vp4FarhMTE8WGK3QoCpU
                    - checkbox [aria-hidden] [ref=f4e2608]
                    - text: Motorola
                - listitem [ref=f4e2610]:
                  - button "See more, Brands" [ref=f4e2613] [cursor=pointer]: See more
            - group [ref=f4e2615]:
              - generic [ref=f4e2616]:
                - generic [ref=f4e2617]: Price
                - generic [ref=f4e2620]:
                  - generic [ref=f4e2621]:
                    - generic [ref=f4e2622]: ₹88
                    - generic [aria-hidden] [ref=f4e2623]: –
                    - generic [ref=f4e2624]: ₹276,900+
                  - generic [ref=f4e2627]:
                    - generic:
                      - slider "Minimum price": "0"
                    - generic [ref=f4e2628]:
                      - slider "Maximum price": "190"
              - list [ref=f4e2629]:
                - listitem [ref=f4e2630]:
                  - link "Up to ₹10,000" [ref=f4e2632] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_36%3A-1000000&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318502031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_36_1&ds=v1%3AiQ1bkZJKU7Vc71tYKAN%2F07RnS4IZDZTznMjO7wH7ALg
                - listitem [ref=f4e2633]:
                  - link "₹10,000 - ₹21,000" [ref=f4e2635] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_36%3A1000000-2100000&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318502031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_36_2&ds=v1%3AvmV%2F6u4kGEX3jiqOb44MSkFtG129%2BsieRBIgehwRv2A
                - listitem [ref=f4e2636]:
                  - link "₹21,000 - ₹31,000" [ref=f4e2638] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_36%3A2100000-3100000&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318502031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_36_3&ds=v1%3ALZLR1VQfrIM8WCUomJL%2Bb3gx6KxjNBgi6awBLMIlBSw
                - listitem [ref=f4e2639]:
                  - link "₹31,000 - ₹57,000" [ref=f4e2641] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_36%3A3100000-5700000&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318502031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_36_4&ds=v1%3AicTHW8QA3vQupCFo15kIYEmVoHsatUD6eri0COf4uFU
                - listitem [ref=f4e2642]:
                  - link "Over ₹57,000" [ref=f4e2644] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_36%3A5700000-&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318502031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_36_5&ds=v1%3AV2aj7yzXwr%2FRDtZt9OAthuSus8x%2Bsva%2Fok%2BjYfRf%2ByA
              - heading "Deals & Discounts" [level=2] [ref=f4e2645]
              - list "Deals & Discounts" [ref=f4e2646]:
                - listitem [ref=f4e2647]:
                  - link "All Discounts" [ref=f4e2649] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_deal_type%3A26921226031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=26921223031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_deal_type_1&ds=v1%3AOn2llUkJMstI3oj91parpCDrUMbhnU17OcrgpiIrTzo
                - listitem [ref=f4e2650]:
                  - link "Buy More, Save More" [ref=f4e2652] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_deal_type%3A210770213031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=26921223031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_deal_type_2&ds=v1%3AQ63Jit6QIWZIc0w5JKutlaQI0BcJj0Jk7pNT8kr8eIM
                - listitem [ref=f4e2653]:
                  - link "Coupons" [ref=f4e2655] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_deal_type%3A210770212031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=26921223031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_deal_type_3&ds=v1%3APrZwRnB%2B7EyzPuyhyn%2FyKdqzJAvJVjyeiWuowxk44AY
                - listitem [ref=f4e2656]:
                  - link "Today's Deals" [ref=f4e2658] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_deal_type%3A26921224031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=26921223031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_deal_type_4&ds=v1%3Am5m8tx5TWPLja819EsXGmnlhhl9WJiL0%2FFfEe63dl68
            - group [ref=f4e2659]:
              - heading "Discount" [level=2] [ref=f4e2660]
              - list "Discount" [ref=f4e2661]:
                - listitem [ref=f4e2662]:
                  - link "10% Off or more" [ref=f4e2664] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_pct-off-with-tax%3A2665399031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=2665398031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_pct-off-with-tax_1&ds=v1%3AC3tnrSkCAEAmuj%2FLCYT7jlNYk0oYfwSnHlXfLkGY8vM
                - listitem [ref=f4e2665]:
                  - link "25% Off or more" [ref=f4e2667] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_pct-off-with-tax%3A2665400031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=2665398031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_pct-off-with-tax_2&ds=v1%3A1bQoAFCqJszlWEmxJuHTrWJ%2BnE%2F1MVursSplvdeMDV4
                - listitem [ref=f4e2668]:
                  - link "35% Off or more" [ref=f4e2670] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_pct-off-with-tax%3A2665402031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=2665398031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_pct-off-with-tax_3&ds=v1%3ASUP1%2BlT6IBQwh%2BHuHSJ78dzJillrwZbn%2Bn6a9N2EIBQ
                - listitem [ref=f4e2671]:
                  - link "50% Off or more" [ref=f4e2673] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_pct-off-with-tax%3A2665401031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=2665398031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_pct-off-with-tax_4&ds=v1%3Agwg19yFgMowISCk3H708srHAD83d9NXCzJTrK4Nw5k8
                - listitem [ref=f4e2674]:
                  - link "60% Off or more" [ref=f4e2676] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_pct-off-with-tax%3A27060456031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=2665398031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_pct-off-with-tax_5&ds=v1%3APAp0NfJ2ig2cOwyZiivssinAbEDFQfY5dOQXqP4eidM
                - listitem [ref=f4e2677]:
                  - link "70% Off or more" [ref=f4e2679] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_pct-off-with-tax%3A27060457031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=2665398031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_pct-off-with-tax_6&ds=v1%3AbiIUfhstme561hT1yUrRNEqMfyND9E%2FhRaxxHQyQr2o
            - group [ref=f4e2680]:
              - heading "Colour" [level=2] [ref=f4e2681]
              - list "Colour" [ref=f4e2682]:
                - listitem [ref=f4e2683]:
                  - generic:
                    - link "Apply the filter Black to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15563995031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_1&ds=v1%3AQw0gbNNiPm4FuGmKaZ3%2FwpsevI1xVxkNR3YEZsptodo
                      - generic [ref=f4e2684] [cursor=pointer]
                - listitem [ref=f4e2685]:
                  - generic:
                    - link "Apply the filter Multicoloured to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564011031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_2&ds=v1%3AinWlVOPQeMZpul0mnLLwVxVx7nCz1xJYDyVKBk2GcLQ
                      - generic [ref=f4e2686] [cursor=pointer]
                - listitem [ref=f4e2687]:
                  - generic:
                    - link "Apply the filter Blue to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564007031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_3&ds=v1%3A5vBFn6j0n1h6imB3sdy6AYAq4iybQkRtSq04RbTOhvc
                      - generic [ref=f4e2688] [cursor=pointer]
                - listitem [ref=f4e2689]:
                  - generic:
                    - link "Apply the filter Grey to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15563996031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_4&ds=v1%3AHwgRugAl4ZS4FGf%2BPbae%2B0WAy5P8WN8cxKx2AEKqqVM
                      - generic [ref=f4e2690] [cursor=pointer]
                - listitem [ref=f4e2691]:
                  - generic:
                    - link "Apply the filter White to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15563997031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_5&ds=v1%3ArSOwygh6TFBxCpMEBCD8kvf571y6VXsp5kEQJSggSLg
                      - generic [ref=f4e2692] [cursor=pointer]
                - listitem [ref=f4e2693]:
                  - generic:
                    - link "Apply the filter Brown to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15563998031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_6&ds=v1%3AefbXsoPxMt%2BEfRYw5u1aO6mN4gzcQUS54bn56kD%2F9Pc
                      - generic [ref=f4e2694] [cursor=pointer]
                - listitem [ref=f4e2695]:
                  - generic:
                    - link "Apply the filter Red to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564000031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_7&ds=v1%3A5dj%2FRM1SKfNDfWgbb5PRL%2BlNG9IDiNoTmyGTL3HzgIw
                      - generic [ref=f4e2696] [cursor=pointer]
                - listitem [ref=f4e2697]:
                  - generic:
                    - link "Apply the filter Pink to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564001031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_8&ds=v1%3AlxJTbWoWRlxCogqlxiQPL9SJoP2N%2Ba46YHF8E4QyTOE
                      - generic [ref=f4e2698] [cursor=pointer]
                - listitem [ref=f4e2699]:
                  - generic:
                    - link "Apply the filter Orange to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564002031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_9&ds=v1%3AQtbE%2BakXUZNhN%2FLywIXHYz%2B%2FIKEh7wpv3c2mWHEPvVc
                      - generic [ref=f4e2700] [cursor=pointer]
                - listitem [ref=f4e2701]:
                  - generic:
                    - link "Apply the filter Yellow to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564003031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_10&ds=v1%3AeI%2BQgiC0waH4qpFbN7Sop8b9yKsEbjM8LI9vRSisL4Y
                      - generic [ref=f4e2702] [cursor=pointer]
                - listitem [ref=f4e2703]:
                  - generic:
                    - link "Apply the filter Green to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564005031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_11&ds=v1%3Akgy2V0oH0ysRoZhu3XqK2M0Nm884zREUsx2xQzzQu88
                      - generic [ref=f4e2704] [cursor=pointer]
                - listitem [ref=f4e2705]:
                  - generic:
                    - link "Apply the filter Turquoise to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564006031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_12&ds=v1%3AbBNt2pinCwrGwKo8mu5X4pgBLNxJjPPPEH7%2B4OJVJf0
                      - generic [ref=f4e2706] [cursor=pointer]
                - listitem [ref=f4e2707]:
                  - generic:
                    - link "Apply the filter Purple to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564008031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_13&ds=v1%3AuA5BiIp04Cp8Oun1YNvLBHqmUp5IrFPGpg8%2BYB8fk0Q
                      - generic [ref=f4e2708] [cursor=pointer]
                - listitem [ref=f4e2709]:
                  - generic:
                    - link "Apply the filter Gold to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564009031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_14&ds=v1%3A4OUp5ZO89EGYnPgkldd5Gxe3e%2BgJxgWa3ujPG%2FdvxfQ
                      - generic [ref=f4e2710] [cursor=pointer]
                - listitem [ref=f4e2711]:
                  - generic:
                    - link "Apply the filter Silver to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564010031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_15&ds=v1%3A%2BnK6nZLIF%2F%2BVq3ZhS1Om3u92QtRJL98Kk7sA%2Bn4EeiM
                      - generic [ref=f4e2712] [cursor=pointer]
                - listitem [ref=f4e2713]:
                  - generic:
                    - link "Apply the filter Transparent to narrow results":
                      - /url: /s?k=Mobile&rh=p_n_size_two_browse-vebin%3A15564012031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=15563994031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_size_two_browse-vebin_16&ds=v1%3AdZ3qsEbrISuRsBKePr6MuZCCcCtSPOfGFL2%2FfxtQrKY
                      - generic [ref=f4e2714] [cursor=pointer]
            - group [ref=f4e2715]:
              - heading "Pay On Delivery" [level=2] [ref=f4e2716]
              - list "Pay On Delivery" [ref=f4e2717]:
                - listitem "Popular Shopping Ideas" [ref=f4e2718]:
                  - link "Apply the filter Eligible for Pay On Delivery to narrow results" [ref=f4e2720] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_is_cod_eligible%3A4931671031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=4931670031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_is_cod_eligible_1&ds=v1%3ARdegmHeS1mRgGn8jJbyisjnDyW55P6CqrXZF6GIbzUY
                    - checkbox [aria-hidden] [ref=f4e2723]
                    - text: Eligible for Pay On Delivery
            - group [ref=f4e2725]:
              - heading "Cell Phone Brands" [level=2] [ref=f4e2726]
              - list "Cell Phone Brands" [ref=f4e2727]:
                - listitem "Popular Shopping Ideas" [ref=f4e2728]:
                  - link "Apply the filter Top Brands to narrow results" [ref=f4e2730] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_format_browse-bin%3A30678580031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=30678573031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_format_browse-bin_1&ds=v1%3AeNVeYkJ3QVIhg375QBawOlfJ3pm4t3iRw87S7K%2BP9ws
                    - checkbox [aria-hidden] [ref=f4e2733]
                    - text: Top Brands
            - group [ref=f4e2735]:
              - heading "Seller" [level=2] [ref=f4e2736]
              - list "Seller" [ref=f4e2737]:
                - listitem "Popular Shopping Ideas" [ref=f4e2738]:
                  - link "Apply the filter AIMS International to narrow results" [ref=f4e2740] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_6%3AA2JEP7O2CQD4LK&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318474031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_6_1&ds=v1%3AtlUM1%2BgiMtJ4c35h%2BDW9x56o6Cp9FZQQKCO0boPpWkE
                    - checkbox [aria-hidden] [ref=f4e2743]
                    - text: AIMS International
                - listitem "Popular Shopping Ideas" [ref=f4e2745]:
                  - link "Apply the filter Clicktech Retail Private Ltd to narrow results" [ref=f4e2747] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_6%3AAJ6SIZC8YQDZX&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318474031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_6_2&ds=v1%3AIjtbeoWiB1DKmBIiOY0lbvb6LVoRiq0y9w39TxdKjN0
                    - checkbox [aria-hidden] [ref=f4e2750]
                    - text: Clicktech Retail Private Ltd
                - listitem [ref=f4e2752]:
                  - button "See more, Seller" [ref=f4e2755] [cursor=pointer]: See more
            - group [ref=f4e2757]:
              - heading "Item Condition" [level=2] [ref=f4e2758]
              - list "Item Condition" [ref=f4e2759]:
                - listitem "Popular Shopping Ideas" [ref=f4e2760]:
                  - link "Apply the filter New to narrow results" [ref=f4e2762] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_condition-type%3A8609960031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=8609959031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_condition-type_1&ds=v1%3A0zPLO5ISZrmRyGrkj1gy1Mmm3%2FAsRG4PQRESA4dOgOQ
                    - checkbox [aria-hidden] [ref=f4e2765]
                    - text: New
            - group [ref=f4e2767]:
              - heading "Availability" [level=2] [ref=f4e2768]
              - list "Availability" [ref=f4e2769]:
                - listitem "Popular Shopping Ideas" [ref=f4e2770]:
                  - link "Apply the filter Include Out of Stock to narrow results" [ref=f4e2772] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_availability%3A1318485031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318483031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_availability_2&ds=v1%3Ay9oyFmo4a6NcOLO2nPr0J9ZmHeXr29XS9DD%2FnD4ojLk
                    - checkbox [aria-hidden] [ref=f4e2775]
                    - text: Include Out of Stock
            - group [ref=f4e2777]:
              - heading "New Arrivals" [level=2] [ref=f4e2778]
              - list "New Arrivals" [ref=f4e2779]:
                - listitem [ref=f4e2780]:
                  - link "Last 30 days" [ref=f4e2782] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_date_first_available_absolute%3A1318487031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318486031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_date_first_available_absolute_1&ds=v1%3ALsk8sDCGsRnEqutJU8IPP3iWNPbA3HXiL35Msn3j2vo
                - listitem [ref=f4e2783]:
                  - link "Last 90 days" [ref=f4e2785] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_date_first_available_absolute%3A1318488031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1318486031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_date_first_available_absolute_2&ds=v1%3A6z28opltNsxS4S4%2BSJyJ%2BIbfGeF3LRnVINn1%2FnPAobE
            - group [ref=f4e2786]:
              - heading "Supported Satellite Navigation System" [level=2] [ref=f4e2787]
              - list "Supported Satellite Navigation System" [ref=f4e2788]:
                - listitem "Popular Shopping Ideas" [ref=f4e2789]:
                  - link "Apply the filter GPS to narrow results" [ref=f4e2791] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498432111%3A100424905031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100424895031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498432111_1&ds=v1%3AL%2F2z7ZZQzOuNZGT8Ix3kh1sXr5OaOGJAw4CJGSMH5l8
                    - checkbox [aria-hidden] [ref=f4e2794]
                    - text: GPS
                - listitem "Popular Shopping Ideas" [ref=f4e2796]:
                  - link "Apply the filter GLONASS to narrow results" [ref=f4e2798] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498432111%3A100424903031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100424895031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498432111_2&ds=v1%3AmejhsVx3Eu758MaghFqlRK5PY%2B8QEheIfM6xVlurkYI
                    - checkbox [aria-hidden] [ref=f4e2801]
                    - text: GLONASS
                - listitem "Popular Shopping Ideas" [ref=f4e2803]:
                  - link "Apply the filter Galileo to narrow results" [ref=f4e2805] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498432111%3A100424904031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100424895031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498432111_3&ds=v1%3A7n9UXczKlOI1PDorOcNJ%2FLAYtJ5MvpaAuzk2ui0rZ04
                    - checkbox [aria-hidden] [ref=f4e2808]
                    - text: Galileo
                - listitem "Popular Shopping Ideas" [ref=f4e2810]:
                  - link "Apply the filter BeiDou to narrow results" [ref=f4e2812] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498432111%3A100424900031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100424895031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498432111_4&ds=v1%3APOvdRAayzIniwRW0fwPLiYwkNW%2FQib3cqwMyre49s00
                    - checkbox [aria-hidden] [ref=f4e2815]
                    - text: BeiDou
            - group [ref=f4e2817]:
              - heading "Market Version" [level=2] [ref=f4e2818]
              - list "Market Version" [ref=f4e2819]:
                - listitem "Popular Shopping Ideas" [ref=f4e2820]:
                  - link "Apply the filter Indian Version to narrow results" [ref=f4e2822] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101018080644111%3A222422521031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=222422518031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101018080644111_1&ds=v1%3Ap43ri0o56xtLjPcBYkBlIYiq1N8XhMflhieSvb5rLLU
                    - checkbox [aria-hidden] [ref=f4e2825]
                    - text: Indian Version
            - group [ref=f4e2827]:
              - heading "Aspect Ratio" [level=2] [ref=f4e2828]
              - list "Aspect Ratio" [ref=f4e2829]:
                - listitem "Popular Shopping Ideas" [ref=f4e2830]:
                  - link "Apply the filter 16:9 to narrow results" [ref=f4e2832] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015688486111%3A204879948031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=204879945031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015688486111_1&ds=v1%3AgYva7VBaV%2FyuKvGBK8CLJryeHS9EjCM8JiFXpvC0GDY
                    - checkbox [aria-hidden] [ref=f4e2835]
                    - text: 16:9
            - group [ref=f4e2837]:
              - heading "Jack Type" [level=2] [ref=f4e2838]
              - list "Jack Type" [ref=f4e2839]:
                - listitem "Popular Shopping Ideas" [ref=f4e2840]:
                  - link "Apply the filter 3.5 mm to narrow results" [ref=f4e2842] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015501406111%3A100427563031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100427546031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015501406111_1&ds=v1%3A9mjLLOpzz1f03%2B58dOyXXBOOUHc9Y8HxAg5Nd3gtl5w
                    - checkbox [aria-hidden] [ref=f4e2845]
                    - text: 3.5 mm
            - group [ref=f4e2847]:
              - heading "GPS Navigation" [level=2] [ref=f4e2848]
              - list "GPS Navigation" [ref=f4e2849]:
                - listitem "Popular Shopping Ideas" [ref=f4e2850]:
                  - link "Apply the filter False to narrow results" [ref=f4e2852] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015364874111%3A96329644031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=96329629031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015364874111_1&ds=v1%3AK9jDEGkCMj3vC4InPfyeYKuVk%2FX4%2FVtmk%2FEgfyiruFo
                    - checkbox [aria-hidden] [ref=f4e2855]
                    - text: "False"
                - listitem "Popular Shopping Ideas" [ref=f4e2857]:
                  - link "Apply the filter True to narrow results" [ref=f4e2859] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015364874111%3A96329643031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=96329629031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015364874111_2&ds=v1%3AJsJuu6eSqaqzACBPMQpyX1tEWFkA2GZjhO7rAUuIsxw
                    - checkbox [aria-hidden] [ref=f4e2862]
                    - text: "True"
            - group [ref=f4e2864]:
              - heading "Wireless Network Technology" [level=2] [ref=f4e2865]
              - list "Wireless Network Technology" [ref=f4e2866]:
                - listitem "Popular Shopping Ideas" [ref=f4e2867]:
                  - link "Apply the filter LTE to narrow results" [ref=f4e2869] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498571111%3A100436153031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100436133031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498571111_1&ds=v1%3A2TOUGQHjKHOCT9viWTNjQm5wgDiwHp9zIRIIubxwZvM
                    - checkbox [aria-hidden] [ref=f4e2872]
                    - text: LTE
                - listitem "Popular Shopping Ideas" [ref=f4e2874]:
                  - link "Apply the filter GSM to narrow results" [ref=f4e2876] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498571111%3A100436155031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100436133031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498571111_2&ds=v1%3ABZS0c1OXzqZIV95wu1sL24qNcPIPeDmUihGKixQpxAw
                    - checkbox [aria-hidden] [ref=f4e2879]
                    - text: GSM
                - listitem "Popular Shopping Ideas" [ref=f4e2881]:
                  - link "Apply the filter Wi-Fi to narrow results" [ref=f4e2883] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498571111%3A100436151031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100436133031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498571111_3&ds=v1%3AOo3SQc5tWaBx9KGq7DqhW41m%2BNJxx2Iq%2FC3paCqNf18
                    - checkbox [aria-hidden] [ref=f4e2886]
                    - text: Wi-Fi
                - listitem "Popular Shopping Ideas" [ref=f4e2888]:
                  - link "Apply the filter CDMA to narrow results" [ref=f4e2890] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498571111%3A100436160031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100436133031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498571111_4&ds=v1%3A2%2Bd48rdAxW9vS0Q3LRwRzQzZDVcihXVj02bs%2FbY4LgI
                    - checkbox [aria-hidden] [ref=f4e2893]
                    - text: CDMA
                - listitem "Popular Shopping Ideas" [ref=f4e2895]:
                  - link "Apply the filter UMTS to narrow results" [ref=f4e2897] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498571111%3A100436157031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100436133031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498571111_5&ds=v1%3Ae%2FnTcGGrknkAVHlJBINE8hhsXzvxD4c8I%2Fc77kHaPuo
                    - checkbox [aria-hidden] [ref=f4e2900]
                    - text: UMTS
                - listitem "Popular Shopping Ideas" [ref=f4e2902]:
                  - link "Apply the filter Bluetooth to narrow results" [ref=f4e2904] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498571111%3A207962825031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100436133031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498571111_6&ds=v1%3Anu%2BVq1Q8YjFMqMIeHa1cY77rx2iXEGi4GmhkseY%2BWPo
                    - checkbox [aria-hidden] [ref=f4e2907]
                    - text: Bluetooth
                - listitem "Popular Shopping Ideas" [ref=f4e2909]:
                  - link "Apply the filter NFC to narrow results" [ref=f4e2911] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015498571111%3A207962824031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100436133031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015498571111_7&ds=v1%3ArS17D39Cqr%2Fid89PoFzaWzy6YNlSYM29QqoOElKbxxU
                    - checkbox [aria-hidden] [ref=f4e2914]
                    - text: NFC
            - group [ref=f4e2916]:
              - heading "Rear Camera Photo Sensor Resolution" [level=2] [ref=f4e2917]
              - list "Rear Camera Photo Sensor Resolution" [ref=f4e2918]:
                - listitem "Popular Shopping Ideas" [ref=f4e2919]:
                  - link "Apply the filter Up to 9.9 MP to narrow results" [ref=f4e2921] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003477899111%3A42253779031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42253749031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003477899111_1&ds=v1%3Az0H5f8SuzVTR8rTNl%2Bs1hZj5YMWUMPe88GPRBuE3SFc
                    - checkbox [aria-hidden] [ref=f4e2924]
                    - text: Up to 9.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e2926]:
                  - link "Apply the filter 10 to 12.9 MP to narrow results" [ref=f4e2928] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003477899111%3A42253777031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42253749031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003477899111_2&ds=v1%3AgsV6TXv3cJQADcXLV0%2FFXvfyuHmy7cLWcMIOC5%2FhrHs
                    - checkbox [aria-hidden] [ref=f4e2931]
                    - text: 10 to 12.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e2933]:
                  - link "Apply the filter 13 to 15.9 MP to narrow results" [ref=f4e2935] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003477899111%3A42253776031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42253749031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003477899111_3&ds=v1%3AppGFipAfY3fyhJOONP6ebS7NIKfKJMFb34Q7GwATu48
                    - checkbox [aria-hidden] [ref=f4e2938]
                    - text: 13 to 15.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e2940]:
                  - link "Apply the filter 16 MP & Above to narrow results" [ref=f4e2942] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003477899111%3A42253778031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42253749031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003477899111_4&ds=v1%3AOW%2FP44N9bZFd9TainogAS7%2F2W4FihY9ZYFSbZjxowtw
                    - checkbox [aria-hidden] [ref=f4e2945]
                    - text: 16 MP & Above
            - group [ref=f4e2947]:
              - heading "Purpose" [level=2] [ref=f4e2948]
              - list "Purpose" [ref=f4e2949]:
                - listitem "Popular Shopping Ideas" [ref=f4e2950]:
                  - link "Apply the filter Photography to narrow results" [ref=f4e2952] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101016756045111%3A207854437031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=207854435031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101016756045111_1&ds=v1%3AQzFGuDh4maoju%2B6tHpQxmwNhGzuTycz%2BtnBOTIGEuPM
                    - checkbox [aria-hidden] [ref=f4e2955]
                    - text: Photography
                - listitem "Popular Shopping Ideas" [ref=f4e2957]:
                  - link "Apply the filter Gaming to narrow results" [ref=f4e2959] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101016756045111%3A207854436031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=207854435031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101016756045111_2&ds=v1%3AcZ1ZJ1o6HdJ8Zl5Kq%2BOE50C4Wo9bMIYahh6GAE7wb8E
                    - checkbox [aria-hidden] [ref=f4e2962]
                    - text: Gaming
                - listitem "Popular Shopping Ideas" [ref=f4e2964]:
                  - link "Apply the filter Streaming to narrow results" [ref=f4e2966] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101016756045111%3A207854438031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=207854435031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101016756045111_3&ds=v1%3A2U6GuLBdRpeJ7jq0d4Dk3zHBD6%2B2DqWrYJDBuUs1kKk
                    - checkbox [aria-hidden] [ref=f4e2969]
                    - text: Streaming
                - listitem "Popular Shopping Ideas" [ref=f4e2971]:
                  - link "Apply the filter Video Conferencing to narrow results" [ref=f4e2973] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101016756045111%3A207854439031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=207854435031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101016756045111_4&ds=v1%3A%2BBiQejmwHQWiM36RtH61J9eGHNK1mVETh5UXLXZNtvo
                    - checkbox [aria-hidden] [ref=f4e2976]
                    - text: Video Conferencing
            - group [ref=f4e2978]:
              - heading "Connectivity" [level=2] [ref=f4e2979]
              - list "Connectivity" [ref=f4e2980]:
                - listitem "Popular Shopping Ideas" [ref=f4e2981]:
                  - link "Apply the filter Bluetooth to narrow results" [ref=f4e2983] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002112230111%3A27363277031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27363274031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002112230111_1&ds=v1%3AGFTnBJaa5NM0YeMPNHYuHWPCaO5jqOdx%2FkHlv9IKq%2Bk
                    - checkbox [aria-hidden] [ref=f4e2986]
                    - text: Bluetooth
                - listitem "Popular Shopping Ideas" [ref=f4e2988]:
                  - link "Apply the filter Infrared to narrow results" [ref=f4e2990] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002112230111%3A27363275031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27363274031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002112230111_2&ds=v1%3Aaz2gnAdP3Bh4%2FWDD5spNaulaBpvjAOAIgMak1uRHaOo
                    - checkbox [aria-hidden] [ref=f4e2993]
                    - text: Infrared
                - listitem "Popular Shopping Ideas" [ref=f4e2995]:
                  - link "Apply the filter NFC to narrow results" [ref=f4e2997] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002112230111%3A27363279031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27363274031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002112230111_3&ds=v1%3AYBVkG4WhYKdwERxu%2FWleJGDJg474rOHof2YGnSptVP8
                    - checkbox [aria-hidden] [ref=f4e3000]
                    - text: NFC
                - listitem "Popular Shopping Ideas" [ref=f4e3002]:
                  - link "Apply the filter USB to narrow results" [ref=f4e3004] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002112230111%3A27363276031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27363274031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002112230111_4&ds=v1%3ASn3aPz1HETWbeyOg9aWTH%2FkZuRc3fCnGs%2F8klU6jVCI
                    - checkbox [aria-hidden] [ref=f4e3007]
                    - text: USB
                - listitem "Popular Shopping Ideas" [ref=f4e3009]:
                  - link "Apply the filter Wi-Fi to narrow results" [ref=f4e3011] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002112230111%3A27363278031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27363274031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002112230111_5&ds=v1%3AxMIEtbCev8kDcR3%2ByvQuqkfLi8nUl6I7%2FykumlDvvuM
                    - checkbox [aria-hidden] [ref=f4e3014]
                    - text: Wi-Fi
            - group [ref=f4e3016]:
              - heading "SIM Card Slot Count" [level=2] [ref=f4e3017]
              - list "SIM Card Slot Count" [ref=f4e3018]:
                - listitem "Popular Shopping Ideas" [ref=f4e3019]:
                  - link "Apply the filter Single SIM to narrow results" [ref=f4e3021] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002989427111%3A27179458031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27179439031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002989427111_1&ds=v1%3A23ZzWosOEQtbHzHLIZhj7JLBKxFjnHGBWNZILI6qTYo
                    - checkbox [aria-hidden] [ref=f4e3024]
                    - text: Single SIM
                - listitem "Popular Shopping Ideas" [ref=f4e3026]:
                  - link "Apply the filter Dual SIM to narrow results" [ref=f4e3028] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002989427111%3A27179459031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27179439031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002989427111_2&ds=v1%3AR%2F%2FBO%2B7zdtJtA1FAiJGbQ8xpy45rWQ9UsBQDtYxwrVo
                    - checkbox [aria-hidden] [ref=f4e3031]
                    - text: Dual SIM
            - group [ref=f4e3033]:
              - heading "RAM Size" [level=2] [ref=f4e3034]
              - list "RAM Size" [ref=f4e3035]:
                - listitem "Popular Shopping Ideas" [ref=f4e3036]:
                  - link "Apply the filter Up to 1.9 GB to narrow results" [ref=f4e3038] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003495121111%3A44897294031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44897277031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003495121111_1&ds=v1%3AHrrTTFN4PWCoBU6A7bLg0YiFIOZBR%2BYniTr5DlBXGVs
                    - checkbox [aria-hidden] [ref=f4e3041]
                    - text: Up to 1.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3043]:
                  - link "Apply the filter 2 to 3.9 GB to narrow results" [ref=f4e3045] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003495121111%3A44897290031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44897277031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003495121111_2&ds=v1%3Aj9ZerJWVSQHdeG4XTwMEd4T03ua2P8Wq4CaDaxPmplo
                    - checkbox [aria-hidden] [ref=f4e3048]
                    - text: 2 to 3.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3050]:
                  - link "Apply the filter 4 to 5.9 GB to narrow results" [ref=f4e3052] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003495121111%3A44897296031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44897277031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003495121111_3&ds=v1%3AHndGo6kR3LwnCGU5qoFMq68oNq3%2BdDJ9T%2FNiA0oH9Bg
                    - checkbox [aria-hidden] [ref=f4e3055]
                    - text: 4 to 5.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3057]:
                  - link "Apply the filter 6 to 7.9 GB to narrow results" [ref=f4e3059] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003495121111%3A44897287031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44897277031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003495121111_4&ds=v1%3AxHOjv8QDneqjINj2NyryrtsdCN9gfBxQivoGo9KYaMo
                    - checkbox [aria-hidden] [ref=f4e3062]
                    - text: 6 to 7.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3064]:
                  - link "Apply the filter 8 to 9.9 GB to narrow results" [ref=f4e3066] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003495121111%3A44897288031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44897277031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003495121111_5&ds=v1%3A1gcbsVv1WxtEt%2FXQ9989nCVAgtcILuUmWL1nCjYPRAs
                    - checkbox [aria-hidden] [ref=f4e3069]
                    - text: 8 to 9.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3071]:
                  - link "Apply the filter 10 GB & Above to narrow results" [ref=f4e3073] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003495121111%3A44897292031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44897277031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003495121111_6&ds=v1%3Ag9neyhicOAPOSKpNWIyn2jhNu4Zu%2FfCvmmSZDo10aUQ
                    - checkbox [aria-hidden] [ref=f4e3076]
                    - text: 10 GB & Above
            - group [ref=f4e3078]:
              - heading "Front Camera Resolution" [level=2] [ref=f4e3079]
              - list "Front Camera Resolution" [ref=f4e3080]:
                - listitem "Popular Shopping Ideas" [ref=f4e3081]:
                  - link "Apply the filter Up to 6.9 MP to narrow results" [ref=f4e3083] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003565058111%3A61505203031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=61505195031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003565058111_1&ds=v1%3A71pukyEVen4n7mxboeOIFBtaAbwuySH3IY3SwzQouRM
                    - checkbox [aria-hidden] [ref=f4e3086]
                    - text: Up to 6.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3088]:
                  - link "Apply the filter 7.0 to 9.9 MP to narrow results" [ref=f4e3090] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003565058111%3A61505201031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=61505195031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003565058111_2&ds=v1%3A4lxBc6amNXzQWaiEopCYdfeygFtPREwwMX0DBnjTY6Y
                    - checkbox [aria-hidden] [ref=f4e3093]
                    - text: 7.0 to 9.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3095]:
                  - link "Apply the filter 10.0 to 12.9 MP to narrow results" [ref=f4e3097] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003565058111%3A61505199031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=61505195031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003565058111_3&ds=v1%3ACHCsmGA9%2FWfN%2FdR4%2FTbK3jr8P%2FTINFz1sh0rbx3Yl5c
                    - checkbox [aria-hidden] [ref=f4e3100]
                    - text: 10.0 to 12.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3102]:
                  - link "Apply the filter 13.0 MP & above to narrow results" [ref=f4e3104] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003565058111%3A61505197031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=61505195031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003565058111_4&ds=v1%3AvYEZB14RvFFyubIFi3ogSyFfX%2F9E7Vhnu6PQtWCb%2F7I
                    - checkbox [aria-hidden] [ref=f4e3107]
                    - text: 13.0 MP & above
            - group [ref=f4e3109]:
              - heading "Included Components" [level=2] [ref=f4e3110]
              - list "Included Components" [ref=f4e3111]:
                - listitem "Popular Shopping Ideas" [ref=f4e3112]:
                  - link "Apply the filter USB Cable to narrow results" [ref=f4e3114] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013594324111%3A66008618031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66008593031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013594324111_1&ds=v1%3AQXejgIl8ORPF9J3GJpLlCoo2RDXrjPrvSTHzcgtSDuQ
                    - checkbox [aria-hidden] [ref=f4e3117]
                    - text: USB Cable
                - listitem "Popular Shopping Ideas" [ref=f4e3119]:
                  - link "Apply the filter SIM Tray Ejector to narrow results" [ref=f4e3121] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013594324111%3A66008617031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66008593031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013594324111_2&ds=v1%3AB6sAuVxGSLTWUCdLOWikog2HOUMNm%2FIE9kC9a8YXupU
                    - checkbox [aria-hidden] [ref=f4e3124]
                    - text: SIM Tray Ejector
                - listitem "Popular Shopping Ideas" [ref=f4e3126]:
                  - link "Apply the filter Power Adapter to narrow results" [ref=f4e3128] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013594324111%3A66008624031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66008593031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013594324111_3&ds=v1%3AMWrCmGQ9XTtI2SkZmsWydVgniEq87w4hFHY1OhMNFtA
                    - checkbox [aria-hidden] [ref=f4e3131]
                    - text: Power Adapter
                - listitem "Popular Shopping Ideas" [ref=f4e3133]:
                  - link "Apply the filter Phone Case to narrow results" [ref=f4e3135] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013594324111%3A66008623031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66008593031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013594324111_4&ds=v1%3AJU3smaQkbyFUcIXLGE3CypfnAyXCbE8r0WrtWZ0Rivo
                    - checkbox [aria-hidden] [ref=f4e3138]
                    - text: Phone Case
                - listitem "Popular Shopping Ideas" [ref=f4e3140]:
                  - link "Apply the filter Headset to narrow results" [ref=f4e3142] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013594324111%3A66008621031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66008593031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013594324111_5&ds=v1%3AmJ8tV7K%2FWqD29P5HWYCV4jITqFNvfBuTu8BF1Umt%2Bqs
                    - checkbox [aria-hidden] [ref=f4e3145]
                    - text: Headset
                - listitem "Popular Shopping Ideas" [ref=f4e3147]:
                  - link "Apply the filter Quick Start Guide to narrow results" [ref=f4e3149] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013594324111%3A213480632031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66008593031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013594324111_6&ds=v1%3ARo86DhBX%2B%2F%2Fv5LB%2FrU9b%2FnEdF4WgTfgoffN5Z%2FgVugY
                    - checkbox [aria-hidden] [ref=f4e3152]
                    - text: Quick Start Guide
                - listitem "Popular Shopping Ideas" [ref=f4e3154]:
                  - link "Apply the filter Screen Protector to narrow results" [ref=f4e3156] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013594324111%3A66008622031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66008593031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013594324111_7&ds=v1%3AqdOgKKPi%2BF3APgbPzUd1EAIvsqY99bfvG4f4NUmU9x8
                    - checkbox [aria-hidden] [ref=f4e3159]
                    - text: Screen Protector
                - listitem [ref=f4e3161]:
                  - button "See more, Included Components" [ref=f4e3164] [cursor=pointer]: See more
            - group [ref=f4e3166]:
              - heading "Display Refresh Rate in Hertz" [level=2] [ref=f4e3167]
              - list "Display Refresh Rate in Hertz" [ref=f4e3168]:
                - listitem "Popular Shopping Ideas" [ref=f4e3169]:
                  - link "Apply the filter 60 to narrow results" [ref=f4e3171] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017397158111%3A214852065031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214852064031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017397158111_1&ds=v1%3AvqUAY0cxbocIsoTvSgOxaQEtEhxyFFprVPeQeabJ6oU
                    - checkbox [aria-hidden] [ref=f4e3174]
                    - text: "60"
                - listitem "Popular Shopping Ideas" [ref=f4e3176]:
                  - link "Apply the filter 90 to narrow results" [ref=f4e3178] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017397158111%3A214852066031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214852064031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017397158111_2&ds=v1%3A49tasnmFVSpLkqv6pCtovtz1Tvkhxom5jwdxyWHMeRU
                    - checkbox [aria-hidden] [ref=f4e3181]
                    - text: "90"
                - listitem "Popular Shopping Ideas" [ref=f4e3183]:
                  - link "Apply the filter 120 to narrow results" [ref=f4e3185] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017397158111%3A214852071031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214852064031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017397158111_3&ds=v1%3Atcz27bdbFIYZQd4PKpd1Ufh3DDVA8EoGYAWbPkDV%2BeU
                    - checkbox [aria-hidden] [ref=f4e3188]
                    - text: "120"
                - listitem "Popular Shopping Ideas" [ref=f4e3190]:
                  - link "Apply the filter 144 to narrow results" [ref=f4e3192] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017397158111%3A214852068031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214852064031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017397158111_4&ds=v1%3A1IiH%2F18jJBjxtghg%2BQAaGHhZSJpNS%2FZNj0xGxbpV4wM
                    - checkbox [aria-hidden] [ref=f4e3195]
                    - text: "144"
                - listitem "Popular Shopping Ideas" [ref=f4e3197]:
                  - link "Apply the filter 165 to narrow results" [ref=f4e3199] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017397158111%3A214852076031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214852064031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017397158111_5&ds=v1%3AXYnTwRU7CJHRpWQEI9xsZlAQq%2BDnqp%2B8ogwWY9DFv0k
                    - checkbox [aria-hidden] [ref=f4e3202]
                    - text: "165"
            - group [ref=f4e3204]:
              - heading "Connector Type" [level=2] [ref=f4e3205]
              - list "Connector Type" [ref=f4e3206]:
                - listitem "Popular Shopping Ideas" [ref=f4e3207]:
                  - link "Apply the filter 3.5mm Jack to narrow results" [ref=f4e3209] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002085485111%3A27403492031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27403487031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002085485111_1&ds=v1%3AKQZTphUrIVfqrQs3x%2Bakw1ANvxEKjRUZfyK14Jqi0Wo
                    - checkbox [aria-hidden] [ref=f4e3212]
                    - text: 3.5mm Jack
                - listitem "Popular Shopping Ideas" [ref=f4e3214]:
                  - link "Apply the filter Micro USB to narrow results" [ref=f4e3216] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002085485111%3A27403488031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27403487031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002085485111_2&ds=v1%3A1wXr9LN85%2BbTXS3%2BvWBCqwdBQ7J5l3cAm46JO8FWToM
                    - checkbox [aria-hidden] [ref=f4e3219]
                    - text: Micro USB
                - listitem "Popular Shopping Ideas" [ref=f4e3221]:
                  - link "Apply the filter USB Type C to narrow results" [ref=f4e3223] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002085485111%3A27403491031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27403487031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002085485111_3&ds=v1%3A2WgH9uvDasfpb%2FPXS46q1FGatxM7AzYm1CkJtjri7Xg
                    - checkbox [aria-hidden] [ref=f4e3226]
                    - text: USB Type C
            - group [ref=f4e3228]:
              - heading "Battery Capacity" [level=2] [ref=f4e3229]
              - list "Battery Capacity" [ref=f4e3230]:
                - listitem "Popular Shopping Ideas" [ref=f4e3231]:
                  - link "Apply the filter Up to 2,999 mAh to narrow results" [ref=f4e3233] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015098008111%3A91805328031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91805324031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015098008111_1&ds=v1%3A9OwHl98qYOVB3fpgZkURm3OMIYPKsMxmE54ylNsmzFQ
                    - checkbox [aria-hidden] [ref=f4e3236]
                    - text: Up to 2,999 mAh
                - listitem "Popular Shopping Ideas" [ref=f4e3238]:
                  - link "Apply the filter 3,000 to 3,999 mAh to narrow results" [ref=f4e3240] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015098008111%3A91805327031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91805324031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015098008111_2&ds=v1%3AvRXqL0xScxdAZL%2FBr4y6bPNfLu6NwKa972EQd3dWv60
                    - checkbox [aria-hidden] [ref=f4e3243]
                    - text: 3,000 to 3,999 mAh
                - listitem "Popular Shopping Ideas" [ref=f4e3245]:
                  - link "Apply the filter 4,000 to 4,999 mAh to narrow results" [ref=f4e3247] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015098008111%3A91805325031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91805324031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015098008111_3&ds=v1%3Ae6Tj%2FVCFbBj1H0hJ%2B7yzYqVDld9J87lusL2kWeYVWIw
                    - checkbox [aria-hidden] [ref=f4e3250]
                    - text: 4,000 to 4,999 mAh
                - listitem "Popular Shopping Ideas" [ref=f4e3252]:
                  - link "Apply the filter 5,000 to 5,999 mAh to narrow results" [ref=f4e3254] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015098008111%3A91805326031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91805324031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015098008111_4&ds=v1%3Az%2Blyw%2Fzj62rZmf4AwK9FtF2gDm65EZiqZfw5Cj8r1Ng
                    - checkbox [aria-hidden] [ref=f4e3257]
                    - text: 5,000 to 5,999 mAh
                - listitem "Popular Shopping Ideas" [ref=f4e3259]:
                  - link "Apply the filter 6,000 mAh & Above to narrow results" [ref=f4e3261] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015098008111%3A92071917031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=91805324031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015098008111_5&ds=v1%3A3GVcPfpHotilchEHeCfnEnPlcDQfMVT6ufYXzldbP2s
                    - checkbox [aria-hidden] [ref=f4e3264]
                    - text: 6,000 mAh & Above
            - group [ref=f4e3266]:
              - heading "Weight" [level=2] [ref=f4e3267]
              - list "Weight" [ref=f4e3268]:
                - listitem "Popular Shopping Ideas" [ref=f4e3269]:
                  - link "Apply the filter Up to 141.9 g to narrow results" [ref=f4e3271] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003491669111%3A42659590031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42659587031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003491669111_1&ds=v1%3AbG4oXjYgxna9YbaXJHhlC9Eg21BPqTNZKHRcKTy1Mr4
                    - checkbox [aria-hidden] [ref=f4e3274]
                    - text: Up to 141.9 g
                - listitem "Popular Shopping Ideas" [ref=f4e3276]:
                  - link "Apply the filter 142 to 197.9 g to narrow results" [ref=f4e3278] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003491669111%3A42659588031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42659587031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003491669111_2&ds=v1%3AeAQkbDL1pPln57O1jjpagDePXFEzOV6c9RzkXwezq0o
                    - checkbox [aria-hidden] [ref=f4e3281]
                    - text: 142 to 197.9 g
                - listitem "Popular Shopping Ideas" [ref=f4e3283]:
                  - link "Apply the filter 198 to 254.9 g to narrow results" [ref=f4e3285] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003491669111%3A42659589031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42659587031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003491669111_3&ds=v1%3A%2BEmx8rcx6uKfmTfTG49z3LMMG7sDaW6owtnmVgTJ%2FE0
                    - checkbox [aria-hidden] [ref=f4e3288]
                    - text: 198 to 254.9 g
                - listitem "Popular Shopping Ideas" [ref=f4e3290]:
                  - link "Apply the filter 255 g & Above to narrow results" [ref=f4e3292] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003491669111%3A42659591031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42659587031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003491669111_4&ds=v1%3AFBsoNhiLtPh2ayuJaJ7z%2B4jXSwqZPiMRzjQLTNuNZ%2FI
                    - checkbox [aria-hidden] [ref=f4e3295]
                    - text: 255 g & Above
            - group [ref=f4e3297]:
              - heading "Screen Size" [level=2] [ref=f4e3298]
              - list "Screen Size" [ref=f4e3299]:
                - listitem "Popular Shopping Ideas" [ref=f4e3300]:
                  - link "Apply the filter Up to 12.9 cm to narrow results" [ref=f4e3302] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_browse-bin%3A212266965031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=212266959031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_browse-bin_1&ds=v1%3AN2OkV9xBhu8yk0Hs5P%2B%2FnasCLisGSRCQk0fm9CqxRQ8
                    - checkbox [aria-hidden] [ref=f4e3305]
                    - text: Up to 12.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3307]:
                  - link "Apply the filter 15 to 17.9 cm to narrow results" [ref=f4e3309] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_browse-bin%3A212266964031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=212266959031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_browse-bin_2&ds=v1%3AVMctDU2UiHNrj6GcBPVhgarB5FoL0lIk%2B9vKRZIJguQ
                    - checkbox [aria-hidden] [ref=f4e3312]
                    - text: 15 to 17.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3314]:
                  - link "Apply the filter 18 cm & above to narrow results" [ref=f4e3316] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_browse-bin%3A212266967031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=212266959031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_browse-bin_3&ds=v1%3ACTR50RJnFgUo40CtLz%2FNUlUcjFPzlnaXSQaPiFIhxkc
                    - checkbox [aria-hidden] [ref=f4e3319]
                    - text: 18 cm & above
            - group [ref=f4e3321]:
              - heading "Security Feature" [level=2] [ref=f4e3322]
              - list "Security Feature" [ref=f4e3323]:
                - listitem "Popular Shopping Ideas" [ref=f4e3324]:
                  - link "Apply the filter Fingerprint Recognition to narrow results" [ref=f4e3326] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002085472111%3A27355812031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27355796031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002085472111_1&ds=v1%3A9JYLFqCd2tp05i06S0y4Tgnvs8Lu4qjBl07lzpGNkwI
                    - checkbox [aria-hidden] [ref=f4e3329]
                    - text: Fingerprint Recognition
                - listitem "Popular Shopping Ideas" [ref=f4e3331]:
                  - link "Apply the filter Face Recognition to narrow results" [ref=f4e3333] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002085472111%3A27355807031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27355796031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002085472111_2&ds=v1%3ARnNb%2BHtpMvY5baq7xlTXy6OvujxNs01PKiQku0WLvzw
                    - checkbox [aria-hidden] [ref=f4e3336]
                    - text: Face Recognition
            - group [ref=f4e3338]:
              - heading "Battery Life" [level=2] [ref=f4e3339]
              - list "Battery Life" [ref=f4e3340]:
                - listitem "Popular Shopping Ideas" [ref=f4e3341]:
                  - link "Apply the filter Up to 6.9 h to narrow results" [ref=f4e3343] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003486052111%3A42062133031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42062008031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003486052111_1&ds=v1%3AYK68f2o7cf3OmlphMN8nSSI1F3C0O5TBdI9sj68NL0k
                    - checkbox [aria-hidden] [ref=f4e3346]
                    - text: Up to 6.9 h
                - listitem "Popular Shopping Ideas" [ref=f4e3348]:
                  - link "Apply the filter 7 to 12.9 h to narrow results" [ref=f4e3350] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003486052111%3A42062131031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42062008031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003486052111_2&ds=v1%3A6ND6nCpVrIg1UHAtDw5wuv93ytnw%2FPo7KXgt1kCBfK4
                    - checkbox [aria-hidden] [ref=f4e3353]
                    - text: 7 to 12.9 h
                - listitem "Popular Shopping Ideas" [ref=f4e3355]:
                  - link "Apply the filter 13 to 18.9 h to narrow results" [ref=f4e3357] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003486052111%3A42062132031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42062008031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003486052111_3&ds=v1%3ArYxF5%2BtDvXqMWg0aX9td6OYrcaWyZG6%2FTpCHbYs0aJo
                    - checkbox [aria-hidden] [ref=f4e3360]
                    - text: 13 to 18.9 h
                - listitem "Popular Shopping Ideas" [ref=f4e3362]:
                  - link "Apply the filter 19 h & above to narrow results" [ref=f4e3364] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003486052111%3A42062130031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=42062008031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003486052111_4&ds=v1%3Agr%2BP4BIXoWpEcg8Thcv8RzQZUtT98ybCdaf2ncuI8aA
                    - checkbox [aria-hidden] [ref=f4e3367]
                    - text: 19 h & above
            - group [ref=f4e3369]:
              - heading "Display Type" [level=2] [ref=f4e3370]
              - list "Display Type" [ref=f4e3371]:
                - listitem "Popular Shopping Ideas" [ref=f4e3372]:
                  - link "Apply the filter AMOLED to narrow results" [ref=f4e3374] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013595158111%3A66009619031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66009617031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013595158111_1&ds=v1%3AmY9K4Oz9WhhsWIQ54hronLcwF7K2BjH1de3NkImqoFI
                    - checkbox [aria-hidden] [ref=f4e3377]
                    - text: AMOLED
                - listitem "Popular Shopping Ideas" [ref=f4e3379]:
                  - link "Apply the filter LCD to narrow results" [ref=f4e3381] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013595158111%3A66009618031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66009617031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013595158111_2&ds=v1%3AjQPkukTEPu6hfw24JF0jbnt%2F6POdENzRSSNBKYELOR0
                    - checkbox [aria-hidden] [ref=f4e3384]
                    - text: LCD
                - listitem "Popular Shopping Ideas" [ref=f4e3386]:
                  - link "Apply the filter OLED to narrow results" [ref=f4e3388] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013595158111%3A66009620031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66009617031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013595158111_3&ds=v1%3ABtF4%2BmTuFSvOC13CZB7q82xZxNugtHzf%2FGy3GmleHRA
                    - checkbox [aria-hidden] [ref=f4e3391]
                    - text: OLED
                - listitem "Popular Shopping Ideas" [ref=f4e3393]:
                  - link "Apply the filter TFT to narrow results" [ref=f4e3395] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101013595158111%3A224356213031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=66009617031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101013595158111_4&ds=v1%3ApOsSQ4mYVz0Iq78xB8%2BxjRjuFkgh2oZIyfO%2FffHNI7Y
                    - checkbox [aria-hidden] [ref=f4e3398]
                    - text: TFT
            - group [ref=f4e3400]:
              - heading "Camera Resolution" [level=2] [ref=f4e3401]
              - list "Camera Resolution" [ref=f4e3402]:
                - listitem "Popular Shopping Ideas" [ref=f4e3403]:
                  - link "Apply the filter Up to 2.9 MP to narrow results" [ref=f4e3405] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1004151207091%3A1898703031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1898694031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1004151207091_1&ds=v1%3AsTSOgnp1Yhq%2FGP83EA60VeJBvTACAnJ06QfFImCevS0
                    - checkbox [aria-hidden] [ref=f4e3408]
                    - text: Up to 2.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3410]:
                  - link "Apply the filter 5 to 7.9 MP to narrow results" [ref=f4e3412] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1004151207091%3A1898705031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1898694031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1004151207091_2&ds=v1%3AngZ0J6b3Pz4uJy8vNYwzHy270Ey0GABC9Vk1LRJGghE
                    - checkbox [aria-hidden] [ref=f4e3415]
                    - text: 5 to 7.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3417]:
                  - link "Apply the filter 8 to 12.9 MP to narrow results" [ref=f4e3419] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1004151207091%3A1898706031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1898694031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1004151207091_3&ds=v1%3AkSG32L97NYuzHzvJ6aAy6kZIK2qbhIb%2FQC4X1Zi7k0c
                    - checkbox [aria-hidden] [ref=f4e3422]
                    - text: 8 to 12.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3424]:
                  - link "Apply the filter 20 MP & above to narrow results" [ref=f4e3426] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1004151207091%3A1898707031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=1898694031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1004151207091_4&ds=v1%3A0YYIhW2FkV5D6Ihu1BGTgjzlnPyykOevTBTlc7yAb4E
                    - checkbox [aria-hidden] [ref=f4e3429]
                    - text: 20 MP & above
            - group [ref=f4e3431]:
              - heading "Processor Speed" [level=2] [ref=f4e3432]
              - list "Processor Speed" [ref=f4e3433]:
                - listitem "Popular Shopping Ideas" [ref=f4e3434]:
                  - link "Apply the filter Less Than 0.99 GHz to narrow results" [ref=f4e3436] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_nine_browse-bin%3A8561128031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=8561123031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_nine_browse-bin_1&ds=v1%3AEwWt4fFM6kIvaOiS5F6a%2FNSUNLB%2Bh6rwWl%2BpHlUX1U4
                    - checkbox [aria-hidden] [ref=f4e3439]
                    - text: Less Than 0.99 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3441]:
                  - link "Apply the filter 1 - 1.49 GHz to narrow results" [ref=f4e3443] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_nine_browse-bin%3A8561124031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=8561123031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_nine_browse-bin_2&ds=v1%3AqA0ao2ffUXcfqCgGIQn%2FfVikJSmGJx3ogCkimF17Oqw
                    - checkbox [aria-hidden] [ref=f4e3446]
                    - text: 1 - 1.49 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3448]:
                  - link "Apply the filter 1.5 - 1.99 GHz to narrow results" [ref=f4e3450] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_nine_browse-bin%3A8561125031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=8561123031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_nine_browse-bin_3&ds=v1%3Aj1mhuKBeBSe9RMFV3JzQLJHYQWDye%2FuidDcB4gsZWO4
                    - checkbox [aria-hidden] [ref=f4e3453]
                    - text: 1.5 - 1.99 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3455]:
                  - link "Apply the filter 2 - 2.4 GHz to narrow results" [ref=f4e3457] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_nine_browse-bin%3A8561126031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=8561123031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_nine_browse-bin_4&ds=v1%3Aicl%2BSxg7GzfOuweg4OAp9LsxAH4gYQgaNXmMGniM0zE
                    - checkbox [aria-hidden] [ref=f4e3460]
                    - text: 2 - 2.4 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3462]:
                  - link "Apply the filter 2.5 GHz & Above to narrow results" [ref=f4e3464] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_nine_browse-bin%3A8561127031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=8561123031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_nine_browse-bin_5&ds=v1%3AiVSnAL3W8RCvOeCqG%2BpPflnTgbZ%2FogaR2ydtNNOC4Rc
                    - checkbox [aria-hidden] [ref=f4e3467]
                    - text: 2.5 GHz & Above
            - group [ref=f4e3469]:
              - heading "Video Capture Resolution" [level=2] [ref=f4e3470]
              - list "Video Capture Resolution" [ref=f4e3471]:
                - listitem "Popular Shopping Ideas" [ref=f4e3472]:
                  - link "Apply the filter 1080p to narrow results" [ref=f4e3474] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003305462111%3A28430295031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=28430291031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003305462111_1&ds=v1%3A%2FY%2F%2BHori15mMDrx%2FVpq4sVqBH0r2A4fxrqmZJLO1s2M
                    - checkbox [aria-hidden] [ref=f4e3477]
                    - text: 1080p
                - listitem "Popular Shopping Ideas" [ref=f4e3479]:
                  - link "Apply the filter 2K to narrow results" [ref=f4e3481] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003305462111%3A100139568031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=28430291031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003305462111_2&ds=v1%3A%2FU25DCsnY852Rkf0ixPvo18g718aNbp08PD1vwPQmHU
                    - checkbox [aria-hidden] [ref=f4e3484]
                    - text: 2K
                - listitem "Popular Shopping Ideas" [ref=f4e3486]:
                  - link "Apply the filter 480p to narrow results" [ref=f4e3488] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003305462111%3A100139569031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=28430291031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003305462111_3&ds=v1%3AIvZa09ADL9NMm41A4DEq1BxkQlVXQMi2YnMfl%2FcFqEI
                    - checkbox [aria-hidden] [ref=f4e3491]
                    - text: 480p
                - listitem "Popular Shopping Ideas" [ref=f4e3493]:
                  - link "Apply the filter 4k to narrow results" [ref=f4e3495] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003305462111%3A28430294031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=28430291031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003305462111_4&ds=v1%3Admnqd0dXyJqLPoqAXAM7jFB8y5s2%2F3joeQBeAOTfGZU
                    - checkbox [aria-hidden] [ref=f4e3498]
                    - text: 4k
                - listitem "Popular Shopping Ideas" [ref=f4e3500]:
                  - link "Apply the filter 720p to narrow results" [ref=f4e3502] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003305462111%3A28430293031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=28430291031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003305462111_5&ds=v1%3AfPjPlnP%2Fe6m65vTaO8RXqVYkTdabL68%2FUqf1ipuCNbA
                    - checkbox [aria-hidden] [ref=f4e3505]
                    - text: 720p
                - listitem "Popular Shopping Ideas" [ref=f4e3507]:
                  - link "Apply the filter 8k to narrow results" [ref=f4e3509] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003305462111%3A28430296031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=28430291031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003305462111_6&ds=v1%3A6USR0tUNrggkz8A2GfL9aIJpg%2Bv1%2BUYyExWnlrFNGGA
                    - checkbox [aria-hidden] [ref=f4e3512]
                    - text: 8k
            - group [ref=f4e3514]:
              - heading "Storage Capacity" [level=2] [ref=f4e3515]
              - list "Storage Capacity" [ref=f4e3516]:
                - listitem "Popular Shopping Ideas" [ref=f4e3517]:
                  - link "Apply the filter Up to 3.9 GB to narrow results" [ref=f4e3519] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A44349049031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_1&ds=v1%3AFoeD68j%2FavpElkg3W%2Fth8%2BkdZhkI5xOhyCq9UPWjixI
                    - checkbox [aria-hidden] [ref=f4e3522]
                    - text: Up to 3.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3524]:
                  - link "Apply the filter 4 GB to narrow results" [ref=f4e3526] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A44349050031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_2&ds=v1%3A1u%2FqbXM9ilm3oqghXMnCyNpa3tdTqPFwObyZLySgcro
                    - checkbox [aria-hidden] [ref=f4e3529]
                    - text: 4 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3531]:
                  - link "Apply the filter 8 GB to narrow results" [ref=f4e3533] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A44349047031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_3&ds=v1%3AqoO4AwRjpXDTmyFqlvSmz8kN4HTGlAz9DrHgTvoonzI
                    - checkbox [aria-hidden] [ref=f4e3536]
                    - text: 8 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3538]:
                  - link "Apply the filter 16 GB to narrow results" [ref=f4e3540] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A44349052031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_4&ds=v1%3AxxXAe%2Bt7gnRWYTw1PI5Ny4b2fprC4U6uuK3%2FDrqKZss
                    - checkbox [aria-hidden] [ref=f4e3543]
                    - text: 16 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3545]:
                  - link "Apply the filter 32 GB to narrow results" [ref=f4e3547] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A81332992031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_5&ds=v1%3A655CGpqZjbJwcWP60U3JJjuPH%2BBUUokEuMEXLhGthYM
                    - checkbox [aria-hidden] [ref=f4e3550]
                    - text: 32 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3552]:
                  - link "Apply the filter 64 GB to narrow results" [ref=f4e3554] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A81332998031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_6&ds=v1%3AuVG9uAknHU2OaU8iTe1RGZ1IVtRPRntyFWViTUsVcKk
                    - checkbox [aria-hidden] [ref=f4e3557]
                    - text: 64 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3559]:
                  - link "Apply the filter 128 GB to narrow results" [ref=f4e3561] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A81332994031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_7&ds=v1%3AeEtVjGqKL2nIriQhaA3T48rAyVu1C9kQsUv%2B%2B%2FA2TMs
                    - checkbox [aria-hidden] [ref=f4e3564]
                    - text: 128 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3566]:
                  - link "Apply the filter 256 GB to narrow results" [ref=f4e3568] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A81332996031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_8&ds=v1%3A%2BiZMlkHYMZNCMwRsfNxb8imaW45fDl1QRFTvAw%2BQHrE
                    - checkbox [aria-hidden] [ref=f4e3571]
                    - text: 256 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3573]:
                  - link "Apply the filter 512 GB & above to narrow results" [ref=f4e3575] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003492455111%3A92070749031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=44349045031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003492455111_9&ds=v1%3A%2FnNhAAJitb9qo4Us7Zjcr5n%2Br6dooM3fVszBGOg1dQM
                    - checkbox [aria-hidden] [ref=f4e3578]
                    - text: 512 GB & above
            - group [ref=f4e3580]:
              - heading "Battery Type" [level=2] [ref=f4e3581]
              - list "Battery Type" [ref=f4e3582]:
                - listitem "Popular Shopping Ideas" [ref=f4e3583]:
                  - link "Apply the filter Lithium-Ion to narrow results" [ref=f4e3585] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015500034111%3A100427319031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100427310031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015500034111_1&ds=v1%3As%2BOMo9U3oF5j1bIpfKYXBQQcJ5CnzcxUBg%2FnWmxOINo
                    - checkbox [aria-hidden] [ref=f4e3588]
                    - text: Lithium-Ion
                - listitem "Popular Shopping Ideas" [ref=f4e3590]:
                  - link "Apply the filter Lithium-Polymer to narrow results" [ref=f4e3592] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015500034111%3A100427316031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100427310031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015500034111_2&ds=v1%3ADy6W4H%2Ft%2FhVJuRI38noN07JCxRAjtLRk%2BFIURRNKYsM
                    - checkbox [aria-hidden] [ref=f4e3595]
                    - text: Lithium-Polymer
                - listitem "Popular Shopping Ideas" [ref=f4e3597]:
                  - link "Apply the filter Nickel-Cadmium to narrow results" [ref=f4e3599] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015500034111%3A100427318031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100427310031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015500034111_3&ds=v1%3ADEwsSu8RwCGgLlRc1TmPivWXhhaHOQMARmrKqOdnh1w
                    - checkbox [aria-hidden] [ref=f4e3602]
                    - text: Nickel-Cadmium
            - group [ref=f4e3604]:
              - heading "Carrier Lock Status" [level=2] [ref=f4e3605]
              - list "Carrier Lock Status" [ref=f4e3606]:
                - listitem "Popular Shopping Ideas" [ref=f4e3607]:
                  - link "Apply the filter Unlocked to narrow results" [ref=f4e3609] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101018080642111%3A222841945031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=222841944031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101018080642111_1&ds=v1%3AOzeueyM0CLexgJr8i1CiaNNoeXof8xsUgkS2%2BTFCnQA
                    - checkbox [aria-hidden] [ref=f4e3612]
                    - text: Unlocked
            - group [ref=f4e3614]:
              - heading "Material Features" [level=2] [ref=f4e3615]
              - list "Material Features" [ref=f4e3616]:
                - listitem "Popular Shopping Ideas" [ref=f4e3617]:
                  - link "Apply the filter Recyclable to narrow results" [ref=f4e3619] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015501445111%3A100427565031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100427547031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015501445111_1&ds=v1%3AQUiOEuKFqi%2BQBfcEtYp2Y8KsRFhHK6F4nNqzV5DJnXM
                    - checkbox [aria-hidden] [ref=f4e3622]
                    - text: Recyclable
            - group [ref=f4e3624]:
              - heading "Camera Feature" [level=2] [ref=f4e3625]
              - list "Camera Feature" [ref=f4e3626]:
                - listitem "Popular Shopping Ideas" [ref=f4e3627]:
                  - link "Apply the filter AI Enhanced HDR to narrow results" [ref=f4e3629] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017335955111%3A214313440031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214313432031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017335955111_1&ds=v1%3AHK86W1ScTMxjetNBz8IkVnLl61iG%2B%2Bv8dRMWjTUlF7c
                    - checkbox [aria-hidden] [ref=f4e3632]
                    - text: AI Enhanced HDR
                - listitem "Popular Shopping Ideas" [ref=f4e3634]:
                  - link "Apply the filter AI Enhanced Zoom to narrow results" [ref=f4e3636] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017335955111%3A214313436031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214313432031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017335955111_2&ds=v1%3Ad2uR4VjzanDcnIkAmyzSw%2BQtUoRU%2FJ1GiaZKt7V%2BtU8
                    - checkbox [aria-hidden] [ref=f4e3639]
                    - text: AI Enhanced Zoom
                - listitem "Popular Shopping Ideas" [ref=f4e3641]:
                  - link "Apply the filter Face Detection to narrow results" [ref=f4e3643] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017335955111%3A214313438031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214313432031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017335955111_3&ds=v1%3AACXsjt7FpCLy53OUb6NerC5GoAaXZRH%2B%2B46nYdexI8M
                    - checkbox [aria-hidden] [ref=f4e3646]
                    - text: Face Detection
                - listitem "Popular Shopping Ideas" [ref=f4e3648]:
                  - link "Apply the filter Optical Zoom to narrow results" [ref=f4e3650] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017335955111%3A214313435031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214313432031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017335955111_4&ds=v1%3AOi1YLcNVsCqfiXowYsgxucVOY9yY7dKqeNhn6cUtIT4
                    - checkbox [aria-hidden] [ref=f4e3653]
                    - text: Optical Zoom
                - listitem "Popular Shopping Ideas" [ref=f4e3655]:
                  - link "Apply the filter Portrait Enhancement to narrow results" [ref=f4e3657] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017335955111%3A214313445031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214313432031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017335955111_5&ds=v1%3Auy4j%2Fv5Ie6HBuYtzWoatExqsiozAbCo2LvuwaDS1fyY
                    - checkbox [aria-hidden] [ref=f4e3660]
                    - text: Portrait Enhancement
                - listitem "Popular Shopping Ideas" [ref=f4e3662]:
                  - link "Apply the filter Real-time Object Recognition to narrow results" [ref=f4e3664] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017335955111%3A214313444031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214313432031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017335955111_6&ds=v1%3Aj%2FWSa9ENfzqRsQyfhbev%2BdO7WD2K3HBM%2Fs1NDnlmEVw
                    - checkbox [aria-hidden] [ref=f4e3667]
                    - text: Real-time Object Recognition
                - listitem "Popular Shopping Ideas" [ref=f4e3669]:
                  - link "Apply the filter Scene Optimization to narrow results" [ref=f4e3671] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101017335955111%3A214313441031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=214313432031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101017335955111_7&ds=v1%3AGiG0ihUIUJQGwAUNtyvDebEba25nyRwRCpMP7ZxDyD4
                    - checkbox [aria-hidden] [ref=f4e3674]
                    - text: Scene Optimization
            - group [ref=f4e3676]:
              - heading "Display Resolution" [level=2] [ref=f4e3677]
              - list "Display Resolution" [ref=f4e3678]:
                - listitem "Popular Shopping Ideas" [ref=f4e3679]:
                  - link "Apply the filter 1080 x 2400 to narrow results" [ref=f4e3681] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002090229111%3A27345186031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27345181031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002090229111_1&ds=v1%3AqjBfI0pq6o2L%2BGtnh0NPJQYxKDStK%2FNu9OkA7YZpzM8
                    - checkbox [aria-hidden] [ref=f4e3684]
                    - text: 1080 x 2400
                - listitem "Popular Shopping Ideas" [ref=f4e3686]:
                  - link "Apply the filter 1280 x 720 to narrow results" [ref=f4e3688] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002090229111%3A27345189031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27345181031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002090229111_2&ds=v1%3AsxKDlvPtsZO4qiJbPg%2Bn4q1BwNjHoWZO%2BPaGryfg1JQ
                    - checkbox [aria-hidden] [ref=f4e3691]
                    - text: 1280 x 720
                - listitem "Popular Shopping Ideas" [ref=f4e3693]:
                  - link "Apply the filter 1520 x 720 to narrow results" [ref=f4e3695] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002090229111%3A27345225031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27345181031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002090229111_3&ds=v1%3AoXPRqc8C9WNUWtv9cJgHWK6qGS3ahcj%2FcQ%2BQkYLEBTU
                    - checkbox [aria-hidden] [ref=f4e3698]
                    - text: 1520 x 720
                - listitem "Popular Shopping Ideas" [ref=f4e3700]:
                  - link "Apply the filter 1600 x 720 to narrow results" [ref=f4e3702] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002090229111%3A56611003031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27345181031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002090229111_4&ds=v1%3AocSXhkWKA8UQ05vsftOvfqdbuBAEg0VqE5O%2FLw7GpF0
                    - checkbox [aria-hidden] [ref=f4e3705]
                    - text: 1600 x 720
                - listitem "Popular Shopping Ideas" [ref=f4e3707]:
                  - link "Apply the filter 1920 x 1080 to narrow results" [ref=f4e3709] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002090229111%3A27345207031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27345181031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002090229111_5&ds=v1%3AMiRcz1Gb%2B40sVa3w9Hiv2u8hm3S%2BavqvEHlV5Dkflyo
                    - checkbox [aria-hidden] [ref=f4e3712]
                    - text: 1920 x 1080
                - listitem "Popular Shopping Ideas" [ref=f4e3714]:
                  - link "Apply the filter 2340 x 1080 to narrow results" [ref=f4e3716] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002090229111%3A27345192031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27345181031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002090229111_6&ds=v1%3ARj2YihD74OYMxeOIL4mcadLc7FR9WKiy6UYGtM51%2BWg
                    - checkbox [aria-hidden] [ref=f4e3719]
                    - text: 2340 x 1080
                - listitem "Popular Shopping Ideas" [ref=f4e3721]:
                  - link "Apply the filter 2400 x 1080 to narrow results" [ref=f4e3723] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002090229111%3A27345223031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27345181031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002090229111_7&ds=v1%3AiZcrxIK%2Ban%2FKQVuInD9WB64VS2agIL%2BxMEGkpE6l6XA
                    - checkbox [aria-hidden] [ref=f4e3726]
                    - text: 2400 x 1080
                - listitem [ref=f4e3728]:
                  - button "See more, Display Resolution" [ref=f4e3731] [cursor=pointer]: See more
            - group [ref=f4e3733]:
              - heading "Cellular Technology" [level=2] [ref=f4e3734]
              - list "Cellular Technology" [ref=f4e3735]:
                - listitem "Popular Shopping Ideas" [ref=f4e3736]:
                  - link "Apply the filter 2G to narrow results" [ref=f4e3738] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003469290111%3A33962380031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=33962288031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003469290111_1&ds=v1%3AP%2FBvD4gcYamMKQPAVsWiHbFEHevORZhBwlSkMHIS%2Bew
                    - checkbox [aria-hidden] [ref=f4e3741]
                    - text: 2G
                - listitem "Popular Shopping Ideas" [ref=f4e3743]:
                  - link "Apply the filter 3G to narrow results" [ref=f4e3745] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003469290111%3A33962381031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=33962288031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003469290111_2&ds=v1%3Ayb2FSp2VPV3964xpA%2BaUUhGX%2BSDaLV%2FlJhfG%2FyuAAfU
                    - checkbox [aria-hidden] [ref=f4e3748]
                    - text: 3G
                - listitem "Popular Shopping Ideas" [ref=f4e3750]:
                  - link "Apply the filter 4G to narrow results" [ref=f4e3752] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003469290111%3A33962379031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=33962288031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003469290111_3&ds=v1%3AUJYDCK0wAkXgFm2TaxNhP469sbCfVqwSmaDo%2B6RFqXQ
                    - checkbox [aria-hidden] [ref=f4e3755]
                    - text: 4G
                - listitem "Popular Shopping Ideas" [ref=f4e3757]:
                  - link "Apply the filter 5G to narrow results" [ref=f4e3759] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003469290111%3A33962382031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=33962288031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003469290111_4&ds=v1%3AaRwuU%2BlnnmBReAXU7KHM8OjwnEaXg0YNR1DYKHfk2hg
                    - checkbox [aria-hidden] [ref=f4e3762]
                    - text: 5G
            - group [ref=f4e3764]:
              - heading "Mobile Phone Primary Camera Resolution" [level=2] [ref=f4e3765]
              - list "Mobile Phone Primary Camera Resolution" [ref=f4e3766]:
                - listitem "Popular Shopping Ideas" [ref=f4e3767]:
                  - link "Apply the filter Up to 3.9 MP to narrow results" [ref=f4e3769] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329551031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_1&ds=v1%3Aou%2Flab8NvHdvVeYC%2FvHm2xZCWdHheHDMO2lGCcSkDJo
                    - checkbox [aria-hidden] [ref=f4e3772]
                    - text: Up to 3.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3774]:
                  - link "Apply the filter 4 - 7.9 MP to narrow results" [ref=f4e3776] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329552031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_2&ds=v1%3AaH6n0ZpIgAXh18Q4dpmSNh8XB8PyRvFVZbZt4JnO7zk
                    - checkbox [aria-hidden] [ref=f4e3779]
                    - text: 4 - 7.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3781]:
                  - link "Apply the filter 8 - 11.9 MP to narrow results" [ref=f4e3783] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329553031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_3&ds=v1%3AI6Z%2B576dxN95IZzaLNL1EPiYUjQjPBEeeoGe%2FNV9gA4
                    - checkbox [aria-hidden] [ref=f4e3786]
                    - text: 8 - 11.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3788]:
                  - link "Apply the filter 12 - 15.9 MP to narrow results" [ref=f4e3790] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329554031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_4&ds=v1%3A4ftL2%2B%2FKkaRG%2FT8WCBBea8tdD%2Ft0h7qLVu3guvnIGWo
                    - checkbox [aria-hidden] [ref=f4e3793]
                    - text: 12 - 15.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3795]:
                  - link "Apply the filter 16 - 19.9 MP to narrow results" [ref=f4e3797] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329555031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_5&ds=v1%3AVRhsLyHFZwckyKmgUOLzCVBfIzMPUx6aLOjbJ13BLIg
                    - checkbox [aria-hidden] [ref=f4e3800]
                    - text: 16 - 19.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3802]:
                  - link "Apply the filter 20 - 23.9 MP to narrow results" [ref=f4e3804] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329556031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_6&ds=v1%3ANwqbNQZRyVQPVRSCk5IHw53gHhA2Ur2Ep9vDWMbD7Kc
                    - checkbox [aria-hidden] [ref=f4e3807]
                    - text: 20 - 23.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3809]:
                  - link "Apply the filter 28 - 31.9 MP to narrow results" [ref=f4e3811] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329558031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_7&ds=v1%3AokHUwi1OSfG7BJOFmX7TKSVoT8%2FEyDW53W4fYNAm3eU
                    - checkbox [aria-hidden] [ref=f4e3814]
                    - text: 28 - 31.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3816]:
                  - link "Apply the filter 32 MP & Above to narrow results" [ref=f4e3818] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_feature_fourteen_browse-bin%3A21329559031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=21345983031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_feature_fourteen_browse-bin_8&ds=v1%3AjhoHOgTnH5v8PCQRjY7WCY19%2F0BMKP2Y57%2BbBbeZxOY
                    - checkbox [aria-hidden] [ref=f4e3821]
                    - text: 32 MP & Above
            - group [ref=f4e3823]:
              - heading "Input" [level=2] [ref=f4e3824]
              - list "Input" [ref=f4e3825]:
                - listitem "Popular Shopping Ideas" [ref=f4e3826]:
                  - link "Apply the filter Touchscreen to narrow results" [ref=f4e3828] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002097072111%3A27362061031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27362059031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002097072111_1&ds=v1%3AgxHObEOg17dG2ThrNasFueiTQ%2B7TCOCBlVa0mDXeJcw
                    - checkbox [aria-hidden] [ref=f4e3831]
                    - text: Touchscreen
                - listitem "Popular Shopping Ideas" [ref=f4e3833]:
                  - link "Apply the filter Buttons to narrow results" [ref=f4e3835] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002097072111%3A27362063031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27362059031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002097072111_2&ds=v1%3A%2BczJjjaWffeLO%2FPXhZkZ5AoQ2yHyLjl%2B%2Fvv7Vk9JUOQ
                    - checkbox [aria-hidden] [ref=f4e3838]
                    - text: Buttons
                - listitem "Popular Shopping Ideas" [ref=f4e3840]:
                  - link "Apply the filter Keypad to narrow results" [ref=f4e3842] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002097072111%3A27362068031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27362059031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002097072111_3&ds=v1%3ApduQa8opQI0f3tHdm9m4e1gzysxXpYC4vjlUt11X0YI
                    - checkbox [aria-hidden] [ref=f4e3845]
                    - text: Keypad
                - listitem "Popular Shopping Ideas" [ref=f4e3847]:
                  - link "Apply the filter Keyboard to narrow results" [ref=f4e3849] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002097072111%3A27362069031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27362059031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002097072111_4&ds=v1%3AWEZD10pC8W9Oj4vpoVPnWo6n9TRPOJamBJlucrMZiU0
                    - checkbox [aria-hidden] [ref=f4e3852]
                    - text: Keyboard
                - listitem "Popular Shopping Ideas" [ref=f4e3854]:
                  - link "Apply the filter Microphone to narrow results" [ref=f4e3856] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002097072111%3A27362066031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27362059031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002097072111_5&ds=v1%3AWU2Nn10Ve5fF%2FVeFxpX53ravpIAhsi%2BLzCsHdZitty4
                    - checkbox [aria-hidden] [ref=f4e3859]
                    - text: Microphone
                - listitem "Popular Shopping Ideas" [ref=f4e3861]:
                  - link "Apply the filter Numeric Keypad to narrow results" [ref=f4e3863] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002097072111%3A27362073031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27362059031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002097072111_6&ds=v1%3AGZoSWK2NBk9SxkvqpBcTX3e3lsE3I55dyhvgwP9uQ%2BI
                    - checkbox [aria-hidden] [ref=f4e3866]
                    - text: Numeric Keypad
                - listitem "Popular Shopping Ideas" [ref=f4e3868]:
                  - link "Apply the filter Gesture to narrow results" [ref=f4e3870] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002097072111%3A216986827031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27362059031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002097072111_7&ds=v1%3A9lGyJRrbK1hAK0Yo7haqIuH2LLIf2USF7uQFq0tFxi4
                    - checkbox [aria-hidden] [ref=f4e3873]
                    - text: Gesture
            - group [ref=f4e3875]:
              - heading "GenAI Model" [level=2] [ref=f4e3876]
              - list "GenAI Model" [ref=f4e3877]:
                - listitem "Popular Shopping Ideas" [ref=f4e3878]:
                  - link "Apply the filter Galaxy AI to narrow results" [ref=f4e3880] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101016978070111%3A211735166031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=211735163031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101016978070111_1&ds=v1%3AF2uIsbYgucf0mLXeWwlAAfx8U0eCcww4oASnKX495mQ
                    - checkbox [aria-hidden] [ref=f4e3883]
                    - text: Galaxy AI
                - listitem "Popular Shopping Ideas" [ref=f4e3885]:
                  - link "Apply the filter Gemini AI to narrow results" [ref=f4e3887] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101016978070111%3A211735165031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=211735163031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101016978070111_2&ds=v1%3AE%2FnVpW9Pd1EBpu0M3orxcN1ZiH8z0woytsEUAWClekM
                    - checkbox [aria-hidden] [ref=f4e3890]
                    - text: Gemini AI
            - group [ref=f4e3892]:
              - heading "Sim Card Size" [level=2] [ref=f4e3893]
              - list "Sim Card Size" [ref=f4e3894]:
                - listitem "Popular Shopping Ideas" [ref=f4e3895]:
                  - link "Apply the filter eSIM to narrow results" [ref=f4e3897] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002989370111%3A27179453031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27179438031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002989370111_1&ds=v1%3A0koF5FOLlvRswup86v6%2Fk6Tn9iN%2BRxTOXA0PzAWnHyo
                    - checkbox [aria-hidden] [ref=f4e3900]
                    - text: eSIM
                - listitem "Popular Shopping Ideas" [ref=f4e3902]:
                  - link "Apply the filter Micro to narrow results" [ref=f4e3904] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002989370111%3A27179454031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27179438031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002989370111_2&ds=v1%3A4EZCSuZaSdlMizXdfw2GaXCXHG5P5m%2BwWmv3spg5HWs
                    - checkbox [aria-hidden] [ref=f4e3907]
                    - text: Micro
                - listitem "Popular Shopping Ideas" [ref=f4e3909]:
                  - link "Apply the filter Mini to narrow results" [ref=f4e3911] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002989370111%3A27179456031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27179438031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002989370111_3&ds=v1%3ADlUFsCAsw0ww8E7B96GbDfZIiBp6HVAD5on%2BGsuApFc
                    - checkbox [aria-hidden] [ref=f4e3914]
                    - text: Mini
                - listitem "Popular Shopping Ideas" [ref=f4e3916]:
                  - link "Apply the filter Nano to narrow results" [ref=f4e3918] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002989370111%3A27179455031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27179438031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002989370111_4&ds=v1%3AZPbALWszkr76taUVH%2FK0q5We75j2qzrmLkAHKqR4KVY
                    - checkbox [aria-hidden] [ref=f4e3921]
                    - text: Nano
                - listitem "Popular Shopping Ideas" [ref=f4e3923]:
                  - link "Apply the filter Standard to narrow results" [ref=f4e3925] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002989370111%3A27179457031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27179438031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002989370111_5&ds=v1%3AWJmyREhYKwp1Za99Wv4lNrM7XtB6iU65LiF8NbXJzEw
                    - checkbox [aria-hidden] [ref=f4e3928]
                    - text: Standard
            - group [ref=f4e3930]:
              - heading "Flash" [level=2] [ref=f4e3931]
              - list "Flash" [ref=f4e3932]:
                - listitem "Popular Shopping Ideas" [ref=f4e3933]:
                  - link "Apply the filter Dual LED to narrow results" [ref=f4e3935] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015500208111%3A100427322031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100427311031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015500208111_1&ds=v1%3AmR8owQXG21UShYk%2BHlf8pCMK3Li3tvkL7P5XuDl1qYE
                    - checkbox [aria-hidden] [ref=f4e3938]
                    - text: Dual LED
                - listitem "Popular Shopping Ideas" [ref=f4e3940]:
                  - link "Apply the filter LED to narrow results" [ref=f4e3942] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-101015500208111%3A100427321031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=100427311031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-101015500208111_2&ds=v1%3AQ9BIe7SiFi2Bh1KhlyhCpCA8drFywNQrkDqjOvnX7Bc
                    - checkbox [aria-hidden] [ref=f4e3945]
                    - text: LED
            - group [ref=f4e3947]:
              - heading "Camera Modes" [level=2] [ref=f4e3948]
              - list "Camera Modes" [ref=f4e3949]:
                - listitem "Popular Shopping Ideas" [ref=f4e3950]:
                  - link "Apply the filter High Dynamic Range to narrow results" [ref=f4e3952] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002252610111%3A27316767031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27316761031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002252610111_1&ds=v1%3AA%2BnGMlYzI0pFJuyLSTBE9345UFauVtGPY1jErVETwoc
                    - checkbox [aria-hidden] [ref=f4e3955]
                    - text: High Dynamic Range
                - listitem "Popular Shopping Ideas" [ref=f4e3957]:
                  - link "Apply the filter Automatic to narrow results" [ref=f4e3959] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002252610111%3A27316764031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27316761031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002252610111_2&ds=v1%3AdCEzS74Aloj70f5IPJIGE73BJxHJMMY5ftKcO%2FNtILc
                    - checkbox [aria-hidden] [ref=f4e3962]
                    - text: Automatic
                - listitem "Popular Shopping Ideas" [ref=f4e3964]:
                  - link "Apply the filter Portrait to narrow results" [ref=f4e3966] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002252610111%3A27316773031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27316761031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002252610111_3&ds=v1%3A%2FL7eWv3m%2BodLzhJA4V1qwFnP0fe6eiOg4UxKOHZOSVc
                    - checkbox [aria-hidden] [ref=f4e3969]
                    - text: Portrait
                - listitem "Popular Shopping Ideas" [ref=f4e3971]:
                  - link "Apply the filter Aperture Priority to narrow results" [ref=f4e3973] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002252610111%3A27316763031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27316761031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002252610111_4&ds=v1%3Am2pGkeAOYvIaqIfmr3%2FXm6WDjFNSRtQgebzulhG6GHE
                    - checkbox [aria-hidden] [ref=f4e3976]
                    - text: Aperture Priority
                - listitem "Popular Shopping Ideas" [ref=f4e3978]:
                  - link "Apply the filter Macro to narrow results" [ref=f4e3980] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002252610111%3A27316769031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27316761031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002252610111_5&ds=v1%3ABYwjPeq3IErATmEHTsrG10MXdUBc45aHoBbDAj95kk0
                    - checkbox [aria-hidden] [ref=f4e3983]
                    - text: Macro
                - listitem "Popular Shopping Ideas" [ref=f4e3985]:
                  - link "Apply the filter Manual to narrow results" [ref=f4e3987] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002252610111%3A27316772031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27316761031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002252610111_6&ds=v1%3A9t%2FjZ7o7MhzU4pL%2FASjAmWXE0a3d7AKYMkMLyWloO%2Fc
                    - checkbox [aria-hidden] [ref=f4e3990]
                    - text: Manual
                - listitem "Popular Shopping Ideas" [ref=f4e3992]:
                  - link "Apply the filter Night Mode to narrow results" [ref=f4e3994] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1002252610111%3A27316771031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=27316761031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1002252610111_7&ds=v1%3AhMBs2prpRZoGEp2EqeHimsSPvlzc0Yk7x9FlraqJ5Sw
                    - checkbox [aria-hidden] [ref=f4e3997]
                    - text: Night Mode
                - listitem [ref=f4e3999]:
                  - button "See more, Camera Modes" [ref=f4e4002] [cursor=pointer]: See more
            - group [ref=f4e4004]:
              - heading "Country of Origin" [level=2] [ref=f4e4005]
              - list "Country of Origin" [ref=f4e4006]:
                - listitem "Popular Shopping Ideas" [ref=f4e4007]:
                  - link "Apply the filter India to narrow results" [ref=f4e4009] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_country_of_origin-bin%3AIN&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=215263484031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_country_of_origin-bin_1&ds=v1%3Avqm3u88vIZq7frxK%2ByjYQuhm5QXHr0nCaHzt7hsWgs8
                    - checkbox [aria-hidden] [ref=f4e4012]
                    - text: India
                - listitem "Popular Shopping Ideas" [ref=f4e4014]:
                  - link "Apply the filter China to narrow results" [ref=f4e4016] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_country_of_origin-bin%3ACN&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=215263484031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_country_of_origin-bin_2&ds=v1%3ABDoz3Jk4ligHQ%2B%2F5oNx3YKydKOBkCukLMSAB5DZLwFA
                    - checkbox [aria-hidden] [ref=f4e4019]
                    - text: China
                - listitem "Popular Shopping Ideas" [ref=f4e4021]:
                  - link "Apply the filter United States to narrow results" [ref=f4e4023] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_country_of_origin-bin%3AUS&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=215263484031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_country_of_origin-bin_3&ds=v1%3AAZeMXehS5fLLbL64ee%2BO%2ByhXvIa0C0oRgNcjdWAyAkI
                    - checkbox [aria-hidden] [ref=f4e4026]
                    - text: United States
                - listitem "Popular Shopping Ideas" [ref=f4e4028]:
                  - link "Apply the filter Vietnam to narrow results" [ref=f4e4030] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_country_of_origin-bin%3AVN&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=215263484031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_country_of_origin-bin_4&ds=v1%3ASn8bX1hQ7gL0f6WHP%2Bu1GdK3x4owVv5RdJbEmK4YZuM
                    - checkbox [aria-hidden] [ref=f4e4033]
                    - text: Vietnam
            - group [ref=f4e4035]:
              - heading "Operating System" [level=2] [ref=f4e4036]
              - list "Operating System" [ref=f4e4037]:
                - listitem "Popular Shopping Ideas" [ref=f4e4038]:
                  - link "Apply the filter Android 14 to narrow results" [ref=f4e4040] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003517064111%3A206818075031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=51258619031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003517064111_1&ds=v1%3A9qILoesAQnT1tVEK%2FoTqqspk4Qp8Yy5aa%2FpS3nIHdvs
                    - checkbox [aria-hidden] [ref=f4e4043]
                    - text: Android 14
                - listitem "Popular Shopping Ideas" [ref=f4e4045]:
                  - link "Apply the filter Symbian 9.1 to narrow results" [ref=f4e4047] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003517064111%3A51258667031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=51258619031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003517064111_2&ds=v1%3AYsUR0q4XRvNyxNmxkkW%2Fi9MOmzA%2BBuneVw5ExDL8RBI
                    - checkbox [aria-hidden] [ref=f4e4050]
                    - text: Symbian 9.1
                - listitem "Popular Shopping Ideas" [ref=f4e4052]:
                  - link "Apply the filter Android 12.0 to narrow results" [ref=f4e4054] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003517064111%3A51258733031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=51258619031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003517064111_3&ds=v1%3AU%2FPBQJT%2BwAhwWFpvWhZKOUyLXb00e3B3apvZ0A9wH3g
                    - checkbox [aria-hidden] [ref=f4e4057]
                    - text: Android 12.0
                - listitem "Popular Shopping Ideas" [ref=f4e4059]:
                  - link "Apply the filter Android 10.0 to narrow results" [ref=f4e4061] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003517064111%3A51258730031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=51258619031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003517064111_4&ds=v1%3AJ2kscx8lCGTJzlz5NP1ySojKiVkjd1VhkxDNKDL0zVI
                    - checkbox [aria-hidden] [ref=f4e4064]
                    - text: Android 10.0
                - listitem "Popular Shopping Ideas" [ref=f4e4066]:
                  - link "Apply the filter Android 13.0 to narrow results" [ref=f4e4068] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003517064111%3A51258698031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=51258619031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003517064111_5&ds=v1%3AfynT%2BM1yfvYXli7KXWccPxy2m%2BUwsMeilyZtcy9fuA4
                    - checkbox [aria-hidden] [ref=f4e4071]
                    - text: Android 13.0
                - listitem "Popular Shopping Ideas" [ref=f4e4073]:
                  - link "Apply the filter Android 9.0 to narrow results" [ref=f4e4075] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003517064111%3A51258767031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=51258619031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003517064111_6&ds=v1%3ASj44Qwfb7MeOpJhMKvNzRzsu6oajlE%2F6wARrglSg%2FUI
                    - checkbox [aria-hidden] [ref=f4e4078]
                    - text: Android 9.0
                - listitem "Popular Shopping Ideas" [ref=f4e4080]:
                  - link "Apply the filter iOS 10 to narrow results" [ref=f4e4082] [cursor=pointer]:
                    - /url: /s?k=Mobile&rh=p_n_g-1003517064111%3A51258763031&dc&crid=82IBZTJS9VYS&qid=1794617451&rnid=51258619031&sprefix=mobile%2Caps%2C277&ref=sr_nr_p_n_g-1003517064111_7&ds=v1%3ASR05q6Alen%2BanEgupgMJVgRYN1ScU3UMRbP2ozNo5CI
                    - checkbox [aria-hidden] [ref=f4e4085]
                    - text: iOS 10
                - listitem [ref=f4e4087]:
                  - button "See more, Operating System" [ref=f4e4090] [cursor=pointer]: See more
  - complementary "Your recently viewed items and featured recommendations" [ref=f4e4092]:
    - generic [ref=f4e4100]:
      - heading "See personalized recommendations" [level=2] [ref=f4e4101]
      - link "Sign in" [ref=f4e4104] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0
      - generic [ref=f4e4105]:
        - text: New customer?
        - link "Start here." [ref=f4e4106] [cursor=pointer]:
          - /url: https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex
  - generic [ref=f4e4107]:
    - button "Back to top" [ref=f4e4108] [cursor=pointer]
    - generic [ref=f4e4110]:
      - generic [ref=f4e4111]:
        - heading "Get to Know Us" [level=6] [ref=f4e4112]
        - list [ref=f4e4113]:
          - listitem [ref=f4e4114]:
            - link "About Amazon" [ref=f4e4115] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f4e4116]:
            - link "Careers" [ref=f4e4117] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=f4e4118]:
            - link "Press Releases" [ref=f4e4119] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f4e4120]:
            - link "Amazon Science" [ref=f4e4121] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=f4e4123]:
        - heading "Connect with Us" [level=6] [ref=f4e4124]
        - list [ref=f4e4125]:
          - listitem [ref=f4e4126]:
            - link "Facebook" [ref=f4e4127] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=f4e4128]:
            - link "Twitter" [ref=f4e4129] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=f4e4130]:
            - link "Instagram" [ref=f4e4131] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=f4e4133]:
        - heading "Make Money with Us" [level=6] [ref=f4e4134]
        - list [ref=f4e4135]:
          - listitem [ref=f4e4136]:
            - link "Sell on Amazon" [ref=f4e4137] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=f4e4138]:
            - link "Sell under Amazon Accelerator" [ref=f4e4139] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=f4e4140]:
            - link "Protect and Build Your Brand" [ref=f4e4141] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=f4e4142]:
            - link "Amazon Global Selling" [ref=f4e4143] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=f4e4144]:
            - link "Supply to Amazon" [ref=f4e4145] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=f4e4146]:
            - link "Become an Affiliate" [ref=f4e4147] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=f4e4148]:
            - link "Fulfilment by Amazon" [ref=f4e4149] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=f4e4150]:
            - link "Advertise Your Products" [ref=f4e4151] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=f4e4152]:
            - link "Amazon Pay on Merchants" [ref=f4e4153] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant?ref_=footer_mm_apay
      - generic [ref=f4e4155]:
        - heading "Let Us Help You" [level=6] [ref=f4e4156]
        - list [ref=f4e4157]:
          - listitem [ref=f4e4158]:
            - link "Your Account" [ref=f4e4159] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=f4e4160]:
            - link "Returns Centre" [ref=f4e4161] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=f4e4162]:
            - link "Recalls and Product Safety Alerts" [ref=f4e4163] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=f4e4164]:
            - link "100% Purchase Protection" [ref=f4e4165] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=f4e4166]:
            - link "Amazon App Download" [ref=f4e4167] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=f4e4168]:
            - link "Help" [ref=f4e4169] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=f4e4171]:
      - link "Amazon India Home" [ref=f4e4174] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=f4e4177]:
        - generic [ref=f4e4178]:
          - link "Choose a language for shopping. Current selection is English." [ref=f4e4179] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=f4e4181]: English
          - button "Expand to Change Language or Country" [ref=f4e4182] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=f4e4183] [cursor=pointer]:
          - generic [ref=f4e4185]: India
    - generic "More on Amazon" [ref=f4e4186]:
      - generic "More on Amazon" [ref=f4e4187]:
        - list [ref=f4e4188]:
          - listitem [ref=f4e4189]:
            - link [ref=f4e4190] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=f4e4191]
              - generic [ref=f4e4192]: Books, art& collectibles
          - listitem [aria-hidden] [ref=f4e4193]
          - listitem [ref=f4e4194]:
            - link [ref=f4e4195] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=f4e4196]
              - generic [ref=f4e4197]: Scalable CloudComputing Services
          - listitem [aria-hidden] [ref=f4e4198]
          - listitem [ref=f4e4199]:
            - link [ref=f4e4200] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=f4e4201]
              - generic [ref=f4e4202]: DownloadAudio Books
          - listitem [aria-hidden] [ref=f4e4203]
          - listitem [ref=f4e4204]:
            - link [ref=f4e4205] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=f4e4206]
              - generic [ref=f4e4207]: Movies, TV& Celebrities
        - list [ref=f4e4208]:
          - listitem [ref=f4e4209]:
            - link [ref=f4e4210] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=f4e4211]
              - generic [ref=f4e4212]: DesignerFashion Brands
          - listitem [aria-hidden] [ref=f4e4213]
          - listitem [ref=f4e4214]:
            - link [ref=f4e4215] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=f4e4216]
              - generic [ref=f4e4217]: Everything ForYour Business
          - listitem [aria-hidden] [ref=f4e4218]
          - listitem [ref=f4e4219]:
            - link "Amazon Music Stream millions of songs" [ref=f4e4220] [cursor=pointer]:
              - /url: /music/player?ref=footer_apm
              - heading "Amazon Music" [level=5] [ref=f4e4221]
              - generic [ref=f4e4222]: Stream millions of songs
          - listitem [aria-hidden] [ref=f4e4223]
          - listitem [aria-hidden] [ref=f4e4224]
    - generic [ref=f4e4225]:
      - list [ref=f4e4226]:
        - listitem [ref=f4e4227]:
          - link "Conditions of Use & Sale" [ref=f4e4228] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=f4e4229]:
          - link "Privacy Notice" [ref=f4e4230] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=f4e4231]:
          - link "Interest-Based Ads" [ref=f4e4232] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=f4e4233]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=f4e4235]:
    - iframe [ref=f6e2]
```

# Test source

```ts
  274 | 		let mismatched:number = 0;
  275 | 		for (const product of results) {
  276 | 			const filter:string = genericUtility.safeLower(product.get("filter"));
  277 | 			const title:string = genericUtility.safeLower(product.get("title"));
  278 | 			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
  279 | 			const about :string= genericUtility.safeLower(product.get("about"));
  280 | 			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
  281 | 			const match = rangeMatch(filter, battery.rows, { title, keyFeatures, about, techDetails });
  282 | 
  283 | 			// 4. Comparable: without a matching row in the spec table nothing can be said, so the product is skipped.
  284 | 			if (match.status === "unknown") {
  285 | 				console.warn(`[${testName}] No usable ${battery.heading} row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
  286 | 				skipped++;
  287 | 				continue;
  288 | 			}
  289 | 			compared++;
  290 | 
  291 | 			if (match.status === "mismatch") {
  292 | 				mismatched++;
  293 | 				console.error(`[${testName}] Mismatch found for ${battery.heading} filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
  294 | 				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
  295 | 				console.debug(`[${testName}] About: ${about}`);
  296 | 				console.debug(`[${testName}] Tech Details: ${techDetails}`);
  297 | 
  298 | 				expect.soft(match.status, `${battery.heading}: filter '${filter}' does not fit the product (row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
  299 | 			} else {
  300 | 				console.log(`[${testName}] ${battery.heading} filter '${filter}' fits the row (${match.rowValue}) on '${title.slice(0, 60)}'`);
  301 | 			}
  302 | 		}
  303 | 		console.log(`[${testName}] ${battery.heading} summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
  304 | 		// 5. Something compared: if no product could be compared, nothing was checked for this filter.
  305 | 		expect.soft(compared, `${battery.heading}: at least one product could be compared with the filter`).toBeGreaterThan(0);
  306 | 	}
  307 | 
  308 | });
  309 | 
  310 | 
  311 | 
  312 | if (appliesTo("Discount", searchTerm)) test(`${searchTerm}: verifyingDiscountFilterFunctionality `,async ({page},testInfo)=> {
  313 | 		
  314 | 				
  315 | 		
  316 | 	  const landingPage = new AmazonLandingPage(page);
  317 |   const productPage = new ProductListingPage(page);
  318 |   const genericUtility = new GenericUtility(page,testInfo);
  319 | 	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  320 |   const testName: string = testInfo.title;
  321 | 
  322 | 	
  323 | 		await landingPage.openingLandingPage();
  324 | 		await genericUtility.clearBlockers();
  325 | 		await landingPage.givingInputWithinSearchBar(searchTerm);
  326 | 		// await genericUtility.moveMouseLikeHuman();
  327 | 		await landingPage.clickingOnSubmitSearchButton();
  328 | 
  329 | 		await genericUtility.clearBlockers();
  330 | 		await genericUtility.requireFilter("Discount");
  331 | 
  332 | 
  333 | 
  334 | 		// Only the cards in the listing are read (no product pages are opened): each one shows its discount, for example "(44% off)".
  335 | 		const results = await sharedFilterFlows.applyDiscountFilterAndReadCards(productPage.listDiscountOptionsBy);
  336 | 
  337 | 		// 1. Filter applied: every option should have been clicked and shown as applied.
  338 | 		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
  339 | 		// 2. List has data: nothing validated means nothing was checked, so fail instead of passing.
  340 | 		requireSome(results.length, 'At least one product card was read (the filter returned products)');
  341 | 
  342 | 		console.log(`[${testName}] Retrieved ${results.length} cards from applyDiscountFilterAndReadCards.`);
  343 | 
  344 | 		let compared:number = 0;
  345 | 		let skipped:number = 0;
  346 | 		let mismatched:number = 0;
  347 | 		for (const card of results) {
  348 | 			const filter:string = genericUtility.safeLower(card.filter);
  349 | 			const title:string = genericUtility.safeLower(card.title);
  350 | 			const shown:number | null = card.discount;
  351 | 			const needed:number = Number(filter.match(/\d+/)?.[0]);   // "25% off or more" -> 25
  352 | 
  353 | 			// An option without a number (for example "All Discounts") has nothing to compare with, so skip it instead of failing.
  354 | 			if (Number.isNaN(needed)) {
  355 | 				console.warn(`[${testName}] Filter '${filter}' has no percentage to compare with; skipping the card of '${title}'`);
  356 | 				skipped++;
  357 | 				continue;
  358 | 			}
  359 | 
  360 | 			// 3. Comparable: a card with no discount shown cannot be compared, so it is skipped, not failed.
  361 | 			if (shown === null) {
  362 | 				console.warn(`[${testName}] No discount shown on the card of '${title}' for filter '${filter}'; not counting it as a mismatch`);
  363 | 				skipped++;
  364 | 				continue;
  365 | 			}
  366 | 			compared++;
  367 | 
  368 | 			if (shown >= needed) {
  369 | 				console.log(`[${testName}] Filter '${filter}' fits: the card shows ${shown}% off (needs ${needed} or more) on '${title.slice(0, 60)}'`);
  370 | 			} else {
  371 | 				mismatched++;
  372 | 				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}': the card shows ${shown}% off, needs ${needed} or more. Card text: ${card.cardText}`);
  373 | 			}
> 374 | 			expect.soft(shown, `Card discount fits filter '${filter}' (the card shows ${shown}% off): ${title.slice(0, 80)}`).toBeGreaterThanOrEqual(needed);
      |                                                                                                                      ^ Error: Card discount fits filter '60% off or more' (the card shows 38% off): google pixel 6 pro smartphone
  375 | 		}
  376 | 		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
  377 | 		// 4. Something compared: if no card showed a discount, nothing was checked, so fail instead of passing.
  378 | 		requireSome(compared, 'At least one product card showed a discount to compare with the filter');
  379 | 
  380 | 	});
  381 | 
  382 | 
  383 | 
  384 | if (appliesTo("Screen Size", searchTerm)) test(`${searchTerm}: verifyingDisplaySizeFilterFunctionality `,async ({page},testInfo)=> {
  385 | 		
  386 | 				
  387 | 		
  388 | 	  const landingPage = new AmazonLandingPage(page);
  389 |   const productPage = new ProductListingPage(page);
  390 |   const genericUtility = new GenericUtility(page,testInfo);
  391 | 	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  392 |   const testName: string = testInfo.title;
  393 | 
  394 | 	
  395 | 		await landingPage.openingLandingPage();
  396 | 		await genericUtility.clearBlockers();
  397 | 		await landingPage.givingInputWithinSearchBar(searchTerm);
  398 | 		// await genericUtility.moveMouseLikeHuman();
  399 | 		await landingPage.clickingOnSubmitSearchButton();
  400 | 
  401 | 		await genericUtility.clearBlockers();
  402 | 		const heading: string = headingFor("Screen Size", searchTerm);
  403 | 		await genericUtility.requireFilter(heading);
  404 | 
  405 | 
  406 | 
  407 | 		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.getFilterOptionsByHeading(heading), heading);
  408 | 
  409 | 		// 1. Filter applied: every option should have been clicked and shown as applied.
  410 | 		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
  411 | 		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
  412 | 		results = genericUtility.onlyCapturedProducts(results, testName);
  413 | 		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
  414 | 		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');
  415 | 
  416 | 
  417 |     		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
  418 | 		
  419 | 
  420 | 		let compared:number = 0;
  421 | 		let skipped:number = 0;
  422 | 		let mismatched:number = 0;
  423 | 		for (const product of results) {
  424 | 			const filter:string = genericUtility.safeLower(product.get("filter"));
  425 | 			const title:string = genericUtility.safeLower(product.get("title"));
  426 | 			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
  427 | 			const about :string= genericUtility.safeLower(product.get("about"));
  428 | 			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
  429 | 			const match = rangeMatch(filter, ["screen size"], { title, keyFeatures, about, techDetails });
  430 | 
  431 | 			// 4. Comparable: without a Screen Size row in the spec table nothing can be said, so the product is skipped.
  432 | 			if (match.status === "unknown") {
  433 | 				console.warn(`[${testName}] No usable Screen Size row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
  434 | 				skipped++;
  435 | 				continue;
  436 | 			}
  437 | 			compared++;
  438 | 
  439 | 			if (match.status === "mismatch") {
  440 | 				mismatched++;
  441 | 				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
  442 | 				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
  443 | 				console.debug(`[${testName}] About: ${about}`);
  444 | 				console.debug(`[${testName}] Tech Details: ${techDetails}`);
  445 | 
  446 | 				expect.soft(match.status, `Filter '${filter}' does not fit the product (Screen Size row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
  447 | 			} else {
  448 | 				console.log(`[${testName}] Filter '${filter}' fits the Screen Size row (${match.rowValue}) on '${title.slice(0, 60)}'`);
  449 | 			}
  450 | 		}
  451 | 		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
  452 | 		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
  453 | 		requireSome(compared, 'At least one product could be compared with the Screen Size filter');
  454 | 
  455 | 	});
  456 | 
  457 | 
  458 | 
  459 | if (appliesTo("Display Type", searchTerm)) test(`${searchTerm}: verifyingDisplayTypeFilterFunctionality `,async ({page},testInfo)=> {
  460 | 		
  461 | 				
  462 | 		
  463 | 	  const landingPage = new AmazonLandingPage(page);
  464 |   const productPage = new ProductListingPage(page);
  465 |   const genericUtility = new GenericUtility(page,testInfo);
  466 | 	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  467 |   const testName: string = testInfo.title;
  468 | 
  469 | 	
  470 | 		await landingPage.openingLandingPage();
  471 | 		await genericUtility.clearBlockers();
  472 | 		await landingPage.givingInputWithinSearchBar(searchTerm);
  473 | 		// await genericUtility.moveMouseLikeHuman();
  474 | 		await landingPage.clickingOnSubmitSearchButton();
```