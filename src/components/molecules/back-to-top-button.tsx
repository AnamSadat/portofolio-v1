'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui';
import { cn } from '@/lib/utils';
import { isColorCard } from '@/constants';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const target = document.querySelector('#home');
    if (!target) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full text-whiteshadow-lg hover:bg-emerald-600 transition-all cursor-pointer border-2 border-emerald-600',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        isColorCard
      )}
    >
      <ArrowUp />
    </Button>
  );
}
