import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';


export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description:
    'Kebijakan privasi AirdropNews.my.id mengenai pengelolaan data pengguna, Google Analytics, dan Google AdSense.',
  alternates: {
    canonical: `${siteConfig.url}/kebijakan-privasi`,
  },
};

export default function KebijakanPrivasiPage() {
  const breadcrumbs = [{ label: 'Kebijakan Privasi' }];

  return (
    <div className="py-8 bg-[#F8F7F2] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white border-3 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717] my-6 space-y-6">
          <div>
            <span className="neo-badge bg-[#B8F28B] text-[#171717] font-black uppercase text-xs mb-2">
              Dokumen Hukum
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#171717]">
              Kebijakan Privasi (Privacy Policy)
            </h1>
            <p className="text-xs font-bold text-neutral-500 mt-2 font-mono">
              Terakhir diperbarui: 10 Oktober 2026
            </p>
          </div>

          <div className="article-prose">
            <p>
              Selamat datang di <strong>AirdropNews.my.id</strong> (&quot;kami&quot;, &quot;situs&quot;, atau &quot;portal&quot;). Kami menghargai hak privasi setiap pengunjung. Dokumen Kebijakan Privasi ini menjelaskan bagaimana data teknis dikumpulkan, dikelola, dan dilindungi saat Anda mengakses situs kami di domain <code>https://airdropnews.my.id</code>.
            </p>

            <h2>1. Komitmen Privasi Web3 &amp; Keamanan Dompet</h2>
            <p>
              Prinsip privasi utama kami:
            </p>
            <ul>
              <li><strong>Kami TIDAK PERNAH meminta, mencatat, atau menyimpan *Seed Phrase*, *Private Key*, atau kata sandi dompet kripto Anda.</strong></li>
              <li>Website ini beroperasi sepenuhnya sebagai portal konten statis edukatif tanpa integrasi otentikasi login pengguna dan tanpa database pengguna terpusat.</li>
              <li>Kami tidak memfasilitasi transaksi penitipan aset atau koneksi wallet kustodian di server kami.</li>
            </ul>

            <h2>2. Informasi yang Kami Kumpulkan</h2>
            <p>
              Seperti halnya situs web standar pada umumnya, server dan platform hosting kami dapat mencatat berkas log server secara otomatis, meliputi:
            </p>
            <ul>
              <li>Alamat Internet Protocol (IP) yang disamarkan.</li>
              <li>Jenis peramban web (browser) dan sistem operasi perangkat.</li>
              <li>Halaman yang dirujuk (referring pages) dan halaman yang dikunjungi.</li>
              <li>Waktu dan durasi kunjungan.</li>
            </ul>

            <h2>3. Penggunaan Cookie &amp; Teknologi Pelacak</h2>
            <p>
              Situs ini menggunakan cookie untuk meningkatkan pengalaman navigasi Anda:
            </p>
            <ul>
              <li><strong>Cookie Preferensi:</strong> Menyimpan preferensi persetujuan banner privasi lokal di peramban Anda.</li>
              <li><strong>Cookie Analitik:</strong> Digunakan untuk memahami halaman panduan mana yang paling bermanfaat bagi pembaca.</li>
            </ul>

            <h2>4. Integrasi Google Analytics 4</h2>
            <p>
              Kami dapat menggunakan Google Analytics 4 (GA4) dari Google LLC untuk menganalisis performa lalu lintas pengunjung situs secara agregat dan anonim. GA4 tidak mencatat alamat IP individual secara permanen dan tidak memproses data identitas pribadi (*Personally Identifiable Information / PII*).
            </p>
            <p>
              Anda dapat memilih untuk menonaktifkan pelacakan Google Analytics dengan memasang <em>Google Analytics Opt-out Browser Add-on</em> pada peramban web Anda.
            </p>

            <h2>5. Integrasi Google AdSense &amp; Iklan Pihak Ketiga</h2>
            <p>
              Situs ini disiapkan untuk menyajikan iklan melalui kemitraan dengan <strong>Google AdSense</strong>. Google, sebagai vendor pihak ketiga, menggunakan cookie untuk menayangkan iklan kepada pengguna berdasarkan riwayat kunjungan ke situs ini atau situs web lain di internet.
            </p>
            <ul>
              <li>Penggunaan cookie periklanan memungkinkan Google dan mitranya menayangkan iklan yang relevan kepada pengunjung.</li>
              <li>Pengguna dapat memilih keluar dari iklan hasil personalisasi dengan mengunjungi <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Pengaturan Iklan Google</a>.</li>
            </ul>

            <h2>6. Tautan ke Situs Eksternal</h2>
            <p>
              Artikel panduan kami dapat memuat tautan menuju situs resmi proyek blockchain (seperti dokumentasi Ethereum, Chainlist, atau media sosial proyek). Kami tidak memiliki kendali atas kebijakan privasi atau praktik keamanan situs web pihak ketiga tersebut. Kami menyarankan Anda membaca kebijakan privasi masing-masing situs yang Anda kunjungi.
            </p>

            <h2>7. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu sesuai perkembangan operasional dan hukum yang berlaku. Pembaruan akan segera ditandai dengan tanggal modifikasi terbaru di bagian atas halaman ini.
            </p>

            <h2>8. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan terkait kebijakan privasi kami, silakan hubungi tim kami melalui email: <code>kontak@airdropnews.my.id</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
