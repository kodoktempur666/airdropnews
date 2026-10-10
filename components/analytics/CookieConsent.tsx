'use client';

import React, { useSyncExternalStore, useState } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck } from 'lucide-react';

function subscribeToConsent(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getConsentSnapshot() {
  if (typeof window === 'undefined') return 'accepted';
  return localStorage.getItem('airdropnews_cookie_consent') || 'none';
}

function getServerSnapshot() {
  return 'accepted'; // Do not show during SSR
}

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerSnapshot
  );

  const [dismissed, setDismissed] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('airdropnews_cookie_consent', 'accepted');
    setDismissed(true);
  };

  const handleDecline = () => {
    localStorage.setItem('airdropnews_cookie_consent', 'declined');
    setDismissed(true);
  };

  if (consent !== 'none' || dismissed) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Pemberitahuan Cookie & Privasi"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#F8F7F2] border-3 border-[#171717] p-4 shadow-[5px_5px_0px_#171717] rounded-none animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-[#FFE45C] border-2 border-[#171717] shrink-0">
          <Cookie className="w-5 h-5 text-[#171717]" />
        </div>
        <div>
          <h3 className="font-bold text-sm text-[#171717] flex items-center gap-1.5 font-heading">
            Privasi &amp; Preferensi Cookie
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </h3>
          <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
            Kami menggunakan cookie untuk mengukur analitik website dan mendukung penyajian iklan yang relevan. Kami tidak pernah meminta seed phrase atau data pribadi sensitif.{' '}
            <Link
              href="/kebijakan-privasi"
              className="underline font-semibold hover:text-black decoration-2"
            >
              Baca Kebijakan Privasi
            </Link>
            .
          </p>
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 bg-[#FFE45C] hover:bg-[#ffe033] border-2 border-[#171717] font-bold text-xs shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              Terima Semua
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 bg-white hover:bg-neutral-100 border-2 border-[#171717] font-medium text-xs shadow-[2px_2px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              Hanya Esensial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
