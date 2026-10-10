import React from 'react';
import { Article } from '@/types/article';
import { ArticleCard } from './ArticleCard';
import { Sparkles } from 'lucide-react';

interface Props {
  articles: Article[];
}

export function RelatedArticles({ articles }: Props) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="my-12 pt-8 border-t-3 border-[#171717]">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 bg-[#FFE45C] border-2 border-[#171717]">
          <Sparkles className="w-5 h-5 text-[#171717]" />
        </div>
        <h3 className="font-heading font-black text-xl sm:text-2xl text-[#171717] tracking-tight">
          Artikel &amp; Panduan Terkait
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
