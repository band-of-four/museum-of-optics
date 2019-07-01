export const forestLetters = ['α', 'β', 'λ', 'μ'];

const rosettaStone = {
  'r': 'α',
  'g': 'β',
  'b': 'λ',
  'y': 'η'
};

export function verifyForestCode(colors, letters) {
  return colors.length === 4 && colors.every((c, i) => letters[i] === rosettaStone[c]);
}
