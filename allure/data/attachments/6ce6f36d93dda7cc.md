# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AmazonAll.spec.ts >> Tablet: verifyingRearCameraPhotoSensorResolutionFilterFunctionality 
- Location: tests/AmazonAll.spec.ts:535:71

# Error details

```
Error: Filter 'up to 3 mp' does not fit the product (Camera Resolution row says: 8 mp): lenovo tab (smartchoice) | 10.1 inch display| wi-fi only| 4 gb ram + 64 gb rom (

expect(received).toBe(expected) // Object.is equality

Expected: "match"
Received: "mismatch"
```

```
Error: Filter 'up to 3 mp' does not fit the product (Camera Resolution row says: 8 mp): lenovo idea tab (smartchoice) with folio keyboard + tab pen | wi-fi + 5g |11" di

expect(received).toBe(expected) // Object.is equality

Expected: "match"
Received: "mismatch"
```

```
Error: Filter 'up to 3 mp' does not fit the product (Camera Resolution row says: 13 mp): lenovo idea tab pro gen 2 with pen plus {smartchoice} 13" display, 3.5k resoluti

expect(received).toBe(expected) // Object.is equality

Expected: "match"
Received: "mismatch"
```

```
Error: Filter 'up to 3 mp' does not fit the product (Camera Resolution row says: 13 mp): lenovo yoga tab plus smartchoice ai tablet with pen + keyboard |12.7" display, 3

expect(received).toBe(expected) // Object.is equality

Expected: "match"
Received: "mismatch"
```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - navigation "Shortcuts menu" [ref=f6e3]:
    - heading "Skip to" [level=2] [ref=f6e4]
    - list "Skip to" [ref=f6e5]:
      - listitem [ref=f6e6]:
        - link "main content" [ref=f6e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
      - listitem [ref=f6e8]:
        - link "Results" [ref=f6e9] [cursor=pointer]:
          - /url: .s-asin a:has(h2)
    - separator [aria-hidden] [ref=f6e10]
    - heading "Keyboard shortcuts" [level=2] [ref=f6e11]
    - list "Keyboard shortcuts" [ref=f6e12]:
      - listitem [ref=f6e13]:
        - link "Search, alt, forward slash" [ref=f6e14] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f6e15]:
            - generic [ref=f6e16]: Search
            - generic [ref=f6e17]:
              - generic [ref=f6e18]: alt
              - generic [ref=f6e19]: +
              - generic [ref=f6e20]: /
      - listitem [ref=f6e21]:
        - link "Cart, shift, alt, c" [ref=f6e22] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f6e23]:
            - generic [ref=f6e24]: Cart
            - generic [ref=f6e25]:
              - generic [ref=f6e26]: shift
              - generic [ref=f6e27]: +
              - generic [ref=f6e28]: alt
              - generic [ref=f6e29]: +
              - generic [ref=f6e30]: C
      - listitem [ref=f6e31]:
        - link "Home, shift, alt, h" [ref=f6e32] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f6e33]:
            - generic [ref=f6e34]: Home
            - generic [ref=f6e35]:
              - generic [ref=f6e36]: shift
              - generic [ref=f6e37]: +
              - generic [ref=f6e38]: alt
              - generic [ref=f6e39]: +
              - generic [ref=f6e40]: H
      - listitem [ref=f6e41]:
        - link "Your orders, shift, alt, o" [ref=f6e42] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [aria-hidden] [ref=f6e43]:
            - generic [ref=f6e44]: Orders
            - generic [ref=f6e45]:
              - generic [ref=f6e46]: shift
              - generic [ref=f6e47]: +
              - generic [ref=f6e48]: alt
              - generic [ref=f6e49]: +
              - generic [ref=f6e50]: O
      - listitem [ref=f6e51]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=f6e52] [cursor=pointer]:
          - generic [aria-hidden] [ref=f6e53]:
            - generic [ref=f6e54]: Show/Hide shortcuts
            - generic [ref=f6e55]:
              - generic [ref=f6e56]: shift
              - generic [ref=f6e57]: +
              - generic [ref=f6e58]: alt
              - generic [ref=f6e59]: +
              - generic [ref=f6e60]: Z
    - generic [ref=f6e61]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=f6e67]:
    - navigation "Primary" [ref=f6e68]:
      - generic [ref=f6e69]:
        - generic [ref=f6e70]:
          - link "Amazon.in" [ref=f6e72] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Mumbai 400001 Update location" [ref=f6e75] [cursor=pointer]:
            - generic [ref=f6e77]:
              - generic [ref=f6e78]: Delivering to Mumbai 400001
              - generic [ref=f6e79]: Update location
        - search [ref=f6e82]:
          - generic [ref=f6e85]:
            - generic [ref=f6e86]: All
            - combobox "Select the department you want to search in" [ref=f6e89] [cursor=pointer]:
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
          - searchbox "Search Amazon.in" [ref=f6e92]: Tablet
          - generic "Go" [ref=f6e95] [cursor=pointer]:
            - button "Go" [ref=f6e96]
        - generic [ref=f6e98]:
          - generic [ref=f6e99]:
            - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=f6e100] [cursor=pointer]:
              - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
              - generic [ref=f6e103]:
                - img "India" [ref=f6e104]
                - generic [ref=f6e105]: EN
            - button "Expand to Change Language or Country" [ref=f6e106] [cursor=pointer]
          - generic [ref=f6e107]:
            - link "Hello, sign in Account & Lists" [ref=f6e108] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DTablet%26crid%3D1GCXHYMDAXQVJ%26sprefix%3Dtablet%252Caps%252C341%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=f6e109]: Hello, sign in
              - generic [ref=f6e111]: Account & Lists
            - button "Expand Account and Lists" [ref=f6e112] [cursor=pointer]
          - link "Returns & Orders" [ref=f6e113] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=f6e114]: Returns
            - generic [ref=f6e115]: "& Orders"
          - link "0 items in cart" [ref=f6e116] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [aria-hidden] [ref=f6e118]: "0"
            - generic [aria-hidden] [ref=f6e121]: Cart
      - generic [ref=f6e122]:
        - button "Open All Categories Menu" [ref=f6e124] [cursor=pointer]:
          - generic [ref=f6e126]: All
        - list [ref=f6e130]:
          - listitem [ref=f6e131]:
            - link "Amazon Pay" [ref=f6e133] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=f6e134]:
            - link "Mobiles" [ref=f6e136] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=f6e137]:
            - generic [ref=f6e138]:
              - link "Prime" [ref=f6e139] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=f6e140] [cursor=pointer]
          - listitem [ref=f6e141]:
            - link "Today's Deals" [ref=f6e143] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=f6e144]:
            - link "Coupons" [ref=f6e146] [cursor=pointer]:
              - /url: /coupons?ref_=nav_cs_coupons
          - listitem [ref=f6e147]:
            - link "Flights" [ref=f6e149] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
          - listitem [ref=f6e150]:
            - link "Fresh Meat" [ref=f6e152] [cursor=pointer]:
              - /url: /freshmeat?ref_=nav_cs_fm
          - listitem [ref=f6e153]:
            - link "Grocery & Gourmet Foods" [ref=f6e155] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=f6e156]:
            - link "Electronics" [ref=f6e158] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=f6e159]:
            - link "New Releases" [ref=f6e161] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=f6e162]:
            - link "Bestsellers" [ref=f6e164] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=f6e165]:
            - link "Fashion" [ref=f6e167] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=f6e168]:
            - link "Computers" [ref=f6e170] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=f6e171]:
            - link "Custom Products" [ref=f6e173] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=f6e174]:
            - link "Sports, Fitness & Outdoors" [ref=f6e176] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=f6e177]:
            - link "Pet Supplies" [ref=f6e179] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=f6e180]:
            - link "Home & Kitchen" [ref=f6e182] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=f6e183]:
            - link "Video Games" [ref=f6e185] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=f6e186]:
            - link "Baby" [ref=f6e188] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=f6e189]:
            - link "Books" [ref=f6e191] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=f6e192]:
            - link "Kindle eBooks" [ref=f6e194] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=f6e195]:
            - link "Toys & Games" [ref=f6e197] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=f6e198]:
            - link "Car & Motorbike" [ref=f6e200] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=f6e201]:
            - link "Customer Service" [ref=f6e203] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=f6e204]:
            - link "Gift Cards" [ref=f6e206] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=f6e207]:
            - link "Home Improvement" [ref=f6e209] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=f6e210]:
            - link "Audible" [ref=f6e212] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=f6e213]:
            - link "Beauty & Personal Care" [ref=f6e215] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=f6e216]:
            - link "AmazonBasics" [ref=f6e218] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=f6e219]:
            - link "Subscribe & Save" [ref=f6e221] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
        - link "Apay_Travel" [ref=f6e225] [cursor=pointer]:
          - /url: /flights/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=960ce25c-288d-43b7-b5ff-860afbe291b3&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=8JKWC4ZQG1602ZNDBYD3
          - img "Apay_Travel" [ref=f6e226]
      - dialog [ref=f6e227]
  - generic [ref=f6e229]:
    - heading [level=1] [ref=f6e232]:
      - generic [ref=f6e233]:
        - heading "1-16 of over 40,000 results for \"Tablet\"" [level=2] [ref=f6e238]
        - generic [ref=f6e243]:
          - generic [aria-hidden] [ref=f6e244]: "Sort by:"
          - combobox "Sort by:" [ref=f6e245]:
            - option "Featured" [selected]
            - 'option "Price: Low to High"'
            - 'option "Price: High to Low"'
            - option "Avg. Customer Review"
            - option "Newest Arrivals"
            - option "Best Sellers"
          - generic [aria-hidden] [ref=f6e248] [cursor=pointer]: Sort by:Featured
    - generic [ref=f6e250]:
      - generic [ref=f6e252]:
        - generic [ref=f6e254]:
          - generic [ref=f6e258]:
            - link "Sponsored ad from Lenovo Tablets. \"The Ultimate Entertainment Tablet.\" Shop Lenovo Tablets." [ref=f6e259] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kDFv00AUx9VWQAkgqgwtykaGDBWXnM-O7RRZlc9xUieWk9puKrJYF_sSW3Vt13dpWobsSDDyQYCFkW_BhsTA90BpERID_-n39N7Te_pVwt2vP398f1h9piPBH7hnZ4407E_qW8Lh_pxmyU3AkT0h7fw0pr2JIQ2so_3ZtQFMeEvPlxMLzSL_jSsp2cJ9giS5KclNUW7C6baHZ7u66Z-YruVVDyqPIsoueF5Un545rmmM-o41Nbu1D1uV3U0nIHxefUwuyds8ayZZ7QWbgWWWzBMaAUZJGcagIAsKhPoDmgWWc4jYDPCYXtIIhHma0pAneQb-HAEhKSMGCpJknJYgzDNOM45eYld3uoExsm3T8K2R4wXeWHeHthl0TW_oj8b148oW3Pv26-OnL5-7tQOy5DlgBSkvUgpiRgCnvExY_bkIIWzLqgChJKmijHYsxz3aMcbG4aj6uot1o-hZQNHX-Oo-C32NT3k5Clf6v1njxRqfrrF-B4vanrEwb_qD61BPuhaPJQ2936682445L9hRq7VarZp_JbUYz0vKWhsxLSyqpqpgFSidDgJSFyKg9gQZIKUnIdyRe22kHt8tBCWdax4OdCiJQhsKwmRo2XgqKKLt6UCHoizDtir2_UFn5E49bwynjSIKyigo0jgqNd6IGQnCMkgiDTbSIiAsyZiG4QnGjmyfuK_u0J9IA-ke-7ZsoM3k1ZKWt5pPZinlm5qlOdf-I7mRaKRgDbL5tq_M89tzdTAZ_AYAgdfD&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_bkgd&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
            - generic [ref=f6e260]:
              - generic [ref=f6e262]:
                - link "Lenovo Tablets" [ref=f6e264] [cursor=pointer]:
                  - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kDFv00AUx9VWQAkgqgwtykaGDBWXnM-O7RRZlc9xUieWk9puKrJYF_sSW3Vt13dpWobsSDDyQYCFkW_BhsTA90BpERID_-n39N7Te_pVwt2vP398f1h9piPBH7hnZ4407E_qW8Lh_pxmyU3AkT0h7fw0pr2JIQ2so_3ZtQFMeEvPlxMLzSL_jSsp2cJ9giS5KclNUW7C6baHZ7u66Z-YruVVDyqPIsoueF5Un545rmmM-o41Nbu1D1uV3U0nIHxefUwuyds8ayZZ7QWbgWWWzBMaAUZJGcagIAsKhPoDmgWWc4jYDPCYXtIIhHma0pAneQb-HAEhKSMGCpJknJYgzDNOM45eYld3uoExsm3T8K2R4wXeWHeHthl0TW_oj8b148oW3Pv26-OnL5-7tQOy5DlgBSkvUgpiRgCnvExY_bkIIWzLqgChJKmijHYsxz3aMcbG4aj6uot1o-hZQNHX-Oo-C32NT3k5Clf6v1njxRqfrrF-B4vanrEwb_qD61BPuhaPJQ2936682445L9hRq7VarZp_JbUYz0vKWhsxLSyqpqpgFSidDgJSFyKg9gQZIKUnIdyRe22kHt8tBCWdax4OdCiJQhsKwmRo2XgqKKLt6UCHoizDtir2_UFn5E49bwynjSIKyigo0jgqNd6IGQnCMkgiDTbSIiAsyZiG4QnGjmyfuK_u0J9IA-ke-7ZsoM3k1ZKWt5pPZinlm5qlOdf-I7mRaKRgDbL5tq_M89tzdTAZ_AYAgdfD&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_logo&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                  - img "Lenovo Tablets" [ref=f6e266]
                - generic [ref=f6e268]:
                  - link "The Ultimate Entertainment Tablet" [ref=f6e269] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kDFv00AUx9VWQAkgqgwtykaGDBWXnM-O7RRZlc9xUieWk9puKrJYF_sSW3Vt13dpWobsSDDyQYCFkW_BhsTA90BpERID_-n39N7Te_pVwt2vP398f1h9piPBH7hnZ4407E_qW8Lh_pxmyU3AkT0h7fw0pr2JIQ2so_3ZtQFMeEvPlxMLzSL_jSsp2cJ9giS5KclNUW7C6baHZ7u66Z-YruVVDyqPIsoueF5Un545rmmM-o41Nbu1D1uV3U0nIHxefUwuyds8ayZZ7QWbgWWWzBMaAUZJGcagIAsKhPoDmgWWc4jYDPCYXtIIhHma0pAneQb-HAEhKSMGCpJknJYgzDNOM45eYld3uoExsm3T8K2R4wXeWHeHthl0TW_oj8b148oW3Pv26-OnL5-7tQOy5DlgBSkvUgpiRgCnvExY_bkIIWzLqgChJKmijHYsxz3aMcbG4aj6uot1o-hZQNHX-Oo-C32NT3k5Clf6v1njxRqfrrF-B4vanrEwb_qD61BPuhaPJQ2936682445L9hRq7VarZp_JbUYz0vKWhsxLSyqpqpgFSidDgJSFyKg9gQZIKUnIdyRe22kHt8tBCWdax4OdCiJQhsKwmRo2XgqKKLt6UCHoizDtir2_UFn5E49bwynjSIKyigo0jgqNd6IGQnCMkgiDTbSIiAsyZiG4QnGjmyfuK_u0J9IA-ke-7ZsoM3k1ZKWt5pPZinlm5qlOdf-I7mRaKRgDbL5tq_M89tzdTAZ_AYAgdfD&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_hl&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                  - generic [ref=f6e272]:
                    - button "Leave feedback on Sponsored ad" [ref=f6e276] [cursor=pointer]: Sponsored
                    - generic [ref=f6e278]: "|"
                    - generic [ref=f6e279]: Top 10 best-selling brand in tablets
                    - generic [ref=f6e280]: "|"
                    - link "Shop Lenovo Tablets" [ref=f6e282] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAF1kDFv00AUx9VWQAkgqgwtykaGDBWXnM-O7RRZlc9xUieWk9puKrJYF_sSW3Vt13dpWobsSDDyQYCFkW_BhsTA90BpERID_-n39N7Te_pVwt2vP398f1h9piPBH7hnZ4407E_qW8Lh_pxmyU3AkT0h7fw0pr2JIQ2so_3ZtQFMeEvPlxMLzSL_jSsp2cJ9giS5KclNUW7C6baHZ7u66Z-YruVVDyqPIsoueF5Un545rmmM-o41Nbu1D1uV3U0nIHxefUwuyds8ayZZ7QWbgWWWzBMaAUZJGcagIAsKhPoDmgWWc4jYDPCYXtIIhHma0pAneQb-HAEhKSMGCpJknJYgzDNOM45eYld3uoExsm3T8K2R4wXeWHeHthl0TW_oj8b148oW3Pv26-OnL5-7tQOy5DlgBSkvUgpiRgCnvExY_bkIIWzLqgChJKmijHYsxz3aMcbG4aj6uot1o-hZQNHX-Oo-C32NT3k5Clf6v1njxRqfrrF-B4vanrEwb_qD61BPuhaPJQ2936682445L9hRq7VarZp_JbUYz0vKWhsxLSyqpqpgFSidDgJSFyKg9gQZIKUnIdyRe22kHt8tBCWdax4OdCiJQhsKwmRo2XgqKKLt6UCHoizDtir2_UFn5E49bwynjSIKyigo0jgqNd6IGQnCMkgiDTbSIiAsyZiG4QnGjmyfuK_u0J9IA-ke-7ZsoM3k1ZKWt5pPZinlm5qlOdf-I7mRaKRgDbL5tq_M89tzdTAZ_AYAgdfD&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Dauto-sparkle-hsa-tetris%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_cta&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                      - generic [ref=f6e285]:
                        - text: Shop Lenovo
                        - generic [ref=f6e286]: Tablets
              - group [ref=f6e289]:
                - generic [ref=f6e291]:
                  - group [ref=f6e293]:
                    - list [ref=f6e294]:
                      - listitem [ref=f6e295]:
                        - generic [ref=f6e297]:
                          - link [aria-hidden] [ref=f6e298] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqoAQQVRYtyo4ssog08dgZOw9kVX41cRLZifOo6MYaz4wfamq79qRpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnSq5PDz929fH9SeapK4HHurlYMmw3WjIraOQ5Ymtz6XpmssZ_OYna0NNLYHx8GNASx4x863a1sK6PKVh7pp5D2WkNJGSrujtOHFvYUeHGrWcmR59qJ2Un1IWXnJs7z2ZOV4luEOHfvCMutvKtXDX8bHPKw9wlf4dZa2k7T-vAzANk3ChFFQMlyQGOQ4YkBs3GepbzstqQwAj9kVo4Bkmw0jPMlS8PcEEFzQEuQ4STkrAMlSzlIuvdA9zTF9w51OLWNpu87CX8w0bzK1fNNaTJburHFarcCjLz_effj00ayf4C3PQJnj4nLDQFxiwBkvkrLxrAMhlJWeCCFCvY4iHdiONzgwZkbLrb00dc3Iz2zQ1fb69R8iba_PeeGSnfY_ez3a6_O9rv0eUf3IiKzb4fiGaIlp8xip0vtK9W0l5jwvB4Kw2-3a_yIJUS7gnUAFHY503VGmI-80p35B_XwT00LlzbjEPin8hKqweZ1QVez2kSJ2ZanXLAtVBCLoI5EFTO4DKskBQH0KQSCJCIgSIXKgKKQPw2ai4rxs4oKF6rAbZnfnvfF6_BPS0bGI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                          - link [ref=f6e300] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqoAQQVRYtyo4ssog08dgZOw9kVX41cRLZifOo6MYaz4wfamq79qRpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnSq5PDz929fH9SeapK4HHurlYMmw3WjIraOQ5Ymtz6XpmssZ_OYna0NNLYHx8GNASx4x863a1sK6PKVh7pp5D2WkNJGSrujtOHFvYUeHGrWcmR59qJ2Un1IWXnJs7z2ZOV4luEOHfvCMutvKtXDX8bHPKw9wlf4dZa2k7T-vAzANk3ChFFQMlyQGOQ4YkBs3GepbzstqQwAj9kVo4Bkmw0jPMlS8PcEEFzQEuQ4STkrAMlSzlIuvdA9zTF9w51OLWNpu87CX8w0bzK1fNNaTJburHFarcCjLz_effj00ayf4C3PQJnj4nLDQFxiwBkvkrLxrAMhlJWeCCFCvY4iHdiONzgwZkbLrb00dc3Iz2zQ1fb69R8iba_PeeGSnfY_ez3a6_O9rv0eUf3IiKzb4fiGaIlp8xip0vtK9W0l5jwvB4Kw2-3a_yIJUS7gnUAFHY503VGmI-80p35B_XwT00LlzbjEPin8hKqweZ1QVez2kSJ2ZanXLAtVBCLoI5EFTO4DKskBQH0KQSCJCIgSIXKgKKQPw2ai4rxs4oKF6rAbZnfnvfF6_BPS0bGI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_img&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                            - img "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e303]
                          - generic [ref=f6e305]:
                            - link [aria-hidden] [ref=f6e306] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqoAQQVRYtyo4ssog08dgZOw9kVX41cRLZifOo6MYaz4wfamq79qRpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnSq5PDz929fH9SeapK4HHurlYMmw3WjIraOQ5Ymtz6XpmssZ_OYna0NNLYHx8GNASx4x863a1sK6PKVh7pp5D2WkNJGSrujtOHFvYUeHGrWcmR59qJ2Un1IWXnJs7z2ZOV4luEOHfvCMutvKtXDX8bHPKw9wlf4dZa2k7T-vAzANk3ChFFQMlyQGOQ4YkBs3GepbzstqQwAj9kVo4Bkmw0jPMlS8PcEEFzQEuQ4STkrAMlSzlIuvdA9zTF9w51OLWNpu87CX8w0bzK1fNNaTJburHFarcCjLz_effj00ayf4C3PQJnj4nLDQFxiwBkvkrLxrAMhlJWeCCFCvY4iHdiONzgwZkbLrb00dc3Iz2zQ1fb69R8iba_PeeGSnfY_ez3a6_O9rv0eUf3IiKzb4fiGaIlp8xip0vtK9W0l5jwvB4Kw2-3a_yIJUS7gnUAFHY503VGmI-80p35B_XwT00LlzbjEPin8hKqweZ1QVez2kSJ2ZanXLAtVBCLoI5EFTO4DKskBQH0KQSCJCIgSIXKgKKQPw2ai4rxs4oKF6rAbZnfnvfF6_BPS0bGI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                            - link "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e309] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqoAQQVRYtyo4ssog08dgZOw9kVX41cRLZifOo6MYaz4wfamq79qRpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnSq5PDz929fH9SeapK4HHurlYMmw3WjIraOQ5Ymtz6XpmssZ_OYna0NNLYHx8GNASx4x863a1sK6PKVh7pp5D2WkNJGSrujtOHFvYUeHGrWcmR59qJ2Un1IWXnJs7z2ZOV4luEOHfvCMutvKtXDX8bHPKw9wlf4dZa2k7T-vAzANk3ChFFQMlyQGOQ4YkBs3GepbzstqQwAj9kVo4Bkmw0jPMlS8PcEEFzQEuQ4STkrAMlSzlIuvdA9zTF9w51OLWNpu87CX8w0bzK1fNNaTJburHFarcCjLz_effj00ayf4C3PQJnj4nLDQFxiwBkvkrLxrAMhlJWeCCFCvY4iHdiONzgwZkbLrb00dc3Iz2zQ1fb69R8iba_PeeGSnfY_ez3a6_O9rv0eUf3IiKzb4fiGaIlp8xip0vtK9W0l5jwvB4Kw2-3a_yIJUS7gnUAFHY503VGmI-80p35B_XwT00LlzbjEPin8hKqweZ1QVez2kSJ2ZanXLAtVBCLoI5EFTO4DKskBQH0KQSCJCIgSIXKgKKQPw2ai4rxs4oKF6rAbZnfnvfF6_BPS0bGI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                            - link "Rated 4.2 out of 5 stars by 35 reviews. Go to review section." [ref=f6e312] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqoAQQVRYtyo4ssog08dgZOw9kVX41cRLZifOo6MYaz4wfamq79qRpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnSq5PDz929fH9SeapK4HHurlYMmw3WjIraOQ5Ymtz6XpmssZ_OYna0NNLYHx8GNASx4x863a1sK6PKVh7pp5D2WkNJGSrujtOHFvYUeHGrWcmR59qJ2Un1IWXnJs7z2ZOV4luEOHfvCMutvKtXDX8bHPKw9wlf4dZa2k7T-vAzANk3ChFFQMlyQGOQ4YkBs3GepbzstqQwAj9kVo4Bkmw0jPMlS8PcEEFzQEuQ4STkrAMlSzlIuvdA9zTF9w51OLWNpu87CX8w0bzK1fNNaTJburHFarcCjLz_effj00ayf4C3PQJnj4nLDQFxiwBkvkrLxrAMhlJWeCCFCvY4iHdiONzgwZkbLrb00dc3Iz2zQ1fb69R8iba_PeeGSnfY_ez3a6_O9rv0eUf3IiKzb4fiGaIlp8xip0vtK9W0l5jwvB4Kw2-3a_yIJUS7gnUAFHY503VGmI-80p35B_XwT00LlzbjEPin8hKqweZ1QVez2kSJ2ZanXLAtVBCLoI5EFTO4DKskBQH0KQSCJCIgSIXKgKKQPw2ai4rxs4oKF6rAbZnfnvfF6_BPS0bGI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_rating&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3#customerReviews
                              - generic [ref=f6e313]:
                                - generic [ref=f6e314]: "4.2"
                                - generic [ref=f6e315]: 4.2 out of 5 stars.
                                - generic [ref=f6e317]: (35)
                            - link "₹25,999.00" [ref=f6e319] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqoAQQVRYtyo4ssog08dgZOw9kVX41cRLZifOo6MYaz4wfamq79qRpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnSq5PDz929fH9SeapK4HHurlYMmw3WjIraOQ5Ymtz6XpmssZ_OYna0NNLYHx8GNASx4x863a1sK6PKVh7pp5D2WkNJGSrujtOHFvYUeHGrWcmR59qJ2Un1IWXnJs7z2ZOV4luEOHfvCMutvKtXDX8bHPKw9wlf4dZa2k7T-vAzANk3ChFFQMlyQGOQ4YkBs3GepbzstqQwAj9kVo4Bkmw0jPMlS8PcEEFzQEuQ4STkrAMlSzlIuvdA9zTF9w51OLWNpu87CX8w0bzK1fNNaTJburHFarcCjLz_effj00ayf4C3PQJnj4nLDQFxiwBkvkrLxrAMhlJWeCCFCvY4iHdiONzgwZkbLrb00dc3Iz2zQ1fb69R8iba_PeeGSnfY_ez3a6_O9rv0eUf3IiKzb4fiGaIlp8xip0vtK9W0l5jwvB4Kw2-3a_yIJUS7gnUAFHY503VGmI-80p35B_XwT00LlzbjEPin8hKqweZ1QVez2kSJ2ZanXLAtVBCLoI5EFTO4DKskBQH0KQSCJCIgSIXKgKKQPw2ai4rxs4oKF6rAbZnfnvfF6_BPS0bGI&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_0_price&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                              - generic [ref=f6e321]:
                                - generic [ref=f6e322]: ₹25,999.00
                                - generic [aria-hidden] [ref=f6e323]:
                                  - text: ₹
                                  - generic [ref=f6e324]:
                                    - text: 25,999
                                    - generic [ref=f6e325]: .
                                  - text: "00"
                            - generic [ref=f6e326]: "M.R.P: ₹45,000.00"
                      - listitem [ref=f6e329]:
                        - generic [ref=f6e331]:
                          - link [aria-hidden] [ref=f6e332] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkLtu01AAhhUqIAQQVYYWZSNDhkgntk-OnQuyKt-a2onsxHFS0cU69jm-qKnt2idNy5A3YELwHsDCyFuwITHwHoiLkPimX_qGX_oaYf3z929fHzSfKlDwLHe1stF0sm7XhO5RRLP01mdwtsZivkjo6VpDljk-Cm40YPB39Hy7NmFAvFcuGmSx-xgiqYekXl_q8Rf3lmpQVwzvzHDNZfO48ZDQ6pLlRfPJynYNzZnY5oWht97UGvVfxscsaj7CV_h1nvXSrPW8CsA2S6OUElBRXIYJKHBMgdC-TzPftLuwCgBL6BUlIMw3GxqyNM_A3xMQ4pJUoMBpxmgJwjxjNGPwheoqtu5rzmxmaJ7p2Et_OVfc6czwdWM59Zx5-6RR4w-__Hj34dNHvXWMtywHVYHLyw0FSYUBo6xMq_azPs_zojQUeB6hYV-CB6btjg-0udZ1mi91VdGKUxMMlL16_YdY2asLVjrhTvmfvRrv1cVeVX6PuHWoxcbtxLoJlVQ3WYJk-L7WeFtLGCuqMcftdrvev0hcXHB4xxFO5c9U1VsjC50UxC-JX2wSUsqsk1TYD0s_JTLfuU6JLAxGSBIGIhx2qlIWAAQjJNCAiiNAoBgANCI8CKCAgADDUAwkKRzxUSeVcVF1cEkjeTKI8rvzobW2fgLNb7F7&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_bkgd&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                          - link [ref=f6e334] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkLtu01AAhhUqIAQQVYYWZSNDhkgntk-OnQuyKt-a2onsxHFS0cU69jm-qKnt2idNy5A3YELwHsDCyFuwITHwHoiLkPimX_qGX_oaYf3z929fHzSfKlDwLHe1stF0sm7XhO5RRLP01mdwtsZivkjo6VpDljk-Cm40YPB39Hy7NmFAvFcuGmSx-xgiqYekXl_q8Rf3lmpQVwzvzHDNZfO48ZDQ6pLlRfPJynYNzZnY5oWht97UGvVfxscsaj7CV_h1nvXSrPW8CsA2S6OUElBRXIYJKHBMgdC-TzPftLuwCgBL6BUlIMw3GxqyNM_A3xMQ4pJUoMBpxmgJwjxjNGPwheoqtu5rzmxmaJ7p2Et_OVfc6czwdWM59Zx5-6RR4w-__Hj34dNHvXWMtywHVYHLyw0FSYUBo6xMq_azPs_zojQUeB6hYV-CB6btjg-0udZ1mi91VdGKUxMMlL16_YdY2asLVjrhTvmfvRrv1cVeVX6PuHWoxcbtxLoJlVQ3WYJk-L7WeFtLGCuqMcftdrvev0hcXHB4xxFO5c9U1VsjC50UxC-JX2wSUsqsk1TYD0s_JTLfuU6JLAxGSBIGIhx2qlIWAAQjJNCAiiNAoBgANCI8CKCAgADDUAwkKRzxUSeVcVF1cEkjeTKI8rvzobW2fgLNb7F7&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_img&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                            - img "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e337]
                          - generic [ref=f6e339]:
                            - link [aria-hidden] [ref=f6e340] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkLtu01AAhhUqIAQQVYYWZSNDhkgntk-OnQuyKt-a2onsxHFS0cU69jm-qKnt2idNy5A3YELwHsDCyFuwITHwHoiLkPimX_qGX_oaYf3z929fHzSfKlDwLHe1stF0sm7XhO5RRLP01mdwtsZivkjo6VpDljk-Cm40YPB39Hy7NmFAvFcuGmSx-xgiqYekXl_q8Rf3lmpQVwzvzHDNZfO48ZDQ6pLlRfPJynYNzZnY5oWht97UGvVfxscsaj7CV_h1nvXSrPW8CsA2S6OUElBRXIYJKHBMgdC-TzPftLuwCgBL6BUlIMw3GxqyNM_A3xMQ4pJUoMBpxmgJwjxjNGPwheoqtu5rzmxmaJ7p2Et_OVfc6czwdWM59Zx5-6RR4w-__Hj34dNHvXWMtywHVYHLyw0FSYUBo6xMq_azPs_zojQUeB6hYV-CB6btjg-0udZ1mi91VdGKUxMMlL16_YdY2asLVjrhTvmfvRrv1cVeVX6PuHWoxcbtxLoJlVQ3WYJk-L7WeFtLGCuqMcftdrvev0hcXHB4xxFO5c9U1VsjC50UxC-JX2wSUsqsk1TYD0s_JTLfuU6JLAxGSBIGIhx2qlIWAAQjJNCAiiNAoBgANCI8CKCAgADDUAwkKRzxUSeVcVF1cEkjeTKI8rvzobW2fgLNb7F7&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_bkgd&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                            - link "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e343] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkLtu01AAhhUqIAQQVYYWZSNDhkgntk-OnQuyKt-a2onsxHFS0cU69jm-qKnt2idNy5A3YELwHsDCyFuwITHwHoiLkPimX_qGX_oaYf3z929fHzSfKlDwLHe1stF0sm7XhO5RRLP01mdwtsZivkjo6VpDljk-Cm40YPB39Hy7NmFAvFcuGmSx-xgiqYekXl_q8Rf3lmpQVwzvzHDNZfO48ZDQ6pLlRfPJynYNzZnY5oWht97UGvVfxscsaj7CV_h1nvXSrPW8CsA2S6OUElBRXIYJKHBMgdC-TzPftLuwCgBL6BUlIMw3GxqyNM_A3xMQ4pJUoMBpxmgJwjxjNGPwheoqtu5rzmxmaJ7p2Et_OVfc6czwdWM59Zx5-6RR4w-__Hj34dNHvXWMtywHVYHLyw0FSYUBo6xMq_azPs_zojQUeB6hYV-CB6btjg-0udZ1mi91VdGKUxMMlL16_YdY2asLVjrhTvmfvRrv1cVeVX6PuHWoxcbtxLoJlVQ3WYJk-L7WeFtLGCuqMcftdrvev0hcXHB4xxFO5c9U1VsjC50UxC-JX2wSUsqsk1TYD0s_JTLfuU6JLAxGSBIGIhx2qlIWAAQjJNCAiiNAoBgANCI8CKCAgADDUAwkKRzxUSeVcVF1cEkjeTKI8rvzobW2fgLNb7F7&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_title&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                            - link "Rated 4 out of 5 stars by 94 reviews. Go to review section." [ref=f6e346] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkLtu01AAhhUqIAQQVYYWZSNDhkgntk-OnQuyKt-a2onsxHFS0cU69jm-qKnt2idNy5A3YELwHsDCyFuwITHwHoiLkPimX_qGX_oaYf3z929fHzSfKlDwLHe1stF0sm7XhO5RRLP01mdwtsZivkjo6VpDljk-Cm40YPB39Hy7NmFAvFcuGmSx-xgiqYekXl_q8Rf3lmpQVwzvzHDNZfO48ZDQ6pLlRfPJynYNzZnY5oWht97UGvVfxscsaj7CV_h1nvXSrPW8CsA2S6OUElBRXIYJKHBMgdC-TzPftLuwCgBL6BUlIMw3GxqyNM_A3xMQ4pJUoMBpxmgJwjxjNGPwheoqtu5rzmxmaJ7p2Et_OVfc6czwdWM59Zx5-6RR4w-__Hj34dNHvXWMtywHVYHLyw0FSYUBo6xMq_azPs_zojQUeB6hYV-CB6btjg-0udZ1mi91VdGKUxMMlL16_YdY2asLVjrhTvmfvRrv1cVeVX6PuHWoxcbtxLoJlVQ3WYJk-L7WeFtLGCuqMcftdrvev0hcXHB4xxFO5c9U1VsjC50UxC-JX2wSUsqsk1TYD0s_JTLfuU6JLAxGSBIGIhx2qlIWAAQjJNCAiiNAoBgANCI8CKCAgADDUAwkKRzxUSeVcVF1cEkjeTKI8rvzobW2fgLNb7F7&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_rating&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3#customerReviews
                              - generic [ref=f6e347]:
                                - generic [ref=f6e348]: "4"
                                - generic [ref=f6e349]: 4 out of 5 stars.
                                - generic [ref=f6e351]: (94)
                            - link "₹27,999.00" [ref=f6e353] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkLtu01AAhhUqIAQQVYYWZSNDhkgntk-OnQuyKt-a2onsxHFS0cU69jm-qKnt2idNy5A3YELwHsDCyFuwITHwHoiLkPimX_qGX_oaYf3z929fHzSfKlDwLHe1stF0sm7XhO5RRLP01mdwtsZivkjo6VpDljk-Cm40YPB39Hy7NmFAvFcuGmSx-xgiqYekXl_q8Rf3lmpQVwzvzHDNZfO48ZDQ6pLlRfPJynYNzZnY5oWht97UGvVfxscsaj7CV_h1nvXSrPW8CsA2S6OUElBRXIYJKHBMgdC-TzPftLuwCgBL6BUlIMw3GxqyNM_A3xMQ4pJUoMBpxmgJwjxjNGPwheoqtu5rzmxmaJ7p2Et_OVfc6czwdWM59Zx5-6RR4w-__Hj34dNHvXWMtywHVYHLyw0FSYUBo6xMq_azPs_zojQUeB6hYV-CB6btjg-0udZ1mi91VdGKUxMMlL16_YdY2asLVjrhTvmfvRrv1cVeVX6PuHWoxcbtxLoJlVQ3WYJk-L7WeFtLGCuqMcftdrvev0hcXHB4xxFO5c9U1VsjC50UxC-JX2wSUsqsk1TYD0s_JTLfuU6JLAxGSBIGIhx2qlIWAAQjJNCAiiNAoBgANCI8CKCAgADDUAwkKRzxUSeVcVF1cEkjeTKI8rvzobW2fgLNb7F7&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_1_price&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                              - generic [ref=f6e355]:
                                - generic [ref=f6e356]: ₹27,999.00
                                - generic [aria-hidden] [ref=f6e357]:
                                  - text: ₹
                                  - generic [ref=f6e358]:
                                    - text: 27,999
                                    - generic [ref=f6e359]: .
                                  - text: "00"
                            - generic [ref=f6e360]: "M.R.P: ₹48,000.00"
                      - listitem [aria-hidden] [ref=f6e363]:
                        - generic [ref=f6e365]:
                          - link [aria-hidden] [ref=f6e366] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqIAQQVRYtyo4ssog0sT0ZOw9kVX41dRLZifOo6MYae8YPNbVdz6RpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnRqYfXz929fH9SfalBajr3VykGT0bpZkdpHEc3SW5_D6RrL-Tyhp2sDje3hUXBjAEu8o-fbtQ0DsnzloV4We48hUjpI6XSVjnhxb6EHVc1anlmevagf1x4Syi55XtSfrBzPMtyRY19YZuNNpVb9ZXzMo_ojfIVf51knzRrPWQC2WRqllABGcRkmoMAxBVLzPs1822lDFgCe0CtKQJhvNjTkaZ6BvycgxCVhoMBpxmkJwjzjNOPwhe5pjukb7nRqGUvbdRb-YqZ5k6nlm9ZisnRnzZNaRTz88uPdh08fzcYx3vIcsAKXlxsKEoYBp7xMWfNZVxRFWelLoohQv6vAA9vxhgfGzGi79ZemrhnFqQ162l6__kOs7fU5L91wp_3PXo_3-nyva79H3Dg0Yut2NL4JtdS0eYJU-L5Se1tJOC_YUBB2u13nXyQhLgS8E4igi2e6PpoqBjwpiF8Sv9gkpFR5K2HYD0s_JarYuk6JKvUGSJF6Muy3WKlKoAsGSKIBlQeAQDkAaEBEEEAJAQmGoRwoSjgQo1aq4oK1cEkjddSL8rvz_ng9_gnArrFe&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_bkgd&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                          - link [ref=f6e368] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqIAQQVRYtyo4ssog0sT0ZOw9kVX41dRLZifOo6MYae8YPNbVdz6RpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnRqYfXz929fH9SfalBajr3VykGT0bpZkdpHEc3SW5_D6RrL-Tyhp2sDje3hUXBjAEu8o-fbtQ0DsnzloV4We48hUjpI6XSVjnhxb6EHVc1anlmevagf1x4Syi55XtSfrBzPMtyRY19YZuNNpVb9ZXzMo_ojfIVf51knzRrPWQC2WRqllABGcRkmoMAxBVLzPs1822lDFgCe0CtKQJhvNjTkaZ6BvycgxCVhoMBpxmkJwjzjNOPwhe5pjukb7nRqGUvbdRb-YqZ5k6nlm9ZisnRnzZNaRTz88uPdh08fzcYx3vIcsAKXlxsKEoYBp7xMWfNZVxRFWelLoohQv6vAA9vxhgfGzGi79ZemrhnFqQ162l6__kOs7fU5L91wp_3PXo_3-nyva79H3Dg0Yut2NL4JtdS0eYJU-L5Se1tJOC_YUBB2u13nXyQhLgS8E4igi2e6PpoqBjwpiF8Sv9gkpFR5K2HYD0s_JarYuk6JKvUGSJF6Muy3WKlKoAsGSKIBlQeAQDkAaEBEEEAJAQmGoRwoSjgQo1aq4oK1cEkjddSL8rvz_ng9_gnArrFe&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_img&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                          - generic [ref=f6e373]:
                            - link [aria-hidden] [ref=f6e374] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqIAQQVRYtyo4ssog0sT0ZOw9kVX41dRLZifOo6MYae8YPNbVdz6RpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnRqYfXz929fH9SfalBajr3VykGT0bpZkdpHEc3SW5_D6RrL-Tyhp2sDje3hUXBjAEu8o-fbtQ0DsnzloV4We48hUjpI6XSVjnhxb6EHVc1anlmevagf1x4Syi55XtSfrBzPMtyRY19YZuNNpVb9ZXzMo_ojfIVf51knzRrPWQC2WRqllABGcRkmoMAxBVLzPs1822lDFgCe0CtKQJhvNjTkaZ6BvycgxCVhoMBpxmkJwjzjNOPwhe5pjukb7nRqGUvbdRb-YqZ5k6nlm9ZisnRnzZNaRTz88uPdh08fzcYx3vIcsAKXlxsKEoYBp7xMWfNZVxRFWelLoohQv6vAA9vxhgfGzGi79ZemrhnFqQ162l6__kOs7fU5L91wp_3PXo_3-nyva79H3Dg0Yut2NL4JtdS0eYJU-L5Se1tJOC_YUBB2u13nXyQhLgS8E4igi2e6PpoqBjwpiF8Sv9gkpFR5K2HYD0s_JarYuk6JKvUGSJF6Muy3WKlKoAsGSKIBlQeAQDkAaEBEEEAJAQmGoRwoSjgQo1aq4oK1cEkjddSL8rvz_ng9_gnArrFe&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_bkgd&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                            - link [ref=f6e377] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqIAQQVRYtyo4ssog0sT0ZOw9kVX41dRLZifOo6MYae8YPNbVdz6RpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnRqYfXz929fH9SfalBajr3VykGT0bpZkdpHEc3SW5_D6RrL-Tyhp2sDje3hUXBjAEu8o-fbtQ0DsnzloV4We48hUjpI6XSVjnhxb6EHVc1anlmevagf1x4Syi55XtSfrBzPMtyRY19YZuNNpVb9ZXzMo_ojfIVf51knzRrPWQC2WRqllABGcRkmoMAxBVLzPs1822lDFgCe0CtKQJhvNjTkaZ6BvycgxCVhoMBpxmkJwjzjNOPwhe5pjukb7nRqGUvbdRb-YqZ5k6nlm9ZisnRnzZNaRTz88uPdh08fzcYx3vIcsAKXlxsKEoYBp7xMWfNZVxRFWelLoohQv6vAA9vxhgfGzGi79ZemrhnFqQ162l6__kOs7fU5L91wp_3PXo_3-nyva79H3Dg0Yut2NL4JtdS0eYJU-L5Se1tJOC_YUBB2u13nXyQhLgS8E4igi2e6PpoqBjwpiF8Sv9gkpFR5K2HYD0s_JarYuk6JKvUGSJF6Muy3WKlKoAsGSKIBlQeAQDkAaEBEEEAJAQmGoRwoSjgQo1aq4oK1cEkjddSL8rvz_ng9_gnArrFe&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_title&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                              - generic [ref=f6e378]: Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey
                            - link [ref=f6e380] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqIAQQVRYtyo4ssog0sT0ZOw9kVX41dRLZifOo6MYae8YPNbVdz6RpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnRqYfXz929fH9SfalBajr3VykGT0bpZkdpHEc3SW5_D6RrL-Tyhp2sDje3hUXBjAEu8o-fbtQ0DsnzloV4We48hUjpI6XSVjnhxb6EHVc1anlmevagf1x4Syi55XtSfrBzPMtyRY19YZuNNpVb9ZXzMo_ojfIVf51knzRrPWQC2WRqllABGcRkmoMAxBVLzPs1822lDFgCe0CtKQJhvNjTkaZ6BvycgxCVhoMBpxmkJwjzjNOPwhe5pjukb7nRqGUvbdRb-YqZ5k6nlm9ZisnRnzZNaRTz88uPdh08fzcYx3vIcsAKXlxsKEoYBp7xMWfNZVxRFWelLoohQv6vAA9vxhgfGzGi79ZemrhnFqQ162l6__kOs7fU5L91wp_3PXo_3-nyva79H3Dg0Yut2NL4JtdS0eYJU-L5Se1tJOC_YUBB2u13nXyQhLgS8E4igi2e6PpoqBjwpiF8Sv9gkpFR5K2HYD0s_JarYuk6JKvUGSJF6Muy3WKlKoAsGSKIBlQeAQDkAaEBEEEAJAQmGoRwoSjgQo1aq4oK1cEkjddSL8rvz_ng9_gnArrFe&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_rating&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3#customerReviews
                              - generic [ref=f6e381]:
                                - generic [ref=f6e382]: "3.8"
                                - generic [ref=f6e383]: 3.8 out of 5 stars.
                                - generic [ref=f6e385]: (73)
                            - link [ref=f6e387] [cursor=pointer]:
                              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVkMtu00AARRUqIAQQVRYtyo4ssog0sT0ZOw9kVX41dRLZifOo6MYae8YPNbVdz6RpWeQPWCH4D2DDkr9gh8SC_0A8hMRZXeksrnRqYfXz929fH9SfalBajr3VykGT0bpZkdpHEc3SW5_D6RrL-Tyhp2sDje3hUXBjAEu8o-fbtQ0DsnzloV4We48hUjpI6XSVjnhxb6EHVc1anlmevagf1x4Syi55XtSfrBzPMtyRY19YZuNNpVb9ZXzMo_ojfIVf51knzRrPWQC2WRqllABGcRkmoMAxBVLzPs1822lDFgCe0CtKQJhvNjTkaZ6BvycgxCVhoMBpxmkJwjzjNOPwhe5pjukb7nRqGUvbdRb-YqZ5k6nlm9ZisnRnzZNaRTz88uPdh08fzcYx3vIcsAKXlxsKEoYBp7xMWfNZVxRFWelLoohQv6vAA9vxhgfGzGi79ZemrhnFqQ162l6__kOs7fU5L91wp_3PXo_3-nyva79H3Dg0Yut2NL4JtdS0eYJU-L5Se1tJOC_YUBB2u13nXyQhLgS8E4igi2e6PpoqBjwpiF8Sv9gkpFR5K2HYD0s_JarYuk6JKvUGSJF6Muy3WKlKoAsGSKIBlQeAQDkAaEBEEEAJAQmGoRwoSjgQo1aq4oK1cEkjddSL8rvz_ng9_gnArrFe&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-941ebe59-d25b-49d0-b214-12cc5b66c90f%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_s_sparkle_sbtcd_asin_2_price&pd_rd_w=ZRJZ7&content-id=amzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1%3Aamzn1.sym.7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_p=7b6188a8-103f-4f88-b43a-19aba06e30c1&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=0z1bz&pd_rd_r=6c959b43-3c45-4953-845e-8778fb13c8c3
                              - generic [ref=f6e389]:
                                - generic [ref=f6e390]: ₹29,999.00
                                - generic [aria-hidden] [ref=f6e391]:
                                  - text: ₹
                                  - generic [ref=f6e392]:
                                    - text: 29,999
                                    - generic [ref=f6e393]: .
                                  - text: "00"
                            - generic [ref=f6e394]: "M.R.P: ₹53,000.00"
                  - button "Next page" [ref=f6e398] [cursor=pointer]
          - generic [ref=f6e405]:
            - text: Showing products near you, with fast delivery
            - link "See all products, across price ranges." [ref=f6e406] [cursor=pointer]:
              - /url: /s?k=Tablet&dc&crid=1GCXHYMDAXQVJ&nsdOptOutParam=true&qid=1794617466&sprefix=tablet%2Caps%2C341&ref=sr_ex_p_n_g-1003533764111_0
          - generic [ref=f6e408]:
            - generic [ref=f6e411]:
              - heading "Results" [level=2] [ref=f6e412]
              - generic [ref=f6e413]: Check each product page for other buying options.
            - generic:
              - list
          - listitem [ref=f6e414]:
            - generic [ref=f6e420]:
              - generic [ref=f6e422]:
                - generic "Amazon's Choice" [ref=f6e425]:
                  - group "Amazon's Choice for \"Tablet\"" [ref=f6e428]:
                    - generic [ref=f6e430]: Amazon's Choice
                - link [aria-hidden] [ref=f6e434] [cursor=pointer]:
                  - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-1
              - generic [ref=f6e439]:
                - link [ref=f6e441] [cursor=pointer]:
                  - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-1
                  - heading "Samsung Galaxy Tab A11+ [Smartchoice], 11-inch (27.82 CM), LCD Display, 6GB RAM, 128GB ROM, Wi-Fi, Quad Speakers, Dolby Atmos, Silver, AI Enabled" [level=2] [ref=f6e442]
                - generic [ref=f6e443]:
                  - generic [ref=f6e444]:
                    - text: "4.5"
                    - button "4.5 out of 5 stars, rating details" [ref=f6e446] [cursor=pointer]:
                      - generic [ref=f6e448]: 4.5 out of 5 stars
                    - link "336 ratings" [ref=f6e450] [cursor=pointer]:
                      - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-1#customerReviews
                      - text: (336)
                  - generic [ref=f6e451]: 1K+ bought in past month
                - generic [ref=f6e454]:
                  - generic [ref=f6e455]:
                    - generic [ref=f6e457]:
                      - generic [ref=f6e458]: Price, product page
                      - 'link "₹21,999 M.R.P: ₹27,999 M.R.P: ₹27,999" [ref=f6e459] [cursor=pointer]':
                        - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=sr_1_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-1
                        - generic [ref=f6e460]:
                          - generic [ref=f6e461]: ₹21,999
                          - generic [aria-hidden] [ref=f6e462]: ₹21,999
                        - generic [ref=f6e463]: "M.R.P: ₹27,999"
                        - generic [ref=f6e464]:
                          - text: "M.R.P:"
                          - generic [ref=f6e465]:
                            - generic [ref=f6e466]: ₹27,999
                            - text: ₹27,999
                      - text: (21% off)
                    - generic [ref=f6e467]: Save extra with No Cost EMI
                  - generic [ref=f6e474]:
                    - generic [ref=f6e475]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e477]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e492] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e493]
                    - generic [aria-hidden] [ref=f6e494]: Add to cart
                  - group "colours available" [ref=f6e496]:
                    - list [ref=f6e497]:
                      - generic [ref=f6e498]:
                        - listitem:
                          - link "Silver":
                            - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1BS9S4Q/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-1
                            - generic [ref=f6e499] [cursor=pointer]
                      - generic [ref=f6e501]:
                        - listitem:
                          - link "Gray":
                            - /url: /Samsung-Smartchoice-Display-Storage-Speakers/dp/B0G1C5DM4T/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-1
                            - generic [ref=f6e502] [cursor=pointer]
          - listitem [ref=f6e506]:
            - generic [ref=f6e512]:
              - link [aria-hidden] [ref=f6e518] [cursor=pointer]:
                - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-2
              - generic [ref=f6e523]:
                - link [ref=f6e525] [cursor=pointer]:
                  - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-2
                  - heading "Samsung Galaxy Tab S10 Lite [Smartchoice], 10.9-inch (27.7 CM), LCD Display, 6GB RAM, 128GB ROM, Wi-Fi, Dual Speakers, S Pen, Gray, AI Enabled" [level=2] [ref=f6e526]
                - generic [ref=f6e527]:
                  - generic [ref=f6e528]:
                    - text: "4.6"
                    - button "4.6 out of 5 stars, rating details" [ref=f6e530] [cursor=pointer]:
                      - generic [ref=f6e532]: 4.6 out of 5 stars
                    - link "594 ratings" [ref=f6e534] [cursor=pointer]:
                      - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-2#customerReviews
                      - text: (594)
                  - generic [ref=f6e535]: 2K+ bought in past month
                - generic [ref=f6e538]:
                  - generic [ref=f6e539]:
                    - generic [ref=f6e541]:
                      - generic [ref=f6e542]: Price, product page
                      - 'link "₹30,999 M.R.P: ₹57,999 M.R.P: ₹57,999" [ref=f6e543] [cursor=pointer]':
                        - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=sr_1_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-2
                        - generic [ref=f6e544]:
                          - generic [ref=f6e545]: ₹30,999
                          - generic [aria-hidden] [ref=f6e546]: ₹30,999
                        - generic [ref=f6e547]: "M.R.P: ₹57,999"
                        - generic [ref=f6e548]:
                          - text: "M.R.P:"
                          - generic [ref=f6e549]:
                            - generic [ref=f6e550]: ₹57,999
                            - text: ₹57,999
                      - text: (47% off)
                    - generic [ref=f6e551]: Save extra with No Cost EMI
                  - generic [ref=f6e558]:
                    - generic [ref=f6e559]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e561]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e576] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e577]
                    - generic [aria-hidden] [ref=f6e578]: Add to cart
                  - group "colours available" [ref=f6e580]:
                    - list [ref=f6e581]:
                      - generic [ref=f6e582]:
                        - listitem:
                          - link "Gray":
                            - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-2
                            - generic [ref=f6e583] [cursor=pointer]
                      - generic [ref=f6e585]:
                        - listitem:
                          - link "Coralred":
                            - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWQD7Y2/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-2
                            - generic [ref=f6e586] [cursor=pointer]
                      - generic [ref=f6e588]:
                        - listitem:
                          - link "Silver":
                            - /url: /Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWSP5L3/ref=cs_sr_dp_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-2
                            - generic [ref=f6e589] [cursor=pointer]
          - listitem [ref=f6e593]:
            - generic [ref=f6e599]:
              - link [aria-hidden] [ref=f6e605] [cursor=pointer]:
                - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-3
              - generic [ref=f6e610]:
                - link [ref=f6e612] [cursor=pointer]:
                  - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-3
                  - 'heading "Lenovo Tab (Smartchoice) | 10.1 Inch Display| Wi-Fi Only| 4 GB RAM + 64 GB ROM (Expandable up to 1 TB)| Metal Body| Dual Speakers with Dolby Atmos| Android 14| Color: Polar Blue" [level=2] [ref=f6e613]'
                - generic [ref=f6e614]:
                  - generic [ref=f6e615]:
                    - text: "4.3"
                    - button "4.3 out of 5 stars, rating details" [ref=f6e617] [cursor=pointer]:
                      - generic [ref=f6e619]: 4.3 out of 5 stars
                    - link "679 ratings" [ref=f6e621] [cursor=pointer]:
                      - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-3#customerReviews
                      - text: (679)
                  - generic [ref=f6e622]: 2K+ bought in past month
                - generic [ref=f6e625]:
                  - generic [ref=f6e626]:
                    - generic [ref=f6e628]:
                      - generic [ref=f6e629]: Price, product page
                      - 'link "₹16,799 M.R.P: ₹18,000 M.R.P: ₹18,000" [ref=f6e630] [cursor=pointer]':
                        - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=sr_1_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-3
                        - generic [ref=f6e631]:
                          - generic [ref=f6e632]: ₹16,799
                          - generic [aria-hidden] [ref=f6e633]: ₹16,799
                        - generic [ref=f6e634]: "M.R.P: ₹18,000"
                        - generic [ref=f6e635]:
                          - text: "M.R.P:"
                          - generic [ref=f6e636]:
                            - generic [ref=f6e637]: ₹18,000
                            - text: ₹18,000
                      - text: (7% off)
                    - generic [ref=f6e638]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e645]:
                    - generic [ref=f6e646]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e648]: Or fastest delivery Today
                  - generic [ref=f6e663] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e664]
                    - generic [aria-hidden] [ref=f6e665]: Add to cart
                  - group "colours available" [ref=f6e667]:
                    - list [ref=f6e668]:
                      - generic [ref=f6e669]:
                        - listitem:
                          - link "Polar Blue":
                            - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0FDWFRC48/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-3
                            - generic [ref=f6e670] [cursor=pointer]
                      - generic [ref=f6e672]:
                        - listitem:
                          - link "Grey":
                            - /url: /Lenovo-Display-Expandable-Speakers-Android/dp/B0G7F4FJSC/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-3
                            - generic [ref=f6e673] [cursor=pointer]
          - generic [ref=f6e679]:
            - link "Sponsored ad from Lenovo Tablets. \"The Ultimate Entertainment Tablet.\" Shop Lenovo Tablets." [ref=f6e680] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJTyVRZHCLogsKiYZP-JHkYU8jpM6sezUdlOUzcixJ46pa7ueadOyyF-wROIXKBuW_AU7JBb8B2pTkHpW5-qecx-nFm1___3r5_36E53ngqF3eOiIo8GkucHt7sxJnl7gROmPMxKqUum-H83o8d7Oh35mXMpy0l8ckWMhOJLUYJbq3iNelNqi1BakNpxu-mi2rZvBvulZfv1F7UFM6DEryvrjQ8czDXfgWFOz17jaqL267WBKwipa4JJUUZGFjOA0z9Kc4Bmb1x-GJ-HHIm-neeMlnYEoCylNI7C2gLUQlFzzHsmx5ex26QywBTkhMYiKLCMRS4scnPPgdheIwiqmoAzTnJEKREXOSM7418jTnR42XNs2jcByHR9bjm05JratiYl7pj8K3HFTqm3A5z_-fPr67arXePpv5PqI5jMBQtiVFA5CUVQEid-yHG9vyxgbu279bQ_pRtm3gKyv0Okaib5CB6xyo6V-FyuUrNDBCuk3JGk8NxLzYjA8j_S0Z7GFqPFfNmufNxeMlXSv01kul-3_KXUoKypCO2WYkA4SFFORkQJkVeWB2IM8UPqcBHi5L_JIlfpdXnl3Y8AVmWs-wjoUBa4LOW4ysmw05WTB9nWgQ0GSYFcRBsFQdb2p74_htFXGuIpxmS3iSmOtBQ1xVOE01mArK3FI05xqCO4j5Ej2vvfmhgYTcSiu6cCWDP5aeXpGqkstCGcZYdc1zQqm3c22ReMShzFOquKs1AQIOYFTFZXnOFUQW6kWlrQVXn8wkOfF5ZEynAz_AqsT6Jw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_bkgd&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
            - generic [ref=f6e681]:
              - generic [ref=f6e683]:
                - link "Lenovo Tablets" [ref=f6e685] [cursor=pointer]:
                  - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJTyVRZHCLogsKiYZP-JHkYU8jpM6sezUdlOUzcixJ46pa7ueadOyyF-wROIXKBuW_AU7JBb8B2pTkHpW5-qecx-nFm1___3r5_36E53ngqF3eOiIo8GkucHt7sxJnl7gROmPMxKqUum-H83o8d7Oh35mXMpy0l8ckWMhOJLUYJbq3iNelNqi1BakNpxu-mi2rZvBvulZfv1F7UFM6DEryvrjQ8czDXfgWFOz17jaqL267WBKwipa4JJUUZGFjOA0z9Kc4Bmb1x-GJ-HHIm-neeMlnYEoCylNI7C2gLUQlFzzHsmx5ex26QywBTkhMYiKLCMRS4scnPPgdheIwiqmoAzTnJEKREXOSM7418jTnR42XNs2jcByHR9bjm05JratiYl7pj8K3HFTqm3A5z_-fPr67arXePpv5PqI5jMBQtiVFA5CUVQEid-yHG9vyxgbu279bQ_pRtm3gKyv0Okaib5CB6xyo6V-FyuUrNDBCuk3JGk8NxLzYjA8j_S0Z7GFqPFfNmufNxeMlXSv01kul-3_KXUoKypCO2WYkA4SFFORkQJkVeWB2IM8UPqcBHi5L_JIlfpdXnl3Y8AVmWs-wjoUBa4LOW4ysmw05WTB9nWgQ0GSYFcRBsFQdb2p74_htFXGuIpxmS3iSmOtBQ1xVOE01mArK3FI05xqCO4j5Ej2vvfmhgYTcSiu6cCWDP5aeXpGqkstCGcZYdc1zQqm3c22ReMShzFOquKs1AQIOYFTFZXnOFUQW6kWlrQVXn8wkOfF5ZEynAz_AqsT6Jw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_logo&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                  - img "Lenovo Tablets" [ref=f6e687]
                - generic [ref=f6e689]:
                  - link "The Ultimate Entertainment Tablet" [ref=f6e690] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJTyVRZHCLogsKiYZP-JHkYU8jpM6sezUdlOUzcixJ46pa7ueadOyyF-wROIXKBuW_AU7JBb8B2pTkHpW5-qecx-nFm1___3r5_36E53ngqF3eOiIo8GkucHt7sxJnl7gROmPMxKqUum-H83o8d7Oh35mXMpy0l8ckWMhOJLUYJbq3iNelNqi1BakNpxu-mi2rZvBvulZfv1F7UFM6DEryvrjQ8czDXfgWFOz17jaqL267WBKwipa4JJUUZGFjOA0z9Kc4Bmb1x-GJ-HHIm-neeMlnYEoCylNI7C2gLUQlFzzHsmx5ex26QywBTkhMYiKLCMRS4scnPPgdheIwiqmoAzTnJEKREXOSM7418jTnR42XNs2jcByHR9bjm05JratiYl7pj8K3HFTqm3A5z_-fPr67arXePpv5PqI5jMBQtiVFA5CUVQEid-yHG9vyxgbu279bQ_pRtm3gKyv0Okaib5CB6xyo6V-FyuUrNDBCuk3JGk8NxLzYjA8j_S0Z7GFqPFfNmufNxeMlXSv01kul-3_KXUoKypCO2WYkA4SFFORkQJkVeWB2IM8UPqcBHi5L_JIlfpdXnl3Y8AVmWs-wjoUBa4LOW4ysmw05WTB9nWgQ0GSYFcRBsFQdb2p74_htFXGuIpxmS3iSmOtBQ1xVOE01mArK3FI05xqCO4j5Ej2vvfmhgYTcSiu6cCWDP5aeXpGqkstCGcZYdc1zQqm3c22ReMShzFOquKs1AQIOYFTFZXnOFUQW6kWlrQVXn8wkOfF5ZEynAz_AqsT6Jw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_hl&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                  - generic [ref=f6e693]:
                    - button "Leave feedback on Sponsored ad" [ref=f6e697] [cursor=pointer]: Sponsored
                    - generic [ref=f6e699]: "|"
                    - generic [ref=f6e700]: Top 10 best-selling brand in tablets
                    - generic [ref=f6e701]: "|"
                    - link "Shop Lenovo Tablets" [ref=f6e703] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVVsBJTyVRZHCLogsKiYZP-JHkYU8jpM6sezUdlOUzcixJ46pa7ueadOyyF-wROIXKBuW_AU7JBb8B2pTkHpW5-qecx-nFm1___3r5_36E53ngqF3eOiIo8GkucHt7sxJnl7gROmPMxKqUum-H83o8d7Oh35mXMpy0l8ckWMhOJLUYJbq3iNelNqi1BakNpxu-mi2rZvBvulZfv1F7UFM6DEryvrjQ8czDXfgWFOz17jaqL267WBKwipa4JJUUZGFjOA0z9Kc4Bmb1x-GJ-HHIm-neeMlnYEoCylNI7C2gLUQlFzzHsmx5ex26QywBTkhMYiKLCMRS4scnPPgdheIwiqmoAzTnJEKREXOSM7418jTnR42XNs2jcByHR9bjm05JratiYl7pj8K3HFTqm3A5z_-fPr67arXePpv5PqI5jMBQtiVFA5CUVQEid-yHG9vyxgbu279bQ_pRtm3gKyv0Okaib5CB6xyo6V-FyuUrNDBCuk3JGk8NxLzYjA8j_S0Z7GFqPFfNmufNxeMlXSv01kul-3_KXUoKypCO2WYkA4SFFORkQJkVeWB2IM8UPqcBHi5L_JIlfpdXnl3Y8AVmWs-wjoUBa4LOW4ysmw05WTB9nWgQ0GSYFcRBsFQdb2p74_htFXGuIpxmS3iSmOtBQ1xVOE01mArK3FI05xqCO4j5Ej2vvfmhgYTcSiu6cCWDP5aeXpGqkstCGcZYdc1zQqm3c22ReMShzFOquKs1AQIOYFTFZXnOFUQW6kWlrQVXn8wkOfF5ZEynAz_AqsT6Jw&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-inline%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_cta&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                      - generic [ref=f6e706]:
                        - text: Shop Lenovo
                        - generic [ref=f6e707]: Tablets
              - group [ref=f6e711]:
                - group [ref=f6e715]:
                  - list [ref=f6e716]:
                    - listitem [ref=f6e717]:
                      - generic [ref=f6e719]:
                        - link [aria-hidden] [ref=f6e720] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdpzESWSnjtNU3YzGM-MHcW3XHjUti_wEgv-gbFjyF-yQWPAfSKQgcVZHOo97dar48OvPH98f1J5qouBN3dXKlmbj00ZFaB0HNI2vYdgbLRKK-nLunM38cjM4fjdKjBtFCUfRmm463lrue36suY9FSW5Lcrsjt_nze0vdP9RMb2K61rL2ovqQ0HLDsrz2ZGW7puGMbevcHNZvK9VXdwosKSpwBHNa4CxBjMI4TeKUQp8FtUfoAr3P0nac1l-WPsAJKssYg30E7I0gFxr3aQotu9UtfcAiekEJwFmSUMziLAVXIri7BTAqSAlyFKeMFgBnKaMpE1_rrmYPoeHM56bhWY69hJY9t2wTzq1TEw7N5cxzFg25WuGPvv36-PnL7bD-7G_l_onG8w7P8125J_C8JPU6snhg2e7gwFgYLaf2ZqhrRj6ygKLt9Ms9Qm2nn7DCwVvtf-z0cKef7HTtDwnrR0ZoXo-nV1iLhxaLJFX8VKl-qESM5eWA47bbbfvfSlyYc2jLEU7nJ7puy_OJ-zYnsCAwTyJSqKwZlQjiAsZE5ZuXMVEFpS_JgtIVe82yUAUggH5AJCpjGfBBRwSSIPigj3wMSED6CiE8RoQ0YxXlZRMVNFDHSpDdrHvT0-lvMbq-Xg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_bkgd&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                        - link [ref=f6e722] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdpzESWSnjtNU3YzGM-MHcW3XHjUti_wEgv-gbFjyF-yQWPAfSKQgcVZHOo97dar48OvPH98f1J5qouBN3dXKlmbj00ZFaB0HNI2vYdgbLRKK-nLunM38cjM4fjdKjBtFCUfRmm463lrue36suY9FSW5Lcrsjt_nze0vdP9RMb2K61rL2ovqQ0HLDsrz2ZGW7puGMbevcHNZvK9VXdwosKSpwBHNa4CxBjMI4TeKUQp8FtUfoAr3P0nac1l-WPsAJKssYg30E7I0gFxr3aQotu9UtfcAiekEJwFmSUMziLAVXIri7BTAqSAlyFKeMFgBnKaMpE1_rrmYPoeHM56bhWY69hJY9t2wTzq1TEw7N5cxzFg25WuGPvv36-PnL7bD-7G_l_onG8w7P8125J_C8JPU6snhg2e7gwFgYLaf2ZqhrRj6ygKLt9Ms9Qm2nn7DCwVvtf-z0cKef7HTtDwnrR0ZoXo-nV1iLhxaLJFX8VKl-qESM5eWA47bbbfvfSlyYc2jLEU7nJ7puy_OJ-zYnsCAwTyJSqKwZlQjiAsZE5ZuXMVEFpS_JgtIVe82yUAUggH5AJCpjGfBBRwSSIPigj3wMSED6CiE8RoQ0YxXlZRMVNFDHSpDdrHvT0-lvMbq-Xg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_img&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - img "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e725]
                        - generic [ref=f6e726]:
                          - link [aria-hidden] [ref=f6e727] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdpzESWSnjtNU3YzGM-MHcW3XHjUti_wEgv-gbFjyF-yQWPAfSKQgcVZHOo97dar48OvPH98f1J5qouBN3dXKlmbj00ZFaB0HNI2vYdgbLRKK-nLunM38cjM4fjdKjBtFCUfRmm463lrue36suY9FSW5Lcrsjt_nze0vdP9RMb2K61rL2ovqQ0HLDsrz2ZGW7puGMbevcHNZvK9VXdwosKSpwBHNa4CxBjMI4TeKUQp8FtUfoAr3P0nac1l-WPsAJKssYg30E7I0gFxr3aQotu9UtfcAiekEJwFmSUMziLAVXIri7BTAqSAlyFKeMFgBnKaMpE1_rrmYPoeHM56bhWY69hJY9t2wTzq1TEw7N5cxzFg25WuGPvv36-PnL7bD-7G_l_onG8w7P8125J_C8JPU6snhg2e7gwFgYLaf2ZqhrRj6ygKLt9Ms9Qm2nn7DCwVvtf-z0cKef7HTtDwnrR0ZoXo-nV1iLhxaLJFX8VKl-qESM5eWA47bbbfvfSlyYc2jLEU7nJ7puy_OJ-zYnsCAwTyJSqKwZlQjiAsZE5ZuXMVEFpS_JgtIVe82yUAUggH5AJCpjGfBBRwSSIPigj3wMSED6CiE8RoQ0YxXlZRMVNFDHSpDdrHvT0-lvMbq-Xg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_bkgd&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - link "Lenovo Idea Tab (Smartchoice) | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e729] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdpzESWSnjtNU3YzGM-MHcW3XHjUti_wEgv-gbFjyF-yQWPAfSKQgcVZHOo97dar48OvPH98f1J5qouBN3dXKlmbj00ZFaB0HNI2vYdgbLRKK-nLunM38cjM4fjdKjBtFCUfRmm463lrue36suY9FSW5Lcrsjt_nze0vdP9RMb2K61rL2ovqQ0HLDsrz2ZGW7puGMbevcHNZvK9VXdwosKSpwBHNa4CxBjMI4TeKUQp8FtUfoAr3P0nac1l-WPsAJKssYg30E7I0gFxr3aQotu9UtfcAiekEJwFmSUMziLAVXIri7BTAqSAlyFKeMFgBnKaMpE1_rrmYPoeHM56bhWY69hJY9t2wTzq1TEw7N5cxzFg25WuGPvv36-PnL7bD-7G_l_onG8w7P8125J_C8JPU6snhg2e7gwFgYLaf2ZqhrRj6ygKLt9Ms9Qm2nn7DCwVvtf-z0cKef7HTtDwnrR0ZoXo-nV1iLhxaLJFX8VKl-qESM5eWA47bbbfvfSlyYc2jLEU7nJ7puy_OJ-zYnsCAwTyJSqKwZlQjiAsZE5ZuXMVEFpS_JgtIVe82yUAUggH5AJCpjGfBBRwSSIPigj3wMSED6CiE8RoQ0YxXlZRMVNFDHSpDdrHvT0-lvMbq-Xg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_title&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - link "Rated 4.2 out of 5 stars by 35 reviews. Go to review section." [ref=f6e732] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdpzESWSnjtNU3YzGM-MHcW3XHjUti_wEgv-gbFjyF-yQWPAfSKQgcVZHOo97dar48OvPH98f1J5qouBN3dXKlmbj00ZFaB0HNI2vYdgbLRKK-nLunM38cjM4fjdKjBtFCUfRmm463lrue36suY9FSW5Lcrsjt_nze0vdP9RMb2K61rL2ovqQ0HLDsrz2ZGW7puGMbevcHNZvK9VXdwosKSpwBHNa4CxBjMI4TeKUQp8FtUfoAr3P0nac1l-WPsAJKssYg30E7I0gFxr3aQotu9UtfcAiekEJwFmSUMziLAVXIri7BTAqSAlyFKeMFgBnKaMpE1_rrmYPoeHM56bhWY69hJY9t2wTzq1TEw7N5cxzFg25WuGPvv36-PnL7bD-7G_l_onG8w7P8125J_C8JPU6snhg2e7gwFgYLaf2ZqhrRj6ygKLt9Ms9Qm2nn7DCwVvtf-z0cKef7HTtDwnrR0ZoXo-nV1iLhxaLJFX8VKl-qESM5eWA47bbbfvfSlyYc2jLEU7nJ7puy_OJ-zYnsCAwTyJSqKwZlQjiAsZE5ZuXMVEFpS_JgtIVe82yUAUggH5AJCpjGfBBRwSSIPigj3wMSED6CiE8RoQ0YxXlZRMVNFDHSpDdrHvT0-lvMbq-Xg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_rating&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8#customerReviews
                            - generic [ref=f6e733]:
                              - generic [ref=f6e734]: "4.2"
                              - generic [ref=f6e735]: 4.2 out of 5 stars.
                              - generic [ref=f6e737]: "35"
                          - link "₹25,999.00" [ref=f6e739] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDTxI46dBFnIdpzESWSnjtNU3YzGM-MHcW3XHjUti_wEgv-gbFjyF-yQWPAfSKQgcVZHOo97dar48OvPH98f1J5qouBN3dXKlmbj00ZFaB0HNI2vYdgbLRKK-nLunM38cjM4fjdKjBtFCUfRmm463lrue36suY9FSW5Lcrsjt_nze0vdP9RMb2K61rL2ovqQ0HLDsrz2ZGW7puGMbevcHNZvK9VXdwosKSpwBHNa4CxBjMI4TeKUQp8FtUfoAr3P0nac1l-WPsAJKssYg30E7I0gFxr3aQotu9UtfcAiekEJwFmSUMziLAVXIri7BTAqSAlyFKeMFgBnKaMpE1_rrmYPoeHM56bhWY69hJY9t2wTzq1TEw7N5cxzFg25WuGPvv36-PnL7bD-7G_l_onG8w7P8125J_C8JPU6snhg2e7gwFgYLaf2ZqhrRj6ygKLt9Ms9Qm2nn7DCwVvtf-z0cKef7HTtDwnrR0ZoXo-nV1iLhxaLJFX8VKl-qESM5eWA47bbbfvfSlyYc2jLEU7nJ7puy_OJ-zYnsCAwTyJSqKwZlQjiAsZE5ZuXMVEFpS_JgtIVe82yUAUggH5AJCpjGfBBRwSSIPigj3wMSED6CiE8RoQ0YxXlZRMVNFDHSpDdrHvT0-lvMbq-Xg&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBN6LHR%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-1-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_0_price&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                            - generic [ref=f6e741]:
                              - generic [ref=f6e742]: ₹25,999.00
                              - generic [aria-hidden] [ref=f6e743]:
                                - text: ₹
                                - generic [ref=f6e744]:
                                  - text: 25,999
                                  - generic [ref=f6e745]: .
                                - text: "00"
                          - generic [ref=f6e746]: "M.R.P: ₹45,000.00"
                    - listitem [ref=f6e749]:
                      - generic [ref=f6e751]:
                        - link [aria-hidden] [ref=f6e752] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2HGQhv5I6iew0cZKqm9F4Zvwgru3ao6ZlkZ9A8B-UDUv-gh0SC_4DiRQkzupI53GvThUffv354_uD2lNN4L3xfLl0xMlo1ajwreOApvE1DPvDWUKRIuXu2cQvN4Pjd8PEuJHlcBit6abrrSXF82Nt_lgQpbYotbtSmzu_t9D9Q83yTqy5vai9qD4ktNywLK89WTpzy3BHjn1umfXbSvXVnQJLigocwZwWOEsQozBOkzil0GdB7RG6QO-ztB2n9ZelD3CCyjLGYB8BeyPI-cZ9mkLbafVKH7CIXlACcJYkFLM4S8GVAO5uAYwKUoIcxSmjBcBZymjKhNf6XHNMaLjTqWV4tussoO1MbceCU3tlQdNaTDx31pCqFe7o26-Pn7_cmvVnfyv3TzSedzmO60l9nuNEsd-VhAPbmQ8OjJnRcmtvTF0z8qENZG2nX-4Rajv9lBUu3mr_Y6eHO_10p2t_SFg_MkLrejS-wlps2iwSVeFTpfqhEjGWl4NOZ7vdtv-t1AnzDtp2SEfnTnTdW4lj8W1OYEFgnkSkUFkzKhHEBYyJyjUvY6LysiJKvNwT-s2yUHkgACUgIpWwBLigKwCR532gIB8DEhBFJoTDiJBmrKK8bKKCBupIDrKbdX-8Gv8GLFi-UQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_bkgd&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                        - link [ref=f6e754] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2HGQhv5I6iew0cZKqm9F4Zvwgru3ao6ZlkZ9A8B-UDUv-gh0SC_4DiRQkzupI53GvThUffv354_uD2lNN4L3xfLl0xMlo1ajwreOApvE1DPvDWUKRIuXu2cQvN4Pjd8PEuJHlcBit6abrrSXF82Nt_lgQpbYotbtSmzu_t9D9Q83yTqy5vai9qD4ktNywLK89WTpzy3BHjn1umfXbSvXVnQJLigocwZwWOEsQozBOkzil0GdB7RG6QO-ztB2n9ZelD3CCyjLGYB8BeyPI-cZ9mkLbafVKH7CIXlACcJYkFLM4S8GVAO5uAYwKUoIcxSmjBcBZymjKhNf6XHNMaLjTqWV4tussoO1MbceCU3tlQdNaTDx31pCqFe7o26-Pn7_cmvVnfyv3TzSedzmO60l9nuNEsd-VhAPbmQ8OjJnRcmtvTF0z8qENZG2nX-4Rajv9lBUu3mr_Y6eHO_10p2t_SFg_MkLrejS-wlps2iwSVeFTpfqhEjGWl4NOZ7vdtv-t1AnzDtp2SEfnTnTdW4lj8W1OYEFgnkSkUFkzKhHEBYyJyjUvY6LysiJKvNwT-s2yUHkgACUgIpWwBLigKwCR532gIB8DEhBFJoTDiJBmrKK8bKKCBupIDrKbdX-8Gv8GLFi-UQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_img&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - img "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e757]
                        - generic [ref=f6e758]:
                          - link [aria-hidden] [ref=f6e759] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2HGQhv5I6iew0cZKqm9F4Zvwgru3ao6ZlkZ9A8B-UDUv-gh0SC_4DiRQkzupI53GvThUffv354_uD2lNN4L3xfLl0xMlo1ajwreOApvE1DPvDWUKRIuXu2cQvN4Pjd8PEuJHlcBit6abrrSXF82Nt_lgQpbYotbtSmzu_t9D9Q83yTqy5vai9qD4ktNywLK89WTpzy3BHjn1umfXbSvXVnQJLigocwZwWOEsQozBOkzil0GdB7RG6QO-ztB2n9ZelD3CCyjLGYB8BeyPI-cZ9mkLbafVKH7CIXlACcJYkFLM4S8GVAO5uAYwKUoIcxSmjBcBZymjKhNf6XHNMaLjTqWV4tussoO1MbceCU3tlQdNaTDx31pCqFe7o26-Pn7_cmvVnfyv3TzSedzmO60l9nuNEsd-VhAPbmQ8OjJnRcmtvTF0z8qENZG2nX-4Rajv9lBUu3mr_Y6eHO_10p2t_SFg_MkLrejS-wlps2iwSVeFTpfqhEjGWl4NOZ7vdtv-t1AnzDtp2SEfnTnTdW4lj8W1OYEFgnkSkUFkzKhHEBYyJyjUvY6LysiJKvNwT-s2yUHkgACUgIpWwBLigKwCR532gIB8DEhBFJoTDiJBmrKK8bKKCBupIDrKbdX-8Gv8GLFi-UQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_bkgd&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - link "Lenovo Idea Tab (Smartchoice) with Tab Pen | WiFi Only |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e761] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2HGQhv5I6iew0cZKqm9F4Zvwgru3ao6ZlkZ9A8B-UDUv-gh0SC_4DiRQkzupI53GvThUffv354_uD2lNN4L3xfLl0xMlo1ajwreOApvE1DPvDWUKRIuXu2cQvN4Pjd8PEuJHlcBit6abrrSXF82Nt_lgQpbYotbtSmzu_t9D9Q83yTqy5vai9qD4ktNywLK89WTpzy3BHjn1umfXbSvXVnQJLigocwZwWOEsQozBOkzil0GdB7RG6QO-ztB2n9ZelD3CCyjLGYB8BeyPI-cZ9mkLbafVKH7CIXlACcJYkFLM4S8GVAO5uAYwKUoIcxSmjBcBZymjKhNf6XHNMaLjTqWV4tussoO1MbceCU3tlQdNaTDx31pCqFe7o26-Pn7_cmvVnfyv3TzSedzmO60l9nuNEsd-VhAPbmQ8OjJnRcmtvTF0z8qENZG2nX-4Rajv9lBUu3mr_Y6eHO_10p2t_SFg_MkLrejS-wlps2iwSVeFTpfqhEjGWl4NOZ7vdtv-t1AnzDtp2SEfnTnTdW4lj8W1OYEFgnkSkUFkzKhHEBYyJyjUvY6LysiJKvNwT-s2yUHkgACUgIpWwBLigKwCR532gIB8DEhBFJoTDiJBmrKK8bKKCBupIDrKbdX-8Gv8GLFi-UQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_title&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - link "Rated 4 out of 5 stars by 94 reviews. Go to review section." [ref=f6e764] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2HGQhv5I6iew0cZKqm9F4Zvwgru3ao6ZlkZ9A8B-UDUv-gh0SC_4DiRQkzupI53GvThUffv354_uD2lNN4L3xfLl0xMlo1ajwreOApvE1DPvDWUKRIuXu2cQvN4Pjd8PEuJHlcBit6abrrSXF82Nt_lgQpbYotbtSmzu_t9D9Q83yTqy5vai9qD4ktNywLK89WTpzy3BHjn1umfXbSvXVnQJLigocwZwWOEsQozBOkzil0GdB7RG6QO-ztB2n9ZelD3CCyjLGYB8BeyPI-cZ9mkLbafVKH7CIXlACcJYkFLM4S8GVAO5uAYwKUoIcxSmjBcBZymjKhNf6XHNMaLjTqWV4tussoO1MbceCU3tlQdNaTDx31pCqFe7o26-Pn7_cmvVnfyv3TzSedzmO60l9nuNEsd-VhAPbmQ8OjJnRcmtvTF0z8qENZG2nX-4Rajv9lBUu3mr_Y6eHO_10p2t_SFg_MkLrejS-wlps2iwSVeFTpfqhEjGWl4NOZ7vdtv-t1AnzDtp2SEfnTnTdW4lj8W1OYEFgnkSkUFkzKhHEBYyJyjUvY6LysiJKvNwT-s2yUHkgACUgIpWwBLigKwCR532gIB8DEhBFJoTDiJBmrKK8bKKCBupIDrKbdX-8Gv8GLFi-UQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_rating&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8#customerReviews
                            - generic [ref=f6e765]:
                              - generic [ref=f6e766]: "4"
                              - generic [ref=f6e767]: 4 out of 5 stars.
                              - generic [ref=f6e769]: "94"
                          - link "₹27,999.00" [ref=f6e771] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJ7Th2HGQhv5I6iew0cZKqm9F4Zvwgru3ao6ZlkZ9A8B-UDUv-gh0SC_4DiRQkzupI53GvThUffv354_uD2lNN4L3xfLl0xMlo1ajwreOApvE1DPvDWUKRIuXu2cQvN4Pjd8PEuJHlcBit6abrrSXF82Nt_lgQpbYotbtSmzu_t9D9Q83yTqy5vai9qD4ktNywLK89WTpzy3BHjn1umfXbSvXVnQJLigocwZwWOEsQozBOkzil0GdB7RG6QO-ztB2n9ZelD3CCyjLGYB8BeyPI-cZ9mkLbafVKH7CIXlACcJYkFLM4S8GVAO5uAYwKUoIcxSmjBcBZymjKhNf6XHNMaLjTqWV4tussoO1MbceCU3tlQdNaTDx31pCqFe7o26-Pn7_cmvVnfyv3TzSedzmO60l9nuNEsd-VhAPbmQ8OjJnRcmtvTF0z8qENZG2nX-4Rajv9lBUu3mr_Y6eHO_10p2t_SFg_MkLrejS-wlps2iwSVeFTpfqhEjGWl4NOZ7vdtv-t1AnzDtp2SEfnTnTdW4lj8W1OYEFgnkSkUFkzKhHEBYyJyjUvY6LysiJKvNwT-s2yUHkgACUgIpWwBLigKwCR532gIB8DEhBFJoTDiJBmrKK8bKKCBupIDrKbdX-8Gv8GLFi-UQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBTV4J4%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-2-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_1_price&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                            - generic [ref=f6e773]:
                              - generic [ref=f6e774]: ₹27,999.00
                              - generic [aria-hidden] [ref=f6e775]:
                                - text: ₹
                                - generic [ref=f6e776]:
                                  - text: 27,999
                                  - generic [ref=f6e777]: .
                                - text: "00"
                          - generic [ref=f6e778]: "M.R.P: ₹48,000.00"
                    - listitem [ref=f6e781]:
                      - generic [ref=f6e783]:
                        - link [aria-hidden] [ref=f6e784] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJX7HjIAv5ldRJZKd5Vt2MxjPjB3Ft1x41LYv8BIL_oGxY8hfskFjwH0ikIHFWRzqPe3Wq-PDrzx_fH9Se6gK_GM2WS1caD1eNCt86DmgaX8OwN5gmFKly7p2N_XLTP343SMwbRQkH0ZpuxMVaVhd-rM8eC5LcluS2KLe583tzwz_U7cWJPXPmtRfVh4SWG5bltSdLd2ab3tB1zm2rflupvrpTYElRgSOY0wJnCWIUxmkSpxT6LKg9QhfofZa247T-svQBTlBZxhjsI2BvBDnfuE9T6LitbukDFtELSgDOkoRiFmcpuBLA3S2AUUFKkKM4ZbQAOEsZTZnw2pjprgVNbzKxzYXjuXPouBPHteHEWdnQsufjhTdtyNUKd_Tt18fPX26t-rO_lfsnGs9FjuO6co_nOEnqibJw4Liz_oE5NVte7Y1l6GY-cICi74zLPUJ9Z5yywsNb_X_sjHBnnO4M_Q8J60dmaF8PR1dYjy2HRZImfKpUP1QixvKy3-lst9v2v5U6Yd5B2w7pGNyJYQwnsim8zQksCMyTiBQaa0YlgriAMdG45mVMNF5RJZlXukKvWRYaD0SgBkSiMpYBF4gCkHjeByryMSABURVCOIwIacYayssmKmigDZUgu1n3RqvRbx-XvjQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_bkgd&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                        - link [ref=f6e786] [cursor=pointer]:
                          - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJX7HjIAv5ldRJZKd5Vt2MxjPjB3Ft1x41LYv8BIL_oGxY8hfskFjwH0ikIHFWRzqPe3Wq-PDrzx_fH9Se6gK_GM2WS1caD1eNCt86DmgaX8OwN5gmFKly7p2N_XLTP343SMwbRQkH0ZpuxMVaVhd-rM8eC5LcluS2KLe583tzwz_U7cWJPXPmtRfVh4SWG5bltSdLd2ab3tB1zm2rflupvrpTYElRgSOY0wJnCWIUxmkSpxT6LKg9QhfofZa247T-svQBTlBZxhjsI2BvBDnfuE9T6LitbukDFtELSgDOkoRiFmcpuBLA3S2AUUFKkKM4ZbQAOEsZTZnw2pjprgVNbzKxzYXjuXPouBPHteHEWdnQsufjhTdtyNUKd_Tt18fPX26t-rO_lfsnGs9FjuO6co_nOEnqibJw4Liz_oE5NVte7Y1l6GY-cICi74zLPUJ9Z5yywsNb_X_sjHBnnO4M_Q8J60dmaF8PR1dYjy2HRZImfKpUP1QixvKy3-lst9v2v5U6Yd5B2w7pGNyJYQwnsim8zQksCMyTiBQaa0YlgriAMdG45mVMNF5RJZlXukKvWRYaD0SgBkSiMpYBF4gCkHjeByryMSABURVCOIwIacYayssmKmigDZUgu1n3RqvRbx-XvjQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_img&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - img "Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e789]
                        - generic [ref=f6e790]:
                          - link [aria-hidden] [ref=f6e791] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJX7HjIAv5ldRJZKd5Vt2MxjPjB3Ft1x41LYv8BIL_oGxY8hfskFjwH0ikIHFWRzqPe3Wq-PDrzx_fH9Se6gK_GM2WS1caD1eNCt86DmgaX8OwN5gmFKly7p2N_XLTP343SMwbRQkH0ZpuxMVaVhd-rM8eC5LcluS2KLe583tzwz_U7cWJPXPmtRfVh4SWG5bltSdLd2ab3tB1zm2rflupvrpTYElRgSOY0wJnCWIUxmkSpxT6LKg9QhfofZa247T-svQBTlBZxhjsI2BvBDnfuE9T6LitbukDFtELSgDOkoRiFmcpuBLA3S2AUUFKkKM4ZbQAOEsZTZnw2pjprgVNbzKxzYXjuXPouBPHteHEWdnQsufjhTdtyNUKd_Tt18fPX26t-rO_lfsnGs9FjuO6co_nOEnqibJw4Liz_oE5NVte7Y1l6GY-cICi74zLPUJ9Z5yywsNb_X_sjHBnnO4M_Q8J60dmaF8PR1dYjy2HRZImfKpUP1QixvKy3-lst9v2v5U6Yd5B2w7pGNyJYQwnsim8zQksCMyTiBQaa0YlgriAMdG45mVMNF5RJZlXukKvWRYaD0SgBkSiMpYBF4gCkHjeByryMSABURVCOIwIacYayssmKmigDZUgu1n3RqvRbx-XvjQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_bkgd&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - link "Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [ref=f6e793] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJX7HjIAv5ldRJZKd5Vt2MxjPjB3Ft1x41LYv8BIL_oGxY8hfskFjwH0ikIHFWRzqPe3Wq-PDrzx_fH9Se6gK_GM2WS1caD1eNCt86DmgaX8OwN5gmFKly7p2N_XLTP343SMwbRQkH0ZpuxMVaVhd-rM8eC5LcluS2KLe583tzwz_U7cWJPXPmtRfVh4SWG5bltSdLd2ab3tB1zm2rflupvrpTYElRgSOY0wJnCWIUxmkSpxT6LKg9QhfofZa247T-svQBTlBZxhjsI2BvBDnfuE9T6LitbukDFtELSgDOkoRiFmcpuBLA3S2AUUFKkKM4ZbQAOEsZTZnw2pjprgVNbzKxzYXjuXPouBPHteHEWdnQsufjhTdtyNUKd_Tt18fPX26t-rO_lfsnGs9FjuO6co_nOEnqibJw4Liz_oE5NVte7Y1l6GY-cICi74zLPUJ9Z5yywsNb_X_sjHBnnO4M_Q8J60dmaF8PR1dYjy2HRZImfKpUP1QixvKy3-lst9v2v5U6Yd5B2w7pGNyJYQwnsim8zQksCMyTiBQaa0YlgriAMdG45mVMNF5RJZlXukKvWRYaD0SgBkSiMpYBF4gCkHjeByryMSABURVCOIwIacYayssmKmigDZUgu1n3RqvRbx-XvjQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_title&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                          - link "Rated 3.8 out of 5 stars by 73 reviews. Go to review section." [ref=f6e796] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJX7HjIAv5ldRJZKd5Vt2MxjPjB3Ft1x41LYv8BIL_oGxY8hfskFjwH0ikIHFWRzqPe3Wq-PDrzx_fH9Se6gK_GM2WS1caD1eNCt86DmgaX8OwN5gmFKly7p2N_XLTP343SMwbRQkH0ZpuxMVaVhd-rM8eC5LcluS2KLe583tzwz_U7cWJPXPmtRfVh4SWG5bltSdLd2ab3tB1zm2rflupvrpTYElRgSOY0wJnCWIUxmkSpxT6LKg9QhfofZa247T-svQBTlBZxhjsI2BvBDnfuE9T6LitbukDFtELSgDOkoRiFmcpuBLA3S2AUUFKkKM4ZbQAOEsZTZnw2pjprgVNbzKxzYXjuXPouBPHteHEWdnQsufjhTdtyNUKd_Tt18fPX26t-rO_lfsnGs9FjuO6co_nOEnqibJw4Liz_oE5NVte7Y1l6GY-cICi74zLPUJ9Z5yywsNb_X_sjHBnnO4M_Q8J60dmaF8PR1dYjy2HRZImfKpUP1QixvKy3-lst9v2v5U6Yd5B2w7pGNyJYQwnsim8zQksCMyTiBQaa0YlgriAMdG45mVMNF5RJZlXukKvWRYaD0SgBkSiMpYBF4gCkHjeByryMSABURVCOIwIacYayssmKmigDZUgu1n3RqvRbx-XvjQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_rating&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8#customerReviews
                            - generic [ref=f6e797]:
                              - generic [ref=f6e798]: "3.8"
                              - generic [ref=f6e799]: 3.8 out of 5 stars.
                              - generic [ref=f6e801]: "73"
                          - link "₹29,999.00" [ref=f6e803] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFVUMtu00AUVaiAEl5VFkUKuyCyiDSJX7HjIAv5ldRJZKd5Vt2MxjPjB3Ft1x41LYv8BIL_oGxY8hfskFjwH0ikIHFWRzqPe3Wq-PDrzx_fH9Se6gK_GM2WS1caD1eNCt86DmgaX8OwN5gmFKly7p2N_XLTP343SMwbRQkH0ZpuxMVaVhd-rM8eC5LcluS2KLe583tzwz_U7cWJPXPmtRfVh4SWG5bltSdLd2ab3tB1zm2rflupvrpTYElRgSOY0wJnCWIUxmkSpxT6LKg9QhfofZa247T-svQBTlBZxhjsI2BvBDnfuE9T6LitbukDFtELSgDOkoRiFmcpuBLA3S2AUUFKkKM4ZbQAOEsZTZnw2pjprgVNbzKxzYXjuXPouBPHteHEWdnQsufjhTdtyNUKd_Tt18fPX26t-rO_lfsnGs9FjuO6co_nOEnqibJw4Liz_oE5NVte7Y1l6GY-cICi74zLPUJ9Z5yywsNb_X_sjHBnnO4M_Q8J60dmaF8PR1dYjy2HRZImfKpUP1QixvKy3-lst9v2v5U6Yd5B2w7pGNyJYQwnsim8zQksCMyTiBQaa0YlgriAMdG45mVMNF5RJZlXukKvWRYaD0SgBkSiMpYBF4gCkHjeByryMSABURVCOIwIacYayssmKmigDZUgu1n3RqvRbx-XvjQ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fgp%2Faw%2Fd%2FB0HBBGL6C2%3Fpd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26qid%3D1794617528%26sr%3D1-3-9fd4e6c6-0f32-411b-9abc-dfd97dd0cadd%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx__sbtcd2_asin_2_price&pd_rd_w=UmzcK&content-id=amzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d%3Aamzn1.sym.1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_p=1183c3aa-8812-4b69-b5a0-47d783e4595d&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=4VThg&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
                            - generic [ref=f6e805]:
                              - generic [ref=f6e806]: ₹29,999.00
                              - generic [aria-hidden] [ref=f6e807]:
                                - text: ₹
                                - generic [ref=f6e808]:
                                  - text: 29,999
                                  - generic [ref=f6e809]: .
                                - text: "00"
                          - generic [ref=f6e810]: "M.R.P: ₹53,000.00"
          - generic [ref=f6e814]:
            - heading "More results" [level=2] [ref=f6e818]
            - generic:
              - list
          - listitem [ref=f6e819]:
            - generic [ref=f6e825]:
              - link [aria-hidden] [ref=f6e831] [cursor=pointer]:
                - /url: /OnePlus-Biggest-Battery-Brightness-Playback/dp/B0FHWR3TBX/ref=sr_1_4?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-4
              - generic [ref=f6e836]:
                - link [ref=f6e838] [cursor=pointer]:
                  - /url: /OnePlus-Biggest-Battery-Brightness-Playback/dp/B0FHWR3TBX/ref=sr_1_4?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-4
                  - heading "OnePlus,Pad Lite, 11-inch (27.94 CM), LCD, 8GB RAM, 128GB ROM, WiFi + LTE, Quad Speakers, 9340mAh Battery, Aero Blue, Not AI Enabled" [level=2] [ref=f6e839]
                - generic [ref=f6e840]:
                  - generic [ref=f6e841]:
                    - text: "4.5"
                    - button "4.5 out of 5 stars, rating details" [ref=f6e843] [cursor=pointer]:
                      - generic [ref=f6e845]: 4.5 out of 5 stars
                    - link "981 ratings" [ref=f6e847] [cursor=pointer]:
                      - /url: /OnePlus-Biggest-Battery-Brightness-Playback/dp/B0FHWR3TBX/ref=sr_1_4?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-4#customerReviews
                      - text: (981)
                  - generic [ref=f6e848]: 1K+ bought in past month
                - generic [ref=f6e851]:
                  - generic [ref=f6e852]:
                    - generic [ref=f6e854]:
                      - generic [ref=f6e855]: Price, product page
                      - link "₹24,999" [ref=f6e856] [cursor=pointer]:
                        - /url: /OnePlus-Biggest-Battery-Brightness-Playback/dp/B0FHWR3TBX/ref=sr_1_4?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-4
                        - generic [ref=f6e857]:
                          - generic [ref=f6e858]: ₹24,999
                          - generic [aria-hidden] [ref=f6e859]: ₹24,999
                    - generic [ref=f6e860]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e867]:
                    - generic [ref=f6e868]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e870]: Or fastest delivery Today
                  - generic [ref=f6e885] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e886]
                    - generic [aria-hidden] [ref=f6e887]: Add to cart
          - listitem [ref=f6e890]:
            - generic [ref=f6e896]:
              - generic [ref=f6e898]:
                - group "Best sellerin Tablets" [ref=f6e904]:
                  - generic "Best seller" [ref=f6e906]
                - link [aria-hidden] [ref=f6e910] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-5
              - generic [ref=f6e915]:
                - link [ref=f6e917] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-5
                  - heading "Lenovo Idea Tab (Smartchoice) with Folio Keyboard + Tab Pen | Wi-Fi + 5G |11\" Display, 2.5K Resolution, 90Hz Refresh|8GB RAM, 256GB ROM| MediaTek Dimensity 6300| 7040mAh|4 Speakers| USB-C| Luna Grey" [level=2] [ref=f6e918]
                - generic [ref=f6e919]:
                  - generic [ref=f6e920]:
                    - text: "4.3"
                    - button "4.3 out of 5 stars, rating details" [ref=f6e922] [cursor=pointer]:
                      - generic [ref=f6e924]: 4.3 out of 5 stars
                    - link "123 ratings" [ref=f6e926] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-5#customerReviews
                      - text: (123)
                  - generic [ref=f6e927]: 2K+ bought in past month
                - generic [ref=f6e930]:
                  - generic [ref=f6e931]:
                    - generic [ref=f6e933]:
                      - generic [ref=f6e934]: Price, product page
                      - 'link "₹34,990 M.R.P: ₹52,000 M.R.P: ₹52,000" [ref=f6e935] [cursor=pointer]':
                        - /url: /Lenovo-Smartchoice-Keyboard-Resolution-Dimensity/dp/B0H2FD3L97/ref=sr_1_5?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-5
                        - generic [ref=f6e936]:
                          - generic [ref=f6e937]: ₹34,990
                          - generic [aria-hidden] [ref=f6e938]: ₹34,990
                        - generic [ref=f6e939]: "M.R.P: ₹52,000"
                        - generic [ref=f6e940]:
                          - text: "M.R.P:"
                          - generic [ref=f6e941]:
                            - generic [ref=f6e942]: ₹52,000
                            - text: ₹52,000
                      - text: (33% off)
                    - generic [ref=f6e943]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e950]:
                    - generic [ref=f6e951]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e953]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e968] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e969]
                    - generic [aria-hidden] [ref=f6e970]: Add to cart
          - listitem [ref=f6e973]:
            - generic [ref=f6e979]:
              - link [aria-hidden] [ref=f6e985] [cursor=pointer]:
                - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_6?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-6
              - generic [ref=f6e990]:
                - link [ref=f6e992] [cursor=pointer]:
                  - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_6?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-6
                  - heading "DOMO Slate SL39 10.1-Inch 4G Tablet PC, 4GB RAM + 32GB inbuilt Storage, Dual SIM Slot,1TB Expandable, Octa Core CPU GPS, Bluetooth (Grey)" [level=2] [ref=f6e993]
                - generic [ref=f6e994]:
                  - generic [ref=f6e995]:
                    - text: "3.8"
                    - button "3.8 out of 5 stars, rating details" [ref=f6e997] [cursor=pointer]:
                      - generic [ref=f6e999]: 3.8 out of 5 stars
                    - link "4 ratings" [ref=f6e1001] [cursor=pointer]:
                      - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_6?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-6#customerReviews
                      - text: (4)
                  - generic [ref=f6e1002]: 200+ bought in past month
                - generic [ref=f6e1005]:
                  - generic [ref=f6e1006]:
                    - link "Limited time deal" [ref=f6e1008] [cursor=pointer]:
                      - /url: /deals
                    - generic [ref=f6e1014]:
                      - generic [ref=f6e1015]: Price, product page
                      - 'link "₹7,549 M.R.P: ₹24,990 M.R.P: ₹24,990" [ref=f6e1016] [cursor=pointer]':
                        - /url: /DOMO-SL39-10-1-Inch-Expandable-Bluetooth/dp/B0HKRP51KP/ref=sr_1_6?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-6
                        - generic [ref=f6e1017]:
                          - generic [ref=f6e1018]: ₹7,549
                          - generic [aria-hidden] [ref=f6e1019]: ₹7,549
                        - generic [ref=f6e1020]: "M.R.P: ₹24,990"
                        - generic [ref=f6e1021]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1022]:
                            - generic [ref=f6e1023]: ₹24,990
                            - text: ₹24,990
                      - text: (70% off)
                    - generic [ref=f6e1026]:
                      - generic [ref=f6e1027]: You pay ₹7,398.02
                      - text: with coupon
                  - generic [ref=f6e1030]:
                    - generic [ref=f6e1031]: FREE delivery Tue, 17 Nov
                    - generic [ref=f6e1033]: Or fastest delivery Tomorrow, 15 Nov
                  - generic [ref=f6e1048] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1049]
                    - generic [aria-hidden] [ref=f6e1050]: Add to cart
          - listitem [ref=f6e1053]:
            - generic [ref=f6e1059]:
              - generic [ref=f6e1061]:
                - group "Best sellerin Tablets" [ref=f6e1067]:
                  - generic "Best seller" [ref=f6e1069]
                - link [aria-hidden] [ref=f6e1073] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_7?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-7
              - generic [ref=f6e1078]:
                - link [ref=f6e1080] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_7?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-7
                  - heading "Lenovo Idea Tab Smartchoice |11-inch 2.5K Clear Display, 90Hz Refresh Rate, 8GB RAM, 256GB ROM| MediaTek Dimensity 6300| 7040mAh Battery|4 Speakers| USB-C |Wi-Fi |AI-Enabled, Dolby Atmos, Luna Grey" [level=2] [ref=f6e1081]
                - generic [ref=f6e1082]:
                  - generic [ref=f6e1083]:
                    - text: "4.4"
                    - button "4.4 out of 5 stars, rating details" [ref=f6e1085] [cursor=pointer]:
                      - generic [ref=f6e1087]: 4.4 out of 5 stars
                    - link "433 ratings" [ref=f6e1089] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_7?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-7#customerReviews
                      - text: (433)
                  - generic [ref=f6e1090]: 400+ bought in past month
                - generic [ref=f6e1093]:
                  - generic [ref=f6e1094]:
                    - generic [ref=f6e1096]:
                      - generic [ref=f6e1097]: Price, product page
                      - 'link "₹29,999 M.R.P: ₹35,000 M.R.P: ₹35,000" [ref=f6e1098] [cursor=pointer]':
                        - /url: /Lenovo-Smartchoice-Resolution-MediaTek-Dimensity/dp/B0FJG3CT42/ref=sr_1_7?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-7
                        - generic [ref=f6e1099]:
                          - generic [ref=f6e1100]: ₹29,999
                          - generic [aria-hidden] [ref=f6e1101]: ₹29,999
                        - generic [ref=f6e1102]: "M.R.P: ₹35,000"
                        - generic [ref=f6e1103]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1104]:
                            - generic [ref=f6e1105]: ₹35,000
                            - text: ₹35,000
                      - text: (14% off)
                    - generic [ref=f6e1106]: Save extra with No Cost EMI
                  - generic [ref=f6e1113]:
                    - generic [ref=f6e1114]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e1116]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e1131] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1132]
                    - generic [aria-hidden] [ref=f6e1133]: Add to cart
          - listitem [ref=f6e1136]:
            - generic [ref=f6e1142]:
              - link [aria-hidden] [ref=f6e1148] [cursor=pointer]:
                - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_8?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-8
              - generic [ref=f6e1153]:
                - link [ref=f6e1155] [cursor=pointer]:
                  - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_8?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-8
                  - heading "Acer Iconia Tab10 | 10.36\" | 2K IPS Display, 480 Nit | Quad Speakers | 6GB + 128GB (Expandable) | Wi-Fi + (Calling)" [level=2] [ref=f6e1156]
                - generic [ref=f6e1157]:
                  - generic [ref=f6e1158]:
                    - text: "3.6"
                    - button "3.6 out of 5 stars, rating details" [ref=f6e1160] [cursor=pointer]:
                      - generic [ref=f6e1162]: 3.6 out of 5 stars
                    - link "71 ratings" [ref=f6e1164] [cursor=pointer]:
                      - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_8?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-8#customerReviews
                      - text: (71)
                  - generic [ref=f6e1165]: 300+ bought in past month
                - generic [ref=f6e1168]:
                  - generic [ref=f6e1169]:
                    - generic [ref=f6e1171]:
                      - generic [ref=f6e1172]: Price, product page
                      - 'link "₹16,999 M.R.P: ₹30,990 M.R.P: ₹30,990" [ref=f6e1173] [cursor=pointer]':
                        - /url: /Acer-iM10-22-Display-Speakers-Fingerprint/dp/B0DGQKP7JK/ref=sr_1_8?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-8
                        - generic [ref=f6e1174]:
                          - generic [ref=f6e1175]: ₹16,999
                          - generic [aria-hidden] [ref=f6e1176]: ₹16,999
                        - generic [ref=f6e1177]: "M.R.P: ₹30,990"
                        - generic [ref=f6e1178]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1179]:
                            - generic [ref=f6e1180]: ₹30,990
                            - text: ₹30,990
                      - text: (45% off)
                    - generic [ref=f6e1181]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1188]:
                    - generic [ref=f6e1189]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e1191]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e1206] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1207]
                    - generic [aria-hidden] [ref=f6e1208]: Add to cart
          - listitem [ref=f6e1211]:
            - generic [ref=f6e1217]:
              - link [aria-hidden] [ref=f6e1223] [cursor=pointer]:
                - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_9?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-9
              - generic [ref=f6e1228]:
                - link [ref=f6e1230] [cursor=pointer]:
                  - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_9?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-9
                  - heading "OnePlus, Pad Go 2 [Smartchoice], 12.1 inch (30.73 CM), LCD, 8GB RAM, 256GB ROM, Wi-Fi + 5G, Quad Speakers, Eye Care,Shadow Black, AI Enabled" [level=2] [ref=f6e1231]
                - generic [ref=f6e1232]:
                  - generic [ref=f6e1233]:
                    - text: "4.2"
                    - button "4.2 out of 5 stars, rating details" [ref=f6e1235] [cursor=pointer]:
                      - generic [ref=f6e1237]: 4.2 out of 5 stars
                    - link "1,093 ratings" [ref=f6e1239] [cursor=pointer]:
                      - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_9?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-9#customerReviews
                      - text: (1K)
                  - generic [ref=f6e1240]: 2K+ bought in past month
                - generic [ref=f6e1243]:
                  - generic [ref=f6e1244]:
                    - generic [ref=f6e1246]:
                      - generic [ref=f6e1247]: Price, product page
                      - link "₹35,999" [ref=f6e1248] [cursor=pointer]:
                        - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=sr_1_9?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-9
                        - generic [ref=f6e1249]:
                          - generic [ref=f6e1250]: ₹35,999
                          - generic [aria-hidden] [ref=f6e1251]: ₹35,999
                    - generic [ref=f6e1252]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1257]: FREE delivery Tue, 17 Nov
                  - generic [ref=f6e1275] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1276]
                    - generic [aria-hidden] [ref=f6e1277]: Add to cart
                  - group "colours available" [ref=f6e1279]:
                    - list [ref=f6e1280]:
                      - generic [ref=f6e1281]:
                        - listitem:
                          - link "Shadow Black 1":
                            - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQ4FYB/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-9
                            - generic [ref=f6e1282] [cursor=pointer]
                      - generic [ref=f6e1284]:
                        - listitem:
                          - link "Lavender Drift":
                            - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QM3YDM/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-9
                            - generic [ref=f6e1285] [cursor=pointer]
                      - generic [ref=f6e1287]:
                        - listitem:
                          - link "Shadow Black":
                            - /url: /OnePlus-Display-VisionTM-Refresh-Speakers/dp/B0G4QQNK1K/ref=cs_sr_dp_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-9
                            - generic [ref=f6e1288] [cursor=pointer]
          - listitem [ref=f6e1292]:
            - generic [ref=f6e1298]:
              - link [aria-hidden] [ref=f6e1304] [cursor=pointer]:
                - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_10?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-10
              - generic [ref=f6e1309]:
                - link [ref=f6e1311] [cursor=pointer]:
                  - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_10?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-10
                  - heading "Redmi Pad 2, 11-inch (27.94 CM), LCD Display - 2.5K Sharp & Clear, 6GB RAM, 128GB ROM, Wi-Fi + Cellular (4G), Quad Speakers, Dolby Atmos, Sky Blue, AI Enabled" [level=2] [ref=f6e1312]
                - generic [ref=f6e1313]:
                  - generic [ref=f6e1314]:
                    - text: "4.3"
                    - button "4.3 out of 5 stars, rating details" [ref=f6e1316] [cursor=pointer]:
                      - generic [ref=f6e1318]: 4.3 out of 5 stars
                    - link "404 ratings" [ref=f6e1320] [cursor=pointer]:
                      - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_10?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-10#customerReviews
                      - text: (404)
                  - generic [ref=f6e1321]: 400+ bought in past month
                - generic [ref=f6e1324]:
                  - generic [ref=f6e1325]:
                    - generic [ref=f6e1327]:
                      - generic [ref=f6e1328]: Price, product page
                      - 'link "₹21,999 M.R.P: ₹24,999 M.R.P: ₹24,999" [ref=f6e1329] [cursor=pointer]':
                        - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=sr_1_10?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-10
                        - generic [ref=f6e1330]:
                          - generic [ref=f6e1331]: ₹21,999
                          - generic [aria-hidden] [ref=f6e1332]: ₹21,999
                        - generic [ref=f6e1333]: "M.R.P: ₹24,999"
                        - generic [ref=f6e1334]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1335]:
                            - generic [ref=f6e1336]: ₹24,999
                            - text: ₹24,999
                      - text: (12% off)
                    - generic [ref=f6e1337]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1344]:
                    - generic [ref=f6e1345]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e1347]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e1362] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1363]
                    - generic [aria-hidden] [ref=f6e1364]: Add to cart
                  - group "colours available" [ref=f6e1366]:
                    - list [ref=f6e1367]:
                      - generic [ref=f6e1368]:
                        - listitem:
                          - link "Sky Blue":
                            - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRVRF4F/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-10
                            - generic [ref=f6e1369] [cursor=pointer]
                      - generic [ref=f6e1371]:
                        - listitem:
                          - link "Graphite Grey":
                            - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0FBRY7X7Y/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-10
                            - generic [ref=f6e1372] [cursor=pointer]
                      - generic [ref=f6e1374]:
                        - listitem:
                          - link "With Pen Graphite Grey":
                            - /url: /Redmi-Pad-Wi-Fi-Cellular-AI-Enabled/dp/B0HD6BNRS4/ref=cs_sr_dp_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-10
                            - generic [ref=f6e1375] [cursor=pointer]
          - listitem [ref=f6e1379]:
            - generic [ref=f6e1385]:
              - link [aria-hidden] [ref=f6e1391] [cursor=pointer]:
                - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
              - generic [ref=f6e1396]:
                - link [ref=f6e1398] [cursor=pointer]:
                  - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                  - heading "Android 16 10 inch Tablets, 20GB RAM 128GB ROM 2TB Expandable, 2.0GHz Quad-core Processor, 2 in 1 Tablet with Stylus Mouse Keyboard Case, 5G WiFi6, BT 5.0, 6000mAh, Widevine L1" [level=2] [ref=f6e1399]
                - generic [ref=f6e1400]:
                  - generic [ref=f6e1401]:
                    - text: "4.0"
                    - button "4.0 out of 5 stars, rating details" [ref=f6e1403] [cursor=pointer]:
                      - generic [ref=f6e1405]: 4.0 out of 5 stars
                    - link "155 ratings" [ref=f6e1407] [cursor=pointer]:
                      - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11#customerReviews
                      - text: (155)
                  - generic [ref=f6e1408]: 200+ bought in past month
                - generic [ref=f6e1411]:
                  - generic [ref=f6e1412]:
                    - link "One-time purchase" [ref=f6e1414] [cursor=pointer]:
                      - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                    - generic [ref=f6e1416]:
                      - generic [ref=f6e1417]: Price, product page
                      - 'link "₹12,400 M.R.P: ₹19,999 M.R.P: ₹19,999" [ref=f6e1418] [cursor=pointer]':
                        - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                        - generic [ref=f6e1419]:
                          - generic [ref=f6e1420]: ₹12,400
                          - generic [aria-hidden] [ref=f6e1421]: ₹12,400
                        - generic [ref=f6e1422]: "M.R.P: ₹19,999"
                        - generic [ref=f6e1423]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1424]:
                            - generic [ref=f6e1425]: ₹19,999
                            - text: ₹19,999
                      - text: (38% off)
                    - generic [ref=f6e1426]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1431]: FREE delivery Mon, 7 Dec
                  - generic [ref=f6e1451] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1452]
                    - generic [aria-hidden] [ref=f6e1453]: Add to cart
                  - generic [ref=f6e1455]:
                    - separator [aria-hidden] [ref=f6e1456]
                    - link "Get it faster" [ref=f6e1457] [cursor=pointer]:
                      - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                    - link:
                      - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                    - generic [ref=f6e1458]:
                      - link:
                        - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                      - generic [ref=f6e1459]:
                        - link "Price, product page":
                          - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                        - 'link "₹12,700 M.R.P: ₹24,999 M.R.P: ₹24,999" [ref=f6e1461] [cursor=pointer]':
                          - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=sr_1_11_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                          - generic [ref=f6e1462]:
                            - generic [ref=f6e1463]: ₹12,700
                            - generic [aria-hidden] [ref=f6e1464]: ₹12,700
                          - generic [ref=f6e1465]: "M.R.P: ₹24,999"
                          - generic [ref=f6e1466]:
                            - text: "M.R.P:"
                            - generic [ref=f6e1467]:
                              - generic [ref=f6e1468]: ₹24,999
                              - text: ₹24,999
                        - text: (49% off)
                    - generic [ref=f6e1469]: Up to 5% back with Amazon Pay ICICI card
                    - generic [ref=f6e1474]: FREE delivery 24 - 26 Nov
                  - group "colours available" [ref=f6e1481]:
                    - list [ref=f6e1482]:
                      - generic [ref=f6e1483]:
                        - listitem:
                          - link "Black":
                            - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5J6HBJ/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                            - generic [ref=f6e1484] [cursor=pointer]
                      - generic [ref=f6e1486]:
                        - listitem:
                          - link "Pink":
                            - /url: /Expandable-Octa-core-Processor-Keyboard-Widevine/dp/B0GD5FR4DJ/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-11
                            - generic [ref=f6e1487] [cursor=pointer]
          - generic [ref=f6e1498]:
            - link "Sponsored video; click to navigate to featured product page." [ref=f6e1502] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3aQD7eQdpce0EktIEievDCEBBJQ4R3Uh34Ff2Ozl36EZ3aOrT6J23paj2nZ8_XHqxdev76eNvC9yHHWi2z39dBWx2QBbZ2pPa6N65ppDwQDZWyhtfVjkhl5i4HBBoINC_QzHCjJ41KULGuFFPr4cfYtuenUzSP8b2-biqyoeraUGkQMnayNuzUdxJ3Ysd-4s5nDvLtMJqFkW-P0BjfcW6dh3lEhxGBpaMltcqSm35kazopYAWm_Pj--vT50iAO1nvUqk4ecgzDiFWWE7nquQhYrqjpZq0od-QzA79oSFCOmxolwlxarBDAXOqixHAz-B-5FORSN5fgDwmIshwod2pr6cKwoaEJqHMDzJogFKe1SiXLMvr3dMWLKxKjDkTAs03z0kn8cR1OeQ7cIzZYnMaenXh2WP-LrKV4NvGSOvoGuAV7uA&v=c1&r=https://www.amazon.in/dp/B0GV7431FR?aref=Ak324yt1gq&pd_rd_i=B0GV7431FR&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pd_rd_wg=4VThg&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_w=UsOdd&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8
            - generic [ref=f6e1512]:
              - link [aria-hidden] [ref=f6e1518] [cursor=pointer]:
                - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3aQD7eQdpce0EktIEievDCEBBJQ4R3Uh34Ff2Ozl36EZ3aOrT6J23paj2nZ8_XHqxdev76eNvC9yHHWi2z39dBWx2QBbZ2pPa6N65ppDwQDZWyhtfVjkhl5i4HBBoINC_QzHCjJ41KULGuFFPr4cfYtuenUzSP8b2-biqyoeraUGkQMnayNuzUdxJ3Ysd-4s5nDvLtMJqFkW-P0BjfcW6dh3lEhxGBpaMltcqSm35kazopYAWm_Pj--vT50iAO1nvUqk4ecgzDiFWWE7nquQhYrqjpZq0od-QzA79oSFCOmxolwlxarBDAXOqixHAz-B-5FORSN5fgDwmIshwod2pr6cKwoaEJqHMDzJogFKe1SiXLMvr3dMWLKxKjDkTAs03z0kn8cR1OeQ7cIzZYnMaenXh2WP-LrKV4NvGSOvoGuAV7uA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8&pd_rd_w=UsOdd&pd_rd_wg=4VThg&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
              - generic [ref=f6e1523]:
                - generic [ref=f6e1524]:
                  - generic [ref=f6e1525]: Sponsored
                  - link [ref=f6e1529] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3aQD7eQdpce0EktIEievDCEBBJQ4R3Uh34Ff2Ozl36EZ3aOrT6J23paj2nZ8_XHqxdev76eNvC9yHHWi2z39dBWx2QBbZ2pPa6N65ppDwQDZWyhtfVjkhl5i4HBBoINC_QzHCjJ41KULGuFFPr4cfYtuenUzSP8b2-biqyoeraUGkQMnayNuzUdxJ3Ysd-4s5nDvLtMJqFkW-P0BjfcW6dh3lEhxGBpaMltcqSm35kazopYAWm_Pj--vT50iAO1nvUqk4ecgzDiFWWE7nquQhYrqjpZq0od-QzA79oSFCOmxolwlxarBDAXOqixHAz-B-5FORSN5fgDwmIshwod2pr6cKwoaEJqHMDzJogFKe1SiXLMvr3dMWLKxKjDkTAs03z0kn8cR1OeQ7cIzZYnMaenXh2WP-LrKV4NvGSOvoGuAV7uA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8&pd_rd_w=UsOdd&pd_rd_wg=4VThg&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
                    - heading "Bigil Tablet Tempered glass Screen Protector Guard for Lenovo Tab 10.1 inch TB311XU" [level=2] [ref=f6e1530]
                - generic [ref=f6e1531]:
                  - generic [ref=f6e1532]:
                    - text: "3.9"
                    - button "3.9 out of 5 stars, rating details" [ref=f6e1534] [cursor=pointer]:
                      - generic [ref=f6e1536]: 3.9 out of 5 stars
                    - link "14 ratings" [ref=f6e1538] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3aQD7eQdpce0EktIEievDCEBBJQ4R3Uh34Ff2Ozl36EZ3aOrT6J23paj2nZ8_XHqxdev76eNvC9yHHWi2z39dBWx2QBbZ2pPa6N65ppDwQDZWyhtfVjkhl5i4HBBoINC_QzHCjJ41KULGuFFPr4cfYtuenUzSP8b2-biqyoeraUGkQMnayNuzUdxJ3Ysd-4s5nDvLtMJqFkW-P0BjfcW6dh3lEhxGBpaMltcqSm35kazopYAWm_Pj--vT50iAO1nvUqk4ecgzDiFWWE7nquQhYrqjpZq0od-QzA79oSFCOmxolwlxarBDAXOqixHAz-B-5FORSN5fgDwmIshwod2pr6cKwoaEJqHMDzJogFKe1SiXLMvr3dMWLKxKjDkTAs03z0kn8cR1OeQ7cIzZYnMaenXh2WP-LrKV4NvGSOvoGuAV7uA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8&pd_rd_w=UsOdd&pd_rd_wg=4VThg&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413#customerReviews
                      - text: (14)
                  - generic [ref=f6e1539]: 100+ bought in past month
                - generic [ref=f6e1542]:
                  - generic [ref=f6e1543]:
                    - generic [ref=f6e1545]:
                      - generic [ref=f6e1546]: Price, product page
                      - 'link "₹280 M.R.P: ₹999 M.R.P: ₹999" [ref=f6e1547] [cursor=pointer]':
                        - /url: https://sponsored-ads.amazon.in/clk?p=eAFVTk1PgmAAnrnK6MtxqI0jbR3aQD7eQdpce0EktIEievDCEBBJQ4R3Uh34Ff2Ozl36EZ3aOrT6J23paj2nZ8_XHqxdev76eNvC9yHHWi2z39dBWx2QBbZ2pPa6N65ppDwQDZWyhtfVjkhl5i4HBBoINC_QzHCjJ41KULGuFFPr4cfYtuenUzSP8b2-biqyoeraUGkQMnayNuzUdxJ3Ysd-4s5nDvLtMJqFkW-P0BjfcW6dh3lEhxGBpaMltcqSm35kazopYAWm_Pj--vT50iAO1nvUqk4ecgzDiFWWE7nquQhYrqjpZq0od-QzA79oSFCOmxolwlxarBDAXOqixHAz-B-5FORSN5fgDwmIshwod2pr6cKwoaEJqHMDzJogFKe1SiXLMvr3dMWLKxKjDkTAs03z0kn8cR1OeQ7cIzZYnMaenXh2WP-LrKV4NvGSOvoGuAV7uA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxin_24_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece%3Aamzn1.sym.0de98169-95e4-458d-8ca2-b1da70ccdece&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=3bd6f8fd-9f20-44b5-93dc-b713769850a8&pd_rd_w=UsOdd&pd_rd_wg=4VThg&pf_rd_p=0de98169-95e4-458d-8ca2-b1da70ccdece&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-bc174091-0cdb-4802-a37c-8b1bf6a53413
                        - generic [ref=f6e1548]:
                          - generic [ref=f6e1549]: ₹280
                          - generic [aria-hidden] [ref=f6e1550]: ₹280
                        - generic [ref=f6e1551]: "M.R.P: ₹999"
                        - generic [ref=f6e1552]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1553]:
                            - generic [ref=f6e1554]: ₹999
                            - text: ₹999
                      - text: (72% off)
                    - generic [ref=f6e1555]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1560]: FREE delivery Sat, 21 Nov
          - generic [ref=f6e1568]:
            - heading "More results" [level=2] [ref=f6e1572]
            - generic:
              - list
          - listitem [ref=f6e1573]:
            - generic [ref=f6e1579]:
              - link [aria-hidden] [ref=f6e1585] [cursor=pointer]:
                - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_12?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-12
              - generic [ref=f6e1590]:
                - link [ref=f6e1592] [cursor=pointer]:
                  - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_12?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-12
                  - heading "Lenovo Idea Tab Plus with Pen | Wifi |12.1\" 2.5K Display, 800nits Peak Brightness |12GB RAM + 256GB ROM (Expandable upto 2TB)| MediaTek Dimensity 6400| 10200mAh|4 Speakers with Dolby Atmos| Cloud Grey" [level=2] [ref=f6e1593]
                - generic [ref=f6e1594]:
                  - generic [ref=f6e1595]:
                    - text: "4.5"
                    - button "4.5 out of 5 stars, rating details" [ref=f6e1597] [cursor=pointer]:
                      - generic [ref=f6e1599]: 4.5 out of 5 stars
                    - link "68 ratings" [ref=f6e1601] [cursor=pointer]:
                      - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_12?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-12#customerReviews
                      - text: (68)
                  - generic [ref=f6e1602]: 500+ bought in past month
                - generic [ref=f6e1605]:
                  - generic [ref=f6e1606]:
                    - generic [ref=f6e1608]:
                      - generic [ref=f6e1609]: Price, product page
                      - 'link "₹33,081 M.R.P: ₹40,000 M.R.P: ₹40,000" [ref=f6e1610] [cursor=pointer]':
                        - /url: /Lenovo-Brightness-Expandable-MediaTek-Dimensity/dp/B0G2RZCF95/ref=sr_1_12?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-12
                        - generic [ref=f6e1611]:
                          - generic [ref=f6e1612]: ₹33,081
                          - generic [aria-hidden] [ref=f6e1613]: ₹33,081
                        - generic [ref=f6e1614]: "M.R.P: ₹40,000"
                        - generic [ref=f6e1615]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1616]:
                            - generic [ref=f6e1617]: ₹40,000
                            - text: ₹40,000
                      - text: (17% off)
                    - generic [ref=f6e1618]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1625]:
                    - generic [ref=f6e1626]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e1628]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e1643] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1644]
                    - generic [aria-hidden] [ref=f6e1645]: Add to cart
                  - generic [ref=f6e1647]:
                    - text: More Buying Choices₹33,000
                    - link "(4 new offers)" [ref=f6e1649] [cursor=pointer]:
                      - /url: /gp/offer-listing/B0G2RZCF95/ref=sr_1_12_olp?keywords=Tablet&crid=1GCXHYMDAXQVJ&sprefix=tablet%2Caps%2C341&dib_tag=se&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&qid=1794617528&sr=8-12
          - listitem [ref=f6e1652]:
            - generic [ref=f6e1658]:
              - generic [ref=f6e1660]:
                - group "Best sellerin Tablets" [ref=f6e1666]:
                  - generic "Best seller" [ref=f6e1668]
                - link [aria-hidden] [ref=f6e1672] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
              - generic [ref=f6e1677]:
                - link [ref=f6e1679] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                  - heading "Lenovo Idea Tab ( Smartchoice) with Tab Pen | WiFi+5G |11\" 2.5K IPS Display |6GB RAM + 128GB ROM (Expandable Upto 2TB)| MediaTek Dimensity 6300|7040mAh|4 Speakers| Grey" [level=2] [ref=f6e1680]
                - generic [ref=f6e1681]:
                  - generic [ref=f6e1682]:
                    - text: "3.8"
                    - button "3.8 out of 5 stars, rating details" [ref=f6e1684] [cursor=pointer]:
                      - generic [ref=f6e1686]: 3.8 out of 5 stars
                    - link "73 ratings" [ref=f6e1688] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13#customerReviews
                      - text: (73)
                  - generic [ref=f6e1689]: 4K+ bought in past month
                - generic [ref=f6e1692]:
                  - generic [ref=f6e1693]:
                    - link "One-time purchase" [ref=f6e1695] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                    - generic [ref=f6e1697]:
                      - generic [ref=f6e1698]: Price, product page
                      - 'link "₹29,999 M.R.P: ₹53,000 M.R.P: ₹53,000" [ref=f6e1699] [cursor=pointer]':
                        - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_primary_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                        - generic [ref=f6e1700]:
                          - generic [ref=f6e1701]: ₹29,999
                          - generic [aria-hidden] [ref=f6e1702]: ₹29,999
                        - generic [ref=f6e1703]: "M.R.P: ₹53,000"
                        - generic [ref=f6e1704]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1705]:
                            - generic [ref=f6e1706]: ₹53,000
                            - text: ₹53,000
                      - text: (43% off)
                    - generic [ref=f6e1707]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1712]: FREE delivery Sat, 21 Nov
                  - generic [ref=f6e1732] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1733]
                    - generic [aria-hidden] [ref=f6e1734]: Add to cart
                  - generic [ref=f6e1736]:
                    - separator [aria-hidden] [ref=f6e1737]
                    - link "Get it faster" [ref=f6e1738] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                    - link:
                      - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                    - generic [ref=f6e1739]:
                      - link:
                        - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                      - generic [ref=f6e1740]:
                        - link "Price, product page":
                          - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                        - 'link "₹30,563 M.R.P: ₹53,000 M.R.P: ₹53,000" [ref=f6e1742] [cursor=pointer]':
                          - /url: /Lenovo-Smartchoice-Expandable-MediaTek-Dimensity/dp/B0HBBGL6C2/ref=sr_1_13_mod_new?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=8-13
                          - generic [ref=f6e1743]:
                            - generic [ref=f6e1744]: ₹30,563
                            - generic [aria-hidden] [ref=f6e1745]: ₹30,563
                          - generic [ref=f6e1746]: "M.R.P: ₹53,000"
                          - generic [ref=f6e1747]:
                            - text: "M.R.P:"
                            - generic [ref=f6e1748]:
                              - generic [ref=f6e1749]: ₹53,000
                              - text: ₹53,000
                        - text: (42% off)
                    - generic [ref=f6e1750]: Up to 5% back with Amazon Pay ICICI card
                    - generic [ref=f6e1756]:
                      - generic [ref=f6e1757]: FREE delivery Mon, 16 Nov
                      - generic [ref=f6e1759]: Or fastest delivery Today 4 pm - 8 pm
          - listitem [ref=f6e1763]:
            - generic [ref=f6e1769]:
              - link [aria-hidden] [ref=f6e1775] [cursor=pointer]:
                - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_14?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-14
              - generic [ref=f6e1780]:
                - link [ref=f6e1782] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_14?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-14
                  - 'heading "Lenovo {Smartchoice} Idea Tab Pro with Pen Plus & Keyboard|12.7\" 3K Display|144 Hz Refresh|12 GB RAM, 256 GB ROM| AI-Enabled| MediaTek Dimensity 8300|4 JBL Speakers|10200 mAh Battery with 45 W Charger" [level=2] [ref=f6e1783]'
                - generic [ref=f6e1784]:
                  - generic [ref=f6e1785]:
                    - text: "4.5"
                    - button "4.5 out of 5 stars, rating details" [ref=f6e1787] [cursor=pointer]:
                      - generic [ref=f6e1789]: 4.5 out of 5 stars
                    - link "88 ratings" [ref=f6e1791] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_14?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-14#customerReviews
                      - text: (88)
                  - generic [ref=f6e1792]: 1K+ bought in past month
                - generic [ref=f6e1795]:
                  - generic [ref=f6e1796]:
                    - generic [ref=f6e1798]:
                      - generic [ref=f6e1799]: Price, product page
                      - 'link "₹41,999 M.R.P: ₹48,999 M.R.P: ₹48,999" [ref=f6e1800] [cursor=pointer]':
                        - /url: /Lenovo-Smartchoice-Keyboard-AI-Enabled-Dimensity/dp/B0GP6YWSY2/ref=sr_1_14?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-14
                        - generic [ref=f6e1801]:
                          - generic [ref=f6e1802]: ₹41,999
                          - generic [aria-hidden] [ref=f6e1803]: ₹41,999
                        - generic [ref=f6e1804]: "M.R.P: ₹48,999"
                        - generic [ref=f6e1805]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1806]:
                            - generic [ref=f6e1807]: ₹48,999
                            - text: ₹48,999
                      - text: (14% off)
                    - generic [ref=f6e1808]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1815]:
                    - generic [ref=f6e1816]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e1818]: Or fastest delivery Tomorrow, 15 Nov
                  - generic [ref=f6e1833] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1834]
                    - generic [aria-hidden] [ref=f6e1835]: Add to cart
          - listitem [ref=f6e1838]:
            - generic [ref=f6e1844]:
              - link [aria-hidden] [ref=f6e1850] [cursor=pointer]:
                - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_15?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-15
              - generic [ref=f6e1855]:
                - link [ref=f6e1857] [cursor=pointer]:
                  - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_15?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-15
                  - 'heading "Lenovo Idea Tab Pro Gen 2 with Pen Plus {Smartchoice} 13\" Display, 3.5K Resolution, 144Hz Refresh | 8GB, 256GB | Snapdragon 8s Gen 4 | 10200mAh, 4 JBL Speakers, USB 3.0 with DP-Out, Wi-Fi 7, Luna Grey" [level=2] [ref=f6e1858]'
                - generic [ref=f6e1859]:
                  - generic [ref=f6e1860]:
                    - text: "4.2"
                    - button "4.2 out of 5 stars, rating details" [ref=f6e1862] [cursor=pointer]:
                      - generic [ref=f6e1864]: 4.2 out of 5 stars
                    - link "254 ratings" [ref=f6e1866] [cursor=pointer]:
                      - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_15?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-15#customerReviews
                      - text: (254)
                  - generic [ref=f6e1867]: 2K+ bought in past month
                - generic [ref=f6e1870]:
                  - generic [ref=f6e1871]:
                    - generic [ref=f6e1873]:
                      - generic [ref=f6e1874]: Price, product page
                      - 'link "₹44,999 M.R.P: ₹70,000 M.R.P: ₹70,000" [ref=f6e1875] [cursor=pointer]':
                        - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=sr_1_15?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-15
                        - generic [ref=f6e1876]:
                          - generic [ref=f6e1877]: ₹44,999
                          - generic [aria-hidden] [ref=f6e1878]: ₹44,999
                        - generic [ref=f6e1879]: "M.R.P: ₹70,000"
                        - generic [ref=f6e1880]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1881]:
                            - generic [ref=f6e1882]: ₹70,000
                            - text: ₹70,000
                      - text: (36% off)
                    - generic [ref=f6e1883]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e1890]:
                    - generic [ref=f6e1891]: FREE delivery Mon, 16 Nov
                    - generic [ref=f6e1893]: Or fastest delivery Today 4 pm - 8 pm
                  - generic [ref=f6e1908] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1909]
                    - generic [aria-hidden] [ref=f6e1910]: Add to cart
                  - group "colours available" [ref=f6e1912]:
                    - list [ref=f6e1913]:
                      - generic [ref=f6e1914]:
                        - listitem:
                          - link "Without Keyboard":
                            - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0GWHYQW77/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-15
                            - generic [ref=f6e1915] [cursor=pointer]
                      - generic [ref=f6e1917]:
                        - listitem:
                          - link "With Keyboard":
                            - /url: /Lenovo-Smartchoice-Resolution-Snapdragon-10200mAh/dp/B0HHRB6DQG/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-15
                            - generic [ref=f6e1918] [cursor=pointer]
          - listitem [ref=f6e1922]:
            - generic [ref=f6e1928]:
              - link [aria-hidden] [ref=f6e1934] [cursor=pointer]:
                - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_16?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-16
              - generic [ref=f6e1939]:
                - link [ref=f6e1941] [cursor=pointer]:
                  - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_16?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-16
                  - heading "Samsung Galaxy Tab S10 FE [Smartchoice], S Pen in-Box, 27.7 cm (10.9 inch) Display, AI Writing, Desktop Mode, Pre Loaded Pro Apps, 8 GB RAM, 128 GB Storage, Wi-Fi Tablet, Gray" [level=2] [ref=f6e1942]
                - generic [ref=f6e1943]:
                  - generic [ref=f6e1944]:
                    - text: "4.4"
                    - button "4.4 out of 5 stars, rating details" [ref=f6e1946] [cursor=pointer]:
                      - generic [ref=f6e1948]: 4.4 out of 5 stars
                    - link "269 ratings" [ref=f6e1950] [cursor=pointer]:
                      - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_16?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-16#customerReviews
                      - text: (269)
                  - generic [ref=f6e1951]: 1K+ bought in past month
                - generic [ref=f6e1954]:
                  - generic [ref=f6e1955]:
                    - generic [ref=f6e1957]:
                      - generic [ref=f6e1958]: Price, product page
                      - 'link "₹43,999 M.R.P: ₹49,999 M.R.P: ₹49,999" [ref=f6e1959] [cursor=pointer]':
                        - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=sr_1_16?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-16
                        - generic [ref=f6e1960]:
                          - generic [ref=f6e1961]: ₹43,999
                          - generic [aria-hidden] [ref=f6e1962]: ₹43,999
                        - generic [ref=f6e1963]: "M.R.P: ₹49,999"
                        - generic [ref=f6e1964]:
                          - text: "M.R.P:"
                          - generic [ref=f6e1965]:
                            - generic [ref=f6e1966]: ₹49,999
                            - text: ₹49,999
                      - text: (12% off)
                    - generic [ref=f6e1967]: Save extra with No Cost EMI
                  - generic [ref=f6e1972]: FREE delivery Tue, 17 Nov
                  - generic [ref=f6e1990] [cursor=pointer]:
                    - button "Add to cart" [ref=f6e1991]
                    - generic [aria-hidden] [ref=f6e1992]: Add to cart
                  - group "colours available" [ref=f6e1994]:
                    - list [ref=f6e1995]:
                      - generic [ref=f6e1996]:
                        - listitem:
                          - link "Gray":
                            - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P9CKJ/ref=cs_sr_dp_1?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-16
                            - generic [ref=f6e1997] [cursor=pointer]
                      - generic [ref=f6e1999]:
                        - listitem:
                          - link "Blue":
                            - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29L3W6J/ref=cs_sr_dp_2?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-16
                            - generic [ref=f6e2000] [cursor=pointer]
                      - generic [ref=f6e2002]:
                        - listitem:
                          - link "Silver":
                            - /url: /Samsung-Galaxy-Display-Storage-Tablet/dp/B0F29P22Y6/ref=cs_sr_dp_3?crid=1GCXHYMDAXQVJ&dib=eyJ2IjoiMSJ9.37GUJuWnH858gczODEDPRuCBseHcVZySsnB_HgZ8ybERsKVvhQ6Y0I7rGIF4auB8eEDIvpDPPMzw2MT3duFaPjGrD8u5dc4cEbNVBenuyjCkJfcbUWicQoQHz8Of0UyCsaVn5p0r58pBh48G_HcL5Ox8LgmetpDluYcm5oacuVXYdel_Nm2uSqg45MD-_PqSCLUA4Y9n8rhQSmTphd3QTr4m9yGKD6aj1dpPs3oKQKA.JVcdjAotOLZ1_6vGUbo-Xa3ab0j7Sp4sGcsqR-Yu0Fw&dib_tag=se&keywords=Tablet&qid=1794617528&sprefix=tablet%2Caps%2C341&sr=8-16
                            - generic [ref=f6e2003] [cursor=pointer]
          - generic [ref=f6e2014]:
            - link "Sponsored video; click to navigate to featured product page." [ref=f6e2018] [cursor=pointer]:
              - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ubY8fDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsdIU14CCSjN_7yjLwFD_osLKrKjssvQgbiMTMz0TMz1jMz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8k8sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BAAIlIBA&v=c1&r=https://www.amazon.in/dp/B0GV7431FR?aref=Ak324yt1gq&pd_rd_i=B0GV7431FR&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pd_rd_wg=EAeJZ&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_w=5MY3q&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8
            - generic [ref=f6e2028]:
              - link [aria-hidden] [ref=f6e2034] [cursor=pointer]:
                - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ubY8fDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsdIU14CCSjN_7yjLwFD_osLKrKjssvQgbiMTMz0TMz1jMz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8k8sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BAAIlIBA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&pd_rd_w=5MY3q&pd_rd_wg=EAeJZ&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
              - generic [ref=f6e2039]:
                - generic [ref=f6e2040]:
                  - generic [ref=f6e2041]: Sponsored
                  - link [ref=f6e2045] [cursor=pointer]:
                    - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ubY8fDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsdIU14CCSjN_7yjLwFD_osLKrKjssvQgbiMTMz0TMz1jMz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8k8sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BAAIlIBA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&pd_rd_w=5MY3q&pd_rd_wg=EAeJZ&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
                    - heading "Bigil Tablet Tempered glass Screen Protector Guard for Lenovo Tab 10.1 inch TB311XU" [level=2] [ref=f6e2046]
                - generic [ref=f6e2047]:
                  - generic [ref=f6e2048]:
                    - text: "3.9"
                    - button "3.9 out of 5 stars, rating details" [ref=f6e2050] [cursor=pointer]:
                      - generic [ref=f6e2052]: 3.9 out of 5 stars
                    - link "14 ratings" [ref=f6e2054] [cursor=pointer]:
                      - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ubY8fDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsdIU14CCSjN_7yjLwFD_osLKrKjssvQgbiMTMz0TMz1jMz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8k8sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BAAIlIBA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&pd_rd_w=5MY3q&pd_rd_wg=EAeJZ&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1#customerReviews
                      - text: (14)
                  - generic [ref=f6e2055]: 100+ bought in past month
                - generic [ref=f6e2058]:
                  - generic [ref=f6e2059]:
                    - generic [ref=f6e2061]:
                      - generic [ref=f6e2062]: Price, product page
                      - 'link "₹280 M.R.P: ₹999 M.R.P: ₹999" [ref=f6e2063] [cursor=pointer]':
                        - /url: https://sponsored-ads.amazon.in/clk?p=eAHj8ubY8fDedTYhXkcjwxCvoNBQPxNv9zAlRkMrsdIU14CCSjN_7yjLwFD_osLKrKjssvQgbiMTMz0TMz1jMz2DKKZgpyQOR9cQD9cgz2AhcS72lNTi7JL8AiGeUL8gV2d_dz_PKFcXKS8uZahEfHFqYlFyRnxBalFyfk5iSWp8Un5JSX5ufFJJmhBnYm5iVX6eXmaelGBxUpkuRK0uRIUSa2pevKefkhkXo4HAlFsX1z3Y6yLFBzUWpobfyMDAwNzS0MjcyNLC3MTQiNnTL8iK2TnAWctfyNrFydG5wM1T19yxzqkQAtId65wCS4r8k8sdUUGdU3qdU2CdkyOYkS4l4JzuWuHuVZbsmOniWZJhYmsUxhWSUVJSUGylr19eXq4Hd7t-SoG-k4F7mLmJsaFbkH1iUWqarWO2sZFJZYlheqFaQUp8UUp8pi1CCVSoICcjpci2BAAIlIBA&v=c1&r=https://www.amazon.in/Bigil-Tablet-Tempered-Protector-TB311XU/dp/B0GV7431FR/ref=sxbs_sbv_search_btf?aref=Ak324yt1gq&content-id=amzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2%3Aamzn1.sym.08151b05-d55c-46d5-8d3d-169dbffb31f2&crid=1GCXHYMDAXQVJ&cv_ct_cx=Tablet&keywords=Tablet&pd_rd_i=B0GV7431FR&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&pd_rd_w=5MY3q&pd_rd_wg=EAeJZ&pf_rd_p=08151b05-d55c-46d5-8d3d-169dbffb31f2&pf_rd_r=QPBZSYWTA9C2DC38G79B&qid=1794617528&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tablet%2Caps%2C341&sr=1-1-c6261b0d-51ee-49e4-be21-2fbbc07beaa1
                        - generic [ref=f6e2064]:
                          - generic [ref=f6e2065]: ₹280
                          - generic [aria-hidden] [ref=f6e2066]: ₹280
                        - generic [ref=f6e2067]: "M.R.P: ₹999"
                        - generic [ref=f6e2068]:
                          - text: "M.R.P:"
                          - generic [ref=f6e2069]:
                            - generic [ref=f6e2070]: ₹999
                            - text: ₹999
                      - text: (72% off)
                    - generic [ref=f6e2071]: Up to 5% back with Amazon Pay ICICI card
                  - generic [ref=f6e2076]: FREE delivery Sat, 21 Nov
          - generic [ref=f6e2088]:
            - generic "Related searches in Tablet" [ref=f6e2089]:
              - heading "Related searches" [level=2] [ref=f6e2092]
            - list [ref=f6e2094]:
              - generic [ref=f6e2095]:
                - listitem [ref=f6e2096]:
                  - link "ipad" [ref=f6e2098] [cursor=pointer]:
                    - /url: /s?k=ipad&ref=rsl_sug_0_0&pd_rd_w=yz25z&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=EAeJZ&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&qid=1794617528
                - listitem [ref=f6e2104]:
                  - link "tablet samsung" [ref=f6e2106] [cursor=pointer]:
                    - /url: /s?k=tablet+samsung&ref=rsl_sug_0_3&pd_rd_w=yz25z&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=EAeJZ&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&qid=1794617528
              - generic [ref=f6e2112]:
                - listitem [ref=f6e2113]:
                  - link "tablet with pen" [ref=f6e2115] [cursor=pointer]:
                    - /url: /s?k=tablet+with+pen&ref=rsl_sug_0_1&pd_rd_w=yz25z&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=EAeJZ&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&qid=1794617528
                - listitem [ref=f6e2121]:
                  - link "tablets under 10000" [ref=f6e2123] [cursor=pointer]:
                    - /url: /s?k=tablets+under+10000&ref=rsl_sug_0_4&pd_rd_w=yz25z&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=EAeJZ&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&qid=1794617528
              - generic [ref=f6e2129]:
                - listitem [ref=f6e2130]:
                  - link "table" [ref=f6e2132] [cursor=pointer]:
                    - /url: /s?k=table&ref=rsl_sug_0_2&pd_rd_w=yz25z&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=EAeJZ&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&qid=1794617528
                - listitem [ref=f6e2138]:
                  - link "laptop" [ref=f6e2140] [cursor=pointer]:
                    - /url: /s?k=laptop&ref=rsl_sug_0_5&pd_rd_w=yz25z&content-id=amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01:amzn1.sym.c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_p=c6a4c27a-40f0-4447-9435-8e917ffa1d01&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=EAeJZ&pd_rd_r=c75ecbee-ebcf-40ec-a830-9897ee75f7a8&qid=1794617528
          - navigation "pagination" [ref=f6e2148]:
            - list [ref=f6e2150]:
              - listitem [ref=f6e2151]:
                - button "Previous" [disabled] [ref=f6e2153]
              - listitem [ref=f6e2156]:
                - button "Page 1" [ref=f6e2158]: "1"
              - listitem [ref=f6e2159]:
                - button "Go to page 2" [ref=f6e2161] [cursor=pointer]: "2"
              - listitem [ref=f6e2162]:
                - button "Go to page 3" [ref=f6e2164] [cursor=pointer]: "3"
              - button [disabled] [ref=f6e2165]:
                - img [aria-hidden] [ref=f6e2166]: ...
              - button "20" [disabled] [ref=f6e2168]
              - listitem [ref=f6e2169]:
                - button "Go to next page, page 2" [ref=f6e2171] [cursor=pointer]: Next
          - generic [ref=f6e2177]:
            - separator [aria-hidden] [ref=f6e2178]
            - generic [ref=f6e2179]:
              - heading "Brands related to your search" [ref=f6e2180]
              - button "Leave feedback on Sponsored ad" [ref=f6e2185] [cursor=pointer]: Sponsored
              - generic [ref=f6e2189]:
                - generic [ref=f6e2191]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkM1u00AUhdVWQAkgoiyKlGUksqiYZPwT2wmykMf5cxqcNE4CzWY0sSeJ1WTszkyTlkX2PABrJN4A2LDkLdghseA9UFpAgrP6ru49uveeTHj45cf3b3dzjxxVGXYGo5Gvn7TGhT3l-GhGWXyFV9K6Hp0tmTJmifBYvXak6tEF0c11yZ-ema_b55XT0GSbwQNVN0q6UdKMEpzsB2h66DSG7cbAC3JPMvciKs5lkuYejvxBw-21fG_SqOff7mUOdx08lbPcfbIibxJWiln-6UIQwGmYrFaURUTGCQOC8nUcUiAo4eECTOWscIcy7PnH6upyKWMw5YRFIOSUyHhNwe-NICQ8EiAlMZOUgzBhkjKpZl8iF2v9oIvrjeBk2OsXrMwezH79-e7j50_1fPaPe3eIlopl4bEGIawYlgKhrluaoR54_qB24Pbd417ueR05btr0gOls0cWt5s4WnUreCzfOv9qi-RadbpFzA_N81p03rlqddejEdU8udFv9sJ95v7-QMhW1cnmz2ZT-JlMWMuFUlFMyp2WkWQ3LRBYwq1UV6HWoAqupGEA1m7qKqkazolovbgyY05kdIOxAXVMqUFHGJ14XTRRT6wYOcKBmGLBiaa1hp9obTIKgDyfFNMI8wulyEXFbFheC4JDjOLJhcZliImImbATbCPlGtz14doPDsd7Rb7HVNVx1N3lxSfm1PSTTJZW7WiwTaf-fblFEKSYRnvPkMrU1CBVNqVpVVVGqml6MbZKKItn90DJnyfUrqzPu_AIfdNuG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                      - link [ref=f6e2192] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkM1u00AUhdVWQAkgoiyKlGUksqiYZPwT2wmykMf5cxqcNE4CzWY0sSeJ1WTszkyTlkX2PABrJN4A2LDkLdghseA9UFpAgrP6ru49uveeTHj45cf3b3dzjxxVGXYGo5Gvn7TGhT3l-GhGWXyFV9K6Hp0tmTJmifBYvXak6tEF0c11yZ-ema_b55XT0GSbwQNVN0q6UdKMEpzsB2h66DSG7cbAC3JPMvciKs5lkuYejvxBw-21fG_SqOff7mUOdx08lbPcfbIibxJWiln-6UIQwGmYrFaURUTGCQOC8nUcUiAo4eECTOWscIcy7PnH6upyKWMw5YRFIOSUyHhNwe-NICQ8EiAlMZOUgzBhkjKpZl8iF2v9oIvrjeBk2OsXrMwezH79-e7j50_1fPaPe3eIlopl4bEGIawYlgKhrluaoR54_qB24Pbd417ueR05btr0gOls0cWt5s4WnUreCzfOv9qi-RadbpFzA_N81p03rlqddejEdU8udFv9sJ95v7-QMhW1cnmz2ZT-JlMWMuFUlFMyp2WkWQ3LRBYwq1UV6HWoAqupGEA1m7qKqkazolovbgyY05kdIOxAXVMqUFHGJ14XTRRT6wYOcKBmGLBiaa1hp9obTIKgDyfFNMI8wulyEXFbFheC4JDjOLJhcZliImImbATbCPlGtz14doPDsd7Rb7HVNVx1N3lxSfm1PSTTJZW7WiwTaf-fblFEKSYRnvPkMrU1CBVNqVpVVVGqml6MbZKKItn90DJnyfUrqzPu_AIfdNuG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_ls&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                        - img "Lenovo Tablets" [ref=f6e2193]
                      - generic [ref=f6e2195]:
                        - generic [ref=f6e2196]:
                          - link [aria-hidden] [ref=f6e2197] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkM1u00AUhdVWQAkgoiyKlGUksqiYZPwT2wmykMf5cxqcNE4CzWY0sSeJ1WTszkyTlkX2PABrJN4A2LDkLdghseA9UFpAgrP6ru49uveeTHj45cf3b3dzjxxVGXYGo5Gvn7TGhT3l-GhGWXyFV9K6Hp0tmTJmifBYvXak6tEF0c11yZ-ema_b55XT0GSbwQNVN0q6UdKMEpzsB2h66DSG7cbAC3JPMvciKs5lkuYejvxBw-21fG_SqOff7mUOdx08lbPcfbIibxJWiln-6UIQwGmYrFaURUTGCQOC8nUcUiAo4eECTOWscIcy7PnH6upyKWMw5YRFIOSUyHhNwe-NICQ8EiAlMZOUgzBhkjKpZl8iF2v9oIvrjeBk2OsXrMwezH79-e7j50_1fPaPe3eIlopl4bEGIawYlgKhrluaoR54_qB24Pbd417ueR05btr0gOls0cWt5s4WnUreCzfOv9qi-RadbpFzA_N81p03rlqddejEdU8udFv9sJ95v7-QMhW1cnmz2ZT-JlMWMuFUlFMyp2WkWQ3LRBYwq1UV6HWoAqupGEA1m7qKqkazolovbgyY05kdIOxAXVMqUFHGJ14XTRRT6wYOcKBmGLBiaa1hp9obTIKgDyfFNMI8wulyEXFbFheC4JDjOLJhcZliImImbATbCPlGtz14doPDsd7Rb7HVNVx1N3lxSfm1PSTTJZW7WiwTaf-fblFEKSYRnvPkMrU1CBVNqVpVVVGqml6MbZKKItn90DJnyfUrqzPu_AIfdNuG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                          - link [ref=f6e2198] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkM1u00AUhdVWQAkgoiyKlGUksqiYZPwT2wmykMf5cxqcNE4CzWY0sSeJ1WTszkyTlkX2PABrJN4A2LDkLdghseA9UFpAgrP6ru49uveeTHj45cf3b3dzjxxVGXYGo5Gvn7TGhT3l-GhGWXyFV9K6Hp0tmTJmifBYvXak6tEF0c11yZ-ema_b55XT0GSbwQNVN0q6UdKMEpzsB2h66DSG7cbAC3JPMvciKs5lkuYejvxBw-21fG_SqOff7mUOdx08lbPcfbIibxJWiln-6UIQwGmYrFaURUTGCQOC8nUcUiAo4eECTOWscIcy7PnH6upyKWMw5YRFIOSUyHhNwe-NICQ8EiAlMZOUgzBhkjKpZl8iF2v9oIvrjeBk2OsXrMwezH79-e7j50_1fPaPe3eIlopl4bEGIawYlgKhrluaoR54_qB24Pbd417ueR05btr0gOls0cWt5s4WnUreCzfOv9qi-RadbpFzA_N81p03rlqddejEdU8udFv9sJ95v7-QMhW1cnmz2ZT-JlMWMuFUlFMyp2WkWQ3LRBYwq1UV6HWoAqupGEA1m7qKqkazolovbgyY05kdIOxAXVMqUFHGJ14XTRRT6wYOcKBmGLBiaa1hp9obTIKgDyfFNMI8wulyEXFbFheC4JDjOLJhcZliImImbATbCPlGtz14doPDsd7Rb7HVNVx1N3lxSfm1PSTTJZW7WiwTaf-fblFEKSYRnvPkMrU1CBVNqVpVVVGqml6MbZKKItn90DJnyfUrqzPu_AIfdNuG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_logo&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                            - img "Lenovo Tablets" [ref=f6e2200]
                        - generic [ref=f6e2201]:
                          - link [aria-hidden] [ref=f6e2202] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkM1u00AUhdVWQAkgoiyKlGUksqiYZPwT2wmykMf5cxqcNE4CzWY0sSeJ1WTszkyTlkX2PABrJN4A2LDkLdghseA9UFpAgrP6ru49uveeTHj45cf3b3dzjxxVGXYGo5Gvn7TGhT3l-GhGWXyFV9K6Hp0tmTJmifBYvXak6tEF0c11yZ-ema_b55XT0GSbwQNVN0q6UdKMEpzsB2h66DSG7cbAC3JPMvciKs5lkuYejvxBw-21fG_SqOff7mUOdx08lbPcfbIibxJWiln-6UIQwGmYrFaURUTGCQOC8nUcUiAo4eECTOWscIcy7PnH6upyKWMw5YRFIOSUyHhNwe-NICQ8EiAlMZOUgzBhkjKpZl8iF2v9oIvrjeBk2OsXrMwezH79-e7j50_1fPaPe3eIlopl4bEGIawYlgKhrluaoR54_qB24Pbd417ueR05btr0gOls0cWt5s4WnUreCzfOv9qi-RadbpFzA_N81p03rlqddejEdU8udFv9sJ95v7-QMhW1cnmz2ZT-JlMWMuFUlFMyp2WkWQ3LRBYwq1UV6HWoAqupGEA1m7qKqkazolovbgyY05kdIOxAXVMqUFHGJ14XTRRT6wYOcKBmGLBiaa1hp9obTIKgDyfFNMI8wulyEXFbFheC4JDjOLJhcZliImImbATbCPlGtz14doPDsd7Rb7HVNVx1N3lxSfm1PSTTJZW7WiwTaf-fblFEKSYRnvPkMrU1CBVNqVpVVVGqml6MbZKKItn90DJnyfUrqzPu_AIfdNuG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                          - link "The Ultimate Entertainment Tablet" [ref=f6e2203] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkM1u00AUhdVWQAkgoiyKlGUksqiYZPwT2wmykMf5cxqcNE4CzWY0sSeJ1WTszkyTlkX2PABrJN4A2LDkLdghseA9UFpAgrP6ru49uveeTHj45cf3b3dzjxxVGXYGo5Gvn7TGhT3l-GhGWXyFV9K6Hp0tmTJmifBYvXak6tEF0c11yZ-ema_b55XT0GSbwQNVN0q6UdKMEpzsB2h66DSG7cbAC3JPMvciKs5lkuYejvxBw-21fG_SqOff7mUOdx08lbPcfbIibxJWiln-6UIQwGmYrFaURUTGCQOC8nUcUiAo4eECTOWscIcy7PnH6upyKWMw5YRFIOSUyHhNwe-NICQ8EiAlMZOUgzBhkjKpZl8iF2v9oIvrjeBk2OsXrMwezH79-e7j50_1fPaPe3eIlopl4bEGIawYlgKhrluaoR54_qB24Pbd417ueR05btr0gOls0cWt5s4WnUreCzfOv9qi-RadbpFzA_N81p03rlqddejEdU8udFv9sJ95v7-QMhW1cnmz2ZT-JlMWMuFUlFMyp2WkWQ3LRBYwq1UV6HWoAqupGEA1m7qKqkazolovbgyY05kdIOxAXVMqUFHGJ14XTRRT6wYOcKBmGLBiaa1hp9obTIKgDyfFNMI8wulyEXFbFheC4JDjOLJhcZliImImbATbCPlGtz14doPDsd7Rb7HVNVx1N3lxSfm1PSTTJZW7WiwTaf-fblFEKSYRnvPkMrU1CBVNqVpVVVGqml6MbZKKItn90DJnyfUrqzPu_AIfdNuG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2FB38E87B8-7992-4D02-8F16-27F42B96F528%3Fstore_ref%3DSB_A04315011VKILBZ173LSA-A03660583GTJ9ORZSSP0Z%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0HBBN6LHR%2CB0HBBTV4J4%2CB0HBBGL6C2%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300131989211934%26i%3Daps%26aref%3DG7foyW8JVJ&ref_=sbx_be_s_3psl_mbd_mb0_hl&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                - generic [ref=f6e2208]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AYhdVWQAkgoiyKlGUksqiYZDzjOG6RhWZs59JLkubS28aa2JPEajJ2Z6ZJwyJ79kis4Dl4BXbs2CHxDmzYoZSLBGd1fh0d_UdfJtz--O3rl_u5JwQZ_YPuYNAyD-unhQ1jd2fERXwbzLS9HFxMhXEqEtUU3v7Ocllx-0Idzy7Oj4bKwlY8gFfj7iNkWiXTKmGrBC83e3S4Tfx-w-82e7lnmQcRV1c6SXOPB62u77brreal7-XfbGS210kw1KPcQzZjrxNRikX--UQxIHmYzGZcREzHiQCKy3kccqA4k-EEDPWocI-LoNnaRbObqY7BUDIRgVBypuM5B78_gpDJSIGUxUJzCcJEaC40yh5TN8Cd3lHg-b3DfrtTsDMbRvb7j8_vP33w8tk_7fUQnKpp4SmGEELLriDTRDa20Faz1d3fcjvubjv30qPETWtNUCUrev1LY7KiJ1q2wwX5Vys6XtGTFSV3ZpzPumP_tn4wD0nsNfXEdNC7zczbzYnWqdovlxeLRekvmbLSieSqnLIxL1ue4VIX1YCNvT1gQgoB2YNVgFzk0ZpRM6oWenVXCCQfOT0aEGia0LYQ8ukZhfCUHpOBAQjENjQxNMjZQb_TaBNI6l4xjQIZBel0EklHFyeKBaEM4siBxWkaMBUL5VBI7WqnhfqXLyikhwZuuEZlHV_fcLl0-mw45Xp9q2minf-RFlWUBiwKxjK5SZ01XoxMvGdhG2OzGDssVUW2Hq4brfOkW_Hny5_wutmG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                      - link [ref=f6e2209] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AYhdVWQAkgoiyKlGUksqiYZDzjOG6RhWZs59JLkubS28aa2JPEajJ2Z6ZJwyJ79kis4Dl4BXbs2CHxDmzYoZSLBGd1fh0d_UdfJtz--O3rl_u5JwQZ_YPuYNAyD-unhQ1jd2fERXwbzLS9HFxMhXEqEtUU3v7Ocllx-0Idzy7Oj4bKwlY8gFfj7iNkWiXTKmGrBC83e3S4Tfx-w-82e7lnmQcRV1c6SXOPB62u77brreal7-XfbGS210kw1KPcQzZjrxNRikX--UQxIHmYzGZcREzHiQCKy3kccqA4k-EEDPWocI-LoNnaRbObqY7BUDIRgVBypuM5B78_gpDJSIGUxUJzCcJEaC40yh5TN8Cd3lHg-b3DfrtTsDMbRvb7j8_vP33w8tk_7fUQnKpp4SmGEELLriDTRDa20Faz1d3fcjvubjv30qPETWtNUCUrev1LY7KiJ1q2wwX5Vys6XtGTFSV3ZpzPumP_tn4wD0nsNfXEdNC7zczbzYnWqdovlxeLRekvmbLSieSqnLIxL1ue4VIX1YCNvT1gQgoB2YNVgFzk0ZpRM6oWenVXCCQfOT0aEGia0LYQ8ukZhfCUHpOBAQjENjQxNMjZQb_TaBNI6l4xjQIZBel0EklHFyeKBaEM4siBxWkaMBUL5VBI7WqnhfqXLyikhwZuuEZlHV_fcLl0-mw45Xp9q2minf-RFlWUBiwKxjK5SZ01XoxMvGdhG2OzGDssVUW2Hq4brfOkW_Hny5_wutmG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_ls&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                        - img "ESR" [ref=f6e2210]
                      - generic [ref=f6e2212]:
                        - generic [ref=f6e2213]:
                          - link [aria-hidden] [ref=f6e2214] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AYhdVWQAkgoiyKlGUksqiYZDzjOG6RhWZs59JLkubS28aa2JPEajJ2Z6ZJwyJ79kis4Dl4BXbs2CHxDmzYoZSLBGd1fh0d_UdfJtz--O3rl_u5JwQZ_YPuYNAyD-unhQ1jd2fERXwbzLS9HFxMhXEqEtUU3v7Ocllx-0Idzy7Oj4bKwlY8gFfj7iNkWiXTKmGrBC83e3S4Tfx-w-82e7lnmQcRV1c6SXOPB62u77brreal7-XfbGS210kw1KPcQzZjrxNRikX--UQxIHmYzGZcREzHiQCKy3kccqA4k-EEDPWocI-LoNnaRbObqY7BUDIRgVBypuM5B78_gpDJSIGUxUJzCcJEaC40yh5TN8Cd3lHg-b3DfrtTsDMbRvb7j8_vP33w8tk_7fUQnKpp4SmGEELLriDTRDa20Faz1d3fcjvubjv30qPETWtNUCUrev1LY7KiJ1q2wwX5Vys6XtGTFSV3ZpzPumP_tn4wD0nsNfXEdNC7zczbzYnWqdovlxeLRekvmbLSieSqnLIxL1ue4VIX1YCNvT1gQgoB2YNVgFzk0ZpRM6oWenVXCCQfOT0aEGia0LYQ8ukZhfCUHpOBAQjENjQxNMjZQb_TaBNI6l4xjQIZBel0EklHFyeKBaEM4siBxWkaMBUL5VBI7WqnhfqXLyikhwZuuEZlHV_fcLl0-mw45Xp9q2minf-RFlWUBiwKxjK5SZ01XoxMvGdhG2OzGDssVUW2Hq4brfOkW_Hny5_wutmG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                          - link [ref=f6e2215] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AYhdVWQAkgoiyKlGUksqiYZDzjOG6RhWZs59JLkubS28aa2JPEajJ2Z6ZJwyJ79kis4Dl4BXbs2CHxDmzYoZSLBGd1fh0d_UdfJtz--O3rl_u5JwQZ_YPuYNAyD-unhQ1jd2fERXwbzLS9HFxMhXEqEtUU3v7Ocllx-0Idzy7Oj4bKwlY8gFfj7iNkWiXTKmGrBC83e3S4Tfx-w-82e7lnmQcRV1c6SXOPB62u77brreal7-XfbGS210kw1KPcQzZjrxNRikX--UQxIHmYzGZcREzHiQCKy3kccqA4k-EEDPWocI-LoNnaRbObqY7BUDIRgVBypuM5B78_gpDJSIGUxUJzCcJEaC40yh5TN8Cd3lHg-b3DfrtTsDMbRvb7j8_vP33w8tk_7fUQnKpp4SmGEELLriDTRDa20Faz1d3fcjvubjv30qPETWtNUCUrev1LY7KiJ1q2wwX5Vys6XtGTFSV3ZpzPumP_tn4wD0nsNfXEdNC7zczbzYnWqdovlxeLRekvmbLSieSqnLIxL1ue4VIX1YCNvT1gQgoB2YNVgFzk0ZpRM6oWenVXCCQfOT0aEGia0LYQ8ukZhfCUHpOBAQjENjQxNMjZQb_TaBNI6l4xjQIZBel0EklHFyeKBaEM4siBxWkaMBUL5VBI7WqnhfqXLyikhwZuuEZlHV_fcLl0-mw45Xp9q2minf-RFlWUBiwKxjK5SZ01XoxMvGdhG2OzGDssVUW2Hq4brfOkW_Hny5_wutmG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_logo&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                            - img "ESR" [ref=f6e2217]
                        - generic [ref=f6e2218]:
                          - link [aria-hidden] [ref=f6e2219] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AYhdVWQAkgoiyKlGUksqiYZDzjOG6RhWZs59JLkubS28aa2JPEajJ2Z6ZJwyJ79kis4Dl4BXbs2CHxDmzYoZSLBGd1fh0d_UdfJtz--O3rl_u5JwQZ_YPuYNAyD-unhQ1jd2fERXwbzLS9HFxMhXEqEtUU3v7Ocllx-0Idzy7Oj4bKwlY8gFfj7iNkWiXTKmGrBC83e3S4Tfx-w-82e7lnmQcRV1c6SXOPB62u77brreal7-XfbGS210kw1KPcQzZjrxNRikX--UQxIHmYzGZcREzHiQCKy3kccqA4k-EEDPWocI-LoNnaRbObqY7BUDIRgVBypuM5B78_gpDJSIGUxUJzCcJEaC40yh5TN8Cd3lHg-b3DfrtTsDMbRvb7j8_vP33w8tk_7fUQnKpp4SmGEELLriDTRDa20Faz1d3fcjvubjv30qPETWtNUCUrev1LY7KiJ1q2wwX5Vys6XtGTFSV3ZpzPumP_tn4wD0nsNfXEdNC7zczbzYnWqdovlxeLRekvmbLSieSqnLIxL1ue4VIX1YCNvT1gQgoB2YNVgFzk0ZpRM6oWenVXCCQfOT0aEGia0LYQ8ukZhfCUHpOBAQjENjQxNMjZQb_TaBNI6l4xjQIZBel0EklHFyeKBaEM4siBxWkaMBUL5VBI7WqnhfqXLyikhwZuuEZlHV_fcLl0-mw45Xp9q2minf-RFlWUBiwKxjK5SZ01XoxMvGdhG2OzGDssVUW2Hq4brfOkW_Hny5_wutmG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                          - link "Level Up Your iPad 10" [ref=f6e2220] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu00AYhdVWQAkgoiyKlGUksqiYZDzjOG6RhWZs59JLkubS28aa2JPEajJ2Z6ZJwyJ79kis4Dl4BXbs2CHxDmzYoZSLBGd1fh0d_UdfJtz--O3rl_u5JwQZ_YPuYNAyD-unhQ1jd2fERXwbzLS9HFxMhXEqEtUU3v7Ocllx-0Idzy7Oj4bKwlY8gFfj7iNkWiXTKmGrBC83e3S4Tfx-w-82e7lnmQcRV1c6SXOPB62u77brreal7-XfbGS210kw1KPcQzZjrxNRikX--UQxIHmYzGZcREzHiQCKy3kccqA4k-EEDPWocI-LoNnaRbObqY7BUDIRgVBypuM5B78_gpDJSIGUxUJzCcJEaC40yh5TN8Cd3lHg-b3DfrtTsDMbRvb7j8_vP33w8tk_7fUQnKpp4SmGEELLriDTRDa20Faz1d3fcjvubjv30qPETWtNUCUrev1LY7KiJ1q2wwX5Vys6XtGTFSV3ZpzPumP_tn4wD0nsNfXEdNC7zczbzYnWqdovlxeLRekvmbLSieSqnLIxL1ue4VIX1YCNvT1gQgoB2YNVgFzk0ZpRM6oWenVXCCQfOT0aEGia0LYQ8ukZhfCUHpOBAQjENjQxNMjZQb_TaBNI6l4xjQIZBel0EklHFyeKBaEM4siBxWkaMBUL5VBI7WqnhfqXLyikhwZuuEZlHV_fcLl0-mw45Xp9q2minf-RFlWUBiwKxjK5SZ01XoxMvGdhG2OzGDssVUW2Hq4brfOkW_Hny5_wutmG&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F6D1CBC2F-83D9-40B0-A907-2C2DBF1F1762%3Fstore_ref%3DSB_A04408622EBWB00VBMAU1-A03804301AWJTPHOA0AGD%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D0%26lp_asins%3DB0B87PN2TZ%2CB0BK13HC15%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D300032439638334%26i%3Daps%26aref%3DtHNXoR5Evy&ref_=sbx_be_s_3psl_mbd_mb1_hl&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                - generic [ref=f6e2225]:
                  - generic:
                    - generic:
                      - link [aria-hidden]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkuksog6MB7fIJVV2caACTUXGxKysQZ7ALfGdmYmIemCfdXnqNRH6L5Sn6BSdpX6An2GyulFav_Vd3TOr3POXwj2P33_dnOv9FhHgtcbTyaOdNyZVnaEw4MFSaIrf80b15NZnAjTJGV20jo6WIRrF0bdDgwQs2eqMYxgYIzGD5Gk1CSlJio1eLbrGvN93fK61th2S08L90PC3vA0Kz2aOGPLHHQc-8xqld_tFPbzjj_ni9IDvMZv06QWJeVnK4YBJUG6XpMkxDxKE8AIvYwCAhjBNFiBOV9U7pLEt51DtL6IeQTmFCchCCjBPLok4PdGEGAaMpDhKOGEgiBNOEk4Kr4yTF8cun2_ZbnH3mBYUQs7qPj-89ebH1_ulIt_3PkhYsbiyhMEIUSy2lQlBKGI9mxnfLRnDs3DQelFy9DNrG0DVd8a57-01LfGiNNBsNH_1dZYbo3R1tBvYVkumkvrqtO7DPSoZfOVpKGPu4UPuyvOM3ZUr282m9rfYOqMp5SweoaXpK5ACzattgh0wZCAZCERNJW2BaCJZEEV9ZZqmi9vDT4lC801fB1KCCJZtvpeVzo9dp2OIgAdQgHJDaE_s9vuUJoZ44ZdzUKfhn4Wr0Kq8eqKYT-gfhRqqtpUlYYoQFSNMx-zKGGaAdXeiTBTTqfPb7HZlXpCjv2OJ8tuL588vyD0WvPwPCY8r1mccu3_jKsszHwc-kuaXmRanrfYRLIi5FCNNJyxKs4_6U0D8fr1yDtxfgJWUdzJ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                      - link [ref=f6e2226] [cursor=pointer]:
                        - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkuksog6MB7fIJVV2caACTUXGxKysQZ7ALfGdmYmIemCfdXnqNRH6L5Sn6BSdpX6An2GyulFav_Vd3TOr3POXwj2P33_dnOv9FhHgtcbTyaOdNyZVnaEw4MFSaIrf80b15NZnAjTJGV20jo6WIRrF0bdDgwQs2eqMYxgYIzGD5Gk1CSlJio1eLbrGvN93fK61th2S08L90PC3vA0Kz2aOGPLHHQc-8xqld_tFPbzjj_ni9IDvMZv06QWJeVnK4YBJUG6XpMkxDxKE8AIvYwCAhjBNFiBOV9U7pLEt51DtL6IeQTmFCchCCjBPLok4PdGEGAaMpDhKOGEgiBNOEk4Kr4yTF8cun2_ZbnH3mBYUQs7qPj-89ebH1_ulIt_3PkhYsbiyhMEIUSy2lQlBKGI9mxnfLRnDs3DQelFy9DNrG0DVd8a57-01LfGiNNBsNH_1dZYbo3R1tBvYVkumkvrqtO7DPSoZfOVpKGPu4UPuyvOM3ZUr282m9rfYOqMp5SweoaXpK5ACzattgh0wZCAZCERNJW2BaCJZEEV9ZZqmi9vDT4lC801fB1KCCJZtvpeVzo9dp2OIgAdQgHJDaE_s9vuUJoZ44ZdzUKfhn4Wr0Kq8eqKYT-gfhRqqtpUlYYoQFSNMx-zKGGaAdXeiTBTTqfPb7HZlXpCjv2OJ8tuL588vyD0WvPwPCY8r1mccu3_jKsszHwc-kuaXmRanrfYRLIi5FCNNJyxKs4_6U0D8fr1yDtxfgJWUdzJ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_ls&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                        - img "Wayona" [ref=f6e2227]
                      - generic [ref=f6e2229]:
                        - generic [ref=f6e2230]:
                          - link [aria-hidden] [ref=f6e2231] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkuksog6MB7fIJVV2caACTUXGxKysQZ7ALfGdmYmIemCfdXnqNRH6L5Sn6BSdpX6An2GyulFav_Vd3TOr3POXwj2P33_dnOv9FhHgtcbTyaOdNyZVnaEw4MFSaIrf80b15NZnAjTJGV20jo6WIRrF0bdDgwQs2eqMYxgYIzGD5Gk1CSlJio1eLbrGvN93fK61th2S08L90PC3vA0Kz2aOGPLHHQc-8xqld_tFPbzjj_ni9IDvMZv06QWJeVnK4YBJUG6XpMkxDxKE8AIvYwCAhjBNFiBOV9U7pLEt51DtL6IeQTmFCchCCjBPLok4PdGEGAaMpDhKOGEgiBNOEk4Kr4yTF8cun2_ZbnH3mBYUQs7qPj-89ebH1_ulIt_3PkhYsbiyhMEIUSy2lQlBKGI9mxnfLRnDs3DQelFy9DNrG0DVd8a57-01LfGiNNBsNH_1dZYbo3R1tBvYVkumkvrqtO7DPSoZfOVpKGPu4UPuyvOM3ZUr282m9rfYOqMp5SweoaXpK5ACzattgh0wZCAZCERNJW2BaCJZEEV9ZZqmi9vDT4lC801fB1KCCJZtvpeVzo9dp2OIgAdQgHJDaE_s9vuUJoZ44ZdzUKfhn4Wr0Kq8eqKYT-gfhRqqtpUlYYoQFSNMx-zKGGaAdXeiTBTTqfPb7HZlXpCjv2OJ8tuL588vyD0WvPwPCY8r1mccu3_jKsszHwc-kuaXmRanrfYRLIi5FCNNJyxKs4_6U0D8fr1yDtxfgJWUdzJ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                          - link [ref=f6e2232] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkuksog6MB7fIJVV2caACTUXGxKysQZ7ALfGdmYmIemCfdXnqNRH6L5Sn6BSdpX6An2GyulFav_Vd3TOr3POXwj2P33_dnOv9FhHgtcbTyaOdNyZVnaEw4MFSaIrf80b15NZnAjTJGV20jo6WIRrF0bdDgwQs2eqMYxgYIzGD5Gk1CSlJio1eLbrGvN93fK61th2S08L90PC3vA0Kz2aOGPLHHQc-8xqld_tFPbzjj_ni9IDvMZv06QWJeVnK4YBJUG6XpMkxDxKE8AIvYwCAhjBNFiBOV9U7pLEt51DtL6IeQTmFCchCCjBPLok4PdGEGAaMpDhKOGEgiBNOEk4Kr4yTF8cun2_ZbnH3mBYUQs7qPj-89ebH1_ulIt_3PkhYsbiyhMEIUSy2lQlBKGI9mxnfLRnDs3DQelFy9DNrG0DVd8a57-01LfGiNNBsNH_1dZYbo3R1tBvYVkumkvrqtO7DPSoZfOVpKGPu4UPuyvOM3ZUr282m9rfYOqMp5SweoaXpK5ACzattgh0wZCAZCERNJW2BaCJZEEV9ZZqmi9vDT4lC801fB1KCCJZtvpeVzo9dp2OIgAdQgHJDaE_s9vuUJoZ44ZdzUKfhn4Wr0Kq8eqKYT-gfhRqqtpUlYYoQFSNMx-zKGGaAdXeiTBTTqfPb7HZlXpCjv2OJ8tuL588vyD0WvPwPCY8r1mccu3_jKsszHwc-kuaXmRanrfYRLIi5FCNNJyxKs4_6U0D8fr1yDtxfgJWUdzJ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_logo&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                            - img "Wayona" [ref=f6e2234]
                        - generic [ref=f6e2235]:
                          - link [aria-hidden] [ref=f6e2236] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkuksog6MB7fIJVV2caACTUXGxKysQZ7ALfGdmYmIemCfdXnqNRH6L5Sn6BSdpX6An2GyulFav_Vd3TOr3POXwj2P33_dnOv9FhHgtcbTyaOdNyZVnaEw4MFSaIrf80b15NZnAjTJGV20jo6WIRrF0bdDgwQs2eqMYxgYIzGD5Gk1CSlJio1eLbrGvN93fK61th2S08L90PC3vA0Kz2aOGPLHHQc-8xqld_tFPbzjj_ni9IDvMZv06QWJeVnK4YBJUG6XpMkxDxKE8AIvYwCAhjBNFiBOV9U7pLEt51DtL6IeQTmFCchCCjBPLok4PdGEGAaMpDhKOGEgiBNOEk4Kr4yTF8cun2_ZbnH3mBYUQs7qPj-89ebH1_ulIt_3PkhYsbiyhMEIUSy2lQlBKGI9mxnfLRnDs3DQelFy9DNrG0DVd8a57-01LfGiNNBsNH_1dZYbo3R1tBvYVkumkvrqtO7DPSoZfOVpKGPu4UPuyvOM3ZUr282m9rfYOqMp5SweoaXpK5ACzattgh0wZCAZCERNJW2BaCJZEEV9ZZqmi9vDT4lC801fB1KCCJZtvpeVzo9dp2OIgAdQgHJDaE_s9vuUJoZ44ZdzUKfhn4Wr0Kq8eqKYT-gfhRqqtpUlYYoQFSNMx-zKGGaAdXeiTBTTqfPb7HZlXpCjv2OJ8tuL588vyD0WvPwPCY8r1mccu3_jKsszHwc-kuaXmRanrfYRLIi5FCNNJyxKs4_6U0D8fr1yDtxfgJWUdzJ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_bkgd&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
                          - link "Fast Charging Nylon Braided Data Cables for iphone" [ref=f6e2237] [cursor=pointer]:
                            - /url: https://sponsored-ads.amazon.in/clk/?_encoding=UTF8&p=eAFdkMtu2kAUhpWkl5RehFikEkuksog6MB7fIJVV2caACTUXGxKysQZ7ALfGdmYmIemCfdXnqNRH6L5Sn6BSdpX6An2GyulFav_Vd3TOr3POXwj2P33_dnOv9FhHgtcbTyaOdNyZVnaEw4MFSaIrf80b15NZnAjTJGV20jo6WIRrF0bdDgwQs2eqMYxgYIzGD5Gk1CSlJio1eLbrGvN93fK61th2S08L90PC3vA0Kz2aOGPLHHQc-8xqld_tFPbzjj_ni9IDvMZv06QWJeVnK4YBJUG6XpMkxDxKE8AIvYwCAhjBNFiBOV9U7pLEt51DtL6IeQTmFCchCCjBPLok4PdGEGAaMpDhKOGEgiBNOEk4Kr4yTF8cun2_ZbnH3mBYUQs7qPj-89ebH1_ulIt_3PkhYsbiyhMEIUSy2lQlBKGI9mxnfLRnDs3DQelFy9DNrG0DVd8a57-01LfGiNNBsNH_1dZYbo3R1tBvYVkumkvrqtO7DPSoZfOVpKGPu4UPuyvOM3ZUr282m9rfYOqMp5SweoaXpK5ACzattgh0wZCAZCERNJW2BaCJZEEV9ZZqmi9vDT4lC801fB1KCCJZtvpeVzo9dp2OIgAdQgHJDaE_s9vuUJoZ44ZdzUKfhn4Wr0Kq8eqKYT-gfhRqqtpUlYYoQFSNMx-zKGGaAdXeiTBTTqfPb7HZlXpCjv2OJ8tuL588vyD0WvPwPCY8r1mccu3_jKsszHwc-kuaXmRanrfYRLIi5FCNNJyxKs4_6U0D8fr1yDtxfgJWUdzJ&v=c1&r=https%3A%2F%2Fwww.amazon.in%2Fstores%2Fpage%2F60E09EF3-A1B4-4E23-96FE-0C25173AD7CC%3Fstore_ref%3DSB_A0420255ELTH4XKSNG61-A0012581LYIFSP4YBR8I%26pd_rd_plhdr%3Dt%26hsa_cr_id%3D7797683102%26lp_asins%3DB07JW1Y6XV%2CB07JW9H4J1%2CB07LGT55SJ%26lp_query%3DTablet%26lp_slot%3Ddesktop-hsa-3psl%26sdp_ad_group%3D20003925610003%26i%3Daps%26aref%3DJVc3yjQTWN&ref_=sbx_be_s_3psl_mbd_mb2_hl&pd_rd_w=vP1Pe&content-id=amzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892%3Aamzn1.sym.e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_p=e3b1209d-74b7-4fc9-bd01-2d594919a892&pf_rd_r=QPBZSYWTA9C2DC38G79B&pd_rd_wg=xdaJV&pd_rd_r=f1620754-eea0-414d-b53b-f4d2ba577167
          - generic [ref=f6e2246]:
            - heading "Need help?" [level=2] [ref=f6e2249]
            - generic [ref=f6e2250]:
              - link "Visit the help section" [ref=f6e2251] [cursor=pointer]:
                - /url: /gp/help/customer/display.html?nodeId=201889520
              - text: or
              - link "contact us" [ref=f6e2252] [cursor=pointer]:
                - /url: /gp/help/customer/contact-us
        - link "Go back to filtering menu" [ref=f6e2256] [cursor=pointer]:
          - /url: "#s-skipLinkTargetForFilterOptions"
      - dialog "Filters" [ref=f6e2257]:
        - link "Skip to main search results" [ref=f6e2259] [cursor=pointer]:
          - /url: "#s-skipLinkTargetForMainSearchResults"
  - complementary "Your recently viewed items and featured recommendations" [ref=f6e2260]:
    - generic [ref=f6e2268]:
      - heading "See personalized recommendations" [level=2] [ref=f6e2269]
      - link "Sign in" [ref=f6e2272] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0
      - generic [ref=f6e2273]:
        - text: New customer?
        - link "Start here." [ref=f6e2274] [cursor=pointer]:
          - /url: https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex
  - generic [ref=f6e2275]:
    - button "Back to top" [ref=f6e2276] [cursor=pointer]
    - generic [ref=f6e2278]:
      - generic [ref=f6e2279]:
        - heading "Get to Know Us" [level=6] [ref=f6e2280]
        - list [ref=f6e2281]:
          - listitem [ref=f6e2282]:
            - link "About Amazon" [ref=f6e2283] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f6e2284]:
            - link "Careers" [ref=f6e2285] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=f6e2286]:
            - link "Press Releases" [ref=f6e2287] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f6e2288]:
            - link "Amazon Science" [ref=f6e2289] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=f6e2291]:
        - heading "Connect with Us" [level=6] [ref=f6e2292]
        - list [ref=f6e2293]:
          - listitem [ref=f6e2294]:
            - link "Facebook" [ref=f6e2295] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=f6e2296]:
            - link "Twitter" [ref=f6e2297] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=f6e2298]:
            - link "Instagram" [ref=f6e2299] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=f6e2301]:
        - heading "Make Money with Us" [level=6] [ref=f6e2302]
        - list [ref=f6e2303]:
          - listitem [ref=f6e2304]:
            - link "Sell on Amazon" [ref=f6e2305] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=f6e2306]:
            - link "Sell under Amazon Accelerator" [ref=f6e2307] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=f6e2308]:
            - link "Protect and Build Your Brand" [ref=f6e2309] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=f6e2310]:
            - link "Amazon Global Selling" [ref=f6e2311] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=f6e2312]:
            - link "Supply to Amazon" [ref=f6e2313] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=f6e2314]:
            - link "Become an Affiliate" [ref=f6e2315] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=f6e2316]:
            - link "Fulfilment by Amazon" [ref=f6e2317] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=f6e2318]:
            - link "Advertise Your Products" [ref=f6e2319] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=f6e2320]:
            - link "Amazon Pay on Merchants" [ref=f6e2321] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant?ref_=footer_mm_apay
      - generic [ref=f6e2323]:
        - heading "Let Us Help You" [level=6] [ref=f6e2324]
        - list [ref=f6e2325]:
          - listitem [ref=f6e2326]:
            - link "Your Account" [ref=f6e2327] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=f6e2328]:
            - link "Returns Centre" [ref=f6e2329] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=f6e2330]:
            - link "Recalls and Product Safety Alerts" [ref=f6e2331] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=f6e2332]:
            - link "100% Purchase Protection" [ref=f6e2333] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=f6e2334]:
            - link "Amazon App Download" [ref=f6e2335] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=f6e2336]:
            - link "Help" [ref=f6e2337] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=f6e2339]:
      - link "Amazon India Home" [ref=f6e2342] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=f6e2345]:
        - generic [ref=f6e2346]:
          - link "Choose a language for shopping. Current selection is English." [ref=f6e2347] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=f6e2349]: English
          - button "Expand to Change Language or Country" [ref=f6e2350] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=f6e2351] [cursor=pointer]:
          - generic [ref=f6e2353]: India
    - generic "More on Amazon" [ref=f6e2354]:
      - generic "More on Amazon" [ref=f6e2355]:
        - list [ref=f6e2356]:
          - listitem [ref=f6e2357]:
            - link [ref=f6e2358] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=f6e2359]
              - generic [ref=f6e2360]: Books, art& collectibles
          - listitem [aria-hidden] [ref=f6e2361]
          - listitem [ref=f6e2362]:
            - link [ref=f6e2363] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=f6e2364]
              - generic [ref=f6e2365]: Scalable CloudComputing Services
          - listitem [aria-hidden] [ref=f6e2366]
          - listitem [ref=f6e2367]:
            - link [ref=f6e2368] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=f6e2369]
              - generic [ref=f6e2370]: DownloadAudio Books
          - listitem [aria-hidden] [ref=f6e2371]
          - listitem [ref=f6e2372]:
            - link [ref=f6e2373] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=f6e2374]
              - generic [ref=f6e2375]: Movies, TV& Celebrities
        - list [ref=f6e2376]:
          - listitem [ref=f6e2377]:
            - link [ref=f6e2378] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=f6e2379]
              - generic [ref=f6e2380]: DesignerFashion Brands
          - listitem [aria-hidden] [ref=f6e2381]
          - listitem [ref=f6e2382]:
            - link [ref=f6e2383] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=f6e2384]
              - generic [ref=f6e2385]: Everything ForYour Business
          - listitem [aria-hidden] [ref=f6e2386]
          - listitem [ref=f6e2387]:
            - link "Amazon Music Stream millions of songs" [ref=f6e2388] [cursor=pointer]:
              - /url: /music/player?ref=footer_apm
              - heading "Amazon Music" [level=5] [ref=f6e2389]
              - generic [ref=f6e2390]: Stream millions of songs
          - listitem [aria-hidden] [ref=f6e2391]
          - listitem [aria-hidden] [ref=f6e2392]
    - generic [ref=f6e2393]:
      - list [ref=f6e2394]:
        - listitem [ref=f6e2395]:
          - link "Conditions of Use & Sale" [ref=f6e2396] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=f6e2397]:
          - link "Privacy Notice" [ref=f6e2398] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=f6e2399]:
          - link "Interest-Based Ads" [ref=f6e2400] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=f6e2401]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=f6e2403]:
    - iframe [ref=f8e2]
