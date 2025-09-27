'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  { title: '2021', content: 'Mulai belajar HTML, CSS, JS.' },
  { title: '2022', content: 'Ikut Bootcamp Fullstack.' },
  { title: '2023', content: 'Internship sebagai Backend Dev.' },
  { title: '2024', content: 'Freelance & Bangkit Academy.' },
];

interface TimelineItemProps {
  item: { title: string; content: string };
  index: number;
  total: number;
  scrollYProgress: any;
}

function TimelineItem({
  item,
  index,
  total,
  scrollYProgress,
}: TimelineItemProps) {
  const progressPoint = (index + 1) / total;

  const dotColor = useTransform(
    scrollYProgress,
    [progressPoint - 0.1, progressPoint],
    ['#9ca3af', '#00ff99']
  );

  return (
    <div className="relative flex items-start gap-6">
      {/* Dot di garis */}
      <motion.div
        style={{ backgroundColor: dotColor }}
        className="relative top-3 w-5 h-5 rounded-full border-2 border-[#00ff99] z-10"
      />

      {/* Konten */}
      <div>
        <h3 className="text-xl font-semibold text-[#00ff99]">{item.title}</h3>
        <p className="text-neutral-400 mt-2">{item.content}</p>
      </div>
    </div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.2', 'end 0.8'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>

      {/* Bungkus garis + items biar garis mulai dari content */}
      <div className="relative pl-8">
        {/* Garis background */}
        <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-neutral-700/40" />

        {/* Garis progress */}
        <motion.div
          style={{ height: heightTransform }}
          className="absolute left-[10px] top-0 w-[2px] bg-[#00ff99]"
        />

        {/* Items */}
        <div className="space-y-16">
          {timelineData.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              total={timelineData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
