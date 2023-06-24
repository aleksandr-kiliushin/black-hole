import { getRandomInt } from '@pages/Game/utils';

export const getRandomArrayItem = (array: unknown[]) => {
  return array[getRandomInt(0, array.length - 1)];
};
