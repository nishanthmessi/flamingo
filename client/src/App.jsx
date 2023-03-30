import { Routes, Route } from "react-router-dom"
import Axios from "axios"
import Login from "./components/Login"
import Register from "./components/Register"
import UserProfile from "./pages/UserProfile"
import NavBar from "./components/NavBar"
import Feed from "./pages/Feed"
import Profiles from "./components/Profiles"
import Post from "./pages/Post"
import SavedPosts from "./pages/SavedPosts"

const App = () => {
  Axios.defaults.baseURL = "http://localhost:5001/api"

  return (
    <div className="flex justify-center gap-8 w-[98vw]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Feed />} />
        <Route path="/:username" element={<UserProfile />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/saved-posts" element={<SavedPosts />} />
      </Routes>
    </div>
  )
}

export default App
