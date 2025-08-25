export default function BookDetailLoading() {
  return (
    <div
      className="bg-background min-h-screen"
      role="status"
      aria-label="Cargando detalle del libro"
    >
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="grid-covers mb-8 flex items-start gap-8">
          {/* Portada grande skeleton */}
          <div className="flex-shrink-0">
            <div
              className="bg-muted animate-pulse rounded-[var(--radius)]"
              style={{ width: 240, height: 360 }}
              aria-label="Cargando portada"
            />
          </div>

          {/* Información principal skeleton */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Título skeleton */}
            <div className="u-text-title-large text-foreground mb-2 font-bold">
              <div
                className="bg-muted h-8 w-3/4 animate-pulse rounded"
                aria-label="Cargando título"
              />
            </div>
            {/* Autor skeleton */}
            <div className="u-text-title-medium text-color-muted mb-4">
              <div
                className="bg-muted h-6 w-1/2 animate-pulse rounded"
                aria-label="Cargando autor"
              />
            </div>
            {/* Sinopsis skeleton */}
            <div className="u-text-body-large text-foreground mb-6 leading-relaxed">
              <div
                className="bg-muted mb-2 h-5 w-full animate-pulse rounded"
                aria-label="Cargando sinopsis"
              />
              <div className="bg-muted mb-2 h-5 w-3/4 animate-pulse rounded" />
              <div className="bg-muted h-5 w-1/2 animate-pulse rounded" />
            </div>
            {/* Chips de detalles skeleton */}
            <div
              className="mb-4 flex gap-[var(--spacing-m)] overflow-x-auto"
              aria-label="Cargando datos del libro"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted h-10 w-24 animate-pulse rounded" />
              ))}
            </div>
            {/* Chips de géneros/categorías skeleton */}
            <div className="flex flex-wrap px-0" aria-label="Cargando géneros">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-muted mr-2 mb-2 h-8 w-20 animate-pulse rounded" />
              ))}
            </div>
          </div>
        </div>
        {/* Libros relacionados skeleton (opcional, solo si se activa en page.tsx) */}
        {/* <div className="mt-8">
          <div className="bg-muted animate-pulse rounded h-6 w-40 mb-6" />
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-4 rounded-[var(--radius-lg)] border border-border">
                <div className="flex-shrink-0">
                  <div className="bg-muted animate-pulse rounded-[var(--radius)]" style={{ width: 120, height: 180 }} aria-label="Cargando libro relacionado" />
                </div>
                <div className="flex flex-col gap-3 min-w-0 flex-1">
                  <div className="bg-muted animate-pulse rounded h-5 w-3/4" aria-label="Cargando título de libro relacionado" />
                  <div className="flex gap-2">
                    <div className="bg-muted animate-pulse rounded h-10 w-16" />
                    <div className="bg-muted animate-pulse rounded h-10 w-16" />
                    <div className="bg-muted animate-pulse rounded h-10 w-16" />
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <div className="bg-muted animate-pulse rounded-full h-6 w-16" />
                    <div className="bg-muted animate-pulse rounded-full h-6 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
