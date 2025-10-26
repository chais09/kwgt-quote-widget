3. On your home screen, add a **KWGT widget**.
4. Tap it → **Load Preset → Exported** → choose *QuoteWidget*.
5. In **Globals**, set the following:
- `API_URL` → your quote API endpoint (example below)
- `REFRESH_INTERVAL` → 15 (minutes, optional)

---

## 🌐 Example API Endpoint

Example using your Google Apps Script backend:https://script.google.com/macros/s/AKfycbXXXXXXXX/exec?path=random

**Expected JSON:**
```json
{
  "text": "Stay hungry, stay foolish.",
  "author": "Steve Jobs",
  "origin": "Stanford, 2005"
}
