'use client';

import React from 'react';
import { ArticleHeading } from '@/types/article';
import { ListOrdered } from 'lucide-react';

interface Props {
  headings: ArticleHeading[];
}

export function TableOfContents({ headings }: Props) {
  if (!headings || headings.length === 0) return null;

  return (
    <nav
      aria-label="Daftar Isi Artikel"
      className="bg-white border-2.5 border-[#171717] p-5 shadow-[4px_4px_0px_#171717] my-6"
    >
      <div className="flex items-center gap-2 pb-2.5 border-b-2 border-[#171717] mb-3">
        <div className="p-1 bg-[#FFE45C] border border-[#171717]">
          <ListOrdered className="w-4 h-4 text-[#171717]" />
        </div>
        <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#171717]">
          Daftar Isi Panduan
        </h4>
      </div>

      <ul className="space-y-2 text-xs sm:text-sm font-semibold text-neutral-800">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${
              heading.level === 3 ? 'pl-4 text-xs text-neutral-600' : ''
            }`}
          >
            <a
              href={`#${heading.id}`}
              className="hover:bg-[#FFE45C] hover:text-[#171717] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-all inline-block max-w-full truncate"
            >
              {heading.level === 3 ? '↳ ' : '• '}
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
