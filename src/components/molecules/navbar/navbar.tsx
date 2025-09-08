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
    { lable: 'Project', href: '#project' },
    { lable: 'Certificate', href: '#certificate' },
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
                    'text-lg',
                    pathname === route.href ? 'border-b-2 border-white' : ''
                  )}
                >
                  {route.lable}
                </Link>
              </li>
            ))}
            <ModeToggle />
          </ul>
        </div>
      </div>
    </>
  );
}
