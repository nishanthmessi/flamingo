import { useState, useEffect } from "react"
import Axios from "axios"
import Posts from "../components/Posts"
import { useGetUserID } from "../hooks/useGetUserId"
import UsersList from "../components/UsersList"

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
      <div className="w-[40vw] xl:w-[30vw] 2xl:w-[28vw] border-x-[1px] px-4 py-2">
        {!userProfile ? (
          "loading"
        ) : (
          <>
            <div className="flex flex-col gap-2 mt-7">
              <img
                src={userProfile.profileImage}
                alt="post-img"
                className="h-20 w-20 rounded-full object-cover"
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
      <div className="lg:min-w-[16vw] w-[18vw] hidden xl:block">
        <UsersList />
      </div>
    </>
  )
}

export default UserProfile
