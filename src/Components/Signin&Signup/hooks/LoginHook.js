import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginHook = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const Login = async (formData) => {
        const isValid = checkAllFields({ email: formData.email, password: formData.password });
        if (!isValid) return;

        try {
            setLoading(true);
            const baseUrl = 'http://localhost:5000/api/auth/login';
            const { data: res } = await axios.post(baseUrl, formData, { withCredentials: true });

            if (res.error) {
                toast.error("Error in sign in response:" + res.error);
                console.log("Error in sign in response:" + res.error);
                return;
            }

            // Set token and user data in localStorage
            localStorage.setItem('user', JSON.stringify(res.user_data));
            localStorage.setItem('access_token', JSON.stringify(res.access_token));

            // Update auth context with token and user data
            setAuthUser({
                user: res.user_data,
                access_token: res.access_token
            });

            toast.success('Logged in successfully');

            navigate('/');
        } catch (error) {
            if (error) {
                toast.error("Error in Loing Hook: " + error);
                console.log("Error in Loing Hook: " + error)
            }
        } finally {
            setLoading(false);
        }
    }

    return { loading, Login };
}

export default LoginHook;

function checkAllFields({ email, password }) {
    if (!email || !password) {
        toast.error('Please fill in all fields');
        return false;
    }
    return true;
}
