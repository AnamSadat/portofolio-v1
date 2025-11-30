'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Tipe untuk props komponen Error
type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error untuk monitoring (bisa integrate dengan Sentry, LogRocket, dll)
    console.error('Application Error:', error);
  }, [error]);

  const primaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

  const secondaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-emerald-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

  const dangerButton =
    'cursor-pointer rounded-full bg-red-200 border-2 border-red-500 text-red-800 hover:bg-red-300 dark:border-red-400 dark:bg-red-900/50 dark:text-red-200 dark:hover:bg-red-500 transition-all duration-300';

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto">
        {/* Animated Error Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <motion.div
            className="mx-auto w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
          </motion.div>
        </motion.div>

        {/* Error Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/80 dark:bg-[#202026c1] backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 hover:shadow-custom-hover transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Terjadi Kesalahan
              </CardTitle>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Sesuatu yang tidak terduga terjadi. Jangan khawatir, ini bukan
                salah Anda.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Error Details */}
              {error.digest && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-red-50/50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-xl p-4"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Bug className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">
                      Error ID
                    </span>
                  </div>
                  <code className="text-xs font-mono bg-red-100 dark:bg-red-900/20 px-2 py-1 rounded text-red-800 dark:text-red-200">
                    {error.digest}
                  </code>
                </motion.div>
              )}

              {/* Error Message (Development only) */}
              {process.env.NODE_ENV === 'development' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-yellow-50/50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-xl p-4"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                      Development Info
                    </span>
                  </div>
                  <p className="text-xs text-yellow-800 dark:text-yellow-200 font-mono break-all">
                    {error.message}
                  </p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <Button onClick={() => reset()} className={dangerButton}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Coba Lagi
                </Button>

                <Button asChild className={primaryButton}>
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                  </Link>
                </Button>
              </motion.div>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center pt-4 border-t border-zinc-200 dark:border-zinc-700"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Jika masalah terus berlanjut, silakan hubungi saya
                </p>
                <Button asChild variant="ghost" className={secondaryButton}>
                  <Link href="/#contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Laporkan Masalah
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating Error Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
