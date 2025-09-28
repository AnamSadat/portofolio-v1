import { CodeBlockSnapshot } from '@/components/molecules/code';
import { Button } from '@/components/ui/button';
import { ClassNameProps } from '@/types';
import clsx from 'clsx';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { ReactNode } from 'react';

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

  const code = `{
  "fullName": "Iqbal Prasetya",
  "role": "Fullstack Developer",
  "availability": "Open for new opportunities",
  "location": {
    "city": "Bogor",
    "country": "Indonesia"
  },
  "contact": {
    "email": "example@email.com",
    "linkedin": "https://www.linkedin.com/in/your-name",
    "github": "https://github.com/your-username"
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
    <>
      <div className={baseClass}>
        <div className="flex flex-col gap-5">
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
          <CodeBlockSnapshot
            fileName="hello.json"
            lang="typescript"
            code={code}
          />
        </div>
      </div>
      <div className={baseClassScroll}>
        <h1 className={classNameTitle}>{title}</h1>
        {icon}
      </div>
    </>
  );
}
