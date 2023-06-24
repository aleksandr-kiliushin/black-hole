import { MOVE_STEP } from '@pages/Game/constants';
import { handleKeyDown, swallowEnemiesNearby } from '@pages/Game/helpers/helpers';
import { gameState } from '@pages/Game/state/gameState';
import { TGameState } from '@pages/Game/types';

describe('helpers', () => {
  describe('handleKeyDown', () => {
    let initialState: TGameState;

    beforeEach(() => {
      initialState = JSON.parse(JSON.stringify(gameState));
    });

    test('should decrease y by MOVE_STEP when ArrowUp is pressed', () => {
      const event = {
        key: 'ArrowUp',
      };

      handleKeyDown(event as KeyboardEvent);

      expect(gameState.hole.y).toBe(initialState.hole.y - MOVE_STEP);
    });

    test('should increase y by MOVE_STEP when ArrowDown is pressed', () => {
      const event = {
        key: 'ArrowDown',
      };

      handleKeyDown(event as KeyboardEvent);

      expect(gameState.hole.y).toBe(initialState.hole.y + MOVE_STEP);
    });

    test('should decrease x by MOVE_STEP when ArrowLeft is pressed', () => {
      const event = {
        key: 'ArrowLeft',
      };

      handleKeyDown(event as KeyboardEvent);

      expect(gameState.hole.x).toBe(initialState.hole.x - MOVE_STEP);
    });

    test('should increase x by MOVE_STEP when ArrowRight is pressed', () => {
      const event = {
        key: 'ArrowRight',
      };

      handleKeyDown(event as KeyboardEvent);

      expect(gameState.hole.x).toBe(initialState.hole.x + MOVE_STEP);
    });

    test('should not change gameState when other key values are pressed', () => {
      const event = {
        key: 'AnotherKey',
      };

      handleKeyDown(event as KeyboardEvent);

      expect(gameState.hole.x).toEqual(initialState.hole.x);
      expect(gameState.hole.y).toEqual(initialState.hole.y);
    });
  });

  describe('swallowEnemiesNearby', () => {
    let initialState: TGameState;

    beforeEach(() => {
      initialState = JSON.parse(JSON.stringify(gameState));
    });

    afterEach(() => {
      gameState.hole = initialState.hole;
      gameState.enemies = initialState.enemies;
    });

    test("should increase hole's points when overlapping with smaller enemy", () => {
      gameState.hole = {
        points: 50,
        x: 100,
        y: 100,
        maxSize: 100,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      gameState.enemies = [
        {
          x: 100,
          y: 100,
          points: 10,
          isVisible: true,
          radius: 10,
          angle: 0,
          rotationSpeed: 1,
          rotationDirection: 1,
          backgroundPath: '',
        },
      ];

      swallowEnemiesNearby();

      expect(gameState.hole.points).toBe(60);
      expect(gameState.enemies.length).toBe(0);
    });

    test("should reduce hole's points by half when overlapped with bigger enemy", () => {
      gameState.hole = {
        points: 50,
        x: 100,
        y: 100,
        maxSize: 100,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      gameState.enemies = [
        {
          x: 100,
          y: 100,
          points: 70,
          isVisible: true,
          radius: 70,
          angle: 0,
          rotationSpeed: 1,
          rotationDirection: 1,
          backgroundPath: '',
        },
      ];

      swallowEnemiesNearby();

      expect(gameState.hole.points).toBe(15);
      expect(gameState.enemies.length).toBe(0);
    });
  });
});
