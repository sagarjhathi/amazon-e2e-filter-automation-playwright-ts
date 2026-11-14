# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AmazonAll.spec.ts >> Tablet: verifyingDiscountFilterFunctionality 
- Location: tests/AmazonAll.spec.ts:312:44

# Error details

```
Error: Card discount fits filter '25% off or more' (the card shows 10% off): redmi pad 2 pro, 12.1-inch (30.73 cm), lcd display - 2.5k sharp & clear, 8gb ram

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 25
Received:    10
```

```
Error: Card discount fits filter '25% off or more' (the card shows 14% off): lenovo {smartchoice} idea tab pro with pen plus & keyboard|12.7" 3k display|144 

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 25
Received:    14
```

```
Error: Card discount fits filter '25% off or more' (the card shows 19% off): lenovo idea tab plus with pen|wifi +5g|12.1 inches 2.5k display,800nits peak bri

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 25
Received:    19
```

```
Error: Card discount fits filter '35% off or more' (the card shows 19% off): lenovo idea tab plus with pen|wifi +5g|12.1 inches 2.5k display,800nits peak bri

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 35
Received:    19
```

```
Error: Card discount fits filter '35% off or more' (the card shows 14% off): samsung galaxy tab a11+ 128 gb 27.9 cm (11") 6 gb wi-fi 5, w129309779 (cm (11) 6

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 35
Received:    14
```

```
Error: Card discount fits filter '50% off or more' (the card shows 14% off): samsung galaxy tab a11+ 128 gb 27.9 cm (11") 6 gb wi-fi 5, w129309779 (cm (11) 6

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    14
```

```
Error: Card discount fits filter '50% off or more' (the card shows 44% off): acer iconia tab11 | 11.45" | 2.2k ips display, 450 nit | quad speakers | 8gb + 2

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    44
```

```
Error: Card discount fits filter '50% off or more' (the card shows 38% off): android 13 tablet with keyboard - 12gb+128gb, 1tb expandable, 2-in-1 with 10-inc

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    38
```

```
Error: Card discount fits filter '50% off or more' (the card shows 27% off): lenovo tab k11 gen 2 tab k11 gen 2

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    27
```

```
Error: Card discount fits filter '60% off or more' (the card shows 14% off): samsung galaxy tab a11+ 128 gb 27.9 cm (11") 6 gb wi-fi 5, w129309779 (cm (11) 6

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    14
```

```
Error: Card discount fits filter '60% off or more' (the card shows 38% off): android 13 tablet with keyboard - 12gb+128gb, 1tb expandable, 2-in-1 with 10-inc

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    38
```

```
Error: Card discount fits filter '60% off or more' (the card shows 26% off): samsung galaxy tab s6 lite 2022 10.4" 64gb 4gb ram oxford gray wifi tablet with 

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    26
```

```
Error: Card discount fits filter '60% off or more' (the card shows 43% off): microsoft surface duo tablet (glacier, 6gb ram, 256gb storage) 8.1 inches screen

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    43
```

```
Error: Card discount fits filter '60% off or more' (the card shows 10% off): samsung galaxy tab s11 book cover keyboard slim, ai key ready, pc-like experienc

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 60
Received:    10
```

```
Error: Card discount fits filter '70% off or more' (the card shows 14% off): samsung galaxy tab a11+ 128 gb 27.9 cm (11") 6 gb wi-fi 5, w129309779 (cm (11) 6

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 70
Received:    14
```

