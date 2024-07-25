class Atleta{
    constructor(nome,idade,peso,altura,notas){
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
    calculaCategoria(){   
      if(this.idade >= 9 && this.idade <= 11){
        return "Infantil";
      }
      if(this.idade >= 12 && this.idade <= 13){
        return "Juvenil";
      }
      if(this.idade >= 14 && this.idade <= 15){
        return "Intermediário";
      }
      if(this.idade >= 16 && this.idade <= 30){
        return "Adulto";
      }
        return "Sem categoria"  
     
    }
  }
  const atleta = new Atleta("Cesar Abascal",40,80,1.7,[10,9.34,8.42,10,7.88]);
  console.log(atleta.notas);
  console.log(atleta.calculaCategoria())