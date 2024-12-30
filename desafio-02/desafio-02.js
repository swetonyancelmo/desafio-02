let result = rank(40, 20)


function rank(vitorias, derrotas){
  let victories = vitorias - derrotas
  return victories
}

let rankAtual = ""

if(result <= 10){
  rankAtual = "Ferro"
} else if(result >= 11 && result <= 20){
  rankAtual = "Bronze"
} else if(result >= 21 && result <= 50){
  rankAtual = "Prata"
} else if(result >= 51 && result <= 80){
  rankAtual = "Ouro"
} else if(result >= 81 && result <= 90){
  rankAtual = "Diamante"
} else if(result >= 91 && result <= 100){
  rankAtual = "Lendário"
} else{
  rankAtual = "Imortal"
}

console.log("O herói tem de saldo", result, "rankeadas e está no nível", rankAtual)