import { FC } from 'react';

import { Header } from '@components/Header';

import { About } from './parts/About';
import { Hero } from './parts/Hero';

export const Home: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
};
