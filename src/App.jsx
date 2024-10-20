import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
           <NavBar></NavBar>
           <Routes>
            <Route path='/' element={<Home/>} />
           </Routes>
    </>
  )
}

export default App
