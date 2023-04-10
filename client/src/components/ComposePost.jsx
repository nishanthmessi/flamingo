import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RiCloseLine, RiGalleryLine } from "react-icons/ri"
import { storage } from "../utils/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Axios from "axios"

const ComposePost = ({ setOpenComposePost }) => {
  const [description, setDescription] = useState("")
  const [mediaUpload, setMediaUpload] = useState(null)
  const [imageUrl, setImageUrl] = useState("")
  const [btnDisable, setBtnDisable] = useState(true)

  const user = useSelector((state) => state.user.value)

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
        setOpenComposePost(false)
        getPosts()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-hidden md:h-full flex justify-center items-center backdrop-blur-xs backdrop-saturate-125 bg-black/30 ">
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg">
          <button
            className="absolute top-3 right-2.5 text-gray-400 bg-gray-700 p-1 rounded-full"
            onClick={() => setOpenComposePost(false)}
          >
            <RiCloseLine />
            <span className="sr-only">Close modal</span>
          </button>

          <div className="flex flex-col rounded-lg">
            <div className="p-4">
              <img
                src={user.profileImage}
                alt="post-img"
                className="h-12 w-12 object-cover rounded-full"
              />
            </div>

            <div className="flex gap-2 px-4">
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
                    ? "bg-gray-400 rounded-3xl text-xs text-white px-3 py-1 cursor-default"
                    : "bg-pink-400 rounded-3xl text-xs text-white px-3 py-1 hover:bg-pink-500"
                }
                onClick={uploadPost}
              >
                chirp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComposePost
