import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  // const user = useSelector((state) => state.auth.value)
  let user = { isAuthenticated: true }
  let location = useLocation()
  let navigate = useNavigate()

  // return user.isAuthenticated ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" replace={true} />
  // )
}

export default ProtectedRoute
