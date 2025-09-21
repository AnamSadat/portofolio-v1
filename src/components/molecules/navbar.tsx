'use client';
import { ModeToggle } from '@/components/atoms';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  return (
    <>
      <div className="">
        <div className="container  mx-auto py-5 flex justify-between">
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
