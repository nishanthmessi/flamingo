import { useState } from "react"
import { Link } from "react-router-dom"
import {
  RiHome7Line,
  RiHashtag,
  RiUserLine,
  RiBookmarkLine,
  RiTeamLine,
} from "react-icons/ri"
import Logo from "../assets/main-logo.png"
import { useSelector } from "react-redux"
import ComposePost from "./ComposePost"

const NavBar = () => {
  const [openComposePost, setOpenComposePost] = useState(false)

  const user = useSelector((state) => state.user.value)

  return (
    <div className="flex flex-col justify-start items-end xl:mr-10 2xl:w-[16vw]">
      <div className="fixed top-2">
        <div className="mb-4">
          <button className="hover:bg-pink-100 p-1.5 rounded-full transition duration-400 ease-in">
            <Link to="/home">
              <img src={Logo} alt="logo" className="h-9" />
            </Link>
          </button>
        </div>

        <Link to="/home" className="flex items-center">
          <div className="flex items-center 2xl:jusitfy-start gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-200 ease-in mb-2">
            <RiHome7Line className="text-2xl" />
            <h1 className="font-medium text-lg hidden 2xl:flex">Home</h1>
          </div>
        </Link>

        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-200 ease-in mb-2">
            <RiHashtag className="text-2xl" />
            <h1 className="font-medium text-lg hidden 2xl:flex">Explore</h1>
          </div>
        </Link>

        <Link to="/view-users" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-200 ease-in mb-2">
            <RiTeamLine className="text-2xl" />
            <h1 className="font-medium text-lg hidden 2xl:flex">View Users</h1>
          </div>
        </Link>

        <Link to="/saved-posts" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-200 ease-in mb-2">
            <RiBookmarkLine className="text-2xl" />
            <h1 className="font-medium text-lg hidden 2xl:flex">Saved</h1>
          </div>
        </Link>

        <Link to={`/${user.username}`} className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-200 ease-in mb-2">
            <RiUserLine className="text-2xl" />
            <h1 className="font-medium text-lg hidden 2xl:flex">Profile</h1>
          </div>
        </Link>

        <button
          className="bg-pink-400 rounded-3xl text-white hidden 2xl:flex 2xl:px-16 py-2 my-5"
          onClick={() => setOpenComposePost(!openComposePost)}
        >
          Chirp!
        </button>
        {openComposePost ? (
          <ComposePost setOpenComposePost={setOpenComposePost} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default NavBar
