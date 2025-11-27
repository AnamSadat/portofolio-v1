import { Archive, Award, Briefcase, GraduationCap } from 'lucide-react';

const baseClassName = '';
const baseSizeIcon = 28;

export const milestones = [
  {
    icon: <Briefcase className={baseClassName} size={baseSizeIcon} />,
    title: '< 1',
    description: 'Tahun Pengalaman',
    duration: '100',
    once: true,
  },
  {
    icon: <Archive className={baseClassName} size={baseSizeIcon} />,
    title: '5+',
    description: 'Proyek Selesai',
    duration: '200',
    once: true,
  },
  {
    icon: <GraduationCap className={baseClassName} size={baseSizeIcon} />,
    title: '15+',
    description: 'Teknologi Dikuasai',
    duration: '300',
    once: true,
  },
  {
    icon: <Award className={baseClassName} size={baseSizeIcon} />,
    title: '3+',
    description: 'Sertifikasi',
    duration: '400',
    once: true,
  },
];
