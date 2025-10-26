# KWGT Quote Widget

A lightweight, customizable **KWGT widget** that displays random motivational quotes directly on your Android home screen.  
It fetches data from a simple **Google Apps Script JSON API**, supports filters (language, tags, authors), and updates automatically every 15 minutes.

---

## ✨ Features
- 📜 Displays random quotes from a public API (your own or built-in)
- ⚙️ Configurable filters (`lang`, `tag`, `author`, etc.)
- 🔄 Auto-refresh every 15 minutes (KWGT update interval)
- 💾 Works offline if cached with Kustom Flows
- 🧩 Easy to edit and restyle inside KWGT
- 🌐 Open-source API backend (Apps Script) included

---

## 🧱 Project Structure
kwgt-quote-widget/
├─ widgets/
│ └─ QuoteWidget.kwgt # The KWGT preset file
| └─ ReadMe.md # The KWGT preset file
├─ api/
│ ├─ quote_api.js # Google Apps Script code
│ └─ README.md # API deployment guide
├─ screenshot/
│ ├─ screenshot.png # Screenshot
├─ README.md # This file
└─ LICENSE # MIT License

---

## 🧰 Requirements
- Android device with [KWGT Kustom Widget Maker](https://play.google.com/store/apps/details?id=org.kustom.widget)
- **KWGT Pro** version (needed to import custom presets)
- Internet access (for live quote fetching)

---

## 🚀 Installation
1. Download `QuoteWidget.kwgt` from `/widgets/`.
2. Copy it to your phone’s `/Kustom/widgets/` directory.
3. Add a KWGT widget to your home screen → **Load Preset → Exported/Installed** → select *QuoteWidget*.
4. In **Globals**, set your API URL (default: public Apps Script endpoint).

---

## 🧩 Example JSON Response
```json
{
  "text": "Stay hungry, stay foolish.",
  "author": "Steve Jobs",
  "origin": "Stanford, 2005"
}
```

---

## 💡 KWGT Formulas
1. Quote
   ```$wg(gv(API_URL), json, .text)$```
2. Author
   ```$wg(gv(API_URL), json, .author)$```
3. Origin
   ```$wg(gv(API_URL), json, .origin)$```

---

## ☁️ API (Google Apps Script)
### 🔧 Overview
The API provides random quotes as JSON.
You can use your own Google Sheet as the source.

### 📜 Deploy Steps
1. Go to script.new
2. Paste the contents of /api/quote_api.js
3. Replace SHEET_CSV_URL with your published Google Sheet CSV URL
4. Deploy → New deployment → Web App
   - Execute as: Me
   - Who has access: Anyone
5. Copy your Web App URL (ends with /exec)
6. Use it in the widget as your API_URL

### 🔁 Example Sheet Headers
| text | author	| origin | lang | tags
|-|-|-|-|-|
|Stay hungry, stay foolish. | Steve Jobs | Stanford, 2005 | en | motivation,focus |
|Simplicity is the ultimate sophistication.| Leonardo da Vinci | — |	en	|simplicity|

---

## ⚙️ Recommended KWGT Settings
| Setting            | Value         |
| ------------------ | ------------- |
| Update Interval    | 15 minutes    |
| Fit Mode           | Fit Width     |
| Max Lines          | 0 (unlimited) |
| Ellipsize          | None          |
| Background Service | Enabled       |
💡 Tip: Disable battery optimization for KWGT in Android settings to allow background refreshes.

---

## 🖼️ Screenshots


---

## 📄 License
This project is released under the MIT License.
You can freely use, modify, and distribute it with attribution.

---

👤 Author
Created by __Chai Seng Loi__
Powered by __KWGT__ and __Google Apps Script__
