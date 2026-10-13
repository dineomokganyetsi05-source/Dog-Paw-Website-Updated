# Dog Paw Website Prototype

## Files
- Eight HTML pages are included.
- `css/style.css` is the shared responsive stylesheet linked from every HTML page.
- `js/script.js` contains the mobile navigation, service and dog-care search filters, enquiry validation, and contact form email preparation.
- `js/map.js` adds an interactive Leaflet map on the About Us page using approximate service-area markers.
- `robots.txt` and `sitemap.xml` are starter SEO files.

## Run locally
Open `index.html` in a browser, or use the Live Server extension in Visual Studio Code.

## Before publishing
1. Replace the example domain in `robots.txt` and `sitemap.xml` with the real website domain.
2. Replace the placeholder recipient in `js/script.js` with Dog Paw's verified email address.
3. Replace generic Facebook/TikTok links with verified official profile URLs.
4. Add approved photos to the `images` folder and include descriptive alt text if you add `<img>` elements.
5. Replace the sample success-story content with approved, verified stories and obtain consent for any personal information or photographs.
6. Confirm the organisation's current contact details, service areas, and availability.
7. For real form delivery, use a secure backend or reputable form service. Browser-side validation alone does not securely transmit or store submissions.
8. Use HTTPS when hosted and keep any server-side dependencies updated.

## Functionality note
The enquiry form validates and displays a summary in the browser; it does not send or save data. The contact form validates and prepares an email via the visitor's email application once a verified recipient address has been configured. The map shows approximate Boksburg/East Rand and planned West Rand service areas, not a precise office address. Leaflet and OpenStreetMap tiles require an internet connection.
