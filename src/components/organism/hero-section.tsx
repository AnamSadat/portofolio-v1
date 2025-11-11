'use client';

import { CodeBlockSnapshot } from '@/components/molecules/code';
import { Button } from '@/components/ui/button';
import { green } from '@/constants';
import { ClassNameProps } from '@/types';
import clsx from 'clsx';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
  const baseClass = clsx('', className);
  const baseClassScroll = clsx('text-center', classNameScroll);
  const baseClassSocmed = 'rounded-full bg-neutral-800 p-2 border border-2';
  const baseClassButton = clsx(
    'cursor-pointer bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300'
  );

  const code = `{
  "fullName": "Anam Sadat",
  "role": "Fullstack Web Developer",
  "availability": "Open for new opportunities",
  "location": {
    "city": "Kuningan",
    "country": "Indonesia"
  },
  "contact": {
    "email": "anamsadat3@gmail.com",
    "linkedin": "https://www.linkedin.com/in/anamsadat",
    "github": "https://github.com/AnamSadat"
  },
}`;

  // const code = `import type IDeveloperProfile from '@/types'

  // class DeveloperController extends Controller {
  //   protected developer: IDeveloperProfile = {
  //     name: 'Iqbal Prasetya',
  //     role: 'Software Engineer',
  //     experience: '2+ Years',
  //     location: 'Bogor, Indonesia',
  //   };

  //   public getDeveloperName(): string {
  //     return this.developer.name;
  //   }
  // }`;

  return (
    <div className={baseClass} id="home">
      <div className="flex-grow flex items-center bor">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-6xl font-bold">Hello, Saya</h1>
            <h1 className="text-6xl font-bold">Anam Sadat</h1>
            <p className="text-lg text-custom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              magni dicta laborum, debitis totam reiciendis quasi soluta cum
              suscipit delectus.
            </p>
            <div className="flex gap-4">
              <Button className={baseClassButton}>
                <Download /> Download CV
              </Button>
              <Button className={baseClassButton}>
                <Mail /> Hubungi Saya
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
              fileName="profile.json"
              lang="typescript"
              code={code}
            />
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
