import { ClassNameProps } from '@/types';
import clsx from 'clsx';
import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function AboutMe({ className }: ClassNameProps) {
  const baseClass = clsx(className);

  const baseCard = clsx('bg-[#282830]');
  return (
    <div className={baseClass}>
      <header className="text-center ">
        <h1 className="text-5xl font-bold text-[#ff0099]">About Me</h1>
        <p className="text-lg pt-5 text-[#d9fef0]">
          Mengenal lebih dekat sosok di balik karya-karya digital
        </p>
      </header>
      <div className="grid grid-cols-2 text-center ">
        <div className="pt-20 grid grid-rows-1 gap-5">
          <Card className={baseCard}>
            <CardHeader>Porfile saya</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iusto officia minus debitis maxime fuga voluptatem
              quia vel nam odio!
            </CardContent>
            <CardFooter>
              <MapPin /> Kuningan, Jawa Barat
            </CardFooter>
          </Card>
          <Card className={baseCard}>
            <h1 className="text-[#b3b3b3]">Minat dan keahlian</h1>
            <div className="flex gap-3">
              <Badge variant={'outline'} className="rounded-2xl">
                saya
              </Badge>
              <Badge variant={'outline'} className="rounded-2xl">
                saya
              </Badge>
              <Badge variant={'outline'} className="rounded-2xl">
                saya
              </Badge>
              <Badge variant={'outline'} className="rounded-2xl">
                saya
              </Badge>
              <Badge variant={'outline'} className="rounded-2xl">
                saya
              </Badge>
            </div>
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
      <div className="pt-20 gap-5 grid grid-cols-4">
        <Card className={baseCard}> selamat datang</Card>
        <Card className={baseCard}>selamat datang</Card>
        <Card className={baseCard}>selamat datang</Card>
        <Card className={baseCard}>Quotes Keren</Card>
      </div>
    </div>
  );
}
