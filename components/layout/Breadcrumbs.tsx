import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm font-bold my-4 py-2 px-3 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] inline-flex max-w-full overflow-x-auto"
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:bg-[#FFE45C] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors shrink-0"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Beranda</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-neutral-600 truncate max-w-[200px] sm:max-w-[320px]">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:bg-[#FFE45C] px-1 py-0.5 border border-transparent hover:border-[#171717] transition-colors shrink-0"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
