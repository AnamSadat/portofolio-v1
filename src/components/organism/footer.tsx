import { DiscIcon, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#f9fafb] dark:bg-[#1c1c22] border-t-2 px-28 py-12  text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo, Description & Social */}
        <div className="flex flex-col space-y-4">
          <Image src="/logo-white.png" alt="Logo" width={200} height={50} />
          <p className="text-gray-400 text-sm">
            Kami menyediakan layanan terbaik untuk kebutuhan Anda. Terima kasih
            telah bersama kami.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex gap-3 text-white">
              <Link
                href="https://github.com/AnamSadat"
                target="_blank"
                className="github hover:text-blue-500 bg-neutral-900/70 p-2 rounded-xl border-2"
              >
                <Github />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anamsadat/"
                target="_blank"
                className="linkedin hover:text-pink-500 bg-neutral-900/70 p-2 rounded-xl border-2"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://instagram.com/anam.sdttt"
                target="_blank"
                className="instagram hover:text-sky-400 bg-neutral-900/70 p-2 rounded-xl border-2"
              >
                <Instagram />
              </Link>
              <Link
                href="https://discord.com/users/434200430088683545"
                target="_blank"
                className="discord hover:text-sky-400 bg-neutral-900/70 p-2 rounded-xl border-2"
              >
                <DiscIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Tautan</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="hover:text-gray-300">
              Tentang Kami
            </Link>
            <Link href="/term-condition" className="hover:text-gray-300">
              Syarat & Ketentuan
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-300">
              Kebijakan Privasi
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Kontak</h3>
          <p className="text-gray-400 text-sm">
            Email:{' '}
            <Link
              href={'mailto:anamsadat3@gmail.com'}
              target="_blank"
              className="hover:text-gray-300 underline underline-offset-1"
            >
              anamsadat3@gmail.com
            </Link>
          </p>
          <p className="text-gray-400 text-sm">
            Telepon:{' '}
            <Link
              href={'https://wa.me/62895343428566'}
              target="_blank"
              className="hover:text-gray-300 underline underline-offset-1"
            >
              +62 895 3434 28566
            </Link>
          </p>
        </div>
        <div>Stay Update</div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Develop by Anam Sadat. All rights
        reserved.
      </div>
    </footer>
  );
}
