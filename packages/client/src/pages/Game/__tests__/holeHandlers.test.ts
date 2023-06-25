import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  HOLE_RADIUS,
  HOLE_RADIUSES_PADDING,
} from '@pages/Game/constants';
import { moveHoleX, moveHoleY } from '@pages/Game/helpers/holeHandlers';
import { gameState, resetGameState } from '@pages/Game/state/gameState';

describe('holeHandlers', () => {
  describe('moveHoleX', () => {
    beforeEach(() => {
      resetGameState();
    });

    test('should move hole along the X-axis when step is within screen boundaries', () => {
      gameState.hole = {
        x: 100,
        y: 100,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = 5;
      const initialX = gameState.hole.x;

      moveHoleX(step);

      expect(gameState.hole.x).toBe(initialX + step);
    });

    test('should not move hole beyond the screen start when step is negative', () => {
      gameState.hole = {
        x: HOLE_RADIUS,
        y: 100,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = -5;
      const initialX = gameState.hole.x;

      moveHoleX(step);

      expect(gameState.hole.x).toBe(initialX);
    });

    test('should not move hole beyond the screen end when step is positive', () => {
      gameState.hole = {
        x: CANVAS_WIDTH - HOLE_RADIUS * HOLE_RADIUSES_PADDING,
        y: 100,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = 5;
      const initialX = gameState.hole.x;

      moveHoleX(step);

      expect(gameState.hole.x).toBe(initialX);
    });

    test('should not move hole when it is already at the screen start and step is negative', () => {
      gameState.hole = {
        x: HOLE_RADIUS,
        y: 100,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = -5;
      const initialX = gameState.hole.x;

      moveHoleX(step);

      expect(gameState.hole.x).toBe(initialX);
    });

    test('should not move hole when it is already at the screen end and step is positive', () => {
      gameState.hole = {
        x: CANVAS_WIDTH - HOLE_RADIUS * HOLE_RADIUSES_PADDING,
        y: 100,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = 5;
      const initialX = gameState.hole.x;

      moveHoleX(step);

      expect(gameState.hole.x).toBe(initialX);
    });
  });

  describe('moveHoleY', () => {
    beforeEach(() => {
      resetGameState(); // Сброс gameState перед каждым тестом
    });

    test('should move hole along the Y-axis when step is within screen boundaries', () => {
      gameState.hole = {
        x: 100,
        y: 100,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = 5;
      const initialY = gameState.hole.y;

      moveHoleY(step);

      expect(gameState.hole.y).toBe(initialY + step);
    });

    test('should not move hole beyond the screen ceiling when step is negative', () => {
      gameState.hole = {
        x: 100,
        y: HOLE_RADIUS,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = -5;
      const initialY = gameState.hole.y;

      moveHoleY(step);

      expect(gameState.hole.y).toBe(initialY);
    });

    test('should not move hole below the screen floor when step is positive', () => {
      gameState.hole = {
        x: 100,
        y: CANVAS_HEIGHT - HOLE_RADIUS,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = 5;
      const initialY = gameState.hole.y;

      moveHoleY(step);

      expect(gameState.hole.y).toBe(initialY);
    });

    test('should not move hole when it is already at the screen ceiling and step is negative', () => {
      gameState.hole = {
        x: 100,
        y: HOLE_RADIUS,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = -5;
      const initialY = gameState.hole.y;

      moveHoleY(step);

      expect(gameState.hole.y).toBe(initialY);
    });

    test('should not move hole when it is already at the screen floor and step is positive', () => {
      gameState.hole = {
        x: 100,
        y: CANVAS_HEIGHT - HOLE_RADIUS,
        maxSize: 50,
        points: 50,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };

      const step = 5;
      const initialY = gameState.hole.y;

      moveHoleY(step);

      expect(gameState.hole.y).toBe(initialY);
    });
  });
});
