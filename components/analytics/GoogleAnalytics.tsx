'use client';

import React from 'react';
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

interface Props {
  gaId?: string;
}

export function GoogleAnalytics({ gaId }: Props) {
  // Only render if a valid GA4 Measurement ID is provided (e.g. starts with G-)
  if (!gaId || !gaId.startsWith('G-') || gaId === 'G-0EGMT6CQ40') {
    return null;
  }

  return <NextGoogleAnalytics gaId={gaId} />;
}
