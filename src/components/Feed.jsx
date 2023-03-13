import { useState } from "react"
import { RiGalleryLine } from "react-icons/ri"
import Posts from "./Posts"
import { storage } from "../firebase"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"

const Feed = () => {
  const [mediaUpload, setMediaUpload] = useState(null)

  const uploadMedia = () => {
    if(mediaUpload == null ) return

    const imageRef = ref(storage, `images/${mediaUpload.name + v4()}`)
    uploadBytes(imageRef, mediaUpload).then(() => {
      alert("Image Uploaded")
    })
  }

  return (
    <div className='w-[40vw] xl:w-[26vw] border-x-[1px] px-4 py-2'>
      <h1 className='font-semibold text-center'>Enjoy your time here!</h1>
      <div className='flex gap-2 mt-7'>
        <img 
          src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
          alt="post-img"
          className="h-10 w-10 rounded-full object-cover" 
        />
        <textarea 
          type="text" 
          className="outline-none resize-none w-full bg-gray-100 rounded-lg p-1"
          placeholder="What's up"
          rows="4"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <label 
          className="flex items-center gap-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-blue rounded-lg shadow-lg border cursor-pointer"
        >
          <RiGalleryLine className="text-pink-400"/>
          <span className="text-xs text-gray-500">Upload file</span>
          <input type='file' className="hidden" onChange={(e) => {setMediaUpload(e.target.files[0])}}/>
        </label>
        <div>
          <button 
            className="bg-pink-400 rounded-3xl text-xs text-white px-3 py-1"
            onClick={uploadMedia}
          >
            Tweet
          </button>
        </div>
      </div>
      <Posts />
      <Posts />
      <Posts />
    </div>
  )
}

export default Feed