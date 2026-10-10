'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Airdrop', href: '/kategori/airdrop' },
  { label: 'Testnet', href: '/kategori/testnet' },
  { label: 'Retroactive', href: '/kategori/retroactive' },
  { label: 'Layer 2', href: '/kategori/layer-2' },
  { label: 'Tutorial', href: '/kategori/tutorial' },
  { label: 'Tentang Kami', href: '/tentang' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F2] border-b-3 border-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-40 sm:w-56 h-12 flex items-center">
              <Image
                src="/logo.svg"
                alt="AirdropNews Logo"
                width={240}
                height={52}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-bold border-2 transition-all ${
                    active
                      ? 'bg-[#FFE45C] border-[#171717] shadow-[2px_2px_0px_#171717]'
                      : 'border-transparent hover:border-[#171717] hover:bg-white hover:shadow-[2px_2px_0px_#171717]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Search & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              aria-label="Cari Artikel"
              className="p-2.5 bg-white hover:bg-[#8EC5FF] border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#171717] transition-all flex items-center gap-2 font-bold text-xs"
            >
              <Search className="w-4 h-4 text-[#171717]" />
              <span className="hidden sm:inline">Cari...</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu navigasi"
              className="lg:hidden p-2.5 bg-[#FFE45C] border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#171717]" />
              ) : (
                <Menu className="w-5 h-5 text-[#171717]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F7F2] border-b-3 border-[#171717] px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-[0_8px_0_#171717]">
          <div className="grid grid-cols-1 gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3 font-bold text-sm border-2.5 border-[#171717] shadow-[3px_3px_0px_#171717] flex items-center justify-between ${
                    active ? 'bg-[#FFE45C]' : 'bg-white hover:bg-[#FFE45C]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono font-black">→</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t-2 border-dashed border-[#171717] flex items-center justify-between text-xs font-bold text-neutral-600">
            <span>Portal Edukasi Web3 Indonesia</span>
            <span className="bg-[#B8F28B] text-[#171717] border border-[#171717] px-2 py-0.5 font-mono">
              v1.0
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
