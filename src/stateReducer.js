function stateReducer({board, snake}, action) {

  const height = board.length;
  const width = board[0].length;
  //snake is array like [[y,x], [y,x], [y,x], ...]
  const head = snake[0];
  let tail = snake[snake.length - 1];

  if (action.type === "MOVE") {
    //check destination --
    const [dy, dx] = findDestination(action.direction);

    //  check loss
    if (board[dy][dx] === "S") {
      //TODO: Lose game!
    }
    //  if fruit, chomp, generate fruit, then push forward into destination
    else if (board[dy][dx] === "F") {
      growSnake([dx,dy]);
      generateFruit();
    }
    //  otherwise, just bump up the list
    else {
      moveSnake([dx, dy]);
    }
  }


  function findDestination(direction) {
    const [y, x] = head;
    if (direction === "D") {
      return [(y + 1) % height, x];
    }
    if (direction === "U") {
      if (y === 0) return [height - 1, x];
      else return [y - 1, x];
    }
    if (direction === "L") {
      if (x === 0) return [width - 1, x];
      else return [x - 1, x];
    }
    if (direction === "R") {
      return [(x + 1) % width, x];
    }
  }

  function generateFruit() {
    while (true) {
      const y = Math.floor(Math.random * height);
      const x = Math.floor(Math.random * width);

      if (!board[y][x]) {
        board[y][x] = "F"
        return;
      }
    }
  }

  function growSnake(destination) {
    snake.push(tail);
    for (let i = snake.length - 2; i > 0; i--) {
      snake[i] = snake[i - 1];
    }
    snake[0] = destination
    board[destination[0]][destination[1]] = "S"
  }

  function moveSnake(destination) {
    board[tail[0]][tail[1]] = 0;
    for (let i = snake.length - 1; i > 0; i--) {
      snake[i] = snake[i - 1];
    }
    snake[0] = destination;
    board[destination[0]][destination[1]] = "S"
  }

  //BIG OLE' RETURN??
  return {board, snake};
}

function createInitialState([height, width]) {
  const board = new Array(height);

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      board[i].push(0);
    }
  }

  const [startY, startX] = [Math.ceil(height / 2), Math.ceil(width / 2)];

  board[startY][startX] = "S";

  const initState = {
    board,
    snake: [[startY, startX]]
  }

  return initState;
}

export {stateReducer, createInitialState};
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
