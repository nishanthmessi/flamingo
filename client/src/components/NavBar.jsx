import { Link } from "react-router-dom"
import {
  RiHome7Line,
  RiHashtag,
  RiNotification2Line,
  RiUserLine,
  RiBookmarkLine,
} from "react-icons/ri"
import Logo from "../assets/main-logo.png"
import { useSelector } from "react-redux"

const NavBar = () => {
  const user = useSelector((state) => state.user.value)
  console.log(user)

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

        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-200 ease-in mb-2">
            <RiNotification2Line className="text-2xl" />
            <h1 className="font-medium text-lg hidden 2xl:flex">
              Notificatons
            </h1>
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

        <button className="bg-pink-400 rounded-3xl text-white hidden 2xl:flex 2xl:px-16 py-2 my-5">
          Chirp!
        </button>
      </div>
    </div>
  )
}

export default NavBar
