import { RiGalleryLine, RiFileGifLine, RiChatPollLine, RiEmotionHappyLine, RiCalendarCheckLine, RiMapPin2Line } from "react-icons/ri"
import Posts from "./Posts"

const Feed = () => {
  return (
    <div className='w-[40vw] xl:w-[28vw] border-x-[1px] px-4 py-2'>
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
        <div className="flex gap-3 text-lg text-pink-500">
          <RiGalleryLine />
          <RiFileGifLine />
          <RiChatPollLine />
          <RiEmotionHappyLine />
          <RiCalendarCheckLine />
          <RiMapPin2Line />
        </div>
        <div>
          <button className="bg-pink-400 rounded-3xl text-xs text-white px-3 py-1">Tweet</button>
        </div>
      </div>
      <Posts />
      <Posts />
    </div>
  )
}

export default Feed