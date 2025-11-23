'use client';

import { ClassNameProps, IdProps } from '@/types';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import { MapPin, User } from 'lucide-react';
import Image from 'next/image';
import { Icon } from '../atoms';
import { titleSkill } from '@/data/skill';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { isColorCard } from '@/constants';

type Milestone = {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
};

type AboutMeProps = ClassNameProps &
  IdProps & {
    milestones: Milestone[];
  };

export function AboutMe({ id, className, milestones }: AboutMeProps) {
  const baseClass = cn(className);
  const baseCard = cn(
    // 'bg-[#282830] '
    isColorCard
  );
  const baseCardHeader = cn('text-2xl font-bold flex gap-2 items-center');
  const baseCardContentInfo = cn('flex items-center gap-4');
  const baseSpan = cn('bg-white/20 rounded-xl p-4 text-green-500');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className={baseClass} id={id}>
      <header className="text-center ">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-lg pt-5 text-[#d9fef0]">
          Mengenal lebih dekat sosok di balik karya-karya digital
        </p>
      </header>
      <div className="grid grid-cols-2">
        {/* ... bagian profile dan skill tetap sama ... */}
        <div className="pt-20 grid grid-rows-1 gap-5">
          <Card className={baseCard} data-aos={'fade-right'}>
            <CardHeader className={baseCardHeader}>
              <Icon
                className={'bg-white/20 rounded-xl p-2 text-green-500 text-md'}
              >
                <User />
              </Icon>
              Porfile saya
            </CardHeader>
            <CardContent>
              Saya adalah mahasiswa Teknik Komputer yang memiliki minat besar
              pada Web Development dan Cloud Computing. Saya terbiasa membangun
              aplikasi web yang intuitif, responsif, dan mudah digunakan dengan
              teknologi modern seperti React, Next.js, Vue, Express, SQL/NoSQL,
              serta Docker untuk containerization. Saya senang belajar hal baru
              dan terus mengembangkan kemampuan untuk menciptakan solusi digital
              yang bermanfaat.
            </CardContent>
            <CardFooter className="text-[15px]">
              <MapPin size={16} /> &nbsp; Kuningan, Jawa Barat
            </CardFooter>
          </Card>
          <Card className={baseCard} data-aos={'fade-up'}>
            <CardHeader className={baseCardHeader}>
              Minat dan keahlian
            </CardHeader>
            <CardContent>
              <span className="flex flex-wrap gap-2">
                {titleSkill.map((item, index) => (
                  <Badge
                    key={index}
                    variant={'outline'}
                    className="rounded-2xl text-white border-2 border-green-700/50 bg-[#282830]"
                  >
                    {item.title}
                  </Badge>
                ))}
              </span>
            </CardContent>
          </Card>
        </div>
        <div className="pt-20 mx-auto">
          <Card
            className={`p-5 rounded-2xl ${baseCard}`}
            data-aos={'fade-left'}
          >
            <Image
              src={'/anam.jpg'}
              alt="belajar"
              className="rounded-2xl"
              width={350}
              height={0}
            />
          </Card>
        </div>
      </div>

      {/* Bagian ini me-render data dari props `milestones` */}
      <div className="pt-12 gap-5 grid grid-cols-4">
        {milestones.map((item, index) => (
          <Card
            key={index}
            className={baseCard}
            data-aos="fade-up"
            data-aos-delay={item.time}
          >
            <CardContent className={baseCardContentInfo}>
              <Icon className={baseSpan}>{item.icon}</Icon>
              <CardDescription>
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p>{item.description}</p>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
