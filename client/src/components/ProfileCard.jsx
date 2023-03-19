import { useState, useEffect } from "react"
import Axios from "axios"
import { useGetUserID } from "../hooks/useGetUserId"
import { useDispatch } from "react-redux"
import { userDetails } from "../features/user"

const Profile = () => {
  const [user, setUser] = useState("")

  const userId = useGetUserID()
  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`/user/${userId}`)
        setUser(response.data)
        dispatch(userDetails(response.data))
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  return (
    <div className="bg-gray-100 mt-4 rounded-xl p-2">
      <div className="flex flex-col text-center gap-3">
        <div className="flex justify-center px-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt="post-img"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-[.8rem] font-semibold cursor-pointer hover:underline">
                {user.name}
              </h2>
              {/* <h2 className='text-xs font-medium'>@{user.username}</h2> */}
              <p className="text-sm text-cutoff">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus, facere!
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <button className="bg-red-400 hover:bg-red-500 rounded-2xl text-white text-sm py-1 px-2 transition duration-300">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
