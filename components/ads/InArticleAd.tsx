import React from 'react';
import { AdBase } from './AdBase';
import { siteConfig } from '@/lib/site-config';

interface Props {
  className?: string;
}

export function InArticleAd({ className = '' }: Props) {
  return (
    <div className={`my-8 ${className}`}>
      <AdBase
        slot={siteConfig.ads.slots.inArticle}
        format="fluid"
        minHeight="min-h-[140px]"
        label="Iklan Konten Artikel"
      />
    </div>
  );
}
