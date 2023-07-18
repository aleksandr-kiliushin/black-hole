import { swallowEnemy } from '@pages/Game/helpers/swallowEnemy';
import { gameState, resetGameState } from '@pages/Game/state/gameState';

describe('swallowEnemy', () => {
  describe('swallowEnemy', () => {
    beforeEach(() => {
      resetGameState();
      gameState.enemies = [
        {
          x: 0,
          y: 0,
          points: 0,
          isVisible: true,
          radius: 0,
          angle: 0,
          rotationSpeed: 1,
          rotationDirection: 1,
          backgroundPath: '',
        },
        {
          x: 0,
          y: 0,
          points: 0,
          isVisible: true,
          radius: 0,
          angle: 0,
          rotationSpeed: 1,
          rotationDirection: 1,
          backgroundPath: '',
        },
      ];
    });

    test('should increase hole points and consumedEnemies when points are positive', () => {
      const previousPoints = gameState.hole.points;
      const previousConsumedEnemies = gameState.consumedEnemies;

      swallowEnemy(10);

      expect(gameState.hole.points).toBe(previousPoints + 10);
      expect(gameState.consumedEnemies).toBe(previousConsumedEnemies + 1);
    });

    test('should not increase consumedEnemies when points are zero', () => {
      const previousPoints = gameState.hole.points;
      const previousConsumedEnemies = gameState.consumedEnemies;

      swallowEnemy(0);

      expect(gameState.hole.points).toBe(previousPoints);
      expect(gameState.consumedEnemies).toBe(previousConsumedEnemies);
    });

    test('should decrease hole points when points are negative', () => {
      const previousPoints = gameState.hole.points;
      const previousConsumedEnemies = gameState.consumedEnemies;

      swallowEnemy(-10);

      expect(gameState.hole.points).toBe(previousPoints - 10);
      expect(gameState.consumedEnemies).toBe(previousConsumedEnemies);
    });

    test('should update hole maxSize when points exceed maxSize', () => {
      const previousPoints = gameState.hole.points;
      const previousMaxSize = gameState.hole.maxSize;

      swallowEnemy(100);

      expect(gameState.hole.points).toBe(previousPoints + 100);
      expect(gameState.hole.maxSize).toBe(previousMaxSize + 100);
    });

    test('should update enemy radius based on hole points change', () => {
      const previousPoints = gameState.hole.points;
      const previousEnemy1Radius = gameState.enemies[0].radius;
      const previousEnemy2Radius = gameState.enemies[1].radius;

      swallowEnemy(20);

      const ratio = gameState.hole.points / previousPoints;

      expect(gameState.hole.points).toBe(previousPoints + 20);
      expect(gameState.enemies[0].radius).toBe(previousEnemy1Radius / ratio);
      expect(gameState.enemies[1].radius).toBe(previousEnemy2Radius / ratio);
    });
  });

  describe('swallowEnemiesNearby', () => {});
});
