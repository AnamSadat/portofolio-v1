'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Header } from '@/components/molecules/header';
import { Description } from '@/components/molecules/description';
import { cn } from '@/lib/utils';

interface PolicyHeaderProps {
  icon: LucideIcon;
  title: string;
  titleColor: string;
  description: string;
  variant?: 'privacy' | 'terms';
}

export function PolicyHeader({
  icon: IconComponent,
  title,
  titleColor,
  description,
  variant = 'privacy',
}: PolicyHeaderProps) {
  const isPrivacy = variant === 'privacy';

  const backgroundGradient =
    'bg-gradient-to-r from-green-600/10 to-emerald-600/10 dark:from-green-400/5 dark:to-emerald-400/5';

  const iconBg = 'bg-zinc-500/20 dark:bg-zinc-500/20';

  const iconColor = 'text-green-500 dark:text-green-400';

  const titleGradient = 'text-gray-900 dark:text-white';

  const titleColorGradient = 'text-custom';

  return (
    <header className="text-center space-y-6 relative">
      <div
        className={cn(
          'absolute inset-0 rounded-3xl blur-3xl',
          backgroundGradient
        )}
      ></div>
      <div className="relative">
        <div className="flex justify-center mb-6">
          <div className={cn('p-4 rounded-2xl', iconBg)}>
            <IconComponent className={cn('w-12 h-12', iconColor)} />
          </div>
        </div>
        <Header
          title={title}
          titleColor={titleColor}
          className={cn(
            'text-4xl sm:text-4xl md:text-5xl font-bold',
            titleGradient
          )}
          classNameTitleColor={titleColorGradient}
          space
        />
        <Description className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </Description>
      </div>
    </header>
  );
}
