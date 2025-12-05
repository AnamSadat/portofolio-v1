'use client';

import { useRef } from 'react';
import { Header, Persuasif, TimelineItem } from '@/components/molecules';

import { timeLine } from '@/data/experience-data';
import { cn } from '@/lib/utils';
import { ClassNameProps } from '@/types';
import { Description } from '../molecules/description';

export type Experience = {
  title: string;
  componay: string;
  date: string;
  location: string;
  description: string;
  tech: string[];
  achievements: [];
  icon: React.ReactNode;
};

export type ExperienceProps = ClassNameProps;

const dotColor = '#00ff99';

export function Experience({ className }: ExperienceProps) {
  const ref = useRef(null);
  const baseClass = cn('w-full mx-auto px-7 sm:px-6 lg:px-0', className);

  return (
    <>
      <div ref={ref} className={baseClass} id="experience">
        <header className="text-center">
          <Header
            title="Expe"
            titleColor="rience"
            className="text-4xl sm:text-4xl md:text-5xl font-bold text-center text-white"
            classNameTitleColor="text-custom"
          />
          <Description>
            Perjalanan dan pengalaman saya dalam dunia pengembangan perangkat
            lunak.
          </Description>
        </header>

        <div className="relative mt-10">
          {/* Garis background */}
          <div className="hidden md:block absolute left-[14px] sm:left-[18px] top-3 bottom-3 w-[2px] sm:w-[3px] bg-[#00ff99]/60" />

          {/* Items */}
          <div className="space-y-8 sm:space-y-10 mt-8 sm:mt-12">
            {timeLine.map((item, i) => (
              <TimelineItem key={i} item={item} color={dotColor} />
            ))}
          </div>
        </div>
      </div>

      {/* Section ajakan kolaborasi */}
      <div className="px-10 md:px-0">
        <Persuasif
          className={cn(
            'text-center border-2 sm:mt-14 px-4',
            'border-emerald-700 bg-emerald-950/30'
          )}
          classNameLayout={cn('py-8 mx-auto')}
          title="Siap untuk"
          classNameTitle="text-2xl sm:text-3xl font-bold"
          span="Kolaborasi?"
          classNameSpan="text-emerald-500"
          description="Mari berdiskusi tentang proyek selanjutnya dan bagaimana saya dapat membantu mewujudkan visi digital Anda."
          classNameDescription="max-w-2xl mx-auto text-sm sm:text-base"
        />
      </div>
    </>
  );
}
