document.addEventListener('DOMContentLoaded', () => {

   let squares = document.querySelectorAll('.square')

   squares.forEach((square) => {
      square.addEventListener('click', handleClick)
   })

})

function handleClick(event) {

   console.log(event.target)

   let square = event.target
   let position = square.id

   if (handleMove(position)) {

      setTimeout(() => {

         let vencedor = (playerTime == 0) ? "Escudo" : "Espada"

         alert(`O jogo acabou - O vencedor foi ${vencedor}`)
      }, 10);
   }
   updateSquare(position)

}

function updateSquare(position) {
   let square = document.getElementById(position.toString())
   let symbol = board[position]
   square.innerHTML = `<div class='${symbol}'></div>`
}