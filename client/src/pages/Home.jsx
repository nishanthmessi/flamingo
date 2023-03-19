import Explore from "../components/Explore"
import Feed from "../components/Feed"
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <div className="flex justify-center gap-8">
      <NavBar />
      <Feed />
      <Explore />
    </div>
  )
}

export default Home
