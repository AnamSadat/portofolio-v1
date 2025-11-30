'use client';

import { cn } from '@/lib/utils';
import { ClassNameProps } from '@/types';

export type DescriptionProps = ClassNameProps & {
  children: React.ReactNode;
};

export function Description({ children, className }: DescriptionProps) {
  return (
    <p
      className={cn('mt-3 text-muted-foreground max-w-2xl mx-auto', className)}
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-once="true"
    >
      {children}
    </p>
  );
}
