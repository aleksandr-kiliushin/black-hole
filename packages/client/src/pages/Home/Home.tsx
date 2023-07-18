import { FC } from 'react';

import { About } from './components/About';
import { Hero } from './components/Hero';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};
