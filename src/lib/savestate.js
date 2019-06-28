export const nodeLocations = [
  { x: 10, y: 47.5, id: 10 },
  { x: 9, y: 80, id: 9 },
  { x: 21.5, y: 108, id: 8 },
  { x: 56.5, y: 58, id: 7 },
  { x: 57, y: 98, id: 6 },
  { x: 40, y: 134, id: 5 },
  { x: 6.5, y: 165.5, id: 4 },
  { x: 7, y: 205, id: 3 },
  { x: 58.5, y: 176.5, id: 2 },
  { x: 59, y: 225, id: 1 },
  { x: 35, y: 257, id: 0 }
];

const nodePaths = [
  { nodes: [0, 3], strokeDasharray: "4.8000001, 4.8000001", strokeDashoffset: "7.6", d: "M30.4 252.5c-2.8-4.4-17.8-23.6-21.5-40.7" },
  { nodes: [0, 1], strokeDasharray: "4.80000033, 4.80000033", strokeDashoffset: "7.6", d: "M39.1 252.3l16-20.7" },
  { nodes: [3, 4], strokeDasharray: "4.80000015, 4.80000015", strokeDashoffset: "7.6", d: "M6.1 199.1c-.7-4.8-1-20-.6-26.2" },
  { nodes: [1, 2], strokeDasharray: "4.80000033, 4.80000033", strokeDashoffset: ".7", d: "M60.2 217.3s.8-26.5-.7-34" },
  { nodes: [4, 5], strokeDasharray: "4.80000033, 4.80000033", strokeDashoffset: "9.4", d: "M9.7 158.5c10-10.8 23.7-20.2 23.7-20.2" },
  { nodes: [2, 5], strokeDasharray: "4.80000038, 4.80000038", strokeDashoffset: ".7", d: "M57.5 168.5S50 150 43.7 140.8" },
  { nodes: [5, 8], strokeDasharray: "4.80000028, 4.80000028", strokeDashoffset: "8", d: "M36.5 127.5s-10.2-10.1-11.3-13.7" },
  { nodes: [5, 6], strokeDasharray: "4.80000028, 4.80000028", strokeDashoffset: "8.3", d: "M41.7 127.4s12.4-18 13.4-24.1" },
  { nodes: [8, 9], strokeDasharray: "4.80000028, 4.80000028", strokeDashoffset: "7.8", d: "M18.2 102.7c-3-4.4-5.8-11-7-16.2" },
  { nodes: [6, 7], strokeDasharray: "4.80000028, 4.80000028", strokeDashoffset: "8.6", d: "M58 90.7s2.8-14.4.1-26" },
  { nodes: [9, 10], strokeDasharray: "4.91087901, 4.91087901", strokeDashoffset: "8", d: "M8 72.6s-1.6-8.5.2-17.8" },
  { nodes: [10, 'forest'], strokeDasharray: "4.91200037, 4.91200037", strokeDashoffset: "9.3", d: "M11.4 40.3S22 25.2 27.5 19.9" },
  { nodes: [7, 'forest'], strokeDasharray: "4.80000033, 4.80000033", strokeDashoffset: "8.6", d: "M55.8 51.2s-4.8-18.3-15-31.6" }
];

const pathGraph = { 1: [2], 2: [5], 3: [4], 4: [5], 5: [6, 8], 6: [7], 7: [], 8: [9], 9: [10], 10: [] };

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

export function computePaths(savestate) {
  const forestUnlocked = isForestUnlocked(savestate);
  return nodePaths.map(({ nodes: [from, to], ...svg }) => {
    if (to === 'forest' && !forestUnlocked)
      return { state: 'locked', ...svg };
    if (savestate[from] === 'locked' || savestate[from] === 'available')
      return { state: 'locked', ...svg };
    if (savestate[from] === 'completed' && savestate[to] === 'completed')
      return { state: 'completed', ...svg };
    return { state: 'available', ...svg };
  });
}

export function isForestUnlocked(savestate) {
  return Object.values(savestate).every((n) => n === 'completed');
}
