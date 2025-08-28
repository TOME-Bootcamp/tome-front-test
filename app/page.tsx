import React from 'react';
import HomeClient from '@/components/home/home-client';
import { getAllBooks } from '@/lib/api/books';
import LandingPage from '@/components/common/LandingPage';
import { auth0 } from '@/lib/auth0';
import type { SearchBookDto } from '@/lib/types/books';

export default async function Home() {
  const session = await auth0.getSession();
  if (!session) {
    return <LandingPage />;
  }

  let books: SearchBookDto[];
  let errorMessage: string | undefined = undefined;
  try {
    books = await getAllBooks();
  } catch (error: unknown) {
    errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    books = [];
  }

  return (
    <div className="bg-background min-h-screen">
      <HomeClient books={books} error={errorMessage} />
    </div>
  );
}
