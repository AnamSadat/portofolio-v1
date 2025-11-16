import { ClassNameProps } from '@/types';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui';
import { Icon } from '@/components/atoms';
import { Globe } from 'lucide-react';
import {
  titleSkill,
  skillFrontend,
  skillBackend,
  skillDatabase,
  skillDevopsTools,
} from '@/data/skill';
import { cn } from '@/lib/utils';

type SkillProps = ClassNameProps;

export function Skill({ className }: SkillProps) {
  const baseClass = cn(className);
  const baseCard = cn(' bg-[#282830]');

  // Menggunakan mapping untuk skill sesuai kategori
  const skillsByCategory: { [key: string]: string[] } = {
    'Front-End Developer': skillFrontend,
    'Back-End Developer': skillBackend,
    'Database & Cloud Service': skillDatabase,
    'Devops & Devtools': skillDevopsTools,
  };

  return (
    <div className={baseClass} id="skills">
      <header className="text-center">
        <h1 className="text-5xl font-bold">Skill</h1>
        <p className="text-lg pt-5 text-[#d9fef0]">
          Mengenal lebih dekat sosok di balik karya-karya digital
        </p>
      </header>
      <div className="grid grid-cols-3 gap-5 pt-10">
        {titleSkill.map((skills, index) => {
          const skillCategory = skills.title;
          const skillsList = skillsByCategory[skillCategory] || []; // Ambil skill berdasarkan kategori

          return (
            <Card key={index} className={baseCard}>
              <CardHeader className="gap-3 flex items-center">
                <Icon
                  className={
                    'bg-white/20 rounded-xl p-2 text-green-500 text-md'
                  }
                >
                  <Globe />
                </Icon>
                <h1 className="font-bold text-xl">{skillCategory}</h1>
              </CardHeader>
              <CardDescription className="px-7">
                <p>{skills.description}</p>
              </CardDescription>
              <CardContent>
                <span>
                  {skillsList.map((item, index) => (
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
          );
        })}
      </div>
    </div>
  );
}
