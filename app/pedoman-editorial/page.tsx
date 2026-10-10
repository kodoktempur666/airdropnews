import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';


export const metadata: Metadata = {
  title: 'Pedoman Editorial & Standar Fakta',
  description:
    'Pedoman editorial, verifikasi fakta, dan kebijakan koreksi artikel di portal AirdropNews.my.id.',
  alternates: {
    canonical: `${siteConfig.url}/pedoman-editorial`,
  },
};

export default function PedomanEditorialPage() {
  const breadcrumbs = [{ label: 'Pedoman Editorial' }];

  return (
    <div className="py-8 bg-[#F8F7F2] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white border-3 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717] my-6 space-y-6">
          <div>
            <span className="neo-badge bg-[#FF90E8] text-[#171717] font-black uppercase text-xs mb-2">
              Integritas Jurnalisme
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#171717]">
              Pedoman Editorial &amp; Standar Kebenaran
            </h1>
            <p className="text-xs font-bold text-neutral-500 mt-2 font-mono">
              Terakhir diperbarui: 10 Oktober 2026
            </p>
          </div>

          <div className="article-prose">
            <p>
              Di tengah maraknya informasi sensasional (*clickbait*) dan spekulasi liar di industri kripto, <strong>AirdropNews.my.id</strong> berkomitmen untuk mempertahankan standar integritas penulisan yang tinggi, akurat, dan dapat diverifikasi oleh pembaca.
            </p>

            <h2>1. Prinsip Verifikasi &amp; Sumber Informasi</h2>
            <p>
              Setiap panduan, artikel edukasi, atau tinjauan kampanye airdrop wajib memenuhi kriteria pemeriksaan data berikut:
            </p>
            <ul>
              <li><strong>Rujukan Sumber Primer:</strong> Informasi wajib merujuk langsung ke dokumentasi resmi proyek (seperti GitBook, whitepaper, pengumuman resmi di blog/Mirror, atau pernyataan tertulis dari pendiri proyek).</li>
              <li><strong>Larangan Mengarang Data:</strong> Kami melarang keras pengarang tanggal snapshot, estimasi alokasi token, klaim kemitraan fiktif, atau rumor tanpa dasar yang belum dikonfirmasi pihak pengembang.</li>
              <li><strong>Penandaan Informasi Spekulatif:</strong> Jika suatu campaign bersifat spekulasi retroactive yang belum diumumkan secara terbuka, artikel wajib mencantumkan label <code>Spekulatif</code> secara transparan.</li>
            </ul>

            <h2>2. Independensi &amp; Kebijakan Sponsor</h2>
            <p>
              Kepercayaan pembaca adalah modal terbesar kami. Oleh karena itu:
            </p>
            <ul>
              <li>Konten editorial tidak dapat dibeli untuk mempromosikan skema penipuan (*scam*) atau proyek berkualitas buruk.</li>
              <li>Setiap slot iklan berbayar (seperti Google AdSense atau banner sponsor) ditandai dengan jelas menggunakan label <code>Iklan</code> atau <code>Sponsor</code> yang tegas agar tidak menyesatkan pembaca.</li>
            </ul>

            <h2>3. Penyaringan Anti-Scam dan Proteksi Pengguna</h2>
            <p>
              Sebelum mengangkat proyek atau dApp ke dalam artikel, tim editorial melakukan penyaringan awal:
            </p>
            <ul>
              <li>Memeriksa domain situs web untuk menghindari tautan phishing tiruan.</li>
              <li>Menolak mengulas proyek yang mewajibkan input private key, transfer uang di muka tanpa alasan teknis, atau meminta izin tak wajar pada dompet.</li>
              <li>Menyertakan peringatan risiko dan checklist keamanan pada setiap artikel airdrop.</li>
            </ul>

            <h2>4. Kebijakan Koreksi &amp; Pembaruan Cepat</h2>
            <p>
              Dunia Web3 bergerak sangat dinamis. Kriteria snapshot atau aturan testnet dapat berubah dalam hitungan jam. Kami menerapkan kebijakan koreksi terbuka:
            </p>
            <ul>
              <li>Jika pembaca menemukan informasi yang sudah kedaluwarsa atau tidak akurat, Anda dapat melaporkannya ke email <code>kontak@airdropnews.my.id</code>.</li>
              <li>Tim kami akan memverifikasi dan memperbarui artikel terkait sesegera mungkin dengan mencantumkan tanggal pembaruan (*Last Updated*).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
