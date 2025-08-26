'use client';

import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { CalendarIcon, CheckIcon, ListIcon, PercentIcon } from 'lucide-react';
import { useState, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { toast } from 'sonner';

export type BookActionState = 'default' | 'in-library' | 'reading' | 'read' | 'dnf';

// Tipos estrictos para la request
export type BookProgressRequest =
  | { state: 'in-library' }
  | { state: 'reading'; progress: number; progressType: 'percent' }
  | { state: 'read'; startDate: string; endDate: string }
  | { state: 'dnf'; startDate: string };

interface BookActionsProps {
  bookId: string;
  state?: BookActionState;
}

export function BookActions({ bookId, state = 'default' }: BookActionsProps) {
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showReadingPopover, setShowReadingPopover] = useState(false);
  const [showReadPopover, setShowReadPopover] = useState(false);
  const [showDnfPopover, setShowDnfPopover] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [trackingState, setTrackingState] = useState<BookActionState>(state);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  async function saveTracking(
    newState: BookActionState,
    data?: { progress?: number; startDate?: string; endDate?: string },
  ) {
    setLoading(true);
    setError(null);
    setSuccess(false);
    let body: BookProgressRequest;
    if (newState === 'reading') {
      body = {
        state: 'reading',
        progress: data?.progress ?? progress,
        progressType: 'percent',
      };
    } else if (newState === 'read') {
      body = {
        state: 'read',
        startDate: data?.startDate ?? startDate,
        endDate: data?.endDate ?? endDate,
      };
    } else if (newState === 'dnf') {
      body = {
        state: 'dnf',
        startDate: data?.startDate ?? startDate,
      };
    } else {
      body = { state: 'in-library' };
    }
    try {
      const res = await fetch(`/api/book/${bookId}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || 'Error al guardar');
        toast.error(result.error || 'Error al guardar', { position: 'top-right' });
        return;
      }
      setTrackingState(newState);
      setSuccess(true);
      toast.success('Seguimiento guardado', { position: 'top-right' });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setSuccess(false), 1500);
    } catch {
      setError('Error de red');
      toast.error('Error de red', { position: 'top-right' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-[var(--spacing-m)]">
      {/* Botón Quiero leer */}
      <Button
        variant={trackingState === 'in-library' ? 'seguimientoSelected' : 'seguimientoSecondary'}
        size="lg"
        aria-label="Quiero leer"
        onClick={() => {
          setShowReadingPopover(false);
          setShowReadPopover(false);
          setShowDnfPopover(false);
          saveTracking('in-library');
        }}
        data-selected={trackingState === 'in-library'}
      >
        <ListIcon className="mr-2 h-4 w-4" />
        Quiero leer
      </Button>
      {/* Botón Leyendo con Popover de avance */}
      <Popover open={showReadingPopover} onOpenChange={setShowReadingPopover}>
        <PopoverTrigger asChild>
          <Button
            variant={trackingState === 'reading' ? 'seguimientoSelected' : 'seguimientoSecondary'}
            size="lg"
            aria-label="Leyendo"
            onClick={() => {
              setShowReadPopover(false);
              setShowDnfPopover(false);
              setShowReadingPopover(true);
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
            onClick={() => {
              saveTracking('reading', { progress });
              setShowReadingPopover(false);
            }}
            disabled={loading}
            aria-label="Guardar avance"
          >
            Guardar avance
          </Button>
        </PopoverContent>
      </Popover>
      {/* Botón Leído con Popover de fechas */}
      <Popover open={showReadPopover} onOpenChange={setShowReadPopover}>
        <PopoverTrigger asChild>
          <Button
            variant={trackingState === 'read' ? 'seguimientoSelected' : 'seguimientoSecondary'}
            size="lg"
            aria-label="Leído"
            onClick={() => {
              setShowReadingPopover(false);
              setShowDnfPopover(false);
              setShowReadPopover(true);
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
            onClick={() => {
              saveTracking('read', { startDate, endDate });
              setShowReadPopover(false);
            }}
            disabled={loading}
            aria-label="Guardar fechas"
          >
            Guardar fechas
          </Button>
        </PopoverContent>
      </Popover>
      {/* Botón Abandonado con Popover de fecha de inicio */}
      <Popover open={showDnfPopover} onOpenChange={setShowDnfPopover}>
        <PopoverTrigger asChild>
          <Button
            variant={trackingState === 'dnf' ? 'seguimientoSelected' : 'seguimientoSecondary'}
            size="lg"
            aria-label="Abandonado"
            onClick={() => {
              setShowReadingPopover(false);
              setShowReadPopover(false);
              setShowDnfPopover(true);
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
            onClick={() => {
              saveTracking('dnf', { startDate });
              setShowDnfPopover(false);
            }}
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
