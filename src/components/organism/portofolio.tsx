import { ClassNameProps } from '@/types';
import { Button, Card } from '@/components/ui';
import clsx from 'clsx';
import { Persuasif } from '../molecules';

type PortofolioProps = ClassNameProps;

export function Portofolio({ className }: PortofolioProps) {
  const baseClass = clsx(className);
  const count = 6;
  return (
    <>
      <div className={baseClass}>
        <div>
          <h1>Portofolio saya</h1>
          <p>ya begitulah der</p>
        </div>
        <div>
          <Button>saya</Button>
          <Button>saya</Button>
          <Button>saya</Button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {Array(count)
            .fill(null)
            .map((_, index) => (
              <Card key={index}>Card ke-{index + 1}</Card>
            ))}
        </div>
      </div>
      <Persuasif />
    </>
  );
}
