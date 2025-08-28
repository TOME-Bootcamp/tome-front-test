import type { GetBookDto, SearchBookDto } from '../types/books';
import { auth0 } from '@/lib/auth0';

export async function getAllBooks(): Promise<SearchBookDto[]> {
  const { token } = await auth0.getAccessToken();
  const res = await fetch(`${process.env.API_URL}/books/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`Error al obtener libros: ${res.status}`);
  return await res.json();
}

export async function getBookById(id: string): Promise<GetBookDto | null> {
  const { token } = await auth0.getAccessToken();
  const res = await fetch(`${process.env.API_URL}/books/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    cache: 'no-store',
  });
  if (!res.ok) return null;

  return await res.json();
}
