'use client';

import { DiscIcon, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui';

export function Footer() {
  const sosmed = [
    {
      href: 'https://github.com/AnamSadat',
      label: 'GitHub',
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: 'https://www.linkedin.com/in/anamsadat/',
      label: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      href: 'https://instagram.com/anam.sdttt',
      label: 'Instagram',
      icon: <Instagram className="h-4 w-4" />,
    },
    {
      href: 'https://discord.com/users/434200430088683545',
      label: 'Discord',
      icon: <DiscIcon className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="bg-[#f9fafb] dark:bg-[#1c1c22] border-t-2 px-44 py-12 text-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand + Description + Social Icons */}
        <div className="space-y-4">
          <Image
            src="/logo-as-png-white-crop.png"
            alt="logo"
            width={170}
            height={40}
            className="object-contain"
          />

          <p className="text-md text-gray-400">
            Passionate full-stack developer dedicated to creating innovative
            digital solutions that make a difference.
          </p>

          <div className="flex gap-3 pt-1">
            {sosmed.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-neutral-900/70 text-gray-300 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:text-[#f5a623]"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-gray-400 text-md">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/skills" className="hover:text-gray-200">
              Skills
            </Link>
            <Link href="/portfolio" className="hover:text-gray-200">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-gray-200">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Services</h3>
          <div className="flex flex-col space-y-2 text-gray-400 text-md">
            <p>Web Development</p>
            <p>Cloud Deployment</p>
            <p>API Engineering</p>
            <p>Consulting</p>
            <p>Code Review</p>
            <p>Technical Writing</p>
          </div>
        </div>

        {/* Stay Updated */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Stay Updated</h3>
          <p className="text-gray-400 text-md">
            Subscribe to get latest updates about new projects and blog posts.
          </p>

          <form className="space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="h-10 rounded-xl border-gray-700 bg-neutral-900/70 text-sm placeholder:text-gray-500 focus-visible:ring-[#f5a623]"
            />
            <Button
              type="submit"
              className="h-10 w-full rounded-xl bg-[#f5a623] text-sm font-semibold text-black hover:bg-[#e3981e]"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <Separator className="my-10" />

      {/* Bottom Bar */}
      <div className=" text-gray-500">
        {/* First row → Made with | Privacy | Terms */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            Made with <span className="text-red-400">♥</span> and ☕ by Anam
            Sadat
          </p>

          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/term-condition" className="hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
        </div>
        <Separator className="mt-10" />

        {/* Second row → Center copyright */}
        <p className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
