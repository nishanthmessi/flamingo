import { Link } from "react-router-dom"
import { FaTwitter } from "react-icons/fa"
import { RiHome7Line, RiHashtag, RiNotification2Line, RiMailLine, RiBookmarkLine, RiTwitterLine, RiUserLine, RiMenuAddLine} from "react-icons/ri"
import Logo from "../assets/main-logo.png"

const NavBar = () => {
  return (
    <div className='flex flex-col justify-start w-[10vw]'>
      <div className="sticky top-1">
        <div className="mb-4">
          <button className="hover:bg-pink-100 p-1.5 rounded-full transition duration-400 ease-in">
            {/* <FaTwitter className="text-yellow-500 text-[1.4rem]"/> */}
            <img 
              src={Logo} 
              alt="logo"
              className="h-9"
            />
          </button>
        </div>

        <Link to='/' className="">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiHome7Line className="text-2xl"/>
            <h1 className="font-medium text">Home</h1>
          </div>
        </Link>

        <Link to='/' className="">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiHashtag className="text-2xl"/>
            <h1 className="font-medium">Explore</h1>
          </div>
        </Link>

        <Link to='/' className="">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiNotification2Line className="text-2xl"/>
            <h1 className="font-medium">Notificatons</h1>
          </div>
        </Link>

        <Link to='/' className="">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiMailLine className="text-2xl"/>
            <h1 className="font-medium">Messages</h1>
          </div>
        </Link>

        <Link to='/' className="">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiBookmarkLine className="text-2xl"/>
            <h1 className="font-medium">Bookmarks</h1>
          </div>
        </Link>

        <Link to='/' className="">
          <div className="flex items-center gap-4 hover:bg-gray-200 rounded-3xl px-2 py-2 transition duration-300 ease-in mb-2">
            <RiMenuAddLine className="text-2xl"/>
            <h1 className="font-medium">More</h1>
          </div>
        </Link>

        <button className="bg-pink-400 rounded-3xl text-white px-16 py-2 my-5">Tweet</button>
        
      </div>
    </div>
  )
}

export default NavBar