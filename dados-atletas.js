class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        }
        if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        }
        if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        }
        if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        }
        return "Sem categoria"
    }

    calculaIMC() {
        return this.peso / (this.altura **2);
    }
    calculaMediaValida() {
        return this.notas.sort((a, b) => b - a).slice(1, 4).reduce((total, atual) => total + atual, 0) / this.notas.length;
    }
    obtemNomeAtleta() {
        return this.nome;
    }
    obtemIdadeAtleta() {
        return this.idade;
    }
    obtemPesoAtleta() {
        return this.peso;
    }
    obtemNotasAtleta() {
        return atleta.notas;
    }
    obtemCategoria() {
        return atleta.calculaCategoria();
    }
    obtemIMC() {
        return atleta.calculaIMC();
    }
    obtemMediaValida() {
        return atleta.calculaMediaValida();
    }
}
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]);
console.log(`
    Nome: ${atleta.obtemNomeAtleta()}
    Idade: ${atleta.idade}
    Peso: ${atleta.peso}
    Altura: ${atleta.altura}
    Notas: ${atleta.obtemNotasAtleta()}
    Categoria: ${atleta.calculaCategoria()}
    IMC: ${atleta.obtemIMC()}
    Média válida: ${atleta.obtemMediaValida()}
  `);