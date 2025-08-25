import type { NextRequest } from 'next/server';
import { updateBookProgress } from '@/lib/api/books';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { progress, progressType, date } = await req.json();
    // Validación básica
    if (
      typeof progress !== 'number' ||
      !['percent', 'pages'].includes(progressType) ||
      (date && typeof date !== 'string')
    ) {
      return new Response(JSON.stringify({ error: 'Datos inválidos' }), { status: 400 });
    }
    // Actualizar en la base de datos (simulado)
    await updateBookProgress(params.id, { progress, progressType, date });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: `Error interno: ${e}` }), { status: 500 });
  }
}
