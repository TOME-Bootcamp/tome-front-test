'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchBar } from '@/components/home/search-bar';
import { BookCover } from '@/components/home/book-cover';

interface Book {
  id: string;
  title: string;
  cover: string;
}

interface HomeClientProps {
  books: Book[];
}

export default function HomeClient({ books }: HomeClientProps) {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  // Filtrar libros por título (case-insensitive)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleBookClick = (bookId: string) => {
    router.push(`/book/${bookId}`);
  };

  return (
    <>
      <header className="fixed top-[var(--spacing-l)] left-1/2 z-10 w-full max-w-4xl -translate-x-1/2 px-[var(--spacing-m)]">
        <SearchBar
          size="large"
          searchText="Buscar por título, autor o ISBN"
          value={searchValue}
          onChange={setSearchValue}
        />
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
                <BookCover title={book.title} cover={book.cover} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
