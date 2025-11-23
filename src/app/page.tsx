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
      title: '< 1',
      description: 'Tahun Pengalaman',
      time: '100',
    },
    {
      icon: <Archive />,
      title: '5+',
      description: 'Proyek Selesai',
      time: '200',
    },
    {
      icon: <Smile />,
      title: '15+',
      description: 'Teknologi Dikuasai',
      time: '300',
    },
    {
      icon: <Award />,
      title: '3+',
      description: 'Sertifikasi',
      time: '400',
    },
  ];
  return (
    <div className="container mx-auto  items-center w-full">
      <HeroSection
        className="h-screen flex flex-col pb-8"
        classNameScroll=""
        title="Scroll Down"
        icon={<ChevronsDown className="mx-auto" />}
        classNameTitle=""
      />
      <AboutMe className="pt-20 pb-8" id="about" milestones={myMilestones} />
      <Skill className="pt-20 pb-8" />
      <Experience className="relative w-full mx-auto pt-20 pb-8" />
      <Portofolio className="pt-20 pb-8" />
      <Contact className="w-full py-16 md:py-20" />
    </div>
  );
}
