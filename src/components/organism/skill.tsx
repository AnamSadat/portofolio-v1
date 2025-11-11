import { ClassNameProps } from '@/types';
import clsx from 'clsx';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui';
import { Icon } from '@/components/atoms';
import { Globe } from 'lucide-react';

type SkillProps = ClassNameProps;

export function Skill({ className }: SkillProps) {
  const baseClass = clsx(className);
  const baseCard = clsx(' bg-[#282830]');
  const count = 3;
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
    <div className={baseClass} id="skills">
      <header className="text-center ">
        <h1 className="text-5xl font-bold">Skill</h1>
        <p className="text-lg pt-5 text-[#d9fef0]">
          Mengenal lebih dekat sosok di balik karya-karya digital
        </p>
      </header>
      <div className="grid grid-cols-3 gap-5 pt-10">
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <Card key={index} className={baseCard}>
              <CardHeader className="gap-3 flex items-center">
                <Icon
                  className={
                    'bg-white/20 rounded-xl p-2 text-green-500 text-md'
                  }
                >
                  <Globe />
                </Icon>
                <h1 className="font-bold text-xl">Front-End Developer</h1>
              </CardHeader>
              <CardDescription className="px-7">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, molestiae asperiores? Sed laboriosam aut adipisci
                  pariatur eveniet eius ex perspiciatis.
                </p>
              </CardDescription>
              <CardContent>
                <span>
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
          ))}
      </div>
      <div className="flex mx-auto justify-center gap-5 mt-5">
        {Array(count - 1)
          .fill(null)
          .map((_, index) => (
            <Card key={index} className={`w-md ${baseCard}`}>
              <CardHeader className="gap-3 flex items-center">
                <Icon
                  className={
                    'bg-white/20 rounded-xl p-2 text-green-500 text-md'
                  }
                >
                  <Globe />
                </Icon>
                <h1 className="font-bold text-xl">Front-End Developer</h1>
              </CardHeader>
              <CardDescription className="px-7">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, molestiae asperiores? Sed laboriosam aut adipisci
                  pariatur eveniet eius ex perspiciatis.
                </p>
              </CardDescription>
              <CardContent>
                <span>
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
          ))}
      </div>
    </div>
  );
}
