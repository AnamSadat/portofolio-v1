'use client';

import Link from 'next/link';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui';
import { AppBreadcrumbProps } from '@/types/components/type-app-breadcrumb';

export function AppBreadcrumb({ items }: AppBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="dark:text-white">
                  {item.name}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
