export const nodeLocations = [
  { x: 10, y: 47.5, id: 10 },
  { x: 9, y: 80, id: 9 },
  { x: 21.5, y: 108, id: 8 },

  { x: 56.5, y: 58, id: 7 },
  { x: 57, y: 98, id: 6 },

  { x: 40, y: 134, id: 5 },

  { x: 6, y: 165.5, id: 4 },
  { x: 7, y: 205, id: 3 },

  { x: 58.5, y: 176.5, id: 2 },
  { x: 59, y: 225, id: 1 },

  { x: 35, y: 257, id: 0 }
];

export const pathGraph = { 1: [2], 2: [5], 3: [4], 4: [5], 5: [6, 8], 6: [7], 7: [], 8: [9], 9: [10], 10: [] };

export const initialSavestate = {
  0: 'completed', 1: 'available', 2: 'locked', 3: 'available', 4: 'locked', 5: 'locked',
  6: 'locked', 7: 'locked', 8: 'locked', 9: 'locked', 10: 'locked'
};

export function updateSavestateOnCompletion(oldSavestate, monsterId) {
  const newSavestate = { ...oldSavestate, [monsterId]: 'completed' };
  pathGraph[monsterId].forEach((node) => {
    if (newSavestate[node] !== 'completed')
      newSavestate[node] = 'available';
  })
  return newSavestate;
}

export function isForestUnlocked(savestate) {
  return Object.values(savestate).every((n) => n === 'completed');
}
