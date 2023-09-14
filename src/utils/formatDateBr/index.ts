export const formatDateBr = (releaseDate: string) => {
  const dateObj = new Date(releaseDate);

  const formatDateBr = dateObj.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return formatDateBr;
};
