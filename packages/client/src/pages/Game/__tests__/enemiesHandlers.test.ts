import { moveEnemiesX, switchEnemyVisibility } from '@pages/Game/helpers/enemiesHandlers';
import { gameState } from '@pages/Game/state/gameState';
import { TEnemy } from '@pages/Game/types';

describe('moveEnemiesX', () => {
  beforeEach(() => {
    gameState.enemies = [
      {
        x: 0,
        y: 0,
        points: 100,
        isVisible: true,
        radius: 15,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      },
      {
        x: 10,
        y: 10,
        points: 75,
        isVisible: true,
        radius: 10,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      },
    ];
  });

  test('should move enemies along the X-axis', () => {
    const step = 5;
    const initialXCoordinates = gameState.enemies.map((enemy: TEnemy) => enemy.x);

    moveEnemiesX(step);

    gameState.enemies.forEach((enemy: TEnemy, index: number) => {
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
      angle: 0,
      rotationSpeed: 1,
      rotationDirection: 1,
      backgroundPath: '',
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
      angle: 0,
      rotationSpeed: 1,
      rotationDirection: 1,
      backgroundPath: '',
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
      angle: 0,
      rotationSpeed: 1,
      rotationDirection: 1,
      backgroundPath: '',
    };

    switchEnemyVisibility(enemy);

    expect(enemy.isVisible).toBe(true);
  });
});
