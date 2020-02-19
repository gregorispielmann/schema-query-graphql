const { perfis } = require("../data/db");

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const users = perfis.filter(p => p.id === usuario.perfil_id);
    return users ? users[0] : null;
  }
};
