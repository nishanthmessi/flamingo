import { useEffect, useState } from "react"
import Axios from "axios"

const UsersList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await Axios.get("/users/random")
      setUsers(res.data)
    }
    getUsers()
  }, [])

  return (
    <div className="bg-gray-100 mt-4 rounded-xl p-2">
      <div className="flex flex-col gap-3">
        <h1 className="text-sm font-bold">People you might follow</h1>
        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center px-2"
          >
            <div className="flex gap-2 cursor-pointer">
              <img
                src={user.profileImage}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h2 className="text-[.8rem] font-semibold">{user.name}</h2>
                <h2 className="text-xs font-medium">@{user.username}</h2>
              </div>
            </div>

            <button className="text-xs bg-blue-400 text-white px-2 py-1 rounded-3xl">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList
