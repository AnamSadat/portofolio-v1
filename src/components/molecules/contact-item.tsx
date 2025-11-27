'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Copy, Check } from 'lucide-react';
import { Icon } from '../atoms';

type ContactItemProps = {
  icon: ReactNode;
  iconMaps?: ReactNode;
  label: string;
  value: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  actionExternal?: boolean;
};

export const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  iconMaps,
  label,
  value,
  description,
  actionLabel,
  actionHref,
  actionExternal = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex items-start gap-4 group">
      {/* Icon box */}
      <Icon className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-900/50">
        {icon}
      </Icon>

      {/* Text side */}
      <div className="flex-1 space-y-1">
        <p className="text-lg font-bold">{label}</p>

        {/* value + copy */}
        <div className="flex items-center gap-2">
          <span className="text-md text-emerald-500">{value}</span>

          <button
            type="button"
            onClick={handleCopy}
            className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
            aria-label={copied ? 'Copied' : 'Copy to clipboard'}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>

        <p className="text-sm text-muted-foreground">{description}</p>

        {/* action link di bawah, seperti "Send Email" / "View Map" */}
        <Link
          href={actionHref}
          {...(actionExternal && { target: '_blank', rel: 'noreferrer' })}
          className="mt-1 inline-flex text-emerald-500 items-center text-sm font-medium hover:underline gap-3 hover:text-emerald-300"
        >
          {actionLabel}
          <Icon>{iconMaps}</Icon>
        </Link>
      </div>
    </div>
  );
};
