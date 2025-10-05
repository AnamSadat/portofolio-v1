import clsx from 'clsx';
import { Card } from '../ui';
import { ClassNameProps } from '@/types';

type PersuasifProps = ClassNameProps & {
  children?: React.ReactNode;
  classNameTitle?: string;
  classNameDescription?: string;
  title?: string;
  description?: string;
  span?: React.ReactNode;
  classNameSpan?: string;
};

export function Persuasif({
  classNameDescription,
  classNameTitle,
  classNameSpan,
  title,
  description,
  span,
  className,
  children,
}: PersuasifProps) {
  const baseClassTitle = clsx('', classNameTitle);
  const baseClassDescription = clsx('text-wrap', classNameDescription);
  const baseClassSpan = clsx('', classNameSpan);

  return (
    <Card className={className}>
      <h1 className={baseClassTitle}>
        {title}
        <span className={baseClassSpan}>{span}</span>
      </h1>
      <p className={baseClassDescription}>{description}</p>
      {children}
    </Card>
  );
}
