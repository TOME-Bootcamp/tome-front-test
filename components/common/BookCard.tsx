import * as React from 'react';
import { cn } from '@/lib/utils';
import { BookCover } from '../home/book-cover';
import { BookDataChip } from './BookDataChip';
import { ChipsRow } from './ChipsRow';

export interface BookCardData {
  // Datos de la portada
  cover: string;
  title: string;

  // Datos para los chips principales
  year?: string;
  pages?: string;
  rating?: string;

  // Chips adicionales (géneros, etiquetas, etc.)
  tags: string[];

  // Tamaño de la imagen (opcional, por defecto usa el del BookCover)
  imageWidth?: number;
  imageHeight?: number;
}

export interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  book: BookCardData;
  variant?: 'default' | 'compact';
}

export function BookCard({ book, variant = 'default', className, ...props }: BookCardProps) {
  return (
    <div
      className={cn(
        'bg-background border-border flex gap-4 rounded-[var(--radius-lg)] border p-4',
        variant === 'compact' && 'gap-3 p-3',
        className,
      )}
      {...props}
    >
      {/* Portada del libro */}
      <div className="flex-shrink-0">
        <BookCover cover={book.cover} title={book.title} size={'medium'} />
      </div>

      {/* Información del libro */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {/* Título del libro */}
        <h3 className="u-text-title-medium text-foreground line-clamp-2 font-medium">
          {book.title}
        </h3>

        {/* Chips de datos principales */}
        <div className="flex flex-wrap gap-2">
          {book.year && <BookDataChip label="Año" value={book.year} />}
          {book.pages && <BookDataChip label="Páginas" value={book.pages} />}
          {book.rating && <BookDataChip label="Rating" value={book.rating} />}
        </div>

        {/* Chips adicionales (tags, géneros, etc.) */}
        {book.tags && book.tags.length > 0 && (
          <div className="mt-auto">
            <ChipsRow labels={book.tags} variant={'outline'} className="px-0" />
          </div>
        )}
      </div>
    </div>
  );
}
