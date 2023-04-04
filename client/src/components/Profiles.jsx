import { useState, useEffect } from "react"
import Axios from "axios"
import { useSelector } from "react-redux"
import Posts from "../components/Posts"
import UsersList from "./UsersList"
import { RiCalendarCheckLine, RiArrowLeftLine } from "react-icons/ri"
import { Link } from "react-router-dom"

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState("")
  const [userPosts, setUserPosts] = useState([])

  const profileID = useSelector((state) => state.profile.value)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`/user/${profileID}`)
        setUserProfile(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getUserPosts = async () => {
      try {
        const response = await Axios.get(`/posts/${profileID}`)
        setUserPosts(response.data.reverse())
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
    getUserPosts()
  }, [])

  const getJoinedYear = (createdDay) => {
    const createdTimestamp = new Date(createdDay)
    const utcFullDate = createdTimestamp.toUTCString().toString()
    const formatted = utcFullDate.substring(8, utcFullDate.length - 13)
    return formatted
  }

  return (
    <>
      <div className="w-[40vw] 2xl:w-[28vw] border-x-[1px]">
        <div className="flex items-center gap-4 px-2 sticky -top-1 backdrop-blur-md backdrop-saturate-125 bg-white/40">
          <Link
            to="/home"
            className="hover:bg-gray-200 hover:rounded-full p-2 cursor-pointer"
          >
            <RiArrowLeftLine className="text-xl" />
          </Link>
          <h1 className="font-semibold text-xl py-3">{userProfile.name}</h1>
        </div>
        {!userProfile ? (
          <div>loading...</div>
        ) : (
          <>
            <div className="">
              <img
                src={userProfile.coverImage}
                alt="post-img"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 -mt-16 px-4 pb-3 border-b-[1px]">
              <img
                src={userProfile.profileImage}
                alt="post-img"
                className="h-32 w-32 rounded-full object-cover outline outline-gray-50"
              />
              <div>
                <h1 className="font-bold">{userProfile.name}</h1>
                <h1>@{userProfile.username}</h1>
              </div>
              <div className="text-sm">
                {!userProfile.bio ? (
                  ""
                ) : (
                  <p className="mb-2">{userProfile.bio}</p>
                )}
                <p className="flex items-center gap-1 text-gray-600 font-medium">
                  <RiCalendarCheckLine className="text-[1.1rem]" />
                  <p>Since {getJoinedYear(userProfile.createdAt)} </p>
                </p>
              </div>
            </div>
            {!userPosts ? <div>loading</div> : <Posts posts={userPosts} />}
          </>
        )}
      </div>
      <div className="w-[18vw]">
        <div className="sticky top-4">
          <UsersList />
        </div>
      </div>
    </>
  )
}

export default UserProfile
