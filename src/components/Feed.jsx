import { RiUserLine } from "react-icons/ri"

const Feed = () => {
  return (
    <div className='w-[40vw]'>
      <h1 className='font-medium my-2'>Home</h1>
      <div className='flex gap-2 mt-7'>
        <RiUserLine  className="text-2xl"/>
        <input 
          type="text" 
          className=""
          placeholder="What's up"
        />
      </div>
    </div>
  )
}

export default Feed