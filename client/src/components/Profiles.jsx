import { useState, useEffect } from "react"
import Axios from "axios"
import { useSelector } from "react-redux"
import Posts from "../components/Posts"

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState("")
  const [userPosts, setUserPosts] = useState([])

  const profileID = useSelector((state) => state.profileId.value)

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
        setUserPosts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
    getUserPosts()
  }, [])

  return (
    <div className="w-[40vw] xl:w-[30vw] 2xl:w-[26vw] border-x-[1px] px-4 py-2">
      {!userProfile ? (
        "loading"
      ) : (
        <>
          <div className="flex flex-col gap-2 mt-7">
            <img
              src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
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
  )
}

export default UserProfile
