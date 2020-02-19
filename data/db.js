const usuarios = [
  {
    id: 1,
    nome: "João da Silva",
    email: "jsilva@gmail.com",
    idade: 29,
    perfil_id: 1
  },
  {
    id: 2,
    nome: "Rafael Junges",
    email: "rfjunges@gmail.com",
    idade: 31,
    perfil_id: 2
  },
  {
    id: 3,
    nome: "Talita",
    email: "talita@gmail.com",
    idade: 29,
    perfil_id: 1
  }
];

const perfis = [
  {
    id: 1,
    nome: "comum"
  },
  {
    id: 2,
    nome: "administrador"
  }
];

module.exports = {
  usuarios,
  perfis
};
