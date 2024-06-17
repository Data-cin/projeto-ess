const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const filme1_id = uuidv1();
const filme2_id = uuidv1();

module.exports = [
    {
      filme_id: filme1_id,
      poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
      nome: "Oppenheimer",
      ano: 2023,
      duracao: 181,
      sinopse: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      diretor: "Christopher Nolan",
      genero: 3,
      faixa_etaria: 16,
      posts: [
        {
          post_id: uuidv4(),
          user_id: 1,
          filme_id: filme1_id,
          nota: 0.5,
          review: "Horrivel!",
          comments: []
        },
        {
          post_id: uuidv4(),
          user_id: 2,
          filme_id: filme1_id,
          nota: 5,
          review: "Absolute Cinema!",
          comments: []
        },
      ]
    },
    {
      filme_id: filme2_id,
      poster: "https://example.com/poster2.jpg",
      nome: "Movie 2",
      ano: 2021,
      duracao: 130,
      sinopse: "Synopsis of movie 2",
      diretor: "Director 2",
      genero: 2,
      faixa_etaria: 12,
      posts: []
    }
  ];
  