export interface AirdropDetails {
  projectName: string;
  blockchain: string;
  status: 'Aktif' | 'Selesai' | 'Mendatang' | 'Spekulatif' | 'Terverifikasi';
  participationRequirements: string[];
  steps: string[];
  costRisk: string;
  verifiedDate: string;
  officialWebsite?: string;
  officialTwitter?: string;
  officialDiscord?: string;
}

export interface ArticleSource {
  title: string;
  url: string;
}

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  spotlight?: boolean;
  coverImage: string;
  coverImageAlt: string;
  readingTime?: number;
  sources?: ArticleSource[];
  airdropDetails?: AirdropDetails;
}

export interface ArticleHeading {
  id: string;
  text: string;
  level: number;
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTime: number;
  headings: ArticleHeading[];
}

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  color: string; // Neo-brutalism badge color, e.g., 'bg-[#FFE45C]'
  iconName: string;
}
