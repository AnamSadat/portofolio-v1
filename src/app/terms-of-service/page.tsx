'use client';

import React from 'react';
import { AppBreadcrumb } from '@/components/organism/app-breadcrumb';
import { AOSInit } from '@/lib/aos-init';
import { Header } from '@/components/molecules';
import { Description } from '@/components/molecules/description';
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
      title: 'Acceptance of Terms',
      content:
        'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.',
      highlight: 'Agreement is binding upon access',
      delay: 100,
    },
    {
      icon: Copyright,
      title: 'Intellectual Property',
      content:
        'All content on this website, including but not limited to text, graphics, logos, images, and code, is the property of Anam Sadat unless otherwise stated. You may not reproduce, distribute, or create derivative works from this content without explicit permission.',
      highlight: 'Content is protected by copyright',
      delay: 150,
    },
    {
      icon: Key,
      title: 'Use License',
      content:
        'Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
      highlight: 'Personal use only',
      delay: 200,
    },
    {
      icon: AlertTriangle,
      title: 'Disclaimer',
      content:
        "The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      highlight: 'No warranties provided',
      delay: 250,
    },
    {
      icon: Scale,
      title: 'Limitations',
      content:
        'In no event shall I be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.',
      highlight: 'Liability is limited',
      delay: 300,
    },
    {
      icon: Globe,
      title: 'Governing Law',
      content:
        'Any claim relating to this website shall be governed by the laws of Indonesia without regard to its conflict of law provisions.',
      highlight: 'Indonesian law applies',
      delay: 350,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-amber-950 dark:to-orange-950 text-gray-800 dark:text-gray-200 py-20 px-10 sm:px-6 lg:px-0 transition-all duration-500">
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
        <header className="text-center space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10 dark:from-amber-400/5 dark:to-orange-400/5 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl">
                <Scale className="w-12 h-12 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <Header
              title="Terms of"
              titleColor="Service"
              className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent"
              classNameTitleColor="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent"
              space
            />
            <Description className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Legal terms and conditions governing your use of this website.
              Please read carefully before proceeding.
            </Description>
          </div>
        </header>

        {/* Content */}
        <article className="space-y-8 text-base sm:text-lg leading-relaxed">
          {termsData.map((term, index) => {
            const IconComponent = term.icon;
            return (
              <section
                key={index}
                className="group relative overflow-hidden bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border-l-4 border-amber-400 dark:border-amber-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-400/5 transition-all duration-500 hover:-translate-y-1 hover:border-l-8"
                data-aos="fade-up"
                data-aos-delay={term.delay}
                data-aos-once="true"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/30 to-transparent dark:from-amber-900/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                            {index + 1}. {term.title}
                          </span>
                        </h2>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                            {term.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50/50 to-orange-50/30 dark:from-amber-900/10 dark:to-orange-900/5 rounded-xl p-6 border border-amber-200/30 dark:border-amber-800/30">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {term.content}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Legal Notice */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-amber-200 dark:bg-amber-800 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  Important Legal Notice
                </h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                  These terms constitute the entire agreement between you and
                  Anam Sadat regarding the use of this website. Any
                  modifications to these terms must be made in writing and
                  agreed upon by both parties. If any provision of these terms
                  is found to be unenforceable, the remaining provisions will
                  remain in full force and effect.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <FileCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                    Effective Date: November 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
