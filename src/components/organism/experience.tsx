'use client';

import { useRef } from 'react';
import { Persuasif, TimelineItem } from '@/components/molecules';

import { timeLine } from '@/data/experience-data';
import { cn } from '@/lib/utils';
import { ClassNameProps } from '@/types';
import { isColorCard } from '@/constants';

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
        <h1 className="text-5xl font-bold text-center mb-16 text-white">
          Experience
        </h1>

        <div className="relative">
          {/* Garis background */}
          <div className="absolute left-[18px] top-2 bottom-1 w-[3px] bg-[#00ff99]/60" />

          {/* Items */}
          <div className="space-y-10">
            {timeLine.map((item, i) => (
              <TimelineItem key={i} item={item} color={dotColor} />
            ))}
          </div>
        </div>
      </div>
      {/* 1d1d22 */}
      <Persuasif
        className={cn('text-center border-2', isColorCard)}
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
