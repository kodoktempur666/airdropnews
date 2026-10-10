import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import { getCategoryByName } from '@/lib/categories';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TableOfContents } from '@/components/articles/TableOfContents';
import { MdxContent } from '@/components/articles/MdxContent';
import { AirdropInfoBox } from '@/components/articles/AirdropInfoBox';
import { SecurityWarningBox } from '@/components/articles/SecurityWarningBox';
import { ArticleShareButtons } from '@/components/articles/ArticleShareButtons';
import { RelatedArticles } from '@/components/articles/RelatedArticles';
import { InArticleAd } from '@/components/ads/InArticleAd';
import { AdSidebar } from '@/components/ads/AdSidebar';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import {
  Calendar,
  Clock,
  User,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter } = article;
  const canonicalUrl = `${siteConfig.url}/artikel/${article.slug}`;
  const imageUrl = frontmatter.coverImage.startsWith('http')
    ? frontmatter.coverImage
    : `${siteConfig.url}${frontmatter.coverImage}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt || frontmatter.publishedAt,
      authors: [frontmatter.author],
      section: frontmatter.category,
      tags: frontmatter.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: frontmatter.coverImageAlt || frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [imageUrl],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter } = article;
  const categoryInfo = getCategoryByName(frontmatter.category);
  const badgeColor = categoryInfo?.color || 'bg-[#FFE45C]';
  const relatedArticles = getRelatedArticles(
    article.slug,
    frontmatter.category,
    frontmatter.tags,
    3
  );

  const articleUrl = `${siteConfig.url}/artikel/${article.slug}`;

  const breadcrumbs = [
    {
      label: frontmatter.category,
      href: categoryInfo ? `/kategori/${categoryInfo.slug}` : '/',
    },
    { label: frontmatter.title },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Beranda', url: '/' },
    {
      name: frontmatter.category,
      url: categoryInfo ? `/kategori/${categoryInfo.slug}` : '/',
    },
    { name: frontmatter.title, url: `/artikel/${article.slug}` },
  ]);

  const articleSchema = getArticleSchema(article);

  return (
    <article className="py-8 bg-[#F8F7F2] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Main Article Content Column */}
          <main className="lg:col-span-8">
            <div className="bg-white border-3 border-[#171717] p-6 sm:p-10 shadow-[6px_6px_0px_#171717]">
              {/* Category & Date Header */}
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <span
                  className={`neo-badge ${badgeColor} text-[#171717] font-black uppercase text-xs`}
                >
                  {frontmatter.category}
                </span>

                <div className="flex items-center gap-2 text-xs font-bold text-neutral-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(frontmatter.publishedAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>

                  {frontmatter.updatedAt &&
                    frontmatter.updatedAt !== frontmatter.publishedAt && (
                      <span className="flex items-center gap-1 text-emerald-800 bg-emerald-50 border border-emerald-300 px-1.5 py-0.2">
                        <RefreshCw className="w-3 h-3" />
                        Update:{' '}
                        {new Date(frontmatter.updatedAt).toLocaleDateString(
                          'id-ID',
                          {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          }
                        )}
                      </span>
                    )}

                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime} menit baca
                  </span>
                </div>
              </div>

              {/* Unique H1 Heading */}
              <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-4xl text-[#171717] leading-tight mb-4">
                {frontmatter.title}
              </h1>

              {/* Article Summary */}
              <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed mb-6 p-4 bg-[#FFFDF0] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                {frontmatter.description}
              </p>

              {/* Author & Editorial Metadata */}
              <div className="flex items-center justify-between gap-4 py-3 border-y-2 border-dashed border-[#171717] mb-8 text-xs font-bold text-neutral-700 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#FFE45C] border-1.5 border-[#171717] flex items-center justify-center font-black">
                    <User className="w-4 h-4 text-[#171717]" />
                  </div>
                  <span>
                    Penulis: <strong>{frontmatter.author}</strong>
                  </span>
                </div>
                <div className="text-neutral-500">
                  Pedoman Editorial Terverifikasi
                </div>
              </div>

              {/* Main Cover Image */}
              <div className="relative aspect-[16/9] w-full border-2.5 border-[#171717] shadow-[4px_4px_0px_#171717] mb-8 overflow-hidden bg-neutral-100">
                <Image
                  src={frontmatter.coverImage}
                  alt={frontmatter.coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Airdrop Campaign Info Box if campaign details present */}
              {frontmatter.airdropDetails && (
                <AirdropInfoBox details={frontmatter.airdropDetails} />
              )}

              {/* Table of Contents */}
              <TableOfContents headings={article.headings} />

              {/* Markdown Content */}
              <MdxContent source={article.content} />

              {/* Security Warning Box */}
              <SecurityWarningBox />

              {/* In-Article Ad Placement */}
              <InArticleAd />

              {/* External Sources References */}
              {frontmatter.sources && frontmatter.sources.length > 0 && (
                <div className="my-8 p-5 bg-[#F8F7F2] border-2 border-[#171717]">
                  <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#171717] mb-3 flex items-center gap-1.5">
                    <ExternalLink className="w-4 h-4" />
                    Sumber Referensi Resmi &amp; Dokumentasi:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm font-semibold">
                    {frontmatter.sources.map((src, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-neutral-500 font-mono">[{idx + 1}]</span>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-[#FFE45C] underline decoration-1 text-[#171717]"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Context Disclaimer */}
              <div className="p-4 bg-[#FFF9DB] border-2 border-[#171717] text-xs font-medium text-neutral-800 leading-relaxed my-6 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <strong>Disclaimer Kontekstual:</strong> Informasi pada panduan ini diperiksa secara mandiri oleh tim editorial. AirdropNews bukan penyelenggara airdrop dan tidak terafiliasi secara resmi dengan pihak pengembang mana pun kecuali dinyatakan sebaliknya. Selalu lakukan verifikasi mandiri sebelum bertransaksi.
                </div>
              </div>

              {/* Share Buttons */}
              <ArticleShareButtons title={frontmatter.title} url={articleUrl} />

              {/* CTA to other articles */}
              <div className="mt-8 p-6 bg-[#FFE45C] border-3 border-[#171717] shadow-[4px_4px_0px_#171717] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-black text-lg text-[#171717]">
                    Ingin Memperdalam Pemahaman Web3?
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-800 font-medium mt-1">
                    Jelajahi panduan lain seputar testnet gratis dan cara hemat gas fee.
                  </p>
                </div>
                <Link
                  href="/kategori/tutorial"
                  className="neo-btn bg-white hover:bg-neutral-100 text-[#171717] px-4 py-2.5 text-xs font-black shadow-[2px_2px_0px_#171717] shrink-0 gap-1.5"
                >
                  <span>Buka Semua Tutorial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />
          </main>

          {/* Desktop Sidebar Column */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Sticky Guide Card */}
            <div className="bg-white border-3 border-[#171717] p-6 shadow-[5px_5px_0px_#171717]">
              <div className="inline-block px-2 py-0.5 bg-[#B8F28B] border border-black font-black text-[11px] uppercase mb-2">
                Peringatan Cepat
              </div>
              <h3 className="font-heading font-black text-base text-[#171717] mb-2">
                Jangan Pernah Kirim Seed Phrase
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-medium mb-4">
                Airdrop yang sah tidak akan pernah meminta 12/24 kata pemulihan Anda. Selalu gunakan dompet cadangan (*burner wallet*).
              </p>
              <Link
                href="/artikel/cara-mengenali-airdrop-scam"
                className="neo-btn bg-[#FFE45C] hover:bg-[#ffe033] text-[#171717] w-full py-2 text-xs font-black"
              >
                Ciri-Ciri Airdrop Scam →
              </Link>
            </div>

            {/* Ad Sidebar */}
            <AdSidebar />

            {/* Tags Cloud */}
            <div className="bg-white border-3 border-[#171717] p-6 shadow-[5px_5px_0px_#171717]">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-[#171717] mb-3 pb-1 border-b-2 border-black inline-block">
                Topik Terkait
              </h3>
              <div className="flex items-center gap-1.5 flex-wrap">
                {frontmatter.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/search?q=${encodeURIComponent(tag)}`}
                    className="text-xs font-bold text-[#171717] bg-[#F8F7F2] hover:bg-[#FFE45C] border border-[#171717] px-2 py-1 shadow-[1px_1px_0px_#171717] transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
