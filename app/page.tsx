import React from 'react';
import HomeClient from '@/components/home/home-client';
import { getAllBooks } from '@/lib/api/books';
import LandingPage from '@/components/common/LandingPage';
import { auth0 } from '@/lib/auth0';

export default async function Home() {
  const session = await auth0.getSession();
  if (!session) {
    return <LandingPage />;
  }
  // Obtener datos de libros del API mock
  const books = await getAllBooks();
  return (
    <div className="bg-background min-h-screen">
      <HomeClient books={books} />
    </div>
  );
}
