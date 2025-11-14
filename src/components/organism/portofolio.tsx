import { ClassNameProps } from '@/types';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui';
import clsx from 'clsx';
import { CardProject, Persuasif } from '../molecules';
import projects from '@/data/portofolio.json';
import { cn } from '@/lib/utils';
import { black } from '@/constants';

type PortofolioProps = ClassNameProps;
export type Project = {
  title: string;
  description: string;
  categories: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
};

export function Portofolio({ className }: PortofolioProps) {
  const baseClass = clsx(className);
  const filter = [
    { name: 'All' },
    { name: 'Front-End Development' },
    { name: 'Back-End Development' },
  ];
  const data: Project[] = projects;
  return (
    <>
      <div className={baseClass} id="portofolio">
        <div>
          <h1 className="text-5xl font-bold text-center pb-10">
            Portofolio saya
          </h1>
          <p>ya begitulah der</p>
        </div>
        <div className="gap-3 flex justify-center py-10">
          <ToggleGroup
            type="single"
            variant="outline"
            spacing={2}
            size="sm"
            defaultValue="All"
          >
            {filter.map((item, index) => (
              <ToggleGroupItem
                key={index}
                value={item.name}
                aria-label="Toggle bookmark"
                className={cn(
                  'data-[state=on]:bg-custom data-[state=on]:text-black border-custom-border-button',
                  black
                )}
              >
                {item.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {data.map((project, index) => (
            <CardProject
              title={project.title}
              description={project.description}
              categories={project.categories}
              techStack={project.techStack}
              repoUrl={project.repoUrl}
              demoUrl={project.demoUrl}
              key={index}
            />
          ))}
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
