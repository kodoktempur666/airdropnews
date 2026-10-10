# AirdropNews.my.id — Portal Berita Airdrop & Panduan Web3 Indonesia

**AirdropNews.my.id** adalah portal media informasi independen berbahasa Indonesia yang membahas berita airdrop cryptocurrency, panduan berburu reward Web3, fase testnet bebas modal, strategi retroactive, ekosistem Layer 2, DeFi, dan edukasi keamanan dompet anti-drainer.

Website dibangun dengan arsitektur statis modern menggunakan Next.js App Router, React 19, TypeScript, Tailwind CSS, dan gaya visual **Neo-Brutalism UI** yang tegas, kontras, berkarakter, dan ramah pengguna.

---

## 🚀 Fitur Utama

- **Desain Neo-Brutalism Konsisten:** Border tebal hitam pekat, bayangan keras (*hard shadow* tanpa blur), palet warna berkarakter (`#FFE45C`, `#B8F28B`, `#8EC5FF`, `#F8F7F2`), tipografi tegas (Space Grotesk & Inter), dan efek interaksi taktil.
- **100% Konten Lokal MDX:** Seluruh artikel disimpan sebagai file Markdown/MDX lokal di folder `content/articles/`, diparsing menggunakan `gray-matter`, dan dirender cepat tanpa backend atau database eksternal.
- **Pencarian In-Browser Real-Time:** Fitur pencarian instan di `/search` berbasis JavaScript di peramban yang mendukung sinkronisasi parameter URL (`/search?q=...`), filter kategori, dan deteksi kata kunci judul, ringkasan, serta isi artikel.
- **SEO Teknis & On-Page:**
  - Metadata unik (Title, Description, Canonical URL `https://airdropnews.my.id`).
  - Open Graph & Twitter Cards lengkap.
  - JSON-LD Structured Data terintegrasi: `Organization`, `WebSite` (dengan `SearchAction`), `BreadcrumbList`, dan `Article`.
  - Dynamic `sitemap.xml` dan `robots.txt` otomatis.
- **Kesiapan Google Analytics 4:** Script GA4 hanya dimuat jika `NEXT_PUBLIC_GA_ID` valid terpasang, tanpa memicu duplikasi page view pada App Router, dilengkapi banner persetujuan privasi (*Cookie Consent*).
- **Kesiapan Google AdSense:** Komponen reusable (`AdBanner`, `InArticleAd`, `AdSidebar`, `AdResponsive`), perlindungan layout shift (CLS), placeholder rapi saat mode development, dan file `public/ads.txt`.
- **Edukasi Keamanan Khusus Web3:** Kotak peringatan anti-drainer, checklist keamanan, dan larangan keras membagikan seed phrase.

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Library UI** | React 19 & TypeScript |
| **Styling** | Tailwind CSS v4 (Neo-Brutalism Design System) |
| **Content Parser** | `gray-matter` & `next-mdx-remote` |
| **Ikonografi** | Lucide React & Custom SVG |
| **Analitik** | `@next/third-parties/google` (Google Analytics 4) |
| **Monetisasi** | Google AdSense Integration & `ads.txt` |
| **SEO** | Next.js Metadata API & JSON-LD Structured Data |

---

## 📁 Struktur Direktori Proyek

