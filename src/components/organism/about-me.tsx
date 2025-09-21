import { ClassNameProps } from '@/types';
import clsx from 'clsx';

export function AboutMe(className: ClassNameProps) {
  const baseClass = clsx('flex', className);
  return (
    <div className={baseClass}>
      <div>
        <h1>About Me</h1>
        <p>Initny isi saya</p>
      </div>
      <div>Isi content</div>
    </div>
  );
}
