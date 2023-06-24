import { FC } from 'react';

import { GAME_NAME } from '@constants';

import hero from '@assets/images/hero/blackhole.png';

export const Hero: FC = () => {
  return (
    <section className="page-container flex flex-col-reverse items-center md:flex-row gap-5 overlay my-6">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="font-black m-0 text-4xl my-6 text-center md:text-left">
          Доминируй, властвуй, поглощай!
        </h1>
        <p className="text-base text-center md:text-left">
          Вам предстоит стать черной дырой, поглощая все на своем пути и становясь все больше и
          больше. Ваше космическое путешествие начинается прямо сейчас!
        </p>
      </div>
      <img alt={GAME_NAME} className="w-full md:w-60 max-w-xs animate-spin" src={hero} />
    </section>
  );
};
