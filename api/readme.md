# Google Apps Script Quote API

This script powers the KWGT Quote Widget.
Deploy it as a Web App to get a public URL that returns JSON.

## Steps
1. Go to https://script.new
2. Paste the contents of `quote_api.gs`
3. Click Deploy → New Deployment → Web App
   - Execute as: Me
   - Who has access: Anyone
4. Copy the URL ending with `/exec`
5. Use it in KWGT:
   $wg("YOUR_URL?path=random", json, .text)$
