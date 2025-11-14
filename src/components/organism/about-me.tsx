import { ClassNameProps, IdProps } from '@/types';
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
import React from 'react';
import { Icon } from '../atoms';
import { skill } from '@/data/skill';

type Milestone = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type AboutMeProps = ClassNameProps &
  IdProps & {
    milestones: Milestone[];
  };

export function AboutMe({ id, className, milestones }: AboutMeProps) {
  const baseClass = clsx(className);
  const baseCard = clsx('bg-[#282830] gap-4');
  const baseCardHeader = clsx('text-2xl font-bold flex gap-2 items-center');
  const baseCardContentInfo = clsx('flex items-center gap-4');
  const baseSpan = clsx('bg-white/20 rounded-xl p-4 text-green-500');

  return (
    <div className={baseClass} id={id}>
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
              <Icon
                className={'bg-white/20 rounded-xl p-2 text-green-500 text-md'}
              >
                <User />
              </Icon>
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
              <Icon className={baseSpan}>{item.icon}</Icon>
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
