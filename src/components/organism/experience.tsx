'use client';
import { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { Persuasif } from '@/components/molecules';
import { Icon } from '@/components/atoms';
import { Badge } from '../ui';

// data fleksibel
const timelineData = [
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

const dotColor = '#00ff99';

interface TimelineItemProps {
  item: (typeof timelineData)[0];
  color: string;
}

function TimelineItem({ item, color }: TimelineItemProps) {
  return (
    <div className="relative flex items-start">
      {/* Dot di garis */}
      <div className="absolute left-[11px] top-2 z-10">
        <div
          className="w-4 h-4 rounded-full border-2 shadow"
          style={{ backgroundColor: color, borderColor: color }}
        />
      </div>

      {/* Card full width */}
      <div className="pl-12 w-full">
        <Card className="w-full border-2 bg-[#282830] text-white shadow-lg">
          <CardHeader className="flex items-center gap-2">
            <Icon
              className={'bg-white/20 rounded-xl p-2 text-green-500 text-md'}
            >
              {item.icon}
            </Icon>
            <CardTitle className="text-xl font-bold" style={{ color }}>
              {item.title}
              <p className="text-neutral-300 font-medium">{item.company}</p>
              <p className="text-sm text-neutral-400">
                {item.date} • {item.location}
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-neutral-300">{item.description}</p>

            {/* Tech list */}
            {item.tech && (
              <div>
                <p className="font-semibold text-white mb-2">
                  Teknologi & Skills:
                </p>
                <ul className="flex flex-wrap gap-2 items-center">
                  {item.tech.map((t, i) => (
                    <Badge
                      key={i}
                      variant={'outline'}
                      className="rounded-2xl text-[#00ff99]"
                    >
                      {t}
                    </Badge>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {item.achievements && (
              <div>
                <p className="font-semibold text-white mb-1">Pencapaian:</p>
                <ul className="list-disc list-inside space-y-1 text-neutral-300">
                  {item.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function Experience() {
  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        className="relative w-full mx-auto pt-20 py-14"
        id="experience"
      >
        <h1 className="text-4xl font-extrabold text-center mb-16 text-white">
          Experience
        </h1>

        <div className="relative">
          {/* Garis background */}
          <div className="absolute left-[18px] top-2 bottom-1 w-[3px] bg-[#00ff99]/60" />

          {/* Items */}
          <div className="space-y-10">
            {timelineData.map((item, i) => (
              <TimelineItem key={i} item={item} color={dotColor} />
            ))}
          </div>
        </div>
      </div>
      <Persuasif
        className="text-center bg-[#282830] border-2"
        title="Siap untuk colaborations"
        classNameTitle="text-2xl font-bold"
        description="Mari berdiskusi tentang proyek selanjutnya dan bagaimana saya dapat membantu mewujudkan visi digital Anda."
        classNameDescription=""
      />
    </>
  );
}
