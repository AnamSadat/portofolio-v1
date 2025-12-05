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
import BlurText from '../animations/blur-text';
import TextType from '../animations/text-type';
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
  const baseClass = cn('px-18 md:px-0', className);
  const baseClassScroll = cn('text-center', classNameScroll);
  const baseClassSocmed = cn(
    'rounded-full bg-zinc-100 dark:bg-zinc-900 p-2 border border-zinc-200 dark:border-zinc-700 ',
    'text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:shadow-md dark:hover:shadow-emerald-800',
    'transition-colors duration-200'
  );
  const primaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';
  const secondaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-emerald-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';
  const code = JSON.stringify(profile, null, 2);

  return (
    <div className={baseClass} id="home">
      <div className="flex-grow flex items-center bor">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-zinc-500 dark:text-zinc-400 text-center md:text-left">
              Hello, Saya
            </h1>
            {/* <h2 className="text-7xl md:text-6xl font-bold tracking-tight">
              Anam Sadat
            </h2> */}
            <TextType
              text={['Anam Sadat', 'FullStack Developer']}
              className="text-5xl md:text-6xl font-bold tracking-tight text-center md:text-left"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
            <BlurText
              text="Mahasiswa Teknik Komputer yang fokus pada Web Development dan Cloud Computing. Berpengalaman membangun aplikasi modern dengan React, Next.js, Express, dan Docker."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-lg dark:text-zinc-400 flex justify-center md:justify-start md:flex-none"
            />
            <div className="flex gap-4 justify-center md:justify-normal flex-wrap md:flex-nowrap">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
                className="w-1/2 md:w-auto"
              >
                <Button className={cn(primaryButton, 'w-full')} asChild>
                  <Link
                    href="/files/Resume_Anam_Sadat.pdf"
                    download="Resume_Anam_Sadat.pdf"
                  >
                    <Download className="w-4 h-4" /> Download CV
                  </Link>
                </Button>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                className="w-1/2 md:w-auto"
              >
                <Button className={cn(secondaryButton, 'w-full')} asChild>
                  <Link href="mailto:anamsadat3@gmail.com">
                    <Mail className="w-4 h-4" /> Hubungi Saya
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex gap-4 justify-center md:justify-normal">
              <Link
                href={'https://github.com/AnamSadat'}
                target="_blank"
                className={baseClassSocmed}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Github className="" />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/anamsadat'}
                target="_blank"
                className={baseClassSocmed}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
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
