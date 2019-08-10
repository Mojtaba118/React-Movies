const movies = [
  {
    id: 1,
    title: "Avengers End Game",
    description: "a Group of Heros That Want's to Save the World",
    rate: 8.5,
    image: "/assets/J_MKCIivxCcRLT_uwPUYOnb8i41g.jpg",
    genreId: 1,
    like: true
  },
  {
    id: 2,
    title: "John Wick: Chapter 3 - Parabellum",
    description: "a Professional Murderer That Not Everyone Wants his Head",
    rate: 7.9,
    image: "/assets/mcKzKNlQlZzCk_VK7j32dI1tDptC.jpg",
    genreId: 1
  },
  {
    id: 3,
    title: "Pokémon Detective Pikachu",
    description: "in a World that Everyone are Looking for Pokémons to Fight",
    rate: 6.7,
    image: "/assets/26sooqAoeHcBeCcCZITZauLPxnil.jpg",
    genreId: 2
  },
  {
    id: 4,
    title: "Brightburn",
    description:
      "a Kid from another World Steps on Earth With Power of Superman.but EVIL",
    rate: 6.3,
    image: "/assets/zDAdLuKY7Di4r67TfWZjMDDpoLpR.jpg",
    genreId: 1
  },
  {
    id: 5,
    title: "Captain Marvel",
    description: "Carol Danvers Become One of the Greatest Heroes",
    rate: 10,
    image: "/assets/UgL--NZ6csmZWoEjiPzdSPrJ1UuZ.jpg",
    genreId: 1
  },
  {
    id: 6,
    title: "Avengers Infinity War",
    description: "Heros Must Stop Thanos or else half of the world will be die",
    rate: 8.5,
    image: "/assets/BiWE5gzNR88rfei_XUA6whR9FO9N.jpg",
    genreId: 1
  }
];

export function getMovies() {
  const allMovies = [...movies];
  return allMovies;
}
