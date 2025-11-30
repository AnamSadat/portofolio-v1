'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <motion.div
          className="relative mx-auto mb-8 w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-green-500"></div>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Memuat Halaman
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Sedang menyiapkan konten terbaik untuk Anda...
          </p>
        </motion.div>

        {/* Animated Dots */}
        {/* <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div> */}

        {/* Progress Bar */}
        {/* <motion.div
          className="mt-8 w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
