import type { GetBookDto } from '../types/books';

// Datos mock extendidos basados en las imágenes de la página principal
const mockBooksData: GetBookDto[] = [
  {
    id: '1',
    title: 'El nombre del viento',
    isbn: '978-0-7564-0474-1',
    author: 'Patrick Rothfuss',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295796927i/10297927.jpg',
    releaseDate: '2007-01-01',
    pages: 662,
    synopsis:
      'Primera entrega de la saga Crónica del Asesino de Reyes. La historia de Kvothe, un legendario héroe cuya vida se ha convertido en mito y leyenda. Narrada por él mismo, esta es la historia de su juventud, sus aventuras y los eventos que lo llevaron a convertirse en una figura legendaria.',
    publisher: 'DAW Books',
    tags: [
      { id: '1', name: 'Fantasía' },
      { id: '2', name: 'Épico' },
      { id: '3', name: 'Primera persona' },
      { id: '4', name: 'Magia' },
    ],
    language: 'Español',
  },
  {
    id: '2',
    title: 'Cien años de soledad',
    isbn: '978-84-376-0494-7',
    author: 'Gabriel García Márquez',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347626503i/370523.jpg',
    releaseDate: '1967-01-01',
    pages: 471,
    synopsis:
      'La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Una obra maestra del realismo mágico.',
    publisher: 'Editorial Sudamericana',
    tags: [
      { id: '5', name: 'Realismo mágico' },
      { id: '6', name: 'Clásico' },
    ],
    language: 'Español',
  },
  {
    id: '3',
    title: '1984',
    isbn: '978-0-452-28423-4',
    author: 'George Orwell',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348990566i/5470.jpg',
    releaseDate: '1949-01-01',
    pages: 328,
    synopsis:
      'Una distopía totalitaria que presenta un mundo donde el gobierno controla todos los aspectos de la vida humana. La historia de Winston Smith y su lucha contra el sistema opresivo del Gran Hermano se ha convertido en una advertencia profética sobre los peligros del autoritarismo.',
    publisher: 'Secker & Warburg',
    tags: [
      { id: '7', name: 'Distopía' },
      { id: '8', name: 'Ciencia ficción' },
      { id: '9', name: 'Política' },
      { id: '10', name: 'Clásico' },
    ],
    language: 'Español',
  },
  {
    id: '4',
    title: 'Dune',
    isbn: '978-0-441-17271-9',
    author: 'Frank Herbert',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
    releaseDate: '1965-01-01',
    pages: 688,
    synopsis:
      "Una épica espacial ambientada en el lejano futuro, donde las casas nobles luchan por el control del planeta desértico Arrakis, la única fuente de la especia melange. La historia de Paul Atreides y su transformación en el mesías Muad'Dib.",
    publisher: 'Chilton Books',
    tags: [
      { id: '11', name: 'Ciencia ficción' },
      { id: '12', name: 'Épico' },
      { id: '13', name: 'Política' },
      { id: '14', name: 'Ecología' },
    ],
    language: 'Español',
  },
  {
    id: '5',
    title: 'El señor de los anillos',
    isbn: '978-0-618-64015-7',
    author: 'J.R.R. Tolkien',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg',
    releaseDate: '1954-01-01',
    pages: 1216,
    synopsis:
      'La obra cumbre de la literatura fantástica moderna. La épica aventura de Frodo Bolsón y la Comunidad del Anillo para destruir el Anillo Único y derrotar al Señor Oscuro Sauron. Una historia de amistad, sacrificio y heroísmo en la Tierra Media.',
    publisher: 'George Allen & Unwin',
    tags: [
      { id: '15', name: 'Fantasía épica' },
      { id: '16', name: 'Aventura' },
      { id: '17', name: 'Mitología' },
      { id: '18', name: 'Clásico' },
    ],
    language: 'Español',
  },
  {
    id: '6',
    title: 'Orgullo y prejuicio',
    isbn: '978-0-14-143951-8',
    author: 'Jane Austen',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1171646070i/110815.jpg',
    releaseDate: '1813-01-01',
    pages: 432,
    synopsis:
      'Una brillante comedia de modales que retrata la Inglaterra rural del siglo XIX. La historia de Elizabeth Bennet y Fitzwilliam Darcy, una exploración del amor, la clase social y los prejuicios en la sociedad georgiana.',
    publisher: 'T. Egerton',
    tags: [
      { id: '19', name: 'Romance' },
      { id: '20', name: 'Drama histórico' },
      { id: '21', name: 'Clásico' },
      { id: '22', name: 'Literatura inglesa' },
    ],
    language: 'Español',
  },
  {
    id: '7',
    title: 'Crimen y castigo',
    isbn: '978-0-14-044913-6',
    author: 'Fiódor Dostoyevski',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1381202721i/18634774.jpg',
    releaseDate: '1866-01-01',
    pages: 671,
    synopsis:
      'Una profunda exploración psicológica de la culpa y la redención. La historia de Rodión Raskólnikov, un estudiante empobrecido que comete un asesinato y lucha con las consecuencias morales y psicológicas de su acto.',
    publisher: 'The Russian Messenger',
    tags: [
      { id: '23', name: 'Literatura rusa' },
      { id: '24', name: 'Psicológico' },
      { id: '25', name: 'Filosofía' },
      { id: '26', name: 'Clásico' },
    ],
    language: 'Español',
  },
  {
    id: '8',
    title: 'La metamorfosis',
    isbn: '978-0-486-29030-5',
    author: 'Franz Kafka',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505192485i/59186.jpg',
    releaseDate: '1915-01-01',
    pages: 201,
    synopsis:
      'Una obra surrealista que narra la transformación de Gregor Samsa en un insecto gigante y las consecuencias de esta metamorfosis en su familia y su propia percepción de la humanidad. Una alegoría sobre la alienación moderna.',
    publisher: 'Kurt Wolff Verlag',
    tags: [
      { id: '27', name: 'Surrealismo' },
      { id: '28', name: 'Existencialismo' },
      { id: '29', name: 'Alegoría' },
      { id: '30', name: 'Literatura checa' },
    ],
    language: 'Español',
  },
  {
    id: '9',
    title: 'Matar a un ruiseñor',
    isbn: '978-0-06-112008-4',
    author: 'Harper Lee',
    coverURl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453638444i/23802330.jpg',
    releaseDate: '1960-01-01',
    pages: 376,
    synopsis:
      'Una conmovedora historia sobre la pérdida de la inocencia, contada a través de los ojos de Scout Finch en el sur de Estados Unidos durante los años 30. Una exploración valiente del racismo, la moralidad y la justicia.',
    publisher: 'J.B. Lippincott & Co.',
    tags: [
      { id: '31', name: 'Drama social' },
      { id: '32', name: 'Literatura estadounidense' },
      { id: '33', name: 'Derechos civiles' },
      { id: '34', name: 'Premio Pulitzer' },
    ],
    language: 'Español',
  },
  {
    id: '10',
    title: 'El gran Gatsby',
    isbn: '978-0-7432-7356-5',
    author: 'F. Scott Fitzgerald',
    coverURl: 'http://localhost:3845/assets/2239e08c5a9073b92de5643884d06481498728e1.png',
    releaseDate: '1925-01-01',
    pages: 218,
    synopsis:
      'Una crítica brillante del sueño americano ambientada en los locos años veinte. La historia de Jay Gatsby y su obsesión por Daisy Buchanan, narrada por Nick Carraway, ofrece una visión melancólica de la decadencia y el exceso de la era del jazz.',
    publisher: "Charles Scribner's Sons",
    tags: [
      { id: '35', name: 'Literatura estadounidense' },
      { id: '36', name: 'Drama' },
      { id: '37', name: 'Años 20' },
      { id: '38', name: 'Sueño americano' },
    ],
    language: 'Español',
  },
  {
    id: '11',
    title: 'Fahrenheit 451',
    isbn: '978-1-4516-7331-9',
    author: 'Ray Bradbury',
    coverURl: 'http://localhost:3845/assets/4d8ffa284e0aab473f663db32b73c750d6b5161d.png',
    releaseDate: '1953-01-01',
    pages: 249,
    synopsis:
      'Una distopía sobre una sociedad donde los libros están prohibidos y los bomberos se dedican a quemarlos. La historia de Guy Montag, un bombero que comienza a cuestionar su trabajo y descubre el poder transformador de la literatura.',
    publisher: 'Ballantine Books',
    tags: [
      { id: '39', name: 'Distopía' },
      { id: '40', name: 'Ciencia ficción' },
      { id: '41', name: 'Censura' },
      { id: '42', name: 'Literatura' },
    ],
    language: 'Español',
  },
  {
    id: '12',
    title: 'Don Quijote de la Mancha',
    isbn: '978-84-376-0494-8',
    author: 'Miguel de Cervantes',
    coverURl: 'http://localhost:3845/assets/ca828df46904b31b7a572d03fd61e80b5c2844b6.png',
    releaseDate: '1605-01-01',
    pages: 863,
    synopsis:
      'Considerada la primera novela moderna, narra las aventuras de Alonso Quixano, quien tras leer muchos libros de caballerías pierde la cordura y decide convertirse en caballero andante bajo el nombre de Don Quijote de la Mancha.',
    publisher: 'Juan de la Cuesta',
    tags: [
      { id: '43', name: 'Clásico español' },
      { id: '44', name: 'Aventura' },
      { id: '45', name: 'Sátira' },
      { id: '46', name: 'Siglo de Oro' },
    ],
    language: 'Español',
  },
];

// Estado de seguimiento mockeado por libro
export interface BookProgress {
  state: 'in-library' | 'reading' | 'read' | 'dnf';
  progress?: number;
  progressType?: 'percent' | 'pages';
  startDate?: string;
  endDate?: string;
}

export const mockBookProgress: Record<string, BookProgress> = {};

// Función para obtener libros relacionados
export async function getRelatedBooks(currentBookId: string): Promise<GetBookDto[]> {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Retornar 3 libros aleatorios excluyendo el actual
  const otherBooks = mockBooksData.filter((book) => book.id !== currentBookId);
  const shuffled = otherBooks.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export async function updateBookProgress(id: string, data: BookProgress): Promise<void> {
  // Simula guardado en memoria
  mockBookProgress[id] = { ...data };
}

export async function getBookProgress(id: string): Promise<BookProgress | null> {
  return mockBookProgress[id] ?? null;
}
