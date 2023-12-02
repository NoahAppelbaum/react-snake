export default function stateReducer({board, snake}, action) {

  const head = snake[0];
  let tail = snake[snake.length - 1];
  let direction = head.direction;

  if (action.type === "MOVE") {
    board[tail.y][tail.x] = 0;

    if(direction === "D") {

    }
  }

}


/*
game:
  {
    board -- matrix, 0's are empty spaces, 1's are snake parts
    head -- {x,y,direction}
    tail --
  }

When snake moves, ONLY NEED TO:
  set board at the last snake el to 0
  update positions, back to front
  set board at snake[0] (head) to 1

  (different when snake eats)


  DO I NEED THE SNAKE ARRAY???

  Can I just track the head, LEAVE 1's on matrix on eat, and remove them on move?
       -Just initialize tail as head, and every time on eat, tail becomes the last link

       ...but logic is just spatial, in the matrix. Don't have to track coordinates???!

  On eat, leave last piece instead of getting rid of it?

  so, track head and tail. Noice!
*/
