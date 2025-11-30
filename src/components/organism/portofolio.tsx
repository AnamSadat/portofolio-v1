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
import { CardProject, Header, Persuasif } from '@/components/molecules';
import projects from '@/data/portofolio.json';
import { cn } from '@/lib/utils';
import { isBlack, isColorCard } from '@/constants';
import { AOSInit } from '@/lib/aos-init';
import { useState } from 'react';
import { Description } from '../molecules/description';

type PortofolioProps = ClassNameProps;

export type Project = {
  title: string;
  description: string;
  categories: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  duration: string;
  once: boolean;
};

export function Portofolio({ className }: PortofolioProps) {
  const baseClass = cn(
    'w-full mx-auto px-10 sm:px-6 lg:px-0 py-12 sm:py-16',
    className
  );
  const filter = [
    { name: 'All' },
    { name: 'Web Development' },
    { name: 'Cloud Computing' },
  ];
  const data: Project[] = projects;

  const secondaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

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
        <header className="pb-6 text-center">
          <Header
            title="Portofolio"
            titleColor="Saya"
            className="text-4xl sm:text-4xl md:text-5xl font-bold text-center"
            classNameTitleColor="text-custom"
            space
          />
          <Description>
            Karya digital yang saya bangun untuk berbagai kebutuhan dan use
            case.
          </Description>
        </header>

        {/* Filter: dibuat flex-wrap & lebih nyaman di mobile */}
        <div className="gap-2 sm:gap-3 flex flex-wrap justify-center py-6 sm:py-10">
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
                  'data-[state=on]:bg-custom dark:data-[state=on]:bg-custom data-[state=on]:text-black data-[state=off]:bg-emerald-200 dark:bg-[#18181B] hover:bg-custom! hover:text-black border-custom-border-button dark:hover:bg-custom! dark:hover:text-black rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2',
                  isBlack
                )}
              >
                {item.name} {item.name !== 'All' && `(${counts[item.name]})`}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Grid project: 1 kolom di mobile, 2 di tablet, 3 di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-6">
          {filterProject.map((project, index) => (
            <CardProject
              title={project.title}
              description={project.description}
              categories={project.categories}
              techStack={project.techStack}
              repoUrl={project.repoUrl}
              demoUrl={project.demoUrl}
              aosDelay={project.duration}
              aosOnce={project.once}
              key={index}
            />
          ))}
        </div>

        {/* Pagination masih dikomentarin, dibiarkan apa adanya */}
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

      {/* Section ajakan kolaborasi */}
      <div className="px-10 md:px-0">
        <Persuasif
          className={cn(
            'text-center border-2 border-emerald-700 bg-emerald-950/30 mx-auto w-full'
          )}
          classNameLayout="py-8 mx-auto"
          title="Punya Ide Project Menarik?"
          span="Kolaborasi Yuk!"
          classNameSpan="text-emerald-500"
          classNameTitle="text-2xl sm:text-3xl font-bold"
          description="Ayo diskusikan konsep Anda dan lihat bagaimana saya bisa membantu mengubah ide tersebut menjadi solusi digital yang fungsional dan modern."
          classNameDescription="text-sm sm:text-base max-w-2xl mx-auto"
          classNameChildren="max-w-2xl mx-auto mt-4"
        >
          <Button
            className={cn(
              secondaryButton,
              'dark:bg-emerald-500 dark:hover:bg-emerald-700 text-sm sm:text-base px-6 sm:px-8'
            )}
          >
            Mulai Project Baru
          </Button>
        </Persuasif>
      </div>
    </>
  );
}
