# Hanu Travels Website

Static export of the Hanu Travels website currently used for `hanutravels.in`.

## Structure

- `index.html` - Home page
- `about-us/` - About page
- `services-tariff/` - Tariff page
- `packages/` - Packages redirect section
- `testimonial/` - Testimonials
- `faq/` - FAQ
- `contact-us/` - Contact page
- `enquiry/` - Enquiry page with fare estimator iframe
- `taxi/j/` - Standalone fare estimator
- `wp-content/` - Required theme, plugin, font, image and upload assets
- `wp-includes/` - Required jQuery assets from the WordPress export
- `docs/` - Cleanup notes and open points

## Local Preview

Run a static server from this folder and open the printed local URL:

```powershell
python -m http.server 8080
```

Then visit:

```text
http://127.0.0.1:8080/
```

## Notes

This is not a live WordPress source tree. It is a static HTML export that still depends on WordPress-generated assets under `wp-content` and `wp-includes`.
