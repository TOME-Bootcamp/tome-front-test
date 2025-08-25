import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

export interface BookDataChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
}

export function BookDataChip({
  label = 'Label',
  value = 'Value',
  className,
  ...props
}: BookDataChipProps) {
  return (
    <Card
      data-slot="book-data-chip"
      className={cn(
        'inline-flex min-h-0 w-auto min-w-0 shrink-0 flex-col items-center justify-center gap-0 rounded-[var(--radius)] ' +
          'border-none bg-[var(--ds-neutral-200)] px-4 py-1 font-medium text-nowrap shadow-none',
        className,
      )}
      {...props}
    >
      <div className="u-text-label-medium text-[color:var(--ds-neutral-700)]">
        <span className="whitespace-pre">{label}</span>
      </div>
      <div className="u-text-title-medium text-[color:var(--ds-neutral-800)]">
        <span className="whitespace-pre">{value}</span>
      </div>
    </Card>
  );
}
