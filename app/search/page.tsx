import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { getSearchableArticlesDataset } from '@/lib/articles';
import { siteConfig } from '@/lib/site-config';
import { SearchClient } from '@/components/search/SearchClient';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pencarian Artikel & Panduan Airdrop',
  description:
    'Cari artikel airdrop crypto, panduan testnet, strategi retroactive, dan edukasi keamanan Web3 berdasarkan kata kunci.',
  alternates: {
    canonical: `${siteConfig.url}/search`,
  },
};

export default function SearchPage() {
  const dataset = getSearchableArticlesDataset();

  const breadcrumbs = [
    { label: 'Pencarian Artikel' },
  ];

  return (
    <div className="py-8 bg-[#F8F7F2] min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="my-6">
          <div className="inline-flex items-center gap-1.5 bg-[#8EC5FF] border-2 border-[#171717] px-2.5 py-1 text-xs font-black text-[#171717] shadow-[2px_2px_0px_#171717] mb-2">
            <Search className="w-3.5 h-3.5" />
            <span>Pencarian Database Lokal</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#171717]">
            Cari Artikel &amp; Panduan Web3
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-medium mt-1">
            Gunakan kotak pencarian di bawah untuk menemukan topik spesifik dengan cepat.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="p-12 text-center bg-white border-2 border-black font-bold text-neutral-600">
              Memuat data pencarian...
            </div>
          }
        >
          <SearchClient initialArticles={dataset} />
        </Suspense>
      </div>
    </div>
  );
}
