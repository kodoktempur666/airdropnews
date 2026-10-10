import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, ArticleFrontmatter, ArticleHeading, AirdropDetails } from '@/types/article';
import { calculateReadingTime } from './reading-time';

const ARTICLES_DIRECTORY = path.join(process.cwd(), 'content', 'articles');

function extractHeadings(markdown: string): ArticleHeading[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;
  const headings: ArticleHeading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    // Generate clean slug ID from heading text
    const id = rawText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({
      id,
      text: rawText,
      level,
    });
  }

  return headings;
}

function validateFrontmatter(data: Record<string, unknown>, filePath: string): ArticleFrontmatter {
  const requiredFields = [
    'title',
    'slug',
    'description',
    'category',
    'tags',
    'author',
    'publishedAt',
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(
        `[Frontmatter Error] Field "${field}" wajib ada pada file: ${filePath}`
      );
    }
  }

  return {
    title: String(data.title),
    slug: String(data.slug),
    description: String(data.description),
    category: String(data.category),
    tags: Array.isArray(data.tags) ? data.tags : [String(data.tags)],
    author: String(data.author),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : String(data.publishedAt),
    featured: Boolean(data.featured),
    spotlight: Boolean(data.spotlight),
    coverImage: data.coverImage ? String(data.coverImage) : '/images/default-cover.svg',
    coverImageAlt: data.coverImageAlt ? String(data.coverImageAlt) : String(data.title),
    readingTime: data.readingTime ? Number(data.readingTime) : undefined,
    sources: Array.isArray(data.sources) ? (data.sources as ArticleFrontmatter['sources']) : [],
    airdropDetails: data.airdropDetails ? (data.airdropDetails as unknown as AirdropDetails) : undefined,
  };
}

let cachedArticles: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (cachedArticles && process.env.NODE_ENV === 'production') {
    return cachedArticles;
  }

  if (!fs.existsSync(ARTICLES_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(ARTICLES_DIRECTORY);
  const articles: Article[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.mdx') && !fileName.endsWith('.md')) {
      continue;
    }

    const fullPath = path.join(ARTICLES_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = validateFrontmatter(data, fullPath);
    const readingTime = frontmatter.readingTime || calculateReadingTime(content);
    const headings = extractHeadings(content);

    articles.push({
      slug: frontmatter.slug,
      frontmatter: {
        ...frontmatter,
        readingTime,
      },
      content,
      readingTime,
      headings,
    });
  }

  // Sort descending by publishedAt
  articles.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt).getTime();
    const dateB = new Date(b.frontmatter.publishedAt).getTime();
    return dateB - dateA;
  });

  cachedArticles = articles;
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categoryNameOrSlug: string): Article[] {
  const articles = getAllArticles();
  const query = categoryNameOrSlug.toLowerCase();

  return articles.filter(
    (article) =>
      article.frontmatter.category.toLowerCase() === query ||
      article.frontmatter.category.toLowerCase().replace(/\s+/g, '-') === query
  );
}

export function getFeaturedArticles(): Article[] {
  const articles = getAllArticles();
  return articles.filter((article) => article.frontmatter.featured);
}

export function getSpotlightArticles(): Article[] {
  const articles = getAllArticles();
  return articles.filter(
    (article) => article.frontmatter.spotlight || article.frontmatter.airdropDetails
  );
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  tags: string[] = [],
  limit = 3
): Article[] {
  const articles = getAllArticles();
  const others = articles.filter((a) => a.slug !== currentSlug);

  const scored = others.map((article) => {
    let score = 0;
    if (article.frontmatter.category.toLowerCase() === category.toLowerCase()) {
      score += 3;
    }
    for (const tag of tags) {
      if (article.frontmatter.tags.includes(tag)) {
        score += 1;
      }
    }
    return { article, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.article);
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tagSet = new Set<string>();

  for (const article of articles) {
    for (const tag of article.frontmatter.tags) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet).sort();
}

export function getSearchableArticlesDataset() {
  const articles = getAllArticles();
  return articles.map((a) => ({
    slug: a.slug,
    title: a.frontmatter.title,
    description: a.frontmatter.description,
    category: a.frontmatter.category,
    tags: a.frontmatter.tags,
    publishedAt: a.frontmatter.publishedAt,
    readingTime: a.readingTime,
    coverImage: a.frontmatter.coverImage,
    coverImageAlt: a.frontmatter.coverImageAlt,
    contentPreview: a.content.slice(0, 300).replace(/[#*`_~>-]/g, ''),
  }));
}
