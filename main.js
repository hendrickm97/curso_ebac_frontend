function Animal(nome, cor, idade) {
  this.nome = nome;
  this.cor = cor;

  let _idade = idade;

  this.getIdade = function () {
    return _idade;
  };
  this.setIdade = function (idadeDoAnimal) {
    if (typeof idadeDoAnimal === "number") {
      return (_idade = idadeDoAnimal);
    }
  };
  this.idadeDoAnimal = function () {
    return;
  };
}

function Cachorro(nome, cor, idade) {
  Animal.call(this, nome, cor, idade);

  this.idade = function () {
    const novaIdade = this.getIdade() * 7;
    this.setIdade(novaIdade);
  };
}

function Gato(nome, cor, idade) {
  Animal.call(this, nome, cor, idade);
}

const cachorro1 = new Cachorro("Fiona", "Branco", 4);
cachorro1.idade();

const cachorro2 = new Cachorro("Flecha", "Vermelho", 2);
cachorro2.idade();

const gato1 = new Gato("Felix", "marrom", 7);

console.log(gato1);
console.log(cachorro1.getIdade());
console.log(cachorro2.getIdade());
