export const siteConfig = {
  name: 'AirdropNews',
  fullName: 'AirdropNews.my.id',
  url: 'https://airdropnews.my.id',
  tagline: 'Temukan Peluang Airdrop Crypto & Panduan Web3 Terlengkap',
  description:
    'Portal informasi terpercaya seputar berita airdrop crypto, panduan testnet, retroactive, blockchain Layer 2, DeFi, dan tutorial Web3 terlengkap dalam Bahasa Indonesia.',
  defaultKeywords: [
    'airdrop crypto',
    'airdrop indonesia',
    'testnet crypto',
    'retroactive airdrop',
    'panduan web3',
    'berita crypto',
    'layer 2',
    'defi',
    'keamanan wallet',
    'gas fee',
  ],
  author: {
    name: 'Tim Editorial AirdropNews',
    url: 'https://airdropnews.my.id/tentang',
    email: 'kontak@airdropnews.my.id',
  },
  social: {
    twitter: 'https://twitter.com/airdropnews_id',
    telegram: 'https://t.me/airdropnews_id',
    github: 'https://github.com/airdropnews',
  },
  announcement: {
    enabled: true,
    text: '⚡ Panduan Terbaru: 7 Cara Mengamankan Wallet dari Scam Drainer & Phishing!',
    link: '/artikel/cara-mengenali-airdrop-scam',
  },
  ads: {
    enabled: true,
    clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || '',
    slots: {
      homepageBanner: '1234567890',
      inArticle: '2345678901',
      sidebar: '3456789012',
      relatedArticles: '4567890123',
    },
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      'gQ_moWGjiFB7QDY2tbwCst-bQhglefMtcHOD_S2mMCg',
  },
};
