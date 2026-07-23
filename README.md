# Borang Penghantaran Barangan — Konsert INTEAM

Landing page + borang untuk peminat isi alamat dan butiran penghantaran
barangan/merchandise konsert INTEAM. Selepas borang diisi, maklumat terus
dihantar sebagai emel ke alamat yang diset.

## Struktur

- `index.html` — landing page
- `form.html` — borang penghantaran
- `style.css` — styling
- `script.js` — logik borang, susun mesej & buka app emel
- `config.js` — alamat emel yang menerima mesej

## Setup Alamat Emel

Buka `config.js` dan tukar nilai `NOTIFY_EMAIL` kepada alamat emel yang nak
terima borang:

```js
const NOTIFY_EMAIL = "Feedbackinteam@dynopos.my";
```

Bila borang dihantar, pengguna akan dibawa ke app emel (Gmail, Mail, dll.)
dengan penerima, tajuk, dan kandungan mesej sudah diisi automatik
berdasarkan jawapan dalam borang — mereka hanya perlu tekan **Hantar**
dalam app emel tersebut.

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
