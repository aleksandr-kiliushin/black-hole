import { getRandomArrayItem } from '@utils/getRandomArrayItem';

import background1 from '../../assets/images/backgrounds/background-1.jpg';
import background2 from '../../assets/images/backgrounds/background-2.jpg';
import background3 from '../../assets/images/backgrounds/background-3.jpg';
import background4 from '../../assets/images/backgrounds/background-4.jpg';

const backgrounds = [background1, background2, background3, background4];

export const Background = () => {
  return (
    <img
      src={getRandomArrayItem(backgrounds) as string}
      alt="бэкграунд"
      className="fixed z-0 top-0 left-0 w-screen h-screen object-cover"
    />
  );
};
