import { Routes, Route } from "react-router-dom"
import Axios from "axios"
import Home from "./pages/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import UserProfile from "./pages/UserProfile"

const App = () => {
  Axios.defaults.baseURL = 'http://localhost:5001/api'

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  )
}

export default App
