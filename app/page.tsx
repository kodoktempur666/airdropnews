import React from 'react';
import Link from 'next/link';
import {
  getAllArticles,
  getFeaturedArticles,
  getSpotlightArticles,
} from '@/lib/articles';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoryPills } from '@/components/home/CategoryPills';
import { BeginnerGuideSection } from '@/components/home/BeginnerGuideSection';
import { DisclaimerSection } from '@/components/home/DisclaimerSection';
import { FeaturedArticleCard } from '@/components/articles/FeaturedArticleCard';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { AirdropSpotlightCard } from '@/components/articles/AirdropSpotlightCard';
import { AdBanner } from '@/components/ads/AdBanner';
import { Newspaper, Flame, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const allArticles = getAllArticles();
  const featuredArticles = getFeaturedArticles();
  const spotlightArticles = getSpotlightArticles();

  // Use the primary featured article, or fallback to the most recent
  const mainFeatured = featuredArticles[0] || allArticles[0];

  // Latest news: excluding the main featured
  const latestArticles = allArticles
    .filter((a) => a.slug !== mainFeatured?.slug)
    .slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Article Section */}
      {mainFeatured && (
        <section className="py-12 bg-[#F8F7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-[#FFE45C] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <Flame className="w-5 h-5 text-[#171717]" />
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#171717] tracking-tight">
                Artikel Unggulan Hari Ini
              </h2>
            </div>

            <FeaturedArticleCard article={mainFeatured} />
          </div>
        </section>
      )}

      {/* 3. Popular Categories Pills */}
      <CategoryPills />

      {/* 4. Latest News Grid */}
      <section className="py-12 bg-white border-y-3 border-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#8EC5FF] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <Newspaper className="w-5 h-5 text-[#171717]" />
              </div>
              <div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#171717] tracking-tight">
                  Kabar &amp; Panduan Terbaru
                </h2>
                <p className="text-xs sm:text-sm font-medium text-neutral-600">
                  Update informasi seputar perkembangan ekosistem Web3
                </p>
              </div>
            </div>

            <Link
              href="/kategori/tutorial"
              className="neo-btn bg-white hover:bg-[#FFE45C] text-[#171717] px-4 py-2 text-xs font-black gap-1.5"
            >
              <span>Lihat Semua Artikel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Ad Slot on Homepage after article cards */}
          <div className="mt-12">
            <AdBanner />
          </div>
        </div>
      </section>

      {/* 5. Airdrop Spotlight Section */}
      {spotlightArticles.length > 0 && (
        <section className="py-14 bg-[#F8F7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
              <div>
                <span className="neo-badge bg-[#FFE45C] text-[#171717] font-black uppercase text-xs mb-1">
                  Radar Peluang
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#171717]">
                  Airdrop &amp; Testnet Spotlight
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 max-w-sm">
                Proyek dengan informasi jaringan terverifikasi dan panduan langkah partisipasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spotlightArticles.slice(0, 3).map((article) => (
                <AirdropSpotlightCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Beginner Guide Section */}
      <BeginnerGuideSection />

      {/* 7. Disclaimer Section */}
      <DisclaimerSection />
    </div>
  );
}
