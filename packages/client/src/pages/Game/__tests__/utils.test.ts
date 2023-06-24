import { doOverlap } from '@pages/Game/helpers/utils';
import { TGameEntity } from '@pages/Game/types';

import { getRandomInt } from '@utils/getRandomInt';

describe('utils', () => {
  describe('getRandomInt', () => {
    test('should return a random integer within the specified range', () => {
      const result = getRandomInt(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });

    test('should return the minimum value when min and max are the same', () => {
      const result = getRandomInt(5, 5);
      expect(result).toBe(5);
    });

    test('should return a random integer within a larger range', () => {
      const result = getRandomInt(-100, 100);
      expect(result).toBeGreaterThanOrEqual(-100);
      expect(result).toBeLessThanOrEqual(100);
    });

    test('should return a random negative integer within the specified range', () => {
      const result = getRandomInt(-10, -1);
      expect(result).toBeGreaterThanOrEqual(-10);
      expect(result).toBeLessThanOrEqual(-1);
    });

    test('should return the same value when the specified range has the same min and max', () => {
      const result = getRandomInt(5, 5);
      expect(result).toBe(5);
    });

    test('should return a random integer within a very large range', () => {
      const result = getRandomInt(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1000);
      expect(result).toBeGreaterThanOrEqual(Number.MAX_SAFE_INTEGER - 1000);
      expect(result).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    });

    test('should return 0 when both min and max are 0', () => {
      const result = getRandomInt(0, 0);
      expect(result).toBe(0);
    });
  });

  describe('doOverlap', () => {
    test('should return true when the two entities overlap', () => {
      const entity1: TGameEntity = {
        x: 0,
        y: 0,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const entity2: TGameEntity = {
        x: 5,
        y: 5,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const radius1 = 5;
      const radius2 = 5;

      const isOverlapping = doOverlap({ en1: entity1, en2: entity2, radius1, radius2 });

      expect(isOverlapping).toBe(true);
    });

    test('should return false when the two entities do not overlap', () => {
      const entity1: TGameEntity = {
        x: 0,
        y: 0,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const entity2: TGameEntity = {
        x: 10,
        y: 10,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const radius1 = 5;
      const radius2 = 5;

      const isOverlapping = doOverlap({ en1: entity1, en2: entity2, radius1, radius2 });

      expect(isOverlapping).toBe(false);
    });

    test('should return true when one entity is completely inside the other', () => {
      const entity1: TGameEntity = {
        x: 0,
        y: 0,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const entity2: TGameEntity = {
        x: 2,
        y: 2,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const radius1 = 5;
      const radius2 = 1;

      const isOverlapping = doOverlap({ en1: entity1, en2: entity2, radius1, radius2 });

      expect(isOverlapping).toBe(true);
    });

    test('should return true when the entities are exactly on top of each other', () => {
      const entity1: TGameEntity = {
        x: 0,
        y: 0,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const entity2: TGameEntity = {
        x: 0,
        y: 0,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const radius1 = 5;
      const radius2 = 5;

      const isOverlapping = doOverlap({ en1: entity1, en2: entity2, radius1, radius2 });

      expect(isOverlapping).toBe(true);
    });

    test('should return false when the entities are not overlapping but their radii touch', () => {
      const entity1: TGameEntity = {
        x: 0,
        y: 0,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const entity2: TGameEntity = {
        x: 10,
        y: 10,
        points: 0,
        angle: 0,
        rotationSpeed: 1,
        rotationDirection: 1,
        backgroundPath: '',
      };
      const radius1 = 5;
      const radius2 = 5;

      const isOverlapping = doOverlap({ en1: entity1, en2: entity2, radius1, radius2 });

      expect(isOverlapping).toBe(false);
    });
  });
});
