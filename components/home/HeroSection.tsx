import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Zap, Gift } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-[#F8F7F2] border-b-3 border-[#171717] py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FFE45C] border-2 border-[#171717] px-3 py-1 shadow-[2px_2px_0px_#171717]">
              <Sparkles className="w-4 h-4 text-[#171717]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#171717]">
                Portal Web3 &amp; Airdrop #1 Indonesia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#171717] leading-[1.08] tracking-tight">
              Temukan Peluang <span className="bg-[#FFE45C] px-2 border-2 border-[#171717] shadow-[4px_4px_0px_#171717] inline-block my-1">Airdrop Crypto</span> Berikutnya.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl font-medium">
              Panduan terpercaya berburu reward Web3, fase testnet bebas modal, strategi retroactive, ekosistem Layer 2, dan edukasi keamanan wallet anti-drainer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/kategori/airdrop"
                className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] px-6 py-3.5 text-sm sm:text-base font-black shadow-[4px_4px_0px_#171717] flex items-center justify-center gap-2"
              >
                <span>Jelajahi Airdrop Terbaru</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/artikel/panduan-airdrop-pemula"
                className="neo-btn bg-white hover:bg-[#8EC5FF] text-[#171717] px-6 py-3.5 text-sm sm:text-base font-bold shadow-[4px_4px_0px_#171717] flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Panduan Pemula (Mulai $0)</span>
              </Link>
            </div>

            {/* Trust Badges */}
            
          </div>

          {/* Right Column: Neo-Brutalist CSS/SVG Graphic Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing Shadow Box */}
              <div className="absolute inset-0 bg-[#171717] translate-x-3 translate-y-3" />

              {/* Foreground Box */}
              <div className="relative bg-white border-3 border-[#171717] p-6 space-y-4">
                <div className="flex items-center justify-between border-b-2.5 border-[#171717] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-[#171717]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-[#171717]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400 border border-[#171717]" />
                  </div>
                  <span className="font-mono text-xs font-black bg-[#FFE45C] border border-[#171717] px-2 py-0.5">
                    RADAR_AIRDROP_v1.0
                  </span>
                </div>

                {/* Simulated Radar items */}
                <div className="p-3.5 bg-[#FFFDF0] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                  <div className="flex items-center justify-between text-xs font-black mb-1">
                    <span className="flex items-center gap-1 text-[#171717]">
                      <Gift className="w-3.5 h-3.5 text-blue-600" />
                      Testnet Web3 (Faucet $0)
                    </span>
                    <span className="bg-[#B8F28B] border border-[#171717] px-1.5 py-0.2 text-[10px]">
                      AKTIF
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Klaim token uji coba dan selesaikan misi dApp tanpa modal.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FFFDF0] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                  <div className="flex items-center justify-between text-xs font-black mb-1">
                    <span className="flex items-center gap-1 text-[#171717]">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      Layer 2 &amp; Retroactive
                    </span>
                    <span className="bg-[#8EC5FF] border border-[#171717] px-1.5 py-0.2 text-[10px]">
                      TERVERIFIKASI
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Interaksi on-chain resmi di ekosistem rollup berpendanaan besar.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FFF4E5] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                  <div className="flex items-center justify-between text-xs font-black mb-1">
                    <span className="flex items-center gap-1 text-red-700">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Perlindungan Wallet Drainer
                    </span>
                    <span className="bg-[#FFAA00] border border-[#171717] px-1.5 py-0.2 text-[10px]">
                      PENTING
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Hindari phishing, tanda tangan kontrak palsu, dan scam link.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/kategori/testnet"
                    className="block text-center w-full py-2 bg-[#B8F28B] hover:bg-[#a3e870] border-2 border-[#171717] text-xs font-black shadow-[2px_2px_0px_#171717] transition-all"
                  >
                    Lihat Direktori Testnet →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
