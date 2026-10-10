import React from 'react';
import { AdBase } from './AdBase';
import { siteConfig } from '@/lib/site-config';

interface Props {
  className?: string;
}

export function AdSidebar({ className = '' }: Props) {
  return (
    <div className={`w-full max-w-[320px] mx-auto ${className}`}>
      <AdBase
        slot={siteConfig.ads.slots.sidebar}
        format="rectangle"
        minHeight="min-h-[250px]"
        label="Sponsor Sidebar"
      />
    </div>
  );
}
