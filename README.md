# Borang Penghantaran Barangan — Konsert INTEAM

Landing page + borang untuk peminat isi alamat dan butiran penghantaran
barangan/merchandise konsert INTEAM. Selepas borang diisi, maklumat terus
dihantar sebagai mesej WhatsApp ke nombor yang diset.

## Struktur

- `index.html` — landing page
- `form.html` — borang penghantaran
- `style.css` — styling
- `script.js` — logik borang, susun mesej & buka WhatsApp
- `config.js` — nombor WhatsApp yang menerima mesej

## Setup Nombor WhatsApp

Buka `config.js` dan tukar nilai `WHATSAPP_NUMBER` kepada nombor yang nak
terima mesej, dalam format antarabangsa (kod negara, tanpa "+" atau "0" di
depan):

```js
const WHATSAPP_NUMBER = "60182889932";
```

Bila borang dihantar, pengguna akan dibawa terus ke WhatsApp (app atau
web.whatsapp.com) dengan mesej yang sudah diisi automatik berdasarkan
jawapan dalam borang — mereka hanya perlu tekan **Hantar** dalam WhatsApp.

## Jalankan Secara Tempatan

Fail-fail ini adalah static HTML/CSS/JS — tiada proses build diperlukan.
Buka `index.html` terus dalam browser, atau jalankan simple server:

```bash
python3 -m http.server 8000
```

Kemudian layari `http://localhost:8000`.

## Hosting

Boleh host terus di GitHub Pages, Netlify, Vercel (static), atau mana-mana
static hosting — tiada backend diperlukan.
