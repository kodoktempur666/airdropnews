'use client';

import React, { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/site-config';

interface AdBaseProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  layoutKey?: string;
  className?: string;
  minHeight?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdBase({
  slot,
  format = 'auto',
  layoutKey,
  className = '',
  minHeight = 'min-h-[100px]',
  label = 'Iklan',
}: AdBaseProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  const clientId = siteConfig.ads.clientId;
  const isConfigured =
    clientId &&
    clientId.startsWith('ca-pub-') &&
    clientId !== 'ca-pub-2147739006413698';

  useEffect(() => {
    if (!isConfigured) return;
    if (pushedRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch (err) {
      console.warn('AdSense push error:', err);
    }
  }, [isConfigured]);

  if (!siteConfig.ads.enabled) {
    return null;
  }

  return (
    <div
      className={`my-6 text-center overflow-hidden ${minHeight} ${className}`}
      aria-label="Area Iklan"
    >
      <div className="text-[10px] tracking-wider uppercase text-neutral-500 font-bold mb-1">
        — {label} —
      </div>

      {isConfigured ? (
        <ins
          ref={adRef}
          className="adsbygoogle block"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
          {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
        />
      ) : (
        /* Development & Unconfigured Placeholder (Neo-Brutalism style) */
        <div
          className={`w-full flex flex-col items-center justify-center p-4 bg-white border-2 border-dashed border-[#171717] ${minHeight} shadow-[3px_3px_0px_#171717]`}
        >
          <div className="inline-block px-2 py-0.5 bg-[#FFE45C] border border-[#171717] text-[11px] font-bold text-[#171717] mb-1">
            Slot Iklan Google AdSense
          </div>
          <p className="text-xs text-neutral-600 max-w-sm">
            Slot: <code className="font-mono bg-neutral-100 px-1 border border-neutral-300">{slot}</code>.
            Placeholder aktif karena Publisher ID belum dikonfigurasi di <code>.env</code>.
          </p>
        </div>
      )}
    </div>
  );
}
