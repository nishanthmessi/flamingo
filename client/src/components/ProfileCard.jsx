import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useGetUserID } from "../hooks/useGetUserId"

const Profile = () => {
  const [user, setUser] = useState("")

  const userId = useGetUserID()

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`/user/${userId}`)
        setUser(response.data)
      } catch (error) {
        console.log(error)
      } 
    }
    getUser() 
  }, [])

  return (
    <div className='bg-gray-100 mt-4 rounded-xl p-2'>
      <div className='flex flex-col text-center gap-3'>
        <div className='flex justify-center px-2'>
          <div className="flex flex-col justify-center items-center gap-2">
            <img 
              src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
              alt="post-img"
              className="h-20 w-20 rounded-full object-cover" 
            />
            <div className='flex flex-col justify-center'>
              <h2 className='text-[.8rem] font-semibold cursor-pointer hover:underline'>{user.name}</h2>
              {/* <h2 className='text-xs font-medium'>@{user.username}</h2> */}
              <p className="text-sm text-cutoff">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, facere!</p>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-between px-2">
          <div className="text-center">
            <h1>Posts</h1>
            <p>30</p>
          </div>
          <div className="text-center">
            <h1>Followers</h1>
            <p>30</p>
          </div>
          <div className="text-center">
            <h1>Following</h1>
            <p>30</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Profile