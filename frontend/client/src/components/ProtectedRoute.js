import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export const ProtectedRoute = ({ children }) => {

    const { isAuthenticated, user, loading } = useSelector(state => state.user);
    if (!isAuthenticated && !loading && user === null) {
        return <Navigate to='/login' />;
    }
  return children;
};