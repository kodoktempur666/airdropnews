import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';
import { getCategoryByName } from '@/lib/categories';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

interface Props {
  article: Article;
  priority?: boolean;
}

export function ArticleCard({ article, priority = false }: Props) {
  const { frontmatter } = article;
  const categoryInfo = getCategoryByName(frontmatter.category);
  const badgeColor = categoryInfo?.color || 'bg-[#FFE45C]';

  return (
    <article className="group bg-white border-2.5 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[1px_1px_0px_#171717] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex flex-col h-full overflow-hidden">
      {/* Cover Image Container */}
      <Link
        href={`/artikel/${article.slug}`}
        className="block relative aspect-[16/9] w-full border-b-2.5 border-[#171717] bg-neutral-100 overflow-hidden"
      >
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.coverImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge on top of image */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`neo-badge ${badgeColor} text-[#171717] font-black uppercase text-[11px]`}
          >
            {frontmatter.category}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta info: Date & Reading time */}
        <div className="flex items-center gap-3 text-xs font-bold text-neutral-600 mb-2.5">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={frontmatter.publishedAt}>
              {new Date(frontmatter.publishedAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
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

        {/* Title */}
        <h3 className="font-heading font-black text-lg md:text-xl text-[#171717] line-clamp-2 mb-2 group-hover:underline decoration-2">
          <Link href={`/artikel/${article.slug}`}>{frontmatter.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-700 line-clamp-2 mb-4 flex-1 leading-relaxed">
          {frontmatter.description}
        </p>

        {/* Tags & Action Link */}
        <div className="pt-3 border-t-2 border-dashed border-neutral-300 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 flex-wrap">
            {frontmatter.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold text-neutral-600 bg-neutral-100 border border-[#171717] px-1.5 py-0.5"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href={`/artikel/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-extrabold text-[#171717] hover:bg-[#FFE45C] px-1.5 py-0.5 border border-[#171717] transition-colors"
          >
            Baca
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
