import { ReactNode, useEffect, useState } from 'react';
import style from './searchable-layout.module.css';
import { useRouter } from 'next/router';

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    if (!search || q === search) return;

    router.push(`/search?q=${search}`);
  };

  const onKeydownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onChange={onChangeEvent}
          onKeyDown={onKeydownEvent}
          placeholder="검색어를 입력하세요 ..."
        />
        <button onClick={onSearch}>검색</button>
      </div>
      {children}
    </div>
  );
}
