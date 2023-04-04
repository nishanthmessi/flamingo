import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios"
import { useCookies } from "react-cookie"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [_, setCookies] = useCookies()

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const request = await Axios.post("/auth/signin", {
        email,
        password,
      })

      setCookies("access_token", request.data.token)
      window.localStorage.setItem("userId", request.data.id)
      window.localStorage.setItem("access_token", request.data.token)
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-md">
        <h1 className="text-xl font-bold text-center mb-10">Flamingo</h1>
        <form
          className="flex flex-col justify-center items-center gap-4 w-[50vw] sm:w-[20vw]"
          onSubmit={handleLogin}
        >
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
          <button
            className="bg-gray-800 w-full py-2 rounded-xl text-sm text-gray-300"
            type="submit"
          >
            Login
          </button>

          <div className="flex text-[.8rem] gap-1">
            <p>Don't have an account?</p>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
