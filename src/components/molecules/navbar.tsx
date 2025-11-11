'use client';
import { ModeToggle } from '@/components/molecules';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const routes = [
    { lable: 'Home', href: '#home' },
    { lable: 'About', href: '#about' },
    { lable: 'Skills', href: '#skills' },
    { lable: 'Experience', href: '#experience' },
    { lable: 'Contact', href: '#contact' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const NAV_OFFSET = 100; // tinggi kira-kira navbar; sesuaikan jika perlu

  // smooth scroll on click
  const smoothScrollToHash = (hash: string) => {
    const el = document.querySelector<HTMLElement>(hash);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    // update URL hash tanpa reload
    history.pushState(null, '', hash);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);

      // scroll spy
      let current = '#home';
      for (const r of routes) {
        const el = document.querySelector<HTMLElement>(r.href);
        if (!el) continue;
        const top = el.offsetTop - (NAV_OFFSET + 20);
        if (window.scrollY >= top) current = r.href;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const baseClass = clsx(
    'fixed w-full top-0 z-50',
    scrolled ? 'border-b bg-background/80 backdrop-blur-md' : 'bg-transparent'
  );

  const baseContainer = clsx(
    'container  mx-auto flex justify-between transition-all duration-300',
    scrolled ? 'py-4' : 'py-5'
  );

  return (
    <div className={baseClass}>
      <div className={baseContainer}>
        <Link
          href="/"
          className="scroll-m-20 text-center text-3xl font-bold tracking-tight text-balance"
          onClick={(e) => {
            // jika sedang di halaman yang sama dan ada #home, bisa pakai smooth juga
            e.preventDefault();
            smoothScrollToHash('#home');
          }}
        >
          Portofolio
        </Link>

        <ul className="flex gap-10 items-center">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                onClick={(e) => {
                  // cegah lompat, pakai smooth
                  e.preventDefault();
                  smoothScrollToHash(route.href);
                }}
                className={clsx(
                  'relative group text-white font-medium hover:text-custom-hover transition-all duration-300',
                  activeSection === route.href && '!text-custom-hover'
                )}
              >
                {route.lable}
                <span
                  className={clsx(
                    'absolute left-0 -bottom-1 w-full h-0.5 bg-chart-2',
                    'scale-x-0 group-hover:scale-x-100',
                    'origin-left group-hover:origin-left',
                    'transition-transform duration-300 ease-out',
                    activeSection === route.href && 'scale-x-100'
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <ModeToggle />
      </div>
    </div>
  );
}
