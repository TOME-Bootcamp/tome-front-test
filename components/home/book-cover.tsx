import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export type BookCoverSize = 'small' | 'medium' | 'large';

interface BookCoverProps {
  cover: string;
  title: string;
  size?: BookCoverSize;
}

const sizeMap: Record<BookCoverSize, { w: string; h: string; imgW: number; imgH: number }> = {
  small: {
    w: 'w-[var(--spacing-book-sm)]',
    h: 'h-[calc(var(--spacing-book-sm)*1.51)]',
    imgW: 120,
    imgH: 180,
  },
  medium: {
    w: 'w-[var(--spacing-book-md)]',
    h: 'h-[calc(var(--spacing-book-md)*1.51)]',
    imgW: 175,
    imgH: 264,
  },
  large: {
    w: 'w-[var(--spacing-book-lg)]',
    h: 'h-[calc(var(--spacing-book-lg)*1.51)]',
    imgW: 225,
    imgH: 340,
  },
};

export function BookCover({ cover, title, size = 'medium' }: BookCoverProps) {
  const { w, h, imgW, imgH } = sizeMap[size];
  return (
    <Card
      className={`grid-covers flex ${h} ${w} items-center justify-center overflow-hidden border-none bg-transparent p-0 shadow-none`}
    >
      <CardContent className="flex h-full w-full items-center justify-center p-0">
        <Image
          src={cover}
          alt={title}
          width={imgW}
          height={imgH}
          className="h-full w-full rounded-[var(--radius-lg)] object-cover"
        />
      </CardContent>
    </Card>
  );
}
