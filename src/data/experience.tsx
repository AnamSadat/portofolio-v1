import { Briefcase } from 'lucide-react';

export const timeLine = [
  {
    title: 'Software Engineer Intern',
    company: 'PT Sangati Soerya Sejahtera',
    date: 'Jun 2024 - Agu 2025',
    location: 'Jakarta Pusat, DKI Jakarta',
    description:
      'Mengembangkan aplikasi web berbasis Laravel dan CodeIgniter untuk kebutuhan internal perusahaan, termasuk sistem report karyawan, cost control, dan SPT Tax.',
    tech: ['Laravel', 'CodeIgniter', 'Flutter', 'MySQL', 'PHP'],
    achievements: [
      'Membangun sistem report karyawan untuk monitoring aktivitas harian',
      'Mengembangkan aplikasi Cost Control untuk pengelolaan anggaran',
      'Membuat sistem SPT Tax untuk pelaporan pajak karyawan',
      'Mempelajari aplikasi mobile menggunakan Flutter',
    ],
    icon: <Briefcase className="w-5 h-5 text-[#00ff99]" />,
  },
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    date: 'Jan 2023 - Mei 2024',
    location: 'Remote',
    description:
      'Mengerjakan beberapa project website untuk UMKM dan startup kecil.',
    tech: ['React', 'TailwindCSS', 'Next.js'],
    achievements: [
      'Membangun landing page interaktif',
      'Meningkatkan performa SEO klien',
    ],
    icon: <Briefcase className="w-5 h-5 text-[#00ff99]" />,
  },
];
