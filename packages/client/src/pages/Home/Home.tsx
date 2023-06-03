import { FC } from 'react'
import { Hero } from '../../components/Hero'
import { About } from '../../components/About'
import { Header } from '../../components/Header'

const Home: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  )
}

export default Home
