'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchBar } from '@/components/home/search-bar';
import { BookCover } from '@/components/home/book-cover';
import { Button } from '@/components/ui/button';
import { useUser } from '@auth0/nextjs-auth0';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import type { SearchBookDto } from '@/lib/types/books';

interface HomeClientProps {
  books: SearchBookDto[];
  error?: string;
}

export default function HomeClient({ books, error }: HomeClientProps) {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (error) {
      // Log para depuración
      console.log('Toast error:', error);
      toast.error(`Error al cargar los libros: ${error}`, {
        position: 'top-right',
      });
    }
  }, [error]);

  // Filtrar libros por título (case-insensitive)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleBookClick = (bookId: string) => {
    router.push(`/book/${bookId}`);
  };

  return (
    <>
      <header className="fixed top-[var(--spacing-l)] left-1/2 z-10 grid w-full -translate-x-1/2 grid-cols-3 items-center px-[var(--spacing-m)]">
        {/* Columna 1: vacía */}
        <div />
        {/* Columna 2: SearchBar centrada */}
        <div className="flex justify-center">
          <div className="mx-auto w-full max-w-2xl">
            <SearchBar
              size="large"
              searchText="Buscar por título, autor o ISBN"
              value={searchValue}
              onChange={setSearchValue}
            />
          </div>
        </div>
        {/* Columna 3: Info usuario + logout */}
        <div className="flex items-center justify-end gap-[var(--spacing-m)] pr-[var(--spacing-m)]">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Skeleton className="size-8 rounded-full" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          ) : user ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={user.picture ?? undefined} alt={user.name ?? 'Avatar'} />
                <AvatarFallback>{user.name?.[0] ?? '?'}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="u-text-title-medium text-foreground leading-tight">
                  {user.name}
                </span>
                <span className="text-muted-foreground text-xs leading-tight">{user.email}</span>
              </div>
            </div>
          ) : null}
          <Button
            size="sm"
            variant="outline"
            aria-label="Cerrar sesión"
            onClick={() => {
              window.location.href = '/auth/logout';
            }}
          >
            Cerrar sesión
          </Button>
        </div>
      </header>
      <main className="pt-[calc(var(--spacing-xl)*4)] pb-[calc(var(--spacing-xl)*2)]">
        <div className="container mx-auto">
          <div className="grid-covers grid gap-[var(--spacing-m)]">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleBookClick(book.id)}
              >
                <BookCover title={book.title} cover={book.coverURl} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
