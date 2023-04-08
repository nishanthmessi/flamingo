import { RiArrowLeftLine, RiSearchLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import ProfileCard from "../components/ProfileCard"
import UsersList from "../components/UsersList"
import AllUsers from "../components/AllUsers"

const Users = () => {
  return (
    <>
      <div className="w-[40vw] xl:w-[30vw] 2xl:w-[28vw] border-x-[1px]">
        <div className="flex items-center gap-4 px-2 sticky -top-1 backdrop-blur-md backdrop-saturate-125 bg-white/40">
          <Link
            to="/home"
            className="hover:bg-gray-200 hover:rounded-full p-2 cursor-pointer"
          >
            <RiArrowLeftLine className="text-xl" />
          </Link>
          <h1 className="font-semibold text-xl py-3">Suggested Users</h1>
        </div>
        <AllUsers />
      </div>
      <div className="lg:min-w-[16vw] w-[18vw] hidden xl:block mt-2">
        <div className="sticky top-2">
          <div className="flex items-center gap-2 p-1 px-3 rounded-2xl bg-gray-200 hover:bg-gray-50 text-gray-500 border-[1px] hover:border-[1px] hover:border-blue-300 hover:text-blue-300 ">
            <RiSearchLine />
            <input
              type="text"
              className="bg-gray-200 placeholder:text-sm placeholder:text-gray-500 hover:bg-gray-50 outline-none"
              placeholder="search twitter"
            />
          </div>
          <ProfileCard />
          <UsersList />
        </div>
      </div>
    </>
  )
}

export default Users
