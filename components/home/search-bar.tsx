'use client';

import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import React from 'react';

interface SearchBarProps {
  size?: 'large' | 'small';
  searchText?: string; // usado como placeholder
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({
  size = 'large',
  searchText = 'Search by title, author or ISBN',
  value,
  onChange,
}: SearchBarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Colores y layout
  const isLarge = size === 'large';

  // Borde: neutral-400 por defecto, neutral-500 en focus
  const baseBorder = 'border-[var(--ds-neutral-400)]';
  const focusWithin = 'focus-within:border-[var(--ds-neutral-500)]';

  const bgColor = 'bg-[var(--color-background)]';
  const rounded = 'rounded-3xl';

  const padding = isLarge ? 'px-[var(--spacing-m)] py-[var(--spacing-m)]' : 'px-4 py-2';
  const height = isLarge ? 'h-[calc(var(--spacing-xl)*2)]' : 'h-[36px]';

  // Tipografía (usar utilidades globales en @layer utilities para override fiable)
  const textClass = isLarge
    ? 'u-text-headline-large md:text-headline-large'
    : 'u-text-headline-medium md:text-headline-medium';

  // Placeholder más claro (neutral-400)
  const placeholderColor = 'placeholder:text-[var(--ds-neutral-400)]';

  // Icono de búsqueda: neutral-400 por defecto, neutral-500 en foco
  const iconSize = isLarge ? 'h-[var(--spacing-xl)] w-[var(--spacing-xl)]' : 'h-6 w-6';
  const iconMargin = isLarge ? 'mr-[var(--spacing-m)]' : 'mr-4';
  const iconColor = 'text-[var(--ds-neutral-400)] group-focus-within:text-[var(--ds-neutral-500)]';

  const onClear = () => {
    onChange('');
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  return (
    <div className={`relative mx-auto w-full max-w-4xl`}>
      <div
        className={`group flex w-full items-center ${bgColor} ${height} ${rounded} border-2 ${baseBorder} ${padding} transition-colors ${focusWithin}`}
      >
        <Search className={`${iconColor} ${iconSize} ${iconMargin}`} />
        <Input
          ref={inputRef}
          type="search"
          placeholder={searchText}
          aria-label="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`flex-1 border-none bg-transparent shadow-none outline-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:outline-none ${textClass} text-[var(--ds-neutral-800)] ${placeholderColor} h-full p-0`}
        />
        {value.length > 0 && (
          <button
            type="button"
            aria-label="Limpiar búsqueda"
            onClick={onClear}
            className={`ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-[var(--ds-neutral-400)] opacity-0 transition-colors group-focus-within:opacity-100 group-hover:opacity-100 hover:text-[var(--ds-neutral-500)] focus-visible:text-[var(--ds-neutral-500)]`}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
