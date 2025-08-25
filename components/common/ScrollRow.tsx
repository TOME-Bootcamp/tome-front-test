'use client';
import React, { useRef } from 'react';

interface ScrollRowProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollRow: React.FC<ScrollRowProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Drag to scroll
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    startX = e.pageX - (ref.current?.offsetLeft ?? 0);
    scrollLeft = ref.current?.scrollLeft ?? 0;
    document.body.style.cursor = 'grabbing';
  };
  const onMouseUp = () => {
    isDragging = false;
    document.body.style.cursor = '';
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !ref.current) return;
    const x = e.pageX - ref.current.offsetLeft;
    ref.current.scrollLeft = scrollLeft - (x - startX);
  };

  // Wheel vertical to horizontal
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      ref.current?.scrollBy({ left: e.deltaY });
      e.preventDefault();
    }
  };

  return (
    <div
      ref={ref}
      className={`scrollbar-hide flex flex-nowrap overflow-x-auto ${className ?? ''}`}
      role="list"
      tabIndex={0}
      aria-label="Detalles del libro"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      onWheel={onWheel}
      style={{ cursor: 'grab' }}
    >
      {children}
    </div>
  );
};
