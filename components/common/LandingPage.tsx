'use client';

import type { JSX } from 'react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LandingPage(): JSX.Element {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center">
      <div className="bg-card shadow-muted flex flex-col items-center rounded-xl px-[var(--spacing-l)] py-[var(--spacing-xl)] shadow-xl">
        <Image
          src="/TomeIconV1.png"
          alt="Logo Tome"
          width={128}
          height={128}
          className="mb-[var(--spacing-l)] rounded-2xl object-contain"
          aria-hidden="true"
        />
        <h1 className="u-text-headline-medium text-foreground mb-[var(--spacing-l)] text-center">
          ¡Bienvenido a TOME!
        </h1>
        <p className="text-muted-foreground u-text-title-medium mb-[var(--spacing-xl)] text-center">
          Descubre, gestiona y sigue tu progreso de lectura en una plataforma privada y segura.
        </p>
        <Button
          size="lg"
          aria-label="Iniciar sesión"
          className="u-text-body-large cursor-pointer"
          onClick={() => {
            window.location.href = '/auth/login';
          }}
        >
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
}
