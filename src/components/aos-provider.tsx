'use client';

import { useEffect, type ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
