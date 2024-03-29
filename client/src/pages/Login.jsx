import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios"
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"
import { authenticated } from "../features/auth"
import Logo from "../assets/main-logo.png"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [_, setCookies] = useCookies()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isAuth = useSelector((state) => state.auth.value)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const request = await Axios.post("/auth/signin", {
        email,
        password,
      })

      // setCookies("access_token", request.data.token)
      window.localStorage.setItem("userId", request.data.id)
      window.localStorage.setItem("access_token", request.data.token)
      dispatch(authenticated(true))
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  const handleGuestLogin = async (e) => {
    e.preventDefault()

    try {
      const request = await Axios.post("/auth/signin", {
        email: "shroud@mail.com",
        password: "1111122222",
      })

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
          className="flex flex-col justify-center items-center gap-4 w-[50vw] sm:w-[20vw]"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="border bg-gray-100 rounded-md p-2 outline-none w-full text-[.8rem] placeholder:text-xs"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          <div className="p-2">
            <p className="text-[.8rem] mb-1 text-gray-600">
              Just wanna check out? you're one click away
            </p>
            <button
              className="bg-pink-500 w-full py-1.5 px-2 rounded-xl text-sm text-gray-200 hover:text-gray-100"
              type="submit"
              onClick={handleGuestLogin}
            >
              Guest Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
