import { cn } from '@/lib/utils';
import { Card } from '../ui';
import { ClassNameProps } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type PersuasifProps = ClassNameProps & {
  children?: React.ReactNode;
  classNameTitle?: string;
  classNameDescription?: string;
  title?: string;
  description?: string;
  span?: React.ReactNode;
  classNameSpan?: string;
  classNameChildren?: string;
  classNameLayout?: string;
};

export function Persuasif({
  classNameDescription,
  classNameTitle,
  classNameSpan,
  title,
  description,
  span,
  className,
  classNameChildren,
  classNameLayout,
  children,
}: PersuasifProps) {
  const baseClassTitle = cn('', classNameTitle);
  const baseClassDescription = cn('text-wrap', classNameDescription);
  const baseClassSpan = cn('', classNameSpan);
  const baseClassChildren = cn('', classNameChildren);
  const baseClassLayout = cn('', classNameLayout);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  });

  return (
    <div className={baseClassLayout} data-aos="fade-up" data-aos-once={true}>
      <Card className={className}>
        <h1 className={baseClassTitle}>
          {title}
          <span className={baseClassSpan}> {span}</span>
        </h1>
        <p className={baseClassDescription}>{description}</p>
        <span className={baseClassChildren}>{children}</span>
      </Card>
    </div>
  );
}
