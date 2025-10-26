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
