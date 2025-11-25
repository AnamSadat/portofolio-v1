'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Icon } from '@/components/atoms';
import { Badge } from '../ui';
import { CalendarDays, MapPin } from 'lucide-react';
import { timeLine } from '@/data/experience-data';
import { cn } from '@/lib/utils';
import { isColorCard } from '@/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type TimelineItemProps = {
  item: (typeof timeLine)[0];
  color: string;
};

export function TimelineItem({ item, color }: TimelineItemProps) {
  const baseSizeIcon = 17;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  });

  return (
    <div className="relative flex items-start">
      {/* Dot di garis */}
      <div className="absolute left-[11px] top-2 z-10">
        <div
          className="w-4 h-4 rounded-full border-2 shadow"
          style={{ backgroundColor: color, borderColor: color }}
          data-aos="fade-up"
          data-aos-delay={item.duration}
        />
      </div>

      {/* Card full width */}
      <div
        className="pl-12 w-full"
        data-aos="fade-up"
        data-aos-delay={item.duration}
      >
        <Card
          className={cn('w-full border-2 text-white shadow-lg', isColorCard)}
        >
          <CardHeader className="flex gap-1">
            <Icon
              className={'bg-zinc-500/20 rounded-xl p-3 text-green-500 text-md'}
            >
              {item.icon}
            </Icon>
            <CardTitle
              className=" font-bold flex flex-col gap-3 pl-5"
              style={{ color }}
            >
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-neutral-300 text-xl font-medium">
                {item.company}
              </p>
              <p className="text-sm text-neutral-400 flex gap-2 items-center">
                <CalendarDays size={baseSizeIcon} />
                <span>{item.date}</span>
                <MapPin size={baseSizeIcon} />
                <span>{item.location}</span>
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
                      className="rounded-2xl text-[#00ff99] border-2 border-green-700 bg-[#00ff99]/5"
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
