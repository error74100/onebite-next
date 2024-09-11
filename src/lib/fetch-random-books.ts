import { BookData } from '@/types';

export default async function fetchRandomeBooks(): Promise<BookData[]> {
  let url = 'http://onebite-books-server-main-vert.vercel.app/book/random';

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
