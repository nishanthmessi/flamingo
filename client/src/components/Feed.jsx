import { useState, useEffect } from "react"
import { RiGalleryLine } from "react-icons/ri"
import Posts from "./Posts"
import { storage } from "../firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Axios from "axios"
import { useSelector } from 'react-redux'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [description, setDescription] = useState("")
  const [mediaUpload, setMediaUpload] = useState(null)
  const [imageUrl, setImageUrl] = useState("")
  
  const user = useSelector((state) => state.user.value)

  const getPosts = async () => {
    const res = await Axios.get("/posts")
    setPosts(res.data.reverse())
  }

  useEffect(() => {
    getPosts()
  }, [])

  const uploadMedia = () => {
    if(mediaUpload == null ) return

    const imageRef = ref(storage, `images/${mediaUpload.name + v4()}`)
    uploadBytes(imageRef, mediaUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => setImageUrl(url))
    })
  }

  // New post upload 
  const uploadPost = async () => {
    const postData = {
      userId: user._id,
      username: user.username,
      description: description,
      mediaUrl: imageUrl
    }
    await Axios.post("/post/create", postData).then(() => {
      getPosts()
    })
    .catch((error) => { 
      console.log(error)
    })
  }

  return (
    <div className='w-[40vw] xl:w-[30vw] 2xl:w-[26vw] border-x-[1px] px-4 py-2'>
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center gap-2 mt-4">
        <label className="flex items-center gap-2 px-2 py-1 text-blue">
          <RiGalleryLine className="text-pink-400"/>
          <input 
            type='file' 
            className="text-xs w-28" 
            onChange={(e) => setMediaUpload(e.target.files[0])}
          />
          <button 
            className="bg-blue-400 rounded-full text-xs text-white p-1" 
            onClick={uploadMedia}
          >
            upload file
          </button>
        </label>
        <button className="bg-pink-400 rounded-3xl text-xs text-white px-3 py-1 hover:scale-110 transition duration-400" onClick={uploadPost}>Tweet</button>
      </div>
      <Posts posts={posts}/>
    </div>
  )
}

export default Feed