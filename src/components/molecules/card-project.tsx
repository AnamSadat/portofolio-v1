'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useMemo } from 'react';

export type CardProjectProps = {
  title: string;
  description: string;
  categories?: string | string[];
  techStack?: string[];
  repoUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  aosDelay?: string;
  aosOnce?: boolean;
  className?: string;
};

function parseOwnerRepo(url: string): { owner?: string; repo?: string } {
  try {
    const u = new URL(url);
    const parts = u.pathname.replace(/^\//, '').split('/');
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1] };
    }
  } catch {}
  return {};
}

function githubOgFromRepo(repoUrl: string): string | undefined {
  const { owner, repo } = parseOwnerRepo(repoUrl);
  if (!owner || !repo) return undefined;
  return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
}

export function CardProject({
  title,
  description,
  categories,
  techStack,
  repoUrl,
  demoUrl,
  imageUrl,
  aosDelay,
  aosOnce,
  className,
}: CardProjectProps) {
  const og = useMemo(
    () => imageUrl || githubOgFromRepo(repoUrl),
    [imageUrl, repoUrl]
  );

  const cats = Array.isArray(categories)
    ? categories
    : categories
    ? [categories]
    : [];

  // styling visual button aja, bukan layout flex-nya
  const primaryButton =
    'px-4 py-2 text-sm rounded-full flex items-center gap-2 font-medium bg-emerald-400 dark:bg-emerald-500 text-black hover:bg-emerald-500 dark:hover:bg-emerald-600 transition-all';
  const secondaryButton =
    'px-4 py-2 text-sm bg-gray-200 dark:bg-[#1b1b1b] rounded-full flex items-center gap-2 font-medium border border-emerald-400 text-emerald-600 hover:bg-emerald-100 transition dark:text-white dark:hover:bg-emerald-500 dark:hover:text-black';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={cn('group relative h-full', className)}
    >
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-linear-to-r from-indigo-500/30 via-fuchsia-500/30 to-emerald-500/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />

      <Card
        className="relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/90 pt-0 shadow-sm backdrop-blur-sm transition-shadow group-hover:shadow-xl"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
        data-aos-once={aosOnce}
      >
        {/* Gambar */}
        <div className="relative h-56 w-full overflow-hidden">
          {og ? (
            <Image
              src={og}
              alt={`Preview untuk ${title}`}
              className="absolute inset-0 h-full w-full object-cover"
              width={1000}
              height={1000}
            />
          ) : (
            <div className="h-full w-full bg-muted" />
          )}

          {cats.length > 0 && (
            <div className="absolute left-3 top-3 flex flex-wrap gap-2">
              {cats.map((c) => (
                <Badge
                  key={c}
                  className="rounded-full text-black dark:text-white border-2 dark:border-green-700/50 bg-[#282830]/20 dark:bg-emerald-900/50"
                >
                  {c}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <CardHeader className="space-y-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        {/* flex-1 biar konten isi ngisi tinggi, dan button bisa didorong ke bawah */}
        <CardContent className="flex flex-1 flex-col space-y-4">
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <Badge
                  key={t}
                  className="rounded-full text-black dark:text-white border-2 dark:border-green-700/50 bg-[#282830]/20 dark:bg-[#282830]/70"
                >
                  {t}
                </Badge>
              ))}
            </div>
          )}

          {/* mt-auto: dorong button ke bawah */}
          <div className="mt-auto pt-2 flex flex-wrap justify-start items-center gap-3">
            {demoUrl && (
              <Button asChild className={primaryButton}>
                <Link
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" />
                  <span className="leading-none">Demo</span>
                </Link>
              </Button>
            )}

            <Button asChild className={secondaryButton}>
              <Link
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4 shrink-0" />
                <span className="leading-none">GitHub</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
