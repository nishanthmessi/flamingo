import { useState, useEffect } from "react"
import Axios from "axios"
import { useGetUserID } from "../hooks/useGetUserId"
import { useDispatch } from "react-redux"
import { userDetails } from "../features/user"
import { useNavigate, Link } from "react-router-dom"

const Profile = () => {
  const [user, setUser] = useState("")

  const userId = useGetUserID()

  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const logout = () => {
    window.localStorage.removeItem("userId")
    window.localStorage.removeItem("access_token")
    navigate("/")
  }

  return (
    <div className="bg-gray-100 mt-4 rounded-xl p-2">
      <div className="flex flex-col text-center gap-3">
        <div className="flex justify-center px-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <Link to="/userprofile">
              <img
                src={user.profileImage}
                alt="profile-img"
                className="h-20 w-20 rounded-full object-cover"
              />
            </Link>
            <div className="flex flex-col justify-center">
              <Link
                to="/userprofile"
                className="text-md font-semibold cursor-pointer hover:underline"
              >
                {user.name}
              </Link>
              {/* <h2 className='text-xs font-medium'>@{user.username}</h2> */}
              <p className="text-sm text-cutoff">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus, facere!
              </p>
            </div>
          </div>
        </div>

        <div>
          <button
            className="bg-gray-900 hover:bg-gray-800 rounded-2xl text-white text-xs py-1 px-2 transition duration-300"
            onClick={logout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
