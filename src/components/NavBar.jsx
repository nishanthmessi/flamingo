import { Link } from "react-router-dom"
import { FaTwitter } from "react-icons/fa"
import { RiHome7Line, RiHashtag, RiNotification2Line, RiMailLine, RiBookmarkLine, RiTwitterLine, RiUserLine, RiMenuAddLine} from "react-icons/ri"

const NavBar = () => {
  return (
    <div className='flex flex-col justify-start w-[10vw] mt-1.5'>
      <div className="mb-4">
        <button className="hover:bg-blue-100 p-2 rounded-full">
          <FaTwitter className="text-blue-400 text-[1.4rem]"/>
        </button>
      </div>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiHome7Line className="text-2xl"/>
          <h1 className="font-medium text">Home</h1>
        </div>
      </Link>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiHashtag className="text-2xl"/>
          <h1 className="font-medium">Explore</h1>
        </div>
      </Link>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiNotification2Line className="text-2xl"/>
          <h1 className="font-medium">Notificatons</h1>
        </div>
      </Link>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiMailLine className="text-2xl"/>
          <h1 className="font-medium">Messages</h1>
        </div>
      </Link>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiBookmarkLine className="text-2xl"/>
          <h1 className="font-medium">Bookmarks</h1>
        </div>
      </Link>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiTwitterLine className="text-2xl"/>
          <h1 className="font-medium">Twitter Blue</h1>
        </div>
      </Link>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiUserLine className="text-2xl"/>
          <h1 className="font-medium">Profile</h1>
        </div>
      </Link>

      <Link to='/' className="hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 mb-2">
        <div className="flex items-center gap-4">
          <RiMenuAddLine className="text-2xl"/>
          <h1 className="font-medium">More</h1>
        </div>
      </Link>

      <button className="bg-blue-400 rounded-3xl text-white px-16 py-2 my-5">Tweet</button>
    </div>
  )
}

export default NavBar