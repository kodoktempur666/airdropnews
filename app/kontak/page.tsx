import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Mail, Send, ShieldAlert, MessageSquare } from 'lucide-react';
import { TwitterXIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description:
    'Kontak resmi tim editorial AirdropNews.my.id untuk pertanyaan, masukan koreksi artikel, dan kemitraan resmi.',
  alternates: {
    canonical: `${siteConfig.url}/kontak`,
  },
};

export default function KontakPage() {
  const breadcrumbs = [{ label: 'Kontak Kami' }];

  return (
    <div className="py-8 bg-[#F8F7F2] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white border-3 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717] my-6 space-y-8">
          <div>
            <span className="neo-badge bg-[#8EC5FF] text-[#171717] font-black uppercase text-xs mb-2">
              Saluran Komunikasi Resmi
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#171717]">
              Hubungi Tim AirdropNews
            </h1>
            <p className="text-base text-neutral-700 font-medium leading-relaxed mt-3">
              Kami menyambut masukan, pelaporan kesalahan data (*fact-checking*), saran topik edukasi Web3, serta pertanyaan kemitraan yang sejalan dengan standar editorial kami.
            </p>
          </div>

          {/* Security Alert about contact */}
          <div className="p-4 bg-[#FFF4E5] border-2 border-[#171717] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
              <strong>Pemberitahuan Keamanan:</strong> Tim resmi AirdropNews tidak pernah menghubungi Anda secara sepihak melalui pesan pribadi untuk menawarkan token, meminta transfer kripto, atau menanyakan seed phrase. Selalu waspada terhadap penipuan yang mengatasnamakan media ini.
            </div>
          </div>

          {/* Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#F8F7F2] border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717]">
              <div className="p-2.5 bg-[#FFE45C] border-2 border-[#171717] w-fit mb-3">
                <Mail className="w-5 h-5 text-[#171717]" />
              </div>
              <h3 className="font-heading font-black text-base text-[#171717] mb-1">
                Surat Elektronik (Email)
              </h3>
              <p className="text-xs text-neutral-600 mb-3">
                Untuk pertanyaan umum, koreksi data artikel, dan pengajuan kerjasama media:
              </p>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="font-mono text-sm font-black text-[#171717] bg-white border border-[#171717] px-2.5 py-1 inline-block hover:bg-[#FFE45C] transition-colors"
              >
                {siteConfig.author.email}
              </a>
            </div>

            <div className="p-6 bg-[#F8F7F2] border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717]">
              <div className="p-2.5 bg-[#8EC5FF] border-2 border-[#171717] w-fit mb-3">
                <TwitterXIcon className="w-5 h-5 text-[#171717]" />
              </div>
              <h3 className="font-heading font-black text-base text-[#171717] mb-1">
                Kanal Twitter / X
              </h3>
              <p className="text-xs text-neutral-600 mb-3">
                Ikuti pengumuman singkat dan update edukasi terkini di platform X:
              </p>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-black text-[#171717] bg-white border border-[#171717] px-2.5 py-1 inline-block hover:bg-[#8EC5FF] transition-colors"
              >
                @airdropnews_id
              </a>
            </div>

            <div className="p-6 bg-[#F8F7F2] border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717]">
              <div className="p-2.5 bg-[#B8F28B] border-2 border-[#171717] w-fit mb-3">
                <Send className="w-5 h-5 text-[#171717]" />
              </div>
              <h3 className="font-heading font-black text-base text-[#171717] mb-1">
                Komunitas Telegram
              </h3>
              <p className="text-xs text-neutral-600 mb-3">
                Saluran siaran berita dan peringatan dini bahaya scam:
              </p>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-black text-[#171717] bg-white border border-[#171717] px-2.5 py-1 inline-block hover:bg-[#B8F28B] transition-colors"
              >
                t.me/airdropnews_id
              </a>
            </div>

            <div className="p-6 bg-[#F8F7F2] border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717]">
              <div className="p-2.5 bg-[#FF90E8] border-2 border-[#171717] w-fit mb-3">
                <MessageSquare className="w-5 h-5 text-[#171717]" />
              </div>
              <h3 className="font-heading font-black text-base text-[#171717] mb-1">
                Layanan Tanggapan
              </h3>
              <p className="text-xs text-neutral-600">
                Pesan yang masuk ke email redaksi akan ditinjau dalam waktu 1–2 hari kerja (Senin - Jumat, 09:00 - 17:00 WIB).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
