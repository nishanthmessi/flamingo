import { Routes, Route } from "react-router-dom"
import Axios from "axios"
import Login from "./components/Login"
import Register from "./components/Register"
import UserProfile from "./pages/UserProfile"
import NavBar from "./components/NavBar"
import Explore from "./components/Explore"
import Feed from "./components/Feed"

const App = () => {
  Axios.defaults.baseURL = "http://localhost:5001/api"

  return (
    <div className="flex justify-center gap-8">
      <NavBar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Feed />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Explore />
    </div>
  )
}

export default App
