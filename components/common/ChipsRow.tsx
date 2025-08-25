import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { ScrollRow } from './ScrollRow';

export interface ChipsRowProps {
  labels: string[];
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | null | undefined;
  className?: string;
}

export function ChipsRow({ labels, variant, className }: ChipsRowProps) {
  return (
    <ScrollRow
      className={`w-full gap-[var(--spacing-s)] ${className || ''}`}
      aria-label="Lista de chips"
    >
      {labels.map((label, idx) => (
        <Badge
          key={idx}
          variant={variant || 'default'}
          role="listitem"
          className="u-text-title-medium shrink-0 rounded-[var(--radius-xl)] border-2"
        >
          {label}
        </Badge>
      ))}
    </ScrollRow>
  );
}
