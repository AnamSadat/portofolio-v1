import {
  AboutMe,
  Experience,
  HeroSection,
  Skill,
  Portofolio,
  Contact,
} from '@/components/organism';
import { Archive, Award, Briefcase, ChevronsDown, Smile } from 'lucide-react';

export default function Home() {
  const myMilestones = [
    {
      icon: <Briefcase />,
      title: '2+',
      description: 'Tahun Pengalaman',
    },
    {
      icon: <Archive />,
      title: '10+',
      description: 'Proyek Selesai',
    },
    {
      icon: <Smile />,
      title: '5+',
      description: 'Klien Puas',
    },
    {
      icon: <Award />,
      title: '3+',
      description: 'Sertifikasi',
    },
  ];
  return (
    <div className="container mx-auto  items-center w-full">
      <HeroSection
        className="h-screen flex flex-col pb-12"
        classNameScroll=""
        title="Scroll Down"
        icon={<ChevronsDown className="mx-auto" />}
        classNameTitle=""
      />
      <AboutMe className="pb-20 pt-20" milestones={myMilestones} />
      <Skill />
      <Experience />
      <Portofolio className="py-10" />
      <Contact />
    </div>
  );
}
