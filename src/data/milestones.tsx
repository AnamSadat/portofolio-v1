import { Archive, Award, Briefcase, GraduationCap } from 'lucide-react';

const baseClassName = '';
const baseSizeIcon = 28;

export const milestones = [
  {
    icon: <Briefcase className={baseClassName} size={baseSizeIcon} />,
    title: '< 1',
    description: 'Tahun Pengalaman',
    duration: '100',
  },
  {
    icon: <Archive className={baseClassName} size={baseSizeIcon} />,
    title: '5+',
    description: 'Proyek Selesai',
    duration: '200',
  },
  {
    icon: <GraduationCap className={baseClassName} size={baseSizeIcon} />,
    title: '15+',
    description: 'Teknologi Dikuasai',
    duration: '300',
  },
  {
    icon: <Award className={baseClassName} size={baseSizeIcon} />,
    title: '3+',
    description: 'Sertifikasi',
    duration: '400',
  },
];
