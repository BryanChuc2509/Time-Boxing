
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
