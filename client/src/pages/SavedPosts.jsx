import React, { useEffect, useState } from "react"
import Axios from "axios"
import { useGetUserID } from "../hooks/useGetUserId"
import { RiArrowLeftLine, RiSearchLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import Posts from "../components/Posts"
import UsersList from "../components/UsersList"
import ProfileCard from "../components/ProfileCard"
import Spinner from "../components/Spinner"

const SavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState([])

  const userId = useGetUserID()

  useEffect(() => {
    const getSavedPosts = async () => {
      const res = await Axios.get(`saved_posts/${userId}`)
      setSavedPosts(res.data)
    }
    getSavedPosts()
  }, [])

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
          <h1 className="font-semibold text-xl py-3">Saved</h1>
        </div>

        {!savedPosts ? (
          <div className="flex justify-center items-center h-screen">
            <div className="h-[60vh]">
              <Spinner />
            </div>
          </div>
        ) : (
          <Posts posts={savedPosts} />
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
          <ProfileCard />
          <UsersList />
        </div>
      </div>
    </>
  )
}

export default SavedPosts
