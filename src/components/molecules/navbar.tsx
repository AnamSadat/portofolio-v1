'use client';
import { ModeToggle } from '@/components/molecules';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();

  const routes = [
    { lable: 'Home', href: '#home' },
    { lable: 'About', href: '#about' },
    { lable: 'Skills', href: '#project' },
    { lable: 'Experience', href: '#certificate' },
    { lable: 'Portofolio', href: '#portofolio' },
    { lable: 'Contact', href: '#contact' },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    <>
      <div className={baseClass}>
        <div className={baseContainer}>
          <div>
            <Link
              href={'/'}
              className="scroll-m-20 text-center text-3xl font-bold tracking-tight text-balance"
            >
              Portofolio
            </Link>
          </div>
          <ul className="flex gap-10 items-center">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={clsx(
                    'relative group text-white font-medium hover:text-custom-hover transition-all duration-300',
                    pathname === route.href && 'text-blue-400'
                  )}
                >
                  {route.lable}
                  {/* underline animasi */}
                  <span
                    className={clsx(
                      'absolute left-0 -bottom-1 w-full h-0.5 bg-chart-2',
                      'scale-x-0 group-hover:scale-x-100',
                      'origin-left group-hover:origin-left',
                      'transition-transform duration-300 ease-out',
                      pathname === route.href && 'scale-x-100' // kalau aktif, underline tetap muncul
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
