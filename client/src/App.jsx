import { Routes, Route } from "react-router-dom"
import Axios from "axios"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserProfile from "./pages/UserProfile"
import NavBar from "./components/NavBar"
import Feed from "./pages/Feed"
import Profiles from "./components/Profiles"
import Post from "./pages/Post"
import Users from "./pages/Users"
import SavedPosts from "./pages/SavedPosts"
import { useSelector } from "react-redux"

import ProtectedRoute from "./utils/ProtectedRoute"

const App = () => {
  Axios.defaults.baseURL = "https://flamingo-app-server.onrender.com/api"

  const isAuthenticated = useSelector((state) => state.auth.value)

  return (
    <div className="flex justify-center gap-8 w-[98vw]">
      {isAuthenticated ? <NavBar /> : <></>}
      <Routes>
        <Route index={true} path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Feed />} exact />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/view-users" element={<Users />} />
          <Route path="/saved-posts" element={<SavedPosts />} />
          <Route path="/:username" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
