import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ShieldCheck, Compass, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Profil, visi, misi, dan komitmen independensi editorial portal berita AirdropNews.my.id.',
  alternates: {
    canonical: `${siteConfig.url}/tentang`,
  },
};

export default function TentangPage() {
  const breadcrumbs = [{ label: 'Tentang Kami' }];

  return (
    <div className="py-8 bg-[#F8F7F2] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white border-3 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717] my-6 space-y-8">
          <div>
            <span className="neo-badge bg-[#FFE45C] text-[#171717] font-black uppercase text-xs mb-2">
              Profil Platform
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#171717]">
              Tentang AirdropNews.my.id
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed mt-3">
              AirdropNews.my.id adalah portal media independen berbahasa Indonesia yang didedikasikan untuk menyajikan informasi terpercaya, panduan edukasi, dan kurasi peluang seputar airdrop cryptocurrency, testnet blockchain, inisiatif retroactive, serta ekosistem Web3.
            </p>
          </div>

          <div className="p-6 bg-[#FFFDF0] border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717]">
            <h2 className="font-heading font-black text-xl text-[#171717] mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-600" />
              Visi &amp; Misi Kami
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Misi kami adalah menjembatani masyarakat Indonesia dengan inovasi teknologi terdesentralisasi secara aman dan bertanggung jawab. Kami meyakini bahwa partisipasi dalam ekosistem blockchain generasi baru tidak boleh mengorbankan keamanan aset pengguna akibat maraknya aksi penipuan dan phishing.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-black text-xl text-[#171717] mb-4">
              Nilai Utama yang Kami Pegang Teguh
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F8F7F2] border-2 border-[#171717]">
                <div className="font-bold text-sm text-[#171717] flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verifikasi Ketat
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Setiap artikel tutorial dan pembahasan campaign ditinjau dari sumber dokumentasi resmi pengembang tanpa melebih-lebihkan potensi reward.
                </p>
              </div>

              <div className="p-4 bg-[#F8F7F2] border-2 border-[#171717]">
                <div className="font-bold text-sm text-[#171717] flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Edukasi Keamanan Terdepan
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Kami selalu menyertakan panduan proteksi diri, pemisahan burner wallet, dan peringatan anti-drainer pada setiap panduan yang dirilis.
                </p>
              </div>

              <div className="p-4 bg-[#F8F7F2] border-2 border-[#171717]">
                <div className="font-bold text-sm text-[#171717] flex items-center gap-2 mb-1">
                  <Compass className="w-4 h-4 text-emerald-600" />
                  Bebas Nasihat Keuangan Palsu
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  AirdropNews tidak menjual sinyal trading, tidak mengelola dana publik, dan tidak pernah memungut biaya pendaftaran keanggotaan.
                </p>
              </div>

              <div className="p-4 bg-[#F8F7F2] border-2 border-[#171717]">
                <div className="font-bold text-sm text-[#171717] flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Transparansi &amp; Integritas
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Kami memisahkan secara tegas antara materi editorial murni dan konten sponsorship atau periklanan.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-dashed border-neutral-300 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/pedoman-editorial"
              className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] px-4 py-2 text-xs font-black gap-1.5"
            >
              <span>Baca Pedoman Editorial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* <Link
              href="/kontak"
              className="neo-btn bg-white hover:bg-neutral-100 text-[#171717] px-4 py-2 text-xs font-bold gap-1.5"
            >
              <span>Hubungi Tim Redaksi</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
