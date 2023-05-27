import './App.css'
import { Liderboard } from './pages/Liderboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Forum } from './pages/Forum'
import { Profile } from './pages/Profile'
import { Game } from './pages/Game'

const browserRouter = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/game', Component: Game },
  { path: '/forum', Component: Forum },
  { path: '/liderboard', Component: Liderboard },
  { path: '/profile', Component: Profile },
])

function App() {
  return <RouterProvider router={browserRouter} />
}

export default App