```text
airdropnews/
├── content/
│   └── articles/                     # Berkas artikel lokal (.mdx)
│       ├── panduan-airdrop-pemula.mdx
│       ├── keamanan-wallet-crypto.mdx
│       ├── mengenal-testnet-dan-cara-ikutan.mdx
│       ├── perbedaan-airdrop-retroactive-testnet.mdx
│       ├── cara-mengenali-airdrop-scam.mdx
│       ├── panduan-gas-fee-blockchain.mdx
│       ├── apa-itu-layer-2-ethereum.mdx
│       └── checklist-keamanan-berburu-airdrop.mdx
├── public/
│   ├── images/                       # Ilustrasi cover artikel (SVG/WebP)
│   ├── logo.svg                      # Logo Neo-Brutalist AirdropNews
│   ├── ads.txt                       # Authorized Digital Sellers AdSense
│   └── favicon.ico
├── app/
│   ├── layout.tsx                    # Root layout, font, GA4, AdSense, Navbar, Footer
│   ├── page.tsx                      # Homepage (Hero, Featured, Latest, Spotlight, Kurikulum)
│   ├── artikel/[slug]/page.tsx       # Halaman detail artikel, TOC, InfoBox, Share, Related
│   ├── kategori/[slug]/page.tsx       # Halaman arsip kategori + pagination URL
│   ├── search/page.tsx               # Halaman pencarian artikel in-browser
│   ├── tentang/page.tsx              # Profil & visi misi AirdropNews
│   ├── kontak/page.tsx               # Saluran kontak & pelaporan editorial
│   ├── kebijakan-privasi/page.tsx    # Dokumen privasi GDPR/Cookie/AdSense
│   ├── disclaimer/page.tsx           # Penyangkalan hukum & risiko kripto
│   ├── pedoman-editorial/page.tsx    # Standar fakta & pedoman jurnalisme
│   ├── sitemap.ts                    # Dynamic sitemap generator
│   ├── robots.ts                     # Dynamic robots.txt
│   ├── not-found.tsx                 # Halaman 404 Neo-Brutalist
│   └── globals.css                   # Theme tokens & styling Neo-Brutalism
├── components/
│   ├── layout/                       # Navbar, AnnouncementBar, Footer, Breadcrumbs
│   ├── articles/                     # ArticleCard, TOC, AirdropInfoBox, MdxContent, etc.
│   ├── home/                         # HeroSection, CategoryPills, BeginnerGuide, Disclaimer
│   ├── search/                       # SearchClient
│   ├── ads/                          # AdSenseScript, AdBase, AdBanner, InArticleAd, etc.
│   ├── analytics/                    # GoogleAnalytics, CookieConsent
│   ├── seo/                          # JsonLd
│   └── ui/                           # Icons, CurrentYear
├── lib/
│   ├── site-config.ts                # Konfigurasi domain, media sosial, slot iklan
│   ├── articles.ts                   # Validasi frontmatter, filter, relasi artikel
│   ├── categories.ts                 # Definisi kategori, warna, dan slug
│   ├── reading-time.ts               # Estimasi waktu baca (WPM)
│   └── structured-data.ts            # Skema JSON-LD
├── types/
│   └── article.ts                    # TypeScript interface definisi data
├── .env.example                      # Template variabel lingkungan
└── package.json
```

---

## ⚡ Panduan Instalasi & Menjalankan Aplikasi

### 1. Prasyarat Sistem
- Node.js versi 20.x atau yang lebih baru.
- npm, pnpm, atau yarn.

### 2. Kloning & Pemasangan Dependensi
```bash
# Masuk ke direktori proyek
cd airdropnews

# Pasang seluruh dependensi
npm install
```

### 3. Konfigurasi Environment Variables
Salin berkas `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Sesuaikan nilainya jika Anda sudah memiliki Measurement ID atau Publisher ID (dapat dikosongkan saat tahap pengujian awal):
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka peramban di `http://localhost:3000`.

### 5. Build Produksi & Typecheck
```bash
# Validasi kualitas kode
npm run lint

# Kompilasi build produksi Next.js
npm run build

# Menjalankan build produksi
npm run start
```

---

## ✍️ Cara Menambahkan Artikel MDX Baru

Untuk menerbitkan artikel baru, cukup buat file baru di dalam folder `content/articles/` dengan ekstensi `.mdx` (contoh: `content/articles/judul-artikel-anda.mdx`).

### Format Frontmatter:
```yaml
---
title: "Judul Artikel yang Menarik dan Jelas"
slug: "judul-artikel-anda"
description: "Ringkasan isi artikel dalam 1-2 kalimat untuk meta description dan kartu artikel."
category: "Tutorial" # Pilihan: Airdrop, Testnet, Retroactive, Tutorial, Layer 2, DeFi, Berita
tags:
  - airdrop
  - web3
  - tutorial
author: "Tim Editorial AirdropNews"
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
featured: false # Ubah true jika ingin tampil di banner utama homepage
spotlight: false # Ubah true jika ingin masuk ke radar Airdrop Spotlight
coverImage: "/images/panduan-airdrop.svg" # Gambar lokal di folder public/images/
coverImageAlt: "Deskripsi alt text gambar cover"
readingTime: 6 # Estimasi waktu baca (dihitung otomatis jika dikosongkan)
sources:
  - title: "Dokumentasi Resmi Ethereum"
    url: "https://ethereum.org"

# Opsional: Jika artikel membahas campaign airdrop terverifikasi:
airdropDetails:
  projectName: "Nama Proyek Web3"
  blockchain: "Arbitrum / Ethereum"
  status: "Aktif" # Pilihan: Aktif | Selesai | Mendatang | Spekulatif | Terverifikasi
  participationRequirements:
    - "Wallet Web3 non-kustodian"
    - "Minimal saldo transaksi gas fee"
  steps:
    - "Lakukan bridge aset melalui jembatan resmi"
    - "Swap token mingguan di dApp ekosistem"
  costRisk: "Rendah ($0.5 - $2 gas fee)"
  verifiedDate: "2026-10-10"
  officialWebsite: "https://project.com"
---

## Heading Bagian Pertama (H2)

Tulis isi konten dalam Bahasa Indonesia yang alami. Gunakan heading H2 dan H3 secara terstruktur karena **Daftar Isi (Table of Contents)** akan dibuat secara otomatis berdasarkan heading ini.

Gunakan tautan internal menuju artikel lain, misalnya [Panduan Keamanan Wallet](/artikel/keamanan-wallet-crypto).

> Catatan penting: Informasi airdrop wajib diverifikasi dari sumber primer resmi.
```

