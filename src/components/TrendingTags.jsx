import { RiUserAddLine } from "react-icons/ri"

const TrendingTags = () => {
  return (
    <div className='bg-gray-100 mt-4 rounded-xl p-2'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-sm font-bold'>People you might follow</h1>
        <div className='flex justify-between items-center px-2'>
          <div className="flex gap-2 cursor-pointer">
            <img 
              src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
              alt="post-img"
              className="h-10 w-10 rounded-full object-cover" 
            />
            <div className='flex flex-col'>
              <h2 className='text-[.8rem] font-semibold'>Tommy</h2>
              <h2 className='text-xs font-medium'>@tommy20</h2>
            </div>
          </div>
          

          <button className="text-xs bg-blue-400 text-white px-2 py-1 rounded-3xl">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default TrendingTags