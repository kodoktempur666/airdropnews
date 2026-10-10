'use client';

import React, { useState } from 'react';
import { Send, Share2, Copy, Check } from 'lucide-react';
import { TwitterXIcon } from '@/components/ui/Icons';

interface Props {
  title: string;
  url: string;
}

export function ArticleShareButtons({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`${title} - AirdropNews`);

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: TwitterXIcon,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bgColor: 'bg-white hover:bg-[#8EC5FF]',
    },
    {
      name: 'Telegram',
      icon: Send,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      bgColor: 'bg-white hover:bg-[#8EC5FF]',
    },
    {
      name: 'WhatsApp',
      icon: Share2,
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bgColor: 'bg-white hover:bg-[#B8F28B]',
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap my-6 py-4 border-y-2.5 border-[#171717]">
      <span className="font-heading font-black text-xs uppercase tracking-wider text-[#171717] mr-1">
        Bagikan Artikel:
      </span>

      {shareLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bagikan ke ${item.name}`}
            className={`neo-btn ${item.bgColor} text-[#171717] px-3 py-1.5 text-xs font-bold gap-1`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{item.name}</span>
          </a>
        );
      })}

      <button
        onClick={handleCopy}
        aria-label="Salin Tautan Artikel"
        className="neo-btn bg-white hover:bg-[#FFE45C] text-[#171717] px-3 py-1.5 text-xs font-bold gap-1"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-700" />
            <span className="text-emerald-800">Tersalin!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Salin Link</span>
          </>
        )}
      </button>
    </div>
  );
}
