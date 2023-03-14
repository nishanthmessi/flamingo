import { Routes, Route } from "react-router-dom"
import Axios from "axios"
import Explore from "./components/Explore"
import Feed from "./components/Feed"
import NavBar from "./components/NavBar"

const App = () => {
  Axios.defaults.baseURL = 'http://localhost:5001/api'

  return (
    <div className="flex justify-center gap-8 mx-auto">  
      <NavBar />
      <Feed />
      <Explore />
    </div>
  )
}

export default App
