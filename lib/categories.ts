import { CategoryInfo } from '@/types/article';

export const CATEGORIES: CategoryInfo[] = [
  {
    name: 'Airdrop',
    slug: 'airdrop',
    description: 'Panduan berburu airdrop token crypto, kriteria kelayakan, dan strategi memaksimalkan reward.',
    color: 'bg-[#FFE45C]', // Bright Yellow
    iconName: 'Gift',
  },
  {
    name: 'Testnet',
    slug: 'testnet',
    description: 'Panduan mencoba testnet blockchain, klaim faucet gratis, dan interaksi dApp tanpa modal modal uang asli.',
    color: 'bg-[#B8F28B]', // Lime Green
    iconName: 'FlaskConical',
  },
  {
    name: 'Retroactive',
    slug: 'retroactive',
    description: 'Strategi menggunakan protokol dApp lebih awal untuk mendapatkan alokasi retroactive token masa depan.',
    color: 'bg-[#8EC5FF]', // Sky Blue
    iconName: 'History',
  },
  {
    name: 'Tutorial',
    slug: 'tutorial',
    description: 'Panduan langkah demi langkah penggunaan Web3, setup wallet, manajemen gas fee, dan keamanan crypto.',
    color: 'bg-[#FF90E8]', // Neo Pink
    iconName: 'BookOpen',
  },
  {
    name: 'Layer 2',
    slug: 'layer-2',
    description: 'Eksplorasi ekosistem Layer 2 Ethereum seperti Arbitrum, Optimism, zkSync, Base, dan peluang airdrop di dalamnya.',
    color: 'bg-[#FFD166]', // Warm Yellow
    iconName: 'Layers',
  },
  {
    name: 'DeFi',
    slug: 'defi',
    description: 'Panduan ekosistem Decentralized Finance, staking, yield farming, swap, dan liquidity provider.',
    color: 'bg-[#B4ECE3]', // Mint Blue
    iconName: 'Coins',
  },
  {
    name: 'Berita',
    slug: 'berita',
    description: 'Kabar dan update terverifikasi mengenai ekosistem airdrop, snapshot, dan perkembangan industri Web3.',
    color: 'bg-[#E0C3FC]', // Lilac
    iconName: 'Newspaper',
  },
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return CATEGORIES.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getCategoryByName(name: string): CategoryInfo | undefined {
  return CATEGORIES.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
}

export function getAllCategorySlugs(): string[] {
  return CATEGORIES.map((c) => c.slug);
}
