import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
import {
  Gift,
  FlaskConical,
  History,
  BookOpen,
  Layers,
  Coins,
  Newspaper,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Gift,
  FlaskConical,
  History,
  BookOpen,
  Layers,
  Coins,
  Newspaper,
};

export function CategoryPills() {
  return (
    <section className="py-12 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div>
            <span className="neo-badge bg-[#8EC5FF] text-[#171717] font-black uppercase text-xs mb-1">
              Topik Populer
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#171717]">
              Jelajahi Berdasarkan Kategori
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-neutral-600 max-w-sm">
            Temukan panduan terarah sesuai fokus dan strategi on-chain Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.iconName] || BookOpen;
            return (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className={`group p-4 border-2.5 border-[#171717] ${cat.color} shadow-[3px_3px_0px_#171717] hover:shadow-[1px_1px_0px_#171717] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div className="p-2 bg-white border-2 border-[#171717] w-fit mb-3 shadow-[1px_1px_0px_#171717]">
                  <Icon className="w-5 h-5 text-[#171717]" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-sm sm:text-base text-[#171717] leading-tight">
                    {cat.name}
                  </h3>
                  <div className="mt-2 text-[11px] font-bold text-neutral-700 flex items-center gap-1 group-hover:underline">
                    <span>Lihat</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
