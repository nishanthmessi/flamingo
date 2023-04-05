import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.value)
  let location = useLocation()

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  )
}

export default ProtectedRoute
