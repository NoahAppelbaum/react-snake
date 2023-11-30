export default function stateReducer(game, action) {



}


/*
game:
  {
    board -- matrix, 0's are empty spaces, 1's are snake parts
    snake -- [{x,y,direction}, {x,y}, ...]
  }

When snake moves, ONLY NEED TO:
  set board at the last snake el to 0
  update positions, back to front
  set board at snake[0] (head) to 1

  (different when snake eats)

*/
