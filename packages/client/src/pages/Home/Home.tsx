import { FC } from 'react';

import { Header } from '@components/Header';

import { About } from './components/About';
import { Hero } from './components/Hero';

export const Home: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
};
