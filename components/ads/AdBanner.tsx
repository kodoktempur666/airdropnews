import React from 'react';
import { AdBase } from './AdBase';
import { siteConfig } from '@/lib/site-config';

interface Props {
  className?: string;
}

export function AdBanner({ className = '' }: Props) {
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <AdBase
        slot={siteConfig.ads.slots.homepageBanner}
        format="horizontal"
        minHeight="min-h-[90px] md:min-h-[120px]"
        label="Sponsor Banner"
      />
    </div>
  );
}
