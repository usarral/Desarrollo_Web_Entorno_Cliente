// Helpers
const $ = (selector) => document.querySelector(selector) // $ = document.querySelector
// Functionality
let secretNumber = Math.random() * 20// Genera un número aleatorio entre 1 y 20
secretNumber = Math.ceil(secretNumber) // Redondea el número hacia arriba

// Variables
let score = 20
let highScore = 0
// Selectores
const guessInp = $('.guess') // Selecciona el input con la clase guess
const messageLbl = $('.message') // Selecciona el elemento con la clase message
const numberLbl = $('.number') // Selecciona el elemento con la clase number
const scoreLbl = $('.score') // Selecciona el elemento con la clase score
const highScoreLbl = $('.highscore') // Selecciona el elemento con la clase highscore
const checkBtn = $('.check') // Selecciona el elemento con la clase check
const againBtn = $('.again') // Selecciona boton again
// Funciones
function comprobarNumero(inp, sn) {
  switch (true) {
    case inp === '':
      messageLbl.textContent = '⛔️ Introduce un numero' // Muestra el mensaje
      break
    case inp === sn:
      messageLbl.textContent = `🎉 Has acertado en ${(20 - score) + 1} intentos` // Muestra el mensaje
      $('.check').disabled = true
      numberLbl.textContent = secretNumber // Muestra el número secreto
      $('body').style.backgroundColor = '#60b347' // Cambia el color de fondo
      break
    case inp > sn:
      messageLbl.textContent = '📈 El numero es menor' // Muestra el mensaje
      score--
      scoreLbl.textContent = score
      break
    case inp < sn:
      messageLbl.textContent = '📉 El numero es mayor' // Muestra el mensaje
      score--
      scoreLbl.textContent = score

      break
    default:
      break
  }
}
// Eventos

checkBtn.addEventListener('click', () => {
  console.log('click')
  const guessInpVal = Number(guessInp.value) // Convierte el valor del input a un número
  console.log(guessInp)
  secretNumber = Number(secretNumber) // Convierte el valor del secretNumber a un número
  console.log(secretNumber)
  comprobarNumero(guessInpVal, secretNumber)
})
againBtn.addEventListener('click', () => {
  $('body').style.backgroundColor = '#222'
  numberLbl.textContent = '?'
  messageLbl.textContent = 'Start guessing...'
  score = 20
  highScore = 0
})
