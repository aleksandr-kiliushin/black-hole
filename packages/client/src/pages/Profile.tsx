import { FC } from 'react'
import { Navbar } from '../components/Navbar'

export const Profile: FC = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold">Profile</h1>
    </>
  )
}