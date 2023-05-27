import { useEffect } from 'react'
import './App.css'
import { Liderboard } from './pages/Liderboard'
import { ErrorPage } from './pages/Error'
function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return (
    <>
      {/* <h2>Вот тут будет жить ваше приложение :)</h2>
      <Liderboard /> */}
    </>
  )
}

export default App
