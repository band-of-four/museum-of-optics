const field = [
  ['g', 'y', 'r', 'g', 'b', 'r'],
  ['r', 'b', 'y', 'r', 'g', 'y'],
  ['y', 'r', 'g', 'b', 'y', 'g'],
  ['r', 'b', 'y', 'r', 'b', 'r'],
  ['b', 'r', 'g', 'y', 'r', 'y'],
  ['r', 'g', 'b', 'r', 'b', 'g']
];

export function computeTurn(color, turnstate) {
  let { x, y, routes } = turnstate;
  if (color !== field[x][y]) // wrong answer
    return null;

  let [nextDirection, nextTurnstate] = computeNextTile(x, y, routes);
  while (color === field[nextTurnstate.x][nextTurnstate.y]) {
    [nextDirection, nextTurnstate] = computeNextTile(x, y, routes);
  }
  return [nextDirection, nextTurnstate];
}

function computeNextTile(x, y, routes) {
  // compute next tile
  let direction = Math.floor(Math.random() * 4); // random int [0; 3]
  while (
    (direction == 0 && y == 0) ||
    (direction == 1 && x == 0) ||
    (direction == 2 && y == 5) ||
    (direction == 3 && x == 5))
    direction = Math.floor(Math.random() * 4);

  let offset = 0;
  switch (direction) {
    case 0:
      offset = 1 + Math.floor(Math.random() * y);
      y -= offset;
      break;
    case 1:
      offset = 1 + Math.floor(Math.random() * x);
      x -= offset;
      break;
    case 2:
      offset = 1 + Math.floor(Math.random() * (5 - y));
      y += offset;
      break;
    case 3:
      offset = 1 + Math.floor(Math.random() * (5 - x));
      x += offset;
      break;
  }
  const newDirection = routes[direction];
  switch (newDirection) {
    case 'left':
      routes = routes.slice(1).concat(routes[0]);
      break;
    case 'up':
      break;
    case 'right':
      routes = routes.slice(3).concat(routes.slice(0,3));
      break;
    case 'down':
      routes = routes.slice(2).concat(routes.slice(0,2));
      break;
  }
  return [explainTurn(newDirection, offset), { x, y, routes }];
}

export function computeInitTurn(color) {
  const x = 5, y = (color === 'b') ? 2 : 3;
  return computeTurn(color, { x, y, routes: ['left', 'up', 'right', 'down'] });
}

function explainTurn(direction, offset) {
  const textDirection =
    direction === 'up' ? 'Пройди прямо' :
    direction === 'down' ? 'Развернись и пройди' :
    direction === 'left' ? 'Повернись налево, пройди' :
    direction === 'right' ? 'Повернись направо, пройди' : '';
  const textOffset =
    offset === 1 ? 'одну клетку' :
    offset === 2 ? 'две клетки' :
    offset === 3 ? 'три клетки' :
    offset === 4 ? 'четыре клетки' :
    offset === 5 ? 'пять клеток' : '';
  return textDirection + ' ' + textOffset + '. На каком цвете ты стоишь?';
}
