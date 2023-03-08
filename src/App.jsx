import { Routes, Route } from "react-router-dom"
import Explore from "./components/Explore"
import Feed from "./components/Feed"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="flex justify-center gap-8 max-w-[50vw] mx-auto">  
      <NavBar />
      <Feed />
      <Explore />
    </div>
  )
}

export default App
