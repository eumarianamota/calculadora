
function insert (num) {
  let numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num
  //numero recebe o elemento html de resultado, em seguida, definimos novamente o elemento html de resultado e falamos que ele é igual a numero + num (valor inserido pelo usuário), permitindo que acrescentemos vários números seguidos.
}

function clean (){
  let saida = document.getElementById('resultado')
  saida.innerHTML = " "
}

function back () {
  let resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
  //substring() extrai partes específicas de strings.
  //substring tem dois parâmetros, o início e o fim do caracter que você deseja extrair, ou seja, onde ele começa e onde ele termina.
  // arg 0 = a extração deve começar do primeiro caracter
  // agr resultado.length -1 = calcula a posição do penúltimo caracter
  // usando esses arg, você obtém a string sem o último caracter.
}

function calcular () {
  let resultado = document.getElementById('resultado').innerHTML
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
  } else {
    document.getElementById('resultado').innerHTML = '<p>nada...</p>'
  }
  //o eval permite a execução de qualquer código js a partir de uma string
}