'use client';

import { ClassNameProps } from '@/types';
import {
  Button,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui';
import { CardProject, Header, Persuasif } from '../molecules';
import projects from '@/data/portofolio.json';
import { cn } from '@/lib/utils';
import { isBlack, isColorCard } from '@/constants';
import { AOSInit } from '@/lib/aos-init';
import { useState } from 'react';

type PortofolioProps = ClassNameProps;

export type Project = {
  title: string;
  description: string;
  categories: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  duration: string;
};

export function Portofolio({ className }: PortofolioProps) {
  const baseClass = cn(className);
  const filter = [
    { name: 'All' },
    { name: 'Web Development' },
    { name: 'Cloud Computing' },
  ];
  const data: Project[] = projects;

  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterProject =
    selectedFilter === 'All'
      ? data.sort((a, b) => a.title.localeCompare(b.title))
      : data.filter((item) => item.categories.includes(selectedFilter));

  // hitung jumlah project per kategori
  const counts: Record<string, number> = {
    All: data.length,
    'Web Development': data.filter((p) =>
      p.categories.includes('Web Development')
    ).length,
    'Cloud Computing': data.filter((p) =>
      p.categories.includes('Cloud Computing')
    ).length,
  };

  AOSInit();

  return (
    <>
      <div className={baseClass} id="portofolio">
        <div>
          <Header
            title="Portofolio"
            titleColor="Saya"
            className="xt-5xl font-bold text-center pb-10"
            classNameTitleColor="text-custom"
            space
          />
          <p>ya begitulah der</p>
        </div>
        <div className="gap-3 flex justify-center py-10">
          <ToggleGroup
            type="single"
            variant="outline"
            spacing={2}
            size="sm"
            defaultValue="All"
            value={selectedFilter}
            onValueChange={(value) => {
              if (value) setSelectedFilter(value);
            }}
          >
            {filter.map((item, index) => (
              <ToggleGroupItem
                key={index}
                value={item.name}
                aria-label="Toggle bookmark"
                className={cn(
                  'data-[state=on]:bg-custom dark:data-[state=on]:bg-custom data-[state=on]:text-black data-[state=off]:bg-emerald-200 dark:bg-[#18181B] hover:bg-custom! hover:text-black border-custom-border-button dark:hover:bg-custom! dark:hover:text-black rounded-full',
                  isBlack
                )}
              >
                {item.name} {item.name !== 'All' && `(${counts[item.name]})`}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {filterProject.map((project, index) => (
            <CardProject
              title={project.title}
              description={project.description}
              categories={project.categories}
              techStack={project.techStack}
              repoUrl={project.repoUrl}
              demoUrl={project.demoUrl}
              aosDelay={project.duration}
              key={index}
            />
          ))}
        </div>
        {/* <div className="pt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> */}
      </div>
      <Persuasif
        className={cn('text-center border-2', isColorCard)}
        classNameLayout="py-8"
        title="Siap untuk colaborations"
        classNameTitle="text-2xl font-bold"
        description="Mari berdiskusi tentang proyek selanjutnya dan bagaimana saya dapat membantu mewujudkan visi digital Anda."
        classNameDescription=""
        classNameChildren="max-w-2xl mx-auto"
      >
        <Button>Mulai project baru</Button>
      </Persuasif>
    </>
  );
}
