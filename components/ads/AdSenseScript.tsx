import React from 'react';
import Script from 'next/script';

interface Props {
  clientId?: string;
}

export function AdSenseScript({ clientId }: Props) {
  // Only load the AdSense external script if client ID is valid
  if (
    !clientId ||
    !clientId.startsWith('ca-pub-') ||
    clientId === 'ca-pub-XXXXXXXXXXXXXXXX'
  ) {
    return null;
  }

  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
    />
  );
}
