import router from 'next/router';
import { FormEvent, useState } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    router.push(`/results?search=${searchQuery}&language=pt`);
    setSearchQuery('');
  };

  return {
    handleSearch,
    searchQuery,
    setSearchQuery
  };
};
