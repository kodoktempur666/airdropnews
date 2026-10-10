import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function ArticlePagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  return (
    <nav
      aria-label="Navigasi Halaman"
      className="flex items-center justify-center gap-2 my-10 flex-wrap"
    >
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="neo-btn bg-white hover:bg-[#FFE45C] text-[#171717] px-3.5 py-2 text-xs font-bold gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold border-2 border-neutral-300 text-neutral-400 bg-neutral-100 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </span>
      )}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const isCurrent = page === currentPage;
        return (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`neo-btn px-3.5 py-2 text-xs font-black min-w-[40px] text-center ${
              isCurrent
                ? 'bg-[#FFE45C] text-[#171717]'
                : 'bg-white hover:bg-[#8EC5FF] text-[#171717]'
            }`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="neo-btn bg-white hover:bg-[#FFE45C] text-[#171717] px-3.5 py-2 text-xs font-bold gap-1"
        >
          <span>Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold border-2 border-neutral-300 text-neutral-400 bg-neutral-100 cursor-not-allowed">
          <span>Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}
