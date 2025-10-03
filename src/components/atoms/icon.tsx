import { ClassNameProps } from '@/types';

type IconProps = ClassNameProps & {
  children: React.ReactNode;
};

export function Icon({ className, children }: IconProps) {
  return (
    <>
      <span className={className}>{children}</span>
    </>
  );
}
