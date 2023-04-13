import React, { useState } from "react"
import { RiCloseLine, RiImageEditLine } from "react-icons/ri"
import { storage } from "../utils/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Axios from "axios"

const Settings = ({ user, setOpenSettings, getUser }) => {
  const [name, setName] = useState(`${user.name}`)
  const [userBio, setUserBio] = useState(`${user.bio}`)
  const [profileImgUrl, setProfileImgUrl] = useState(`${user.profileImage}`)
  const [coverImgUrl, setCoverImgUrl] = useState(`${user.coverImage}`)
  const [profileImg, setProfileImg] = useState(null)
  const [coverImg, setCoverImg] = useState(null)

  const handleProfileUpdate = async () => {
    const userData = {
      name: name,
      bio: userBio,
      profileImage: profileImgUrl,
      coverImage: coverImgUrl,
    }
    await Axios.patch(`/user/${user._id}`, userData)
    setOpenSettings(false)
    getUser()
  }

  const handleCoverImg = (e) => {
    setCoverImg(e.target.files[0])

    setTimeout(() => {
      const imageRef = ref(storage, `cover-images/${coverImg.name + v4()}`)
      uploadBytes(imageRef, coverImg).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => setCoverImgUrl(url))
      })
    }, 3000)
  }

  const handleProfileImg = (e) => {
    setProfileImg(e.target.files[0])

    setTimeout(() => {
      const imageRef = ref(storage, `profile-images/${profileImg.name + v4()}`)
      uploadBytes(imageRef, profileImg).then((snapshot) =>
        getDownloadURL(snapshot.ref).then((url) => setProfileImgUrl(url))
      )
    }, 2000)
  }

  // const uploadProfileImg = () => {
  //   if (profileImg == null) return

  //   const imageRef = ref(storage, `profile-images/${profileImg.name + v4()}`)
  //   uploadBytes(imageRef, profileImg).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => setProfileImg(url))
  //   })
  // }

  // const uploadCoverImg = () => {
  //   if (coverImg == null) return

  //   const imageRef = ref(storage, `cover-images/${coverImg.name + v4()}`)
  //   uploadBytes(imageRef, coverImg).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => setCoverImg(url))
  //   })
  // }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:h-full flex justify-center items-center backdrop-blur-xs backdrop-saturate-125 bg-black/30">
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg">
          <button
            className="absolute top-3 right-2.5 text-gray-400 bg-gray-700 p-1 rounded-full"
            onClick={() => setOpenSettings(false)}
          >
            <RiCloseLine />
            <span className="sr-only">Close modal</span>
          </button>

          <div className="flex justify-end items-end bg-gray-400">
            {coverImgUrl === "" ? (
              <div className=" h-[26vh]"></div>
            ) : (
              <div>
                <img
                  src={coverImgUrl}
                  alt="post-img"
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="absolute">
              <label className="flex items-center gap-2 text-white p-1 rounded-xl cursor-pointer m-2 backdrop-blur-md backdrop-saturate-125 bg-white/40">
                <RiImageEditLine className="text-xl" />
                <span className="text-xs">Edit Cover Image</span>
                <input
                  type="file"
                  className="hidden"
                  // onChange={(e) => setCoverImg(e.target.value[0])}
                  onChange={handleCoverImg}
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 -mt-16 px-4 mb-3">
            <div className="flex items-end">
              <img
                src={profileImgUrl}
                alt="post-img"
                className="h-32 w-32 rounded-full object-cover outline outline-gray-50"
              />
              <label className="flex items-center gap-2 backdrop-blur-md backdrop-saturate-125 bg-black/80 text-white p-1 rounded-xl cursor-pointer -ml-4">
                <RiImageEditLine className="text-xl" />
                <span className="text-xs">Edit Profile Image</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleProfileImg}
                />
              </label>
            </div>
          </div>

          <div className="p-6 text-center flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-300 p-1 rounded-md w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Bio"
                className="bg-gray-300 p-1 rounded-md resize-none w-full"
                rows="3"
                value={userBio}
                onChange={(e) => setUserBio(e.target.value)}
              />
            </div>

            <button
              className="text-white bg-black hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
              onClick={handleProfileUpdate}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
