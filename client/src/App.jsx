import { Routes, Route } from "react-router-dom"
import Axios from "axios"
import Home from "./pages/Home"
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  Axios.defaults.baseURL = 'http://localhost:5001/api'

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
