import { BookData } from '@/types';

export default async function fetchRandomeBooks(): Promise<BookData[]> {
  let url = 'http://localhost:12345/book/random';

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
