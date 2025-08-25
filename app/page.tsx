import React from 'react';
import HomeClient from '@/components/home/home-client';
import { getAllBooks } from '@/lib/api/books';

export default async function Home() {
  // Obtener datos de libros del API mock
  const books = await getAllBooks();

  return (
    <div className="bg-background min-h-screen">
      <HomeClient books={books} />
    </div>
  );
}