```
Error: Card discount fits filter '70% off or more' (the card shows 16% off): hk vitals glutathione, orange, 1 effervescent tablet (sample pack)
l-glutathione

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 70
Received:    16
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
          - searchbox "Search Amazon.in" [ref=f4e92]: Tablet
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
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DTablet%26crid%3D2X52K4ZO56AGU%26sprefix%3Dtablet%252Caps%252C250%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
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
          - /url: /flights/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=960ce25c-288d-43b7-b5ff-860afbe291b3&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=GA5E29HTCG82VE0MM58T
          - img "Apay_Travel" [ref=f4e226]
      - dialog [ref=f4e227]
  - generic [ref=f4e229]:
    - heading [level=1] [ref=f4e232]:
      - generic [ref=f4e233]:
        - heading "1-16 of over 40,000 results for \"Tablet\"" [level=2] [ref=f4e238]
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
            - link "Sponsored ad from Lenovo Tablets. \"The Ultimate Entertainment Tablet.\" Shop Lenovo Tablets." [ref=f4e259] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kM9u00AQh9VWQAkgqhxalBs55FCxyfpPbKfIqry2k9oxdrCTIHKxNvYmduvarndLWg65I8GRBwFegLfghsSBN-ABUFqExIHf6RvNjGb01aLdXz--f7tbf6Tx3Nj2JxNXHA6mzS3ucH9B8vQqlN1E0Y3rsjjlvX5wOjnah3DFuX1kE5-bzPBrR1_IL_yV_4AXpbYotQWuDWfbAZrvaub4xPStoH5QuxcTesaKsv5w4vqm7g1ca2YajQ9btd1NJ8RsUb-Pz_HbIm-neeMJnYPLPF2kJAaU4CpKQImXBHDNOyQPLfeQp3PAEnJOYhAVWUYilhY5-HMERLiKKShxmjNSgajIGckZ_xT5mmuEuuc4pj62PDcIg5HmDx0zNMxgOPZGzePaFtz7-vPjpy-fjcYBvmQFoCWuzjICEooBI6xKafOxACHsSgoHoSgqgsTvWK5_tKOP9EOv_txAml72LSBra3Rxm6W2Ri9Z5Z1b2r9Zo-UavVwj7QaWjT19aV4N7DeRlhoWS0SVf79de7edMFbSo05ntVq1_0rqUFZUhHY2YjpIUExFRgqQez0eiAbkgdLnJMDLfZFHPanf5ZXjm4WwIgs1QKEGRYHrQo6bDi0HzThZcAINaFCQJNhVhMHY7nn-LAhGcNYq47CKwzJL4kplrYTiMKrCNFZhKytDTNOcqgieIORKzon_7AbHU9EWb3HgSDq_mby4JNW1OsbzjLBNTbOCqf-R3EpVXNIW3nw7kBfF9SvFntq_AaxD14o&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_bkgd&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
            - generic [ref=f4e260]:
              - generic [ref=f4e262]:
                - link "Lenovo Tablets" [ref=f4e264] [cursor=pointer]:
                  - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kM9u00AQh9VWQAkgqhxalBs55FCxyfpPbKfIqry2k9oxdrCTIHKxNvYmduvarndLWg65I8GRBwFegLfghsSBN-ABUFqExIHf6RvNjGb01aLdXz--f7tbf6Tx3Nj2JxNXHA6mzS3ucH9B8vQqlN1E0Y3rsjjlvX5wOjnah3DFuX1kE5-bzPBrR1_IL_yV_4AXpbYotQWuDWfbAZrvaub4xPStoH5QuxcTesaKsv5w4vqm7g1ca2YajQ9btd1NJ8RsUb-Pz_HbIm-neeMJnYPLPF2kJAaU4CpKQImXBHDNOyQPLfeQp3PAEnJOYhAVWUYilhY5-HMERLiKKShxmjNSgajIGckZ_xT5mmuEuuc4pj62PDcIg5HmDx0zNMxgOPZGzePaFtz7-vPjpy-fjcYBvmQFoCWuzjICEooBI6xKafOxACHsSgoHoSgqgsTvWK5_tKOP9EOv_txAml72LSBra3Rxm6W2Ri9Z5Z1b2r9Zo-UavVwj7QaWjT19aV4N7DeRlhoWS0SVf79de7edMFbSo05ntVq1_0rqUFZUhHY2YjpIUExFRgqQez0eiAbkgdLnJMDLfZFHPanf5ZXjm4WwIgs1QKEGRYHrQo6bDi0HzThZcAINaFCQJNhVhMHY7nn-LAhGcNYq47CKwzJL4kplrYTiMKrCNFZhKytDTNOcqgieIORKzon_7AbHU9EWb3HgSDq_mby4JNW1OsbzjLBNTbOCqf-R3EpVXNIW3nw7kBfF9SvFntq_AaxD14o&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_logo&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                  - img "Lenovo Tablets" [ref=f4e266]
                - generic [ref=f4e268]:
                  - link "The Ultimate Entertainment Tablet" [ref=f4e269] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kM9u00AQh9VWQAkgqhxalBs55FCxyfpPbKfIqry2k9oxdrCTIHKxNvYmduvarndLWg65I8GRBwFegLfghsSBN-ABUFqExIHf6RvNjGb01aLdXz--f7tbf6Tx3Nj2JxNXHA6mzS3ucH9B8vQqlN1E0Y3rsjjlvX5wOjnah3DFuX1kE5-bzPBrR1_IL_yV_4AXpbYotQWuDWfbAZrvaub4xPStoH5QuxcTesaKsv5w4vqm7g1ca2YajQ9btd1NJ8RsUb-Pz_HbIm-neeMJnYPLPF2kJAaU4CpKQImXBHDNOyQPLfeQp3PAEnJOYhAVWUYilhY5-HMERLiKKShxmjNSgajIGckZ_xT5mmuEuuc4pj62PDcIg5HmDx0zNMxgOPZGzePaFtz7-vPjpy-fjcYBvmQFoCWuzjICEooBI6xKafOxACHsSgoHoSgqgsTvWK5_tKOP9EOv_txAml72LSBra3Rxm6W2Ri9Z5Z1b2r9Zo-UavVwj7QaWjT19aV4N7DeRlhoWS0SVf79de7edMFbSo05ntVq1_0rqUFZUhHY2YjpIUExFRgqQez0eiAbkgdLnJMDLfZFHPanf5ZXjm4WwIgs1QKEGRYHrQo6bDi0HzThZcAINaFCQJNhVhMHY7nn-LAhGcNYq47CKwzJL4kplrYTiMKrCNFZhKytDTNOcqgieIORKzon_7AbHU9EWb3HgSDq_mby4JNW1OsbzjLBNTbOCqf-R3EpVXNIW3nw7kBfF9SvFntq_AaxD14o&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_hl&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                    - generic [ref=f4e270]:
                      - generic [ref=f4e271]: The Ultimate Entertainment Tablet
                      - generic [aria-hidden] [ref=f4e272]: The Ultimate Entertainment Tablet
                  - generic [ref=f4e273]:
                    - button "Leave feedback on Sponsored ad" [ref=f4e277] [cursor=pointer]: Sponsored
                    - generic [ref=f4e279]: "|"
                    - generic [ref=f4e280]: Top 10 best-selling brand in tablets
                    - generic [ref=f4e281]: "|"
                    - link "Shop Lenovo Tablets" [ref=f4e283] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kM9u00AQh9VWQAkgqhxalBs55FCxyfpPbKfIqry2k9oxdrCTIHKxNvYmduvarndLWg65I8GRBwFegLfghsSBN-ABUFqExIHf6RvNjGb01aLdXz--f7tbf6Tx3Nj2JxNXHA6mzS3ucH9B8vQqlN1E0Y3rsjjlvX5wOjnah3DFuX1kE5-bzPBrR1_IL_yV_4AXpbYotQWuDWfbAZrvaub4xPStoH5QuxcTesaKsv5w4vqm7g1ca2YajQ9btd1NJ8RsUb-Pz_HbIm-neeMJnYPLPF2kJAaU4CpKQImXBHDNOyQPLfeQp3PAEnJOYhAVWUYilhY5-HMERLiKKShxmjNSgajIGckZ_xT5mmuEuuc4pj62PDcIg5HmDx0zNMxgOPZGzePaFtz7-vPjpy-fjcYBvmQFoCWuzjICEooBI6xKafOxACHsSgoHoSgqgsTvWK5_tKOP9EOv_txAml72LSBra3Rxm6W2Ri9Z5Z1b2r9Zo-UavVwj7QaWjT19aV4N7DeRlhoWS0SVf79de7edMFbSo05ntVq1_0rqUFZUhHY2YjpIUExFRgqQez0eiAbkgdLnJMDLfZFHPanf5ZXjm4WwIgs1QKEGRYHrQo6bDi0HzThZcAINaFCQJNhVhMHY7nn-LAhGcNYq47CKwzJL4kplrYTiMKrCNFZhKytDTNOcqgieIORKzon_7AbHU9EWb3HgSDq_mby4JNW1OsbzjLBNTbOCqf-R3EpVXNIW3nw7kBfF9SvFntq_AaxD14o&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_cta&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                      - generic [ref=f4e286]:
                        - text: Shop Lenovo
                        - generic [ref=f4e287]: Tablets
              - group [ref=f4e290]:
                - generic [ref=f4e292]:
                  - group [ref=f4e294]:
                    - list [ref=f4e295]:
                      - listitem [ref=f4e296]:
                        - generic [ref=f4e298]:
                          - link [aria-hidden] [ref=f4e299] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmVxEmwUzspajbW2B4_2sR27SluWeQGrBDcA7gAt2CHxIIbcADEQ0h8q1_6Fr_0Nfz6j29fv9xrPpZZtJrZ67XJzSdn7RrqHoUkTW5cwYxFVbvNswvWGjsX69ERhBUyx8qM2Gi9wecLNRRe2JX9kOX4Hsf3-qgHN3ccxavL-mqq24bTPG7cD0h5SbO8-Wht2rpqTUxjo2utN7VG_ZdxMQ2bD_AOv87SXpK2npYeuE6TMCEBKAku_BjkOCIAte-S1DXMLlt6gMZkRwLgZ9st8WmSpeDvCfBxEZQgx0lKSQH8LKUkpewzxZZNzVWtxUJXV4ZlOq6zlO35Qnc13ZmvrGX7pFGDh5-_v_vw6aPWOsbXNANljovLLQFxiQEltEjK9pM-hHDAiwhCjhP7PHtgmPboQF2qXav5XFNkNR8bQJD3ytUfInmvnNLC2hny_-yVaK-c7hX594hah2qk30xmr3w50QwacxL7vtZ4W4spzcsRw1RV1fsXiYlyBldMwChwqigmv5jaJ3ngFoGbb-OgkGgnLrHrF24SSLBzlQQSEoYcj4SBKHbKQkIAgSGHiEcGQxCwAw9wwwACj0UcQKzvDzye94cw7CQSzssOLkgoTYQwu30pzs5mPwGagLFV&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                          - link [ref=f4e301] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmVxEmwUzspajbW2B4_2sR27SluWeQGrBDcA7gAt2CHxIIbcADEQ0h8q1_6Fr_0Nfz6j29fv9xrPpZZtJrZ67XJzSdn7RrqHoUkTW5cwYxFVbvNswvWGjsX69ERhBUyx8qM2Gi9wecLNRRe2JX9kOX4Hsf3-qgHN3ccxavL-mqq24bTPG7cD0h5SbO8-Wht2rpqTUxjo2utN7VG_ZdxMQ2bD_AOv87SXpK2npYeuE6TMCEBKAku_BjkOCIAte-S1DXMLlt6gMZkRwLgZ9st8WmSpeDvCfBxEZQgx0lKSQH8LKUkpewzxZZNzVWtxUJXV4ZlOq6zlO35Qnc13ZmvrGX7pFGDh5-_v_vw6aPWOsbXNANljovLLQFxiQEltEjK9pM-hHDAiwhCjhP7PHtgmPboQF2qXav5XFNkNR8bQJD3ytUfInmvnNLC2hny_-yVaK-c7hX594hah2qk30xmr3w50QwacxL7vtZ4W4spzcsRw1RV1fsXiYlyBldMwChwqigmv5jaJ3ngFoGbb-OgkGgnLrHrF24SSLBzlQQSEoYcj4SBKHbKQkIAgSGHiEcGQxCwAw9wwwACj0UcQKzvDzye94cw7CQSzssOLkgoTYQwu30pzs5mPwGagLFV&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_img&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                            - img "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e304]
                          - generic [ref=f4e306]:
                            - link [aria-hidden] [ref=f4e307] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmVxEmwUzspajbW2B4_2sR27SluWeQGrBDcA7gAt2CHxIIbcADEQ0h8q1_6Fr_0Nfz6j29fv9xrPpZZtJrZ67XJzSdn7RrqHoUkTW5cwYxFVbvNswvWGjsX69ERhBUyx8qM2Gi9wecLNRRe2JX9kOX4Hsf3-qgHN3ccxavL-mqq24bTPG7cD0h5SbO8-Wht2rpqTUxjo2utN7VG_ZdxMQ2bD_AOv87SXpK2npYeuE6TMCEBKAku_BjkOCIAte-S1DXMLlt6gMZkRwLgZ9st8WmSpeDvCfBxEZQgx0lKSQH8LKUkpewzxZZNzVWtxUJXV4ZlOq6zlO35Qnc13ZmvrGX7pFGDh5-_v_vw6aPWOsbXNANljovLLQFxiQEltEjK9pM-hHDAiwhCjhP7PHtgmPboQF2qXav5XFNkNR8bQJD3ytUfInmvnNLC2hny_-yVaK-c7hX594hah2qk30xmr3w50QwacxL7vtZ4W4spzcsRw1RV1fsXiYlyBldMwChwqigmv5jaJ3ngFoGbb-OgkGgnLrHrF24SSLBzlQQSEoYcj4SBKHbKQkIAgSGHiEcGQxCwAw9wwwACj0UcQKzvDzye94cw7CQSzssOLkgoTYQwu30pzs5mPwGagLFV&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                            - link "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e310] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmVxEmwUzspajbW2B4_2sR27SluWeQGrBDcA7gAt2CHxIIbcADEQ0h8q1_6Fr_0Nfz6j29fv9xrPpZZtJrZ67XJzSdn7RrqHoUkTW5cwYxFVbvNswvWGjsX69ERhBUyx8qM2Gi9wecLNRRe2JX9kOX4Hsf3-qgHN3ccxavL-mqq24bTPG7cD0h5SbO8-Wht2rpqTUxjo2utN7VG_ZdxMQ2bD_AOv87SXpK2npYeuE6TMCEBKAku_BjkOCIAte-S1DXMLlt6gMZkRwLgZ9st8WmSpeDvCfBxEZQgx0lKSQH8LKUkpewzxZZNzVWtxUJXV4ZlOq6zlO35Qnc13ZmvrGX7pFGDh5-_v_vw6aPWOsbXNANljovLLQFxiQEltEjK9pM-hHDAiwhCjhP7PHtgmPboQF2qXav5XFNkNR8bQJD3ytUfInmvnNLC2hny_-yVaK-c7hX594hah2qk30xmr3w50QwacxL7vtZ4W4spzcsRw1RV1fsXiYlyBldMwChwqigmv5jaJ3ngFoGbb-OgkGgnLrHrF24SSLBzlQQSEoYcj4SBKHbKQkIAgSGHiEcGQxCwAw9wwwACj0UcQKzvDzye94cw7CQSzssOLkgoTYQwu30pzs5mPwGagLFV&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                              - generic [ref=f4e311]:
                                - generic [ref=f4e312]: Lenovo Idea Tab (Smartchoice) | WiFi Only |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey
                                - generic [aria-hidden] [ref=f4e313]: Lenovo Idea Tab (Smartchoice) | WiFi Only |11" 2.5K IPS Displ…
                            - link "Rated 4.2 out of 5 stars by 35 reviews. Go to review section." [ref=f4e314] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmVxEmwUzspajbW2B4_2sR27SluWeQGrBDcA7gAt2CHxIIbcADEQ0h8q1_6Fr_0Nfz6j29fv9xrPpZZtJrZ67XJzSdn7RrqHoUkTW5cwYxFVbvNswvWGjsX69ERhBUyx8qM2Gi9wecLNRRe2JX9kOX4Hsf3-qgHN3ccxavL-mqq24bTPG7cD0h5SbO8-Wht2rpqTUxjo2utN7VG_ZdxMQ2bD_AOv87SXpK2npYeuE6TMCEBKAku_BjkOCIAte-S1DXMLlt6gMZkRwLgZ9st8WmSpeDvCfBxEZQgx0lKSQH8LKUkpewzxZZNzVWtxUJXV4ZlOq6zlO35Qnc13ZmvrGX7pFGDh5-_v_vw6aPWOsbXNANljovLLQFxiQEltEjK9pM-hHDAiwhCjhP7PHtgmPboQF2qXav5XFNkNR8bQJD3ytUfInmvnNLC2hny_-yVaK-c7hX594hah2qk30xmr3w50QwacxL7vtZ4W4spzcsRw1RV1fsXiYlyBldMwChwqigmv5jaJ3ngFoGbb-OgkGgnLrHrF24SSLBzlQQSEoYcj4SBKHbKQkIAgSGHiEcGQxCwAw9wwwACj0UcQKzvDzye94cw7CQSzssOLkgoTYQwu30pzs5mPwGagLFV&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_rating&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131#customerReviews
                              - generic [ref=f4e315]:
                                - generic [ref=f4e316]: "4.2"
                                - generic [ref=f4e317]: 4.2 out of 5 stars.
                                - generic [ref=f4e319]: (35)
                            - link "₹25,999.00" [ref=f4e321] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmVxEmwUzspajbW2B4_2sR27SluWeQGrBDcA7gAt2CHxIIbcADEQ0h8q1_6Fr_0Nfz6j29fv9xrPpZZtJrZ67XJzSdn7RrqHoUkTW5cwYxFVbvNswvWGjsX69ERhBUyx8qM2Gi9wecLNRRe2JX9kOX4Hsf3-qgHN3ccxavL-mqq24bTPG7cD0h5SbO8-Wht2rpqTUxjo2utN7VG_ZdxMQ2bD_AOv87SXpK2npYeuE6TMCEBKAku_BjkOCIAte-S1DXMLlt6gMZkRwLgZ9st8WmSpeDvCfBxEZQgx0lKSQH8LKUkpewzxZZNzVWtxUJXV4ZlOq6zlO35Qnc13ZmvrGX7pFGDh5-_v_vw6aPWOsbXNANljovLLQFxiQEltEjK9pM-hHDAiwhCjhP7PHtgmPboQF2qXav5XFNkNR8bQJD3ytUfInmvnNLC2hny_-yVaK-c7hX594hah2qk30xmr3w50QwacxL7vtZ4W4spzcsRw1RV1fsXiYlyBldMwChwqigmv5jaJ3ngFoGbb-OgkGgnLrHrF24SSLBzlQQSEoYcj4SBKHbKQkIAgSGHiEcGQxCwAw9wwwACj0UcQKzvDzye94cw7CQSzssOLkgoTYQwu30pzs5mPwGagLFV&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_price&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                              - generic [ref=f4e323]:
                                - generic [ref=f4e324]: ₹25,999.00
                                - generic [aria-hidden] [ref=f4e325]:
                                  - text: ₹
                                  - generic [ref=f4e326]:
                                    - text: 25,999
                                    - generic [ref=f4e327]: .
                                  - text: "00"
                            - generic [ref=f4e328]: "M.R.P: ₹45,000.00"
                      - listitem [ref=f4e331]:
                        - generic [ref=f4e333]:
                          - link [aria-hidden] [ref=f4e334] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1E6wU-eBmo01tsePNrFde4pbFrkBKwT3AC7ALdghseAGHADxEBLf6pe-xS99Db_-49vXL_eaj2UWLU1ntbK46WTdrqHuUUjS5MYVrFhUtds8u2Dt8eJiNTqCsELWWDGJg1YbfD5TQ-GFUzkPWY7vcXyvj3pwc2eheHVZX57qjrFoHjfuB6S8pFnefLSyHF21J5ax0bXWm1qj_su4mIbNB3iHX2dpL0lbT0sPXKdJmJAAlAQXfgxyHBGA2ndJ6hpWly09QGOyIwHws-2W-DTJUvD3BPi4CEqQ4ySlpAB-llKSUvaZ4siW5qr2bKarS8O2Fu5iLjvTme5q-mK6tOftk0YNHn7-_u7Dp49a6xhf0wyUOS4utwTEJQaU0CIp20_6EMIBLyIIOU7s8-yBYTmjA3Wudu3mc02R1XxsAEHeK1d_iOS9ckYLe2fI_7NXor1ytlfk3yNqHaqRfjMxX_lyohk05iT2fa3xthZTmpcjhqmqqvcvEhPlDK6YgFHgqaIs15zJneSBWwRuvo2DQqKduMSuX7hJIMHOVRJISBhyPBIGotgpCwkBFgw5RDwyGIKAHXiAGwYQeCziAGJ9f-DxvD-EYSeRcF52cEFCaSKE2e1L0VybPwGVHrFI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_bkgd&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                          - link [ref=f4e336] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1E6wU-eBmo01tsePNrFde4pbFrkBKwT3AC7ALdghseAGHADxEBLf6pe-xS99Db_-49vXL_eaj2UWLU1ntbK46WTdrqHuUUjS5MYVrFhUtds8u2Dt8eJiNTqCsELWWDGJg1YbfD5TQ-GFUzkPWY7vcXyvj3pwc2eheHVZX57qjrFoHjfuB6S8pFnefLSyHF21J5ax0bXWm1qj_su4mIbNB3iHX2dpL0lbT0sPXKdJmJAAlAQXfgxyHBGA2ndJ6hpWly09QGOyIwHws-2W-DTJUvD3BPi4CEqQ4ySlpAB-llKSUvaZ4siW5qr2bKarS8O2Fu5iLjvTme5q-mK6tOftk0YNHn7-_u7Dp49a6xhf0wyUOS4utwTEJQaU0CIp20_6EMIBLyIIOU7s8-yBYTmjA3Wudu3mc02R1XxsAEHeK1d_iOS9ckYLe2fI_7NXor1ytlfk3yNqHaqRfjMxX_lyohk05iT2fa3xthZTmpcjhqmqqvcvEhPlDK6YgFHgqaIs15zJneSBWwRuvo2DQqKduMSuX7hJIMHOVRJISBhyPBIGotgpCwkBFgw5RDwyGIKAHXiAGwYQeCziAGJ9f-DxvD-EYSeRcF52cEFCaSKE2e1L0VybPwGVHrFI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_img&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                            - img "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e339]
                          - generic [ref=f4e341]:
                            - link [aria-hidden] [ref=f4e342] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1E6wU-eBmo01tsePNrFde4pbFrkBKwT3AC7ALdghseAGHADxEBLf6pe-xS99Db_-49vXL_eaj2UWLU1ntbK46WTdrqHuUUjS5MYVrFhUtds8u2Dt8eJiNTqCsELWWDGJg1YbfD5TQ-GFUzkPWY7vcXyvj3pwc2eheHVZX57qjrFoHjfuB6S8pFnefLSyHF21J5ax0bXWm1qj_su4mIbNB3iHX2dpL0lbT0sPXKdJmJAAlAQXfgxyHBGA2ndJ6hpWly09QGOyIwHws-2W-DTJUvD3BPi4CEqQ4ySlpAB-llKSUvaZ4siW5qr2bKarS8O2Fu5iLjvTme5q-mK6tOftk0YNHn7-_u7Dp49a6xhf0wyUOS4utwTEJQaU0CIp20_6EMIBLyIIOU7s8-yBYTmjA3Wudu3mc02R1XxsAEHeK1d_iOS9ckYLe2fI_7NXor1ytlfk3yNqHaqRfjMxX_lyohk05iT2fa3xthZTmpcjhqmqqvcvEhPlDK6YgFHgqaIs15zJneSBWwRuvo2DQqKduMSuX7hJIMHOVRJISBhyPBIGotgpCwkBFgw5RDwyGIKAHXiAGwYQeCziAGJ9f-DxvD-EYSeRcF52cEFCaSKE2e1L0VybPwGVHrFI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_bkgd&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                            - link "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e345] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1E6wU-eBmo01tsePNrFde4pbFrkBKwT3AC7ALdghseAGHADxEBLf6pe-xS99Db_-49vXL_eaj2UWLU1ntbK46WTdrqHuUUjS5MYVrFhUtds8u2Dt8eJiNTqCsELWWDGJg1YbfD5TQ-GFUzkPWY7vcXyvj3pwc2eheHVZX57qjrFoHjfuB6S8pFnefLSyHF21J5ax0bXWm1qj_su4mIbNB3iHX2dpL0lbT0sPXKdJmJAAlAQXfgxyHBGA2ndJ6hpWly09QGOyIwHws-2W-DTJUvD3BPi4CEqQ4ySlpAB-llKSUvaZ4siW5qr2bKarS8O2Fu5iLjvTme5q-mK6tOftk0YNHn7-_u7Dp49a6xhf0wyUOS4utwTEJQaU0CIp20_6EMIBLyIIOU7s8-yBYTmjA3Wudu3mc02R1XxsAEHeK1d_iOS9ckYLe2fI_7NXor1ytlfk3yNqHaqRfjMxX_lyohk05iT2fa3xthZTmpcjhqmqqvcvEhPlDK6YgFHgqaIs15zJneSBWwRuvo2DQqKduMSuX7hJIMHOVRJISBhyPBIGotgpCwkBFgw5RDwyGIKAHXiAGwYQeCziAGJ9f-DxvD-EYSeRcF52cEFCaSKE2e1L0VybPwGVHrFI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_title&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                              - generic [ref=f4e346]:
                                - generic [ref=f4e347]: Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey
                                - generic [aria-hidden] [ref=f4e348]: Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11"…
                            - link "Rated 4 out of 5 stars by 94 reviews. Go to review section." [ref=f4e349] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1E6wU-eBmo01tsePNrFde4pbFrkBKwT3AC7ALdghseAGHADxEBLf6pe-xS99Db_-49vXL_eaj2UWLU1ntbK46WTdrqHuUUjS5MYVrFhUtds8u2Dt8eJiNTqCsELWWDGJg1YbfD5TQ-GFUzkPWY7vcXyvj3pwc2eheHVZX57qjrFoHjfuB6S8pFnefLSyHF21J5ax0bXWm1qj_su4mIbNB3iHX2dpL0lbT0sPXKdJmJAAlAQXfgxyHBGA2ndJ6hpWly09QGOyIwHws-2W-DTJUvD3BPi4CEqQ4ySlpAB-llKSUvaZ4siW5qr2bKarS8O2Fu5iLjvTme5q-mK6tOftk0YNHn7-_u7Dp49a6xhf0wyUOS4utwTEJQaU0CIp20_6EMIBLyIIOU7s8-yBYTmjA3Wudu3mc02R1XxsAEHeK1d_iOS9ckYLe2fI_7NXor1ytlfk3yNqHaqRfjMxX_lyohk05iT2fa3xthZTmpcjhqmqqvcvEhPlDK6YgFHgqaIs15zJneSBWwRuvo2DQqKduMSuX7hJIMHOVRJISBhyPBIGotgpCwkBFgw5RDwyGIKAHXiAGwYQeCziAGJ9f-DxvD-EYSeRcF52cEFCaSKE2e1L0VybPwGVHrFI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_rating&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131#customerReviews
                              - generic [ref=f4e350]:
                                - generic [ref=f4e351]: "4"
                                - generic [ref=f4e352]: 4 out of 5 stars.
                                - generic [ref=f4e354]: (94)
                            - link "₹27,999.00" [ref=f4e356] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1E6wU-eBmo01tsePNrFde4pbFrkBKwT3AC7ALdghseAGHADxEBLf6pe-xS99Db_-49vXL_eaj2UWLU1ntbK46WTdrqHuUUjS5MYVrFhUtds8u2Dt8eJiNTqCsELWWDGJg1YbfD5TQ-GFUzkPWY7vcXyvj3pwc2eheHVZX57qjrFoHjfuB6S8pFnefLSyHF21J5ax0bXWm1qj_su4mIbNB3iHX2dpL0lbT0sPXKdJmJAAlAQXfgxyHBGA2ndJ6hpWly09QGOyIwHws-2W-DTJUvD3BPi4CEqQ4ySlpAB-llKSUvaZ4siW5qr2bKarS8O2Fu5iLjvTme5q-mK6tOftk0YNHn7-_u7Dp49a6xhf0wyUOS4utwTEJQaU0CIp20_6EMIBLyIIOU7s8-yBYTmjA3Wudu3mc02R1XxsAEHeK1d_iOS9ckYLe2fI_7NXor1ytlfk3yNqHaqRfjMxX_lyohk05iT2fa3xthZTmpcjhqmqqvcvEhPlDK6YgFHgqaIs15zJneSBWwRuvo2DQqKduMSuX7hJIMHOVRJISBhyPBIGotgpCwkBFgw5RDwyGIKAHXiAGwYQeCziAGJ9f-DxvD-EYSeRcF52cEFCaSKE2e1L0VybPwGVHrFI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_price&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                              - generic [ref=f4e358]:
                                - generic [ref=f4e359]: ₹27,999.00
                                - generic [aria-hidden] [ref=f4e360]:
                                  - text: ₹
                                  - generic [ref=f4e361]:
                                    - text: 27,999
                                    - generic [ref=f4e362]: .
                                  - text: "00"
                            - generic [ref=f4e363]: "M.R.P: ₹48,000.00"
                      - listitem [aria-hidden] [ref=f4e366]:
                        - generic [ref=f4e368]:
                          - link [aria-hidden] [ref=f4e369] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1EmwWzspajbW2DN-tInt2lPSssgNWCG4B3ABbsEOiQU34ACIh5D4Vr_0LX7pa4T1H9--frnXfKzyaDF1l0tbmE3O2jXUPYholt74kp3IunFb5Be8M_YulqMDCLfIHmtT6qLlCp_P9Uh64W7dh7wg9gSx10c9uLrjaUFdNRfHpmt5zcPGfUKrS5YXzUdL2zV1Z2JbK9Novak16r-Mj1nUfIA3-HWe9dKs9bQKwHWWRikloKK4DBNQ4JgC1L5LM9-yu3wVAJbQDSUgzNdrGrI0z8DfExDiklSgwGnGaAnCPGM0Y_wzzVVtw9ed-dzUF5Zje753orqzuekbpjdbOCfto0YN7n_-_u7Dp49G6xBfsxxUBS4v1xQkFQaMsjKt2k_6EMKBKCMIBUHui_yeZbujPf1E7zrN54am6sXYApK6067-EKs77ZSVzsZS_2enxTvtdKepv0fc2tdj82YyfRWqqWGxRFD497XG21rCWFGNOG673fb-ReLigsNbjnAaPNa0yVzU-aOC-CXxi3VCSoV1kgr7YemnRIGdq5QoSBoKIpIGstypSgWBPhgKiAZ0MASEHwRAGBIIAh4JAPFhOAhEMRzCqJMquKg6uKSRMpGi_PalPD2b_gSIXbEr&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_bkgd&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                          - link [ref=f4e371] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1EmwWzspajbW2DN-tInt2lPSssgNWCG4B3ABbsEOiQU34ACIh5D4Vr_0LX7pa4T1H9--frnXfKzyaDF1l0tbmE3O2jXUPYholt74kp3IunFb5Be8M_YulqMDCLfIHmtT6qLlCp_P9Uh64W7dh7wg9gSx10c9uLrjaUFdNRfHpmt5zcPGfUKrS5YXzUdL2zV1Z2JbK9Novak16r-Mj1nUfIA3-HWe9dKs9bQKwHWWRikloKK4DBNQ4JgC1L5LM9-yu3wVAJbQDSUgzNdrGrI0z8DfExDiklSgwGnGaAnCPGM0Y_wzzVVtw9ed-dzUF5Zje753orqzuekbpjdbOCfto0YN7n_-_u7Dp49G6xBfsxxUBS4v1xQkFQaMsjKt2k_6EMKBKCMIBUHui_yeZbujPf1E7zrN54am6sXYApK6067-EKs77ZSVzsZS_2enxTvtdKepv0fc2tdj82YyfRWqqWGxRFD497XG21rCWFGNOG673fb-ReLigsNbjnAaPNa0yVzU-aOC-CXxi3VCSoV1kgr7YemnRIGdq5QoSBoKIpIGstypSgWBPhgKiAZ0MASEHwRAGBIIAh4JAPFhOAhEMRzCqJMquKg6uKSRMpGi_PalPD2b_gSIXbEr&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_img&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                          - generic [ref=f4e376]:
                            - link [aria-hidden] [ref=f4e377] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1EmwWzspajbW2DN-tInt2lPSssgNWCG4B3ABbsEOiQU34ACIh5D4Vr_0LX7pa4T1H9--frnXfKzyaDF1l0tbmE3O2jXUPYholt74kp3IunFb5Be8M_YulqMDCLfIHmtT6qLlCp_P9Uh64W7dh7wg9gSx10c9uLrjaUFdNRfHpmt5zcPGfUKrS5YXzUdL2zV1Z2JbK9Novak16r-Mj1nUfIA3-HWe9dKs9bQKwHWWRikloKK4DBNQ4JgC1L5LM9-yu3wVAJbQDSUgzNdrGrI0z8DfExDiklSgwGnGaAnCPGM0Y_wzzVVtw9ed-dzUF5Zje753orqzuekbpjdbOCfto0YN7n_-_u7Dp49G6xBfsxxUBS4v1xQkFQaMsjKt2k_6EMKBKCMIBUHui_yeZbujPf1E7zrN54am6sXYApK6067-EKs77ZSVzsZS_2enxTvtdKepv0fc2tdj82YyfRWqqWGxRFD497XG21rCWFGNOG673fb-ReLigsNbjnAaPNa0yVzU-aOC-CXxi3VCSoV1kgr7YemnRIGdq5QoSBoKIpIGstypSgWBPhgKiAZ0MASEHwRAGBIIAh4JAPFhOAhEMRzCqJMquKg6uKSRMpGi_PalPD2b_gSIXbEr&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_bkgd&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                            - link [ref=f4e380] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1EmwWzspajbW2DN-tInt2lPSssgNWCG4B3ABbsEOiQU34ACIh5D4Vr_0LX7pa4T1H9--frnXfKzyaDF1l0tbmE3O2jXUPYholt74kp3IunFb5Be8M_YulqMDCLfIHmtT6qLlCp_P9Uh64W7dh7wg9gSx10c9uLrjaUFdNRfHpmt5zcPGfUKrS5YXzUdL2zV1Z2JbK9Novak16r-Mj1nUfIA3-HWe9dKs9bQKwHWWRikloKK4DBNQ4JgC1L5LM9-yu3wVAJbQDSUgzNdrGrI0z8DfExDiklSgwGnGaAnCPGM0Y_wzzVVtw9ed-dzUF5Zje753orqzuekbpjdbOCfto0YN7n_-_u7Dp49G6xBfsxxUBS4v1xQkFQaMsjKt2k_6EMKBKCMIBUHui_yeZbujPf1E7zrN54am6sXYApK6067-EKs77ZSVzsZS_2enxTvtdKepv0fc2tdj82YyfRWqqWGxRFD497XG21rCWFGNOG673fb-ReLigsNbjnAaPNa0yVzU-aOC-CXxi3VCSoV1kgr7YemnRIGdq5QoSBoKIpIGstypSgWBPhgKiAZ0MASEHwRAGBIIAh4JAPFhOAhEMRzCqJMquKg6uKSRMpGi_PalPD2b_gSIXbEr&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_title&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                              - generic [ref=f4e381]:
                                - generic [ref=f4e382]: Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey
                                - generic [aria-hidden] [ref=f4e383]: Lenovo Idea Tab ( Smartchoice) with Tab Pen |…
                            - link [ref=f4e384] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1EmwWzspajbW2DN-tInt2lPSssgNWCG4B3ABbsEOiQU34ACIh5D4Vr_0LX7pa4T1H9--frnXfKzyaDF1l0tbmE3O2jXUPYholt74kp3IunFb5Be8M_YulqMDCLfIHmtT6qLlCp_P9Uh64W7dh7wg9gSx10c9uLrjaUFdNRfHpmt5zcPGfUKrS5YXzUdL2zV1Z2JbK9Novak16r-Mj1nUfIA3-HWe9dKs9bQKwHWWRikloKK4DBNQ4JgC1L5LM9-yu3wVAJbQDSUgzNdrGrI0z8DfExDiklSgwGnGaAnCPGM0Y_wzzVVtw9ed-dzUF5Zje753orqzuekbpjdbOCfto0YN7n_-_u7Dp49G6xBfsxxUBS4v1xQkFQaMsjKt2k_6EMKBKCMIBUHui_yeZbujPf1E7zrN54am6sXYApK6067-EKs77ZSVzsZS_2enxTvtdKepv0fc2tdj82YyfRWqqWGxRFD497XG21rCWFGNOG673fb-ReLigsNbjnAaPNa0yVzU-aOC-CXxi3VCSoV1kgr7YemnRIGdq5QoSBoKIpIGstypSgWBPhgKiAZ0MASEHwRAGBIIAh4JAPFhOAhEMRzCqJMquKg6uKSRMpGi_PalPD2b_gSIXbEr&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_rating&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131#customerReviews
                              - generic [ref=f4e385]:
                                - generic [ref=f4e386]: "3.8"
                                - generic [ref=f4e387]: 3.8 out of 5 stars.
                                - generic [ref=f4e389]: (73)
                            - link [ref=f4e391] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkEtu00AAhhUqIAQQVRYtyo4ssog08Yzj2E6QVfmV1EmwWzspajbW2DN-tInt2lPSssgNWCG4B3ABbsEOiQU34ACIh5D4Vr_0LX7pa4T1H9--frnXfKzyaDF1l0tbmE3O2jXUPYholt74kp3IunFb5Be8M_YulqMDCLfIHmtT6qLlCp_P9Uh64W7dh7wg9gSx10c9uLrjaUFdNRfHpmt5zcPGfUKrS5YXzUdL2zV1Z2JbK9Novak16r-Mj1nUfIA3-HWe9dKs9bQKwHWWRikloKK4DBNQ4JgC1L5LM9-yu3wVAJbQDSUgzNdrGrI0z8DfExDiklSgwGnGaAnCPGM0Y_wzzVVtw9ed-dzUF5Zje753orqzuekbpjdbOCfto0YN7n_-_u7Dp49G6xBfsxxUBS4v1xQkFQaMsjKt2k_6EMKBKCMIBUHui_yeZbujPf1E7zrN54am6sXYApK6067-EKs77ZSVzsZS_2enxTvtdKepv0fc2tdj82YyfRWqqWGxRFD497XG21rCWFGNOG673fb-ReLigsNbjnAaPNa0yVzU-aOC-CXxi3VCSoV1kgr7YemnRIGdq5QoSBoKIpIGstypSgWBPhgKiAZ0MASEHwRAGBIIAh4JAPFhOAhEMRzCqJMquKg6uKSRMpGi_PalPD2b_gSIXbEr&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_price&pd_rd_w=XtRtz&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=DsXQU&pd_rd_r=3cd81a24-8d10-4fef-affd-96f246f87131
                              - generic [ref=f4e393]:
                                - generic [ref=f4e394]: ₹29,999.00
                                - generic [aria-hidden] [ref=f4e395]:
                                  - text: ₹
                                  - generic [ref=f4e396]:
                                    - text: 29,999
                                    - generic [ref=f4e397]: .
                                  - text: "00"
                            - generic [ref=f4e398]: "M.R.P: ₹53,000.00"
                  - button "Next page" [ref=f4e402] [cursor=pointer]
          - generic [ref=f4e409]:
            - text: Showing products near you, with fast delivery
            - link "See all products, across price ranges." [ref=f4e410] [cursor=pointer]:
              - /url: /s?k=Tablet&dc&crid=2X52K4ZO56AGU&nsdOptOutParam=true&qid=1794617586&sprefix=tablet%2Caps%2C250&ref=sr_ex_p_n_pct-off-with-tax_0
          - generic [ref=f4e412]:
            - generic [ref=f4e415]:
              - heading "Results" [level=2] [ref=f4e416]
              - generic [ref=f4e417]: Check each product page for other buying options.
            - generic:
              - list:
                - listitem [ref=f4e418]:
                  - generic [ref=f4e424]:
                    - generic [ref=f4e426]:
                      - generic "Amazon's Choice" [ref=f4e429]:
                        - group "Amazon's Choice for \"Tablet\"" [ref=f4e432]:
                          - generic [ref=f4e434]: Amazon's Choice
                      - link [aria-hidden] [ref=f4e438] [cursor=pointer]:
                        - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-1
                    - generic [ref=f4e443]:
                      - link [ref=f4e445] [cursor=pointer]:
                        - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-1
                        - heading "Samsung Galaxy Tab A11+ [Smartchoice], 11-inch (27.82 CM), LCD Display, 6GB RAM, 128GB ROM, Wi-Fi, Quad Speakers, Dolby Atmos, Silver, AI Enabled" [level=2] [ref=f4e446]
                      - generic [ref=f4e447]:
                        - generic [ref=f4e448]:
                          - text: "4.5"
                          - button "4.5 out of 5 stars, rating details" [ref=f4e450] [cursor=pointer]:
                            - generic [ref=f4e452]: 4.5 out of 5 stars
                          - link "336 ratings" [ref=f4e454] [cursor=pointer]:
                            - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-1#customerReviews
                            - text: (336)
                        - generic [ref=f4e455]: 1K+ bought in past month
                      - generic [ref=f4e458]:
                        - generic [ref=f4e459]:
                          - generic [ref=f4e461]:
                            - generic [ref=f4e462]: Price, product page
                            - 'link "₹21,999 M.R.P: ₹27,999 M.R.P: ₹27,999" [ref=f4e463] [cursor=pointer]':
                              - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-1
                              - generic [ref=f4e464]:
                                - generic [ref=f4e465]: ₹21,999
                                - generic [aria-hidden] [ref=f4e466]: ₹21,999
                              - generic [ref=f4e467]: "M.R.P: ₹27,999"
                              - generic [ref=f4e468]:
                                - text: "M.R.P:"
                                - generic [ref=f4e469]:
                                  - generic [ref=f4e470]: ₹27,999
                                  - text: ₹27,999
                            - text: (21% off)
                          - generic [ref=f4e474]:
                            - generic [ref=f4e475]: Save extra with No Cost EMI
                            - generic [aria-hidden] [ref=f4e476]: Save extra with No Cost EMI
                        - generic [ref=f4e479]:
                          - generic [ref=f4e480]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e482]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e497] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e498]
                          - generic [aria-hidden] [ref=f4e499]: Add to cart
                        - group "colours available" [ref=f4e501]:
                          - list [ref=f4e502]:
                            - generic [ref=f4e503]:
                              - listitem:
                                - link "Silver":
                                  - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-1
                                  - generic [ref=f4e504] [cursor=pointer]
                            - generic [ref=f4e506]:
                              - listitem:
                                - link "Gray":
                                  - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1C5DM4T/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-1
                                  - generic [ref=f4e507] [cursor=pointer]
                - listitem [ref=f4e511]:
                  - generic [ref=f4e517]:
                    - link [aria-hidden] [ref=f4e523] [cursor=pointer]:
                      - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-2
                    - generic [ref=f4e528]:
                      - link [ref=f4e530] [cursor=pointer]:
                        - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-2
                        - heading "Samsung Galaxy Tab S10 Lite [Smartchoice], 10.9-inch (27.7 CM), LCD Display, 6GB RAM, 128GB ROM, Wi-Fi, Dual Speakers, S Pen, Gray, AI Enabled" [level=2] [ref=f4e531]
                      - generic [ref=f4e532]:
                        - generic [ref=f4e533]:
                          - text: "4.6"
                          - button "4.6 out of 5 stars, rating details" [ref=f4e535] [cursor=pointer]:
                            - generic [ref=f4e537]: 4.6 out of 5 stars
                          - link "594 ratings" [ref=f4e539] [cursor=pointer]:
                            - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-2#customerReviews
                            - text: (594)
                        - generic [ref=f4e540]: 2K+ bought in past month
                      - generic [ref=f4e543]:
                        - generic [ref=f4e544]:
                          - generic [ref=f4e546]:
                            - generic [ref=f4e547]: Price, product page
                            - 'link "₹30,999 M.R.P: ₹57,999 M.R.P: ₹57,999" [ref=f4e548] [cursor=pointer]':
                              - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-2
                              - generic [ref=f4e549]:
                                - generic [ref=f4e550]: ₹30,999
                                - generic [aria-hidden] [ref=f4e551]: ₹30,999
                              - generic [ref=f4e552]: "M.R.P: ₹57,999"
                              - generic [ref=f4e553]:
                                - text: "M.R.P:"
                                - generic [ref=f4e554]:
                                  - generic [ref=f4e555]: ₹57,999
                                  - text: ₹57,999
                            - text: (47% off)
                          - generic [ref=f4e559]:
                            - generic [ref=f4e560]: Save extra with No Cost EMI
                            - generic [aria-hidden] [ref=f4e561]: Save extra with No Cost EMI
                        - generic [ref=f4e564]:
                          - generic [ref=f4e565]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e567]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e582] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e583]
                          - generic [aria-hidden] [ref=f4e584]: Add to cart
                        - group "colours available" [ref=f4e586]:
                          - list [ref=f4e587]:
                            - generic [ref=f4e588]:
                              - listitem:
                                - link "Gray":
                                  - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-2
                                  - generic [ref=f4e589] [cursor=pointer]
                            - generic [ref=f4e591]:
                              - listitem:
                                - link "Coralred":
                                  - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWQD7Y2/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-2
                                  - generic [ref=f4e592] [cursor=pointer]
                            - generic [ref=f4e594]:
                              - listitem:
                                - link "Silver":
                                  - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWSP5L3/ref=cs_sr_dp_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-2
                                  - generic [ref=f4e595] [cursor=pointer]
                - listitem [ref=f4e599]:
                  - generic [ref=f4e605]:
                    - link [aria-hidden] [ref=f4e611] [cursor=pointer]:
                      - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-3
                    - generic [ref=f4e616]:
                      - link [ref=f4e618] [cursor=pointer]:
                        - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-3
                        - 'heading "Lenovo Tab (Smartchoice) | 10.1 Inch Display| Wi-Fi Only| 4 GB RAM + 64 GB ROM (Expandable up to 1 TB)| Metal Body| Dual Speakers with Dolby Atmos| Android 14| Color: Polar Blue" [level=2] [ref=f4e619]'
                      - generic [ref=f4e620]:
                        - generic [ref=f4e621]:
                          - text: "4.3"
                          - button "4.3 out of 5 stars, rating details" [ref=f4e623] [cursor=pointer]:
                            - generic [ref=f4e625]: 4.3 out of 5 stars
                          - link "679 ratings" [ref=f4e627] [cursor=pointer]:
                            - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-3#customerReviews
                            - text: (679)
                        - generic [ref=f4e628]: 2K+ bought in past month
                      - generic [ref=f4e631]:
                        - generic [ref=f4e632]:
                          - generic [ref=f4e634]:
                            - generic [ref=f4e635]: Price, product page
                            - 'link "₹16,799 M.R.P: ₹18,000 M.R.P: ₹18,000" [ref=f4e636] [cursor=pointer]':
                              - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-3
                              - generic [ref=f4e637]:
                                - generic [ref=f4e638]: ₹16,799
                                - generic [aria-hidden] [ref=f4e639]: ₹16,799
                              - generic [ref=f4e640]: "M.R.P: ₹18,000"
                              - generic [ref=f4e641]:
                                - text: "M.R.P:"
                                - generic [ref=f4e642]:
                                  - generic [ref=f4e643]: ₹18,000
                                  - text: ₹18,000
                            - text: (7% off)
                          - generic [ref=f4e647]:
                            - generic [ref=f4e648]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e649]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e652]:
                          - generic [ref=f4e653]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e655]: Or fastest delivery Today
                        - generic [ref=f4e670] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e671]
                          - generic [aria-hidden] [ref=f4e672]: Add to cart
                        - group "colours available" [ref=f4e674]:
                          - list [ref=f4e675]:
                            - generic [ref=f4e676]:
                              - listitem:
                                - link "Polar Blue":
                                  - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-3
                                  - generic [ref=f4e677] [cursor=pointer]
                            - generic [ref=f4e679]:
                              - listitem:
                                - link "Grey":
                                  - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0G7F4FJSC/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-3
                                  - generic [ref=f4e680] [cursor=pointer]
          - generic [ref=f4e686]:
            - link "Sponsored ad from Lenovo Tablets. \"The Ultimate Entertainment Tablet.\" Shop Lenovo Tablets." [ref=f4e687] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJbyqLIoUdkFkUTHJ-BHbKbKQx3ESp67d2GlaZTNy7ElicO2JZ_pc5C9YIvELlB_gL9ghseAP-ADUpiD1rM7VPec-Tina_PPr54-H5WeGKAz7_uGhK-91R9U1YWd7SrLkAqe0Ke9PrvbNRVYcD2Z0d5uPumrP67mpRYsPR83B2JXVxcB_IspKXVbqklCH4_UATTYNa9izfDsovyw9ign7yHNafnro-pbpdV17bLUr12ul13cdzEhYRHNMSRHlacgJTrI0yQie8Gn5cXgSXuVZPckqr9gERGnIWBKBlQWshIAK1Qckw7a702QTwOfkhMQgytOURDzJM3AmgrtdIAqLmAEaJhknBYjyjJOMi2-Qb7htbHqOY5lD23MDbLuO7VrYsUcWblvB3tA7qCqlNbj1_fenr9-u25Xn_0aujqi-kCCETUUTIJRlTVLEDdv1dzfMA3PHK79rI8OkHRuoxhItVpgZSzTghXdiG_exRLMlGiyRcUtmlS1zZl10-2eRkbRtPpd18ct66fP6nHPKdhuN8_Pz-v-UGoznBWENGs5IA0mapalIA2qrJQK5DUWgdQQFiGpHFlFL6TRF7f2tARdkqgcIG1CWhCYUhNGe7aCxoEpOYAADSooCm5rUHfZbnj8OggM4rtEYFzGm6TwudF6bsxBHBU5iHdZSikOWZExHsIeQqzg9_-0tHY7kvryiXUcxxRvl4pQUl_ownKSE39Qszbl-P9saiykOYzwr8lOqSxAKktDSWqIgtCS5lughZbXw5oOuOs0vj7T-qP8X6Czo-w&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_bkgd&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
            - generic [ref=f4e688]:
              - generic [ref=f4e690]:
                - link "Lenovo Tablets" [ref=f4e692] [cursor=pointer]:
                  - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJbyqLIoUdkFkUTHJ-BHbKbKQx3ESp67d2GlaZTNy7ElicO2JZ_pc5C9YIvELlB_gL9ghseAP-ADUpiD1rM7VPec-Tina_PPr54-H5WeGKAz7_uGhK-91R9U1YWd7SrLkAqe0Ke9PrvbNRVYcD2Z0d5uPumrP67mpRYsPR83B2JXVxcB_IspKXVbqklCH4_UATTYNa9izfDsovyw9ign7yHNafnro-pbpdV17bLUr12ul13cdzEhYRHNMSRHlacgJTrI0yQie8Gn5cXgSXuVZPckqr9gERGnIWBKBlQWshIAK1Qckw7a702QTwOfkhMQgytOURDzJM3AmgrtdIAqLmAEaJhknBYjyjJOMi2-Qb7htbHqOY5lD23MDbLuO7VrYsUcWblvB3tA7qCqlNbj1_fenr9-u25Xn_0aujqi-kCCETUUTIJRlTVLEDdv1dzfMA3PHK79rI8OkHRuoxhItVpgZSzTghXdiG_exRLMlGiyRcUtmlS1zZl10-2eRkbRtPpd18ct66fP6nHPKdhuN8_Pz-v-UGoznBWENGs5IA0mapalIA2qrJQK5DUWgdQQFiGpHFlFL6TRF7f2tARdkqgcIG1CWhCYUhNGe7aCxoEpOYAADSooCm5rUHfZbnj8OggM4rtEYFzGm6TwudF6bsxBHBU5iHdZSikOWZExHsIeQqzg9_-0tHY7kvryiXUcxxRvl4pQUl_ownKSE39Qszbl-P9saiykOYzwr8lOqSxAKktDSWqIgtCS5lughZbXw5oOuOs0vj7T-qP8X6Czo-w&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_logo&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                  - img "Lenovo Tablets" [ref=f4e694]
                - generic [ref=f4e696]:
                  - link "The Ultimate Entertainment Tablet" [ref=f4e697] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJbyqLIoUdkFkUTHJ-BHbKbKQx3ESp67d2GlaZTNy7ElicO2JZ_pc5C9YIvELlB_gL9ghseAP-ADUpiD1rM7VPec-Tina_PPr54-H5WeGKAz7_uGhK-91R9U1YWd7SrLkAqe0Ke9PrvbNRVYcD2Z0d5uPumrP67mpRYsPR83B2JXVxcB_IspKXVbqklCH4_UATTYNa9izfDsovyw9ign7yHNafnro-pbpdV17bLUr12ul13cdzEhYRHNMSRHlacgJTrI0yQie8Gn5cXgSXuVZPckqr9gERGnIWBKBlQWshIAK1Qckw7a702QTwOfkhMQgytOURDzJM3AmgrtdIAqLmAEaJhknBYjyjJOMi2-Qb7htbHqOY5lD23MDbLuO7VrYsUcWblvB3tA7qCqlNbj1_fenr9-u25Xn_0aujqi-kCCETUUTIJRlTVLEDdv1dzfMA3PHK79rI8OkHRuoxhItVpgZSzTghXdiG_exRLMlGiyRcUtmlS1zZl10-2eRkbRtPpd18ct66fP6nHPKdhuN8_Pz-v-UGoznBWENGs5IA0mapalIA2qrJQK5DUWgdQQFiGpHFlFL6TRF7f2tARdkqgcIG1CWhCYUhNGe7aCxoEpOYAADSooCm5rUHfZbnj8OggM4rtEYFzGm6TwudF6bsxBHBU5iHdZSikOWZExHsIeQqzg9_-0tHY7kvryiXUcxxRvl4pQUl_ownKSE39Qszbl-P9saiykOYzwr8lOqSxAKktDSWqIgtCS5lughZbXw5oOuOs0vj7T-qP8X6Czo-w&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_hl&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                    - generic [ref=f4e698]:
                      - generic [ref=f4e699]: The Ultimate Entertainment Tablet
                      - generic [aria-hidden] [ref=f4e700]: The Ultimate Entertainment Tablet
                  - generic [ref=f4e701]:
                    - button "Leave feedback on Sponsored ad" [ref=f4e705] [cursor=pointer]: Sponsored
                    - generic [ref=f4e707]: "|"
                    - generic [ref=f4e708]: Top 10 best-selling brand in tablets
                    - generic [ref=f4e709]: "|"
                    - link "Shop Lenovo Tablets" [ref=f4e711] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJbyqLIoUdkFkUTHJ-BHbKbKQx3ESp67d2GlaZTNy7ElicO2JZ_pc5C9YIvELlB_gL9ghseAP-ADUpiD1rM7VPec-Tina_PPr54-H5WeGKAz7_uGhK-91R9U1YWd7SrLkAqe0Ke9PrvbNRVYcD2Z0d5uPumrP67mpRYsPR83B2JXVxcB_IspKXVbqklCH4_UATTYNa9izfDsovyw9ign7yHNafnro-pbpdV17bLUr12ul13cdzEhYRHNMSRHlacgJTrI0yQie8Gn5cXgSXuVZPckqr9gERGnIWBKBlQWshIAK1Qckw7a702QTwOfkhMQgytOURDzJM3AmgrtdIAqLmAEaJhknBYjyjJOMi2-Qb7htbHqOY5lD23MDbLuO7VrYsUcWblvB3tA7qCqlNbj1_fenr9-u25Xn_0aujqi-kCCETUUTIJRlTVLEDdv1dzfMA3PHK79rI8OkHRuoxhItVpgZSzTghXdiG_exRLMlGiyRcUtmlS1zZl10-2eRkbRtPpd18ct66fP6nHPKdhuN8_Pz-v-UGoznBWENGs5IA0mapalIA2qrJQK5DUWgdQQFiGpHFlFL6TRF7f2tARdkqgcIG1CWhCYUhNGe7aCxoEpOYAADSooCm5rUHfZbnj8OggM4rtEYFzGm6TwudF6bsxBHBU5iHdZSikOWZExHsIeQqzg9_-0tHY7kvryiXUcxxRvl4pQUl_ownKSE39Qszbl-P9saiykOYzwr8lOqSxAKktDSWqIgtCS5lughZbXw5oOuOs0vj7T-qP8X6Czo-w&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_cta&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                      - generic [ref=f4e714]:
                        - text: Shop Lenovo
                        - generic [ref=f4e715]: Tablets
              - group [ref=f4e719]:
                - group [ref=f4e723]:
                  - list [ref=f4e724]:
                    - listitem [ref=f4e725]:
                      - generic [ref=f4e727]:
                        - link [aria-hidden] [ref=f4e728] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2EmQhv0icpnbjPFplMxrPjGODY0_sUVO6yE8g-A_KD_AX7JBY8Ad8ABIpSJzVkc7jXp0yPvz14_u3e5XHuiTORv587song0WtJDaOQ5rGVzBhHfk0uD41N2l-MVmx_jFfDNShN3QTm-VvzzuTpSurm4n_UJKVpqw022JTWN6ZGsGhbs-Gtu9MK8_K9wkt3vGMVR7NXd82vYHrLG2relMqv7hVYEFRjiPIaI6zBHEK4zSJUwoDHlYeoDW6ztJmnFafFwHACSqKGIN9BOyNgIm1uzSFjtvoFAHgEV1TAnCWJBTzOEvBpQRubwGMclIAhuKU0xzgLOU05dJLw9ddC5reeGybM8dzp9Bxx45rw7GzsKFlT09m3llNKZeEo68_P37-cmNVn_yt3D9Re9oWBKGjdEVBkOVuW5EOHNfvH5hnZsOrvLIM3WRvHKDqO2Ozx0rfGROee2tH_x87Y7UzJjtD_0NW1SNzZV8NRpdYjy2HR7ImfSqVP5QizlnRb7W2223z30qtFWuhbYu0DGFoGK4yHvqvGYE5gSyJSK7xelQgiHMYE02ob2KiiWpPVkS10-3Wi1wTgQh6IZGpghUghG0JyKIYgB4KMCAh6amECBgRUo81xIo6ymmoDdQwe3_eHS1GvwE9Nb7D&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_bkgd&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                        - link [ref=f4e730] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2EmQhv0icpnbjPFplMxrPjGODY0_sUVO6yE8g-A_KD_AX7JBY8Ad8ABIpSJzVkc7jXp0yPvz14_u3e5XHuiTORv587song0WtJDaOQ5rGVzBhHfk0uD41N2l-MVmx_jFfDNShN3QTm-VvzzuTpSurm4n_UJKVpqw022JTWN6ZGsGhbs-Gtu9MK8_K9wkt3vGMVR7NXd82vYHrLG2relMqv7hVYEFRjiPIaI6zBHEK4zSJUwoDHlYeoDW6ztJmnFafFwHACSqKGIN9BOyNgIm1uzSFjtvoFAHgEV1TAnCWJBTzOEvBpQRubwGMclIAhuKU0xzgLOU05dJLw9ddC5reeGybM8dzp9Bxx45rw7GzsKFlT09m3llNKZeEo68_P37-cmNVn_yt3D9Re9oWBKGjdEVBkOVuW5EOHNfvH5hnZsOrvLIM3WRvHKDqO2Ozx0rfGROee2tH_x87Y7UzJjtD_0NW1SNzZV8NRpdYjy2HR7ImfSqVP5QizlnRb7W2223z30qtFWuhbYu0DGFoGK4yHvqvGYE5gSyJSK7xelQgiHMYE02ob2KiiWpPVkS10-3Wi1wTgQh6IZGpghUghG0JyKIYgB4KMCAh6amECBgRUo81xIo6ymmoDdQwe3_eHS1GvwE9Nb7D&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_img&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                          - img "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e733]
                        - generic [ref=f4e734]:
                          - link [aria-hidden] [ref=f4e735] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2EmQhv0icpnbjPFplMxrPjGODY0_sUVO6yE8g-A_KD_AX7JBY8Ad8ABIpSJzVkc7jXp0yPvz14_u3e5XHuiTORv587song0WtJDaOQ5rGVzBhHfk0uD41N2l-MVmx_jFfDNShN3QTm-VvzzuTpSurm4n_UJKVpqw022JTWN6ZGsGhbs-Gtu9MK8_K9wkt3vGMVR7NXd82vYHrLG2relMqv7hVYEFRjiPIaI6zBHEK4zSJUwoDHlYeoDW6ztJmnFafFwHACSqKGIN9BOyNgIm1uzSFjtvoFAHgEV1TAnCWJBTzOEvBpQRubwGMclIAhuKU0xzgLOU05dJLw9ddC5reeGybM8dzp9Bxx45rw7GzsKFlT09m3llNKZeEo68_P37-cmNVn_yt3D9Re9oWBKGjdEVBkOVuW5EOHNfvH5hnZsOrvLIM3WRvHKDqO2Ozx0rfGROee2tH_x87Y7UzJjtD_0NW1SNzZV8NRpdYjy2HR7ImfSqVP5QizlnRb7W2223z30qtFWuhbYu0DGFoGK4yHvqvGYE5gSyJSK7xelQgiHMYE02ob2KiiWpPVkS10-3Wi1wTgQh6IZGpghUghG0JyKIYgB4KMCAh6amECBgRUo81xIo6ymmoDdQwe3_eHS1GvwE9Nb7D&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_bkgd&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                          - link "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e737] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2EmQhv0icpnbjPFplMxrPjGODY0_sUVO6yE8g-A_KD_AX7JBY8Ad8ABIpSJzVkc7jXp0yPvz14_u3e5XHuiTORv587song0WtJDaOQ5rGVzBhHfk0uD41N2l-MVmx_jFfDNShN3QTm-VvzzuTpSurm4n_UJKVpqw022JTWN6ZGsGhbs-Gtu9MK8_K9wkt3vGMVR7NXd82vYHrLG2relMqv7hVYEFRjiPIaI6zBHEK4zSJUwoDHlYeoDW6ztJmnFafFwHACSqKGIN9BOyNgIm1uzSFjtvoFAHgEV1TAnCWJBTzOEvBpQRubwGMclIAhuKU0xzgLOU05dJLw9ddC5reeGybM8dzp9Bxx45rw7GzsKFlT09m3llNKZeEo68_P37-cmNVn_yt3D9Re9oWBKGjdEVBkOVuW5EOHNfvH5hnZsOrvLIM3WRvHKDqO2Ozx0rfGROee2tH_x87Y7UzJjtD_0NW1SNzZV8NRpdYjy2HR7ImfSqVP5QizlnRb7W2223z30qtFWuhbYu0DGFoGK4yHvqvGYE5gSyJSK7xelQgiHMYE02ob2KiiWpPVkS10-3Wi1wTgQh6IZGpghUghG0JyKIYgB4KMCAh6amECBgRUo81xIo6ymmoDdQwe3_eHS1GvwE9Nb7D&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_title&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                            - generic [ref=f4e738]:
                              - generic [ref=f4e739]: Lenovo Idea Tab (Smartchoice) | WiFi Only |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey
                              - generic [aria-hidden] [ref=f4e740]: Lenovo Idea Tab (Smartchoice) | WiFi Only |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4…
                          - link "Rated 4.2 out of 5 stars by 35 reviews. Go to review section." [ref=f4e741] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2EmQhv0icpnbjPFplMxrPjGODY0_sUVO6yE8g-A_KD_AX7JBY8Ad8ABIpSJzVkc7jXp0yPvz14_u3e5XHuiTORv587song0WtJDaOQ5rGVzBhHfk0uD41N2l-MVmx_jFfDNShN3QTm-VvzzuTpSurm4n_UJKVpqw022JTWN6ZGsGhbs-Gtu9MK8_K9wkt3vGMVR7NXd82vYHrLG2relMqv7hVYEFRjiPIaI6zBHEK4zSJUwoDHlYeoDW6ztJmnFafFwHACSqKGIN9BOyNgIm1uzSFjtvoFAHgEV1TAnCWJBTzOEvBpQRubwGMclIAhuKU0xzgLOU05dJLw9ddC5reeGybM8dzp9Bxx45rw7GzsKFlT09m3llNKZeEo68_P37-cmNVn_yt3D9Re9oWBKGjdEVBkOVuW5EOHNfvH5hnZsOrvLIM3WRvHKDqO2Ozx0rfGROee2tH_x87Y7UzJjtD_0NW1SNzZV8NRpdYjy2HR7ImfSqVP5QizlnRb7W2223z30qtFWuhbYu0DGFoGK4yHvqvGYE5gSyJSK7xelQgiHMYE02ob2KiiWpPVkS10-3Wi1wTgQh6IZGpghUghG0JyKIYgB4KMCAh6amECBgRUo81xIo6ymmoDdQwe3_eHS1GvwE9Nb7D&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_rating&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d#customerReviews
                            - generic [ref=f4e742]:
                              - generic [ref=f4e743]: "4.2"
                              - generic [ref=f4e744]: 4.2 out of 5 stars.
                              - generic [ref=f4e746]: "35"
                          - link "₹25,999.00" [ref=f4e748] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2EmQhv0icpnbjPFplMxrPjGODY0_sUVO6yE8g-A_KD_AX7JBY8Ad8ABIpSJzVkc7jXp0yPvz14_u3e5XHuiTORv587song0WtJDaOQ5rGVzBhHfk0uD41N2l-MVmx_jFfDNShN3QTm-VvzzuTpSurm4n_UJKVpqw022JTWN6ZGsGhbs-Gtu9MK8_K9wkt3vGMVR7NXd82vYHrLG2relMqv7hVYEFRjiPIaI6zBHEK4zSJUwoDHlYeoDW6ztJmnFafFwHACSqKGIN9BOyNgIm1uzSFjtvoFAHgEV1TAnCWJBTzOEvBpQRubwGMclIAhuKU0xzgLOU05dJLw9ddC5reeGybM8dzp9Bxx45rw7GzsKFlT09m3llNKZeEo68_P37-cmNVn_yt3D9Re9oWBKGjdEVBkOVuW5EOHNfvH5hnZsOrvLIM3WRvHKDqO2Ozx0rfGROee2tH_x87Y7UzJjtD_0NW1SNzZV8NRpdYjy2HR7ImfSqVP5QizlnRb7W2223z30qtFWuhbYu0DGFoGK4yHvqvGYE5gSyJSK7xelQgiHMYE02ob2KiiWpPVkS10-3Wi1wTgQh6IZGpghUghG0JyKIYgB4KMCAh6amECBgRUo81xIo6ymmoDdQwe3_eHS1GvwE9Nb7D&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_price&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                            - generic [ref=f4e750]:
                              - generic [ref=f4e751]: ₹25,999.00
                              - generic [aria-hidden] [ref=f4e752]:
                                - text: ₹
                                - generic [ref=f4e753]:
                                  - text: 25,999
                                  - generic [ref=f4e754]: .
                                - text: "00"
                          - generic [ref=f4e755]: "M.R.P: ₹45,000.00"
                    - listitem [ref=f4e758]:
                      - generic [ref=f4e760]:
                        - link [aria-hidden] [ref=f4e761] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxIxM7CbKQ7ZjEaWo3z1bZjMYz48Tg2BN71JQu8hMI_oPyA_wFOyQW_AEfgEQKEmd1pPO4V6dIDn_9-P7tXumxqSrTwXg28-BJb14pKLXjkCXRFYp5E54G16f2JskuRkveORbznt73-17s8OzteXO08KC-GY0fqlCrQ63eUOry4s7ECg5NZ9p3xu6k9Kx4n7L8nUh56dHMGzu23_PchdMt3xSKL24VlDOckRXiLCNpjAVDURJHCUOBCEsP8Bpfp0k9SsrP8wCQGOd5RMA-AvZGwJXKXZYg16s18wCIFVszCkgax4yIKE3ApQpubwGCM5oDjqNEsAyQNBEsEepLa2x6XWT7w6FjT13fmyDXG7qeg4bu3EFdZ3Iy9c8qWrEgH339-fHzl5tu-cnfyv0TlacNWZabWkuRZQhbDU09cL1x58A-s2t-6VXXMm3-xgW6ubM2eyzNnTUSmb92zf-xs5Y7a7SzzD9kWT6yl85Vb3BJzKjrihU01E-F4ofCSgiedyRpu93W_60kLbmEtxKVLLlvWdM5HMDXnKKMIh6vaGaI6irHiGQoooZc3UTUUPQ21BS92WpV88xQgAraIYVMIxqQw4YKoKIEoI0DAmhI2zqlMsGUViMD87yKMxYaPT1M35-3BvPBbzfTvrY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_bkgd&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                        - link [ref=f4e763] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxIxM7CbKQ7ZjEaWo3z1bZjMYz48Tg2BN71JQu8hMI_oPyA_wFOyQW_AEfgEQKEmd1pPO4V6dIDn_9-P7tXumxqSrTwXg28-BJb14pKLXjkCXRFYp5E54G16f2JskuRkveORbznt73-17s8OzteXO08KC-GY0fqlCrQ63eUOry4s7ECg5NZ9p3xu6k9Kx4n7L8nUh56dHMGzu23_PchdMt3xSKL24VlDOckRXiLCNpjAVDURJHCUOBCEsP8Bpfp0k9SsrP8wCQGOd5RMA-AvZGwJXKXZYg16s18wCIFVszCkgax4yIKE3ApQpubwGCM5oDjqNEsAyQNBEsEepLa2x6XWT7w6FjT13fmyDXG7qeg4bu3EFdZ3Iy9c8qWrEgH339-fHzl5tu-cnfyv0TlacNWZabWkuRZQhbDU09cL1x58A-s2t-6VXXMm3-xgW6ubM2eyzNnTUSmb92zf-xs5Y7a7SzzD9kWT6yl85Vb3BJzKjrihU01E-F4ofCSgiedyRpu93W_60kLbmEtxKVLLlvWdM5HMDXnKKMIh6vaGaI6irHiGQoooZc3UTUUPQ21BS92WpV88xQgAraIYVMIxqQw4YKoKIEoI0DAmhI2zqlMsGUViMD87yKMxYaPT1M35-3BvPBbzfTvrY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_img&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                          - img "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e766]
                        - generic [ref=f4e767]:
                          - link [aria-hidden] [ref=f4e768] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxIxM7CbKQ7ZjEaWo3z1bZjMYz48Tg2BN71JQu8hMI_oPyA_wFOyQW_AEfgEQKEmd1pPO4V6dIDn_9-P7tXumxqSrTwXg28-BJb14pKLXjkCXRFYp5E54G16f2JskuRkveORbznt73-17s8OzteXO08KC-GY0fqlCrQ63eUOry4s7ECg5NZ9p3xu6k9Kx4n7L8nUh56dHMGzu23_PchdMt3xSKL24VlDOckRXiLCNpjAVDURJHCUOBCEsP8Bpfp0k9SsrP8wCQGOd5RMA-AvZGwJXKXZYg16s18wCIFVszCkgax4yIKE3ApQpubwGCM5oDjqNEsAyQNBEsEepLa2x6XWT7w6FjT13fmyDXG7qeg4bu3EFdZ3Iy9c8qWrEgH339-fHzl5tu-cnfyv0TlacNWZabWkuRZQhbDU09cL1x58A-s2t-6VXXMm3-xgW6ubM2eyzNnTUSmb92zf-xs5Y7a7SzzD9kWT6yl85Vb3BJzKjrihU01E-F4ofCSgiedyRpu93W_60kLbmEtxKVLLlvWdM5HMDXnKKMIh6vaGaI6irHiGQoooZc3UTUUPQ21BS92WpV88xQgAraIYVMIxqQw4YKoKIEoI0DAmhI2zqlMsGUViMD87yKMxYaPT1M35-3BvPBbzfTvrY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_bkgd&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                          - link "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e770] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxIxM7CbKQ7ZjEaWo3z1bZjMYz48Tg2BN71JQu8hMI_oPyA_wFOyQW_AEfgEQKEmd1pPO4V6dIDn_9-P7tXumxqSrTwXg28-BJb14pKLXjkCXRFYp5E54G16f2JskuRkveORbznt73-17s8OzteXO08KC-GY0fqlCrQ63eUOry4s7ECg5NZ9p3xu6k9Kx4n7L8nUh56dHMGzu23_PchdMt3xSKL24VlDOckRXiLCNpjAVDURJHCUOBCEsP8Bpfp0k9SsrP8wCQGOd5RMA-AvZGwJXKXZYg16s18wCIFVszCkgax4yIKE3ApQpubwGCM5oDjqNEsAyQNBEsEepLa2x6XWT7w6FjT13fmyDXG7qeg4bu3EFdZ3Iy9c8qWrEgH339-fHzl5tu-cnfyv0TlacNWZabWkuRZQhbDU09cL1x58A-s2t-6VXXMm3-xgW6ubM2eyzNnTUSmb92zf-xs5Y7a7SzzD9kWT6yl85Vb3BJzKjrihU01E-F4ofCSgiedyRpu93W_60kLbmEtxKVLLlvWdM5HMDXnKKMIh6vaGaI6irHiGQoooZc3UTUUPQ21BS92WpV88xQgAraIYVMIxqQw4YKoKIEoI0DAmhI2zqlMsGUViMD87yKMxYaPT1M35-3BvPBbzfTvrY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_title&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                            - generic [ref=f4e771]:
                              - generic [ref=f4e772]: Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey
                              - generic [aria-hidden] [ref=f4e773]: Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040m…
                          - link "Rated 4 out of 5 stars by 94 reviews. Go to review section." [ref=f4e774] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxIxM7CbKQ7ZjEaWo3z1bZjMYz48Tg2BN71JQu8hMI_oPyA_wFOyQW_AEfgEQKEmd1pPO4V6dIDn_9-P7tXumxqSrTwXg28-BJb14pKLXjkCXRFYp5E54G16f2JskuRkveORbznt73-17s8OzteXO08KC-GY0fqlCrQ63eUOry4s7ECg5NZ9p3xu6k9Kx4n7L8nUh56dHMGzu23_PchdMt3xSKL24VlDOckRXiLCNpjAVDURJHCUOBCEsP8Bpfp0k9SsrP8wCQGOd5RMA-AvZGwJXKXZYg16s18wCIFVszCkgax4yIKE3ApQpubwGCM5oDjqNEsAyQNBEsEepLa2x6XWT7w6FjT13fmyDXG7qeg4bu3EFdZ3Iy9c8qWrEgH339-fHzl5tu-cnfyv0TlacNWZabWkuRZQhbDU09cL1x58A-s2t-6VXXMm3-xgW6ubM2eyzNnTUSmb92zf-xs5Y7a7SzzD9kWT6yl85Vb3BJzKjrihU01E-F4ofCSgiedyRpu93W_60kLbmEtxKVLLlvWdM5HMDXnKKMIh6vaGaI6irHiGQoooZc3UTUUPQ21BS92WpV88xQgAraIYVMIxqQw4YKoKIEoI0DAmhI2zqlMsGUViMD87yKMxYaPT1M35-3BvPBbzfTvrY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_rating&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d#customerReviews
                            - generic [ref=f4e775]:
                              - generic [ref=f4e776]: "4"
                              - generic [ref=f4e777]: 4 out of 5 stars.
                              - generic [ref=f4e779]: "94"
                          - link "₹27,999.00" [ref=f4e781] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxIxM7CbKQ7ZjEaWo3z1bZjMYz48Tg2BN71JQu8hMI_oPyA_wFOyQW_AEfgEQKEmd1pPO4V6dIDn_9-P7tXumxqSrTwXg28-BJb14pKLXjkCXRFYp5E54G16f2JskuRkveORbznt73-17s8OzteXO08KC-GY0fqlCrQ63eUOry4s7ECg5NZ9p3xu6k9Kx4n7L8nUh56dHMGzu23_PchdMt3xSKL24VlDOckRXiLCNpjAVDURJHCUOBCEsP8Bpfp0k9SsrP8wCQGOd5RMA-AvZGwJXKXZYg16s18wCIFVszCkgax4yIKE3ApQpubwGCM5oDjqNEsAyQNBEsEepLa2x6XWT7w6FjT13fmyDXG7qeg4bu3EFdZ3Iy9c8qWrEgH339-fHzl5tu-cnfyv0TlacNWZabWkuRZQhbDU09cL1x58A-s2t-6VXXMm3-xgW6ubM2eyzNnTUSmb92zf-xs5Y7a7SzzD9kWT6yl85Vb3BJzKjrihU01E-F4ofCSgiedyRpu93W_60kLbmEtxKVLLlvWdM5HMDXnKKMIh6vaGaI6irHiGQoooZc3UTUUPQ21BS92WpV88xQgAraIYVMIxqQw4YKoKIEoI0DAmhI2zqlMsGUViMD87yKMxYaPT1M35-3BvPBbzfTvrY&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_price&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                            - generic [ref=f4e783]:
                              - generic [ref=f4e784]: ₹27,999.00
                              - generic [aria-hidden] [ref=f4e785]:
                                - text: ₹
                                - generic [ref=f4e786]:
                                  - text: 27,999
                                  - generic [ref=f4e787]: .
                                - text: "00"
                          - generic [ref=f4e788]: "M.R.P: ₹48,000.00"
                    - listitem [ref=f4e791]:
                      - generic [ref=f4e793]:
                        - link [aria-hidden] [ref=f4e794] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdozjNLWbZ6tsRuOZcWxw7Ik9akoX-QkE_0H5Af6CHRIL_oAPQCIFibM60nncq1PGh79-fP92r_LYkKXZcDKfe8qJs6iVpMZxSNP4CiasrZwG16fWJs0vxivWO-YLRxv4Ay-xWf72vD1eeoq2GU8eyoraVNRmS2qKyztTMzg07NnAnrjTyrPyfUKLdzxjlUdzb2JbvuO5S7tfvSmVX9wqsKAoxxFkNMdZgjiFcZrEKYUBDysP0BpdZ2kzTqvPiwDgBBVFjME-AvZGwKTaXZpC12u0iwDwiK4pAThLEop5nKXgUga3twBGOSkAQ3HKaQ5wlnKacvmlOTG8PrT80ci2Zq7vTaHrjVzPhiN3YcO-PT2Z-Wc1tVwSj77-_Pj5y02_-uRv5f6J2tOWKIpttSOJoqJ0Wqp84HqT3oF1ZjX8yqu-aVjsjQs0Y2du9lgZO3PMc3_tGv9jZ6525nhnGn_IqnpkrewrZ3iJjbjv8kjR5U-l8odSxDkreoKw3W6b_1YSVkxAW4EIpjgwTWekWvJrRmBOIEsikuu8HhUI4hzGRBfrm5joktZVVElrdzr1Itcl0ALdkChUxSoQw5YMFEkKQBcFGJCQdDVCRIwIqcc6YkUd5TTUHS3M3p93hovhbysSvpk&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_bkgd&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                        - link [ref=f4e796] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdozjNLWbZ6tsRuOZcWxw7Ik9akoX-QkE_0H5Af6CHRIL_oAPQCIFibM60nncq1PGh79-fP92r_LYkKXZcDKfe8qJs6iVpMZxSNP4CiasrZwG16fWJs0vxivWO-YLRxv4Ay-xWf72vD1eeoq2GU8eyoraVNRmS2qKyztTMzg07NnAnrjTyrPyfUKLdzxjlUdzb2JbvuO5S7tfvSmVX9wqsKAoxxFkNMdZgjiFcZrEKYUBDysP0BpdZ2kzTqvPiwDgBBVFjME-AvZGwKTaXZpC12u0iwDwiK4pAThLEop5nKXgUga3twBGOSkAQ3HKaQ5wlnKacvmlOTG8PrT80ci2Zq7vTaHrjVzPhiN3YcO-PT2Z-Wc1tVwSj77-_Pj5y02_-uRv5f6J2tOWKIpttSOJoqJ0Wqp84HqT3oF1ZjX8yqu-aVjsjQs0Y2du9lgZO3PMc3_tGv9jZ6525nhnGn_IqnpkrewrZ3iJjbjv8kjR5U-l8odSxDkreoKw3W6b_1YSVkxAW4EIpjgwTWekWvJrRmBOIEsikuu8HhUI4hzGRBfrm5joktZVVElrdzr1Itcl0ALdkChUxSoQw5YMFEkKQBcFGJCQdDVCRIwIqcc6YkUd5TTUHS3M3p93hovhbysSvpk&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_img&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                          - img "Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e799]
                        - generic [ref=f4e800]:
                          - link [aria-hidden] [ref=f4e801] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdozjNLWbZ6tsRuOZcWxw7Ik9akoX-QkE_0H5Af6CHRIL_oAPQCIFibM60nncq1PGh79-fP92r_LYkKXZcDKfe8qJs6iVpMZxSNP4CiasrZwG16fWJs0vxivWO-YLRxv4Ay-xWf72vD1eeoq2GU8eyoraVNRmS2qKyztTMzg07NnAnrjTyrPyfUKLdzxjlUdzb2JbvuO5S7tfvSmVX9wqsKAoxxFkNMdZgjiFcZrEKYUBDysP0BpdZ2kzTqvPiwDgBBVFjME-AvZGwKTaXZpC12u0iwDwiK4pAThLEop5nKXgUga3twBGOSkAQ3HKaQ5wlnKacvmlOTG8PrT80ci2Zq7vTaHrjVzPhiN3YcO-PT2Z-Wc1tVwSj77-_Pj5y02_-uRv5f6J2tOWKIpttSOJoqJ0Wqp84HqT3oF1ZjX8yqu-aVjsjQs0Y2du9lgZO3PMc3_tGv9jZ6525nhnGn_IqnpkrewrZ3iJjbjv8kjR5U-l8odSxDkreoKw3W6b_1YSVkxAW4EIpjgwTWekWvJrRmBOIEsikuu8HhUI4hzGRBfrm5joktZVVElrdzr1Itcl0ALdkChUxSoQw5YMFEkKQBcFGJCQdDVCRIwIqcc6YkUd5TTUHS3M3p93hovhbysSvpk&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_bkgd&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                          - link "Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f4e803] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdozjNLWbZ6tsRuOZcWxw7Ik9akoX-QkE_0H5Af6CHRIL_oAPQCIFibM60nncq1PGh79-fP92r_LYkKXZcDKfe8qJs6iVpMZxSNP4CiasrZwG16fWJs0vxivWO-YLRxv4Ay-xWf72vD1eeoq2GU8eyoraVNRmS2qKyztTMzg07NnAnrjTyrPyfUKLdzxjlUdzb2JbvuO5S7tfvSmVX9wqsKAoxxFkNMdZgjiFcZrEKYUBDysP0BpdZ2kzTqvPiwDgBBVFjME-AvZGwKTaXZpC12u0iwDwiK4pAThLEop5nKXgUga3twBGOSkAQ3HKaQ5wlnKacvmlOTG8PrT80ci2Zq7vTaHrjVzPhiN3YcO-PT2Z-Wc1tVwSj77-_Pj5y02_-uRv5f6J2tOWKIpttSOJoqJ0Wqp84HqT3oF1ZjX8yqu-aVjsjQs0Y2du9lgZO3PMc3_tGv9jZ6525nhnGn_IqnpkrewrZ3iJjbjv8kjR5U-l8odSxDkreoKw3W6b_1YSVkxAW4EIpjgwTWekWvJrRmBOIEsikuu8HhUI4hzGRBfrm5joktZVVElrdzr1Itcl0ALdkChUxSoQw5YMFEkKQBcFGJCQdDVCRIwIqcc6YkUd5TTUHS3M3p93hovhbysSvpk&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_title&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                            - generic [ref=f4e804]:
                              - generic [ref=f4e805]: Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey
                              - generic [aria-hidden] [ref=f4e806]: Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040m…
                          - link "Rated 3.8 out of 5 stars by 73 reviews. Go to review section." [ref=f4e807] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdozjNLWbZ6tsRuOZcWxw7Ik9akoX-QkE_0H5Af6CHRIL_oAPQCIFibM60nncq1PGh79-fP92r_LYkKXZcDKfe8qJs6iVpMZxSNP4CiasrZwG16fWJs0vxivWO-YLRxv4Ay-xWf72vD1eeoq2GU8eyoraVNRmS2qKyztTMzg07NnAnrjTyrPyfUKLdzxjlUdzb2JbvuO5S7tfvSmVX9wqsKAoxxFkNMdZgjiFcZrEKYUBDysP0BpdZ2kzTqvPiwDgBBVFjME-AvZGwKTaXZpC12u0iwDwiK4pAThLEop5nKXgUga3twBGOSkAQ3HKaQ5wlnKacvmlOTG8PrT80ci2Zq7vTaHrjVzPhiN3YcO-PT2Z-Wc1tVwSj77-_Pj5y02_-uRv5f6J2tOWKIpttSOJoqJ0Wqp84HqT3oF1ZjX8yqu-aVjsjQs0Y2du9lgZO3PMc3_tGv9jZ6525nhnGn_IqnpkrewrZ3iJjbjv8kjR5U-l8odSxDkreoKw3W6b_1YSVkxAW4EIpjgwTWekWvJrRmBOIEsikuu8HhUI4hzGRBfrm5joktZVVElrdzr1Itcl0ALdkChUxSoQw5YMFEkKQBcFGJCQdDVCRIwIqcc6YkUd5TTUHS3M3p93hovhbysSvpk&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_rating&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d#customerReviews
                            - generic [ref=f4e808]:
                              - generic [ref=f4e809]: "3.8"
                              - generic [ref=f4e810]: 3.8 out of 5 stars.
                              - generic [ref=f4e812]: "73"
                          - link "₹29,999.00" [ref=f4e814] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdozjNLWbZ6tsRuOZcWxw7Ik9akoX-QkE_0H5Af6CHRIL_oAPQCIFibM60nncq1PGh79-fP92r_LYkKXZcDKfe8qJs6iVpMZxSNP4CiasrZwG16fWJs0vxivWO-YLRxv4Ay-xWf72vD1eeoq2GU8eyoraVNRmS2qKyztTMzg07NnAnrjTyrPyfUKLdzxjlUdzb2JbvuO5S7tfvSmVX9wqsKAoxxFkNMdZgjiFcZrEKYUBDysP0BpdZ2kzTqvPiwDgBBVFjME-AvZGwKTaXZpC12u0iwDwiK4pAThLEop5nKXgUga3twBGOSkAQ3HKaQ5wlnKacvmlOTG8PrT80ci2Zq7vTaHrjVzPhiN3YcO-PT2Z-Wc1tVwSj77-_Pj5y02_-uRv5f6J2tOWKIpttSOJoqJ0Wqp84HqT3oF1ZjX8yqu-aVjsjQs0Y2du9lgZO3PMc3_tGv9jZ6525nhnGn_IqnpkrewrZ3iJjbjv8kjR5U-l8odSxDkreoKw3W6b_1YSVkxAW4EIpjgwTWekWvJrRmBOIEsikuu8HhUI4hzGRBfrm5joktZVVElrdzr1Itcl0ALdkChUxSoQw5YMFEkKQBcFGJCQdDVCRIwIqcc6YkUd5TTUHS3M3p93hovhbysSvpk&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617588%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_price&pd_rd_w=lpCQb&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=WmJag&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
                            - generic [ref=f4e816]:
                              - generic [ref=f4e817]: ₹29,999.00
                              - generic [aria-hidden] [ref=f4e818]:
                                - text: ₹
                                - generic [ref=f4e819]:
                                  - text: 29,999
                                  - generic [ref=f4e820]: .
                                - text: "00"
                          - generic [ref=f4e821]: "M.R.P: ₹53,000.00"
          - generic [ref=f4e825]:
            - heading "More results" [level=2] [ref=f4e829]
            - generic:
              - list:
                - listitem [ref=f4e830]:
                  - generic [ref=f4e836]:
                    - link [aria-hidden] [ref=f4e842] [cursor=pointer]:
                      - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_4?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-4
                    - generic [ref=f4e847]:
                      - link [ref=f4e849] [cursor=pointer]:
                        - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_4?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-4
                        - heading "DOMO Slate SL39 10.1-Inch 4G Tablet PC, 4GB RAM + 32GB inbuilt Storage, Dual SIM Slot,1TB Expandable, Octa Core CPU GPS, Bluetooth (Grey)" [level=2] [ref=f4e850]
                      - generic [ref=f4e851]:
                        - generic [ref=f4e852]:
                          - text: "3.8"
                          - button "3.8 out of 5 stars, rating details" [ref=f4e854] [cursor=pointer]:
                            - generic [ref=f4e856]: 3.8 out of 5 stars
                          - link "4 ratings" [ref=f4e858] [cursor=pointer]:
                            - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_4?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-4#customerReviews
                            - text: (4)
                        - generic [ref=f4e859]: 200+ bought in past month
                      - generic [ref=f4e862]:
                        - generic [ref=f4e863]:
                          - link "Limited time deal" [ref=f4e865] [cursor=pointer]:
                            - /url: /deals
                          - generic [ref=f4e871]:
                            - generic [ref=f4e872]: Price, product page
                            - 'link "₹7,549 M.R.P: ₹24,990 M.R.P: ₹24,990" [ref=f4e873] [cursor=pointer]':
                              - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_4?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-4
                              - generic [ref=f4e874]:
                                - generic [ref=f4e875]: ₹7,549
                                - generic [aria-hidden] [ref=f4e876]: ₹7,549
                              - generic [ref=f4e877]: "M.R.P: ₹24,990"
                              - generic [ref=f4e878]:
                                - text: "M.R.P:"
                                - generic [ref=f4e879]:
                                  - generic [ref=f4e880]: ₹24,990
                                  - text: ₹24,990
                            - text: (70% off)
                          - generic [ref=f4e883]:
                            - generic [ref=f4e884]: You pay ₹7,398.02
                            - text: with coupon
                        - generic [ref=f4e887]:
                          - generic [ref=f4e888]: FREE delivery Tue, 17 Nov
                          - generic [ref=f4e890]: Or fastest delivery Tomorrow, 15 Nov
                        - generic [ref=f4e905] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e906]
                          - generic [aria-hidden] [ref=f4e907]: Add to cart
                - listitem [ref=f4e910]:
                  - generic [ref=f4e916]:
                    - generic [ref=f4e918]:
                      - group "Best sellerin Tablets" [ref=f4e924]:
                        - generic "Best seller" [ref=f4e926]
                      - link [aria-hidden] [ref=f4e930] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-5
                    - generic [ref=f4e935]:
                      - link [ref=f4e937] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-5
                        - heading "Lenovo Idea Tab (Smartchoice) with Folio Keyboard + Tab Pen | Wi-Fi + 5G |11\" Display, 2.5K Resolution, 90Hz Refresh|8GB RAM, 256GB ROM| MediaTek Dimensity 6300| 7040mAh|4 Speakers| USB-C| Luna Grey" [level=2] [ref=f4e938]
                      - generic [ref=f4e939]:
                        - generic [ref=f4e940]:
                          - text: "4.3"
                          - button "4.3 out of 5 stars, rating details" [ref=f4e942] [cursor=pointer]:
                            - generic [ref=f4e944]: 4.3 out of 5 stars
                          - link "123 ratings" [ref=f4e946] [cursor=pointer]:
                            - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-5#customerReviews
                            - text: (123)
                        - generic [ref=f4e947]: 2K+ bought in past month
                      - generic [ref=f4e950]:
                        - generic [ref=f4e951]:
                          - generic [ref=f4e953]:
                            - generic [ref=f4e954]: Price, product page
                            - 'link "₹34,990 M.R.P: ₹52,000 M.R.P: ₹52,000" [ref=f4e955] [cursor=pointer]':
                              - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-5
                              - generic [ref=f4e956]:
                                - generic [ref=f4e957]: ₹34,990
                                - generic [aria-hidden] [ref=f4e958]: ₹34,990
                              - generic [ref=f4e959]: "M.R.P: ₹52,000"
                              - generic [ref=f4e960]:
                                - text: "M.R.P:"
                                - generic [ref=f4e961]:
                                  - generic [ref=f4e962]: ₹52,000
                                  - text: ₹52,000
                            - text: (33% off)
                          - generic [ref=f4e966]:
                            - generic [ref=f4e967]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e968]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e971]:
                          - generic [ref=f4e972]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e974]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e989] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e990]
                          - generic [aria-hidden] [ref=f4e991]: Add to cart
                - listitem [ref=f4e994]:
                  - generic [ref=f4e1000]:
                    - generic [ref=f4e1002]:
                      - group "Best sellerin Tablets" [ref=f4e1008]:
                        - generic "Best seller" [ref=f4e1010]
                      - link [aria-hidden] [ref=f4e1014] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_6?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-6
                    - generic [ref=f4e1019]:
                      - link [ref=f4e1021] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_6?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-6
                        - heading "Lenovo Idea Tab Smartchoice |11-inch 2.5K Clear Display, 90Hz Refresh Rate, 8GB RAM, 256GB ROM| MediaTek Dimensity 6300| 7040mAh Battery|4 Speakers| USB-C |Wi-Fi |AI-Enabled, Dolby Atmos, Luna Grey" [level=2] [ref=f4e1022]
                      - generic [ref=f4e1023]:
                        - generic [ref=f4e1024]:
                          - text: "4.4"
                          - button "4.4 out of 5 stars, rating details" [ref=f4e1026] [cursor=pointer]:
                            - generic [ref=f4e1028]: 4.4 out of 5 stars
                          - link "433 ratings" [ref=f4e1030] [cursor=pointer]:
                            - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_6?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-6#customerReviews
                            - text: (433)
                        - generic [ref=f4e1031]: 400+ bought in past month
                      - generic [ref=f4e1034]:
                        - generic [ref=f4e1035]:
                          - generic [ref=f4e1037]:
                            - generic [ref=f4e1038]: Price, product page
                            - 'link "₹29,999 M.R.P: ₹35,000 M.R.P: ₹35,000" [ref=f4e1039] [cursor=pointer]':
                              - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_6?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-6
                              - generic [ref=f4e1040]:
                                - generic [ref=f4e1041]: ₹29,999
                                - generic [aria-hidden] [ref=f4e1042]: ₹29,999
                              - generic [ref=f4e1043]: "M.R.P: ₹35,000"
                              - generic [ref=f4e1044]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1045]:
                                  - generic [ref=f4e1046]: ₹35,000
                                  - text: ₹35,000
                            - text: (14% off)
                          - generic [ref=f4e1050]:
                            - generic [ref=f4e1051]: Save extra with No Cost EMI
                            - generic [aria-hidden] [ref=f4e1052]: Save extra with No Cost EMI
                        - generic [ref=f4e1055]:
                          - generic [ref=f4e1056]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1058]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1073] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1074]
                          - generic [aria-hidden] [ref=f4e1075]: Add to cart
                - listitem [ref=f4e1078]:
                  - generic [ref=f4e1084]:
                    - link [aria-hidden] [ref=f4e1090] [cursor=pointer]:
                      - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_7?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-7
                    - generic [ref=f4e1095]:
                      - link [ref=f4e1097] [cursor=pointer]:
                        - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_7?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-7
                        - heading "Acer Iconia Tab10 | 10.36\" | 2K IPS Display, 480 Nit | Quad Speakers | 6GB + 128GB (Expandable) | Wi-Fi + (Calling)" [level=2] [ref=f4e1098]
                      - generic [ref=f4e1099]:
                        - generic [ref=f4e1100]:
                          - text: "3.6"
                          - button "3.6 out of 5 stars, rating details" [ref=f4e1102] [cursor=pointer]:
                            - generic [ref=f4e1104]: 3.6 out of 5 stars
                          - link "71 ratings" [ref=f4e1106] [cursor=pointer]:
                            - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_7?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-7#customerReviews
                            - text: (71)
                        - generic [ref=f4e1107]: 300+ bought in past month
                      - generic [ref=f4e1110]:
                        - generic [ref=f4e1111]:
                          - generic [ref=f4e1113]:
                            - generic [ref=f4e1114]: Price, product page
                            - 'link "₹16,999 M.R.P: ₹30,990 M.R.P: ₹30,990" [ref=f4e1115] [cursor=pointer]':
                              - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_7?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-7
                              - generic [ref=f4e1116]:
                                - generic [ref=f4e1117]: ₹16,999
                                - generic [aria-hidden] [ref=f4e1118]: ₹16,999
                              - generic [ref=f4e1119]: "M.R.P: ₹30,990"
                              - generic [ref=f4e1120]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1121]:
                                  - generic [ref=f4e1122]: ₹30,990
                                  - text: ₹30,990
                            - text: (45% off)
                          - generic [ref=f4e1126]:
                            - generic [ref=f4e1127]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1128]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1131]:
                          - generic [ref=f4e1132]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1134]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1149] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1150]
                          - generic [aria-hidden] [ref=f4e1151]: Add to cart
                - listitem [ref=f4e1154]:
                  - generic [ref=f4e1160]:
                    - link [aria-hidden] [ref=f4e1166] [cursor=pointer]:
                      - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_8?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-8
                    - generic [ref=f4e1171]:
                      - link [ref=f4e1173] [cursor=pointer]:
                        - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_8?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-8
                        - heading "OnePlus, Pad Go 2 [Smartchoice], 12.1 inch (30.73 CM), LCD, 8GB RAM, 256GB ROM, Wi-Fi + 5G, Quad Speakers, Eye Care,Shadow Black, AI Enabled" [level=2] [ref=f4e1174]
                      - generic [ref=f4e1175]:
                        - generic [ref=f4e1176]:
                          - text: "4.2"
                          - button "4.2 out of 5 stars, rating details" [ref=f4e1178] [cursor=pointer]:
                            - generic [ref=f4e1180]: 4.2 out of 5 stars
                          - link "1,093 ratings" [ref=f4e1182] [cursor=pointer]:
                            - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_8?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-8#customerReviews
                            - text: (1K)
                        - generic [ref=f4e1183]: 2K+ bought in past month
                      - generic [ref=f4e1186]:
                        - generic [ref=f4e1187]:
                          - generic [ref=f4e1189]:
                            - generic [ref=f4e1190]: Price, product page
                            - link "₹35,999" [ref=f4e1191] [cursor=pointer]:
                              - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_8?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-8
                              - generic [ref=f4e1192]:
                                - generic [ref=f4e1193]: ₹35,999
                                - generic [aria-hidden] [ref=f4e1194]: ₹35,999
                          - generic [ref=f4e1198]:
                            - generic [ref=f4e1199]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1200]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1201]: FREE delivery Tue, 17 Nov
                        - generic [ref=f4e1219] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1220]
                          - generic [aria-hidden] [ref=f4e1221]: Add to cart
                        - group "colours available" [ref=f4e1223]:
                          - list [ref=f4e1224]:
                            - generic [ref=f4e1225]:
                              - listitem:
                                - link "Shadow Black 1":
                                  - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-8
                                  - generic [ref=f4e1226] [cursor=pointer]
                            - generic [ref=f4e1228]:
                              - listitem:
                                - link "Lavender Drift":
                                  - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QM3YDM/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-8
                                  - generic [ref=f4e1229] [cursor=pointer]
                            - generic [ref=f4e1231]:
                              - listitem:
                                - link "Shadow Black":
                                  - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQNK1K/ref=cs_sr_dp_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-8
                                  - generic [ref=f4e1232] [cursor=pointer]
                - listitem [ref=f4e1236]:
                  - generic [ref=f4e1242]:
                    - link [aria-hidden] [ref=f4e1248] [cursor=pointer]:
                      - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_9?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-9
                    - generic [ref=f4e1253]:
                      - link [ref=f4e1255] [cursor=pointer]:
                        - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_9?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-9
                        - heading "Redmi Pad 2, 11-inch (27.94 CM), LCD Display - 2.5K Sharp & Clear, 6GB RAM, 128GB ROM, Wi-Fi + Cellular (4G), Quad Speakers, Dolby Atmos, Sky Blue, AI Enabled" [level=2] [ref=f4e1256]
                      - generic [ref=f4e1257]:
                        - generic [ref=f4e1258]:
                          - text: "4.3"
                          - button "4.3 out of 5 stars, rating details" [ref=f4e1260] [cursor=pointer]:
                            - generic [ref=f4e1262]: 4.3 out of 5 stars
                          - link "404 ratings" [ref=f4e1264] [cursor=pointer]:
                            - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_9?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-9#customerReviews
                            - text: (404)
                        - generic [ref=f4e1265]: 400+ bought in past month
                      - generic [ref=f4e1268]:
                        - generic [ref=f4e1269]:
                          - generic [ref=f4e1271]:
                            - generic [ref=f4e1272]: Price, product page
                            - 'link "₹21,999 M.R.P: ₹24,999 M.R.P: ₹24,999" [ref=f4e1273] [cursor=pointer]':
                              - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_9?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-9
                              - generic [ref=f4e1274]:
                                - generic [ref=f4e1275]: ₹21,999
                                - generic [aria-hidden] [ref=f4e1276]: ₹21,999
                              - generic [ref=f4e1277]: "M.R.P: ₹24,999"
                              - generic [ref=f4e1278]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1279]:
                                  - generic [ref=f4e1280]: ₹24,999
                                  - text: ₹24,999
                            - text: (12% off)
                          - generic [ref=f4e1284]:
                            - generic [ref=f4e1285]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1286]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1289]:
                          - generic [ref=f4e1290]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1292]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1307] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1308]
                          - generic [aria-hidden] [ref=f4e1309]: Add to cart
                        - group "colours available" [ref=f4e1311]:
                          - list [ref=f4e1312]:
                            - generic [ref=f4e1313]:
                              - listitem:
                                - link "Sky Blue":
                                  - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-9
                                  - generic [ref=f4e1314] [cursor=pointer]
                            - generic [ref=f4e1316]:
                              - listitem:
                                - link "Graphite Grey":
                                  - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRY7X7Y/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-9
                                  - generic [ref=f4e1317] [cursor=pointer]
                            - generic [ref=f4e1319]:
                              - listitem:
                                - link "With Pen Graphite Grey":
                                  - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0HD6BNRS4/ref=cs_sr_dp_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-9
                                  - generic [ref=f4e1320] [cursor=pointer]
                - listitem [ref=f4e1324]:
                  - generic [ref=f4e1330]:
                    - link [aria-hidden] [ref=f4e1336] [cursor=pointer]:
                      - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                    - generic [ref=f4e1341]:
                      - link [ref=f4e1343] [cursor=pointer]:
                        - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                        - heading "Android 16 10 inch Tablets, 20GB RAM 128GB ROM 2TB Expandable, 2.0GHz Quad-core Processor, 2 in 1 Tablet with Stylus Mouse Keyboard Case, 5G WiFi6, BT 5.0, 6000mAh, Widevine L1" [level=2] [ref=f4e1344]
                      - generic [ref=f4e1345]:
                        - generic [ref=f4e1346]:
                          - text: "4.0"
                          - button "4.0 out of 5 stars, rating details" [ref=f4e1348] [cursor=pointer]:
                            - generic [ref=f4e1350]: 4.0 out of 5 stars
                          - link "155 ratings" [ref=f4e1352] [cursor=pointer]:
                            - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10#customerReviews
                            - text: (155)
                        - generic [ref=f4e1353]: 200+ bought in past month
                      - generic [ref=f4e1356]:
                        - generic [ref=f4e1357]:
                          - link "One-time purchase" [ref=f4e1359] [cursor=pointer]:
                            - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                          - generic [ref=f4e1361]:
                            - generic [ref=f4e1362]: Price, product page
                            - 'link "₹12,400 M.R.P: ₹19,999 M.R.P: ₹19,999" [ref=f4e1363] [cursor=pointer]':
                              - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                              - generic [ref=f4e1364]:
                                - generic [ref=f4e1365]: ₹12,400
                                - generic [aria-hidden] [ref=f4e1366]: ₹12,400
                              - generic [ref=f4e1367]: "M.R.P: ₹19,999"
                              - generic [ref=f4e1368]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1369]:
                                  - generic [ref=f4e1370]: ₹19,999
                                  - text: ₹19,999
                            - text: (38% off)
                          - generic [ref=f4e1374]:
                            - generic [ref=f4e1375]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1376]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1377]: FREE delivery Mon, 7 Dec
                        - generic [ref=f4e1397] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1398]
                          - generic [aria-hidden] [ref=f4e1399]: Add to cart
                        - generic [ref=f4e1401]:
                          - separator [aria-hidden] [ref=f4e1402]
                          - link "Get it faster" [ref=f4e1403] [cursor=pointer]:
                            - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                          - link:
                            - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                          - generic [ref=f4e1404]:
                            - link:
                              - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                            - generic [ref=f4e1405]:
                              - link "Price, product page":
                                - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                              - 'link "₹12,700 M.R.P: ₹24,999 M.R.P: ₹24,999" [ref=f4e1407] [cursor=pointer]':
                                - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_10_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                                - generic [ref=f4e1408]:
                                  - generic [ref=f4e1409]: ₹12,700
                                  - generic [aria-hidden] [ref=f4e1410]: ₹12,700
                                - generic [ref=f4e1411]: "M.R.P: ₹24,999"
                                - generic [ref=f4e1412]:
                                  - text: "M.R.P:"
                                  - generic [ref=f4e1413]:
                                    - generic [ref=f4e1414]: ₹24,999
                                    - text: ₹24,999
                              - text: (49% off)
                          - generic [ref=f4e1418]:
                            - generic [ref=f4e1419]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1420]: Up to 5% back with Amazon Pay ICI...
                          - generic [ref=f4e1421]: FREE delivery 24 - 26 Nov
                        - group "colours available" [ref=f4e1428]:
                          - list [ref=f4e1429]:
                            - generic [ref=f4e1430]:
                              - listitem:
                                - link "Black":
                                  - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                                  - generic [ref=f4e1431] [cursor=pointer]
                            - generic [ref=f4e1433]:
                              - listitem:
                                - link "Pink":
                                  - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5FR4DJ/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-10
                                  - generic [ref=f4e1434] [cursor=pointer]
                - listitem [ref=f4e1438]:
                  - generic [ref=f4e1444]:
                    - link [aria-hidden] [ref=f4e1450] [cursor=pointer]:
                      - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_11?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-11
                    - generic [ref=f4e1455]:
                      - link [ref=f4e1457] [cursor=pointer]:
                        - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_11?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-11
                        - heading "Lenovo Idea Tab Plus with Pen | Wifi |12.1\" 2.5K Display, 800nits Peak Brightness |12GB RAM + 256GB ROM (Expandable upto 2TB)| MediaTek Dimensity 6400| 10200mAh|4 Speakers with Dolby Atmos| Cloud Grey" [level=2] [ref=f4e1458]
                      - generic [ref=f4e1459]:
                        - generic [ref=f4e1460]:
                          - text: "4.5"
                          - button "4.5 out of 5 stars, rating details" [ref=f4e1462] [cursor=pointer]:
                            - generic [ref=f4e1464]: 4.5 out of 5 stars
                          - link "68 ratings" [ref=f4e1466] [cursor=pointer]:
                            - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_11?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-11#customerReviews
                            - text: (68)
                        - generic [ref=f4e1467]: 500+ bought in past month
                      - generic [ref=f4e1470]:
                        - generic [ref=f4e1471]:
                          - generic [ref=f4e1473]:
                            - generic [ref=f4e1474]: Price, product page
                            - 'link "₹33,081 M.R.P: ₹40,000 M.R.P: ₹40,000" [ref=f4e1475] [cursor=pointer]':
                              - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_11?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-11
                              - generic [ref=f4e1476]:
                                - generic [ref=f4e1477]: ₹33,081
                                - generic [aria-hidden] [ref=f4e1478]: ₹33,081
                              - generic [ref=f4e1479]: "M.R.P: ₹40,000"
                              - generic [ref=f4e1480]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1481]:
                                  - generic [ref=f4e1482]: ₹40,000
                                  - text: ₹40,000
                            - text: (17% off)
                          - generic [ref=f4e1486]:
                            - generic [ref=f4e1487]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1488]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1491]:
                          - generic [ref=f4e1492]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1494]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1509] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1510]
                          - generic [aria-hidden] [ref=f4e1511]: Add to cart
                        - generic [ref=f4e1513]:
                          - text: More Buying Choices₹33,000
                          - link "(4 new offers)" [ref=f4e1515] [cursor=pointer]:
                            - /url: /gp/offer-listing/B0G2RZCF95/ref=sr_1_11_olp?keywords=Tablet&crid=2X52K4ZO56AGU&sprefix=tablet%2Caps%2C250&dib_tag=se&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&qid=1794617588&sr=8-11
          - generic [ref=f4e1525]:
            - link "Sponsored video; click to navigate to featured product page. Bigil Tablet Tempered glass Screen Protector Guard for Lenovo Tab 10.1 inch TB311XU" [ref=f4e1529] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTttKg2AAZo1q2Wl4UeClQRfBPM1mW0j8HqZOcM0dgt2Im05lTp3-bdWFT9Fz9AY9RFdBF1Hv0AMEbRR9Vx_fiQ_RS1-f769b6D5g6F7L7PcNVlcGeIFuHCmJfq4v2Jaq3qo3dNetx6ERdsxdhq0RbI2o0gQ13OgKoxKQe6psal30GNl23GwK4wTd6xumLLYVQxvKEiYiJ2vDylw7HftW4qbjOLShawVRGESuNYITdMee2Q9xRAQRhmSjRWWVxTfdyNIMvIYUqPLj28vTx7OEHaz3Kqs6fshQFMXVaYZj6hccSzNFzTAbRfFaPGujl5IAxKSpVTiQC_MVPJALHZi2Zxr4j1zwcqGTC-CHeFhZ9OQ7pbUYg0DSoM_yzADp-RAmWYMkl8sl8XuadBJSoJQBx1bppnllp-6EB9Mqw95D2pufJo6VOlbA_0XWUhL6TsrDb8iKfGI&v=c1&r=https://www.amazon.in/dp/B0GV7431FR?aref=Ak324yt1gq&pd_rd_i=B0GV7431FR&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pd_rd_wg=WmJag&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_w=3TmND&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d
            - generic [ref=f4e1539]:
              - link [aria-hidden] [ref=f4e1545] [cursor=pointer]:
                - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTttKg2AAZo1q2Wl4UeClQRfBPM1mW0j8HqZOcM0dgt2Im05lTp3-bdWFT9Fz9AY9RFdBF1Hv0AMEbRR9Vx_fiQ_RS1-f769b6D5g6F7L7PcNVlcGeIFuHCmJfq4v2Jaq3qo3dNetx6ERdsxdhq0RbI2o0gQ13OgKoxKQe6psal30GNl23GwK4wTd6xumLLYVQxvKEiYiJ2vDylw7HftW4qbjOLShawVRGESuNYITdMee2Q9xRAQRhmSjRWWVxTfdyNIMvIYUqPLj28vTx7OEHaz3Kqs6fshQFMXVaYZj6hccSzNFzTAbRfFaPGujl5IAxKSpVTiQC_MVPJALHZi2Zxr4j1zwcqGTC-CHeFhZ9OQ7pbUYg0DSoM_yzADp-RAmWYMkl8sl8XuadBJSoJQBx1bppnllp-6EB9Mqw95D2pufJo6VOlbA_0XWUhL6TsrDb8iKfGI&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d&pd_rd_w=3TmND&pd_rd_wg=WmJag&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
              - generic [ref=f4e1550]:
                - generic [ref=f4e1551]:
                  - generic [ref=f4e1552]: Sponsored
                  - link [ref=f4e1556] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTttKg2AAZo1q2Wl4UeClQRfBPM1mW0j8HqZOcM0dgt2Im05lTp3-bdWFT9Fz9AY9RFdBF1Hv0AMEbRR9Vx_fiQ_RS1-f769b6D5g6F7L7PcNVlcGeIFuHCmJfq4v2Jaq3qo3dNetx6ERdsxdhq0RbI2o0gQ13OgKoxKQe6psal30GNl23GwK4wTd6xumLLYVQxvKEiYiJ2vDylw7HftW4qbjOLShawVRGESuNYITdMee2Q9xRAQRhmSjRWWVxTfdyNIMvIYUqPLj28vTx7OEHaz3Kqs6fshQFMXVaYZj6hccSzNFzTAbRfFaPGujl5IAxKSpVTiQC_MVPJALHZi2Zxr4j1zwcqGTC-CHeFhZ9OQ7pbUYg0DSoM_yzADp-RAmWYMkl8sl8XuadBJSoJQBx1bppnllp-6EB9Mqw95D2pufJo6VOlbA_0XWUhL6TsrDb8iKfGI&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d&pd_rd_w=3TmND&pd_rd_wg=WmJag&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
                    - heading "Bigil Tablet Tempered glass Screen Protector Guard for Lenovo Tab 10.1 inch TB311XU" [level=2] [ref=f4e1557]
                - generic [ref=f4e1558]:
                  - generic [ref=f4e1559]:
                    - text: "3.9"
                    - button "3.9 out of 5 stars, rating details" [ref=f4e1561] [cursor=pointer]:
                      - generic [ref=f4e1563]: 3.9 out of 5 stars
                    - link "14 ratings" [ref=f4e1565] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTttKg2AAZo1q2Wl4UeClQRfBPM1mW0j8HqZOcM0dgt2Im05lTp3-bdWFT9Fz9AY9RFdBF1Hv0AMEbRR9Vx_fiQ_RS1-f769b6D5g6F7L7PcNVlcGeIFuHCmJfq4v2Jaq3qo3dNetx6ERdsxdhq0RbI2o0gQ13OgKoxKQe6psal30GNl23GwK4wTd6xumLLYVQxvKEiYiJ2vDylw7HftW4qbjOLShawVRGESuNYITdMee2Q9xRAQRhmSjRWWVxTfdyNIMvIYUqPLj28vTx7OEHaz3Kqs6fshQFMXVaYZj6hccSzNFzTAbRfFaPGujl5IAxKSpVTiQC_MVPJALHZi2Zxr4j1zwcqGTC-CHeFhZ9OQ7pbUYg0DSoM_yzADp-RAmWYMkl8sl8XuadBJSoJQBx1bppnllp-6EB9Mqw95D2pufJo6VOlbA_0XWUhL6TsrDb8iKfGI&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d&pd_rd_w=3TmND&pd_rd_wg=WmJag&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413#customerReviews
                      - text: (14)
                  - generic [ref=f4e1566]: 100+ bought in past month
                - generic [ref=f4e1569]:
                  - generic [ref=f4e1570]:
                    - generic [ref=f4e1572]:
                      - generic [ref=f4e1573]: Price, product page
                      - 'link "₹280 M.R.P: ₹999 M.R.P: ₹999" [ref=f4e1574] [cursor=pointer]':
                        - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTttKg2AAZo1q2Wl4UeClQRfBPM1mW0j8HqZOcM0dgt2Im05lTp3-bdWFT9Fz9AY9RFdBF1Hv0AMEbRR9Vx_fiQ_RS1-f769b6D5g6F7L7PcNVlcGeIFuHCmJfq4v2Jaq3qo3dNetx6ERdsxdhq0RbI2o0gQ13OgKoxKQe6psal30GNl23GwK4wTd6xumLLYVQxvKEiYiJ2vDylw7HftW4qbjOLShawVRGESuNYITdMee2Q9xRAQRhmSjRWWVxTfdyNIMvIYUqPLj28vTx7OEHaz3Kqs6fshQFMXVaYZj6hccSzNFzTAbRfFaPGujl5IAxKSpVTiQC_MVPJALHZi2Zxr4j1zwcqGTC-CHeFhZ9OQ7pbUYg0DSoM_yzADp-RAmWYMkl8sl8XuadBJSoJQBx1bppnllp-6EB9Mqw95D2pufJo6VOlbA_0XWUhL6TsrDb8iKfGI&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ea499e80-982d-4c68-b8c5-d5d8ade7374d&pd_rd_w=3TmND&pd_rd_wg=WmJag&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
                        - generic [ref=f4e1575]:
                          - generic [ref=f4e1576]: ₹280
                          - generic [aria-hidden] [ref=f4e1577]: ₹280
                        - generic [ref=f4e1578]: "M.R.P: ₹999"
                        - generic [ref=f4e1579]:
                          - text: "M.R.P:"
                          - generic [ref=f4e1580]:
                            - generic [ref=f4e1581]: ₹999
                            - text: ₹999
                      - text: (72% off)
                    - generic [ref=f4e1585]:
                      - generic [ref=f4e1586]: Up to 5% back with Amazon Pay ICICI card
                      - generic [aria-hidden] [ref=f4e1587]: Up to 5% back with Amazon Pay ICI...
                  - generic [ref=f4e1588]: FREE delivery Sat, 21 Nov
          - generic [ref=f4e1596]:
            - heading "More results" [level=2] [ref=f4e1600]
            - generic:
              - list:
                - listitem [ref=f4e1601]:
                  - generic [ref=f4e1607]:
                    - generic [ref=f4e1609]:
                      - group "Best sellerin Tablets" [ref=f4e1615]:
                        - generic "Best seller" [ref=f4e1617]
                      - link [aria-hidden] [ref=f4e1621] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                    - generic [ref=f4e1626]:
                      - link [ref=f4e1628] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                        - heading "Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [level=2] [ref=f4e1629]
                      - generic [ref=f4e1630]:
                        - generic [ref=f4e1631]:
                          - text: "3.8"
                          - button "3.8 out of 5 stars, rating details" [ref=f4e1633] [cursor=pointer]:
                            - generic [ref=f4e1635]: 3.8 out of 5 stars
                          - link "73 ratings" [ref=f4e1637] [cursor=pointer]:
                            - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12#customerReviews
                            - text: (73)
                        - generic [ref=f4e1638]: 4K+ bought in past month
                      - generic [ref=f4e1641]:
                        - generic [ref=f4e1642]:
                          - link "One-time purchase" [ref=f4e1644] [cursor=pointer]:
                            - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                          - generic [ref=f4e1646]:
                            - generic [ref=f4e1647]: Price, product page
                            - 'link "₹29,999 M.R.P: ₹53,000 M.R.P: ₹53,000" [ref=f4e1648] [cursor=pointer]':
                              - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_primary_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                              - generic [ref=f4e1649]:
                                - generic [ref=f4e1650]: ₹29,999
                                - generic [aria-hidden] [ref=f4e1651]: ₹29,999
                              - generic [ref=f4e1652]: "M.R.P: ₹53,000"
                              - generic [ref=f4e1653]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1654]:
                                  - generic [ref=f4e1655]: ₹53,000
                                  - text: ₹53,000
                            - text: (43% off)
                          - generic [ref=f4e1659]:
                            - generic [ref=f4e1660]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1661]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1662]: FREE delivery Sat, 21 Nov
                        - generic [ref=f4e1682] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1683]
                          - generic [aria-hidden] [ref=f4e1684]: Add to cart
                        - generic [ref=f4e1686]:
                          - separator [aria-hidden] [ref=f4e1687]
                          - link "Get it faster" [ref=f4e1688] [cursor=pointer]:
                            - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                          - link:
                            - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                          - generic [ref=f4e1689]:
                            - link:
                              - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                            - generic [ref=f4e1690]:
                              - link "Price, product page":
                                - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                              - 'link "₹30,563 M.R.P: ₹53,000 M.R.P: ₹53,000" [ref=f4e1692] [cursor=pointer]':
                                - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_12_mod_new?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=8-12
                                - generic [ref=f4e1693]:
                                  - generic [ref=f4e1694]: ₹30,563
                                  - generic [aria-hidden] [ref=f4e1695]: ₹30,563
                                - generic [ref=f4e1696]: "M.R.P: ₹53,000"
                                - generic [ref=f4e1697]:
                                  - text: "M.R.P:"
                                  - generic [ref=f4e1698]:
                                    - generic [ref=f4e1699]: ₹53,000
                                    - text: ₹53,000
                              - text: (42% off)
                          - generic [ref=f4e1703]:
                            - generic [ref=f4e1704]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1705]: Up to 5% back with Amazon Pay ICI...
                          - generic [ref=f4e1707]:
                            - generic [ref=f4e1708]: FREE delivery Mon, 16 Nov
                            - generic [ref=f4e1710]: Or fastest delivery Today 4 pm - 8 pm
                - listitem [ref=f4e1714]:
                  - generic [ref=f4e1720]:
                    - link [aria-hidden] [ref=f4e1726] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_13?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-13
                    - generic [ref=f4e1731]:
                      - link [ref=f4e1733] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_13?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-13
                        - 'heading "Lenovo {Smartchoice} Idea Tab Pro with Pen Plus & Keyboard|12.7\" 3K Display|144 Hz Refresh|12 GB RAM, 256 GB ROM| AI-Enabled| MediaTek Dimensity 8300|4 JBL Speakers|10200 mAh Battery with 45 W Charger" [level=2] [ref=f4e1734]'
                      - generic [ref=f4e1735]:
                        - generic [ref=f4e1736]:
                          - text: "4.5"
                          - button "4.5 out of 5 stars, rating details" [ref=f4e1738] [cursor=pointer]:
                            - generic [ref=f4e1740]: 4.5 out of 5 stars
                          - link "88 ratings" [ref=f4e1742] [cursor=pointer]:
                            - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_13?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-13#customerReviews
                            - text: (88)
                        - generic [ref=f4e1743]: 1K+ bought in past month
                      - generic [ref=f4e1746]:
                        - generic [ref=f4e1747]:
                          - generic [ref=f4e1749]:
                            - generic [ref=f4e1750]: Price, product page
                            - 'link "₹41,999 M.R.P: ₹48,999 M.R.P: ₹48,999" [ref=f4e1751] [cursor=pointer]':
                              - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_13?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-13
                              - generic [ref=f4e1752]:
                                - generic [ref=f4e1753]: ₹41,999
                                - generic [aria-hidden] [ref=f4e1754]: ₹41,999
                              - generic [ref=f4e1755]: "M.R.P: ₹48,999"
                              - generic [ref=f4e1756]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1757]:
                                  - generic [ref=f4e1758]: ₹48,999
                                  - text: ₹48,999
                            - text: (14% off)
                          - generic [ref=f4e1762]:
                            - generic [ref=f4e1763]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1764]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1767]:
                          - generic [ref=f4e1768]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1770]: Or fastest delivery Tomorrow, 15 Nov
                        - generic [ref=f4e1785] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1786]
                          - generic [aria-hidden] [ref=f4e1787]: Add to cart
                - listitem [ref=f4e1790]:
                  - generic [ref=f4e1796]:
                    - link [aria-hidden] [ref=f4e1802] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_14?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-14
                    - generic [ref=f4e1807]:
                      - link [ref=f4e1809] [cursor=pointer]:
                        - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_14?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-14
                        - 'heading "Lenovo Idea Tab Pro Gen 2 with Pen Plus {Smartchoice} 13\" Display, 3.5K Resolution, 144Hz Refresh | 8GB, 256GB | Snapdragon 8s Gen 4 | 10200mAh, 4 JBL Speakers, USB 3.0 with DP-Out, Wi-Fi 7, Luna Grey" [level=2] [ref=f4e1810]'
                      - generic [ref=f4e1811]:
                        - generic [ref=f4e1812]:
                          - text: "4.2"
                          - button "4.2 out of 5 stars, rating details" [ref=f4e1814] [cursor=pointer]:
                            - generic [ref=f4e1816]: 4.2 out of 5 stars
                          - link "254 ratings" [ref=f4e1818] [cursor=pointer]:
                            - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_14?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-14#customerReviews
                            - text: (254)
                        - generic [ref=f4e1819]: 2K+ bought in past month
                      - generic [ref=f4e1822]:
                        - generic [ref=f4e1823]:
                          - generic [ref=f4e1825]:
                            - generic [ref=f4e1826]: Price, product page
                            - 'link "₹44,999 M.R.P: ₹70,000 M.R.P: ₹70,000" [ref=f4e1827] [cursor=pointer]':
                              - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_14?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-14
                              - generic [ref=f4e1828]:
                                - generic [ref=f4e1829]: ₹44,999
                                - generic [aria-hidden] [ref=f4e1830]: ₹44,999
                              - generic [ref=f4e1831]: "M.R.P: ₹70,000"
                              - generic [ref=f4e1832]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1833]:
                                  - generic [ref=f4e1834]: ₹70,000
                                  - text: ₹70,000
                            - text: (36% off)
                          - generic [ref=f4e1838]:
                            - generic [ref=f4e1839]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e1840]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e1843]:
                          - generic [ref=f4e1844]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e1846]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e1861] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1862]
                          - generic [aria-hidden] [ref=f4e1863]: Add to cart
                        - group "colours available" [ref=f4e1865]:
                          - list [ref=f4e1866]:
                            - generic [ref=f4e1867]:
                              - listitem:
                                - link "Without Keyboard":
                                  - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-14
                                  - generic [ref=f4e1868] [cursor=pointer]
                            - generic [ref=f4e1870]:
                              - listitem:
                                - link "With Keyboard":
                                  - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0HHRB6DQG/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-14
                                  - generic [ref=f4e1871] [cursor=pointer]
                - listitem [ref=f4e1875]:
                  - generic [ref=f4e1881]:
                    - link [aria-hidden] [ref=f4e1887] [cursor=pointer]:
                      - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_15?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-15
                    - generic [ref=f4e1892]:
                      - link [ref=f4e1894] [cursor=pointer]:
                        - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_15?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-15
                        - heading "Samsung Galaxy Tab S10 FE [Smartchoice], S Pen in-Box, 27.7 cm (10.9 inch) Display, AI Writing, Desktop Mode, Pre Loaded Pro Apps, 8 GB RAM, 128 GB Storage, Wi-Fi Tablet, Gray" [level=2] [ref=f4e1895]
                      - generic [ref=f4e1896]:
                        - generic [ref=f4e1897]:
                          - text: "4.4"
                          - button "4.4 out of 5 stars, rating details" [ref=f4e1899] [cursor=pointer]:
                            - generic [ref=f4e1901]: 4.4 out of 5 stars
                          - link "269 ratings" [ref=f4e1903] [cursor=pointer]:
                            - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_15?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-15#customerReviews
                            - text: (269)
                        - generic [ref=f4e1904]: 1K+ bought in past month
                      - generic [ref=f4e1907]:
                        - generic [ref=f4e1908]:
                          - generic [ref=f4e1910]:
                            - generic [ref=f4e1911]: Price, product page
                            - 'link "₹43,999 M.R.P: ₹49,999 M.R.P: ₹49,999" [ref=f4e1912] [cursor=pointer]':
                              - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_15?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-15
                              - generic [ref=f4e1913]:
                                - generic [ref=f4e1914]: ₹43,999
                                - generic [aria-hidden] [ref=f4e1915]: ₹43,999
                              - generic [ref=f4e1916]: "M.R.P: ₹49,999"
                              - generic [ref=f4e1917]:
                                - text: "M.R.P:"
                                - generic [ref=f4e1918]:
                                  - generic [ref=f4e1919]: ₹49,999
                                  - text: ₹49,999
                            - text: (12% off)
                          - generic [ref=f4e1923]:
                            - generic [ref=f4e1924]: Save extra with No Cost EMI
                            - generic [aria-hidden] [ref=f4e1925]: Save extra with No Cost EMI
                        - generic [ref=f4e1926]: FREE delivery Tue, 17 Nov
                        - generic [ref=f4e1944] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e1945]
                          - generic [aria-hidden] [ref=f4e1946]: Add to cart
                        - group "colours available" [ref=f4e1948]:
                          - list [ref=f4e1949]:
                            - generic [ref=f4e1950]:
                              - listitem:
                                - link "Gray":
                                  - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=cs_sr_dp_1?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-15
                                  - generic [ref=f4e1951] [cursor=pointer]
                            - generic [ref=f4e1953]:
                              - listitem:
                                - link "Blue":
                                  - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29L3W6J/ref=cs_sr_dp_2?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-15
                                  - generic [ref=f4e1954] [cursor=pointer]
                            - generic [ref=f4e1956]:
                              - listitem:
                                - link "Silver":
                                  - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P22Y6/ref=cs_sr_dp_3?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-15
                                  - generic [ref=f4e1957] [cursor=pointer]
                - listitem [ref=f4e1961]:
                  - generic [ref=f4e1967]:
                    - link [aria-hidden] [ref=f4e1973] [cursor=pointer]:
                      - /url: /Acer-Keyboard-Speakers-Expandable-Fingerprint/dp/B0H9KQJTZX/ref=sr_1_16?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-16
                    - generic [ref=f4e1978]:
                      - link [ref=f4e1980] [cursor=pointer]:
                        - /url: /Acer-Keyboard-Speakers-Expandable-Fingerprint/dp/B0H9KQJTZX/ref=sr_1_16?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-16
                        - heading "Acer Iconia Tab11 with Stylus & Keyboard | 11.45\" | 2.2K IPS Display, 450 Nit | Quad Speakers | 8GB + 128GB (Expandable) | Wi-Fi + (Calling) | Fingerprint Reader| Slim Metal Body| Blue" [level=2] [ref=f4e1981]
                      - generic [ref=f4e1982]:
                        - generic [ref=f4e1983]:
                          - text: "3.1"
                          - button "3.1 out of 5 stars, rating details" [ref=f4e1985] [cursor=pointer]:
                            - generic [ref=f4e1987]: 3.1 out of 5 stars
                          - link "21 ratings" [ref=f4e1989] [cursor=pointer]:
                            - /url: /Acer-Keyboard-Speakers-Expandable-Fingerprint/dp/B0H9KQJTZX/ref=sr_1_16?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-16#customerReviews
                            - text: (21)
                        - generic [ref=f4e1990]: 100+ bought in past month
                      - generic [ref=f4e1993]:
                        - generic [ref=f4e1994]:
                          - link "Limited time deal" [ref=f4e1996] [cursor=pointer]:
                            - /url: /deals
                          - generic [ref=f4e2002]:
                            - generic [ref=f4e2003]: Price, product page
                            - 'link "₹25,499 M.R.P: ₹43,990 M.R.P: ₹43,990" [ref=f4e2004] [cursor=pointer]':
                              - /url: /Acer-Keyboard-Speakers-Expandable-Fingerprint/dp/B0H9KQJTZX/ref=sr_1_16?crid=2X52K4ZO56AGU&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybFbweSrqLl3Ytx7oqj7R4OnGDMfe2ETk3hPTNxtiQt75ahN88dhe9C67S7MT_xf_OlAElSu-_R1LStXAGgbqjpB2HoGmNgWuMH_8YfAP1VL-vCp35uUrk27_tvv31utUVYgNFr7Dh5Qw2mv1m5AHkJh5fd-VhINzj9GvT7tbczUo5NRZFxTiU0XaUhcBlS0gUY._81pCsskQzTLjdMUEoG7HHTr6JRdwU9UYxHDRyJ1qvM&dib_tag=se&keywords=Tablet&qid=1794617588&sprefix=tablet%2Caps%2C250&sr=8-16
                              - generic [ref=f4e2005]:
                                - generic [ref=f4e2006]: ₹25,499
                                - generic [aria-hidden] [ref=f4e2007]: ₹25,499
                              - generic [ref=f4e2008]: "M.R.P: ₹43,990"
                              - generic [ref=f4e2009]:
                                - text: "M.R.P:"
                                - generic [ref=f4e2010]:
                                  - generic [ref=f4e2011]: ₹43,990
                                  - text: ₹43,990
                            - text: (42% off)
                          - generic [ref=f4e2015]:
                            - generic [ref=f4e2016]: Up to 5% back with Amazon Pay ICICI card
                            - generic [aria-hidden] [ref=f4e2017]: Up to 5% back with Amazon Pay ICI...
                        - generic [ref=f4e2020]:
                          - generic [ref=f4e2021]: FREE delivery Mon, 16 Nov
                          - generic [ref=f4e2023]: Or fastest delivery Today 4 pm - 8 pm
                        - generic [ref=f4e2038] [cursor=pointer]:
                          - button "Add to cart" [ref=f4e2039]
                          - generic [aria-hidden] [ref=f4e2040]: Add to cart
          - generic [ref=f4e2050]:
            - link "Sponsored video; click to navigate to featured product page. Bigil Tablet Tempered glass Screen Protector Guard for Lenovo Tab 10.1 inch TB311XU" [ref=f4e2054] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ub48vDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsShdi4zyipLwslRXQ68gswiLQvfCgPQgbiMTMz0TMz1jQz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8cz0dUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BABnl3-w&v=c1&r=https://www.amazon.in/dp/B0GV7431FR?aref=Ak324yt1gq&pd_rd_i=B0GV7431FR&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pd_rd_wg=gX3Ld&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_w=U4xr7&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74
            - generic [ref=f4e2064]:
              - link [aria-hidden] [ref=f4e2070] [cursor=pointer]:
                - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ub48vDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsShdi4zyipLwslRXQ68gswiLQvfCgPQgbiMTMz0TMz1jQz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8cz0dUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BABnl3-w&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&pd_rd_w=U4xr7&pd_rd_wg=gX3Ld&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
              - generic [ref=f4e2075]:
                - generic [ref=f4e2076]:
                  - generic [ref=f4e2077]: Sponsored
                  - link [ref=f4e2081] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ub48vDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsShdi4zyipLwslRXQ68gswiLQvfCgPQgbiMTMz0TMz1jQz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8cz0dUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BABnl3-w&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&pd_rd_w=U4xr7&pd_rd_wg=gX3Ld&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
                    - heading "Bigil Tablet Tempered glass Screen Protector Guard for Lenovo Tab 10.1 inch TB311XU" [level=2] [ref=f4e2082]
                - generic [ref=f4e2083]:
                  - generic [ref=f4e2084]:
                    - text: "3.9"
                    - button "3.9 out of 5 stars, rating details" [ref=f4e2086] [cursor=pointer]:
                      - generic [ref=f4e2088]: 3.9 out of 5 stars
                    - link "14 ratings" [ref=f4e2090] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ub48vDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsShdi4zyipLwslRXQ68gswiLQvfCgPQgbiMTMz0TMz1jQz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8cz0dUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BABnl3-w&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&pd_rd_w=U4xr7&pd_rd_wg=gX3Ld&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1#customerReviews
                      - text: (14)
                  - generic [ref=f4e2091]: 100+ bought in past month
                - generic [ref=f4e2094]:
                  - generic [ref=f4e2095]:
                    - generic [ref=f4e2097]:
                      - generic [ref=f4e2098]: Price, product page
                      - 'link "₹280 M.R.P: ₹999 M.R.P: ₹999" [ref=f4e2099] [cursor=pointer]':
                        - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ub48vDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsShdi4zyipLwslRXQ68gswiLQvfCgPQgbiMTMz0TMz1jQz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8cz0dUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BABnl3-w&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=2X52K4ZO56AGU&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&pd_rd_w=U4xr7&pd_rd_wg=gX3Ld&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=JKX0FBFGQA85M47E2ASB&qid=1794617588&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C250&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
                        - generic [ref=f4e2100]:
                          - generic [ref=f4e2101]: ₹280
                          - generic [aria-hidden] [ref=f4e2102]: ₹280
                        - generic [ref=f4e2103]: "M.R.P: ₹999"
                        - generic [ref=f4e2104]:
                          - text: "M.R.P:"
                          - generic [ref=f4e2105]:
                            - generic [ref=f4e2106]: ₹999
                            - text: ₹999
                      - text: (72% off)
                    - generic [ref=f4e2110]:
                      - generic [ref=f4e2111]: Up to 5% back with Amazon Pay ICICI card
                      - generic [aria-hidden] [ref=f4e2112]: Up to 5% back with Amazon Pay ICI...
                  - generic [ref=f4e2113]: FREE delivery Sat, 21 Nov
          - generic [ref=f4e2125]:
            - generic "Related searches in Tablet" [ref=f4e2126]:
              - heading "Related searches" [level=2] [ref=f4e2129]
            - list [ref=f4e2131]:
              - generic [ref=f4e2132]:
                - listitem [ref=f4e2133]:
                  - link "ipad" [ref=f4e2135] [cursor=pointer]:
                    - /url: /s?k=ipad&ref=rsl_sug_0_0&pd_rd_w=5l7DU&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=gX3Ld&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&qid=1794617588
                - listitem [ref=f4e2141]:
                  - link "tablet samsung" [ref=f4e2143] [cursor=pointer]:
                    - /url: /s?k=tablet+samsung&ref=rsl_sug_0_3&pd_rd_w=5l7DU&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=gX3Ld&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&qid=1794617588
              - generic [ref=f4e2149]:
                - listitem [ref=f4e2150]:
                  - link "tablet with pen" [ref=f4e2152] [cursor=pointer]:
                    - /url: /s?k=tablet+with+pen&ref=rsl_sug_0_1&pd_rd_w=5l7DU&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=gX3Ld&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&qid=1794617588
                - listitem [ref=f4e2158]:
                  - link "tablets under 10000" [ref=f4e2160] [cursor=pointer]:
                    - /url: /s?k=tablets+under+10000&ref=rsl_sug_0_4&pd_rd_w=5l7DU&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=gX3Ld&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&qid=1794617588
              - generic [ref=f4e2166]:
                - listitem [ref=f4e2167]:
                  - link "table" [ref=f4e2169] [cursor=pointer]:
                    - /url: /s?k=table&ref=rsl_sug_0_2&pd_rd_w=5l7DU&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=gX3Ld&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&qid=1794617588
                - listitem [ref=f4e2175]:
                  - link "laptop" [ref=f4e2177] [cursor=pointer]:
                    - /url: /s?k=laptop&ref=rsl_sug_0_5&pd_rd_w=5l7DU&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=gX3Ld&pd_rd_r=ad555d31-a519-4612-94a5-e09560bd7d74&qid=1794617588
          - navigation "pagination" [ref=f4e2185]:
            - list [ref=f4e2187]:
              - listitem [ref=f4e2188]:
                - button "Previous" [disabled] [ref=f4e2190]
              - listitem [ref=f4e2193]:
                - button "Page 1" [ref=f4e2195]: "1"
              - listitem [ref=f4e2196]:
                - button "Go to page 2" [ref=f4e2198] [cursor=pointer]: "2"
              - listitem [ref=f4e2199]:
                - button "Go to page 3" [ref=f4e2201] [cursor=pointer]: "3"
              - button [disabled] [ref=f4e2202]:
                - img [aria-hidden] [ref=f4e2203]: ...
              - button "20" [disabled] [ref=f4e2205]
              - listitem [ref=f4e2206]:
                - button "Go to next page, page 2" [ref=f4e2208] [cursor=pointer]: Next
          - generic [ref=f4e2214]:
            - separator [aria-hidden] [ref=f4e2215]
            - generic [ref=f4e2216]:
              - heading "Brands related to your search" [ref=f4e2217]
              - button "Leave feedback on Sponsored ad" [ref=f4e2222] [cursor=pointer]: Sponsored
              - generic [ref=f4e2226]:
                - generic [ref=f4e2228]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksihMMr7EsYss5LFzsROcYKcpysaa2BPHIr50Zpq0LLLnAVgj8QbAC_AW7JBY8AY8AEoLSPCvvqNzfp1z_lJ4-PP7t6-3Kw8MUZg43umpKw9609qecHy0IFlyGaTufC1Nm2fF4BV7Mp0OT46sFXLWQ209aEwwj9NF1you-xvvnigrDVlpSEIDzvZ9ND80OpN-x7P9yqPSnYiw1zwvKvdPXa9jjnquPetY1bd7pcNdJ5jzReUuTvGbPGskWfXxkmFASZinKckizJM8A4zQdRISwAim4RLM-aJ2i2SB7R6L6cWKJ2BOcRaBkBLMkzUBvzeCENOIgQInGScUhHnGScbF8gtkBtLYHwZWxx9MRuOaWtqD5S8_3n38_Mmqlv-4d4dIBVvVHkoQwpaiChDKsiop4oHteicH5tg8HlWeWcgwi64N2sYWnd8oNrboJaej1Db-1RbFW_Ryi4xriKtlM-5c9px1aCSWzZeyLn7YL73fX3JesJNmc7PZNP4m02Q8p4Q1CxyTJpLUjtpGKmhrmghkC4pA7QoKENtdWUSa0m2J6vNrQ0DJQvdRYEBZElpQEKYDe4hmQlsa-gYwoKQosKVKvYmjjbyZ74_hrF5EAY2CYrWMqM7rS4aDkAZJpMP6qggwSzKmI9hHyFWGfe_pNU6msiPfYG-omOJu8vyC0Ct9gucrwnc1W-Vc_z_dOouKAEdBTPOLQpcgFCRBUzVREDRJric6Llgd737otRf51ZnqTJ1fw5zbtw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                      - link [ref=f4e2229] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksihMMr7EsYss5LFzsROcYKcpysaa2BPHIr50Zpq0LLLnAVgj8QbAC_AW7JBY8AY8AEoLSPCvvqNzfp1z_lJ4-PP7t6-3Kw8MUZg43umpKw9609qecHy0IFlyGaTufC1Nm2fF4BV7Mp0OT46sFXLWQ209aEwwj9NF1you-xvvnigrDVlpSEIDzvZ9ND80OpN-x7P9yqPSnYiw1zwvKvdPXa9jjnquPetY1bd7pcNdJ5jzReUuTvGbPGskWfXxkmFASZinKckizJM8A4zQdRISwAim4RLM-aJ2i2SB7R6L6cWKJ2BOcRaBkBLMkzUBvzeCENOIgQInGScUhHnGScbF8gtkBtLYHwZWxx9MRuOaWtqD5S8_3n38_Mmqlv-4d4dIBVvVHkoQwpaiChDKsiop4oHteicH5tg8HlWeWcgwi64N2sYWnd8oNrboJaej1Db-1RbFW_Ryi4xriKtlM-5c9px1aCSWzZeyLn7YL73fX3JesJNmc7PZNP4m02Q8p4Q1CxyTJpLUjtpGKmhrmghkC4pA7QoKENtdWUSa0m2J6vNrQ0DJQvdRYEBZElpQEKYDe4hmQlsa-gYwoKQosKVKvYmjjbyZ74_hrF5EAY2CYrWMqM7rS4aDkAZJpMP6qggwSzKmI9hHyFWGfe_pNU6msiPfYG-omOJu8vyC0Ct9gucrwnc1W-Vc_z_dOouKAEdBTPOLQpcgFCRBUzVREDRJric6Llgd737otRf51ZnqTJ1fw5zbtw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_ls&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                        - img "Lenovo Tablets" [ref=f4e2230]
                      - generic [ref=f4e2232]:
                        - generic [ref=f4e2233]:
                          - link [aria-hidden] [ref=f4e2234] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksihMMr7EsYss5LFzsROcYKcpysaa2BPHIr50Zpq0LLLnAVgj8QbAC_AW7JBY8AY8AEoLSPCvvqNzfp1z_lJ4-PP7t6-3Kw8MUZg43umpKw9609qecHy0IFlyGaTufC1Nm2fF4BV7Mp0OT46sFXLWQ209aEwwj9NF1you-xvvnigrDVlpSEIDzvZ9ND80OpN-x7P9yqPSnYiw1zwvKvdPXa9jjnquPetY1bd7pcNdJ5jzReUuTvGbPGskWfXxkmFASZinKckizJM8A4zQdRISwAim4RLM-aJ2i2SB7R6L6cWKJ2BOcRaBkBLMkzUBvzeCENOIgQInGScUhHnGScbF8gtkBtLYHwZWxx9MRuOaWtqD5S8_3n38_Mmqlv-4d4dIBVvVHkoQwpaiChDKsiop4oHteicH5tg8HlWeWcgwi64N2sYWnd8oNrboJaej1Db-1RbFW_Ryi4xriKtlM-5c9px1aCSWzZeyLn7YL73fX3JesJNmc7PZNP4m02Q8p4Q1CxyTJpLUjtpGKmhrmghkC4pA7QoKENtdWUSa0m2J6vNrQ0DJQvdRYEBZElpQEKYDe4hmQlsa-gYwoKQosKVKvYmjjbyZ74_hrF5EAY2CYrWMqM7rS4aDkAZJpMP6qggwSzKmI9hHyFWGfe_pNU6msiPfYG-omOJu8vyC0Ct9gucrwnc1W-Vc_z_dOouKAEdBTPOLQpcgFCRBUzVREDRJric6Llgd737otRf51ZnqTJ1fw5zbtw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                          - link [ref=f4e2235] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksihMMr7EsYss5LFzsROcYKcpysaa2BPHIr50Zpq0LLLnAVgj8QbAC_AW7JBY8AY8AEoLSPCvvqNzfp1z_lJ4-PP7t6-3Kw8MUZg43umpKw9609qecHy0IFlyGaTufC1Nm2fF4BV7Mp0OT46sFXLWQ209aEwwj9NF1you-xvvnigrDVlpSEIDzvZ9ND80OpN-x7P9yqPSnYiw1zwvKvdPXa9jjnquPetY1bd7pcNdJ5jzReUuTvGbPGskWfXxkmFASZinKckizJM8A4zQdRISwAim4RLM-aJ2i2SB7R6L6cWKJ2BOcRaBkBLMkzUBvzeCENOIgQInGScUhHnGScbF8gtkBtLYHwZWxx9MRuOaWtqD5S8_3n38_Mmqlv-4d4dIBVvVHkoQwpaiChDKsiop4oHteicH5tg8HlWeWcgwi64N2sYWnd8oNrboJaej1Db-1RbFW_Ryi4xriKtlM-5c9px1aCSWzZeyLn7YL73fX3JesJNmc7PZNP4m02Q8p4Q1CxyTJpLUjtpGKmhrmghkC4pA7QoKENtdWUSa0m2J6vNrQ0DJQvdRYEBZElpQEKYDe4hmQlsa-gYwoKQosKVKvYmjjbyZ74_hrF5EAY2CYrWMqM7rS4aDkAZJpMP6qggwSzKmI9hHyFWGfe_pNU6msiPfYG-omOJu8vyC0Ct9gucrwnc1W-Vc_z_dOouKAEdBTPOLQpcgFCRBUzVREDRJric6Llgd737otRf51ZnqTJ1fw5zbtw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_logo&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                            - img "Lenovo Tablets" [ref=f4e2237]
                        - generic [ref=f4e2238]:
                          - link [aria-hidden] [ref=f4e2239] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksihMMr7EsYss5LFzsROcYKcpysaa2BPHIr50Zpq0LLLnAVgj8QbAC_AW7JBY8AY8AEoLSPCvvqNzfp1z_lJ4-PP7t6-3Kw8MUZg43umpKw9609qecHy0IFlyGaTufC1Nm2fF4BV7Mp0OT46sFXLWQ209aEwwj9NF1you-xvvnigrDVlpSEIDzvZ9ND80OpN-x7P9yqPSnYiw1zwvKvdPXa9jjnquPetY1bd7pcNdJ5jzReUuTvGbPGskWfXxkmFASZinKckizJM8A4zQdRISwAim4RLM-aJ2i2SB7R6L6cWKJ2BOcRaBkBLMkzUBvzeCENOIgQInGScUhHnGScbF8gtkBtLYHwZWxx9MRuOaWtqD5S8_3n38_Mmqlv-4d4dIBVvVHkoQwpaiChDKsiop4oHteicH5tg8HlWeWcgwi64N2sYWnd8oNrboJaej1Db-1RbFW_Ryi4xriKtlM-5c9px1aCSWzZeyLn7YL73fX3JesJNmc7PZNP4m02Q8p4Q1CxyTJpLUjtpGKmhrmghkC4pA7QoKENtdWUSa0m2J6vNrQ0DJQvdRYEBZElpQEKYDe4hmQlsa-gYwoKQosKVKvYmjjbyZ74_hrF5EAY2CYrWMqM7rS4aDkAZJpMP6qggwSzKmI9hHyFWGfe_pNU6msiPfYG-omOJu8vyC0Ct9gucrwnc1W-Vc_z_dOouKAEdBTPOLQpcgFCRBUzVREDRJric6Llgd737otRf51ZnqTJ1fw5zbtw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                          - link "The Ultimate Entertainment Tablet" [ref=f4e2240] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AUhtVWQAkgoiyKlGUksihMMr7EsYss5LFzsROcYKcpysaa2BPHIr50Zpq0LLLnAVgj8QbAC_AW7JBY8AY8AEoLSPCvvqNzfp1z_lJ4-PP7t6-3Kw8MUZg43umpKw9609qecHy0IFlyGaTufC1Nm2fF4BV7Mp0OT46sFXLWQ209aEwwj9NF1you-xvvnigrDVlpSEIDzvZ9ND80OpN-x7P9yqPSnYiw1zwvKvdPXa9jjnquPetY1bd7pcNdJ5jzReUuTvGbPGskWfXxkmFASZinKckizJM8A4zQdRISwAim4RLM-aJ2i2SB7R6L6cWKJ2BOcRaBkBLMkzUBvzeCENOIgQInGScUhHnGScbF8gtkBtLYHwZWxx9MRuOaWtqD5S8_3n38_Mmqlv-4d4dIBVvVHkoQwpaiChDKsiop4oHteicH5tg8HlWeWcgwi64N2sYWnd8oNrboJaej1Db-1RbFW_Ryi4xriKtlM-5c9px1aCSWzZeyLn7YL73fX3JesJNmc7PZNP4m02Q8p4Q1CxyTJpLUjtpGKmhrmghkC4pA7QoKENtdWUSa0m2J6vNrQ0DJQvdRYEBZElpQEKYDe4hmQlsa-gYwoKQosKVKvYmjjbyZ74_hrF5EAY2CYrWMqM7rS4aDkAZJpMP6qggwSzKmI9hHyFWGfe_pNU6msiPfYG-omOJu8vyC0Ct9gucrwnc1W-Vc_z_dOouKAEdBTPOLQpcgFCRBUzVREDRJric6Llgd737otRf51ZnqTJ1fw5zbtw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_hl&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                - generic [ref=f4e2245]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkL1v00AYxtVWQAkgogxFyhiJDIVLzneu4xZZ6M52PprUSfPVqIt1sS-ORWK7d9e0ZcjOjsQE_w8bGxsS_0MXNpTyIcEzPa8ePXof_XLB7u33b1_vF54QpA2P-6ORp7cb49KWtr8340l87S-96QqPq2dZeyJfjMedoz1sj-R0NpGp7ATSxeYk7FyLqP8I6UZFNypYq8Dz7QGd7hJ32HT7rUHhWe5ByOUblWaFxyOv79rdhtc6d53iu63c7ibxp2pWeMiW7G2aVOKk-HwuGRA8SJdLnoRMxWkCJBerOOBAciaCOZiqWekeT_yWt4-WlwsVg6lgSQgCwZmKVxz8_ggCJkIJMhYnigsQpIniiUL5E2r7uDfo-I47aA-7vZKZ29Lytz--fPz8ySnm_7Q3Q3AmF6WnGEIIDfMA6ToysYF2Wl7_aMfu2fvdwiuHEjurt0CNrOnFL0VkTU-V6C5b5F-tabSmp2tK7kxUzNuRe904XgUkdlpqrlvow3bu_fZcqUweVatXV1eVv2SqUqWCy2rGIl41HM2mNqoDEzuHQIcUAnIIawDZyKF1ra7VDPT6ruALPrMG1CdQ16FpIOTSMwrhmJ6QkQYIxCbUMdTI2fGw1-wSSBpOOQt9EfrZYh4KS5XnkvmB8OPQguVF5jMZJ9KikJq1noeG5y8ppG0NN23tYBNfXHJxYw3ZdMHV5paLVFn_Iy3LMPNZ6EcivcysDV6MdHxoYBNjvRxbLJNlthmumt4k7R-4q5ufiWbZTA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                      - link [ref=f4e2246] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkL1v00AYxtVWQAkgogxFyhiJDIVLzneu4xZZ6M52PprUSfPVqIt1sS-ORWK7d9e0ZcjOjsQE_w8bGxsS_0MXNpTyIcEzPa8ePXof_XLB7u33b1_vF54QpA2P-6ORp7cb49KWtr8340l87S-96QqPq2dZeyJfjMedoz1sj-R0NpGp7ATSxeYk7FyLqP8I6UZFNypYq8Dz7QGd7hJ32HT7rUHhWe5ByOUblWaFxyOv79rdhtc6d53iu63c7ibxp2pWeMiW7G2aVOKk-HwuGRA8SJdLnoRMxWkCJBerOOBAciaCOZiqWekeT_yWt4-WlwsVg6lgSQgCwZmKVxz8_ggCJkIJMhYnigsQpIniiUL5E2r7uDfo-I47aA-7vZKZ29Lytz--fPz8ySnm_7Q3Q3AmF6WnGEIIDfMA6ToysYF2Wl7_aMfu2fvdwiuHEjurt0CNrOnFL0VkTU-V6C5b5F-tabSmp2tK7kxUzNuRe904XgUkdlpqrlvow3bu_fZcqUweVatXV1eVv2SqUqWCy2rGIl41HM2mNqoDEzuHQIcUAnIIawDZyKF1ra7VDPT6ruALPrMG1CdQ16FpIOTSMwrhmJ6QkQYIxCbUMdTI2fGw1-wSSBpOOQt9EfrZYh4KS5XnkvmB8OPQguVF5jMZJ9KikJq1noeG5y8ppG0NN23tYBNfXHJxYw3ZdMHV5paLVFn_Iy3LMPNZ6EcivcysDV6MdHxoYBNjvRxbLJNlthmumt4k7R-4q5ufiWbZTA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_ls&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                        - img "ESR" [ref=f4e2247]
                      - generic [ref=f4e2249]:
                        - generic [ref=f4e2250]:
                          - link [aria-hidden] [ref=f4e2251] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkL1v00AYxtVWQAkgogxFyhiJDIVLzneu4xZZ6M52PprUSfPVqIt1sS-ORWK7d9e0ZcjOjsQE_w8bGxsS_0MXNpTyIcEzPa8ePXof_XLB7u33b1_vF54QpA2P-6ORp7cb49KWtr8340l87S-96QqPq2dZeyJfjMedoz1sj-R0NpGp7ATSxeYk7FyLqP8I6UZFNypYq8Dz7QGd7hJ32HT7rUHhWe5ByOUblWaFxyOv79rdhtc6d53iu63c7ibxp2pWeMiW7G2aVOKk-HwuGRA8SJdLnoRMxWkCJBerOOBAciaCOZiqWekeT_yWt4-WlwsVg6lgSQgCwZmKVxz8_ggCJkIJMhYnigsQpIniiUL5E2r7uDfo-I47aA-7vZKZ29Lytz--fPz8ySnm_7Q3Q3AmF6WnGEIIDfMA6ToysYF2Wl7_aMfu2fvdwiuHEjurt0CNrOnFL0VkTU-V6C5b5F-tabSmp2tK7kxUzNuRe904XgUkdlpqrlvow3bu_fZcqUweVatXV1eVv2SqUqWCy2rGIl41HM2mNqoDEzuHQIcUAnIIawDZyKF1ra7VDPT6ruALPrMG1CdQ16FpIOTSMwrhmJ6QkQYIxCbUMdTI2fGw1-wSSBpOOQt9EfrZYh4KS5XnkvmB8OPQguVF5jMZJ9KikJq1noeG5y8ppG0NN23tYBNfXHJxYw3ZdMHV5paLVFn_Iy3LMPNZ6EcivcysDV6MdHxoYBNjvRxbLJNlthmumt4k7R-4q5ufiWbZTA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                          - link [ref=f4e2252] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkL1v00AYxtVWQAkgogxFyhiJDIVLzneu4xZZ6M52PprUSfPVqIt1sS-ORWK7d9e0ZcjOjsQE_w8bGxsS_0MXNpTyIcEzPa8ePXof_XLB7u33b1_vF54QpA2P-6ORp7cb49KWtr8340l87S-96QqPq2dZeyJfjMedoz1sj-R0NpGp7ATSxeYk7FyLqP8I6UZFNypYq8Dz7QGd7hJ32HT7rUHhWe5ByOUblWaFxyOv79rdhtc6d53iu63c7ibxp2pWeMiW7G2aVOKk-HwuGRA8SJdLnoRMxWkCJBerOOBAciaCOZiqWekeT_yWt4-WlwsVg6lgSQgCwZmKVxz8_ggCJkIJMhYnigsQpIniiUL5E2r7uDfo-I47aA-7vZKZ29Lytz--fPz8ySnm_7Q3Q3AmF6WnGEIIDfMA6ToysYF2Wl7_aMfu2fvdwiuHEjurt0CNrOnFL0VkTU-V6C5b5F-tabSmp2tK7kxUzNuRe904XgUkdlpqrlvow3bu_fZcqUweVatXV1eVv2SqUqWCy2rGIl41HM2mNqoDEzuHQIcUAnIIawDZyKF1ra7VDPT6ruALPrMG1CdQ16FpIOTSMwrhmJ6QkQYIxCbUMdTI2fGw1-wSSBpOOQt9EfrZYh4KS5XnkvmB8OPQguVF5jMZJ9KikJq1noeG5y8ppG0NN23tYBNfXHJxYw3ZdMHV5paLVFn_Iy3LMPNZ6EcivcysDV6MdHxoYBNjvRxbLJNlthmumt4k7R-4q5ufiWbZTA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_logo&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                            - img "ESR" [ref=f4e2254]
                        - generic [ref=f4e2255]:
                          - link [aria-hidden] [ref=f4e2256] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkL1v00AYxtVWQAkgogxFyhiJDIVLzneu4xZZ6M52PprUSfPVqIt1sS-ORWK7d9e0ZcjOjsQE_w8bGxsS_0MXNpTyIcEzPa8ePXof_XLB7u33b1_vF54QpA2P-6ORp7cb49KWtr8340l87S-96QqPq2dZeyJfjMedoz1sj-R0NpGp7ATSxeYk7FyLqP8I6UZFNypYq8Dz7QGd7hJ32HT7rUHhWe5ByOUblWaFxyOv79rdhtc6d53iu63c7ibxp2pWeMiW7G2aVOKk-HwuGRA8SJdLnoRMxWkCJBerOOBAciaCOZiqWekeT_yWt4-WlwsVg6lgSQgCwZmKVxz8_ggCJkIJMhYnigsQpIniiUL5E2r7uDfo-I47aA-7vZKZ29Lytz--fPz8ySnm_7Q3Q3AmF6WnGEIIDfMA6ToysYF2Wl7_aMfu2fvdwiuHEjurt0CNrOnFL0VkTU-V6C5b5F-tabSmp2tK7kxUzNuRe904XgUkdlpqrlvow3bu_fZcqUweVatXV1eVv2SqUqWCy2rGIl41HM2mNqoDEzuHQIcUAnIIawDZyKF1ra7VDPT6ruALPrMG1CdQ16FpIOTSMwrhmJ6QkQYIxCbUMdTI2fGw1-wSSBpOOQt9EfrZYh4KS5XnkvmB8OPQguVF5jMZJ9KikJq1noeG5y8ppG0NN23tYBNfXHJxYw3ZdMHV5paLVFn_Iy3LMPNZ6EcivcysDV6MdHxoYBNjvRxbLJNlthmumt4k7R-4q5ufiWbZTA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                          - link "Level Up Your iPad 10" [ref=f4e2257] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkL1v00AYxtVWQAkgogxFyhiJDIVLzneu4xZZ6M52PprUSfPVqIt1sS-ORWK7d9e0ZcjOjsQE_w8bGxsS_0MXNpTyIcEzPa8ePXof_XLB7u33b1_vF54QpA2P-6ORp7cb49KWtr8340l87S-96QqPq2dZeyJfjMedoz1sj-R0NpGp7ATSxeYk7FyLqP8I6UZFNypYq8Dz7QGd7hJ32HT7rUHhWe5ByOUblWaFxyOv79rdhtc6d53iu63c7ibxp2pWeMiW7G2aVOKk-HwuGRA8SJdLnoRMxWkCJBerOOBAciaCOZiqWekeT_yWt4-WlwsVg6lgSQgCwZmKVxz8_ggCJkIJMhYnigsQpIniiUL5E2r7uDfo-I47aA-7vZKZ29Lytz--fPz8ySnm_7Q3Q3AmF6WnGEIIDfMA6ToysYF2Wl7_aMfu2fvdwiuHEjurt0CNrOnFL0VkTU-V6C5b5F-tabSmp2tK7kxUzNuRe904XgUkdlpqrlvow3bu_fZcqUweVatXV1eVv2SqUqWCy2rGIl41HM2mNqoDEzuHQIcUAnIIawDZyKF1ra7VDPT6ruALPrMG1CdQ16FpIOTSMwrhmJ6QkQYIxCbUMdTI2fGw1-wSSBpOOQt9EfrZYh4KS5XnkvmB8OPQguVF5jMZJ9KikJq1noeG5y8ppG0NN23tYBNfXHJxYw3ZdMHV5paLVFn_Iy3LMPNZ6EcivcysDV6MdHxoYBNjvRxbLJNlthmumt4k7R-4q5ufiWbZTA&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_hl&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                - generic [ref=f4e2262]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkukskg7MB7fQiqrso0BAzUEO1yysQZ7ADdgOzMTSLpgX_U5KvU9KvUJKmVXqS_QVR-gcnqR2n_1HZ3z65zz54L9H9--3twrPNaR4LUHp6eO1GkOSzvC4cGMxNGVv3Kma3FYHaWdMXs-HHaPDyatGQ4gUOlVOGpsutPg3KuQ-eAhkpSKpFREoQLPdl1juq9bXssa2G7hae5-SNg5T9LCo1NnYJm9pmOfWfXiu53cftbxp3xWeIBX-G0SV6K4-GzBMKAkSFYrEoeYR0kMGKHrKCCAEUyDBZjyWekuiX3bOUSryyWPwJTiOAQBJZhHawJ-bwQBpiEDKY5iTigIkpiTmKP8a8P0xb7b9euW2_F6_ZKa20H595--3Hz_fKeY_-PODhFTtiw9QRBCJKs1VUIQimjPdgbHe2bfPOwVXtYN3UwbNlD1rXHxS3N9a5xw2lvZ-r_aGvOtcbI19FuYF_Pm3LpqtteBHtVtvpA09HE392F3wXnKjqvVzWZT-RtMlfGEElZN8ZxUFWjBmtUQgS4YEpAsJIKa0rAANJEsqKJeV03z1a3Bp2SmuYavQwlBJMtW12tJ447rNBUB6BAKSD4SuhO74faliTE4sstp6NPQT5eLkGq8vGDYD6gfhZqq1lTlSBQgKi9TH7MoZpoB1fZImCjj4YtbrLWktpBht-nJstvOJi8uCb3WPDxdEp7VbJlw7f-MyyxMfRz6c5pcplqWt1hDsiJkUI40nLIyzj5pDwPx-s2JN3J-Art43OI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                      - link [ref=f4e2263] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkukskg7MB7fQiqrso0BAzUEO1yysQZ7ADdgOzMTSLpgX_U5KvU9KvUJKmVXqS_QVR-gcnqR2n_1HZ3z65zz54L9H9--3twrPNaR4LUHp6eO1GkOSzvC4cGMxNGVv3Kma3FYHaWdMXs-HHaPDyatGQ4gUOlVOGpsutPg3KuQ-eAhkpSKpFREoQLPdl1juq9bXssa2G7hae5-SNg5T9LCo1NnYJm9pmOfWfXiu53cftbxp3xWeIBX-G0SV6K4-GzBMKAkSFYrEoeYR0kMGKHrKCCAEUyDBZjyWekuiX3bOUSryyWPwJTiOAQBJZhHawJ-bwQBpiEDKY5iTigIkpiTmKP8a8P0xb7b9euW2_F6_ZKa20H595--3Hz_fKeY_-PODhFTtiw9QRBCJKs1VUIQimjPdgbHe2bfPOwVXtYN3UwbNlD1rXHxS3N9a5xw2lvZ-r_aGvOtcbI19FuYF_Pm3LpqtteBHtVtvpA09HE392F3wXnKjqvVzWZT-RtMlfGEElZN8ZxUFWjBmtUQgS4YEpAsJIKa0rAANJEsqKJeV03z1a3Bp2SmuYavQwlBJMtW12tJ447rNBUB6BAKSD4SuhO74faliTE4sstp6NPQT5eLkGq8vGDYD6gfhZqq1lTlSBQgKi9TH7MoZpoB1fZImCjj4YtbrLWktpBht-nJstvOJi8uCb3WPDxdEp7VbJlw7f-MyyxMfRz6c5pcplqWt1hDsiJkUI40nLIyzj5pDwPx-s2JN3J-Art43OI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_ls&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                        - img "Wayona" [ref=f4e2264]
                      - generic [ref=f4e2266]:
                        - generic [ref=f4e2267]:
                          - link [aria-hidden] [ref=f4e2268] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkukskg7MB7fQiqrso0BAzUEO1yysQZ7ADdgOzMTSLpgX_U5KvU9KvUJKmVXqS_QVR-gcnqR2n_1HZ3z65zz54L9H9--3twrPNaR4LUHp6eO1GkOSzvC4cGMxNGVv3Kma3FYHaWdMXs-HHaPDyatGQ4gUOlVOGpsutPg3KuQ-eAhkpSKpFREoQLPdl1juq9bXssa2G7hae5-SNg5T9LCo1NnYJm9pmOfWfXiu53cftbxp3xWeIBX-G0SV6K4-GzBMKAkSFYrEoeYR0kMGKHrKCCAEUyDBZjyWekuiX3bOUSryyWPwJTiOAQBJZhHawJ-bwQBpiEDKY5iTigIkpiTmKP8a8P0xb7b9euW2_F6_ZKa20H595--3Hz_fKeY_-PODhFTtiw9QRBCJKs1VUIQimjPdgbHe2bfPOwVXtYN3UwbNlD1rXHxS3N9a5xw2lvZ-r_aGvOtcbI19FuYF_Pm3LpqtteBHtVtvpA09HE392F3wXnKjqvVzWZT-RtMlfGEElZN8ZxUFWjBmtUQgS4YEpAsJIKa0rAANJEsqKJeV03z1a3Bp2SmuYavQwlBJMtW12tJ447rNBUB6BAKSD4SuhO74faliTE4sstp6NPQT5eLkGq8vGDYD6gfhZqq1lTlSBQgKi9TH7MoZpoB1fZImCjj4YtbrLWktpBht-nJstvOJi8uCb3WPDxdEp7VbJlw7f-MyyxMfRz6c5pcplqWt1hDsiJkUI40nLIyzj5pDwPx-s2JN3J-Art43OI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                          - link [ref=f4e2269] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkukskg7MB7fQiqrso0BAzUEO1yysQZ7ADdgOzMTSLpgX_U5KvU9KvUJKmVXqS_QVR-gcnqR2n_1HZ3z65zz54L9H9--3twrPNaR4LUHp6eO1GkOSzvC4cGMxNGVv3Kma3FYHaWdMXs-HHaPDyatGQ4gUOlVOGpsutPg3KuQ-eAhkpSKpFREoQLPdl1juq9bXssa2G7hae5-SNg5T9LCo1NnYJm9pmOfWfXiu53cftbxp3xWeIBX-G0SV6K4-GzBMKAkSFYrEoeYR0kMGKHrKCCAEUyDBZjyWekuiX3bOUSryyWPwJTiOAQBJZhHawJ-bwQBpiEDKY5iTigIkpiTmKP8a8P0xb7b9euW2_F6_ZKa20H595--3Hz_fKeY_-PODhFTtiw9QRBCJKs1VUIQimjPdgbHe2bfPOwVXtYN3UwbNlD1rXHxS3N9a5xw2lvZ-r_aGvOtcbI19FuYF_Pm3LpqtteBHtVtvpA09HE392F3wXnKjqvVzWZT-RtMlfGEElZN8ZxUFWjBmtUQgS4YEpAsJIKa0rAANJEsqKJeV03z1a3Bp2SmuYavQwlBJMtW12tJ447rNBUB6BAKSD4SuhO74faliTE4sstp6NPQT5eLkGq8vGDYD6gfhZqq1lTlSBQgKi9TH7MoZpoB1fZImCjj4YtbrLWktpBht-nJstvOJi8uCb3WPDxdEp7VbJlw7f-MyyxMfRz6c5pcplqWt1hDsiJkUI40nLIyzj5pDwPx-s2JN3J-Art43OI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_logo&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                            - img "Wayona" [ref=f4e2271]
                        - generic [ref=f4e2272]:
                          - link [aria-hidden] [ref=f4e2273] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkukskg7MB7fQiqrso0BAzUEO1yysQZ7ADdgOzMTSLpgX_U5KvU9KvUJKmVXqS_QVR-gcnqR2n_1HZ3z65zz54L9H9--3twrPNaR4LUHp6eO1GkOSzvC4cGMxNGVv3Kma3FYHaWdMXs-HHaPDyatGQ4gUOlVOGpsutPg3KuQ-eAhkpSKpFREoQLPdl1juq9bXssa2G7hae5-SNg5T9LCo1NnYJm9pmOfWfXiu53cftbxp3xWeIBX-G0SV6K4-GzBMKAkSFYrEoeYR0kMGKHrKCCAEUyDBZjyWekuiX3bOUSryyWPwJTiOAQBJZhHawJ-bwQBpiEDKY5iTigIkpiTmKP8a8P0xb7b9euW2_F6_ZKa20H595--3Hz_fKeY_-PODhFTtiw9QRBCJKs1VUIQimjPdgbHe2bfPOwVXtYN3UwbNlD1rXHxS3N9a5xw2lvZ-r_aGvOtcbI19FuYF_Pm3LpqtteBHtVtvpA09HE392F3wXnKjqvVzWZT-RtMlfGEElZN8ZxUFWjBmtUQgS4YEpAsJIKa0rAANJEsqKJeV03z1a3Bp2SmuYavQwlBJMtW12tJ447rNBUB6BAKSD4SuhO74faliTE4sstp6NPQT5eLkGq8vGDYD6gfhZqq1lTlSBQgKi9TH7MoZpoB1fZImCjj4YtbrLWktpBht-nJstvOJi8uCb3WPDxdEp7VbJlw7f-MyyxMfRz6c5pcplqWt1hDsiJkUI40nLIyzj5pDwPx-s2JN3J-Art43OI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
                          - link "Fast Charging Nylon Braided Data Cables for iphone" [ref=f4e2274] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkukskg7MB7fQiqrso0BAzUEO1yysQZ7ADdgOzMTSLpgX_U5KvU9KvUJKmVXqS_QVR-gcnqR2n_1HZ3z65zz54L9H9--3twrPNaR4LUHp6eO1GkOSzvC4cGMxNGVv3Kma3FYHaWdMXs-HHaPDyatGQ4gUOlVOGpsutPg3KuQ-eAhkpSKpFREoQLPdl1juq9bXssa2G7hae5-SNg5T9LCo1NnYJm9pmOfWfXiu53cftbxp3xWeIBX-G0SV6K4-GzBMKAkSFYrEoeYR0kMGKHrKCCAEUyDBZjyWekuiX3bOUSryyWPwJTiOAQBJZhHawJ-bwQBpiEDKY5iTigIkpiTmKP8a8P0xb7b9euW2_F6_ZKa20H595--3Hz_fKeY_-PODhFTtiw9QRBCJKs1VUIQimjPdgbHe2bfPOwVXtYN3UwbNlD1rXHxS3N9a5xw2lvZ-r_aGvOtcbI19FuYF_Pm3LpqtteBHtVtvpA09HE392F3wXnKjqvVzWZT-RtMlfGEElZN8ZxUFWjBmtUQgS4YEpAsJIKa0rAANJEsqKJeV03z1a3Bp2SmuYavQwlBJMtW12tJ447rNBUB6BAKSD4SuhO74faliTE4sstp6NPQT5eLkGq8vGDYD6gfhZqq1lTlSBQgKi9TH7MoZpoB1fZImCjj4YtbrLWktpBht-nJstvOJi8uCb3WPDxdEp7VbJlw7f-MyyxMfRz6c5pcplqWt1hDsiJkUI40nLIyzj5pDwPx-s2JN3J-Art43OI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_hl&pd_rd_w=GbDtG&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=JKX0FBFGQA85M47E2ASB&pd_rd_wg=uUOFI&pd_rd_r=740274f9-6b8e-4985-afd6-92cd3770f6b6
          - generic [ref=f4e2283]:
            - heading "Need help?" [level=2] [ref=f4e2286]
            - generic [ref=f4e2287]:
              - link "Visit the help section" [ref=f4e2288] [cursor=pointer]:
                - /url: /gp/help/customer/display.html?nodeId=201889520
              - text: or
              - link "contact us" [ref=f4e2289] [cursor=pointer]:
                - /url: /gp/help/customer/contact-us
        - link "Go back to filtering menu" [ref=f4e2290] [cursor=pointer]:
          - /url: "#s-skipLinkTargetForFilterOptions"
      - dialog "Filters" [ref=f4e2291]:
        - generic [ref=f4e2292]:
          - link "Skip to main search results" [ref=f4e2293] [cursor=pointer]:
            - /url: "#s-skipLinkTargetForMainSearchResults"
          - generic [ref=f4e2299]:
            - group [ref=f4e2300]:
              - heading "Popular Shopping Ideas" [level=2] [ref=f4e2301]
              - list [ref=f4e2302]:
                - listitem [ref=f4e2303]:
                  - link "Sim-enabled" [ref=f4e2305] [cursor=pointer]:
                    - /url: /s?k=tablet+with+sim&ref=sr_nr_p_rag_integrated_qb_0
                - listitem [ref=f4e2306]:
                  - link "Budget" [ref=f4e2308] [cursor=pointer]:
                    - /url: /s?k=budget+tablet&ref=sr_nr_p_rag_integrated_qb_1
                - listitem [ref=f4e2309]:
                  - link "128gb" [ref=f4e2311] [cursor=pointer]:
                    - /url: /s?k=tablet+128gb+storage&ref=sr_nr_p_rag_integrated_qb_2
                - listitem [ref=f4e2312]:
                  - link "Premium" [ref=f4e2314] [cursor=pointer]:
                    - /url: /s?k=premium+tablet&ref=sr_nr_p_rag_integrated_qb_3
                - listitem [ref=f4e2315]:
                  - button "See more" [ref=f4e2318] [cursor=pointer]
            - separator [aria-hidden] [ref=f4e2320]
            - group [ref=f4e2321]:
              - heading "Delivery Day" [level=2] [ref=f4e2322]
              - list "Delivery Day" [ref=f4e2323]:
                - listitem "Popular Shopping Ideas" [ref=f4e2324]:
                  - link "Apply the filter Get It Today to narrow results" [ref=f4e2326] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_90%3A6741117031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=6741116031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_90_1&ds=v1%3AlZBWjBjvSfK7UBxKOk7oAMNjISpAGsDInR5pW6PzGjw
                    - checkbox [aria-hidden] [ref=f4e2329]
                    - text: Get It Today
                - listitem "Popular Shopping Ideas" [ref=f4e2331]:
                  - link "Apply the filter Get It by Tomorrow to narrow results" [ref=f4e2333] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_90%3A6741118031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=6741116031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_90_2&ds=v1%3AGMohxCaje5mYcrkk%2FEVq1G7Ropnl0BHjWoLTXjyF2eU
                    - checkbox [aria-hidden] [ref=f4e2336]
                    - text: Get It by Tomorrow
                - listitem "Popular Shopping Ideas" [ref=f4e2338]:
                  - link "Apply the filter Get It in 2 Days to narrow results" [ref=f4e2340] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_90%3A20912642031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=6741116031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_90_3&ds=v1%3Ay%2FcqJKlph5BlZp60j2l7XA2I2CVuP%2B38nYYiDoTaP6g
                    - checkbox [aria-hidden] [ref=f4e2343]
                    - text: Get It in 2 Days
              - heading "Eligible for Free Delivery" [level=2] [ref=f4e2345]
              - list "Eligible for Free Delivery" [ref=f4e2346]:
                - listitem "Popular Shopping Ideas" [ref=f4e2347]:
                  - link "Apply the filter Free Shipping to narrow results" [ref=f4e2349] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_free_shipping_eligible%3A205563695031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=205563694031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_free_shipping_eligible_1&ds=v1%3AnT5%2FLWoJkhO9Xvq%2BjiuM%2FuiO%2FoGRRCy9P4ffSjThTlo
                    - checkbox [aria-hidden] [ref=f4e2352]
                    - text: Free Shipping
                    - generic [ref=f4e2354]: Get FREE Shipping on eligible orders shipped by Amazon
            - group [ref=f4e2355]:
              - heading "Customer Reviews" [level=2] [ref=f4e2356]
              - list "Customer Reviews" [ref=f4e2357]:
                - listitem [ref=f4e2358]:
                  - link "Apply the filter 4 Stars & Up to narrow results" [ref=f4e2361] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_72%3A1318476031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318475031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_72_1&ds=v1%3AJpSuz%2B713WEtyh0S6fo7Q12%2B%2B1px7eI8cS5aKnNvN4g
                    - generic [ref=f4e2362]: 4 Stars
                    - text: "& Up"
            - group [ref=f4e2364]:
              - generic [ref=f4e2365]:
                - generic [ref=f4e2366]: Price
                - generic [ref=f4e2369]:
                  - generic [ref=f4e2370]:
                    - generic [ref=f4e2371]: ₹195
                    - generic [aria-hidden] [ref=f4e2372]: –
                    - generic [ref=f4e2373]: ₹180,700+
                  - generic [ref=f4e2376]:
                    - generic:
                      - slider "Minimum price": "0"
                    - generic [ref=f4e2377]:
                      - slider "Maximum price": "189"
              - list [ref=f4e2378]:
                - listitem [ref=f4e2379]:
                  - link "Up to ₹4,300" [ref=f4e2381] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_36%3A-430000&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318502031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_36_1&ds=v1%3AYxJVFa4w4oft5MSSgC%2F2bnH3maS%2BSDwuNbX0n9l7CDA
                - listitem [ref=f4e2382]:
                  - link "₹4,300 - ₹14,500" [ref=f4e2384] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_36%3A430000-1450000&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318502031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_36_2&ds=v1%3APRyJIIq2OsFw2FAfRpJO0Pc24%2BH06Gfs1HKln3mW%2BC0
                - listitem [ref=f4e2385]:
                  - link "₹14,500 - ₹20,000" [ref=f4e2387] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_36%3A1450000-2000000&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318502031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_36_3&ds=v1%3A8TwXvN7fUIsEtEE2ae%2B4UyU38A%2FrjI6v2imsA33cDTM
                - listitem [ref=f4e2388]:
                  - link "₹20,000 - ₹27,500" [ref=f4e2390] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_36%3A2000000-2750000&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318502031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_36_4&ds=v1%3AtuY1PxWZr9h6KaDuBWHoGH6uXcYfJMT6wEQB7%2BQOkEU
                - listitem [ref=f4e2391]:
                  - link "Over ₹27,500" [ref=f4e2393] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_36%3A2750000-&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318502031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_36_5&ds=v1%3AIMO6SyqaL8s8IRhou8dGa%2F5Pr83o8%2FN%2FLI%2Bkuw2THyQ
              - heading "Deals & Discounts" [level=2] [ref=f4e2394]
              - list "Deals & Discounts" [ref=f4e2395]:
                - listitem [ref=f4e2396]:
                  - link "All Discounts" [ref=f4e2398] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_deal_type%3A26921226031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=26921223031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_deal_type_1&ds=v1%3AtCsQM0j%2B%2F5%2FReTe5AcQ9tULAYRwAYtk%2FYuCU0%2BFdQco
                - listitem [ref=f4e2399]:
                  - link "Coupons" [ref=f4e2401] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_deal_type%3A210770212031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=26921223031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_deal_type_2&ds=v1%3AFsHrQDdFiHo2vO9K4iXI1AZU9xrOWLmFShp7YtQHbRo
                - listitem [ref=f4e2402]:
                  - link "Today's Deals" [ref=f4e2404] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_deal_type%3A26921224031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=26921223031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_deal_type_3&ds=v1%3Aj6MG2gQRLEhKCoBExs3j2D5XVfNRDIiyMmozSycKkrc
            - group [ref=f4e2405]:
              - heading "Brands" [level=2] [ref=f4e2406]
              - list "Brands" [ref=f4e2407]:
                - listitem "Popular Shopping Ideas" [ref=f4e2408]:
                  - link "Apply the filter Apple to narrow results" [ref=f4e2410] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_123%3A110955&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=91049095031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_123_1&ds=v1%3AeqIDrE6pnQDWrgTzleYdFjzFujmpL68Es98BZ%2BAVcrU
                    - checkbox [aria-hidden] [ref=f4e2413]
                    - text: Apple
                - listitem "Popular Shopping Ideas" [ref=f4e2415]:
                  - link "Apply the filter Lenovo to narrow results" [ref=f4e2417] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_123%3A391242&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=91049095031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_123_2&ds=v1%3A5szdD%2BXpUfMv%2FjBpFfivBtV2msjwKrGwYnGn6hE5dOw
                    - checkbox [aria-hidden] [ref=f4e2420]
                    - text: Lenovo
                - listitem "Popular Shopping Ideas" [ref=f4e2422]:
                  - link "Apply the filter OnePlus to narrow results" [ref=f4e2424] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_123%3A253649&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=91049095031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_123_3&ds=v1%3AO99pwHb%2FHA8k90dgQhgV0KL1zQkRpHYuc%2FS%2BLqTjhDg
                    - checkbox [aria-hidden] [ref=f4e2427]
                    - text: OnePlus
                - listitem "Popular Shopping Ideas" [ref=f4e2429]:
                  - link "Apply the filter Microsoft to narrow results" [ref=f4e2431] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_123%3A42439&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=91049095031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_123_4&ds=v1%3A6uK5mHdi8aoigRO4zw%2Bno03J9NwrgeMPAkaw8rp8fpI
                    - checkbox [aria-hidden] [ref=f4e2434]
                    - text: Microsoft
                - listitem "Popular Shopping Ideas" [ref=f4e2436]:
                  - link "Apply the filter ASUS to narrow results" [ref=f4e2438] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_123%3A219979&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=91049095031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_123_5&ds=v1%3AH73FYFq2r19yzE7g3hKyRpUE17Zz2hICw6okVlN64Vc
                    - checkbox [aria-hidden] [ref=f4e2441]
                    - text: ASUS
                - listitem "Popular Shopping Ideas" [ref=f4e2443]:
                  - link "Apply the filter Acer to narrow results" [ref=f4e2445] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_123%3A247341&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=91049095031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_123_6&ds=v1%3AA6DtTP68RIh1Wu9fcVpi%2F3u3nhzVsfxuZcBeeRErdl4
                    - checkbox [aria-hidden] [ref=f4e2448]
                    - text: Acer
                - listitem "Popular Shopping Ideas" [ref=f4e2450]:
                  - link "Apply the filter Redmi to narrow results" [ref=f4e2452] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_123%3A339703&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=91049095031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_123_7&ds=v1%3AipoZJJrNbUO28MKLJkDWGRmKdmOQoljYctmA59dU5EY
                    - checkbox [aria-hidden] [ref=f4e2455]
                    - text: Redmi
                - listitem [ref=f4e2457]:
                  - button "See more, Brands" [ref=f4e2460] [cursor=pointer]: See more
            - group [ref=f4e2462]:
              - heading "Discount" [level=2] [ref=f4e2463]
              - list "Discount" [ref=f4e2464]:
                - listitem [ref=f4e2465]:
                  - link "10% Off or more" [ref=f4e2467] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_pct-off-with-tax%3A2665399031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=2665398031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_pct-off-with-tax_1&ds=v1%3AEk1la8vSrGbi%2BMD748XRgvuJ1v1VgrYH6b0EZr0jSFQ
                - listitem [ref=f4e2468]:
                  - link "25% Off or more" [ref=f4e2470] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_pct-off-with-tax%3A2665400031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=2665398031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_pct-off-with-tax_2&ds=v1%3AJRYBQaI%2BYRr9cE9UWr1nCu5xeHeeg6QbM4yUbCmbaQU
                - listitem [ref=f4e2471]:
                  - link "35% Off or more" [ref=f4e2473] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_pct-off-with-tax%3A2665402031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=2665398031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_pct-off-with-tax_3&ds=v1%3AxQu0j06prdk1dH4UhD4KH8LXI0qrxUKjOUB%2FA%2F9M%2FYI
                - listitem [ref=f4e2474]:
                  - link "50% Off or more" [ref=f4e2476] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_pct-off-with-tax%3A2665401031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=2665398031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_pct-off-with-tax_4&ds=v1%3AOgrmMmC%2Fn7OYVr7fiygbxYSp4Q%2BefirOTU79NTDhOIg
                - listitem [ref=f4e2477]:
                  - link "60% Off or more" [ref=f4e2479] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_pct-off-with-tax%3A27060456031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=2665398031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_pct-off-with-tax_5&ds=v1%3A6CxA%2BFLO1ij7j5ETNhtlq964f4h%2FI2Bh8XJmStNAqak
                - listitem [ref=f4e2480]:
                  - link "70% Off or more" [ref=f4e2482] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_pct-off-with-tax%3A27060457031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=2665398031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_pct-off-with-tax_6&ds=v1%3AhmZaBO8pFMMuEkKNXUbFFNxzVKotP6VPs9%2BR8oviY40
            - group [ref=f4e2483]:
              - heading "Pay On Delivery" [level=2] [ref=f4e2484]
              - list "Pay On Delivery" [ref=f4e2485]:
                - listitem "Popular Shopping Ideas" [ref=f4e2486]:
                  - link "Apply the filter Eligible for Pay On Delivery to narrow results" [ref=f4e2488] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_is_cod_eligible%3A4931671031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=4931670031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_is_cod_eligible_1&ds=v1%3A6zLqFLd96PHGk7HwdwchFGqloWgw44wPELWqNl%2BlvZo
                    - checkbox [aria-hidden] [ref=f4e2491]
                    - text: Eligible for Pay On Delivery
            - group [ref=f4e2493]:
              - heading "Colour" [level=2] [ref=f4e2494]
              - list "Colour" [ref=f4e2495]:
                - listitem [ref=f4e2496]:
                  - generic:
                    - link "Apply the filter Pink to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564001031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_1&ds=v1%3AK1q%2FbVs%2FahRgPIa7IrEgAD2d7YP5QP2yGMohqcLRIb0
                      - generic [ref=f4e2497] [cursor=pointer]
                - listitem [ref=f4e2498]:
                  - generic:
                    - link "Apply the filter Blue to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564007031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_2&ds=v1%3Anx7RAioRkIVxAI7%2FHkZ6SAxDajz8UfJuiRPwlu6EIkc
                      - generic [ref=f4e2499] [cursor=pointer]
                - listitem [ref=f4e2500]:
                  - generic:
                    - link "Apply the filter Black to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15563995031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_3&ds=v1%3AtZzaLPBmYqHfjwdW%2F0X%2B%2FJA%2B43B3%2BGQXVRvapNs%2FxiY
                      - generic [ref=f4e2501] [cursor=pointer]
                - listitem [ref=f4e2502]:
                  - generic:
                    - link "Apply the filter Grey to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15563996031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_4&ds=v1%3AY13mD8Gwt%2Fm6wHqvXxAoelqD3qNfc7WfLnT36a6a75M
                      - generic [ref=f4e2503] [cursor=pointer]
                - listitem [ref=f4e2504]:
                  - generic:
                    - link "Apply the filter White to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15563997031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_5&ds=v1%3AUIJqrPZ%2F6jiVv4I6Hz%2FqP1RBjvX%2BbjDSHxAiNCZINF4
                      - generic [ref=f4e2505] [cursor=pointer]
                - listitem [ref=f4e2506]:
                  - generic:
                    - link "Apply the filter Red to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564000031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_6&ds=v1%3AWda%2B3oWBxylgVxK2E19KfcK00Gy%2FXMnyYHxekzB2alY
                      - generic [ref=f4e2507] [cursor=pointer]
                - listitem [ref=f4e2508]:
                  - generic:
                    - link "Apply the filter Green to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564005031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_7&ds=v1%3AVEMe8ICLc6eGURfij9QdoT%2BxRBOV9Ckr424sdai5Ya0
                      - generic [ref=f4e2509] [cursor=pointer]
                - listitem [ref=f4e2510]:
                  - generic:
                    - link "Apply the filter Purple to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564008031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_8&ds=v1%3Ac9GjVnLVEIDhL8kClYgB8E4blQwwvmj3oLsVABDVssI
                      - generic [ref=f4e2511] [cursor=pointer]
                - listitem [ref=f4e2512]:
                  - generic:
                    - link "Apply the filter Silver to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564010031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_9&ds=v1%3AIpNGK%2Ffgfh4PjJVRdKXAXDuFkuGz333DERIXMX3D2uA
                      - generic [ref=f4e2513] [cursor=pointer]
                - listitem [ref=f4e2514]:
                  - generic:
                    - link "Apply the filter Multicoloured to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564011031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_10&ds=v1%3AN3bjYzXxT1S6A2DuUlti4BI8nSckxpQB43HI9tatTuY
                      - generic [ref=f4e2515] [cursor=pointer]
                - listitem [ref=f4e2516]:
                  - generic:
                    - link "Apply the filter Transparent to narrow results":
                      - /url: /s?k=Tablet&rh=p_n_size_two_browse-vebin%3A15564012031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=15563994031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_size_two_browse-vebin_11&ds=v1%3A89sGg%2F0n7kHrXvjDFS6MOI%2BbHqGnWnEN6ZlND%2F4xL74
                      - generic [ref=f4e2517] [cursor=pointer]
            - group [ref=f4e2518]:
              - heading "Seller" [level=2] [ref=f4e2519]
              - list "Seller" [ref=f4e2520]:
                - listitem "Popular Shopping Ideas" [ref=f4e2521]:
                  - link "Apply the filter ACCESSORIESMASTERS to narrow results" [ref=f4e2523] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_6%3AA2SQXY79JAT94&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318474031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_6_1&ds=v1%3AbbYEpEOVL%2FRHRmaHozx2%2FpjJiXotQFCLxgJ%2F8SDOAqQ
                    - checkbox [aria-hidden] [ref=f4e2526]
                    - text: ACCESSORIESMASTERS
                - listitem "Popular Shopping Ideas" [ref=f4e2528]:
                  - link "Apply the filter Clicktech Retail Private Ltd to narrow results" [ref=f4e2530] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_6%3AAJ6SIZC8YQDZX&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318474031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_6_2&ds=v1%3AYOMf3u8TGty3ChRLIbn5cUEk0I0Y4PUYqaJ7kWkUGpQ
                    - checkbox [aria-hidden] [ref=f4e2533]
                    - text: Clicktech Retail Private Ltd
                - listitem [ref=f4e2535]:
                  - button "See more, Seller" [ref=f4e2538] [cursor=pointer]: See more
            - group [ref=f4e2540]:
              - heading "Item Condition" [level=2] [ref=f4e2541]
              - list "Item Condition" [ref=f4e2542]:
                - listitem "Popular Shopping Ideas" [ref=f4e2543]:
                  - link "Apply the filter New to narrow results" [ref=f4e2545] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_condition-type%3A8609960031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=8609959031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_condition-type_1&ds=v1%3Abvryxv9zhHJlooxhwH%2BSQZPE3lyoJu3Za8o0b1dyp%2Fc
                    - checkbox [aria-hidden] [ref=f4e2548]
                    - text: New
            - group [ref=f4e2550]:
              - heading "Computers & Accessories Brands" [level=2] [ref=f4e2551]
              - list "Computers & Accessories Brands" [ref=f4e2552]:
                - listitem "Popular Shopping Ideas" [ref=f4e2553]:
                  - link "Apply the filter Top Brands to narrow results" [ref=f4e2555] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_format_browse-bin%3A30678576031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=30678571031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_format_browse-bin_1&ds=v1%3AgCI2%2Bf7Rk%2B2sV40y36TvvWwIjK8p63wps14VAsmMH1E
                    - checkbox [aria-hidden] [ref=f4e2558]
                    - text: Top Brands
            - group [ref=f4e2560]:
              - heading "Availability" [level=2] [ref=f4e2561]
              - list "Availability" [ref=f4e2562]:
                - listitem "Popular Shopping Ideas" [ref=f4e2563]:
                  - link "Apply the filter Include Out of Stock to narrow results" [ref=f4e2565] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_availability%3A1318485031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318483031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_availability_2&ds=v1%3A42%2Fa%2Bnq%2BVzqXKi6dBOB%2BaoYN8gHviFiO8VD5TIMbPQU
                    - checkbox [aria-hidden] [ref=f4e2568]
                    - text: Include Out of Stock
            - group [ref=f4e2570]:
              - heading "New Arrivals" [level=2] [ref=f4e2571]
              - list "New Arrivals" [ref=f4e2572]:
                - listitem [ref=f4e2573]:
                  - link "Last 30 days" [ref=f4e2575] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_date_first_available_absolute%3A1318487031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318486031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_date_first_available_absolute_1&ds=v1%3AJkwK09z8M%2FAKTg1O0F%2F6TA%2B6zK%2BXQ57gXLWN9LdDl2Q
                - listitem [ref=f4e2576]:
                  - link "Last 90 days" [ref=f4e2578] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_date_first_available_absolute%3A1318488031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1318486031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_date_first_available_absolute_2&ds=v1%3AyR9AngGUXpmdb0s6k6OpuoqDgMB0i2vT7cR659Bg6HM
            - group [ref=f4e2579]:
              - heading "Weight" [level=2] [ref=f4e2580]
              - list "Weight" [ref=f4e2581]:
                - listitem "Popular Shopping Ideas" [ref=f4e2582]:
                  - link "Apply the filter Up to 499 g to narrow results" [ref=f4e2584] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003486088111%3A43155384031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=43155359031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003486088111_1&ds=v1%3AbY10BEsSpMVWwdpkEsKqB2RTV%2FeHrhNJoTNVvsUOWLo
                    - checkbox [aria-hidden] [ref=f4e2587]
                    - text: Up to 499 g
                - listitem "Popular Shopping Ideas" [ref=f4e2589]:
                  - link "Apply the filter 500 to 799 g to narrow results" [ref=f4e2591] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003486088111%3A43155385031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=43155359031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003486088111_2&ds=v1%3AyuEhEnuJ4BaPIXkVyCfPPvORPpHz8OwZ%2BHqaKrIsPSY
                    - checkbox [aria-hidden] [ref=f4e2594]
                    - text: 500 to 799 g
                - listitem "Popular Shopping Ideas" [ref=f4e2596]:
                  - link "Apply the filter 800 to 999 g to narrow results" [ref=f4e2598] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003486088111%3A43155383031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=43155359031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003486088111_3&ds=v1%3AkmcPi2X4RGt2KK9y3gTqeJqUs2SGxeDwe7n%2Bwb8xWQs
                    - checkbox [aria-hidden] [ref=f4e2601]
                    - text: 800 to 999 g
                - listitem "Popular Shopping Ideas" [ref=f4e2603]:
                  - link "Apply the filter 1 kg & Above to narrow results" [ref=f4e2605] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003486088111%3A43155386031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=43155359031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003486088111_4&ds=v1%3AVUMSa0e0E4voq4T%2BQs19naEX802oaiLzgqAK%2FAc%2FIUw
                    - checkbox [aria-hidden] [ref=f4e2608]
                    - text: 1 kg & Above
            - group [ref=f4e2610]:
              - heading "Special Features" [level=2] [ref=f4e2611]
              - list "Special Features" [ref=f4e2612]:
                - listitem "Popular Shopping Ideas" [ref=f4e2613]:
                  - link "Apply the filter Expandable Storage to narrow results" [ref=f4e2615] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A77181248031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_1&ds=v1%3A567FAGUUu9RlGjYxMAQEb2dkkNZWFmyyGa%2BP6QlUAMQ
                    - checkbox [aria-hidden] [ref=f4e2618]
                    - text: Expandable Storage
                - listitem "Popular Shopping Ideas" [ref=f4e2620]:
                  - link "Apply the filter Stylus Support to narrow results" [ref=f4e2622] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A212236183031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_2&ds=v1%3AKM7g3okx%2BPjf9241V7nozTF4x%2BvuHBFXRdFdHQqCYkI
                    - checkbox [aria-hidden] [ref=f4e2625]
                    - text: Stylus Support
                - listitem "Popular Shopping Ideas" [ref=f4e2627]:
                  - link "Apply the filter Fast Charging to narrow results" [ref=f4e2629] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A28397159031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_3&ds=v1%3ANFTYRFG3O5g%2FfMOsiy4nD7LYl6ow8kurku8EUyMYlFs
                    - checkbox [aria-hidden] [ref=f4e2632]
                    - text: Fast Charging
                - listitem "Popular Shopping Ideas" [ref=f4e2634]:
                  - link "Apply the filter Stereo Speakers to narrow results" [ref=f4e2636] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A28397155031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_4&ds=v1%3Au7hfJdf2pbedWHbRJHJK6sT9qgVgksU8cilq0TlOBtA
                    - checkbox [aria-hidden] [ref=f4e2639]
                    - text: Stereo Speakers
                - listitem "Popular Shopping Ideas" [ref=f4e2641]:
                  - link "Apply the filter Phone Call Functionality to narrow results" [ref=f4e2643] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A28397153031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_5&ds=v1%3Ab2o9a3osP8AlOH%2BCJw9MAQq3ORLRjAEEZKRyq80Au3A
                    - checkbox [aria-hidden] [ref=f4e2646]
                    - text: Phone Call Functionality
                - listitem "Popular Shopping Ideas" [ref=f4e2648]:
                  - link "Apply the filter Supports USB OTG to narrow results" [ref=f4e2650] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A28397154031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_6&ds=v1%3APvh8B6aFVPU5i2D317AGSrpUZlHfW8xLCcqK3qVqM1Q
                    - checkbox [aria-hidden] [ref=f4e2653]
                    - text: Supports USB OTG
                - listitem "Popular Shopping Ideas" [ref=f4e2655]:
                  - link "Apply the filter Cellular Connectivity to narrow results" [ref=f4e2657] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A212236184031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_7&ds=v1%3A2HPx0GrtauepW3jvrVrwrw8sQ3n6zKsQCA6RFGQTkPg
                    - checkbox [aria-hidden] [ref=f4e2660]
                    - text: Cellular Connectivity
                - listitem "Popular Shopping Ideas" [ref=f4e2662]:
                  - link "Apply the filter Face Recognition to narrow results" [ref=f4e2664] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A221252634031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_8&ds=v1%3AlVYPwUNdMiwNnN4HkxNJUJKLVnwmAT9r%2FFH29DfGins
                    - checkbox [aria-hidden] [ref=f4e2667]
                    - text: Face Recognition
                - listitem "Popular Shopping Ideas" [ref=f4e2669]:
                  - link "Apply the filter Media Card Reader to narrow results" [ref=f4e2671] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A28397156031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_9&ds=v1%3A0%2Bf8uIIq3%2Fbq0jGrYkInnSBNOysXtcIlCdSLz0uDP08
                    - checkbox [aria-hidden] [ref=f4e2674]
                    - text: Media Card Reader
                - listitem "Popular Shopping Ideas" [ref=f4e2676]:
                  - link "Apply the filter Outdoor Readable to narrow results" [ref=f4e2678] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A216984675031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_10&ds=v1%3AyobMVxVAw4%2B2Wz%2FWPWtZaFOOr64lmCebPMgmAE6cn7Y
                    - checkbox [aria-hidden] [ref=f4e2681]
                    - text: Outdoor Readable
                - listitem "Popular Shopping Ideas" [ref=f4e2683]:
                  - link "Apply the filter Parental Control to narrow results" [ref=f4e2685] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003338749111%3A216984679031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397148031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003338749111_11&ds=v1%3A8g0zwV4cru7qIx%2BB7InCFD6Y6iNETuyrHbrRfkZCO4w
                    - checkbox [aria-hidden] [ref=f4e2688]
                    - text: Parental Control
            - group [ref=f4e2690]:
              - heading "Camera Description" [level=2] [ref=f4e2691]
              - list "Camera Description" [ref=f4e2692]:
                - listitem "Popular Shopping Ideas" [ref=f4e2693]:
                  - link "Apply the filter Front to narrow results" [ref=f4e2695] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015533628111%3A100694740031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100694624031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015533628111_1&ds=v1%3A5HB6HaeZJB3GQUFXoUZmEa8iYA6UNDXjvPZSU%2FPgxkU
                    - checkbox [aria-hidden] [ref=f4e2698]
                    - text: Front
                - listitem "Popular Shopping Ideas" [ref=f4e2700]:
                  - link "Apply the filter Rear to narrow results" [ref=f4e2702] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015533628111%3A100694741031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100694624031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015533628111_2&ds=v1%3AJy4ZhTUVpphwiTI0nYQ9RnDD%2FzGKVpjliiTzsriHzUo
                    - checkbox [aria-hidden] [ref=f4e2705]
                    - text: Rear
            - group [ref=f4e2707]:
              - heading "Wireless Standard" [level=2] [ref=f4e2708]
              - list "Wireless Standard" [ref=f4e2709]:
                - listitem "Popular Shopping Ideas" [ref=f4e2710]:
                  - link "Apply the filter 802.11g to narrow results" [ref=f4e2712] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_three_browse-bin%3A219267367031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=219267361031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_three_browse-bin_1&ds=v1%3A3xaJsSjUEcVIQJfLTDES9I9fSUzTejCPhjB95Od%2BDEA
                    - checkbox [aria-hidden] [ref=f4e2715]
                    - text: 802.11g
                - listitem "Popular Shopping Ideas" [ref=f4e2717]:
                  - link "Apply the filter 802.11ac to narrow results" [ref=f4e2719] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_three_browse-bin%3A219267366031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=219267361031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_three_browse-bin_2&ds=v1%3AqacQEQYp6etLmIywspMIHQOYruIHNN38n0vSEKIhvIg
                    - checkbox [aria-hidden] [ref=f4e2722]
                    - text: 802.11ac
                - listitem "Popular Shopping Ideas" [ref=f4e2724]:
                  - link "Apply the filter 802.11n to narrow results" [ref=f4e2726] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_three_browse-bin%3A219267363031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=219267361031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_three_browse-bin_3&ds=v1%3ANTHqHpbfxZXGVWjbwOa4PpS8IZKSO0QGNfQXqKQSRng
                    - checkbox [aria-hidden] [ref=f4e2729]
                    - text: 802.11n
                - listitem "Popular Shopping Ideas" [ref=f4e2731]:
                  - link "Apply the filter 802.11a to narrow results" [ref=f4e2733] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_three_browse-bin%3A219267364031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=219267361031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_three_browse-bin_4&ds=v1%3AASxDPKtNNtZyUXGI1GiZtNVBCEEi2zVrwbpbOs%2Bwm2E
                    - checkbox [aria-hidden] [ref=f4e2736]
                    - text: 802.11a
                - listitem "Popular Shopping Ideas" [ref=f4e2738]:
                  - link "Apply the filter 802.11ax to narrow results" [ref=f4e2740] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_three_browse-bin%3A219267368031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=219267361031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_three_browse-bin_5&ds=v1%3ArCLegD379wOfDC4yW3HUk3FqKT%2F4J6CzXrBzOUS40t8
                    - checkbox [aria-hidden] [ref=f4e2743]
                    - text: 802.11ax
                - listitem "Popular Shopping Ideas" [ref=f4e2745]:
                  - link "Apply the filter 802.11b to narrow results" [ref=f4e2747] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_three_browse-bin%3A219267365031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=219267361031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_three_browse-bin_6&ds=v1%3AsexH7p9f1TDOCkaqZsmlSPxAt%2F%2Ftvwo1yXTgOhzlULk
                    - checkbox [aria-hidden] [ref=f4e2750]
                    - text: 802.11b
            - group [ref=f4e2752]:
              - heading "Purpose" [level=2] [ref=f4e2753]
              - list "Purpose" [ref=f4e2754]:
                - listitem "Popular Shopping Ideas" [ref=f4e2755]:
                  - link "Apply the filter Streaming to narrow results" [ref=f4e2757] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016745304111%3A207751453031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207751445031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016745304111_1&ds=v1%3AB5G7l5621wLqfghIIYqJ2eaLaZGowfGXN%2B09IA%2FCbr0
                    - checkbox [aria-hidden] [ref=f4e2760]
                    - text: Streaming
                - listitem "Popular Shopping Ideas" [ref=f4e2762]:
                  - link "Apply the filter Browsing Internet to narrow results" [ref=f4e2764] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016745304111%3A207751452031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207751445031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016745304111_2&ds=v1%3AOreT2FSthEl3loWyctfYLKh3xH1QMXOufd7qxJkVKy8
                    - checkbox [aria-hidden] [ref=f4e2767]
                    - text: Browsing Internet
                - listitem "Popular Shopping Ideas" [ref=f4e2769]:
                  - link "Apply the filter Working to narrow results" [ref=f4e2771] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016745304111%3A207751451031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207751445031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016745304111_3&ds=v1%3AeLv50hipHYfuT57njizirMzbCia0oX1xqdo5PXHCMTk
                    - checkbox [aria-hidden] [ref=f4e2774]
                    - text: Working
                - listitem "Popular Shopping Ideas" [ref=f4e2776]:
                  - link "Apply the filter Drawing to narrow results" [ref=f4e2778] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016745304111%3A207751449031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207751445031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016745304111_4&ds=v1%3AWN7HD%2FuEztFs22pUb45mOkpZWJsb%2BEjA%2FKSe%2BI5qEpE
                    - checkbox [aria-hidden] [ref=f4e2781]
                    - text: Drawing
                - listitem "Popular Shopping Ideas" [ref=f4e2783]:
                  - link "Apply the filter Gaming to narrow results" [ref=f4e2785] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016745304111%3A207751448031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207751445031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016745304111_5&ds=v1%3AQOqyAfhIXyzimkCj7MCXI33GoPHoIIQmce5sp8hXJl8
                    - checkbox [aria-hidden] [ref=f4e2788]
                    - text: Gaming
                - listitem "Popular Shopping Ideas" [ref=f4e2790]:
                  - link "Apply the filter Learning to narrow results" [ref=f4e2792] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016745304111%3A214313890031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207751445031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016745304111_6&ds=v1%3AY3fO8PIiIoRfQATKuT7niKfT3CjGO%2B%2F4XnD2Yc3G3Aw
                    - checkbox [aria-hidden] [ref=f4e2795]
                    - text: Learning
                - listitem "Popular Shopping Ideas" [ref=f4e2797]:
                  - link "Apply the filter Listening To Music to narrow results" [ref=f4e2799] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016745304111%3A207751446031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207751445031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016745304111_7&ds=v1%3A9JrUp3D8AO8cEfybYGNHyq3446TMymJJW3CEDPoJK28
                    - checkbox [aria-hidden] [ref=f4e2802]
                    - text: Listening To Music
                - listitem [ref=f4e2804]:
                  - button "See more, Purpose" [ref=f4e2807] [cursor=pointer]: See more
            - group [ref=f4e2809]:
              - heading "Length" [level=2] [ref=f4e2810]
              - list "Length" [ref=f4e2811]:
                - listitem "Popular Shopping Ideas" [ref=f4e2812]:
                  - link "Apply the filter Up to 24 cm to narrow results" [ref=f4e2814] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015528412111%3A100618743031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100618648031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015528412111_1&ds=v1%3APWZYFZ9B24Ur0bVSUJo4a8hzEtCY6fQlhHPsRjwss6M
                    - checkbox [aria-hidden] [ref=f4e2817]
                    - text: Up to 24 cm
                - listitem "Popular Shopping Ideas" [ref=f4e2819]:
                  - link "Apply the filter 25 to 29 cm to narrow results" [ref=f4e2821] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015528412111%3A100618744031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100618648031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015528412111_2&ds=v1%3Agl92zs0LfCpAznQFQG62c88fLjg9QzwmXnKhbIVZnrk
                    - checkbox [aria-hidden] [ref=f4e2824]
                    - text: 25 to 29 cm
                - listitem "Popular Shopping Ideas" [ref=f4e2826]:
                  - link "Apply the filter 30 cm & above to narrow results" [ref=f4e2828] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015528412111%3A100618741031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100618648031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015528412111_3&ds=v1%3A7a6BQw%2FsU1K6aeIKH5T35%2B9HZYp9I8UR0KlMUJbd78U
                    - checkbox [aria-hidden] [ref=f4e2831]
                    - text: 30 cm & above
            - group [ref=f4e2833]:
              - heading "Battery Power" [level=2] [ref=f4e2834]
              - list "Battery Power" [ref=f4e2835]:
                - listitem "Popular Shopping Ideas" [ref=f4e2836]:
                  - link "Apply the filter 5,000 to 6,499 mAh to narrow results" [ref=f4e2838] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_two_browse-bin%3A212256820031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=212256819031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_two_browse-bin_1&ds=v1%3AvHvxSTNUmZ%2FdiOHctTh%2BO0WTNAhEudqKyCuSR7hHpOk
                    - checkbox [aria-hidden] [ref=f4e2841]
                    - text: 5,000 to 6,499 mAh
                - listitem "Popular Shopping Ideas" [ref=f4e2843]:
                  - link "Apply the filter 6,500 mAh & above to narrow results" [ref=f4e2845] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_two_browse-bin%3A212256823031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=212256819031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_two_browse-bin_2&ds=v1%3AwwJWSnk0EYBZu6%2FB%2B8akGkIxyq6I%2BXapjBRGmVYgeZw
                    - checkbox [aria-hidden] [ref=f4e2848]
                    - text: 6,500 mAh & above
            - group [ref=f4e2850]:
              - heading "Rear Camera Photo Sensor Resolution" [level=2] [ref=f4e2851]
              - list "Rear Camera Photo Sensor Resolution" [ref=f4e2852]:
                - listitem "Popular Shopping Ideas" [ref=f4e2853]:
                  - link "Apply the filter Up to 3 MP to narrow results" [ref=f4e2855] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003533764111%3A56164351031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=56162798031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003533764111_1&ds=v1%3A8wsNANfeNxWlyJTWT5GgJO%2Bn15RS0kU%2FqHp6G72%2F%2FXI
                    - checkbox [aria-hidden] [ref=f4e2858]
                    - text: Up to 3 MP
                - listitem "Popular Shopping Ideas" [ref=f4e2860]:
                  - link "Apply the filter 4 to 6 MP to narrow results" [ref=f4e2862] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003533764111%3A56164353031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=56162798031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003533764111_2&ds=v1%3A%2BXaJXzzNhb4RMFwxUOfGYTIOEAdIf6LK%2F8MCrkNKnE4
                    - checkbox [aria-hidden] [ref=f4e2865]
                    - text: 4 to 6 MP
                - listitem "Popular Shopping Ideas" [ref=f4e2867]:
                  - link "Apply the filter 7 to 9 MP to narrow results" [ref=f4e2869] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003533764111%3A56164352031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=56162798031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003533764111_3&ds=v1%3A50dJ%2F1rvqncFXX9YG7YBGSbwvU8W2tuft5fSpDGUMiE
                    - checkbox [aria-hidden] [ref=f4e2872]
                    - text: 7 to 9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e2874]:
                  - link "Apply the filter 13 MP & above to narrow results" [ref=f4e2876] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003533764111%3A56164350031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=56162798031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003533764111_4&ds=v1%3A%2FAR93HZLaa%2FjAEgSNdZRXsgnoxQEMTQ95%2FQtSBffwbs
                    - checkbox [aria-hidden] [ref=f4e2879]
                    - text: 13 MP & above
            - group [ref=f4e2881]:
              - heading "Wireless Technology" [level=2] [ref=f4e2882]
              - list "Wireless Technology" [ref=f4e2883]:
                - listitem "Popular Shopping Ideas" [ref=f4e2884]:
                  - link "Apply the filter Bluetooth to narrow results" [ref=f4e2886] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003189404111%3A27947916031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27947912031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003189404111_1&ds=v1%3AjWo7oGiWXEQOTJx9Ni9g%2Bl2nHJJcPjGC%2FRfggcJG8A8
                    - checkbox [aria-hidden] [ref=f4e2889]
                    - text: Bluetooth
                - listitem "Popular Shopping Ideas" [ref=f4e2891]:
                  - link "Apply the filter Cellular to narrow results" [ref=f4e2893] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003189404111%3A27947913031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27947912031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003189404111_2&ds=v1%3Azi9Wu3prdhuTikCQaRBQ6grl%2FQKtgLHzkNvOhY8%2BMQc
                    - checkbox [aria-hidden] [ref=f4e2896]
                    - text: Cellular
                - listitem "Popular Shopping Ideas" [ref=f4e2898]:
                  - link "Apply the filter NFC to narrow results" [ref=f4e2900] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003189404111%3A27947914031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27947912031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003189404111_3&ds=v1%3AOtzgSGktAyuHoiVjIQMMb5%2FZ1VVSXf1%2BG4zXVjPPQRQ
                    - checkbox [aria-hidden] [ref=f4e2903]
                    - text: NFC
                - listitem "Popular Shopping Ideas" [ref=f4e2905]:
                  - link "Apply the filter Wi-Fi to narrow results" [ref=f4e2907] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003189404111%3A27947915031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27947912031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003189404111_4&ds=v1%3AEE3Lsl%2BLFLzV6kKlXkQ9Zm1WLFXOfg0EM8ImEGqMhOQ
                    - checkbox [aria-hidden] [ref=f4e2910]
                    - text: Wi-Fi
            - group [ref=f4e2912]:
              - heading "Display Type" [level=2] [ref=f4e2913]
              - list "Display Type" [ref=f4e2914]:
                - listitem "Popular Shopping Ideas" [ref=f4e2915]:
                  - link "Apply the filter AMOLED to narrow results" [ref=f4e2917] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003007514111%3A27274385031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27274381031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003007514111_1&ds=v1%3AbcbKzoR1ivQxttHVQf18nDz2FzeLR%2BFbQrqkv19%2F%2BDA
                    - checkbox [aria-hidden] [ref=f4e2920]
                    - text: AMOLED
                - listitem "Popular Shopping Ideas" [ref=f4e2922]:
                  - link "Apply the filter IPS to narrow results" [ref=f4e2924] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003007514111%3A204235966031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27274381031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003007514111_2&ds=v1%3A1Plyee68FFZwut%2BIM6FK%2FAsFV0sYFjjBF2UPSWhR9ew
                    - checkbox [aria-hidden] [ref=f4e2927]
                    - text: IPS
                - listitem "Popular Shopping Ideas" [ref=f4e2929]:
                  - link "Apply the filter LCD to narrow results" [ref=f4e2931] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003007514111%3A27274388031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27274381031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003007514111_3&ds=v1%3AjCtwaHUWS%2Bwxmmt4oJBxA%2FLctMfWW1tu83fmVCT6sQo
                    - checkbox [aria-hidden] [ref=f4e2934]
                    - text: LCD
                - listitem "Popular Shopping Ideas" [ref=f4e2936]:
                  - link "Apply the filter LED to narrow results" [ref=f4e2938] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003007514111%3A27274386031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27274381031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003007514111_4&ds=v1%3ALlahzldmcu%2ByYCZgp1G%2BZeg9ri%2BV9ytm9HJGUwr429g
                    - checkbox [aria-hidden] [ref=f4e2941]
                    - text: LED
                - listitem "Popular Shopping Ideas" [ref=f4e2943]:
                  - link "Apply the filter OLED to narrow results" [ref=f4e2945] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003007514111%3A27274387031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27274381031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003007514111_5&ds=v1%3Aih38uoAOnEQXTS5VR4CZTjN%2Fh52KYqpLKltZO%2FMNhfQ
                    - checkbox [aria-hidden] [ref=f4e2948]
                    - text: OLED
            - group [ref=f4e2950]:
              - heading "Resolution" [level=2] [ref=f4e2951]
              - list "Resolution" [ref=f4e2952]:
                - listitem "Popular Shopping Ideas" [ref=f4e2953]:
                  - link "Apply the filter 1024 x 576 pixels to narrow results" [ref=f4e2955] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015430120111%3A100149045031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100149020031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015430120111_1&ds=v1%3Ab0tnOt0q9clbe29wXVcqAbbognF1b56MN6cizsI4MPo
                    - checkbox [aria-hidden] [ref=f4e2958]
                    - text: 1024 x 576 pixels
                - listitem "Popular Shopping Ideas" [ref=f4e2960]:
                  - link "Apply the filter 1280 x 800 pixels to narrow results" [ref=f4e2962] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015430120111%3A100149057031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100149020031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015430120111_2&ds=v1%3Asa5TmywV%2B8ArmZFekMTVsozqzxJyBusUBEWmBED%2BieU
                    - checkbox [aria-hidden] [ref=f4e2965]
                    - text: 1280 x 800 pixels
                - listitem "Popular Shopping Ideas" [ref=f4e2967]:
                  - link "Apply the filter 1920 x 1080 pixels to narrow results" [ref=f4e2969] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015430120111%3A100149047031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100149020031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015430120111_3&ds=v1%3A%2BiKLHcUU0FRpHjSEhl4o8RLraElPYCXd5lHZMoaOuh8
                    - checkbox [aria-hidden] [ref=f4e2972]
                    - text: 1920 x 1080 pixels
                - listitem "Popular Shopping Ideas" [ref=f4e2974]:
                  - link "Apply the filter 1920 x 1200 pixels to narrow results" [ref=f4e2976] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015430120111%3A100149038031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100149020031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015430120111_4&ds=v1%3AjUPbnaF8EfigKPQgG4pTTke%2BCdfWVGPKL7KByG7GBPI
                    - checkbox [aria-hidden] [ref=f4e2979]
                    - text: 1920 x 1200 pixels
                - listitem "Popular Shopping Ideas" [ref=f4e2981]:
                  - link "Apply the filter 2560 x 1600 pixels to narrow results" [ref=f4e2983] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015430120111%3A100149062031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100149020031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015430120111_5&ds=v1%3AV1rkgxWkRFUPygqLDU%2FVsUmL5dmbs3w2BpMXKixhr0s
                    - checkbox [aria-hidden] [ref=f4e2986]
                    - text: 2560 x 1600 pixels
                - listitem "Popular Shopping Ideas" [ref=f4e2988]:
                  - link "Apply the filter 1024 x 600 to narrow results" [ref=f4e2990] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015430120111%3A100149039031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100149020031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015430120111_6&ds=v1%3AKGYsf0biE6zv9PhcTNSoR24JT0j4BX6Pc9KzuPC6sog
                    - checkbox [aria-hidden] [ref=f4e2993]
                    - text: 1024 x 600
                - listitem "Popular Shopping Ideas" [ref=f4e2995]:
                  - link "Apply the filter 1340 x 800 to narrow results" [ref=f4e2997] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015430120111%3A100149042031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100149020031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015430120111_7&ds=v1%3AmRTzBq5Gac3gofA7eZb1ptTpMlPjmUmxHw%2Bq5MFIi%2Bw
                    - checkbox [aria-hidden] [ref=f4e3000]
                    - text: 1340 x 800
                - listitem [ref=f4e3002]:
                  - button "See more, Resolution" [ref=f4e3005] [cursor=pointer]: See more
            - group [ref=f4e3007]:
              - heading "CPU Speed" [level=2] [ref=f4e3008]
              - list "CPU Speed" [ref=f4e3009]:
                - listitem "Popular Shopping Ideas" [ref=f4e3010]:
                  - link "Apply the filter Up to 1.4 GHz to narrow results" [ref=f4e3012] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_sixteen_browse-bin%3A27957913031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27957909031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_sixteen_browse-bin_1&ds=v1%3AVG4%2FUeBh2eoXrxD%2FAstbgHw%2B6i96vyvPGGcWMtLV%2Buc
                    - checkbox [aria-hidden] [ref=f4e3015]
                    - text: Up to 1.4 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3017]:
                  - link "Apply the filter 1.5 to 1.9 GHz to narrow results" [ref=f4e3019] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_sixteen_browse-bin%3A27957912031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27957909031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_sixteen_browse-bin_2&ds=v1%3Ak9gF6XvtNqzFvyvUcJCyikbXbRX2InuXHPufFte%2FMuQ
                    - checkbox [aria-hidden] [ref=f4e3022]
                    - text: 1.5 to 1.9 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3024]:
                  - link "Apply the filter 2 to 2.4 GHz to narrow results" [ref=f4e3026] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_sixteen_browse-bin%3A27957911031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27957909031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_sixteen_browse-bin_3&ds=v1%3AvSZtaeHVcCOwQkinKV2g7fl8EDdKoix9Pqgij%2B%2Bb%2F7k
                    - checkbox [aria-hidden] [ref=f4e3029]
                    - text: 2 to 2.4 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3031]:
                  - link "Apply the filter 2.5 to 2.9 GHz to narrow results" [ref=f4e3033] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_sixteen_browse-bin%3A27957914031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27957909031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_sixteen_browse-bin_4&ds=v1%3AVHK2Ev6B5kEwkInIXJ2DN4Lqf5UCqWCPwlkHvqRE640
                    - checkbox [aria-hidden] [ref=f4e3036]
                    - text: 2.5 to 2.9 GHz
                - listitem "Popular Shopping Ideas" [ref=f4e3038]:
                  - link "Apply the filter 3 to 3.4 GHz to narrow results" [ref=f4e3040] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_sixteen_browse-bin%3A27957915031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27957909031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_sixteen_browse-bin_5&ds=v1%3AkT%2B2G9uoAUHoofaHzLPpAcoZwNlNubHOyC14f%2BwIQUE
                    - checkbox [aria-hidden] [ref=f4e3043]
                    - text: 3 to 3.4 GHz
            - group [ref=f4e3045]:
              - heading "Battery Life" [level=2] [ref=f4e3046]
              - list "Battery Life" [ref=f4e3047]:
                - listitem "Popular Shopping Ideas" [ref=f4e3048]:
                  - link "Apply the filter Up to 3 hours to narrow results" [ref=f4e3050] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_four_browse-bin%3A27857098031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27857093031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_four_browse-bin_1&ds=v1%3ABLTgNQM06nyuQ1aotRhgDkUK0ZPC8yYK7uA1K2FA5OQ
                    - checkbox [aria-hidden] [ref=f4e3053]
                    - text: Up to 3 hours
                - listitem "Popular Shopping Ideas" [ref=f4e3055]:
                  - link "Apply the filter 4 to 6 hours to narrow results" [ref=f4e3057] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_four_browse-bin%3A27857097031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27857093031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_four_browse-bin_2&ds=v1%3A1SYdvhPTGTbz4wyy5tta3mr%2F1KdNuNq2psCg0kJcowQ
                    - checkbox [aria-hidden] [ref=f4e3060]
                    - text: 4 to 6 hours
                - listitem "Popular Shopping Ideas" [ref=f4e3062]:
                  - link "Apply the filter 7 to 9 hours to narrow results" [ref=f4e3064] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_four_browse-bin%3A27857096031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27857093031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_four_browse-bin_3&ds=v1%3AIukYlLp8O5Jg7%2FMGzmoUC%2B1czIQlfxsHmmZPJqXUUcg
                    - checkbox [aria-hidden] [ref=f4e3067]
                    - text: 7 to 9 hours
                - listitem "Popular Shopping Ideas" [ref=f4e3069]:
                  - link "Apply the filter 10 to 13 hours to narrow results" [ref=f4e3071] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_four_browse-bin%3A27857095031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27857093031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_four_browse-bin_4&ds=v1%3A6AeAujiCJiZwO92KbBGxJ1YL%2Fce3FBnfBfVXlOa%2FO0o
                    - checkbox [aria-hidden] [ref=f4e3074]
                    - text: 10 to 13 hours
                - listitem "Popular Shopping Ideas" [ref=f4e3076]:
                  - link "Apply the filter 14 hours & above to narrow results" [ref=f4e3078] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_four_browse-bin%3A27857094031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27857093031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_four_browse-bin_5&ds=v1%3AY%2BSZontTMsB8UATexLHjDUmhF%2F7gnIg24tzcI2jOOGQ
                    - checkbox [aria-hidden] [ref=f4e3081]
                    - text: 14 hours & above
            - group [ref=f4e3083]:
              - heading "Display Size" [level=2] [ref=f4e3084]
              - list "Display Size" [ref=f4e3085]:
                - listitem "Popular Shopping Ideas" [ref=f4e3086]:
                  - link "Apply the filter Up to 6.9 Inch to narrow results" [ref=f4e3088] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1004162281091%3A10665615031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=10665614031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1004162281091_1&ds=v1%3AOHHeJ859R5S0hYPQa0LLiCYzSYiSnDJZXkvHjZcLfHQ
                    - checkbox [aria-hidden] [ref=f4e3091]
                    - text: Up to 6.9 Inch
                - listitem "Popular Shopping Ideas" [ref=f4e3093]:
                  - link "Apply the filter 7.0 - 7.9 Inch to narrow results" [ref=f4e3095] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1004162281091%3A10665616031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=10665614031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1004162281091_2&ds=v1%3A4Q68ZUTTYRJiSl%2FJAHH0Ai%2FhF83jCv%2FmaaTvYTL2GdE
                    - checkbox [aria-hidden] [ref=f4e3098]
                    - text: 7.0 - 7.9 Inch
                - listitem "Popular Shopping Ideas" [ref=f4e3100]:
                  - link "Apply the filter 8.0 - 8.9 Inch to narrow results" [ref=f4e3102] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1004162281091%3A10665617031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=10665614031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1004162281091_3&ds=v1%3Ae%2Ff5cPa9S04zoIwiHpgsxtQfrFoNdF5lyT8bkrCr5Us
                    - checkbox [aria-hidden] [ref=f4e3105]
                    - text: 8.0 - 8.9 Inch
                - listitem "Popular Shopping Ideas" [ref=f4e3107]:
                  - link "Apply the filter 9 Inch & Above to narrow results" [ref=f4e3109] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1004162281091%3A10665618031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=10665614031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1004162281091_4&ds=v1%3AA%2FF7yL2ywTQlTRgbzTYP532fHgEgCV7fzkRfjwmjj4E
                    - checkbox [aria-hidden] [ref=f4e3112]
                    - text: 9 Inch & Above
            - group [ref=f4e3114]:
              - heading "Front Camera Resolution" [level=2] [ref=f4e3115]
              - list "Front Camera Resolution" [ref=f4e3116]:
                - listitem "Popular Shopping Ideas" [ref=f4e3117]:
                  - link "Apply the filter Up to 1 MP to narrow results" [ref=f4e3119] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101014794470111%3A85886131031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=85886088031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101014794470111_1&ds=v1%3ANfTVxVGTrAV8ThxB%2BwHnp348n%2Fpar9dtjJiA3bpIAmU
                    - checkbox [aria-hidden] [ref=f4e3122]
                    - text: Up to 1 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3124]:
                  - link "Apply the filter 1.0 to 1.9 MP to narrow results" [ref=f4e3126] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101014794470111%3A85886129031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=85886088031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101014794470111_2&ds=v1%3Aksu48Kzpm8ozC63slBSkZ49NY8TO4iloOZA9MbLsxps
                    - checkbox [aria-hidden] [ref=f4e3129]
                    - text: 1.0 to 1.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3131]:
                  - link "Apply the filter 2.0 to 2.9 MP to narrow results" [ref=f4e3133] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101014794470111%3A85886132031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=85886088031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101014794470111_3&ds=v1%3AmM7bm%2B4lbUK%2FulcxDJdGdMA0RsoYE150cWnDvAwHIkw
                    - checkbox [aria-hidden] [ref=f4e3136]
                    - text: 2.0 to 2.9 MP
                - listitem "Popular Shopping Ideas" [ref=f4e3138]:
                  - link "Apply the filter 3.0 MP & above to narrow results" [ref=f4e3140] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101014794470111%3A85886130031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=85886088031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101014794470111_4&ds=v1%3AjP2qPFIQMcB9O%2FLMybS8bv5QArYFcphwCLEBGtOnSgw
                    - checkbox [aria-hidden] [ref=f4e3143]
                    - text: 3.0 MP & above
            - group [ref=f4e3145]:
              - heading "Cellular Technology" [level=2] [ref=f4e3146]
              - list "Cellular Technology" [ref=f4e3147]:
                - listitem "Popular Shopping Ideas" [ref=f4e3148]:
                  - link "Apply the filter 3G to narrow results" [ref=f4e3150] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003317844111%3A28397150031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397147031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003317844111_1&ds=v1%3AQbp5gtXJaPxlFPvIrcIjqePBJFWPKJWm4AlOmBxudO4
                    - checkbox [aria-hidden] [ref=f4e3153]
                    - text: 3G
                - listitem "Popular Shopping Ideas" [ref=f4e3155]:
                  - link "Apply the filter 4G to narrow results" [ref=f4e3157] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003317844111%3A28397151031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397147031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003317844111_2&ds=v1%3A67jRuV629Ryyzd5QgK9XblY5GNPAsEyttnFAmJdpN08
                    - checkbox [aria-hidden] [ref=f4e3160]
                    - text: 4G
                - listitem "Popular Shopping Ideas" [ref=f4e3162]:
                  - link "Apply the filter 5G to narrow results" [ref=f4e3164] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003317844111%3A28397152031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28397147031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003317844111_3&ds=v1%3A898X2Lt3czF859PcpMbJtjZitSFOufZkQVhTTf9dbPE
                    - checkbox [aria-hidden] [ref=f4e3167]
                    - text: 5G
            - group [ref=f4e3169]:
              - heading "Width" [level=2] [ref=f4e3170]
              - list "Width" [ref=f4e3171]:
                - listitem "Popular Shopping Ideas" [ref=f4e3172]:
                  - link "Apply the filter Up to 14.9 cm to narrow results" [ref=f4e3174] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015528716111%3A100619487031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619459031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015528716111_1&ds=v1%3AjOt7raKZPKTxHLALl1oqthu3uObXN9w6HqnQG%2FdRJtI
                    - checkbox [aria-hidden] [ref=f4e3177]
                    - text: Up to 14.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3179]:
                  - link "Apply the filter 15 to 17.9 cm to narrow results" [ref=f4e3181] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015528716111%3A100619489031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619459031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015528716111_2&ds=v1%3AxttASv5K7T1arGW2ndE5QLDB0GUroQUhnJAOIw18Zxs
                    - checkbox [aria-hidden] [ref=f4e3184]
                    - text: 15 to 17.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3186]:
                  - link "Apply the filter 18 to 19.9 cm to narrow results" [ref=f4e3188] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015528716111%3A100619488031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619459031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015528716111_3&ds=v1%3AQpUcQzJN6ZHKpIEqDWYbw7GB9Akmga66EI2PGypBGCA
                    - checkbox [aria-hidden] [ref=f4e3191]
                    - text: 18 to 19.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3193]:
                  - link "Apply the filter 20 cm & above to narrow results" [ref=f4e3195] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015528716111%3A100619486031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619459031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015528716111_4&ds=v1%3Af2Rcf%2FdIx5pvNBzX0kJaqFX9VoP5Ljxek%2B6ZlE%2BeyQE
                    - checkbox [aria-hidden] [ref=f4e3198]
                    - text: 20 cm & above
            - group [ref=f4e3200]:
              - heading "RAM Size" [level=2] [ref=f4e3201]
              - list "RAM Size" [ref=f4e3202]:
                - listitem "Popular Shopping Ideas" [ref=f4e3203]:
                  - link "Apply the filter Up to 1 GB to narrow results" [ref=f4e3205] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906422031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_1&ds=v1%3ATNc1B2A9qmyRDVbZy6cQ2fO6we%2BXKJQNfE0i8s1YYHk
                    - checkbox [aria-hidden] [ref=f4e3208]
                    - text: Up to 1 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3210]:
                  - link "Apply the filter 2 GB to narrow results" [ref=f4e3212] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906416031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_2&ds=v1%3A%2F6x9YMtf9xddA9UsqHl2aoOBGlp8CS0TL7t5%2F50Hlrc
                    - checkbox [aria-hidden] [ref=f4e3215]
                    - text: 2 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3217]:
                  - link "Apply the filter 3 GB to narrow results" [ref=f4e3219] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906419031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_3&ds=v1%3AqkBv21zGxbX%2BdrGkVIWheL36zxod%2FDDxp0DiVlgCg5M
                    - checkbox [aria-hidden] [ref=f4e3222]
                    - text: 3 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3224]:
                  - link "Apply the filter 4 GB to narrow results" [ref=f4e3226] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906421031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_4&ds=v1%3ALkQVaWNWO8tKE66dv2741U0JUP0qHiPXCGdO8%2BTlIGY
                    - checkbox [aria-hidden] [ref=f4e3229]
                    - text: 4 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3231]:
                  - link "Apply the filter 6 GB to narrow results" [ref=f4e3233] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906420031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_5&ds=v1%3AbruGmI1XJ5o9uxiWefZiHPGyXTgTN1iwYPFChPHTP%2BM
                    - checkbox [aria-hidden] [ref=f4e3236]
                    - text: 6 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3238]:
                  - link "Apply the filter 8 GB to narrow results" [ref=f4e3240] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906423031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_6&ds=v1%3AjLyIE6s9YKSvBxKIfA2kixNrStoRNPnIg8%2B1QoJPj3Q
                    - checkbox [aria-hidden] [ref=f4e3243]
                    - text: 8 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3245]:
                  - link "Apply the filter 16 GB to narrow results" [ref=f4e3247] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906424031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_7&ds=v1%3AUGlqTrjRwqIDe%2B%2BzW254ajM7DFWOPDV%2Fyq5a41lakEI
                    - checkbox [aria-hidden] [ref=f4e3250]
                    - text: 16 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3252]:
                  - link "Apply the filter 32 GB to narrow results" [ref=f4e3254] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906418031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_8&ds=v1%3Act9B6MhFmhh4uPDvdyfBCHOXJsnRqrSv2%2FooDacQ3Do
                    - checkbox [aria-hidden] [ref=f4e3257]
                    - text: 32 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3259]:
                  - link "Apply the filter 64 GB & above to narrow results" [ref=f4e3261] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_fourteen_browse-bin%3A27906417031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27906415031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_fourteen_browse-bin_9&ds=v1%3AnnQr9kiEMfPinpdGPvvK7R70adjl8Pqa35SlHYq8zEo
                    - checkbox [aria-hidden] [ref=f4e3264]
                    - text: 64 GB & above
            - group [ref=f4e3266]:
              - heading "Aspect Ratio" [level=2] [ref=f4e3267]
              - list "Aspect Ratio" [ref=f4e3268]:
                - listitem "Popular Shopping Ideas" [ref=f4e3269]:
                  - link "Apply the filter 16:10 to narrow results" [ref=f4e3271] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003008776111%3A27303852031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27303842031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003008776111_1&ds=v1%3AnRcKJrOL1XrViKpI1Q03oUJdme93%2FtwucT9Dgd5aedA
                    - checkbox [aria-hidden] [ref=f4e3274]
                    - text: 16:10
                - listitem "Popular Shopping Ideas" [ref=f4e3276]:
                  - link "Apply the filter 16:9 to narrow results" [ref=f4e3278] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003008776111%3A27303851031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27303842031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003008776111_2&ds=v1%3Ah2nm0m0Oixc8eRQ%2BaXEVboaXplFeTZ9BbpUZbNCbms8
                    - checkbox [aria-hidden] [ref=f4e3281]
                    - text: 16:9
                - listitem "Popular Shopping Ideas" [ref=f4e3283]:
                  - link "Apply the filter 4:3 to narrow results" [ref=f4e3285] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003008776111%3A27303853031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27303842031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003008776111_3&ds=v1%3AJV0YOw6Er5TYoio4TKaMd3yZFpKbbo6Q4acI1X26F50
                    - checkbox [aria-hidden] [ref=f4e3288]
                    - text: 4:3
            - group [ref=f4e3290]:
              - heading "Hardware Interface" [level=2] [ref=f4e3291]
              - list "Hardware Interface" [ref=f4e3292]:
                - listitem "Popular Shopping Ideas" [ref=f4e3293]:
                  - link "Apply the filter 3.5mm Audio to narrow results" [ref=f4e3295] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016646996111%3A207746547031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207746496031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016646996111_1&ds=v1%3AqL1XkeIW7i2nnxXcX7BJqDOcm4KnUtqdro2pzTKzszE
                    - checkbox [aria-hidden] [ref=f4e3298]
                    - text: 3.5mm Audio
                - listitem "Popular Shopping Ideas" [ref=f4e3300]:
                  - link "Apply the filter 802.11 ac/b/g/n to narrow results" [ref=f4e3302] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016646996111%3A207746586031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207746496031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016646996111_2&ds=v1%3AkfEE5wioy1wlhMcY%2F3Bhzq4gRjUIJFa4sHKiwkSHycQ
                    - checkbox [aria-hidden] [ref=f4e3305]
                    - text: 802.11 ac/b/g/n
                - listitem "Popular Shopping Ideas" [ref=f4e3307]:
                  - link "Apply the filter 802.11 b/g to narrow results" [ref=f4e3309] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016646996111%3A207746513031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207746496031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016646996111_3&ds=v1%3ALD4ddXX4XgZ4XM7khFjz3HtBqmLdxtd70Ueo5eqyA98
                    - checkbox [aria-hidden] [ref=f4e3312]
                    - text: 802.11 b/g
                - listitem "Popular Shopping Ideas" [ref=f4e3314]:
                  - link "Apply the filter 802.11 b/g/n to narrow results" [ref=f4e3316] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016646996111%3A207746537031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207746496031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016646996111_4&ds=v1%3Ajx5bi5OsGSnNDeAoVWsq74nWV74Q%2B25wMGCUV57FwPA
                    - checkbox [aria-hidden] [ref=f4e3319]
                    - text: 802.11 b/g/n
                - listitem "Popular Shopping Ideas" [ref=f4e3321]:
                  - link "Apply the filter Bluetooth to narrow results" [ref=f4e3323] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016646996111%3A207746621031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207746496031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016646996111_5&ds=v1%3A5SfQE2jbX8T4rcqvmr296YMCLAD6b6gsZOyHs65QgtI
                    - checkbox [aria-hidden] [ref=f4e3326]
                    - text: Bluetooth
                - listitem "Popular Shopping Ideas" [ref=f4e3328]:
                  - link "Apply the filter Bluetooth 5 to narrow results" [ref=f4e3330] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016646996111%3A207746628031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207746496031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016646996111_6&ds=v1%3A9OvHqPOFpJvliINYwTjIHXIFSxL74MiDHDaFnc5xYzY
                    - checkbox [aria-hidden] [ref=f4e3333]
                    - text: Bluetooth 5
                - listitem "Popular Shopping Ideas" [ref=f4e3335]:
                  - link "Apply the filter Built-in Flash Memory to narrow results" [ref=f4e3337] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101016646996111%3A207746540031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=207746496031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101016646996111_7&ds=v1%3AUbcKCa9u77fCixU33Ro7vPVVka1cNZ79hcHxvb8dFlk
                    - checkbox [aria-hidden] [ref=f4e3340]
                    - text: Built-in Flash Memory
                - listitem [ref=f4e3342]:
                  - button "See more, Hardware Interface" [ref=f4e3345] [cursor=pointer]: See more
            - group [ref=f4e3347]:
              - heading "Primary Camera" [level=2] [ref=f4e3348]
              - list "Primary Camera" [ref=f4e3349]:
                - listitem "Popular Shopping Ideas" [ref=f4e3350]:
                  - link "Apply the filter 20 MP & above to narrow results" [ref=f4e3352] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1004151207091%3A1898707031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1898694031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1004151207091_1&ds=v1%3Af5yZtWEA9TY8ONWrsXZenS6YjvCn0FDzYO%2FKF%2FMZcIE
                    - checkbox [aria-hidden] [ref=f4e3355]
                    - text: 20 MP & above
            - group [ref=f4e3357]:
              - heading "Storage Capacity" [level=2] [ref=f4e3358]
              - list "Storage Capacity" [ref=f4e3359]:
                - listitem "Popular Shopping Ideas" [ref=f4e3360]:
                  - link "Apply the filter Up to 6.9 GB to narrow results" [ref=f4e3362] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003492423111%3A44322561031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=44322558031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003492423111_1&ds=v1%3A9sE1UkXhikcdKYqV4idF6g7wckH%2BHR8ybFsSljGHPPE
                    - checkbox [aria-hidden] [ref=f4e3365]
                    - text: Up to 6.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3367]:
                  - link "Apply the filter 7 to 11.9 GB to narrow results" [ref=f4e3369] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003492423111%3A44322559031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=44322558031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003492423111_2&ds=v1%3ADa1phynzo2z%2BRJNyK6FfjMW1M%2Bdqsg%2Bo7joTyOpwUgY
                    - checkbox [aria-hidden] [ref=f4e3372]
                    - text: 7 to 11.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3374]:
                  - link "Apply the filter 12 to 16.9 GB to narrow results" [ref=f4e3376] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003492423111%3A44322562031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=44322558031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003492423111_3&ds=v1%3AdfOMtYo4SvdVz2UDi9BFqAnKPdPfVA92NoBl95tr0wA
                    - checkbox [aria-hidden] [ref=f4e3379]
                    - text: 12 to 16.9 GB
                - listitem "Popular Shopping Ideas" [ref=f4e3381]:
                  - link "Apply the filter 17 GB & Above to narrow results" [ref=f4e3383] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003492423111%3A44322560031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=44322558031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003492423111_4&ds=v1%3A5oyRXx8iJrAimCbC1bMz8ugVymhEws%2BaCPKUkxM%2FXYA
                    - checkbox [aria-hidden] [ref=f4e3386]
                    - text: 17 GB & Above
            - group [ref=f4e3388]:
              - heading "Country of Origin" [level=2] [ref=f4e3389]
              - list "Country of Origin" [ref=f4e3390]:
                - listitem "Popular Shopping Ideas" [ref=f4e3391]:
                  - link "Apply the filter India to narrow results" [ref=f4e3393] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_country_of_origin-bin%3AIN&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=215263484031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_country_of_origin-bin_1&ds=v1%3A3eFjHMnc7p68cyTbelJUKTaC2QZ4yF3xvH55Fh4c3AE
                    - checkbox [aria-hidden] [ref=f4e3396]
                    - text: India
                - listitem "Popular Shopping Ideas" [ref=f4e3398]:
                  - link "Apply the filter China to narrow results" [ref=f4e3400] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_country_of_origin-bin%3ACN&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=215263484031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_country_of_origin-bin_2&ds=v1%3AVj2wTUJmJnSeHd2%2FuLKRq6PF%2FFTvFAnAhpE3ANZAD9k
                    - checkbox [aria-hidden] [ref=f4e3403]
                    - text: China
                - listitem "Popular Shopping Ideas" [ref=f4e3405]:
                  - link "Apply the filter United States to narrow results" [ref=f4e3407] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_country_of_origin-bin%3AUS&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=215263484031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_country_of_origin-bin_3&ds=v1%3ATc8Uk3OeS9E8o3vRL3aiNXUvVriQ6LQ91bk9ndccQ8w
                    - checkbox [aria-hidden] [ref=f4e3410]
                    - text: United States
                - listitem "Popular Shopping Ideas" [ref=f4e3412]:
                  - link "Apply the filter Hong Kong to narrow results" [ref=f4e3414] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_country_of_origin-bin%3AHK&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=215263484031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_country_of_origin-bin_4&ds=v1%3AUW07NuwrTa5JaAC0XjKPQWV%2FjbjHmmyqHajAWTDrEiA
                    - checkbox [aria-hidden] [ref=f4e3417]
                    - text: Hong Kong
            - group [ref=f4e3419]:
              - heading "GPU Manufacturer" [level=2] [ref=f4e3420]
              - list "GPU Manufacturer" [ref=f4e3421]:
                - listitem "Popular Shopping Ideas" [ref=f4e3422]:
                  - link "Apply the filter Apple to narrow results" [ref=f4e3424] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_six_browse-bin%3A27351999031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27351992031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_six_browse-bin_1&ds=v1%3AX16TlGUZhZuezQXY9Cs%2BzW4O7EAFNS1iZ%2B%2FTj94khKM
                    - checkbox [aria-hidden] [ref=f4e3427]
                    - text: Apple
                - listitem "Popular Shopping Ideas" [ref=f4e3429]:
                  - link "Apply the filter ARM to narrow results" [ref=f4e3431] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_six_browse-bin%3A27351998031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27351992031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_six_browse-bin_2&ds=v1%3Aq%2BnsO1%2BMzp7Fhd2MQzG2TYmb7mWj8pEYQPQTXN5azPY
                    - checkbox [aria-hidden] [ref=f4e3434]
                    - text: ARM
                - listitem "Popular Shopping Ideas" [ref=f4e3436]:
                  - link "Apply the filter MediaTek to narrow results" [ref=f4e3438] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_six_browse-bin%3A210754520031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27351992031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_six_browse-bin_3&ds=v1%3ADKS9jbGYmgKvoAbgmuoOxplrjUO8USVhHDtQnsyNcbY
                    - checkbox [aria-hidden] [ref=f4e3441]
                    - text: MediaTek
                - listitem "Popular Shopping Ideas" [ref=f4e3443]:
                  - link "Apply the filter PowerVR to narrow results" [ref=f4e3445] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_six_browse-bin%3A56611012031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27351992031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_six_browse-bin_4&ds=v1%3Az3HyVVJL0%2F34af1aig80DfS6oxZplyKfyqasMTnEBlc
                    - checkbox [aria-hidden] [ref=f4e3448]
                    - text: PowerVR
                - listitem "Popular Shopping Ideas" [ref=f4e3450]:
                  - link "Apply the filter Qualcomm to narrow results" [ref=f4e3452] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_six_browse-bin%3A27351996031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27351992031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_six_browse-bin_5&ds=v1%3A6Hn8H7ibnPRlhQxEZsSlqRUnPg0ukCQ7pB0Y%2B70rZSE
                    - checkbox [aria-hidden] [ref=f4e3455]
                    - text: Qualcomm
            - group [ref=f4e3457]:
              - heading "Thickness" [level=2] [ref=f4e3458]
              - list "Thickness" [ref=f4e3459]:
                - listitem "Popular Shopping Ideas" [ref=f4e3460]:
                  - link "Apply the filter Up to 2.9 cm to narrow results" [ref=f4e3462] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015573846111%3A100766923031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100766822031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015573846111_1&ds=v1%3AZ8PUNAS6vL8LHQ5wTgMefMnMdMUB1GyNixiqlsldveo
                    - checkbox [aria-hidden] [ref=f4e3465]
                    - text: Up to 2.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3467]:
                  - link "Apply the filter 3 to 4.9 cm to narrow results" [ref=f4e3469] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015573846111%3A100766924031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100766822031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015573846111_2&ds=v1%3AO%2FQTm32upKjkA4LhiSITlBPX8sl570iAVMYcvnzKvFw
                    - checkbox [aria-hidden] [ref=f4e3472]
                    - text: 3 to 4.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3474]:
                  - link "Apply the filter 5 to 7.9 cm to narrow results" [ref=f4e3476] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015573846111%3A100766925031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100766822031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015573846111_3&ds=v1%3AkRvHgXnNhZk5S%2F69Tw8q%2B4r8UdqowBD%2BRKCUJtWZh2o
                    - checkbox [aria-hidden] [ref=f4e3479]
                    - text: 5 to 7.9 cm
                - listitem "Popular Shopping Ideas" [ref=f4e3481]:
                  - link "Apply the filter 8 cm & above to narrow results" [ref=f4e3483] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015573846111%3A100766926031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100766822031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015573846111_4&ds=v1%3AqzsHadjCVPXRohERH%2BLNrdubRZSoYz5I45GEW8RXUEc
                    - checkbox [aria-hidden] [ref=f4e3486]
                    - text: 8 cm & above
            - group [ref=f4e3488]:
              - heading "CPU Manufacturer" [level=2] [ref=f4e3489]
              - list "CPU Manufacturer" [ref=f4e3490]:
                - listitem "Popular Shopping Ideas" [ref=f4e3491]:
                  - link "Apply the filter Allwinner to narrow results" [ref=f4e3493] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_eleven_browse-bin%3A27365991031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27365980031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_eleven_browse-bin_1&ds=v1%3AxYg1XKrO9NikvtrVV%2FfY5inl5jw6j5MQc%2FyMzE67kMw
                    - checkbox [aria-hidden] [ref=f4e3496]
                    - text: Allwinner
                - listitem "Popular Shopping Ideas" [ref=f4e3498]:
                  - link "Apply the filter AMD to narrow results" [ref=f4e3500] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_eleven_browse-bin%3A27365992031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27365980031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_eleven_browse-bin_2&ds=v1%3A8m%2BMmIpqTDZLJao5tntVB5AL5gNcqhU6pRKD8VTMAt0
                    - checkbox [aria-hidden] [ref=f4e3503]
                    - text: AMD
                - listitem "Popular Shopping Ideas" [ref=f4e3505]:
                  - link "Apply the filter Apple to narrow results" [ref=f4e3507] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_eleven_browse-bin%3A27365986031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27365980031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_eleven_browse-bin_3&ds=v1%3AGY7kgPrIvHhOAzqBehq9W%2F%2F36itUNvwrmASgOES5pHo
                    - checkbox [aria-hidden] [ref=f4e3510]
                    - text: Apple
                - listitem "Popular Shopping Ideas" [ref=f4e3512]:
                  - link "Apply the filter ARM to narrow results" [ref=f4e3514] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_eleven_browse-bin%3A27365983031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27365980031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_eleven_browse-bin_4&ds=v1%3AMhb0PmvDiYymX7B%2Bprxp2olaaG2wHaqh0hdcACe8Y10
                    - checkbox [aria-hidden] [ref=f4e3517]
                    - text: ARM
                - listitem "Popular Shopping Ideas" [ref=f4e3519]:
                  - link "Apply the filter Intel to narrow results" [ref=f4e3521] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_eleven_browse-bin%3A27365981031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27365980031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_eleven_browse-bin_5&ds=v1%3A2k28%2FefgLxXl63cRowDW35DUtvrUkzUZvT00BnxpHMo
                    - checkbox [aria-hidden] [ref=f4e3524]
                    - text: Intel
                - listitem "Popular Shopping Ideas" [ref=f4e3526]:
                  - link "Apply the filter MediaTek to narrow results" [ref=f4e3528] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_eleven_browse-bin%3A56611013031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27365980031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_eleven_browse-bin_6&ds=v1%3AnhnB9s3j5Ep%2Bbew%2FdQRSkqXPan%2F4JVRYQgGXnun833M
                    - checkbox [aria-hidden] [ref=f4e3531]
                    - text: MediaTek
                - listitem "Popular Shopping Ideas" [ref=f4e3533]:
                  - link "Apply the filter Qualcomm to narrow results" [ref=f4e3535] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_eleven_browse-bin%3A27365989031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27365980031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_eleven_browse-bin_7&ds=v1%3AF5HWa%2FhDEGiztnk8cDriSLmwy5b4t4cw5virAxhmr%2F4
                    - checkbox [aria-hidden] [ref=f4e3538]
                    - text: Qualcomm
                - listitem [ref=f4e3540]:
                  - button "See more, CPU Manufacturer" [ref=f4e3543] [cursor=pointer]: See more
            - group [ref=f4e3545]:
              - heading "Model Year" [level=2] [ref=f4e3546]
              - list "Model Year" [ref=f4e3547]:
                - listitem "Popular Shopping Ideas" [ref=f4e3548]:
                  - link "Apply the filter Up to 2020 to narrow results" [ref=f4e3550] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015529998111%3A100619882031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619719031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015529998111_1&ds=v1%3AOg3weEO4jnAVSkTiXFWy0uAxWxBex%2BJLl%2BApo4bw5G4
                    - checkbox [aria-hidden] [ref=f4e3553]
                    - text: Up to 2020
                - listitem "Popular Shopping Ideas" [ref=f4e3555]:
                  - link "Apply the filter 2022 to narrow results" [ref=f4e3557] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015529998111%3A100619877031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619719031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015529998111_2&ds=v1%3A8dWjHRy7Hr2p092IkLZAyW%2Fo99C%2BVcV8v3TYLY3qv0Q
                    - checkbox [aria-hidden] [ref=f4e3560]
                    - text: "2022"
                - listitem "Popular Shopping Ideas" [ref=f4e3562]:
                  - link "Apply the filter 2023 to narrow results" [ref=f4e3564] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015529998111%3A100619872031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619719031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015529998111_3&ds=v1%3A2MdEQYI%2Bv28dIheIfm9oMjecSc7zHeX8Pmpz7tso1bY
                    - checkbox [aria-hidden] [ref=f4e3567]
                    - text: "2023"
                - listitem "Popular Shopping Ideas" [ref=f4e3569]:
                  - link "Apply the filter 2024 & above to narrow results" [ref=f4e3571] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101015529998111%3A100619879031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=100619719031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101015529998111_4&ds=v1%3AUlY0uCctLu%2FfRAIwKHbRDZQGQH%2FPT8%2F8lAlDgiXWdqs
                    - checkbox [aria-hidden] [ref=f4e3574]
                    - text: 2024 & above
            - group [ref=f4e3576]:
              - heading "Operating System" [level=2] [ref=f4e3577]
              - list "Operating System" [ref=f4e3578]:
                - listitem "Popular Shopping Ideas" [ref=f4e3579]:
                  - link "Apply the filter Android to narrow results" [ref=f4e3581] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003289497111%3A28234313031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28234282031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003289497111_1&ds=v1%3Aq7BaLUtSNxb%2B5VwTCVx1oupnGHSLK9%2Baocxij%2FrNZE0
                    - checkbox [aria-hidden] [ref=f4e3584]
                    - text: Android
                - listitem "Popular Shopping Ideas" [ref=f4e3586]:
                  - link "Apply the filter iOS to narrow results" [ref=f4e3588] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003289497111%3A28234305031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28234282031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003289497111_2&ds=v1%3AzILUcZKnVNMpJpZQxHop%2B2D1KHn5F94s3aTysKIWxzI
                    - checkbox [aria-hidden] [ref=f4e3591]
                    - text: iOS
                - listitem "Popular Shopping Ideas" [ref=f4e3593]:
                  - link "Apply the filter Android 10 to narrow results" [ref=f4e3595] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003289497111%3A28234345031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28234282031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003289497111_3&ds=v1%3AQaK941rQeRRekCUIO9%2Blz9ytpBw1T1iUS8piPmtbZkw
                    - checkbox [aria-hidden] [ref=f4e3598]
                    - text: Android 10
                - listitem "Popular Shopping Ideas" [ref=f4e3600]:
                  - link "Apply the filter Android 11 to narrow results" [ref=f4e3602] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003289497111%3A28234339031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28234282031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003289497111_4&ds=v1%3A35tCwzi1tshMzZrkHLRGvGSY00YP3G64CqpdkBYm%2B2g
                    - checkbox [aria-hidden] [ref=f4e3605]
                    - text: Android 11
                - listitem "Popular Shopping Ideas" [ref=f4e3607]:
                  - link "Apply the filter Android 12 to narrow results" [ref=f4e3609] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003289497111%3A74858038031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28234282031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003289497111_5&ds=v1%3AgmfelWLq%2FAc2HUYD00upuG6oNekTT9xTFv%2BfkTc4MO0
                    - checkbox [aria-hidden] [ref=f4e3612]
                    - text: Android 12
                - listitem "Popular Shopping Ideas" [ref=f4e3614]:
                  - link "Apply the filter Android 9.0 Pie to narrow results" [ref=f4e3616] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003289497111%3A28234304031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28234282031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003289497111_6&ds=v1%3ANhfjJ3Aq3b9xdcbMR9fovvCJf8V5zXsWaHx0qDUcrNo
                    - checkbox [aria-hidden] [ref=f4e3619]
                    - text: Android 9.0 Pie
                - listitem "Popular Shopping Ideas" [ref=f4e3621]:
                  - link "Apply the filter Android 13 to narrow results" [ref=f4e3623] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003289497111%3A100722449031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=28234282031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003289497111_7&ds=v1%3APzf5maNoFz5Nq1bapNbqOaiy%2FEacINqiusV%2BsQ1PtAA
                    - checkbox [aria-hidden] [ref=f4e3626]
                    - text: Android 13
                - listitem [ref=f4e3628]:
                  - button "See more, Operating System" [ref=f4e3631] [cursor=pointer]: See more
            - group [ref=f4e3633]:
              - heading "Display Maximum Resolution" [level=2] [ref=f4e3634]
              - list "Display Maximum Resolution" [ref=f4e3635]:
                - listitem "Popular Shopping Ideas" [ref=f4e3636]:
                  - link "Apply the filter 1280 x 800 to narrow results" [ref=f4e3638] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101017149530111%3A213950151031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=213950145031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101017149530111_1&ds=v1%3AsIEAdv3i32NS8CrIVAqzPn9oRYncf1D7zItAf4F%2BRWM
                    - checkbox [aria-hidden] [ref=f4e3641]
                    - text: 1280 x 800
                - listitem "Popular Shopping Ideas" [ref=f4e3643]:
                  - link "Apply the filter 1920 x 1200 to narrow results" [ref=f4e3645] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101017149530111%3A213950149031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=213950145031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101017149530111_2&ds=v1%3As0w7EKX67QFXVT2stEPNn8FJEVEm6cWYEcD54wyo8bU
                    - checkbox [aria-hidden] [ref=f4e3648]
                    - text: 1920 x 1200
                - listitem "Popular Shopping Ideas" [ref=f4e3650]:
                  - link "Apply the filter 2266 x 1488 to narrow results" [ref=f4e3652] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101017149530111%3A213950153031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=213950145031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101017149530111_3&ds=v1%3AfIffd9MYnurli%2B4ryqGx5wtdpcQ0Ob3tFdWoxPE5Wu8
                    - checkbox [aria-hidden] [ref=f4e3655]
                    - text: 2266 x 1488
                - listitem "Popular Shopping Ideas" [ref=f4e3657]:
                  - link "Apply the filter 2560 x 1600 to narrow results" [ref=f4e3659] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101017149530111%3A213950150031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=213950145031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101017149530111_4&ds=v1%3ANoCOQHpJv%2Fvg7L91NYXmDotIpkULjzv%2FTUpdbKs%2FlI8
                    - checkbox [aria-hidden] [ref=f4e3662]
                    - text: 2560 x 1600
                - listitem "Popular Shopping Ideas" [ref=f4e3664]:
                  - link "Apply the filter 2732 x 2048 to narrow results" [ref=f4e3666] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-101017149530111%3A213950146031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=213950145031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-101017149530111_5&ds=v1%3Ahu%2BDPTFPrVXToJdqzaGYMgHdbF1sFdjvkwH2YCIc47g
                    - checkbox [aria-hidden] [ref=f4e3669]
                    - text: 2732 x 2048
            - group [ref=f4e3671]:
              - heading "Generation" [level=2] [ref=f4e3672]
              - list "Generation" [ref=f4e3673]:
                - listitem "Popular Shopping Ideas" [ref=f4e3674]:
                  - link "Apply the filter 1st Generation to narrow results" [ref=f4e3676] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003212735111%3A27977990031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27977982031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003212735111_1&ds=v1%3A6KXLJRBsh3NQgaFrhaY9OkMyqGU7Hg7yAlKNdB6sbtc
                    - checkbox [aria-hidden] [ref=f4e3679]
                    - text: 1st Generation
                - listitem "Popular Shopping Ideas" [ref=f4e3681]:
                  - link "Apply the filter 2nd Generation to narrow results" [ref=f4e3683] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003212735111%3A27977992031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27977982031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003212735111_2&ds=v1%3AcjKrkiFGzoVHuI%2BUeDo6P31bmRQhcglmIys6i4KKeIg
                    - checkbox [aria-hidden] [ref=f4e3686]
                    - text: 2nd Generation
                - listitem "Popular Shopping Ideas" [ref=f4e3688]:
                  - link "Apply the filter 12th Generation to narrow results" [ref=f4e3690] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003212735111%3A92029449031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27977982031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003212735111_3&ds=v1%3AGcPkhNL7q6emjJTW9akp6V2YSg80alrqa%2FFvXwiaID4
                    - checkbox [aria-hidden] [ref=f4e3693]
                    - text: 12th Generation
                - listitem "Popular Shopping Ideas" [ref=f4e3695]:
                  - link "Apply the filter 8th Generation to narrow results" [ref=f4e3697] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003212735111%3A27977991031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27977982031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003212735111_4&ds=v1%3A2URngNFVIY0VKXoD2AnbKxm2u%2FECMcUsSWKcIqsQbJY
                    - checkbox [aria-hidden] [ref=f4e3700]
                    - text: 8th Generation
                - listitem "Popular Shopping Ideas" [ref=f4e3702]:
                  - link "Apply the filter 6th Generation to narrow results" [ref=f4e3704] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003212735111%3A27977984031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27977982031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003212735111_5&ds=v1%3AYPRE9BZA9almtG2%2FP7vGMFdBINOvvfF7PzccvfAvP8o
                    - checkbox [aria-hidden] [ref=f4e3707]
                    - text: 6th Generation
                - listitem "Popular Shopping Ideas" [ref=f4e3709]:
                  - link "Apply the filter 4th Generation to narrow results" [ref=f4e3711] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003212735111%3A27977988031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27977982031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003212735111_6&ds=v1%3ATZ3ahdacBicpa3S3WOh2ekel23sEmyz3xRTwkcQdtvs
                    - checkbox [aria-hidden] [ref=f4e3714]
                    - text: 4th Generation
                - listitem "Popular Shopping Ideas" [ref=f4e3716]:
                  - link "Apply the filter 3rd Generation to narrow results" [ref=f4e3718] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1003212735111%3A27977993031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=27977982031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1003212735111_7&ds=v1%3AkScF8KuxTwVuM7N%2F1sxafFWhdqcgQ2ZxxacFhus6qs0
                    - checkbox [aria-hidden] [ref=f4e3721]
                    - text: 3rd Generation
            - group [ref=f4e3723]:
              - heading "Screen Resolution" [level=2] [ref=f4e3724]
              - list "Screen Resolution" [ref=f4e3725]:
                - listitem "Popular Shopping Ideas" [ref=f4e3726]:
                  - link "Apply the filter 1024 x 600 to narrow results" [ref=f4e3728] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_browse-bin%3A34353334031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=34353290031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_browse-bin_1&ds=v1%3AAEUjwhKZnymkO1OFjm329dv6PpDzeq0HQLJ2uJinMEI
                    - checkbox [aria-hidden] [ref=f4e3731]
                    - text: 1024 x 600
                - listitem "Popular Shopping Ideas" [ref=f4e3733]:
                  - link "Apply the filter 1280 x 800 to narrow results" [ref=f4e3735] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_browse-bin%3A34353320031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=34353290031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_browse-bin_2&ds=v1%3A8%2BDKl74%2BoZ1Erb90qOnpHjPfvC9Skei9jlFdsN8UgCg
                    - checkbox [aria-hidden] [ref=f4e3738]
                    - text: 1280 x 800
                - listitem "Popular Shopping Ideas" [ref=f4e3740]:
                  - link "Apply the filter 2732 x 2048 to narrow results" [ref=f4e3742] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_feature_browse-bin%3A34353318031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=34353290031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_feature_browse-bin_3&ds=v1%3AazLsdw5X5KxfFIWqUjlCAIqCVaHGCJCDt5uKG5NTbMA
                    - checkbox [aria-hidden] [ref=f4e3745]
                    - text: 2732 x 2048
            - group [ref=f4e3747]:
              - heading "Age" [level=2] [ref=f4e3748]
              - list "Age" [ref=f4e3749]:
                - listitem "Popular Shopping Ideas" [ref=f4e3750]:
                  - link "Apply the filter Up to 12 months to narrow results" [ref=f4e3752] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1004151746091%3A1480705031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1480704031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1004151746091_1&ds=v1%3AxIM5JauTWkrcfU16tsuE9aokFqeU3MFZY4jNm2y4zZc
                    - checkbox [aria-hidden] [ref=f4e3755]
                    - text: Up to 12 months
                - listitem "Popular Shopping Ideas" [ref=f4e3757]:
                  - generic [ref=f4e3758]:
                    - checkbox [disabled] [aria-hidden] [ref=f4e3761]
                    - text: 1 - 2 years
                - listitem "Popular Shopping Ideas" [ref=f4e3763]:
                  - link "Apply the filter 3 - 4 years to narrow results" [ref=f4e3765] [cursor=pointer]:
                    - /url: /s?k=Tablet&rh=p_n_g-1004151746091%3A1480707031&dc&crid=2X52K4ZO56AGU&qid=1794617588&rnid=1480704031&sprefix=tablet%2Caps%2C250&ref=sr_nr_p_n_g-1004151746091_3&ds=v1%3A3TZ5LOVzmQnUB2CIkLklck4mKgc6TBgHwakU0PUIX7M
                    - checkbox [aria-hidden] [ref=f4e3768]
                    - text: 3 - 4 years
                - listitem "Popular Shopping Ideas" [ref=f4e3770]:
                  - generic [ref=f4e3771]:
                    - checkbox [disabled] [aria-hidden] [ref=f4e3774]
                    - text: 5 - 7 years
                - listitem "Popular Shopping Ideas" [ref=f4e3776]:
                  - generic [ref=f4e3777]:
                    - checkbox [disabled] [aria-hidden] [ref=f4e3780]
                    - text: 8 - 11 years
                - listitem "Popular Shopping Ideas" [ref=f4e3782]:
                  - generic [ref=f4e3783]:
                    - checkbox [disabled] [aria-hidden] [ref=f4e3786]
                    - text: 12 years & more
  - complementary "Your recently viewed items and featured recommendations" [ref=f4e3788]:
    - generic [ref=f4e3796]:
      - heading "See personalized recommendations" [level=2] [ref=f4e3797]
      - link "Sign in" [ref=f4e3800] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0
      - generic [ref=f4e3801]:
        - text: New customer?
        - link "Start here." [ref=f4e3802] [cursor=pointer]:
          - /url: https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex
  - generic [ref=f4e3803]:
    - button "Back to top" [ref=f4e3804] [cursor=pointer]
    - generic [ref=f4e3806]:
      - generic [ref=f4e3807]:
        - heading "Get to Know Us" [level=6] [ref=f4e3808]
        - list [ref=f4e3809]:
          - listitem [ref=f4e3810]:
            - link "About Amazon" [ref=f4e3811] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f4e3812]:
            - link "Careers" [ref=f4e3813] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=f4e3814]:
            - link "Press Releases" [ref=f4e3815] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f4e3816]:
            - link "Amazon Science" [ref=f4e3817] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=f4e3819]:
        - heading "Connect with Us" [level=6] [ref=f4e3820]
        - list [ref=f4e3821]:
          - listitem [ref=f4e3822]:
            - link "Facebook" [ref=f4e3823] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=f4e3824]:
            - link "Twitter" [ref=f4e3825] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=f4e3826]:
            - link "Instagram" [ref=f4e3827] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=f4e3829]:
        - heading "Make Money with Us" [level=6] [ref=f4e3830]
        - list [ref=f4e3831]:
          - listitem [ref=f4e3832]:
            - link "Sell on Amazon" [ref=f4e3833] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=f4e3834]:
            - link "Sell under Amazon Accelerator" [ref=f4e3835] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=f4e3836]:
            - link "Protect and Build Your Brand" [ref=f4e3837] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=f4e3838]:
            - link "Amazon Global Selling" [ref=f4e3839] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=f4e3840]:
            - link "Supply to Amazon" [ref=f4e3841] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=f4e3842]:
            - link "Become an Affiliate" [ref=f4e3843] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=f4e3844]:
            - link "Fulfilment by Amazon" [ref=f4e3845] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=f4e3846]:
            - link "Advertise Your Products" [ref=f4e3847] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=f4e3848]:
            - link "Amazon Pay on Merchants" [ref=f4e3849] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant?ref_=footer_mm_apay
      - generic [ref=f4e3851]:
        - heading "Let Us Help You" [level=6] [ref=f4e3852]
        - list [ref=f4e3853]:
          - listitem [ref=f4e3854]:
            - link "Your Account" [ref=f4e3855] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=f4e3856]:
            - link "Returns Centre" [ref=f4e3857] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=f4e3858]:
            - link "Recalls and Product Safety Alerts" [ref=f4e3859] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=f4e3860]:
            - link "100% Purchase Protection" [ref=f4e3861] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=f4e3862]:
            - link "Amazon App Download" [ref=f4e3863] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=f4e3864]:
            - link "Help" [ref=f4e3865] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=f4e3867]:
      - link "Amazon India Home" [ref=f4e3870] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=f4e3873]:
        - generic [ref=f4e3874]:
          - link "Choose a language for shopping. Current selection is English." [ref=f4e3875] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=f4e3877]: English
          - button "Expand to Change Language or Country" [ref=f4e3878] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=f4e3879] [cursor=pointer]:
          - generic [ref=f4e3881]: India
    - generic "More on Amazon" [ref=f4e3882]:
      - generic "More on Amazon" [ref=f4e3883]:
        - list [ref=f4e3884]:
          - listitem [ref=f4e3885]:
            - link [ref=f4e3886] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=f4e3887]
              - generic [ref=f4e3888]: Books, art& collectibles
          - listitem [aria-hidden] [ref=f4e3889]
          - listitem [ref=f4e3890]:
            - link [ref=f4e3891] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=f4e3892]
              - generic [ref=f4e3893]: Scalable CloudComputing Services
          - listitem [aria-hidden] [ref=f4e3894]
          - listitem [ref=f4e3895]:
            - link [ref=f4e3896] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=f4e3897]
              - generic [ref=f4e3898]: DownloadAudio Books
          - listitem [aria-hidden] [ref=f4e3899]
          - listitem [ref=f4e3900]:
            - link [ref=f4e3901] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=f4e3902]
              - generic [ref=f4e3903]: Movies, TV& Celebrities
        - list [ref=f4e3904]:
          - listitem [ref=f4e3905]:
            - link [ref=f4e3906] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=f4e3907]
              - generic [ref=f4e3908]: DesignerFashion Brands
          - listitem [aria-hidden] [ref=f4e3909]
          - listitem [ref=f4e3910]:
            - link [ref=f4e3911] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=f4e3912]
              - generic [ref=f4e3913]: Everything ForYour Business
          - listitem [aria-hidden] [ref=f4e3914]
          - listitem [ref=f4e3915]:
            - link "Amazon Music Stream millions of songs" [ref=f4e3916] [cursor=pointer]:
              - /url: /music/player?ref=footer_apm
              - heading "Amazon Music" [level=5] [ref=f4e3917]
              - generic [ref=f4e3918]: Stream millions of songs
          - listitem [aria-hidden] [ref=f4e3919]
          - listitem [aria-hidden] [ref=f4e3920]
    - generic [ref=f4e3921]:
      - list [ref=f4e3922]:
        - listitem [ref=f4e3923]:
          - link "Conditions of Use & Sale" [ref=f4e3924] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=f4e3925]:
          - link "Privacy Notice" [ref=f4e3926] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=f4e3927]:
          - link "Interest-Based Ads" [ref=f4e3928] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=f4e3929]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=f4e3931]:
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
      |                                                                                                                      ^ Error: Card discount fits filter '70% off or more' (the card shows 16% off): hk vitals glutathione, orange, 1 effervescent tablet (sample pack)
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