'use client';

import React from 'react';
import { AppBreadcrumb } from '@/components/organism/app-breadcrumb';
import { AOSInit } from '@/lib/aos-init';
import { PolicyHeader, PolicySectionCard } from '@/components/molecules';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  AOSInit();

  const privacySections = [
    {
      icon: Shield,
      title: 'Pendahuluan',
      content:
        'Selamat datang di portofolio saya. Saya menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana saya mengumpulkan, menggunakan, dan melindungi informasi Anda saat mengunjungi website ini.',
      delay: 100,
    },
    {
      icon: Eye,
      title: 'Pengumpulan Informasi',
      content:
        'Saya dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat menggunakan formulir Hubungi Saya atau berinteraksi dengan fitur lain di situs ini.',
      items: ['Nama Anda', 'Alamat email', 'Isi pesan'],
      additional:
        'Saya juga secara otomatis mengumpulkan informasi non-pribadi tertentu saat Anda berkunjung, seperti alamat IP, jenis browser, dan sistem operasi, untuk meningkatkan performa dan pengalaman pengguna website.',
      delay: 150,
    },
    {
      icon: UserCheck,
      title: 'Penggunaan Informasi',
      content: 'Informasi yang dikumpulkan digunakan untuk tujuan berikut:',
      items: [
        'Menanggapi pertanyaan dan pesan Anda.',
        'Meningkatkan konten dan fungsionalitas portofolio saya.',
        'Menganalisis traffic dan pola penggunaan website.',
      ],
      delay: 200,
    },
    {
      icon: Lock,
      title: 'Keamanan Data',
      content:
        'Saya menerapkan langkah-langkah teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah. Namun, perlu diketahui bahwa tidak ada metode transmisi melalui internet yang 100% aman.',
      delay: 250,
    },
    {
      icon: FileText,
      title: 'Tautan Pihak Ketiga',
      content:
        'Portofolio saya mungkin berisi tautan ke website pihak ketiga (misalnya, LinkedIn, GitHub). Saya tidak bertanggung jawab atas praktik privasi atau konten dari situs eksternal tersebut. Saya mendorong Anda untuk meninjau kebijakan privasi mereka.',
      delay: 300,
    },
    {
      icon: Mail,
      title: 'Hubungi Saya',
      content:
        'Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi saya melalui formulir di halaman utama atau melalui email.',
      delay: 350,
    },
  ];

  const baseCardWrapper =
    'transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-custom-hover';

  return (
    <main className="min-h-screen text-gray-800 dark:text-gray-200 py-20 px-10 sm:px-6 lg:px-0 transition-all duration-500">
      <div className="max-w-4xl mx-auto py-5">
        <AppBreadcrumb
          items={[
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'Privacy Policy',
            },
          ]}
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <PolicyHeader
          icon={Shield}
          title="Kebijakan"
          titleColor="Privasi"
          description="Privasi Anda penting bagi saya. Berikut cara saya melindungi dan menangani informasi pribadi Anda dengan transparansi penuh."
          variant="privacy"
        />

        {/* Content */}
        <article className="space-y-8 text-base sm:text-lg leading-relaxed">
          {privacySections.map((section, index) => (
            <PolicySectionCard
              key={index}
              icon={section.icon}
              title={section.title}
              content={section.content}
              items={section.items}
              additional={section.additional}
              delay={section.delay}
              index={index}
              variant="privacy"
            />
          ))}

          {/* Last Updated */}
          <div className="text-center py-8">
            <Card className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-sm hover:shadow-custom-hover transition-all duration-300">
              <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                Terakhir diperbarui: November 2024
              </span>
            </Card>
          </div>
        </article>
      </div>
    </main>
  );
}
