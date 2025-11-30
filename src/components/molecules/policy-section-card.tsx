'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PolicySectionCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  items?: string[];
  additional?: string;
  delay: number;
  index: number;
  variant?: 'privacy' | 'terms';
  highlight?: string;
}

export function PolicySectionCard({
  icon: IconComponent,
  title,
  content,
  items,
  additional,
  delay,
  index,
  variant = 'privacy',
  highlight,
}: PolicySectionCardProps) {
  const isPrivacy = variant === 'privacy';

  const cardStyles =
    'group relative overflow-hidden bg-white/80 dark:bg-[#202026c1] backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 hover:shadow-custom-hover transition-all duration-300 hover:-translate-y-2';

  const iconStyles =
    'p-3 bg-zinc-500/20 dark:bg-zinc-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300';

  const iconColor = 'text-green-500 dark:text-green-400';

  const titleGradient = 'text-gray-900 dark:text-white';

  const backgroundOverlay =
    'absolute inset-0 bg-gradient-to-br from-green-50/20 to-emerald-50/10 dark:from-green-900/5 dark:to-emerald-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500';

  return (
    <Card
      className={cn(
        cardStyles,
        'transition-all duration-500 hover:-translate-y-1'
      )}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-once="true"
    >
      <div className={backgroundOverlay}></div>

      <CardHeader className="relative">
        <div
          className={cn(
            'flex items-start',
            isPrivacy ? 'space-x-4' : 'justify-between mb-2'
          )}
        >
          <div className="flex items-center space-x-4">
            <div className={iconStyles}>
              <IconComponent className={cn('w-6 h-6', iconColor)} />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                <span className={titleGradient}>
                  {index + 1}. {title}
                </span>
              </CardTitle>
              {highlight && (
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {highlight}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <div className="rounded-xl p-6 bg-gradient-to-r from-green-50/30 to-emerald-50/20 dark:from-green-900/5 dark:to-emerald-900/5 border border-green-200/20 dark:border-green-800/20">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {content}
          </p>
        </div>

        {items && (
          <ul className="space-y-2 ml-4">
            {items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
              >
                <div className="w-2 h-2 rounded-full shrink-0 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {additional && (
          <p className="text-gray-600 dark:text-gray-400 text-sm bg-green-50/50 dark:bg-green-900/10 p-4 rounded-xl border-l-4 border-green-300 dark:border-green-600">
            {additional}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
