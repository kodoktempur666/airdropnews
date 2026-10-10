import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import { CATEGORIES } from '@/lib/categories';
import { ShieldAlert, Send } from 'lucide-react';
import { TwitterXIcon, GithubIcon } from '@/components/ui/Icons';
import { CurrentYear } from '@/components/ui/CurrentYear';

export function Footer() {
  return (
    <footer className="bg-[#F8F7F2] border-t-3 border-[#171717] mt-20">
      {/* Top Banner / Risk Warning */}
      <div className="bg-[#FFE45C] border-b-2.5 border-[#171717] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-xs md:text-sm font-bold text-[#171717]">
          <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
          <span>
            <strong>Peringatan Risiko:</strong> Konten di AirdropNews bukan nasihat finansial. Jangan pernah bagikan seed phrase atau private key kepada siapa pun!
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="AirdropNews Logo"
                width={220}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-700 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            {/* <div className="flex items-center gap-2 pt-2">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X AirdropNews"
                className="p-2 bg-white hover:bg-[#8EC5FF] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <TwitterXIcon className="w-4 h-4 text-[#171717]" />
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram AirdropNews"
                className="p-2 bg-white hover:bg-[#8EC5FF] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <Send className="w-4 h-4 text-[#171717]" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub AirdropNews"
                className="p-2 bg-white hover:bg-[#FFE45C] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#171717]" />
              </a>
            </div> */}
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider mb-4 pb-1 border-b-2 border-[#171717] inline-block">
              Kategori
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/kategori/${cat.slug}`}
                    className="hover:bg-[#FFE45C] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi & Legal */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider mb-4 pb-1 border-b-2 border-[#171717] inline-block">
              Informasi &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link
                  href="/tentang"
                  className="hover:bg-[#B8F28B] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/pedoman-editorial"
                  className="hover:bg-[#B8F28B] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  Pedoman Editorial
                </Link>
              </li>
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="hover:bg-[#B8F28B] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:bg-[#B8F28B] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/kontak"
                  className="hover:bg-[#B8F28B] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Navigasi Teknis */}
          {/* <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider mb-4 pb-1 border-b-2 border-[#171717] inline-block">
              Navigasi Teknis
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link
                  href="/search"
                  className="hover:bg-[#8EC5FF] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  Pencarian Artikel
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#8EC5FF] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  Sitemap XML
                </a>
              </li>
              <li>
                <a
                  href="/ads.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#8EC5FF] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors"
                >
                  ads.txt
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-2.5 border-[#171717] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-700">
          <div>
            © <CurrentYear /> <strong>{siteConfig.fullName}</strong>. Seluruh hak cipta dilindungi.
          </div>

        </div>
      </div>
    </footer>
  );
}
