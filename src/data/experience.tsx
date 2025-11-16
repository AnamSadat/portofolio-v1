import { Briefcase } from 'lucide-react';

const baseSizeIcon = 28;
const baseClassName = 'text-[#00ff99]';

export const timeLine = [
  {
    title: 'Fullstack Web Developer',
    company: 'Jabar Digital Istimewa',
    date: 'Jun 2025 - Agu 2025',
    location: 'Remote, Indonesia',
    description: 'Membuat website menggunakan framework NextJs',
    tech: [
      'JavaScript',
      'TypeScript',
      'NextJs',
      'Route Handler',
      'Tailwind CSS',
      'Shadcn/ui',
      'PostgreSQL',
      'NeonDB',
      'Redux Toolkit',
      'Auth.js',
      'Prisma',
      'Cloud Storage',
      'Atternity UI',
    ],
    achievements: [
      'Membangun sistem report karyawan untuk monitoring aktivitas harian',
      'Mengembangkan aplikasi Cost Control untuk pengelolaan anggaran',
      'Membuat sistem SPT Tax untuk pelaporan pajak karyawan',
      'Mempelajari aplikasi mobile menggunakan Flutter',
    ],
    icon: <Briefcase className={baseClassName} size={baseSizeIcon} />,
  },
  {
    title: 'Front-End & Back-End Developer',
    company: 'Coding Camp 2025 powered by DBS Foundation',
    date: 'Feb 2025 - Jun 2025',
    location: 'Remote, Indonesia',
    description:
      'Mengerjakan beberapa project website untuk UMKM dan startup kecil.',
    tech: ['React', 'TailwindCSS', 'Next.js'],
    achievements: [
      'Membangun landing page interaktif',
      'Meningkatkan performa SEO klien',
    ],
    icon: <Briefcase className={baseClassName} size={baseSizeIcon} />,
  },
];
