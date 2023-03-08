import { RiUserLine, RiGalleryLine, RiFileGifLine, RiChatPollLine, RiEmotionHappyLine, RiCalendarCheckLine, RiMapPin2Line } from "react-icons/ri"

const Feed = () => {
  return (
    <div className='w-[36vw] border-x-[1px] px-4 py-2'>
      <h1 className='font-medium'>Home</h1>
      <div className='flex gap-4 mt-7'>
        <RiUserLine  className="text-2xl bg-gray-500 rounded-xl"/>
        <input 
          type="text" 
          className=""
          placeholder="What's up"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-3 text-lg text-blue-500">
          <RiGalleryLine />
          <RiFileGifLine />
          <RiChatPollLine />
          <RiEmotionHappyLine />
          <RiCalendarCheckLine />
          <RiMapPin2Line />
        </div>
        <div>
          <button className="bg-blue-400 rounded-3xl text-xs text-white px-3 py-1">Tweet</button>
        </div>
      </div>
    </div>
  )
}

export default Feed