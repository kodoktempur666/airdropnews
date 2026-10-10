import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer Hukum & Finansial',
  description:
    'Pernyataan penolakan tanggung jawab (disclaimer) hukum, finansial, dan teknis AirdropNews.my.id.',
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  const breadcrumbs = [{ label: 'Disclaimer' }];

  return (
    <div className="py-8 bg-[#F8F7F2] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white border-3 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717] my-6 space-y-6">
          <div>
            <span className="neo-badge bg-[#FFAA00] text-[#171717] font-black uppercase text-xs mb-2">
              Pemberitahuan Hukum
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#171717]">
              Disclaimer &amp; Batasan Tanggung Jawab
            </h1>
            <p className="text-xs font-bold text-neutral-500 mt-2 font-mono">
              Terakhir diperbarui: 10 Oktober 2026
            </p>
          </div>

          <div className="p-4 bg-[#FFF4E5] border-2.5 border-[#171717] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-semibold">
              Semua konten yang dimuat di AirdropNews.my.id ditujukan semata-mata untuk tujuan informasi dan edukasi teknologi Web3. Konten kami BUKAN merupakan nasihat finansial, hukum, pajak, atau investasi.
            </div>
          </div>

          <div className="article-prose">
            <h2>1. Bukan Nasihat Keuangan (Not Financial Advice)</h2>
            <p>
              Tidak ada bagian dari materi, artikel tutorial, ulasan proyek, maupun grafik di situs ini yang boleh ditafsirkan sebagai ajakan, rekomendasi, atau endorsement untuk membeli, menjual, atau memegang aset kripto mana pun. Perdagangan dan kepemilikan aset kripto mengandung risiko finansial yang sangat tinggi. Anda bertanggung jawab penuh atas segala keputusan transaksi yang Anda ambil.
            </p>

            <h2>2. Tidak Ada Jaminan Reward atau Airdrop</h2>
            <p>
              Program airdrop, insentif testnet, dan retroactive kampanye sepenuhnya diatur dan dikendalikan oleh tim pengembang masing-masing proyek independen. <strong>AirdropNews.my.id tidak dapat dan tidak pernah menjamin</strong> bahwa:
            </p>
            <ul>
              <li>Sebuah proyek pasti akan mendistribusikan token kepada partisipan.</li>
              <li>Tugas yang Anda kerjakan pasti lolos kriteria eligibilitas snapshot.</li>
              <li>Token reward yang diperoleh akan memiliki nilai tukar moneter tertentu.</li>
            </ul>

            <h2>3. Risiko Interaksi Smart Contract &amp; Web3</h2>
            <p>
              Berinteraksi dengan protokol desentralisasi (dApp), testnet, bridging, atau decentralized exchange (DEX) melibatkan risiko teknis bawaan, termasuk namun tidak terbatas pada:
            </p>
            <ul>
              <li>Kutu kode (*bugs*) atau eksploitasi celah keamanan smart contract.</li>
              <li>Kehilangan koin akibat salah memasukkan alamat tujuan atau kesalahan konfigurasi jaringan (*wrong network/RPC*).</li>
              <li>Fluktuasi biaya gas fee jaringan yang menyebabkan biaya transaksi membengkak.</li>
              <li>Risiko kerentanan wallet drainer pada situs phishing yang meniru proyek resmi.</li>
            </ul>

            <h2>4. Kewajiban Riset Mandiri (DYOR)</h2>
            <p>
              Setiap pembaca wajib melakukan riset mandiri (*Do Your Own Research / DYOR*) secara teliti, memverifikasi keaslian kontrak, dan mengecek saluran resmi media sosial proyek sebelum menghubungkan dompet Web3 apa pun. Kami sangat menyarankan penggunaan <em>burner wallet</em> (dompet terpisah bersaldo kecil) untuk meminimalisasi potensi risiko.
            </p>

            <h2>5. Batasan Tanggung Jawab</h2>
            <p>
              Dalam keadaan apa pun, pengelola, penulis, dan kontributor AirdropNews.my.id tidak bertanggung jawab atas segala kerugian langsung, tidak langsung, insidental, atau konsekuensial (termasuk kehilangan dana, aset digital, atau kegagalan transaksi) yang timbul akibat penggunaan atau ketergantungan Anda terhadap informasi yang disajikan di situs ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
