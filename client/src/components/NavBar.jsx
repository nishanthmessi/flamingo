import { Link } from "react-router-dom"
import {
  RiHome7Line,
  RiHashtag,
  RiNotification2Line,
  RiUserLine,
  RiBookmarkLine,
  RiMenuAddLine,
} from "react-icons/ri"
import Logo from "../assets/main-logo.png"

const NavBar = () => {
  return (
    <div className="flex flex-col justify-start 2xl:w-[10vw]">
      <div className="sticky top-1">
        <div className="mb-4">
          <button className="hover:bg-pink-100 p-1.5 rounded-full transition duration-400 ease-in">
            <img src={Logo} alt="logo" className="h-9" />
          </button>
        </div>

        <Link to="/home" className="flex items-center">
          <div className="flex items-center 2xl:jusitfy-start gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiHome7Line className="text-2xl" />
            <h1 className="font-medium hidden 2xl:flex">Home</h1>
          </div>
        </Link>

        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiHashtag className="text-2xl" />
            <h1 className="font-medium hidden 2xl:flex">Explore</h1>
          </div>
        </Link>

        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiNotification2Line className="text-2xl" />
            <h1 className="font-medium hidden 2xl:flex">Notificatons</h1>
          </div>
        </Link>

        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiBookmarkLine className="text-2xl" />
            <h1 className="font-medium hidden 2xl:flex">Bookmarks</h1>
          </div>
        </Link>

        <Link to="/profile" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiUserLine className="text-2xl" />
            <h1 className="font-medium hidden 2xl:flex">Profile</h1>
          </div>
        </Link>

        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiMenuAddLine className="text-2xl" />
            <h1 className="font-medium hidden 2xl:flex">More</h1>
          </div>
        </Link>

        <button className="bg-pink-400 rounded-3xl text-white hidden 2xl:flex 2xl:px-16 py-2 my-5">
          Tweet
        </button>
      </div>
    </div>
  )
}

export default NavBar
