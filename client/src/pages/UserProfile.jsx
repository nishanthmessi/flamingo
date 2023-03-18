import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState("")

  const profileId = useSelector((state) => state.profileId.value)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`/user/${profileId}`)
        setUserProfile(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  return (
    <div className="flex justify-center">
      {!userProfile ? "loading" : 
      <div>
        <h1>{userProfile.name}</h1>
        <h1>{userProfile.username}</h1>
      </div>
      }
    </div>
  )
}

export default UserProfile