import { BookData } from '@/types';

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = 'http://onebite-books-server-main-vert.vercel.app/book';

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
