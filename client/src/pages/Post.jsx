import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import UsersList from "../components/UsersList"
import {
  RiSearchLine,
  RiArrowLeftLine,
  RiMenu3Line,
  RiHeart3Line,
  RiMessage2Line,
  RiShareLine,
} from "react-icons/ri"
import { profileId } from "../features/profileId"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/Spinner"

const Post = () => {
  const [postData, setPostData] = useState({})

  const dispatch = useDispatch()

  const postId = useSelector((state) => state.post.value)
  const user = useSelector((state) => state.user.value)

  const getPost = async () => {
    const res = await Axios.get(`post/${postId}`)
    setPostData(res.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  const timeElapsed = (createdAt) => {
    const timestamp = new Date(createdAt)
    return timestamp.toDateString()
  }

  return (
    <>
      {!postData ? (
        <div className="flex justify-center items-center w-[40vw] xl:w-[30vw] 2xl:w-[28vw] border-x-[1px] h-screen">
          <div className="h-[60vh]">
            <Spinner />
          </div>
        </div>
      ) : (
        <>
          <div className="w-[40vw] xl:w-[30vw] 2xl:w-[28vw] border-x-[1px] h-screen">
            <div className="flex items-center gap-4 px-2 sticky -top-1 backdrop-blur-md">
              <Link
                to="/home"
                className="hover:bg-gray-200 hover:rounded-full p-2 cursor-pointer"
              >
                <RiArrowLeftLine className="text-xl" />
              </Link>
              <h1 className="font-semibold text-xl py-3">Back</h1>
            </div>
            <div key={postData._id} className="flex flex-col px-4 mt-3">
              <div className="flex items-center justify-between gap-3">
                <Link
                  to="/profile"
                  onClick={() => dispatch(profileId(postData.userId))}
                >
                  <img
                    src={
                      !postData.profileImage
                        ? "https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        : postData.profileImage
                    }
                    alt="post-img"
                    className="h-12 w-12 rounded-full object-cover cursor-pointer hover:opacity-90"
                  />
                </Link>
                <button
                  className="text-center"
                  onClick={() => dispatch(profileId(postData.userId))}
                >
                  <Link to="/profile">
                    <h2 className="text-md font-semibold mb-1">
                      @{postData.username}
                    </h2>
                    <h2 className="text-sm">
                      {timeElapsed(postData.createdAt)}
                    </h2>
                  </Link>
                </button>

                <button className="flex gap-1 items-center hover:text-cyan-600 hover:bg-cyan-200 rounded-full p-2 transition duration-400 ease-in">
                  <RiMenu3Line className="text-lg" />
                </button>
              </div>

              <div className="flex flex-col mt-2">
                <img
                  src={postData.mediaUrl}
                  className="h-auto w-auto rounded-lg max-h-[60vh] object-cover"
                />
                <p className="text-[1rem] mt-2">{postData.description}</p>

                <div className="flex items-center justify-between mt-3 border-y-[1px] py-2">
                  <div>
                    <button className="flex gap-1 items-center hover:text-red-600 hover:bg-red-200 rounded-2xl p-2 transition duration-400 ease-in">
                      <RiHeart3Line className="text-xl" />
                      <p className="text-md">{postData.likes}</p>
                    </button>
                  </div>

                  <div className="flex gap-6">
                    <button className="flex gap-1 items-center hover:text-green-600 hover:bg-green-200 rounded-full p-2 transition duration-400 ease-in">
                      <RiMessage2Line className="text-xl" />
                    </button>

                    <button className="flex gap-1 items-center hover:text-blue-600 hover:bg-blue-200 rounded-full p-2 transition duration-400 ease-in">
                      <RiShareLine className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3">
                <img
                  src={user.profileImage}
                  alt="post-img"
                  className="h-12 w-12 rounded-full object-cover cursor-pointer hover:opacity-90"
                />
                <textarea
                  type="text"
                  className="outline-none resize-none w-full p-1 bg-gray-100 rounded-lg"
                  placeholder="Share your reply..."
                  rows="2"
                ></textarea>
                <button className="bg-pink-400 hover:bg-pink-500 text-gray-50 rounded-2xl px-2 py-1">
                  Reply
                </button>
              </div>
            </div>
            <div className="border-b-[1px]"></div>
          </div>
        </>
      )}
      <div className="lg:min-w-[16vw] w-[18vw] hidden xl:block mt-2">
        <div className="sticky top-2">
          <div className="flex items-center gap-2 p-1 px-3 rounded-2xl bg-gray-200 hover:bg-gray-50 text-gray-500 border-[1px] hover:border-[1px] hover:border-blue-300 hover:text-blue-300 ">
            <RiSearchLine />
            <input
              type="text"
              className="bg-gray-200 placeholder:text-sm placeholder:text-gray-500 hover:bg-gray-50 outline-none"
              placeholder="search twitter"
            />
          </div>
          <UsersList />
        </div>
      </div>
    </>
  )
}

export default Post
