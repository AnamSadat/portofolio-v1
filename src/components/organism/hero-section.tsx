'use client';

import { CodeBlockSnapshot } from '@/components/molecules/code';
import { Button } from '@/components/ui/button';
import { ClassNameProps } from '@/types';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import profile from '@/data/profile.json';
import { cn } from '@/lib/utils';
// import { CodeEditorDemo } from '../ui';

type HeroSectionProps = ClassNameProps & {
  classNameScroll?: string;
  classNameTitle?: string;
  title: string;
  icon: ReactNode;
};

export function HeroSection({
  className,
  classNameScroll,
  classNameTitle,
  title,
  icon,
}: HeroSectionProps) {
  const baseClass = cn('', className);
  const baseClassScroll = cn('text-center', classNameScroll);
  const baseClassSocmed =
    'rounded-full bg-zinc-100 dark:bg-zinc-900 p-2 border border-zinc-200 dark:border-zinc-700 ' +
    'text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 ' +
    'transition-colors duration-200';
  const baseClassButton = cn(
    'cursor-pointer bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-green-400 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-green-500 transition-all duration-300'
  );
  const code = JSON.stringify(profile, null, 2);

  return (
    <div className={baseClass} id="home">
      <div className="flex-grow flex items-center bor">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-zinc-500 dark:text-zinc-400">
              Hello, Saya
            </h1>
            <h2 className="text-6xl md:text-6xl font-bold tracking-tight">
              Anam Sadat
            </h2>
            <p className="text-lg dark:text-zinc-400">
              Mahasiswa Teknik Komputer yang fokus pada Web Development dan
              Cloud Computing. Berpengalaman membangun aplikasi modern dengan
              React, Next.js, Express, dan Docker.
            </p>
            <div className="flex gap-4">
              <Button className={baseClassButton} asChild>
                <Link
                  href="/files/Resume-Anam-Sadat.pdf"
                  download="Resume-Anam-Sadat.pdf"
                >
                  <Download className="w-4 h-4" /> Download CV
                </Link>
              </Button>
              <Button className={baseClassButton} asChild>
                <Link href="mailto:anamsadat3@gmail.com">
                  <Mail className="w-4 h-4" /> Hubungi Saya
                </Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Link
                href={'https://github.com/AnamSadat'}
                target="_blank"
                className={baseClassSocmed}
              >
                <Github className="" />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/anamsadat'}
                target="_blank"
                className={baseClassSocmed}
              >
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="md:flex hidden items-center justify-center w-full">
            <CodeBlockSnapshot
              fileName="{} profile.json"
              lang="json"
              code={code}
            />
            {/* <CodeEditorDemo /> */}
          </div>
        </div>
      </div>

      <div className={baseClassScroll}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Link
            className={classNameTitle}
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector<HTMLElement>('#about');
              if (!target) return;

              // hitung offset navbar (jika ada navbar fixed)
              const nav = document.querySelector<HTMLElement>('nav');
              const offset = (nav?.offsetHeight ?? 0) + 16; // +16px padding aman

              const y =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

              window.scrollTo({ top: y, behavior: 'smooth' });
              history.pushState(null, '', '#about'); // update hash tanpa reload
            }}
          >
            {title}
            {icon}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
