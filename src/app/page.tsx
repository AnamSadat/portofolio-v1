import {
  AboutMe,
  Experience,
  HeroSection,
  Skill,
  Portofolio,
  Contact,
} from '@/components/organism';
import { milestones } from '@/data/milestones';
import { ChevronsDown } from 'lucide-react';

export default function Home() {
  // FIXME:
  // [x] Transition card yet
  // [x] Transition card translate-y
  // [x] Description Menu Section
  // [x] Description on persuasif not yet fix
  // [x] Handle Form Contact, Using SMTP Email for handler
  // [x] Create Page privacy and terms
  // [x] Styling privacy and terms ui
  // [] Add styling hover translate-y for privacy and terms
  // [x] Responsive
  // [] Update Not Found
  // [] Update to indo

  return (
    <div className="md:px-40 mx-auto items-center w-full">
      <HeroSection
        className="h-screen flex flex-col pb-8"
        classNameScroll=""
        title="Scroll Down"
        icon={<ChevronsDown className="mx-auto" />}
        classNameTitle=""
      />
      <AboutMe className="pt-20 pb-8" id="about" milestones={milestones} />
      <Skill className="pt-20 pb-8" />
      <Experience className="relative w-full mx-auto pt-20 pb-8" />
      <Portofolio className="pt-20 pb-8" />
      <Contact className="w-full py-16 md:py-20" />
    </div>
  );
}
