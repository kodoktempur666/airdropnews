import React from 'react';
import Link from 'next/link';
import { Article } from '@/types/article';
import { ShieldAlert, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';

interface Props {
  article: Article;
}

export function AirdropSpotlightCard({ article }: Props) {
  const { frontmatter } = article;
  const details = frontmatter.airdropDetails;

  const statusBg =
    details?.status === 'Aktif'
      ? 'bg-[#B8F28B]'
      : details?.status === 'Terverifikasi'
      ? 'bg-[#8EC5FF]'
      : 'bg-[#FFE45C]';

  return (
    <div className="bg-white border-2.5 border-[#171717] shadow-[5px_5px_0px_#171717] p-5 flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#171717] transition-all">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
          <span className="neo-badge bg-[#171717] text-[#FFE45C] text-[11px] font-black uppercase">
            Airdrop Spotlight
          </span>
          <span
            className={`neo-badge ${statusBg} text-[#171717] text-[11px] font-black uppercase flex items-center gap-1`}
          >
            <CheckCircle2 className="w-3 h-3" />
            Status: {details?.status || 'Terverifikasi'}
          </span>
        </div>

        {/* Project & Blockchain */}
        <div className="flex items-center gap-2 text-xs font-black text-neutral-600 mb-1.5 uppercase tracking-wide">
          <Cpu className="w-3.5 h-3.5 text-[#171717]" />
          <span>Jaringan: {details?.blockchain || frontmatter.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-lg text-[#171717] leading-snug mb-2 hover:underline">
          <Link href={`/artikel/${article.slug}`}>{frontmatter.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-700 line-clamp-2 leading-relaxed mb-4">
          {frontmatter.description}
        </p>

        {/* Requirements preview if available */}
        {details?.costRisk && (
          <div className="p-2.5 bg-[#FFF9DB] border-1.5 border-[#171717] mb-4 text-xs font-medium">
            <span className="font-black text-[#171717]">Estimasi Biaya:</span>{' '}
            {details.costRisk}
          </div>
        )}
      </div>

      {/* Footer warning & Action */}
      <div>
        {/* <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-300 p-2 mb-3">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>Bukan jaminan reward. Wajib verifikasi sumber resmi.</span>
        </div> */}

        <Link
          href={`/artikel/${article.slug}`}
          className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] w-full py-2 text-xs font-black flex items-center justify-center gap-1"
        >
          <span>Buka Panduan Lengkap</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
