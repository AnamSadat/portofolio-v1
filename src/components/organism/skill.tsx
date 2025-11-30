'use client';

import { ClassNameProps } from '@/types';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui';
import { Icon } from '@/components/atoms';
import {
  titleSkill,
  skillFrontend,
  skillBackend,
  skillDatabase,
  skillDevopsTools,
} from '@/data/skill';
import { cn } from '@/lib/utils';
import { isColorCard } from '@/constants';
import { Header } from '../molecules';
import { AOSInit } from '@/lib/aos-init';
import { Description } from '../molecules/description';

type SkillProps = ClassNameProps;

export function Skill({ className }: SkillProps) {
  const baseClass = cn(
    'w-full mx-auto px-10 sm:px-6 lg:px-0 py-12 sm:pt-20',
    className
  );
  const baseCard = cn(
    'hover:shadow-custom-hover h-full flex flex-col',
    isColorCard
  );
  const baseCardWrapper = cn(
    'transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-custom-hover'
  );

  // Menggunakan mapping untuk skill sesuai kategori
  const skillsByCategory: { [key: string]: string[] } = {
    'Front-End Developer': skillFrontend,
    'Back-End Developer': skillBackend,
    'Database & Cloud Service': skillDatabase,
    'Devops & Devtools': skillDevopsTools,
  };

  AOSInit();

  return (
    <div className={baseClass} id="skills">
      <header className="text-center">
        <Header
          title="Skill &"
          titleColor="Capabilities"
          className="text-4xl sm:text-4xl md:text-5xl font-bold"
          classNameTitleColor="text-custom"
          space
        />
        <Description>
          Kemampuan teknis yang membantu saya membangun produk digital yang
          fungsional dan berkualitas.
        </Description>
      </header>

      {/* Grid responsif: 1 kolom di mobile, 2 di tablet, 3 di desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        {titleSkill.map((skills, index) => {
          const skillCategory = skills.title;
          const skillsList = skillsByCategory[skillCategory] || []; // Ambil skill berdasarkan kategori

          return (
            <div key={index} className={baseCardWrapper}>
              <Card
                className={baseCard}
                data-aos="fade-up"
                data-aos-delay={skills.duration}
                data-aos-once={skills.once}
              >
                <CardHeader className="gap-3 flex items-center px-4 sm:px-6">
                  <Icon
                    className={
                      'bg-zinc-500/20 rounded-xl p-2 text-green-500 text-md'
                    }
                  >
                    {skills.icon}
                  </Icon>
                  <h1 className="font-bold text-lg sm:text-xl">
                    {skillCategory}
                  </h1>
                </CardHeader>
                <CardDescription className="px-4 sm:px-7 pb-2 text-sm sm:text-base">
                  <p>{skills.description}</p>
                </CardDescription>
                <CardContent className="px-4 sm:px-6">
                  <span className="flex flex-wrap gap-2">
                    {skillsList.map((item, index) => (
                      <Badge
                        key={index}
                        variant={'outline'}
                        className="rounded-2xl text-white border-2 border-green-700/50 bg-[#282830]"
                      >
                        {item}
                      </Badge>
                    ))}
                  </span>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
