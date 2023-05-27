import { FC } from 'react'
import { Navbar } from '../components/Navbar'

export const Home: FC = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold">Home</h1>
    </>
  )
}
