import { FC } from 'react'
import { Navbar } from '../../components/Navbar'
import { Hero } from '../../components/Hero'
import { About } from '../../components/About'

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default Home
