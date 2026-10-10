import React from 'react';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 px-4 bg-[#F8F7F2] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full bg-white border-3 border-[#171717] p-8 shadow-[6px_6px_0px_#171717] text-center">
        <div className="inline-block px-3 py-1 bg-[#FFE45C] border-2 border-[#171717] font-mono font-black text-2xl mb-4 shadow-[2px_2px_0px_#171717]">
          ERROR 404
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-3xl text-[#171717] mb-3">
          Halaman Tidak Ditemukan!
        </h1>

        <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
          Tautan yang Anda tuju mungkin sudah kedaluwarsa, telah dipindahkan, atau belum dialokasikan di blok jaringan ini.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] px-4 py-2.5 text-xs font-black shadow-[3px_3px_0px_#171717] w-full sm:w-auto gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          <Link
            href="/search"
            className="neo-btn bg-white hover:bg-neutral-100 text-[#171717] px-4 py-2.5 text-xs font-bold shadow-[2px_2px_0px_#171717] w-full sm:w-auto gap-1.5"
          >
            <Search className="w-4 h-4" />
            <span>Cari Artikel</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
