import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export function DisclaimerSection() {
  return (
    <section className="py-12 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF0] border-3 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#171717]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 bg-[#FFAA00] border-2 border-[#171717] px-2.5 py-1 text-xs font-black text-[#171717] shadow-[2px_2px_0px_#171717]">
                <ShieldAlert className="w-4 h-4" />
                <span>Pernyataan Penyangkalan (Disclaimer Hukum &amp; Finansial)</span>
              </div>

              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#171717]">
                Informasi Bukan Nasihat Investasi atau Jaminan Finansial
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                Seluruh materi di AirdropNews.my.id disusun murni untuk kepentingan edukasi dan informasi teknologi blockchain. Kami tidak pernah menjamin alokasi koin, nominal reward, kepastian snapshot, maupun keuntungan apa pun dari aktivitas airdrop. Industri aset kripto dan Web3 memiliki tingkat volatilitas tinggi serta risiko keamanan smart contract. Pembaca wajib melakukan riset mandiri (*Do Your Own Research / DYOR*) dan memverifikasi tautan melalui saluran komunikasi resmi proyek terkait.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2">
              <Link
                href="/disclaimer"
                className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] px-4 py-2.5 text-xs font-black shadow-[3px_3px_0px_#171717] inline-flex items-center gap-1.5"
              >
                <span>Baca Disclaimer Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/pedoman-editorial"
                className="neo-btn bg-white hover:bg-neutral-100 text-[#171717] px-4 py-2 text-xs font-bold shadow-[2px_2px_0px_#171717] inline-flex items-center gap-1.5"
              >
                <span>Pedoman Editorial</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
