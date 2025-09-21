import { CodeBlockSnapshot } from '@/components/molecules/code';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ClassNameProps } from '@/types';
import clsx from 'clsx';
import { Download, Github, LetterText, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export function HeroSection(className: ClassNameProps) {
  const baseClass = clsx('flex flex-col gap-5', className);
  return (
    <>
      <div className={baseClass}>
        <h1 className="text-6xl font-bold">Hello, Saya</h1>
        <h1 className="text-6xl font-bold">Anam Sadat</h1>
        <p className="text-lg text-custom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          magni dicta laborum, debitis totam reiciendis quasi soluta cum
          suscipit delectus.
        </p>
        <div className="flex gap-4">
          <Button className="p-0">
            <Download /> Download CV
          </Button>
          <Button>
            <Mail /> Hire Me
          </Button>
        </div>
        <div className="flex gap-4">
          <Button className="rounded-full">
            <Github />
          </Button>
          <Button className="rounded-full">
            <Linkedin />
          </Button>
        </div>
      </div>
      <div className="flex  items-center justify-center w-full">
        {/* <Card className='p-5'>
          <Image
            src={'/anam.jpg'}
            alt="saya"
            className="rounded-lg"
            width={300}
            height={0}
          />
        </Card> */}
        <CodeBlockSnapshot
          fileName="hello.tsx"
          lang="tsx"
          code={`{
  "name": "portofolio-prime-react",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  },
}`}
        />
      </div>
    </>
  );
}
