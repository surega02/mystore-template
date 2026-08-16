# Harmony Sound Concept

Template toko online (e-commerce storefront) berbasis **React + Tailwind CSS + Vite**, dibangun ulang dari snapshot tema Shopify "Concept" (halaman index, catalog, dan contact).

## Persyaratan

- [Node.js](https://nodejs.org) versi 18 ke atas
- npm (sudah termasuk dengan Node.js)

## Setup Awal

1. Clone repositori ini:

   ```bash
   git clone https://github.com/surega02/mystore-template.git
   cd mystore-template
   ```

2. Install dependensi:

   ```bash
   npm install
   ```

## Menjalankan Aplikasi

### Mode Pengembangan (Development)

Jalankan server Vite dengan hot-reload:

```bash
npm run dev
```

Buka `http://localhost:5173` di browser.

### Build Produksi

Buat bundle untuk produksi:

```bash
npm run build
```

Hasil build akan berada di folder `dist/`.

### Pratinjau Build

Lihat hasil build produksi secara lokal:

```bash
npm run preview
```

## Struktur Proyek

```
react-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          # Entry point React
    ├── App.jsx           # Konfigurasi routing
    ├── index.css         # Stylesheet Tailwind
    ├── data/store.js     # Data produk/statis
    ├── components/       # Komponen UI reusable
    ├── context/          # React context (state global)
    ├── pages/            # Halaman (Home, Catalog, Contact)
    └── sections/         # Bagian/segment tampilan
```

## Skrip yang Tersedia

| Perintah            | Deskripsi                              |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Menjalankan server pengembangan        |
| `npm run build`     | Build produksi ke `dist/`              |
| `npm run preview`   | Pratinjau hasil build produksi         |