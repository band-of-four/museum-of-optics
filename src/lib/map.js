export const nodeLocations = [
  { x: 34, y: 8, id: 6 },
  { x: 12, y: 35, id: 5 },
  { x: 52, y: 52, id: 4 },
  { x: 7, y: 76, id: 3 },
  { x: 56, y: 94, id: 2 },
  { x: 30, y: 128, id: 1 }
];

export const initialSavestate = {};

export function updateSavestateOnCompletion(oldSavestate, monsterId) {
  return { [monsterId]: true, ...oldSavestate }; // ???
}

export function computeNodeStates(savestate) {
  return { 1: 'completed', 2: 'available', 3: 'locked', 4: 'locked', 5: 'locked', 6: 'locked' }
}
