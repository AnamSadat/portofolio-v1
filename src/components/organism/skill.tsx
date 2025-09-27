import { ClassNameProps } from '@/types';
import clsx from 'clsx';
import { Card } from '../ui';

type SkillProps = ClassNameProps;

export function Skill({ className }: SkillProps) {
  const baseClass = clsx(className);
  const baseCard = clsx('p-5 bg-[#282830]');
  return (
    <div className={baseClass}>
      <header className="text-center ">
        <h1 className="text-5xl font-bold">Skill</h1>
        <p className="text-lg pt-5 text-[#d9fef0]">
          Mengenal lebih dekat sosok di balik karya-karya digital
        </p>
      </header>
      <div className="grid grid-cols-3 gap-5 pt-10">
        <Card className={baseCard}>Saya belajar</Card>
        <Card className={baseCard}>Saya belajar</Card>
        <Card className={baseCard}>Saya belajar</Card>
      </div>
      <div className="flex mx-auto justify-center gap-5 mt-5">
        <Card className={`w-md ${baseCard}`}>Saya belajar</Card>
        <Card className={`w-md ${baseCard}`}>Saya belajar</Card>
      </div>
    </div>
  );
}
