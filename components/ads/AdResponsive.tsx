import React from 'react';
import { AdBase } from './AdBase';
import { siteConfig } from '@/lib/site-config';

interface Props {
  slot?: string;
  className?: string;
  label?: string;
}

export function AdResponsive({
  slot = siteConfig.ads.slots.relatedArticles,
  className = '',
  label = 'Sponsor',
}: Props) {
  return (
    <div className={`w-full ${className}`}>
      <AdBase
        slot={slot}
        format="auto"
        minHeight="min-h-[120px]"
        label={label}
      />
    </div>
  );
}
