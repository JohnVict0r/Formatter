const formatter = {
  cpfMask: value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  },

  cepMask: value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{5})(\d)/, '$1-$2') // captura 1 grupo de numero, apos capturar o grupo ele adiciona um traço antes do segundo grupo de numero
      .replace(/(-\d{3})\d+?$/, '$1'); // captura 3 numeros seguidos de um traço e não deixa ser digitado mais nada
  },

  numberMask: value => {
    return value.replace(/\D/g, ''); // substitui qualquer caracter que nao seja numero por nada
  }
};

module.exports = { formatter };
