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
    clientId: process.env.ADSENSE_CLIENT || 'ca-pub-2147739006413698',
    slots: {
      homepageBanner: '2025741496',
      inArticle: '4106953231',
      sidebar: '2605245862',
      relatedArticles: '3723809852',
    },
  },
  analytics: {
    gaId: process.env.GA_ID || 'G-0EGMT6CQ40',
  },
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ||
      'gQ_moWGjiFB7QDY2tbwCst-bQhglefMtcHOD_S2mMCg',
  },
  
};
