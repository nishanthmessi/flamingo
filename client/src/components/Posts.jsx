import { useState } from "react"
import { Link } from "react-router-dom"
import {
  RiHeart3Line,
  RiShareLine,
  RiMessage2Line,
  RiMenu3Line,
} from "react-icons/ri"
import { useDispatch } from "react-redux"
import { profileId } from "../features/profileId"

const Posts = ({ posts }) => {
  const [liked, setLiked] = useState(false)

  const dispatch = useDispatch()

  // to get formatted date
  const timeElapsed = (createdAt) => {
    const timestamp = new Date(createdAt)
    return timestamp.toDateString()
  }

  return posts.map((post) => (
    <div key={post._id} className="flex flex-col border-t-[1px] py-3 mt-4">
      <div className="flex items-center justify-between gap-3">
        <Link to="/profile" onClick={() => dispatch(profileId(post.userId))}>
          {!post.profileImage ? (
            <img
              src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt="post-img"
              className="h-10 w-10 rounded-full object-cover cursor-pointer"
            />
          ) : (
            <img
              src={post.profileImage}
              alt="post-img"
              className="h-10 w-10 rounded-full object-cover cursor-pointer"
            />
          )}
        </Link>
        <button
          className="text-center"
          onClick={() => dispatch(profileId(post.userId))}
        >
          <Link to="/profile">
            <h2 className="text-sm font-semibold mb-1">@{post.username}</h2>
            <h2 className="text-xs">{timeElapsed(post.createdAt)}</h2>
          </Link>
        </button>

        <button className="flex gap-1 items-center hover:text-cyan-600 hover:bg-cyan-200 rounded-full p-2 transition duration-400 ease-in">
          <RiMenu3Line className="text-lg" />
        </button>
      </div>

      <div className="flex flex-col mt-2">
        <img
          src={post.mediaUrl}
          className="h-auto w-auto rounded-lg max-h-[60vh] object-cover"
        />
        <p className="text-[.9rem] mt-2">{post.description}</p>

        <div className="flex items-center justify-between mt-3">
          <div>
            <button className="flex gap-1 items-center hover:text-red-600 hover:bg-red-200 rounded-2xl p-2 transition duration-400 ease-in">
              <RiHeart3Line className="text-lg" />
              <p className="text-sm">{post.likes}</p>
            </button>
          </div>

          <div className="flex gap-6">
            <button className="flex gap-1 items-center hover:text-green-600 hover:bg-green-200 rounded-full p-2 transition duration-400 ease-in">
              <RiMessage2Line className="text-lg" />
            </button>

            <button className="flex gap-1 items-center hover:text-blue-600 hover:bg-blue-200 rounded-full p-2 transition duration-400 ease-in">
              <RiShareLine className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ))
}

export default Posts
