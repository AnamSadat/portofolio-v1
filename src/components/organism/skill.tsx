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
  const baseClass = cn(className);
  const baseCard = cn('hover:shadow-custom-hover', isColorCard);

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
        <Header title="Skill" className="text-5xl font-bold" />
        <Description>
          Mengenal lebih dekat sosok di balik karya-karya digital
        </Description>
      </header>
      <div className="grid grid-cols-3 gap-5 pt-10">
        {titleSkill.map((skills, index) => {
          const skillCategory = skills.title;
          const skillsList = skillsByCategory[skillCategory] || []; // Ambil skill berdasarkan kategori

          return (
            <Card
              key={index}
              className={baseCard}
              data-aos="fade-up"
              data-aos-delay={skills.duration}
              data-aos-once={skills.once}
            >
              <CardHeader className="gap-3 flex items-center">
                <Icon
                  className={
                    'bg-zinc-500/20 rounded-xl p-2 text-green-500 text-md'
                  }
                >
                  {skills.icon}
                </Icon>
                <h1 className="font-bold text-xl">{skillCategory}</h1>
              </CardHeader>
              <CardDescription className="px-7">
                <p>{skills.description}</p>
              </CardDescription>
              <CardContent>
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
          );
        })}
      </div>
    </div>
  );
}
