'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { AOSInit } from '@/lib/aos-init';

type CodeBlockSnapshotProps = {
  code: string;
  lang?: string;
  fileName?: string;
  className?: string;
};

export function CodeBlockSnapshot({
  code,
  lang = 'tsx',
  fileName = 'example.tsx',
  className,
}: CodeBlockSnapshotProps) {
  const { resolvedTheme } = useTheme();
  const [highlighted, setHighlighted] = useState('');
  const [copied, setCopied] = useState(false);

  // highlight pakai shiki
  useEffect(() => {
    const highlight = async () => {
      const { codeToHtml } = await import('shiki');
      const html = await codeToHtml(code, {
        lang,
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
        defaultColor: resolvedTheme === 'dark' ? 'dark' : 'light',
      });
      setHighlighted(html);
    };
    highlight();
  }, [code, lang, resolvedTheme]);

  // copy handler
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  AOSInit();

  return (
    <div
      className={cn(
        'relative w-lg max-w-3xl rounded-xl border border-border shadow-lg overflow-hidden bg-white dark:bg-[#1e1e1e]',
        className
      )}
      data-aos="zoom-in-up"
      data-aos-delay="400"
      data-aos-once="true"
    >
      {/* header ala vscode */}
      <div className="flex items-center justify-between border-b border-border/50 px-4 h-10 bg-gray-100 dark:bg-[#2d2d2d]">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-md text-muted-foreground truncate font-mono">
          {fileName}
        </div>
        <Button
          onClick={handleCopy}
          size="sm"
          variant="ghost"
          className="h-7 w-7 p-0 cursor-pointer"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* code area */}
      <div
        className={cn(
          'overflow-x-auto p-4 text-sm font-mono',
          '[&>pre]:!bg-transparent [&>pre]:!m-0 [&>pre]:!p-0'
        )}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
