import { TGameState } from './types';

export const gameState: TGameState = {
  hole: {
    points: 50,
    x: 80,
    y: 100,
  },
  enemies: [
    { x: 225, y: 100, points: 10 },
    { x: 225, y: 200, points: 20 },
    { x: 200, y: 250, points: 30 },
    { x: 500, y: 400, points: 125 },
    { x: 600, y: 200, points: 30 },
  ],
};
