// 只用 UrlFetchApp / Utilities / ContentService，无需任何库
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/{ID}/gviz/tq?tqx=out:csv&sheet=Sheet1";

function doGet(e) {
  const path = (e && e.parameter && e.parameter.path) ? e.parameter.path.toLowerCase() : "random";
  const quotes = loadQuotes();
  if (path === "list") return json(quotes);
  if (!quotes.length) return json({ error: true, message: "No quotes yet." });
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return json(random);
}

function loadQuotes() {
  const res = UrlFetchApp.fetch(SHEET_CSV_URL, { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) return [];
  const rows = Utilities.parseCsv(res.getContentText());
  if (!rows || rows.length < 2) return [];
  const headers = rows[0].map(h => String(h).trim().toLowerCase());
  return rows.slice(1).filter(r => r && r.length).map(r => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = r[i] ?? "");
    if (typeof obj.tags === "string" && obj.tags.trim().startsWith("[")) {
      try { obj.tags = JSON.parse(obj.tags); } catch (_) {}
    }
    return obj;
  });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}