```

# Test source

```ts
  496 | 		let mismatched:number = 0;
  497 | 		for (const product of results) {
  498 | 			const filter:string = genericUtility.safeLower(product.get("filter"));
  499 | 			const title:string = genericUtility.safeLower(product.get("title"));
  500 | 			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
  501 | 			const about :string= genericUtility.safeLower(product.get("about"));
  502 | 			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
  503 | 			const match = displayTypeMatch(filter, { title, keyFeatures, about, techDetails });
  504 | 
  505 | 			// 4. Comparable: no Display Type row and no mention of the filter in the text means nothing can be said.
  506 | 			if (match.status === "unknown") {
  507 | 				console.warn(`[${testName}] No Display Type row and no mention of '${filter}' on product '${title}'; not counting it as a mismatch`);
  508 | 				skipped++;
  509 | 				continue;
  510 | 			}
  511 | 			compared++;
  512 | 
  513 | 			if (match.status === "mismatch") {
  514 | 				mismatched++;
  515 | 				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
  516 | 				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
  517 | 				console.debug(`[${testName}] About: ${about}`);
  518 | 				console.debug(`[${testName}] Tech Details: ${techDetails}`);
  519 | 
  520 | 				expect.soft(match.status, `Filter '${filter}' does not fit the product (Display Type row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
  521 | 			} else if (match.source === "row") {
  522 | 				console.log(`[${testName}] Filter '${filter}' found in the Display Type row (${match.rowValue}) on '${title.slice(0, 60)}'`);
  523 | 			} else {
  524 | 				console.log(`[${testName}] Filter '${filter}' matched from the product text only (weak: there is no Display Type row) on '${title.slice(0, 60)}'`);
  525 | 			}
  526 | 		}
  527 | 		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
  528 | 		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
  529 | 		requireSome(compared, 'At least one product could be compared with the Display Type filter');
  530 | 
  531 | 	});
  532 | 
  533 | 
  534 | 
  535 | if (appliesTo("Rear Camera Photo Sensor Resolution", searchTerm)) test(`${searchTerm}: verifyingRearCameraPhotoSensorResolutionFilterFunctionality `,async ({page},testInfo)=> {
  536 | 		
  537 | 				
  538 | 		
  539 | 	  const landingPage = new AmazonLandingPage(page);
  540 |   const productPage = new ProductListingPage(page);
  541 |   const genericUtility = new GenericUtility(page,testInfo);
  542 | 	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  543 |   const testName: string = testInfo.title;
  544 | 
  545 | 	
  546 | 		await landingPage.openingLandingPage();
  547 | 		await genericUtility.clearBlockers();
  548 | 		await landingPage.givingInputWithinSearchBar(searchTerm);
  549 | 		// await genericUtility.moveMouseLikeHuman();
  550 | 		await landingPage.clickingOnSubmitSearchButton();
  551 | 
  552 | 		await genericUtility.clearBlockers();
  553 | 		await genericUtility.requireFilter("Rear Camera Photo Sensor Resolution");
  554 | 
  555 | 
  556 | 
  557 | 		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.listMobilePhonePrimaryCameraResolutionOptionsBy,"mobilephoneprimarycameraresolution");
  558 | 
  559 | 		// 1. Filter applied: every option should have been clicked and shown as applied.
  560 | 		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
  561 | 		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
  562 | 		results = genericUtility.onlyCapturedProducts(results, testName);
  563 | 		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
  564 | 		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');
  565 | 
  566 | 
  567 |     		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
  568 | 		
  569 | 
  570 | 		let compared:number = 0;
  571 | 		let skipped:number = 0;
  572 | 		let mismatched:number = 0;
  573 | 		for (const product of results) {
  574 | 			const filter:string = genericUtility.safeLower(product.get("filter"));
  575 | 			const title:string = genericUtility.safeLower(product.get("title"));
  576 | 			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
  577 | 			const about :string= genericUtility.safeLower(product.get("about"));
  578 | 			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
  579 | 			const match = rangeMatch(filter, ["rear facing camera photo sensor resolution"], { title, keyFeatures, about, techDetails });
  580 | 
  581 | 			// 4. Comparable: without a Camera Resolution row in the spec table nothing can be said, so the product is skipped.
  582 | 			if (match.status === "unknown") {
  583 | 				console.warn(`[${testName}] No usable Camera Resolution row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
  584 | 				skipped++;
  585 | 				continue;
  586 | 			}
  587 | 			compared++;
  588 | 
  589 | 			if (match.status === "mismatch") {
  590 | 				mismatched++;
  591 | 				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
  592 | 				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
  593 | 				console.debug(`[${testName}] About: ${about}`);
  594 | 				console.debug(`[${testName}] Tech Details: ${techDetails}`);
  595 | 
> 596 | 				expect.soft(match.status, `Filter '${filter}' does not fit the product (Camera Resolution row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
      |                                                                                                                                                     ^ Error: Filter 'up to 3 mp' does not fit the product (Camera Resolution row says: 13 mp): lenovo yoga tab plus smartchoice ai tablet with pen + keyboard |12.7" display, 3
  597 | 			} else {
  598 | 				console.log(`[${testName}] Filter '${filter}' fits the Camera Resolution row (${match.rowValue}) on '${title.slice(0, 60)}'`);
  599 | 			}
  600 | 		}
  601 | 		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
  602 | 		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
  603 | 		requireSome(compared, 'At least one product could be compared with the Camera Resolution filter');
  604 | 
  605 | 	});
  606 | 
  607 | 
  608 | if (appliesTo("Processor Speed", searchTerm)) test(`${searchTerm}: verifyingProcessorSpeedFilterFunctionality `,async ({page},testInfo)=> {
  609 | 		
  610 | 				
  611 | 		
  612 | 	  const landingPage = new AmazonLandingPage(page);
  613 |   const productPage = new ProductListingPage(page);
  614 |   const genericUtility = new GenericUtility(page,testInfo);
  615 | 	const sharedFilterFlows = new SharedFilterFlows(page,testInfo);
  616 |   const testName: string = testInfo.title;
  617 | 
  618 | 	
  619 | 		await landingPage.openingLandingPage();
  620 | 		await genericUtility.clearBlockers();
  621 | 		await landingPage.givingInputWithinSearchBar(searchTerm);
  622 | 		// await genericUtility.moveMouseLikeHuman();
  623 | 		await landingPage.clickingOnSubmitSearchButton();
  624 | 
  625 | 		await genericUtility.clearBlockers();
  626 | 		const heading: string = headingFor("Processor Speed", searchTerm);
  627 | 		await genericUtility.requireFilter(heading);
  628 | 
  629 | 
  630 | 
  631 | 		let results:Map<string,string | number |boolean |null |string[]>[] =await sharedFilterFlows.applyFilterAndValidateProductsWithResult(productPage.getFilterOptionsByHeading(heading), heading);
  632 | 
  633 | 		// 1. Filter applied: every option should have been clicked and shown as applied.
  634 | 		expect.soft(sharedFilterFlows.notAppliedOptions.length, `Every filter option was applied (not applied: ${sharedFilterFlows.notAppliedOptions.join(', ') || 'none'})`).toBe(0);
  635 | 		// 2. Data extracted: drop products whose page details were not read (not a filter defect).
  636 | 		results = genericUtility.onlyCapturedProducts(results, testName);
  637 | 		// 3. List has data: nothing validated means nothing was checked, so fail instead of passing.
  638 | 		requireSome(results.length, 'At least one product was validated (the filter returned products and a product page could be read)');
  639 | 
  640 | 
  641 |     		console.log(`[${testName}] Retrieved ${results.length} results from applyFilterAndValidateProductsWithResult.`);
  642 | 		
  643 | 
  644 | 		let compared:number = 0;
  645 | 		let skipped:number = 0;
  646 | 		let mismatched:number = 0;
  647 | 		for (const product of results) {
  648 | 			const filter:string = genericUtility.safeLower(product.get("filter"));
  649 | 			const title:string = genericUtility.safeLower(product.get("title"));
  650 | 			const keyFeatures:string = genericUtility.safeLower(product.get("keyFeatures"));
  651 | 			const about :string= genericUtility.safeLower(product.get("about"));
  652 | 			const techDetails:string = genericUtility.safeLower(product.get("techDetails"));
  653 | 			const match = rangeMatch(filter, ["processor speed"], { title, keyFeatures, about, techDetails });
  654 | 
  655 | 			// 4. Comparable: without a Processor Speed row in the spec table nothing can be said, so the product is skipped.
  656 | 			if (match.status === "unknown") {
  657 | 				console.warn(`[${testName}] No usable Processor Speed row for filter '${filter}' on product '${title}'; not counting it as a mismatch`);
  658 | 				skipped++;
  659 | 				continue;
  660 | 			}
  661 | 			compared++;
  662 | 
  663 | 			if (match.status === "mismatch") {
  664 | 				mismatched++;
  665 | 				console.error(`[${testName}] Mismatch found for filter '${filter}' on product '${title}' (row says: ${match.rowValue})`);
  666 | 				console.debug(`[${testName}] Key Features: ${keyFeatures}`);
  667 | 				console.debug(`[${testName}] About: ${about}`);
  668 | 				console.debug(`[${testName}] Tech Details: ${techDetails}`);
  669 | 
  670 | 				expect.soft(match.status, `Filter '${filter}' does not fit the product (Processor Speed row says: ${match.rowValue}): ${title.slice(0, 80)}`).toBe("match");
  671 | 			} else {
  672 | 				console.log(`[${testName}] Filter '${filter}' fits the Processor Speed row (${match.rowValue}) on '${title.slice(0, 60)}'`);
  673 | 			}
  674 | 		}
  675 | 		console.log(`[${testName}] Summary: ${results.length} products read, ${compared} compared, ${skipped} skipped (nothing to compare), ${mismatched} did not fit the filter.`);
  676 | 		// 5. Something compared: if no product could be compared, nothing was checked, so fail instead of passing.
  677 | 		requireSome(compared, 'At least one product could be compared with the Processor Speed filter');
  678 | 
  679 | 	});
  680 | 
  681 | }
  682 | 
```