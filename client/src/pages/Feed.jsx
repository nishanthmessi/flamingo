import { useState, useEffect } from "react"
import { RiGalleryLine } from "react-icons/ri"
import Posts from "../components/Posts"
import { storage } from "../utils/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Axios from "axios"
import { useSelector } from "react-redux"
import Explore from "../components/Explore"

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [description, setDescription] = useState("")
  const [mediaUpload, setMediaUpload] = useState(null)
  const [imageUrl, setImageUrl] = useState("")
  const [btnDisable, setBtnDisable] = useState(true)

  const user = useSelector((state) => state.user.value)

  const getPosts = async () => {
    const res = await Axios.get("/posts")
    setPosts(res.data.reverse())
  }

  useEffect(() => {
    getPosts()
  }, [])

  const uploadMedia = () => {
    if (mediaUpload == null) return

    const imageRef = ref(storage, `post-images/${mediaUpload.name + v4()}`)
    uploadBytes(imageRef, mediaUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => setImageUrl(url))
      setMediaUpload(null)
      setBtnDisable(false)
    })
  }

  // New post upload
  const uploadPost = async () => {
    const postData = {
      userId: user._id,
      username: user.username,
      profileImage: user.profileImage,
      description: description,
      mediaUrl: imageUrl,
    }
    await Axios.post("/post/create", postData)
      .then(() => {
        setDescription("")
        setImageUrl("")
        setMediaUpload(null)
        getPosts()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="w-[40vw] xl:w-[30vw] 2xl:w-[28vw] border-x-[1px] py-2">
        <div className="sticky top-0 backdrop-blur-md backdrop-saturate-125 bg-white/40 w-full p-4">
          <h1 className="font-semibold text-center">Enjoy your time here!</h1>
        </div>
        <div className="flex gap-2 mt-7 px-4">
          <textarea
            type="text"
            className="outline-none resize-none w-full bg-gray-100 rounded-lg p-1"
            placeholder="What's up"
            rows="4"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
              if (e.target.value === "") {
                setBtnDisable(true)
              } else {
                setBtnDisable(false)
              }
            }}
          />
        </div>
        <div className="flex justify-between items-center gap-2 my-4 px-4">
          <label className="flex items-center gap-2 px-2 py-1 text-blue">
            <RiGalleryLine className="text-pink-400" />
            <input
              type="file"
              className="text-xs w-28"
              onChange={(e) => {
                setMediaUpload(e.target.files[0])
              }}
            />
            <button
              className="bg-pink-400 rounded-3xl text-[.6rem] text-white px-2 py-1"
              onClick={uploadMedia}
            >
              upload
            </button>
          </label>

          <button
            className={
              btnDisable
                ? "bg-gray-400 rounded-3xl text-xs text-white px-3 py-1"
                : "bg-pink-400 rounded-3xl text-xs text-white px-3 py-1 hover:bg-pink-500"
            }
            onClick={uploadPost}
          >
            chirp
          </button>
        </div>
        {!posts ? (
          <div className="flex justify-center items-center h-[75vh]">
            <div className="h-[70vh]">
              <Spinner />
            </div>
          </div>
        ) : (
          <Posts posts={posts} />
        )}
      </div>
      <Explore />
    </>
  )
}

export default Feed
