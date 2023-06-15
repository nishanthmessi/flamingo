import Axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useDispatch } from "react-redux"
import { authenticated } from "../features/auth"
import Logo from "../assets/main-logo.png"

const Register = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [_, setCookies] = useCookies()

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const request = await Axios.post("/auth/signup", {
        name: fullName,
        email,
        username,
        password,
      })
      setCookies("access_token", request.data.token)
      window.localStorage.setItem("userId", request.data.id)
      window.localStorage.setItem("access_token", request.data.token)
      dispatch(authenticated(true))
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-md">
        <div className="flex items-center justify-center gap-2 mb-10">
          <img src={Logo} alt="logo" className="h-9" />
          <h1 className="text-xl font-bold text-center ">Flamingo</h1>
        </div>
        <form
          action="submit"
          className="flex flex-col justify-center items-center gap-4 w-[50vw] sm:w-[20vw]"
          onSubmit={handleRegister}
        >
          <input
            type="text"
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-gray-800 w-full py-2 rounded-xl text-sm text-gray-300">
            Register
          </button>

          <div className="flex text-[.8rem] gap-1">
            <p>Already have account?</p>
            <Link to="/" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
