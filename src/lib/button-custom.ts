import { cn } from './utils';

export function buttonColor(className?: string) {
  const saya = cn(
    'cursor-pointer rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300',
    className
  );

  return saya;
}
