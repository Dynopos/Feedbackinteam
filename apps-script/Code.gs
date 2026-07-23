// Google Apps Script — terima data borang dan simpan dalam Google Sheet.
// Cara pasang: lihat README.md di root repo ini.

// Kalau projek script ni "standalone" (dibuat terus di script.google.com,
// bukan melalui Extensions dalam Sheets), isikan Spreadsheet ID di bawah.
// Kosongkan ("") kalau script ni dibuat melalui Extensions di dalam Sheets.
const SPREADSHEET_ID = "";

const SHEET_NAME = "Submissions";

const COLUMNS = [
  "submittedAt",
  "fullName",
  "phone",
  "email",
  "addressLine1",
  "addressLine2",
  "postcode",
  "city",
  "state",
  "itemDetails",
  "quantity",
  "orderRef",
  "notes",
];

function doPost(e) {
  const sheet = getOrCreateSheet();
  const data = JSON.parse(e.postData.contents);

  const row = COLUMNS.map((key) => data[key] || "");
  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(COLUMNS);
  }

  return sheet;
}
