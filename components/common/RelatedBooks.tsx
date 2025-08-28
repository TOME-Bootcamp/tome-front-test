'use client';

import { useRouter } from 'next/navigation';
import { BookCard } from '@/components/common/BookCard';
import type { GetBookDto } from '@/lib/types/books';

interface RelatedBooksProps {
  books: GetBookDto[];
}

export function RelatedBooks({ books }: RelatedBooksProps) {
  const router = useRouter();

  const handleBookClick = (bookId: string) => {
    router.push(`/book/${bookId}`);
  };

  if (books.length === 0) {
    return null;
  }

  return (
    <div>
      <h1 className="u-text-headline-small text-foreground mb-6 font-semibold">
        Libros relacionados
      </h1>
      <div className="grid gap-4">
        {books.map((relatedBook) => (
          <BookCard
            key={relatedBook.id}
            book={{
              cover: relatedBook.coverURl,
              title: relatedBook.title,
              year: relatedBook.releaseDate.slice(0, 4),
              pages: relatedBook.pages.toString(),
              tags: relatedBook.tags.slice(0, 3),
              imageWidth: 120,
              imageHeight: 180,
            }}
            variant="compact"
            className="hover:bg-muted/50 cursor-pointer transition-colors"
            onClick={() => handleBookClick(relatedBook.id)}
          />
        ))}
      </div>
    </div>
  );
}
