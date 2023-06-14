import { RiSearchLine } from "react-icons/ri"
import ProfileCard from "./ProfileCard"
import UsersList from "./UsersList"

const Explore = () => {
  return (
    <div className="hidden xl:block lg:min-w-[16vw] w-[18vw]">
      <div className="sticky top-2">
        <div className="flex items-center gap-2 p-1 px-3 rounded-2xl bg-gray-200 hover:bg-gray-50 text-gray-500 border-[1px] hover:border-[1px] hover:border-blue-300 hover:text-blue-300 ">
          <RiSearchLine />
          <input
            type="text"
            className="bg-gray-200 placeholder:text-sm placeholder:text-gray-500 hover:bg-gray-50 outline-none"
            placeholder="search posts"
          />
        </div>
        <ProfileCard />
        <UsersList />
      </div>
    </div>
  )
}

export default Explore
