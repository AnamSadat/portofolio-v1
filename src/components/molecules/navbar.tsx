'use client';
import { ThemeToggle } from '@/components/molecules';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui';
import { Download, Mail } from 'lucide-react';
import { buttonColor } from '@/lib/button-custom';
import Image from 'next/image';

export function Navbar() {
  const routes = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const NAV_OFFSET = 30; // tinggi kira-kira navbar; sesuaikan jika perlu

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

  const baseClass = cn(
    'fixed w-full top-0 z-50',
    scrolled ? 'border-b bg-background/80 backdrop-blur-md' : 'bg-transparent'
  );

  const baseContainer = cn(
    'container  mx-auto flex justify-between transition-all duration-300',
    scrolled ? 'py-4' : 'py-5'
  );

  const primaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';
  const secondaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-emerald-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-background dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

  return (
    <div className={baseClass}>
      <div className={baseContainer}>
        <Link
          href="/"
          className="scroll-m-20 text-center text-3xl font-bold tracking-tight text-balance flex items-center"
          onClick={(e) => {
            // jika sedang di halaman yang sama dan ada #home, bisa pakai smooth juga
            e.preventDefault();
            smoothScrollToHash('#home');
          }}
        >
          <Image
            src={'/logo-as-png-white-crop.png'}
            alt="logo"
            width={90}
            height={0}
          />
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
                className={cn(
                  'relative group dark:text-white font-medium hover:text-custom-hover dark:hover:text-custom-hover transition-all duration-300 text-black',
                  activeSection === route.href && 'text-custom-hover!'
                )}
              >
                {route.label}
                <span
                  className={cn(
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
        <div className="flex gap-4">
          <Button className={primaryButton} asChild>
            <Link
              href="/files/Resume-Anam-Sadat.pdf"
              download="Resume-Anam-Sadat.pdf"
            >
              <Download className="w-4 h-4" /> Unduh
            </Link>
          </Button>
          <Button className={secondaryButton} asChild>
            <Link href="mailto:anamsadat3@gmail.com">
              <Mail className="w-4 h-4" /> Hire Me
            </Link>
          </Button>

          {/* <ThemeToggle className={secondaryButton} /> */}
        </div>
      </div>
    </div>
  );
}
