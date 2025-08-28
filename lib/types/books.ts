// Tipos unificados para libros

export type Tag = {
  id: string;
  name: string;
};

export type SearchBookDto = {
  id: string;
  title: string;
  author: string;
  coverURl: string;
};

export type GetBookDto = {
  id: string;
  title: string;
  isbn: string;
  author: string;
  coverURl: string;
  releaseDate: string; // LocalDate -> string (ISO)
  pages: number;
  synopsis: string;
  publisher: string;
  tags: Tag[];
  language: string;
};
