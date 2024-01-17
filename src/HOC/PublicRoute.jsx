import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom"
import { selectIsLoggedIn } from "../redux/Auth/authSelectors";

const PublicRoute = ({children}) => {
    const location = useLocation();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const pageFrom = location.state?.from.pathname

  return (
    isLoggedIn? <Navigate to={pageFrom}/> : children
  )
}

export default PublicRoute;
