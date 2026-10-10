import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';
import { getCategoryByName } from '@/lib/categories';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  article: Article;
}

export function FeaturedArticleCard({ article }: Props) {
  const { frontmatter } = article;
  const categoryInfo = getCategoryByName(frontmatter.category);
  const badgeColor = categoryInfo?.color || 'bg-[#FFE45C]';

  return (
    <article className="group bg-white border-3 border-[#171717] shadow-[6px_6px_0px_#171717] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Cover Image */}
        <Link
          href={`/artikel/${article.slug}`}
          className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[360px] border-b-3 lg:border-b-0 lg:border-r-3 border-[#171717] bg-neutral-100 overflow-hidden block"
        >
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.coverImageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="neo-badge bg-[#171717] text-[#FFE45C] font-black uppercase text-xs flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Pilihan Editor
            </span>
            <span
              className={`neo-badge ${badgeColor} text-[#171717] font-black uppercase text-xs`}
            >
              {frontmatter.category}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#F8F7F2]">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold text-neutral-600 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={frontmatter.publishedAt}>
                  {new Date(frontmatter.publishedAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime} menit baca
              </span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#171717] leading-tight mb-3 group-hover:underline decoration-3">
              <Link href={`/artikel/${article.slug}`}>{frontmatter.title}</Link>
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
              {frontmatter.description}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap mb-6">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold text-neutral-700 bg-white border-1.5 border-[#171717] px-2 py-0.5 shadow-[1px_1px_0px_#171717]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href={`/artikel/${article.slug}`}
              className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] px-5 py-3 text-sm font-black w-full sm:w-auto inline-flex gap-2"
            >
              <span>Baca Selengkapnya</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
