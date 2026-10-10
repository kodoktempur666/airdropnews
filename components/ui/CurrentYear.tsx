'use client';

import React, { useSyncExternalStore } from 'react';

function emptySubscribe() {
  return () => {};
}

export function CurrentYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => fallback
  );

  return <span>{year}</span>;
}
