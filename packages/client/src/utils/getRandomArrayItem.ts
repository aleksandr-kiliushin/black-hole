import { getRandomInt } from '@utils/getRandomInt';

export const getRandomArrayItem = (array: unknown[]) => {
  return array[getRandomInt(0, array.length - 1)];
};
