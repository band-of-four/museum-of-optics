const field = [
  ['g', 'y', 'r', 'g', 'b', 'r'],
  ['r', 'b', 'y', 'r', 'g', 'y'],
  ['y', 'r', 'g', 'b', 'y', 'g'],
  ['r', 'b', 'y', 'r', 'b', 'r'],
  ['b', 'r', 'g', 'y', 'r', 'y'],
  ['r', 'g', 'b', 'r', 'b', 'g']
];

export const initialState = {
  directions: 'Синяя или красная?',
  x: -1,
  y: -1,
  routes: ['left', 'up', 'right', 'down'],
}

export function computeTurn(color, x, y, routes) {
  if (color != field[x][y]) { // player mistake
    return null;
  }
  // compute next tile
  var direction = Math.floor(Math.random() * 4); // random int [0; 3]
  while (
    (direction == 0 && y == 0) ||
    (direction == 1 && x == 0) ||
    (direction == 2 && y == 5) ||
    (direction == 3 && x == 5))
    direction = Math.floor(Math.random() * 4);
  var offset = 0, strDirection = routes[direction];
  switch (direction) {
    case 0:
      offset = 1 + Math.floor(Math.random() * y);
      y = y - offset;
      break;
    case 1:
      offset = 1 + Math.floor(Math.random() * x);
      x = x - offset;
      break;
    case 2:
      offset = 1 + Math.floor(Math.random() * (5 - y));
      y = y + offset;
      break;
    case 3:
      offset = 1 + Math.floor(Math.random() * (5 - x));
      x = x + offset;
      break;
  }
  switch (routes[direction]) {
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
  return {
    directions: `${strDirection}, ${offset}`,
    routes: routes,
    x: x,
    y: y
  };
}

export function computeInitTask(color) {
  var x = 5, y;
  if (color == 'b')
    y = 2;
  else
    y = 3;
  return computeTurn(color, x, y, ['left', 'up', 'right', 'down']);
}
