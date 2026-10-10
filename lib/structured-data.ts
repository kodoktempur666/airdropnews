import { siteConfig } from './site-config';
import { Article } from '@/types/article';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.telegram,
      siteConfig.social.github,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.author.email,
      contactType: 'editorial support',
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.fullName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'id-ID',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function getArticleSchema(article: Article) {
  const imageUrl = article.frontmatter.coverImage.startsWith('http')
    ? article.frontmatter.coverImage
    : `${siteConfig.url}${article.frontmatter.coverImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/artikel/${article.slug}`,
    },
    headline: article.frontmatter.title,
    description: article.frontmatter.description,
    image: [imageUrl],
    datePublished: article.frontmatter.publishedAt,
    dateModified: article.frontmatter.updatedAt || article.frontmatter.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.frontmatter.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    articleSection: article.frontmatter.category,
    keywords: article.frontmatter.tags.join(', '),
    inLanguage: 'id-ID',
  };
}
