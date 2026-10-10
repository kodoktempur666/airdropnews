import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getAllCategorySlugs } from '@/lib/categories';
import { getArticlesByCategory } from '@/lib/articles';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { ArticlePagination } from '@/components/articles/ArticlePagination';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import { FolderOpen } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const title = `Kategori ${category.name} - Berita & Panduan | ${siteConfig.name}`;
  const description = category.description;
  const canonicalUrl = `${siteConfig.url}/kategori/${category.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: siteConfig.fullName,
      images: [
        {
          url: `${siteConfig.url}/images/default-cover.svg`,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}/images/default-cover.svg`],
    },
  };
}

async function PaginatedArticlesList({
  slug,
  searchParams,
}: {
  slug: string;
  searchParams: Promise<{ page?: string }>;
}) {
  const category = getCategoryBySlug(slug);
  if (!category) return null;

  const { page } = await searchParams;
  const articles = getArticlesByCategory(category.slug);

  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const perPage = 6;
  const totalPages = Math.ceil(articles.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedArticles = articles.slice(startIndex, startIndex + perPage);

  if (paginatedArticles.length === 0) {
    return (
      <div className="bg-white border-3 border-[#171717] p-10 text-center shadow-[5px_5px_0px_#171717] my-12">
        <div className="w-16 h-16 bg-[#FFE45C] border-3 border-[#171717] mx-auto flex items-center justify-center mb-4 shadow-[3px_3px_0px_#171717]">
          <FolderOpen className="w-8 h-8 text-[#171717]" />
        </div>
        <h3 className="font-heading font-black text-xl text-[#171717] mb-2">
          Belum Ada Artikel di Kategori Ini
        </h3>
        <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
          Tim editorial sedang menyusun materi panduan terbaru untuk kategori{' '}
          <strong>{category.name}</strong>. Silakan periksa kembali dalam waktu dekat.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {paginatedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      <ArticlePagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={`/kategori/${category.slug}`}
      />
    </>
  );
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);

  const breadcrumbs = [
    { label: 'Kategori', href: '/' },
    { label: category.name },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    { name: category.name, url: `/kategori/${category.slug}` },
  ]);

  return (
    <div className="py-8 bg-[#F8F7F2] min-h-[70vh]">
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Category Header */}
        <div className="bg-white border-3 border-[#171717] p-6 sm:p-8 shadow-[5px_5px_0px_#171717] my-6">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`neo-badge ${category.color} text-[#171717] font-black uppercase text-xs`}
            >
              Kategori
            </span>
            <span className="text-xs font-bold text-neutral-500 font-mono">
              /kategori/{category.slug}
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#171717] mb-3">
            {category.name}
          </h1>

          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl font-medium leading-relaxed">
            {category.description}
          </p>

          <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300 text-xs font-bold text-neutral-600">
            Total {articles.length} artikel terindeks dalam kategori ini.
          </div>
        </div>

        {/* Suspense Boundary around searchParams data access */}
        <Suspense
          fallback={
            <div className="p-12 text-center bg-white border-2 border-black font-bold text-neutral-600">
              Memuat artikel...
            </div>
          }
        >
          <PaginatedArticlesList slug={category.slug} searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
