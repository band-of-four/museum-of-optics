const field = [
  ['g', 'y', 'r', 'g', 'b', 'r'],
  ['r', 'b', 'y', 'r', 'g', 'y'],
  ['y', 'r', 'g', 'b', 'y', 'g'],
  ['r', 'b', 'y', 'r', 'b', 'r'],
  ['b', 'r', 'g', 'y', 'r', 'y'],
  ['r', 'g', 'b', 'r', 'b', 'g']
];

export function computeTurn(color, x, y, ans, routes) {
  if (color != field[x][y]) { // player mistake
    return {
      directions: 'Неверно, попробуем ещё раз. Синяя или красная?',
      routes: ['left', 'up', 'right', 'down'], // idle routes
      answers: 0,
      initTask: true,
      x: -1,
      y: -1
    };
  }
  // compute next tile
  var direction = Math.floor(Math.random() * 4); // random int [0; 3]
  while (
    (routes[direction] == 'left' && y == 0) ||
    (routes[direction] == 'up' && x == 0) ||
    (routes[direction] == 'right' && y == 5) ||
    (routes[direction] == 'down' && x == 5))
    direction = Math.floor(Math.random() * 4);
  var offset = 0, strDirection = routes[direction];
  switch (direction) {
    case 0:
      routes = routes.slice(3).concat(routes.slice(0,3));
      offset = 1 + Math.floor(Math.random() * y);
      y = y - offset;
      break;
    case 1:
      offset = 1 + Math.floor(Math.random() * x);
      x = x - offset;
      break;
    case 2:
      routes = routes.slice(1).concat(routes[0]);
      offset = 1 + Math.floor(Math.random() * (5 - y));
      y = y + offset;
      break;
    case 3:
      routes = routes.slice(2).concat(routes.slice(0,2));
      offset = 1 + Math.floor(Math.random() * (5 - x));
      x = x + offset;
      break;
  }
  return {
    directions: `${strDirection}, ${offset}`,
    routes: routes,
    answers: ans + 1,
    initTask: false,
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
  return computeTurn(color, x, y, -1, ['left', 'up', 'right', 'down']);
}
