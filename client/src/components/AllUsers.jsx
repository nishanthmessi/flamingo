import React, { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { profileId } from "../features/profileId"

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await Axios.get(`/users`)
      setAllUsers(res.data)
    }
    getAllUsers()
  }, [])

  console.log(allUsers)

  return (
    <div className="w-full">
      {allUsers.map((user) => (
        <Link
          to="/profile"
          className="cursor-pointer"
          onClick={() => dispatch(profileId(user._id))}
        >
          <div className="flex py-1 hover:bg-gray-100 px-3">
            <div className="flex gap-2 py-2">
              <img
                src={user.profileImage}
                alt=""
                className="h-12 w-12 rounded-full object-cover cursor-pointer"
              />
              <div className="flex flex-col text-md">
                <h1 className="font-semibold">{user.name}</h1>
                <h1>@{user.username}</h1>
                <p className="text-cutoff">{user.bio}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllUsers
