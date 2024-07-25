# Atleta Class

Esta classe `Atleta` representa um atleta com atributos como nome, idade, peso, altura e notas. Ela fornece métodos para calcular a categoria do atleta, o IMC (Índice de Massa Corporal), a média válida das notas e para obter informações sobre o atleta.

## Uso

### Instanciação da Classe

Para criar uma instância da classe `Atleta`, você deve fornecer os seguintes parâmetros:
- `nome`: Nome do atleta (string)
- `idade`: Idade do atleta (número)
- `peso`: Peso do atleta em quilogramas (número)
- `altura`: Altura do atleta em metros (número)
- `notas`: Uma lista de notas do atleta (array de números)

```javascript
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]);

calculaMediaValida()
Calcula a média válida das notas do atleta, descartando a maior e a menor nota.

Retorna um número representando a média válida.
obtemNomeAtleta()
Obtém o nome do atleta.

Retorna uma string com o nome do atleta.
obtemIdadeAtleta()
Obtém a idade do atleta.

Retorna um número com a idade do atleta.
obtemPesoAtleta()
Obtém o peso do atleta.

Retorna um número com o peso do atleta.
obtemNotasAtleta()
Obtém as notas do atleta.

Retorna um array de números com as notas do atleta.
obtemCategoria()
Obtém a categoria do atleta calculada pelo método calculaCategoria.

Retorna uma string com a categoria do atleta.
obtemIMC()
Obtém o IMC do atleta calculado pelo método calculaIMC.

Retorna um número com o IMC do atleta.
obtemMediaValida()
Obtém a média válida das notas do atleta calculada pelo método calculaMediaValida.

Retorna um número com a média válida.