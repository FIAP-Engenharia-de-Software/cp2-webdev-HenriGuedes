// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  // TODO: implementar função

  let calculo = num1 + parseFloat(operador) + num2

  if (num1 == "" && num2 == "") {
    return "parametros invalidos"
  }
  else if (operador == "/" && num1 || num2 == 0) {
    return "erro divisão por zero"
  }
  else if (operador == "" || operador == parseInt) {
    return "Operação invalida"
  }
  else {
    return calculo
  }

}

calcular(12, 13,)


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };