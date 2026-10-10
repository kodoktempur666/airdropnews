'use client';

import React, { useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Clock, Calendar, ArrowUpRight, Filter } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';

interface SearchableArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  coverImage: string;
  coverImageAlt: string;
  contentPreview: string;
}

interface Props {
  initialArticles: SearchableArticle[];
}

export function SearchClient({ initialArticles }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || '';

  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [prevParams, setPrevParams] = useState({ q: queryParam, cat: categoryParam });

  // Sync state during render when URL search params change
  if (queryParam !== prevParams.q || categoryParam !== prevParams.cat) {
    setPrevParams({ q: queryParam, cat: categoryParam });
    setSearchTerm(queryParam);
    setSelectedCategory(categoryParam);
  }

  // Update URL parameters
  const updateQuery = (text: string, category: string) => {
    const params = new URLSearchParams();
    if (text.trim()) params.set('q', text.trim());
    if (category) params.set('category', category);

    const queryString = params.toString();
    const newUrl = queryString ? `/search?${queryString}` : '/search';
    router.replace(newUrl, { scroll: false });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    updateQuery(val, selectedCategory);
  };

  const handleCategoryClick = (catName: string) => {
    const nextCategory = selectedCategory === catName ? '' : catName;
    setSelectedCategory(nextCategory);
    updateQuery(searchTerm, nextCategory);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedCategory('');
    router.replace('/search', { scroll: false });
  };

  // Filter articles
  const filteredArticles = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return initialArticles.filter((article) => {
      // Category match
      if (
        selectedCategory &&
        article.category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }

      if (!term) return true;

      // Search match across title, description, category, tags, content
      const titleMatch = article.title.toLowerCase().includes(term);
      const descMatch = article.description.toLowerCase().includes(term);
      const catMatch = article.category.toLowerCase().includes(term);
      const tagsMatch = article.tags.some((t) => t.toLowerCase().includes(term));
      const contentMatch = article.contentPreview.toLowerCase().includes(term);

      return titleMatch || descMatch || catMatch || tagsMatch || contentMatch;
    });
  }, [searchTerm, selectedCategory, initialArticles]);

  return (
    <div className="space-y-8">
      {/* Search Input Box */}
      <div className="bg-white border-3 border-[#171717] p-4 sm:p-6 shadow-[5px_5px_0px_#171717]">
        <div className="relative flex items-center">
          <label htmlFor="search-input" className="sr-only">
            Cari artikel airdrop, testnet, tutorial
          </label>
          <Search className="absolute left-4 w-5 h-5 text-neutral-500 pointer-events-none" />
          <input
            id="search-input"
            type="search"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Ketik kata kunci (misal: testnet, scam, wallet, layer 2)..."
            className="w-full pl-12 pr-12 py-3.5 bg-[#F8F7F2] border-2 border-[#171717] font-bold text-sm sm:text-base text-[#171717] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FFE45C] focus:bg-white shadow-[2px_2px_0px_#171717]"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                updateQuery('', selectedCategory);
              }}
              aria-label="Hapus kata kunci pencarian"
              className="absolute right-4 p-1 bg-neutral-200 hover:bg-neutral-300 border border-black rounded-none cursor-pointer"
            >
              <X className="w-4 h-4 text-[#171717]" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-black text-neutral-600 flex items-center gap-1 uppercase mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>

          <button
            onClick={() => handleCategoryClick('')}
            className={`px-2.5 py-1 text-xs font-bold border-1.5 border-[#171717] shadow-[1px_1px_0px_#171717] transition-all cursor-pointer ${
              !selectedCategory
                ? 'bg-[#171717] text-[#FFE45C]'
                : 'bg-white hover:bg-neutral-100 text-[#171717]'
            }`}
          >
            Semua
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected =
              selectedCategory.toLowerCase() === cat.name.toLowerCase();
            return (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.name)}
                className={`px-2.5 py-1 text-xs font-bold border-1.5 border-[#171717] shadow-[1px_1px_0px_#171717] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFE45C] text-[#171717] font-black'
                    : 'bg-white hover:bg-[#FFE45C] text-[#171717]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}

          {(searchTerm || selectedCategory) && (
            <button
              onClick={handleClear}
              className="text-xs font-bold text-red-600 hover:underline ml-auto"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-neutral-700">
        <div>
          Menampilkan{' '}
          <span className="bg-[#FFE45C] border border-black px-1.5 py-0.5 font-black text-black">
            {filteredArticles.length}
          </span>{' '}
          artikel
          {searchTerm && <span> untuk &quot;{searchTerm}&quot;</span>}
          {selectedCategory && <span> dalam kategori &quot;{selectedCategory}&quot;</span>}
        </div>
      </div>

      {/* Articles Grid or Empty State */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group bg-white border-2.5 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[1px_1px_0px_#171717] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col h-full overflow-hidden"
            >
              <Link
                href={`/artikel/${article.slug}`}
                className="block relative aspect-[16/9] w-full border-b-2.5 border-[#171717] bg-neutral-100 overflow-hidden"
              >
                <Image
                  src={article.coverImage}
                  alt={article.coverImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="neo-badge bg-[#FFE45C] text-[#171717] font-black uppercase text-[11px]">
                    {article.category}
                  </span>
                </div>
              </Link>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-bold text-neutral-600 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime} mnt
                  </span>
                </div>

                <h3 className="font-heading font-black text-lg text-[#171717] line-clamp-2 mb-2 group-hover:underline">
                  <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-sm text-neutral-700 line-clamp-2 mb-4 flex-1">
                  {article.description}
                </p>

                <div className="pt-3 border-t-2 border-dashed border-neutral-300 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 flex-wrap">
                    {article.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold text-neutral-600 bg-neutral-100 border border-black px-1.5 py-0.5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/artikel/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-[#171717] hover:bg-[#FFE45C] px-1.5 py-0.5 border border-black transition-colors"
                  >
                    Buka
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border-3 border-[#171717] p-10 text-center shadow-[5px_5px_0px_#171717] my-8">
          <div className="w-16 h-16 bg-[#FFE45C] border-3 border-[#171717] mx-auto flex items-center justify-center mb-4 shadow-[3px_3px_0px_#171717]">
            <Search className="w-8 h-8 text-[#171717]" />
          </div>
          <h3 className="font-heading font-black text-xl text-[#171717] mb-2">
            Artikel Tidak Ditemukan
          </h3>
          <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
            Maaf, kami tidak menemukan artikel yang cocok dengan kata kunci &quot;
            <strong>{searchTerm}</strong>&quot;. Coba gunakan kata kunci yang lebih umum seperti{' '}
            <code className="bg-neutral-100 px-1 border border-neutral-300">airdrop</code>,{' '}
            <code className="bg-neutral-100 px-1 border border-neutral-300">testnet</code>, atau{' '}
            <code className="bg-neutral-100 px-1 border border-neutral-300">wallet</code>.
          </p>
          <button
            onClick={handleClear}
            className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] px-5 py-2.5 text-xs font-black"
          >
            Tampilkan Semua Artikel
          </button>
        </div>
      )}
    </div>
  );
}
