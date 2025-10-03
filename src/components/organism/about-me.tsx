// Ganti path '@/types' sesuai dengan struktur proyek Anda
import { ClassNameProps } from '@/types';
import clsx from 'clsx';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import { MapPin, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react'; // Import React untuk tipe React.ReactNode

// Definisikan tipe untuk satu item milestone
type Milestone = {
  icon: React.ReactNode; // Tipe untuk komponen ikon (JSX.Element)
  title: string;
  description: string;
};

// Definisikan tipe untuk props komponen AboutMe
type AboutMeProps = ClassNameProps & {
  milestones: Milestone[]; // milestones adalah array dari objek Milestone
};

export function AboutMe({ className, milestones }: AboutMeProps) {
  const baseClass = clsx(className);
  const baseCard = clsx('bg-[#282830] gap-4');
  const baseCardHeader = clsx('text-2xl font-bold flex gap-2 items-center');
  const baseCardContentInfo = clsx('flex items-center gap-4');
  const baseSpan = clsx('bg-white/20 rounded-xl p-4 text-green-500');

  const skill = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Bootstrap',
    'ReactJs',
    'NextJs',
    'VueJs',
    'ExpressJs',
    'HapiJs',
    'SQL',
    'NoSQL',
    'Git',
    'Docker',
    'CI / CD',
  ];

  return (
    <div className={baseClass}>
      <header className="text-center ">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-lg pt-5 text-[#d9fef0]">
          Mengenal lebih dekat sosok di balik karya-karya digital
        </p>
      </header>
      <div className="grid grid-cols-2 ">
        {/* ... bagian profile dan skill tetap sama ... */}
        <div className="pt-20 grid grid-rows-1 gap-5">
          <Card className={baseCard}>
            <CardHeader className={baseCardHeader}>
              <span
                className={'bg-white/20 rounded-xl p-2 text-green-500 text-md'}
              >
                <User />
              </span>
              Porfile saya
            </CardHeader>
            <CardContent>
              I am an Informatics Engineering student with a strong interest in
              cloud computing and fullstack development...
            </CardContent>
            <CardFooter className="text-[15px]">
              <MapPin size={16} /> &nbsp; Kuningan, Jawa Barat
            </CardFooter>
          </Card>
          <Card className={baseCard}>
            <CardHeader className={baseCardHeader}>
              Minat dan keahlian
            </CardHeader>
            <CardContent>
              <span className="flex flex-wrap gap-2">
                {skill.map((item, index) => (
                  <Badge
                    key={index}
                    variant={'outline'}
                    className="rounded-2xl"
                  >
                    {item}
                  </Badge>
                ))}
              </span>
            </CardContent>
          </Card>
        </div>
        <div className="pt-20 mx-auto">
          <Card className={`p-5 rounded-2xl ${baseCard}`}>
            <Image
              src={'/anam.jpg'}
              alt="belajar"
              className="rounded-2xl"
              width={350}
              height={0}
            />
          </Card>
        </div>
      </div>

      {/* Bagian ini me-render data dari props `milestones` */}
      <div className="pt-12 gap-5 grid grid-cols-4">
        {milestones.map((item, index) => (
          <Card key={index} className={baseCard}>
            <CardContent className={baseCardContentInfo}>
              <span className={baseSpan}>{item.icon}</span>
              <CardDescription>
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p>{item.description}</p>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
