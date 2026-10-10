import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const articles = getAllArticles();

  // 1. Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // {
    //   url: `${baseUrl}/kontak`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    {
      url: `${baseUrl}/pedoman-editorial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kebijakan-privasi`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // 2. Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/kategori/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // 3. Article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => {
    const lastModDate = article.frontmatter.updatedAt || article.frontmatter.publishedAt;
    return {
      url: `${baseUrl}/artikel/${article.slug}`,
      lastModified: new Date(lastModDate),
      changeFrequency: 'weekly',
      priority: 0.9,
    };
  });

  return [...staticPages, ...categoryPages, ...articlePages];
}
