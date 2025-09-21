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

export function AboutMe({ className }: ClassNameProps) {
  const baseClass = clsx(className);
  return (
    <div className={baseClass}>
      <header className="text-center ">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-lg pt-5">
          Mengenal lebih dekat sosok di balik karya-karya digital
        </p>
      </header>
      <div className="grid grid-cols-2 text-center gap-12">
        <div className="py-20 grid grid-rows-1 gap-5">
          <Card>
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
          <Card>
            <h1>Minat dan keahlian</h1>
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
        <div className="py-20 gap-5 grid grid-rows-1">
          <Card> selamat datang</Card>
          <Card>selamat datang</Card>
          <Card>selamat datang</Card>
          <Card>Quotes Keren</Card>
        </div>
      </div>
    </div>
  );
}
