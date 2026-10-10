import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Sparkles, ArrowRight } from 'lucide-react';

export function AnnouncementBar() {
  if (!siteConfig.announcement.enabled) return null;

  return (
    <div className="bg-[#FFE45C] border-b-2.5 border-[#171717] px-4 py-2 text-xs md:text-sm font-bold text-[#171717]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
        <span className="inline-flex items-center gap-1 bg-[#171717] text-[#FFE45C] px-2 py-0.5 rounded-none text-[11px] font-black uppercase tracking-wider">
          <Sparkles className="w-3 h-3" /> Update
        </span>
        <Link
          href={siteConfig.announcement.link}
          className="hover:underline flex items-center gap-1 font-extrabold group"
        >
          {siteConfig.announcement.text}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
