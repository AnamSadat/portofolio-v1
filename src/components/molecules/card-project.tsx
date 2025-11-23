'use client';
import * as React from 'react';
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

export type CardProjectProps = {
  title: string;
  description: string;
  categories?: string | string[];
  techStack?: string[];
  repoUrl: string;
  demoUrl?: string;
  imageUrl?: string;
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
  className,
}: CardProjectProps) {
  const og = React.useMemo(
    () => imageUrl || githubOgFromRepo(repoUrl),
    [imageUrl, repoUrl]
  );
  const cats = Array.isArray(categories)
    ? categories
    : categories
    ? [categories]
    : [];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={'group relative ' + (className ?? '')}
    >
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-emerald-500/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />

      <Card className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/90 backdrop-blur-sm shadow-sm transition-shadow group-hover:shadow-xl pt-0">
        {/* Gambar full ke atas */}
        <div className="relative w-full h-56 overflow-hidden">
          {og ? (
            <Image
              src={og}
              alt={`Preview untuk ${title}`}
              className={cn(
                'absolute inset-0 h-full w-full'
                // "object-cover"
              )}
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
                  variant="secondary"
                  className="backdrop-blur bg-background/80"
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

        <CardContent className="space-y-4">
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-2 flex flex-wrap items-center gap-3">
            {demoUrl && (
              <Button asChild className="rounded-xl">
                <Link href={demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Link>
              </Button>
            )}

            <Button asChild variant="secondary" className="rounded-xl">
              <Link href={repoUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Contoh penggunaan
// <CardProject
//   title="Todo App"
//   description="Aplikasi todo sederhana dengan autentikasi."
//   categories={["Web Development"]}
//   techStack={["Next.js", "TypeScript", "TailwindCSS", "Prisma"]}
//   repoUrl="https://github.com/vercel/next.js"
//   demoUrl="https://todo-demo.example.com"
// />
