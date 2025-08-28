import { notFound } from 'next/navigation';
import { getBookById } from '@/lib/api/books';
import { BookDataChip } from '@/components/common/BookDataChip';
import { ChipsRow } from '@/components/common/ChipsRow';
import { BookCover } from '@/components/home/book-cover';
import { ScrollRow } from '@/components/common/ScrollRow';
import { RelatedBooks } from '@/components/common/RelatedBooks';
import { BookActions } from '@/components/common/BookActions';
import { getRelatedBooks } from '@/lib/api/books.mock';
import { ScrollArea } from '@/components/ui/scroll-area';

interface BookDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = await params;

  // Obtener detalles del libro
  const book = await getBookById(id);

  if (!book) {
    notFound();
  }

  // Obtener libros relacionados
  const relatedBooks = await getRelatedBooks(id);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="grid-covers mb-8 flex items-start gap-8">
          {/* Portada grande */}
          <div className="flex-shrink-0">
            <BookCover cover={book.coverURl} title={book.title} size="large" />
          </div>

          {/* Información principal en una sola columna */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Título */}
            <h1 className="u-text-headline-large text-foreground mb-2 font-bold">{book.title}</h1>
            {/* Autor sin prefijo, color neutral 700 */}
            <p className="u-text-headline-medium text-color-muted mb-4">{book.author}</p>
            {/* Sinopsis debajo del autor, sin título */}
            <ScrollArea className="u-text-body-large text-foreground mb-6 h-30 pr-2 leading-relaxed">
              {book.synopsis}
            </ScrollArea>
            {/* Chips de detalles: fila scrolleable horizontal con drag y wheel */}
            <ScrollRow className="mb-4 gap-[var(--spacing-m)]">
              <BookDataChip label="Año" value={book.releaseDate.slice(0, 4)} />
              <BookDataChip label="Páginas" value={book.pages.toString()} />
              <BookDataChip label="Editorial" value={book.publisher} />
              <BookDataChip label="ISBN" value={book.isbn} />
              <BookDataChip label="Idioma" value={book.language} />
            </ScrollRow>

            {/* Chips de géneros/categorías debajo de los chips, sin label */}
            <div className="flex flex-wrap">
              <ChipsRow labels={book.tags} variant={'outline'} className="px-0" />
            </div>
          </div>
        </div>
        {/* Acciones de seguimiento del libro */}
        <div className="mb-8">
          <BookActions bookId={id} />
        </div>
        {/*/!* Libros relacionados *!/*/}
        <RelatedBooks books={relatedBooks} />
      </div>
    </div>
  );
}
