'use client';

import { useEffect, useState } from 'react';

export function MarkdownRenderer({ html }: { html: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ opacity: mounted ? 1 : 0 }}
    />
  );
}
