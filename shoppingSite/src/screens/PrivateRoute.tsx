import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const {isLoggedIn}=useAuth() as any

  return (
    <div>
      {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRoute
