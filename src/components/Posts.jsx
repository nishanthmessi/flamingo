import { RiHeart3Line, RiShareLine, RiMessage2Line, RiMenu3Line } from "react-icons/ri"

const Posts = () => {
  return (
    <div className="flex flex-col border-t-[1px] py-3 mt-4">
      <div className='flex items-center justify-between gap-3'>
        <img 
          src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
          alt="post-img"
          className="h-10 w-10 rounded-full object-cover cursor-pointer hover:outline hover:outline-[4px] hover:outline-pink-100 transition duration-400 ease-in" 
        />
        <button className="text-center">
          <h1 className='font-semibold'>Sarah</h1>
          <h2 className='text-sm'>@sarahsmith</h2>
        </button>

        <button className="flex gap-1 items-center hover:text-cyan-600 hover:bg-cyan-200 rounded-full p-2 transition duration-400 ease-in">
          <RiMenu3Line className="text-lg"/>
        </button>
      </div>

      <div className='flex flex-col mt-2'>
        <img 
          src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
          alt="post-img"
          className="h-auto w-auto rounded-lg" 
        />
        <p className='text-[.8rem] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis eaque, debitis aliquam obcaecati facere?</p>

        <div className="flex items-center justify-between mt-3">
          <div>
            <button className="flex gap-1 items-center hover:text-red-600 hover:bg-red-300 rounded-2xl p-2 transition duration-400 ease-in">
              <RiHeart3Line className="text-lg"/>
              <p className="text-sm">2000000</p>
            </button>
          </div>

          <div className="flex gap-6">
            <button className="flex gap-1 items-center hover:text-green-600 hover:bg-green-300 rounded-full p-2 transition duration-400 ease-in">
              <RiMessage2Line className="text-lg"/>
            </button>

            <button className="flex gap-1 items-center hover:text-blue-600 hover:bg-blue-300 rounded-full p-2 transition duration-400 ease-in">
              <RiShareLine className="text-lg"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts