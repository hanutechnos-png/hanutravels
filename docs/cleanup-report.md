# Hanu Travels Cleanup Report

Backup created before cleanup:

- `D:\5_Development\hanutravels-backup-20260725-210324.zip`

Current working folder size after adding optimized assets:

- `65.57 MB` across `200` files
- Original uploaded images are still retained for review/rollback; active pages now use optimized copies where updated.

## Completed

- Removed local Visual Studio metadata folder `.vs/`.
- Removed `xmlrpc0db0.php`, which is not needed for a static website.
- Removed exported `wp-json/` API and oEmbed dump files.
- Removed duplicate `services-tariff/2022/` media copies after confirming pages reference `wp-content/uploads`.
- Renamed `pakages/` to `packages/`.
- Updated page links and visible text from `Pakages` to `Packages`.
- Removed exported `wp-json` alternate/oEmbed metadata links from pages.
- Fixed malformed Google Maps links from `https://https://...` to the existing short Maps URL.
- Replaced common encoding glitches such as `Donâ€™t` and `Â©`.
- Added `README.md`, `.gitignore`, `robots.txt`, and `sitemap.xml`.
- Added page-level meta descriptions and hidden H1 headings for SEO/accessibility without changing the visible theme.
- Standardized public contact email to `info@hanutravels.in`.
- Normalized telephone links to `tel:+919976555520`.
- Normalized WhatsApp links to `https://wa.me/919976555520` with a pre-filled booking message.
- Added official Instagram and YouTube links across the site.
- Added the official WhatsApp Channel link across the site footer social icons.
- Hid remaining dummy social links with missing or placeholder URLs until real profiles are available.
- Updated the fare estimator title, removed unused Google Maps API loading, fixed script load order, required core booking fields, and added a WhatsApp enquiry handoff after fare calculation.
- Added a static contact-page enquiry form that opens a pre-filled WhatsApp booking message.
- Removed missing generated-thumbnail candidates from image `srcset` attributes while keeping valid full-size images.
- Removed the WordPress emoji loader and neutralized unused static-export AJAX/REST endpoint values.
- Updated the fare estimator to apply one-way and round-trip minimum KM rules, show billable distance, and include extra-charge notes in the WhatsApp handoff.
- Added business service and client-category content for IT staff transportation, taxi/outstation service, government/PSU clients, airport operations and EV fleet support.
- Standardized shared typography defaults and loaded the site override stylesheet on all pages, including the fare estimator.
- Replaced the IT staff transportation, taxi/outstation, government/PSU and EV support card images with the 2026 uploaded service visuals.
- Added a Services/Tariff page business-services band with IT staff transport, taxi/outstation, government/airport and EV fleet support plus a custom quote CTA.
- Replaced the old copied Privacy Policy content with a Hanu Travels-specific customer-data policy and removed unrelated company/app references.
- Updated the home page hero message, service tags and first service cards to reflect taxi, outstation, staff transport, airport, government/PSU and business quote services.
- Replaced the home hero tourism-style person image with a Traveller vehicle image, reduced first-screen tags and tightened hero spacing.
- Reduced the first three home service-card heights and spacing for a more compact first screen.
- Renamed the home tariff-card section heading from "Our Tariffs" to "Services & Clients We Support".
- Replaced the home tariff/pricing cards with service and client-support cards for IT staff transportation, taxi/outstation travel, government/PSU clients, airport/group transfers, EV support and business transport contracts.
- Restored the home Packages section after converting the separate tariff section, and added fade-up motion to the new services/client cards.
- Updated the home service/client cards to use the shared site typography and trigger their fade-up animation only when the cards enter the viewport.
- Restored the footer taxi logo visibility under the comfortable journey text and strengthened home testimonial autoplay.
- Added individual package pages for Ooty, Isha, Valparai, Kodaikanal, Munnar and Maruthamalai, converted the package hub into a real page and linked the home package cards to the new pages.
- Updated the package hub and all package detail pages to use a full header menu matching the home page navigation.
- Added the matching blue top contact bar to package pages and aligned package header width/spacing with the home page header.
- Standardized rendered base typography across the checked pages: body text 14px, header menu 16px and Request Quote 20px.
- Standardized the main header across home, tariff, about, package, testimonial, FAQ, contact and enquiry pages: top-bar wording, stylesheet order, logo/menu/button sizing and package-page header geometry now match.
- Restored the Tariff page header row to the same centered width and alignment used by the home and about pages.
- Added a version parameter to the shared override stylesheet links so browsers load the latest synchronized header CSS instead of cached older rules.
- Standardized normal paragraph/list/card text color to a consistent dark gray while preserving black headings, blue active links and white CTA text.
- Updated the Tariff page with a clearer hero subtitle, `Taxi Tariff & Vehicle Options` heading, stronger business/contract transport copy, `Request Quote` CTAs and cleaner booking notes/table wording.
- Standardized Tariff page heading, fare text, CTA and business-card typography, and added scroll-triggered reveal animation for the new Tariff support blocks.
- Removed the visible home hero headline, service tags and hero CTA buttons per review feedback.
- Tightened the Services/Tariff page body layout by reducing vehicle card width, image height, title size and animation travel distance.
- Completed a mobile layout pass: fixed package-page header overflow, made package navigation phone-friendly and added safe mobile padding to the Tariff hero text.
- Refreshed the About Us page with current Hanu Travels positioning, service/client support details, trust points, quote CTAs and matching reveal animation.
- Added subtle About page animation where useful: banner title entrance, intro media reveal, staggered support cards and reduced-motion support.
- Refreshed the FAQ page with current taxi, outstation, staff transportation, government/PSU, EV fleet and quote-process questions using matching accordion styling and scroll reveal animation.
- Refreshed the package hub with clearer Coimbatore travel package positioning, destination-use copy, stronger quote actions and matching scroll reveal animation.
- Removed the standalone Feedback page from site navigation, footer quick links and sitemap.
- Corrected the custom package-page header menu alignment to match the home and testimonial headers after removing Feedback.
- Refreshed the Contact Us page with current contact cards, quote guidance, a cleaner WhatsApp enquiry form and matching scroll reveal animation.
- Removed the Enquiry dropdown from the Contact Us navigation item while keeping Request Quote links connected to the enquiry page.
- Updated the home hero foreground image to the new 2026 family travel artwork, saved a site-ready transparent copy and adjusted desktop/mobile sizing so the image is not clipped.
- Refreshed the Request Quote page with a clearer quotation hero, expanded WhatsApp quote form, support notes, retained fare estimator and matching scroll reveal animation.
- Refreshed the Testimonial page with a cleaner customer-feedback layout, auto-changing featured review, review cards, quote CTA and matching responsive reveal animation.
- Cleaned the shared footer wording, replaced the subscribe copy with follow-update messaging, confirmed the taxi logo is visible, linked Hanu Technos and removed the remaining horizontal page overflow.
- Ran a local link/asset QA pass: no missing internal page or asset references were found, app placeholders now show "App Coming Soon" without jumping the page, and home/about service-card wrappers now point to the Services/Tariff page.
- Refreshed the Terms & Conditions page with current Hanu Travels booking, quotation, payment, cancellation, airport, business transport, government/PSU, EV fleet and customer responsibility terms, plus matching responsive styling and reveal animation.
- Refreshed SEO metadata across active pages: page titles, meta descriptions, canonical URLs, Open Graph/Twitter preview tags, package preview images and hidden schema descriptions now match the current Hanu Travels services.
- Refreshed `sitemap.xml` with current active pages, package detail URLs, 2026-07-26 last-modified dates, update frequency and valid XML formatting.
- Ran a full local QA pass across active pages: all checked routes return `200`, local `href/src` targets resolve, desktop/mobile overflow checks pass, package/detail navigation is clean and Request Quote form assets/scripts are present.
- Removed unused exported Elementor frontend runtime scripts that were requesting missing dynamic chunks, added a static-export visibility safeguard for old Elementor animation wrappers and added a small MutationObserver guard for old plugin code.
- Added `llms.txt` with an AI-readable Hanu Travels service summary, key pages, package URLs, quotation details and official contact/social channels.
- Added machine-readable structured data for the local business/home page, Services/Tariff page, FAQ page, package hub and each package detail page.
- Added a site-wide skip link, visible keyboard focus states, reduced-motion support, safer external-link handling, icon-only contact link labels and current-page navigation state support.
- Added home hero image preload, deferred local non-critical scripts and bumped shared CSS/JS cache versions for the SEO/accessibility/performance pass.
- Added the public taxi fare estimator to the sitemap and gave it the same hidden H1 convention used across the site.
- Re-ran validation after the SEO/accessibility pass: all active routes plus `robots.txt`, `llms.txt` and `sitemap.xml` return `200`; JSON-LD parses; active pages have title, description, canonical, robots, H1 and skip-link coverage; no missing local `href/src` references were found.
- Created optimized WebP/JPG versions of the heavy home hero, service, package and tariff vehicle images while keeping the original branding and visual layout.
- Rewired active pages to use optimized image assets, lazy-loaded non-hero imagery and added image dimensions where practical to reduce layout shift.
- Removed unused AccessPress frontend CSS/JS references from the active static pages.
- Added `.htaccess` caching, compression and basic security headers for Apache/cPanel hosting.
- Fixed CSS `url(...)` paths on subpages so font/mask assets resolve correctly from nested folders.
- Removed missing Astra `.ttf`/`.svg` font fallbacks and kept the existing local `.woff` font reference.
- Re-ran performance-pass QA: all checked active routes return `200`, local `href/src` targets resolve, CSS `url(...)` targets resolve, JSON-LD parses, active pages retain title/description/canonical/H1 coverage, and old heavy image/plugin references are no longer present.

## Still Needs Review

- Facebook is still hidden because no official Hanu Travels profile URL is available yet.
- The empty `blogs/` directory is still present and can be removed in a final filesystem cleanup pass.
- The old `.tmp-restore-packages-0c400171fcb64acba9d4e58bf1a29e79/` folder is still present and can be removed after confirming no rollback copy is needed.
- Enquiry page embeds the fare estimator and includes a short WhatsApp enquiry form below it.
- Fare estimator still needs exact business confirmation for toll, parking, permit, hill station, waiting and driver allowance charges.
- A browser console MutationObserver warning may still appear on the Request Quote page during local QA, but no matching local source remains after removing unused exported runtimes; visible layout and quote form checks pass.
- The static pages still contain large inline CSS/JS blocks generated by WordPress and Elementor.
- After deployment, verify Apache honors `.htaccess` caching/compression rules on the hosting control panel.
- After deployment, run Google Search Console URL inspection and a Rich Results Test on the live domain to confirm crawlers see the new JSON-LD and `llms.txt`.
