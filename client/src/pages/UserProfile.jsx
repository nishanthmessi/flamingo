import { useState, useEffect } from "react"
import Axios from "axios"
import Posts from "../components/Posts"
import { useGetUserID } from "../hooks/useGetUserId"
import UsersList from "../components/UsersList"

import { RiSearchLine, RiArrowLeftLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import Spinner from "../components/Spinner"

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState("")
  const [userPosts, setUserPosts] = useState([])

  const userId = useGetUserID()

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`/user/${userId}`)
        setUserProfile(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getUserPosts = async () => {
      try {
        const response = await Axios.get(`/posts/${userId}`)
        setUserPosts(response.data.reverse())
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
    getUserPosts()
  }, [])

  return (
    <>
      <div className="w-[40vw] xl:w-[30vw] 2xl:w-[28vw] border-x-[1px]">
        <div className="flex items-center gap-4 px-2 sticky -top-1 backdrop-blur-md">
          <Link
            to="/home"
            className="hover:bg-gray-200 hover:rounded-full p-2 cursor-pointer"
          >
            <RiArrowLeftLine className="text-xl" />
          </Link>
          <h1 className="font-semibold text-xl py-3">{userProfile.name}</h1>
        </div>
        {!userProfile ? (
          <div className="flex justify-center items-center h-screen">
            <div className="h-[60vh]">
              <Spinner />
            </div>
          </div>
        ) : (
          <>
            <div className="">
              <img
                src={userProfile.profileImage}
                alt="post-img"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 -mt-16 px-4">
              <img
                src={userProfile.profileImage}
                alt="post-img"
                className="h-32 w-32 rounded-full object-cover outline outline-gray-50"
              />
              <div>
                <h1 className="font-bold">{userProfile.name}</h1>
                <h1>@{userProfile.username}</h1>
              </div>
            </div>
            {!userPosts ? <div>loading</div> : <Posts posts={userPosts} />}
          </>
        )}
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
          <UsersList />
        </div>
      </div>
    </>
  )
}

export default UserProfile
