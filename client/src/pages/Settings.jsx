import React, { useState } from "react"
import { RiCloseLine, RiImageEditLine } from "react-icons/ri"
import Axios from "axios"

const Settings = ({ user, setOpenSettings, getUser }) => {
  const [name, setName] = useState(`${user.name}`)
  const [userBio, setUserBio] = useState(`${user.bio}`)
  const [profileImg, setProfileImg] = useState(`${user.profileImage}`)
  const [coverImg, setCoverImg] = useState(`${user.profileImg}`)

  const handleUpdate = async () => {
    const userData = {
      name: name,
      bio: userBio,
    }
    await Axios.patch(`/user/${user._id}`, userData)
    setOpenSettings(false)
    getUser()
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:h-full flex justify-center items-center backdrop-blur-xs backdrop-saturate-125 bg-black/30">
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent"
            data-modal-hide="popup-modal"
            onClick={() => setOpenSettings(false)}
          >
            <RiCloseLine />
            <span className="sr-only">Close modal</span>
          </button>

          <div className="flex justify-end items-end">
            <img
              src={user.coverImage}
              alt="post-img"
              className="w-full object-cover rounded-t-lg"
            />
            <div className="absolute">
              <label className="flex items-center gap-2 text-white p-1 rounded-xl cursor-pointer m-2 backdrop-blur-md backdrop-saturate-125 bg-white/40">
                <RiImageEditLine className="text-xl" />
                <span className="text-xs">Edit Cover Image</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 -mt-16 px-4 mb-3">
            <div className="flex items-end">
              <img
                src={profileImg}
                alt="post-img"
                className="h-32 w-32 rounded-full object-cover outline outline-gray-50"
              />
              <label className="flex items-center gap-2 backdrop-blur-md backdrop-saturate-125 bg-black/80 text-white p-1 rounded-xl cursor-pointer -ml-4">
                <RiImageEditLine className="text-xl" />
                <span className="text-xs">Edit Profile Image</span>
                <input type="file" className="hidden" />
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
              onClick={handleUpdate}
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
