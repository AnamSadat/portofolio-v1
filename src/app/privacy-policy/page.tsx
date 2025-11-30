'use client';

import React from 'react';
import { AppBreadcrumb } from '@/components/organism/app-breadcrumb';
import { AOSInit } from '@/lib/aos-init';
import { Header } from '@/components/molecules';
import { Description } from '@/components/molecules/description';
import { cn } from '@/lib/utils';
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  AOSInit();

  const privacySections = [
    {
      icon: Shield,
      title: 'Introduction',
      content:
        'Welcome to my portfolio. I value your privacy and am committed to protecting your personal data. This privacy policy explains how I collect, use, and safeguard your information when you visit my website.',
      delay: 100,
    },
    {
      icon: Eye,
      title: 'Information Collection',
      content:
        'I may collect personal information that you voluntarily provide to me when you use the Contact Me form or interact with other features of the site.',
      items: ['Your name', 'Email address', 'Message content'],
      additional:
        'I also automatically collect certain non-personal information when you visit, such as your IP address, browser type, and operating system, to improve the websites performance and user experience.',
      delay: 150,
    },
    {
      icon: UserCheck,
      title: 'Use of Information',
      content: 'The information collected is used for the following purposes:',
      items: [
        'To respond to your inquiries and messages.',
        'To improve the content and functionality of my portfolio.',
        'To analyze website traffic and usage patterns.',
      ],
      delay: 200,
    },
    {
      icon: Lock,
      title: 'Data Security',
      content:
        'I implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.',
      delay: 250,
    },
    {
      icon: FileText,
      title: 'Third-Party Links',
      content:
        'My portfolio may contain links to third-party websites (e.g., LinkedIn, GitHub). I am not responsible for the privacy practices or content of these external sites. I encourage you to review their privacy policies.',
      delay: 300,
    },
    {
      icon: Mail,
      title: 'Contact Me',
      content:
        'If you have any questions or concerns about this Privacy Policy, please feel free to contact me through the form on the homepage or via email.',
      delay: 350,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 text-gray-800 dark:text-gray-200 py-20 px-10 sm:px-6 lg:px-0 transition-all duration-500">
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
        <header className="text-center space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:to-indigo-400/5 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <Header
              title="Privacy"
              titleColor="Policy"
              className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
              classNameTitleColor="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent"
              space
            />
            <Description className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your privacy matters. Here&apos;s how I protect and handle your
              personal information with complete transparency.
            </Description>
          </div>
        </header>

        {/* Content */}
        <article className="space-y-8 text-base sm:text-lg leading-relaxed">
          {privacySections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <section
                key={index}
                className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 transition-all duration-500 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={section.delay}
                data-aos-once="true"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-900/10 dark:to-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                        {index + 1}. {section.title}
                      </span>
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>

                    {section.items && (
                      <ul className="space-y-2 ml-4">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.additional && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl border-l-4 border-blue-300 dark:border-blue-600">
                        {section.additional}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            );
          })}

          {/* Last Updated */}
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full border border-blue-200 dark:border-blue-800">
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                Last updated: November 2024
              </span>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
