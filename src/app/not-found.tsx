'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  const primaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

  const secondaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-emerald-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 select-none">
              404
            </h1>
            <motion.div
              className="absolute inset-0 text-8xl md:text-9xl font-bold text-green-500/20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              404
            </motion.div>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/80 dark:bg-[#202026c1] backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 hover:shadow-custom-hover transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              {/* Icon */}
              <motion.div
                className="mx-auto w-16 h-16 bg-zinc-500/20 rounded-xl flex items-center justify-center"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Search className="w-8 h-8 text-green-500" />
              </motion.div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Halaman Tidak Ditemukan
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                  Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin
                  halaman telah dipindahkan atau URL salah.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild className={primaryButton}>
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                  </Link>
                </Button>

                <Button asChild className={secondaryButton}>
                  <Link href="/#contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Hubungi Saya
                  </Link>
                </Button>
              </div>

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4"
              >
                <Button
                  onClick={() => window.history.back()}
                  variant="ghost"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Halaman Sebelumnya
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
