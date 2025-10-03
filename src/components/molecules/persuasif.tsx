import clsx from 'clsx';
import { Card } from '../ui';
import { ClassNameProps } from '@/types';

type PersuasifProps = ClassNameProps & {
  children?: React.ReactNode;
  classNameTitle?: string;
  classNameDescription?: string;
  title?: string;
  description?: string;
};

export function Persuasif({
  classNameDescription,
  classNameTitle,
  title,
  description,
  className,
  children,
}: PersuasifProps) {
  const baseClassTitle = clsx('', classNameTitle);
  const baseClassDescription = clsx('', classNameDescription);

  return (
    <Card className={className}>
      <h1 className={baseClassTitle}>{title}</h1>
      <p className={baseClassDescription}>{description}</p>
      {children}
    </Card>
  );
}
