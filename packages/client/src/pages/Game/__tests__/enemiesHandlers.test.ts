import { moveEnemiesX, switchEnemyVisibility } from '@pages/Game/enemiesHandlers';
import { gameState } from '@pages/Game/gameState';

describe('moveEnemiesX', () => {
  beforeEach(() => {
    gameState.enemies = [
      { x: 0, y: 0, points: 100, isVisible: true, radius: 15 },
      { x: 10, y: 10, points: 75, isVisible: true, radius: 10 },
    ];
  });

  test('should move enemies along the X-axis', () => {
    const step = 5;
    const initialXCoordinates = gameState.enemies.map((enemy) => enemy.x);

    moveEnemiesX(step);

    gameState.enemies.forEach((enemy, index) => {
      expect(enemy.x).toBe(initialXCoordinates[index] + step);
    });
  });
});

describe('switchEnemyVisibility', () => {
  const CANVAS_WIDTH = 800;

  test('should set enemy visibility to false when enemy is beyond the right border', () => {
    const enemy = {
      x: CANVAS_WIDTH + 300,
      y: 0,
      points: 0,
      isVisible: true,
      radius: 10,
    };

    switchEnemyVisibility(enemy);

    expect(enemy.isVisible).toBe(false);
  });

  test('should set enemy visibility to false when enemy is beyond the left border', () => {
    const enemy = {
      x: -1,
      y: 0,
      points: 0,
      isVisible: true,
      radius: 10,
    };

    switchEnemyVisibility(enemy);

    expect(enemy.isVisible).toBe(false);
  });

  test('should set enemy visibility to true when enemy is within the borders', () => {
    const enemy = {
      x: CANVAS_WIDTH / 2,
      y: 0,
      points: 0,
      isVisible: false,
      radius: 10,
    };

    switchEnemyVisibility(enemy);

    expect(enemy.isVisible).toBe(true);
  });
});
