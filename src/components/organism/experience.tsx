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
  const baseClass = cn(className);

  return (
    <>
      <div ref={ref} className={baseClass} id="experience">
        <Header
          title="Expe"
          titleColor="rience"
          className="text-5xl font-bold text-center text-white"
          classNameTitleColor="text-custom"
        />
        <Description>saya</Description>

        <div className="relative">
          {/* Garis background */}
          <div className="absolute left-[18px] top-2 bottom-1 w-[3px] bg-[#00ff99]/60" />

          {/* Items */}
          <div className="space-y-10 mt-16">
            {timeLine.map((item, i) => (
              <TimelineItem key={i} item={item} color={dotColor} />
            ))}
          </div>
        </div>
      </div>
      {/* 1d1d22 */}
      <Persuasif
        className={cn(
          'text-center border-2 hover:shadow-custom-hover',
          'text-center border-2 border-emerald-700 bg-emerald-950/30'
        )}
        classNameLayout="py-8"
        title="Siap untuk"
        classNameTitle="text-2xl font-bold"
        span="Kolaborasi?"
        classNameSpan="text-emerald-500"
        description="Mari berdiskusi tentang proyek selanjutnya dan bagaimana saya dapat membantu mewujudkan visi digital Anda."
        classNameDescription="max-w-2xl mx-auto"
      />
    </>
  );
}
