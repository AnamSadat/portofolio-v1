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
import { isColorCard } from '@/constants';
import { Header } from '../molecules';
import { AOSInit } from '@/lib/aos-init';
import { Description } from '../molecules/description';

type Milestone = {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  once: boolean;
};

type AboutMeProps = ClassNameProps &
  IdProps & {
    milestones: Milestone[];
  };

export function AboutMe({ id, className, milestones }: AboutMeProps) {
  const baseClass = cn(' mx-auto px-10 sm:px-6 lg:px-0', className);
  const baseCard = cn('hover:shadow-custom-hover', isColorCard);

  const baseCardWrapper =
    'transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-custom-hover';

  const baseCardHeader = cn(
    'text-xl sm:text-2xl font-bold flex gap-3 items-center'
  );
  const baseCardContentInfo = cn('flex items-start gap-4');
  const baseIcon = cn('bg-zinc-500/20 rounded-xl p-4 text-green-500');

  AOSInit();

  return (
    <div className={baseClass} id={id}>
      <header className="text-center">
        <Header
          title="About"
          titleColor="Me"
          className="text-4xl sm:text-4xl md:text-5xl font-bold text-center"
          classNameTitleColor="text-custom"
          space
        />
        <Description>
          Seorang developer yang terus berkembang dan berfokus pada pembuatan
          solusi digital yang modern, efisien, dan bermanfaat.
        </Description>
      </header>

      {/* Wrapper utama: gambar + deskripsi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Gambar: di mobile/tablet paling atas (order-1), di desktop pindah ke kanan (md:order-2) */}
        <div
          className={cn(
            'pt-6 md:pt-20 mx-auto order-1 md:order-2',
            baseCardWrapper
          )}
        >
          <Card
            className={cn('p-4 sm:p-5 rounded-2xl', baseCard)}
            data-aos={'fade-up'}
            data-aos-once={true}
          >
            <Image
              src={'/anam.jpg'}
              alt="belajar"
              className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
              width={350}
              height={0}
            />
          </Card>
        </div>

        {/* Deskripsi & skill: di mobile/tablet di bawah gambar (order-2), di desktop di kiri (md:order-1) */}
        <div className="pt-6 md:pt-20 grid grid-rows-1 gap-5 order-2 md:order-1">
          <div className={baseCardWrapper}>
            <Card
              className={baseCard}
              data-aos={'fade-up'}
              data-aos-once={true}
            >
              <CardHeader className={baseCardHeader}>
                <Icon
                  className={
                    'bg-zinc-500/20 rounded-xl p-2 text-green-500 text-md'
                  }
                >
                  <User />
                </Icon>
                Porfile saya
              </CardHeader>
              <CardContent className="text-sm sm:text-base leading-relaxed">
                Saya adalah mahasiswa Teknik Komputer yang memiliki minat besar
                pada Web Development dan Cloud Computing. Saya terbiasa
                membangun aplikasi web yang intuitif, responsif, dan mudah
                digunakan dengan teknologi modern seperti React, Next.js, Vue,
                Express, SQL/NoSQL, serta Docker untuk containerization. Saya
                senang belajar hal baru dan terus mengembangkan kemampuan untuk
                menciptakan solusi digital yang bermanfaat.
              </CardContent>
              <CardFooter className="text-[13px] sm:text-[15px] flex items-center gap-2">
                <MapPin size={16} /> Kuningan, Jawa Barat
              </CardFooter>
            </Card>
          </div>

          <div className={baseCardWrapper}>
            <Card
              className={baseCard}
              data-aos={'fade-up'}
              data-aos-once={true}
            >
              <CardHeader className={baseCardHeader}>
                Minat dan keahlian
              </CardHeader>
              <CardContent>
                <span className="flex flex-wrap gap-2">
                  {titleSkill.map((item, index) => (
                    <Badge
                      key={index}
                      variant={'outline'}
                      className="rounded-2xl text-white border-2 border-green-700/50 bg-[#282830] text-xs px-3 py-1"
                    >
                      {item.title}
                    </Badge>
                  ))}
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bagian milestones: dibuat responsif grid-nya */}
      <div className="pt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((item, index) => (
          <div key={index} className={baseCardWrapper}>
            <Card
              className={baseCard}
              data-aos="fade-up"
              data-aos-delay={item.duration}
              data-aos-once={item.once}
            >
              <CardContent className={baseCardContentInfo}>
                <Icon className={baseIcon}>{item.icon}</Icon>
                <CardDescription>
                  <h1 className="text-lg sm:text-xl font-bold">{item.title}</h1>
                  <p className="text-sm sm:text-[15px]">{item.description}</p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
