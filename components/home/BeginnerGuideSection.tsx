import React from 'react';
import Link from 'next/link';
import { Wallet, ShieldCheck, Fuel, FlaskConical, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Buat Burner Wallet Terpisah',
    desc: 'Amankan aset utama Anda dengan membuat dompet terpisah khusus aktivitas airdrop.',
    href: '/artikel/keamanan-wallet-crypto',
    icon: Wallet,
    color: 'bg-[#FFE45C]',
  },
  {
    step: '02',
    title: 'Pahami Mekanisme Gas Fee',
    desc: 'Pelajari cara menghitung Gwei dan tips hemat biaya transaksi sebelum bertransaksi on-chain.',
    href: '/artikel/panduan-gas-fee-blockchain',
    icon: Fuel,
    color: 'bg-[#8EC5FF]',
  },
  {
    step: '03',
    title: 'Coba Testnet Bebas Modal',
    desc: 'Gunakan koin faucet gratis untuk menguji dApp Web3 tanpa risiko kehilangan dana.',
    href: '/artikel/mengenal-testnet-dan-cara-ikutan',
    icon: FlaskConical,
    color: 'bg-[#B8F28B]',
  },
  {
    step: '04',
    title: 'Terapkan Checklist Keamanan',
    desc: 'Ketahui 10 poin penting menangkal perangkap wallet drainer dan tautan phishing.',
    href: '/artikel/checklist-keamanan-berburu-airdrop',
    icon: ShieldCheck,
    color: 'bg-[#FF90E8]',
  },
];

export function BeginnerGuideSection() {
  return (
    <section className="py-14 bg-white border-y-3 border-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="neo-badge bg-[#B8F28B] text-[#171717] font-black uppercase text-xs mb-2">
            Panduan Step-by-Step
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#171717]">
            Kurikulum Dasar Pemburu Airdrop
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 font-medium">
            Mulai langkah awal Anda dengan pondasi keamanan dan pemahaman teknis yang benar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#F8F7F2] border-2.5 border-[#171717] p-5 shadow-[4px_4px_0px_#171717] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-black text-2xl text-[#171717]">
                      {item.step}
                    </span>
                    <div className={`p-2.5 ${item.color} border-2 border-[#171717]`}>
                      <Icon className="w-5 h-5 text-[#171717]" />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-base sm:text-lg text-[#171717] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="neo-btn bg-white hover:bg-[#FFE45C] text-[#171717] py-2 text-xs font-black w-full gap-1"
                >
                  <span>Pelajari Panduan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
