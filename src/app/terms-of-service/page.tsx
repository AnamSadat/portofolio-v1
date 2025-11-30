'use client';

import React from 'react';
import { AppBreadcrumb } from '@/components/organism/app-breadcrumb';
import { AOSInit } from '@/lib/aos-init';
import { PolicyHeader, PolicySectionCard } from '@/components/molecules';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Scale,
  FileCheck,
  Copyright,
  Key,
  AlertTriangle,
  Globe,
} from 'lucide-react';

export default function TermsOfServicePage() {
  AOSInit();

  const termsData = [
    {
      icon: FileCheck,
      title: 'Penerimaan Ketentuan',
      content:
        'Dengan mengakses dan menggunakan website ini, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan dalam perjanjian ini. Jika Anda tidak setuju untuk mematuhi ketentuan ini, mohon jangan gunakan layanan ini.',
      highlight: 'Perjanjian mengikat saat akses',
      delay: 100,
    },
    {
      icon: Copyright,
      title: 'Kekayaan Intelektual',
      content:
        'Semua konten di website ini, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, dan kode, adalah milik Anam Sadat kecuali dinyatakan lain. Anda tidak boleh mereproduksi, mendistribusikan, atau membuat karya turunan dari konten ini tanpa izin eksplisit.',
      highlight: 'Konten dilindungi hak cipta',
      delay: 150,
    },
    {
      icon: Key,
      title: 'Lisensi Penggunaan',
      content:
        'Izin diberikan untuk melihat materi di website ini secara sementara untuk keperluan pribadi, non-komersial, dan sementara saja. Ini adalah pemberian lisensi, bukan transfer kepemilikan.',
      highlight: 'Hanya untuk penggunaan pribadi',
      delay: 200,
    },
    {
      icon: AlertTriangle,
      title: 'Penafian',
      content:
        'Materi di website ini disediakan atas dasar "sebagaimana adanya". Saya tidak memberikan jaminan, tersurat maupun tersirat, dan dengan ini menafikan semua jaminan lainnya termasuk, tanpa batasan, jaminan tersirat atau kondisi kelayakan jual, kesesuaian untuk tujuan tertentu, atau non-pelanggaran kekayaan intelektual atau pelanggaran hak lainnya.',
      highlight: 'Tidak ada jaminan yang diberikan',
      delay: 250,
    },
    {
      icon: Scale,
      title: 'Batasan Tanggung Jawab',
      content:
        'Dalam keadaan apa pun saya tidak akan bertanggung jawab atas kerusakan apa pun (termasuk, tanpa batasan, kerusakan karena kehilangan data atau keuntungan, atau karena gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan menggunakan materi di website ini.',
      highlight: 'Tanggung jawab terbatas',
      delay: 300,
    },
    {
      icon: Globe,
      title: 'Hukum yang Berlaku',
      content:
        'Setiap klaim yang berkaitan dengan website ini akan diatur oleh hukum Indonesia tanpa memperhatikan ketentuan konflik hukumnya.',
      highlight: 'Hukum Indonesia berlaku',
      delay: 350,
    },
  ];

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
              name: 'Terms of Service',
            },
          ]}
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <PolicyHeader
          icon={Scale}
          title="Syarat dan"
          titleColor="Ketentuan"
          description="Syarat dan ketentuan hukum yang mengatur penggunaan website ini. Mohon baca dengan seksama sebelum melanjutkan."
          variant="terms"
        />

        {/* Content */}
        <article className="space-y-8 text-base sm:text-lg leading-relaxed">
          {termsData.map((term, index) => (
            <PolicySectionCard
              key={index}
              icon={term.icon}
              title={term.title}
              content={term.content}
              highlight={term.highlight}
              delay={term.delay}
              index={index}
              variant="terms"
            />
          ))}

          {/* Legal Notice */}
          <Card className="bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 hover:shadow-custom-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-200/50 dark:bg-green-800/50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-green-700 dark:text-green-300" />
                </div>
                <CardTitle className="text-lg font-semibold text-green-800 dark:text-green-200">
                  Pemberitahuan Hukum Penting
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed mb-4">
                Ketentuan ini merupakan keseluruhan perjanjian antara Anda dan
                Anam Sadat mengenai penggunaan website ini. Setiap modifikasi
                terhadap ketentuan ini harus dibuat secara tertulis dan
                disepakati oleh kedua belah pihak. Jika ada ketentuan yang
                dianggap tidak dapat dilaksanakan, ketentuan lainnya akan tetap
                berlaku sepenuhnya.
              </p>
              <div className="flex items-center space-x-2">
                <FileCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                  Tanggal Berlaku: November {new Date().getFullYear()}
                </span>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </main>
  );
}
