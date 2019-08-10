const genres = [
  {
    id: 1,
    title: "Action"
  },
  {
    id: 2,
    title: "Comedy"
  }
];

export function getGenres() {
  const allGenres = [...genres];
  return allGenres;
}
