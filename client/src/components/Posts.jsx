import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import {
  RiHeart3Line,
  RiShareLine,
  RiMessage2Line,
  RiBookmarkLine,
  RiBookmarkFill,
} from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { profileId } from "../features/profileId"
import { postId } from "../features/post"

const Posts = ({ posts, fetchSavedPosts }) => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.value)
  const getSavedPosts = useSelector((state) => state.post.value)

  // to get formatted date
  const timeElapsed = (createdAt) => {
    const timestamp = new Date(createdAt)
    return timestamp.toDateString()
  }

  // Save Post
  const savePost = async (postId) => {
    try {
      await Axios.put("/save_post", {
        postId,
        userId: user._id,
      })
      fetchSavedPosts()
    } catch (error) {
      console.log(error)
    }
  }

  const isPostSaved = (id) => getSavedPosts.includes(id)

  return posts.map((post) => (
    <div
      key={post._id}
      className="flex flex-col border-t-[1px] px-4 py-3 hover:bg-gray-100 transition duration-200 cursor-pointer"
    >
      <Link to={`/post/${post._id}`} onClick={() => dispatch(postId(post._id))}>
        <div className="flex items-center justify-between gap-3">
          <Link to="/profile" onClick={() => dispatch(profileId(post.userId))}>
            <img
              src={
                !post.profileImage
                  ? "https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                  : post.profileImage
              }
              alt="post-img"
              className="h-10 w-10 rounded-full object-cover cursor-pointer hover:opacity-90"
            />
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

          {isPostSaved(post._id) ? (
            <Link className="flex gap-1 items-center hover:text-cyan-600 hover:bg-cyan-200 rounded-full p-2 transition duration-400 ease-in">
              <RiBookmarkFill className="text-lg" />
            </Link>
          ) : (
            <Link
              className="flex gap-1 items-center hover:text-cyan-600 hover:bg-cyan-200 rounded-full p-2 transition duration-400 ease-in"
              onClick={() => savePost(post._id)}
            >
              <RiBookmarkLine className="text-lg" />
            </Link>
          )}
        </div>

        <div className="flex flex-col mt-2">
          <img
            src={post.mediaUrl}
            className="h-auto w-auto rounded-lg max-h-[60vh] object-cover"
          />
          <p className="text-[.9rem] mt-2">{post.description}</p>

          <div className="flex items-center justify-between mt-3">
            <div>
              <Link className="flex gap-1 items-center hover:text-red-600 hover:bg-red-200 rounded-2xl p-2 transition duration-400 ease-in">
                <RiHeart3Line className="text-lg" />
                <p className="text-sm">{post.likes}</p>
              </Link>
            </div>

            <div className="flex gap-6">
              <Link className="flex gap-1 items-center hover:text-green-600 hover:bg-green-200 rounded-full p-2 transition duration-400 ease-in">
                <RiMessage2Line className="text-lg" />
              </Link>

              <Link className="flex gap-1 items-center hover:text-blue-600 hover:bg-blue-200 rounded-full p-2 transition duration-400 ease-in">
                <RiShareLine className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))
}

export default Posts
