import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const request = await Axios.post("/auth/signin", {
        email,
        password
      })
    } catch (error) {
      
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-md">
        <h1 className="text-xl font-bold text-center mb-10">Flamingo</h1>
        <form action="submit" className="flex flex-col justify-center items-center gap-4 w-[30vw]">
          <input 
            type="email" 
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs" 
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs" 
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-gray-800 w-full py-2 rounded-xl text-sm text-gray-300">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login