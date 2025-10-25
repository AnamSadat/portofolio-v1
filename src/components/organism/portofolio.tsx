import { ClassNameProps } from '@/types';
import { Card, ToggleGroup, ToggleGroupItem } from '@/components/ui';
import clsx from 'clsx';
import { Persuasif } from '../molecules';

type PortofolioProps = ClassNameProps;

export function Portofolio({ className }: PortofolioProps) {
  const baseClass = clsx(className);
  const count = 6;
  const filter = [
    { name: 'All' },
    { name: 'Front-End Development' },
    { name: 'Back-End Development' },
  ];
  return (
    <>
      <div className={baseClass}>
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
                className="data-[state=on]:bg-custom data-[state=on]:text-black border-custom-border-button"
              >
                {item.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
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
