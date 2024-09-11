import { BookData } from '@/types';

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  let url = `http://onebite-books-server-main-vert.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
