import { AboutMe, HeroSection } from '@/components/organism';
import { ChevronsDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto  items-center w-full py-10">
      <HeroSection
        className="grid grid-cols-2 pt-10"
        classNameScroll="pt-24"
        title="Scroll Down"
        icon={<ChevronsDown className="mx-auto" />}
        classNameTitle=""
      />
      <AboutMe className="pb-10 pt-20" />
    </div>
  );
}
