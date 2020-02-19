const { usuarios } = require("../data/db");

module.exports = {
  ola() {
    return "Bom dia";
  },
  horaAtual() {
    return new Date().toString();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ana da Web",
      email: "anadaweb@gmail.com",
      idade: 23,
      salario_real: 1245.33,
      vip: true
    };
  },
  produtoEmDestaque() {
    return {
      nome: 'Macbook Pro 15" Touchbar',
      preco: 24999.9,
      desconto: 0.1
    };
  },
  numerosMegaSena() {
    // return [4, 8, 12, 35, 42, 55];
    let crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, args) {
    const users = usuarios.filter(user => user.id === args.id);
    return users ? users[0] : null;
  }
};
