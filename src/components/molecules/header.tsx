import { cn } from '@/lib/utils';
import { ClassNameProps } from '@/types';

export type HeaderProps = ClassNameProps & {
  title?: string;
  className?: string;
  titleColor?: string;
  space?: boolean;
  classNameTitleColor?: string;
};

export function Header({
  title,
  className,
  titleColor,
  space,
  classNameTitleColor,
}: HeaderProps) {
  const baseClass = cn('text-5xl font-bold', className);
  return (
    <h1
      className={baseClass}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-once="true"
      // data-aos-anchor-placement="top-bottom"
    >
      {title}
      {space && ' '}
      <span className={classNameTitleColor}>{titleColor}</span>
    </h1>
  );
}