---

## 🏷️ Cara Menambahkan Kategori Baru

Buka berkas `lib/categories.ts`. Tambahkan entri baru ke dalam array `CATEGORIES`:

```typescript
{
  name: 'Solana',
  slug: 'solana',
  description: 'Panduan berburu airdrop dan ekosistem dApp pada jaringan Solana.',
  color: 'bg-[#B4ECE3]', // Warna badge Neo-Brutalism
  iconName: 'Coins',     // Nama ikon dari Lucide React
}
```

Kategori baru akan otomatis muncul di menu navbar, homepage pills, footer, dan sitemap dinamis.

---

## 📊 Konfigurasi Google Analytics 4 (GA4)

1. Buka Google Analytics console dan buat Data Stream Web untuk domain `https://airdropnews.my.id`.
2. Salin Measurement ID (format: `G-XXXXXXXXXX`).
3. Tambahkan ke file `.env.local` atau pengaturan Environment Variable di Vercel:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. **Cara Verifikasi & Pengujian:**
   - Jalankan `npm run build && npm run start`.
   - Buka peramban dan akses website.
   - Buka Google Analytics > **Reports** > **Realtime**. Anda akan melihat lalu lintas aktif tercatat tanpa pengiriman ganda (*duplicate tracking*).
   - Pengujian mendalam dapat dilakukan menggunakan ekstensi Google Analytics Debugger untuk memantau event di konsol browser.

---

## 💰 Konfigurasi Google AdSense

1. Daftarkan domain `https://airdropnews.my.id` di Google AdSense.
2. Salin Publisher Client ID (format: `ca-pub-XXXXXXXXXXXXXXXX`).
3. Tambahkan ke environment variable:
   ```env
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
   ```
4. **Perbarui `public/ads.txt`:**
   Buka file `public/ads.txt` dan isi baris resmi yang diberikan oleh Google AdSense:
   ```text
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
5. **Perilaku Iklan:**
   - Jika `NEXT_PUBLIC_ADSENSE_CLIENT` belum diisi atau bernilai dummy, seluruh slot iklan otomatis merender placeholder visual Neo-Brutalism yang aman tanpa memicu script eksternal atau layout shift.
   - Komponen iklan tidak dimuat di halaman kebijakan privasi, kontak, atau disclaimer demi kepatuhan kebijakan Google Publisher Policies.

---

## 🚢 Deployment ke Vercel

Proyek ini sepenuhnya kompatibel dan dioptimalkan untuk di-deploy ke **Vercel**:

1. Push repository ini ke GitHub / GitLab.
2. Impor proyek di dashboard [Vercel](https://vercel.com).
3. Vercel akan otomatis mendeteksi konfigurasi Next.js.
4. Masukkan Environment Variables di Vercel:
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_ADSENSE_CLIENT`
5. Tekan tombol **Deploy**.

---

## 🛡️ Kebijakan Editorial & Peringatan Risiko

- **Keamanan Pengguna adalah Prioritas Mutlak:** AirdropNews tidak pernah meminta seed phrase, private key, atau biaya pendaftaran.
- **Bukan Nasihat Finansial:** Seluruh artikel bersifat edukasi teknologi Web3. Pembaca wajib melakukan riset mandiri (*DYOR*).
- **Anti-Scam Screening:** Proyek yang diulas ditinjau dari dokumentasi resmi dan tidak melebih-lebihkan potensi keuntungan.

---

© 2026 **AirdropNews.my.id**. Seluruh hak cipta dilindungi.
