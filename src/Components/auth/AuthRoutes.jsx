import { Navigate } from "react-router-dom";

export const AuthRoutes = ({ children }) => {

    const isAuthenticated = localStorage.getItem('access_token');

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}