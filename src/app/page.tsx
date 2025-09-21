import { AboutMe, HeroSection } from '@/components/organism';

export default function Home() {
  return (
    <div className="container grid mx-auto grid-cols-2 items-center w-full py-10">
      <HeroSection />
      <AboutMe />
    </div>
  );
}
