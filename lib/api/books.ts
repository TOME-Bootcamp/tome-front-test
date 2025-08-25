// Mock data para simular respuestas del backend
export interface BookDetail {
  id: string;
  title: string;
  cover: string;
  author: string;
  year: string;
  pages: string;
  rating: string;
  isbn: string;
  publisher: string;
  language: string;
  description: string;
  tags: string[];
}

// Datos mock extendidos basados en las imágenes de la página principal
const mockBooksData: BookDetail[] = [
  {
    id: '1',
    title: 'El nombre del viento',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295796927i/10297927.jpg',
    author: 'Patrick Rothfuss',
    year: '2007',
    pages: '662',
    rating: '4.8',
    isbn: '978-0-7564-0474-1',
    publisher: 'DAW Books',
    language: 'Español',
    description:
      'Primera entrega de la saga Crónica del Asesino de Reyes. La historia de Kvothe, un legendario héroe cuya vida se ha convertido en mito y leyenda. Narrada por él mismo, esta es la historia de su juventud, sus aventuras y los eventos que lo llevaron a convertirse en una figura legendaria.',
    tags: ['Fantasía', 'Épico', 'Primera persona', 'Magia'],
  },
  {
    id: '2',
    title: 'Cien años de soledad',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347626503i/370523.jpg',
    author: 'Gabriel García Márquez',
    year: '1967',
    pages: '471',
    rating: '4.9',
    isbn: '978-84-376-0494-7',
    publisher: 'Editorial Sudamericana',
    language: 'Español',
    description:
      'Una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Una reflexión sobre la soledad, el amor, la guerra y la naturaleza cíclica de la historia latinoamericana.',
    tags: ['Realismo mágico', 'Clásico', 'Literatura latinoamericana', 'Premio Nobel'],
  },
  {
    id: '3',
    title: '1984',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348990566i/5470.jpg',
    author: 'George Orwell',
    year: '1949',
    pages: '328',
    rating: '4.7',
    isbn: '978-0-452-28423-4',
    publisher: 'Secker & Warburg',
    language: 'Español',
    description:
      'Una distopía totalitaria que presenta un mundo donde el gobierno controla todos los aspectos de la vida humana. La historia de Winston Smith y su lucha contra el sistema opresivo del Gran Hermano se ha convertido en una advertencia profética sobre los peligros del autoritarismo.',
    tags: ['Distopía', 'Ciencia ficción', 'Política', 'Clásico'],
  },
  {
    id: '4',
    title: 'Dune',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
    author: 'Frank Herbert',
    year: '1965',
    pages: '688',
    rating: '4.6',
    isbn: '978-0-441-17271-9',
    publisher: 'Chilton Books',
    language: 'Español',
    description:
      "Una épica espacial ambientada en el lejano futuro, donde las casas nobles luchan por el control del planeta desértico Arrakis, la única fuente de la especia melange. La historia de Paul Atreides y su transformación en el mesías Muad'Dib.",
    tags: ['Ciencia ficción', 'Épico', 'Política', 'Ecología'],
  },
  {
    id: '5',
    title: 'El señor de los anillos',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg',
    author: 'J.R.R. Tolkien',
    year: '1954',
    pages: '1216',
    rating: '4.9',
    isbn: '978-0-618-64015-7',
    publisher: 'George Allen & Unwin',
    language: 'Español',
    description:
      'La obra cumbre de la literatura fantástica moderna. La épica aventura de Frodo Bolsón y la Comunidad del Anillo para destruir el Anillo Único y derrotar al Señor Oscuro Sauron. Una historia de amistad, sacrificio y heroísmo en la Tierra Media.',
    tags: ['Fantasía épica', 'Aventura', 'Mitología', 'Clásico'],
  },
  {
    id: '6',
    title: 'Orgullo y prejuicio',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1171646070i/110815.jpg',
    author: 'Jane Austen',
    year: '1813',
    pages: '432',
    rating: '4.5',
    isbn: '978-0-14-143951-8',
    publisher: 'T. Egerton',
    language: 'Español',
    description:
      'Una brillante comedia de modales que retrata la Inglaterra rural del siglo XIX. La historia de Elizabeth Bennet y Fitzwilliam Darcy, una exploración del amor, la clase social y los prejuicios en la sociedad georgiana.',
    tags: ['Romance', 'Drama histórico', 'Clásico', 'Literatura inglesa'],
  },
  {
    id: '7',
    title: 'Crimen y castigo',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1381202721i/18634774.jpg',
    author: 'Fiódor Dostoyevski',
    year: '1866',
    pages: '671',
    rating: '4.6',
    isbn: '978-0-14-044913-6',
    publisher: 'The Russian Messenger',
    language: 'Español',
    description:
      'Una profunda exploración psicológica de la culpa y la redención. La historia de Rodión Raskólnikov, un estudiante empobrecido que comete un asesinato y lucha con las consecuencias morales y psicológicas de su acto.',
    tags: ['Literatura rusa', 'Psicológico', 'Filosofía', 'Clásico'],
  },
  {
    id: '8',
    title: 'La metamorfosis',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505192485i/59186.jpg',
    author: 'Franz Kafka',
    year: '1915',
    pages: '201',
    rating: '4.4',
    isbn: '978-0-486-29030-5',
    publisher: 'Kurt Wolff Verlag',
    language: 'Español',
    description:
      'Una obra surrealista que narra la transformación de Gregor Samsa en un insecto gigante y las consecuencias de esta metamorfosis en su familia y su propia percepción de la humanidad. Una alegoría sobre la alienación moderna.',
    tags: ['Surrealismo', 'Existencialismo', 'Alegoría', 'Literatura checa'],
  },
  {
    id: '9',
    title: 'Matar a un ruiseñor',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453638444i/23802330.jpg',
    author: 'Harper Lee',
    year: '1960',
    pages: '376',
    rating: '4.8',
    isbn: '978-0-06-112008-4',
    publisher: 'J.B. Lippincott & Co.',
    language: 'Español',
    description:
      'Una conmovedora historia sobre la pérdida de la inocencia, contada a través de los ojos de Scout Finch en el sur de Estados Unidos durante los años 30. Una exploración valiente del racismo, la moralidad y la justicia.',
    tags: ['Drama social', 'Literatura estadounidense', 'Derechos civiles', 'Premio Pulitzer'],
  },
  {
    id: '10',
    title: 'El gran Gatsby',
    cover: 'http://localhost:3845/assets/2239e08c5a9073b92de5643884d06481498728e1.png',
    author: 'F. Scott Fitzgerald',
    year: '1925',
    pages: '218',
    rating: '4.3',
    isbn: '978-0-7432-7356-5',
    publisher: "Charles Scribner's Sons",
    language: 'Español',
    description:
      'Una crítica brillante del sueño americano ambientada en los locos años veinte. La historia de Jay Gatsby y su obsesión por Daisy Buchanan, narrada por Nick Carraway, ofrece una visión melancólica de la decadencia y el exceso de la era del jazz.',
    tags: ['Literatura estadounidense', 'Drama', 'Años 20', 'Sueño americano'],
  },
  {
    id: '11',
    title: 'Fahrenheit 451',
    cover: 'http://localhost:3845/assets/4d8ffa284e0aab473f663db32b73c750d6b5161d.png',
    author: 'Ray Bradbury',
    year: '1953',
    pages: '249',
    rating: '4.5',
    isbn: '978-1-4516-7331-9',
    publisher: 'Ballantine Books',
    language: 'Español',
    description:
      'Una distopía sobre una sociedad donde los libros están prohibidos y los bomberos se dedican a quemarlos. La historia de Guy Montag, un bombero que comienza a cuestionar su trabajo y descubre el poder transformador de la literatura.',
    tags: ['Distopía', 'Ciencia ficción', 'Censura', 'Literatura'],
  },
  {
    id: '12',
    title: 'Don Quijote de la Mancha',
    cover: 'http://localhost:3845/assets/ca828df46904b31b7a572d03fd61e80b5c2844b6.png',
    author: 'Miguel de Cervantes',
    year: '1605',
    pages: '863',
    rating: '4.7',
    isbn: '978-84-376-0494-8',
    publisher: 'Juan de la Cuesta',
    language: 'Español',
    description:
      'Considerada la primera novela moderna, narra las aventuras de Alonso Quixano, quien tras leer muchos libros de caballerías pierde la cordura y decide convertirse en caballero andante bajo el nombre de Don Quijote de la Mancha.',
    tags: ['Clásico español', 'Aventura', 'Sátira', 'Siglo de Oro'],
  },
];

// Función para simular una llamada al backend
export async function getBookById(id: string): Promise<BookDetail | null> {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 100));

  const book = mockBooksData.find((book) => book.id === id);
  return book || null;
}

// Función para obtener todos los libros (para la página principal)
export async function getAllBooks(): Promise<Array<{ id: string; title: string; cover: string }>> {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 100));

  return mockBooksData.map((book) => ({
    id: book.id,
    title: book.title,
    cover: book.cover,
  }));
}

// Función para obtener libros relacionados
export async function getRelatedBooks(currentBookId: string): Promise<BookDetail[]> {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Retornar 3 libros aleatorios excluyendo el actual
  const otherBooks = mockBooksData.filter((book) => book.id !== currentBookId);
  const shuffled = otherBooks.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}
