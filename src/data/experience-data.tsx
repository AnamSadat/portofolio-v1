import { University } from 'lucide-react';

const baseSizeIcon = 28;
const baseClassName = 'text-[#00ff99]';

export const timeLine = [
  {
    title: 'Fullstack Web Programming',
    company: 'Jabar Istimewa Digital Academy',
    date: 'Jul 2025 - Agu 2025',
    location: 'Remote, Indonesia',
    description:
      'Jabar Istimewa Digital Academy adalah program pengembangan talenta digital yang diinisiasi oleh Pemerintah Provinsi Jawa Barat bersama Yayasan Alkademi dan Amazon Web Services (AWS). Program ini berfokus pada fullstack web development melalui praktik langsung dan pembelajaran berbasis proyek.',
    tech: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Route Handler',
      'Tailwind CSS',
      'Shadcn/UI',
      'PostgreSQL',
      'NeonDB',
      'Redux Toolkit',
      'Auth.js',
      'Prisma',
      'Cloud Storage',
      'Aceternity UI',
      'Vercel',
      'Cloud Storage (GCP)',
    ],
    achievements: [
      'Membangun aplikasi web fullstack menggunakan Next.js dengan API Route Handler dan NextAuth.',
      'Mengintegrasikan PostgreSQL dengan autentikasi modern, termasuk Two-Factor Authentication (2FA).',
      'Menerapkan state management, unit testing, dan metode agile untuk meningkatkan kualitas aplikasi.',
      'Mendeploy aplikasi menggunakan VPS (AWS EC2) dan platform SaaS seperti Vercel.',
      'Mengembangkan kemampuan kolaborasi, problem-solving, dan adaptability melalui proyek nyata.',
    ],
    icon: <University className={baseClassName} size={baseSizeIcon} />,
    duration: '100',
    once: true,
  },

  {
    title: 'Front-End & Back-End Developer',
    company: 'Coding Camp powered by DBS Foundation',
    date: 'Feb 2025 - Jul 2025',
    location: 'Remote, Indonesia',
    description:
      'Coding Camp adalah program pelatihan intensif yang didukung oleh DBS Foundation untuk membekali peserta dengan kemampuan web development dan machine learning. Program ini mengusung project-based learning, mencakup pengembangan frontend–backend, pemrograman dasar hingga lanjutan, serta data analysis untuk machine learning.',
    tech: [
      'React.js',
      'Tailwind CSS',
      'Next.js',
      'Prisma',
      'MongoDB',
      'Shadcn/UI',
      'Mongoose',
      'Cloud Storage (GCP)',
      'App Engine (GCP)',
      'Cloud Run (GCP)',
      'Figma',
      'Hapi.js',
      'OAuth 2.0',
    ],
    achievements: [
      'Mendalami pengembangan aplikasi web fullstack dari sisi frontend dan backend.',
      'Menggunakan project-based learning, studi kasus industri, teamwork, dan best practice software development.',
      'Meningkatkan keterampilan komunikasi, kolaborasi, dan problem-solving melalui simulasi proyek nyata.',
    ],
    icon: <University className={baseClassName} size={baseSizeIcon} />,
    duration: '200',
    once: true,
  },

  {
    title: 'Cloud Computing',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    date: 'Sep 2024 - Jan 2025',
    location: 'Remote, Indonesia',
    description:
      'Bangkit adalah program pelatihan intensif oleh Google, Tokopedia, Traveloka, dan Gojek untuk mempercepat pengembangan talenta digital. Fokus pembelajaran mencakup mobile development, cloud computing, dan machine learning melalui pendekatan hands-on dan project-based learning. Program ini memberikan pengalaman nyata serta peluang berkarier di industri teknologi.',
    tech: [
      'Google Cloud',
      'Docker',
      'Firebase',
      'Hapi.js',
      'JavaScript',
      'Express.js',
      'TypeScript',
      'CI/CD',
      'Terraform',
    ],
    achievements: [
      'Mempelajari Cloud Computing, Cloud Architecture, Cloud Engineering, dan Cloud Services.',
      'Mendalami Growth Mindset, Time Management, Adaptability & Resilience, Project Management, Critical Thinking, dan Professional Branding.',
      'Masuk dalam 1.000 peserta paling aktif pada sesi ILT (Tech & Softskills).',
      'Menjadi salah satu dari 5 peserta dengan interaksi tertinggi pada Weekly Consultation.',
    ],
    icon: <University className={baseClassName} size={baseSizeIcon} />,
    duration: '300',

    once: true,
  },

  {
    title: 'Oracle Database Developer',
    company: 'Digital Talent Scholarship',
    date: 'Feb 2024 - Jul 2024',
    location: 'Remote, Indonesia',
    description:
      'Program Oracle Database Design & SQL Programming oleh Digital Talent Scholarship (Digitalen) berfokus pada pendalaman desain dan manajemen basis data menggunakan SQL. Peserta dilatih untuk merancang database relasional, mengoptimalkan query, serta menerapkan best practice yang digunakan di industri. Program ini menggunakan pendekatan project-based learning untuk memastikan pemahaman praktis dan kesiapan kerja.',
    tech: [
      'Oracle Database',
      'Oracle APEX',
      'Oracle SQL Developer / Data Modeler',
      'DDL & DML',
      'ERD Modeling',
    ],
    achievements: [
      'Merancang struktur database relasional menggunakan prinsip normalisasi dan pemodelan ERD.',
      'Membuat dan mengoptimalkan SQL queries, stored procedures, functions, dan triggers.',
      'Mengelola keamanan, integritas data, dan implementasi constraints pada database.',
      'Berkontribusi dalam proyek Trains Management Database sebagai implementasi nyata dari desain dan pemrograman database.',
    ],
    icon: <University className={baseClassName} size={baseSizeIcon} />,
    duration: '400',
    once: true,
  },
];
