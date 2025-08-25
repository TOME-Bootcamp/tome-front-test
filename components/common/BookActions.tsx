'use client';

import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { CalendarIcon, CheckIcon, ListIcon, PercentIcon } from 'lucide-react';
import { useState, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { toast } from 'sonner';

export type BookActionState = 'default' | 'in-library' | 'reading' | 'read' | 'dnf';

interface BookActionsProps {
  bookId: string;
  state?: BookActionState;
}

export function BookActions({ bookId, state = 'default' }: BookActionsProps) {
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showProgressPopover, setShowProgressPopover] = useState(false);
  const [showDatePopover, setShowDatePopover] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Estado mockeado de seguimiento
  const [trackingState, setTrackingState] = useState<BookActionState>(state);

  // Nuevos estados para fechas
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // Simulación de guardado de estado de seguimiento
  function saveTrackingState(newState: BookActionState) {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setTrackingState(newState);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      toast.success('Estado de seguimiento guardado', { position: 'top-right' });
      timeoutRef.current = setTimeout(() => setSuccess(false), 1500);
    }, 500);
  }

  // Guardar estado y datos adicionales según tipo de seguimiento
  function handleSaveTrackingWithData(
    newState: BookActionState,
    data: { progress?: number; startDate?: string; endDate?: string },
  ) {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setTrackingState(newState);
    // Simulación de guardado (mock)
    // Aquí se puede reemplazar por fetch a /api/book/${bookId}/progress
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success('Seguimiento guardado', { position: 'top-right' });
    }, 500);
    // Si hay error, usar: toast.error('Error al guardar', ...)
  }

  async function saveProgress() {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch(`/api/book/${bookId}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ progress }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Error al guardar');
        toast.error(data.error || 'Error al guardar', { position: 'top-right' });
      } else {
        setSuccess(true);
        toast.success('Avance guardado', { position: 'top-right' });
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setSuccess(false), 2000);
      }
    } catch {
      setError('Error de red');
      toast.error('Error de red', { position: 'top-right' });
    } finally {
      setLoading(false);
    }
  }

  // Simulación de guardado de fechas
  function saveDates() {
    setLoading(true);
    setError(null);
    setSuccess(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      toast.success('Fechas guardadas', { position: 'top-right' });
      timeoutRef.current = setTimeout(() => setSuccess(false), 1500);
    }, 500);
  }

  // Render según estado
  return (
    <div className="flex items-center gap-[var(--spacing-m)]">
      {/* Botón Quiero leer */}
      <Button
        variant={trackingState === 'in-library' ? 'seguimientoSelected' : 'seguimientoSecondary'}
        size="lg"
        aria-label="Quiero leer"
        className=""
        onClick={() => saveTrackingState('in-library')}
        data-selected={trackingState === 'in-library'}
      >
        <ListIcon className="mr-2 h-4 w-4" />
        Quiero leer
      </Button>
      {/* Botón Leyendo con Popover de avance */}
      <Popover
        open={trackingState === 'reading' && showProgressPopover}
        onOpenChange={setShowProgressPopover}
      >
        <PopoverTrigger asChild>
          <Button
            variant={trackingState === 'reading' ? 'seguimientoSelected' : 'seguimientoSecondary'}
            size="lg"
            aria-label="Leyendo"
            className=""
            onClick={() => {
              setTrackingState('reading');
              setShowProgressPopover(true);
            }}
            data-selected={trackingState === 'reading'}
          >
            <PercentIcon className="mr-2 h-4 w-4" />
            Leyendo
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <div className="text-foreground mb-2 text-sm font-medium">Porcentaje de avance</div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={[progress]}
            onValueChange={([val]) => setProgress(val)}
            aria-label="Porcentaje de avance"
            disabled={loading}
          />
          <div className="text-muted-foreground mt-2 text-right">{progress}%</div>
          <Button
            variant="default"
            size="lg"
            className="mt-2 w-full"
            onClick={() => handleSaveTrackingWithData('reading', { progress })}
            disabled={loading}
            aria-label="Guardar avance"
          >
            Guardar avance
          </Button>
        </PopoverContent>
      </Popover>
      {/* Botón Leído con Popover de fechas */}
      <Popover open={trackingState === 'read' && showDatePopover} onOpenChange={setShowDatePopover}>
        <PopoverTrigger asChild>
          <Button
            variant={trackingState === 'read' ? 'seguimientoSelected' : 'seguimientoSecondary'}
            size="lg"
            aria-label="Leído"
            className=""
            onClick={() => {
              setTrackingState('read');
              setShowDatePopover(true);
            }}
            data-selected={trackingState === 'read'}
          >
            <CheckIcon className="mr-2 h-4 w-4" />
            Leído
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" align="start">
          <div className="text-foreground mb-2 text-sm font-medium">Fechas de lectura</div>
          <div className="flex flex-col gap-2">
            <label className="u-text-label-small text-muted-foreground" htmlFor="start-date">
              Fecha de inicio
            </label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              aria-label="Fecha de inicio"
              disabled={loading}
            />
            <label className="u-text-label-small text-muted-foreground" htmlFor="end-date">
              Fecha de fin
            </label>
            <Input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              aria-label="Fecha de fin"
              disabled={loading}
            />
          </div>
          <Button
            variant="default"
            size="lg"
            className="mt-2 w-full"
            onClick={() => handleSaveTrackingWithData('read', { startDate, endDate })}
            disabled={loading}
            aria-label="Guardar fechas"
          >
            Guardar fechas
          </Button>
        </PopoverContent>
      </Popover>
      {/* Botón Abandonado con Popover de fecha de inicio */}
      <Popover open={trackingState === 'dnf' && showDatePopover} onOpenChange={setShowDatePopover}>
        <PopoverTrigger asChild>
          <Button
            variant={trackingState === 'dnf' ? 'seguimientoSelected' : 'seguimientoSecondary'}
            size="lg"
            aria-label="Abandonado"
            className=""
            onClick={() => {
              setTrackingState('dnf');
              setShowDatePopover(true);
            }}
            data-selected={trackingState === 'dnf'}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Abandonado
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" align="start">
          <div className="text-foreground mb-2 text-sm font-medium">Fecha de inicio</div>
          <Input
            id="dnf-start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            aria-label="Fecha de inicio"
            disabled={loading}
          />
          <Button
            variant="default"
            size="lg"
            className="mt-2 w-full"
            onClick={() => handleSaveTrackingWithData('dnf', { startDate })}
            disabled={loading}
            aria-label="Guardar fecha"
          >
            Guardar fecha
          </Button>
        </PopoverContent>
      </Popover>
      {/* Feedback visual de guardado */}
      {loading && (
        <span className="u-text-label-small text-muted-foreground ml-2">Guardando...</span>
      )}
      {success && <span className="u-text-label-small text-primary ml-2">¡Guardado!</span>}
      {error && <span className="u-text-label-small text-destructive ml-2">{error}</span>}
    </div>
  );
}
