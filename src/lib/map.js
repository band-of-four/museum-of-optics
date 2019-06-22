export const nodeLocations = [
  { x: 34, y: 8, id: 6 },
  { x: 12, y: 35, id: 5 },
  { x: 52, y: 52, id: 4 },
  { x: 7, y: 76, id: 3 },
  { x: 56, y: 94, id: 2 },
  { x: 30, y: 128, id: 1 }
];

export const pathGraph = { 1: [2], 2: [3, 4], 3: [5], 4: [5] , 5: [6], 6: [] };

export const initialSavestate = { 1: 'completed', 2: 'available', 3: 'locked', 4: 'locked', 5: 'locked', 6: 'locked' };

export function updateSavestateOnCompletion(oldSavestate, monsterId) {
	oldSavestate[monsterId] = 'completed';	
	pathGraph[monsterId].forEach(function(item, i, child) {
			oldSavestate[child[i]] = 'available';
	})
	return { [monsterId]: true, ...oldSavestate }; 
}

export function computeNodeStates(savestate) {
  return savestate === null ? initialSavestate : savestate;
	//return { 1: 'completed', 2: 'available', 3: 'locked', 4: 'locked', 5: 'locked', 6: 'locked' }
}
