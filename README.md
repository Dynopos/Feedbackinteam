# Borang Penghantaran Barangan — Konsert INTEAM

Landing page + borang untuk peminat isi alamat dan butiran penghantaran
barangan/merchandise konsert INTEAM. Data borang dihantar terus ke Google Sheet.

## Struktur

- `index.html` — landing page
- `form.html` — borang penghantaran
- `style.css` — styling
- `script.js` — logik hantar borang
- `config.js` — tempat letak URL Google Apps Script anda
- `apps-script/Code.gs` — kod Apps Script untuk simpan data ke Google Sheet

## Cara Setup Google Sheet (sekali sahaja)

1. Buka [Google Sheets](https://sheets.google.com) dan cipta spreadsheet baharu,
   contohnya namakan **"INTEAM Postage Submissions"**.
2. Di dalam spreadsheet itu, buka **Extensions → Apps Script**.
3. Padam kod default dalam editor, dan salin-tampal kandungan
   `apps-script/Code.gs` (dalam repo ini) ke situ.
4. Simpan (Ctrl+S / Cmd+S) projek Apps Script.
5. Klik **Deploy → New deployment**.
   - Klik ikon gear di sebelah "Select type" → pilih **Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Klik **Deploy**, kemudian **Authorize access** dan benarkan permission
     yang diminta (guna akaun Google anda).
6. Selepas deploy, salin **Web app URL** yang diberikan (bermula dengan
   `https://script.google.com/macros/s/.../exec`).
7. Buka `config.js` dalam repo ini dan gantikan nilai
   `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` dengan URL tersebut:

   ```js
   const GOOGLE_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycb.../exec";
   ```

8. Setiap kali borang dihantar, satu baris baharu akan ditambah dalam sheet
   bernama **"Submissions"** di dalam spreadsheet anda, dengan lajur:
   `submittedAt, fullName, phone, email, addressLine1, addressLine2, postcode,
   city, state, itemDetails, quantity, orderRef, notes`.

> **Nota:** Jika kod `Code.gs` diubah selepas deployment pertama, anda perlu
> buat **Deploy → Manage deployments → Edit (pensel) → New version → Deploy**
> supaya perubahan berkuatkuasa pada URL yang sama.

### Setup Guna Telefon Sahaja (tiada laptop)

App mobile Google Sheets tiada menu **Extensions**, jadi cara di atas tak
boleh diikuti terus dalam app tu. Guna cara ini sebagai gantinya:

1. Buka **Chrome** di telefon, taip terus **script.google.com** di address
   bar (bukan sheets.google.com — domain ini tidak auto-redirect ke app).
2. Log masuk dengan akaun Google anda, tap **+ New project**.
3. Padam kod default, salin-tampal kandungan `apps-script/Code.gs`.
4. Buka app Sheets, buka spreadsheet **"INTEAM Postage Submissions"**, tap
   **Share → Copy link**. Salin ID dari URL tersebut (bahagian antara
   `/d/` dan `/edit`), contoh:
   `https://docs.google.com/spreadsheets/d/`**`1AbCxyz...`**`/edit`
5. Dalam editor Apps Script, isikan ID tersebut ke pemboleh ubah
   `SPREADSHEET_ID` di baris atas kod.
6. Simpan, kemudian teruskan dari langkah 5 (Deploy → New deployment) di
   atas seperti biasa.

## Jalankan Secara Tempatan

Fail-fail ini adalah static HTML/CSS/JS — tiada proses build diperlukan.
Buka `index.html` terus dalam browser, atau jalankan simple server:

```bash
python3 -m http.server 8000
```

Kemudian layari `http://localhost:8000`.

## Hosting

Boleh host terus di GitHub Pages, Netlify, Vercel (static), atau mana-mana
static hosting — tiada backend diperlukan kerana submission pergi terus ke
Google Sheet melalui Apps Script.
