import type { NextRequest } from 'next/server';
import { updateBookProgress } from '@/lib/api/books.mock';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await req.json();
    const { state, progress, progressType, startDate, endDate } = body;
    const { id } = await params;
    // Validación básica
    if (!['in-library', 'reading', 'read', 'dnf'].includes(state)) {
      return new Response(JSON.stringify({ error: 'Estado de seguimiento inválido' }), {
        status: 400,
      });
    }
    if (state === 'reading') {
      if (typeof progress !== 'number' || !['percent', 'pages'].includes(progressType)) {
        return new Response(JSON.stringify({ error: 'Datos de avance inválidos' }), {
          status: 400,
        });
      }
    }
    if (state === 'read') {
      if (!startDate || !endDate || typeof startDate !== 'string' || typeof endDate !== 'string') {
        return new Response(JSON.stringify({ error: 'Fechas de lectura inválidas' }), {
          status: 400,
        });
      }
    }
    if (state === 'dnf') {
      if (!startDate || typeof startDate !== 'string') {
        return new Response(JSON.stringify({ error: 'Fecha de inicio inválida' }), { status: 400 });
      }
    }
    // Guardar el progreso
    await updateBookProgress(id, {
      state,
      progress: state === 'reading' ? progress : undefined,
      progressType: state === 'reading' ? progressType : undefined,
      startDate: state === 'read' || state === 'dnf' ? startDate : undefined,
      endDate: state === 'read' ? endDate : undefined,
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: `Error interno: ${e}` }), { status: 500 });
  }
}
