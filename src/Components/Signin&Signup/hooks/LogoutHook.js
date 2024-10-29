import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const LogoutHook = () => {
    const { setAuthUser } = useAuthContext()
    const [loading, setLoading] = useState(false);

    const Logout = async () => {
        try {
            setLoading(true)
            const baseUrl = 'http://localhost:5000/api/auth/logout'
            const { data: res } = await axios.post(baseUrl, { withCredentials: true })
            if (res.error) {
                toast.error(res.error)
                return
            }
            toast.success('Logged out successfully')
            sessionStorage.removeItem('user');
            setAuthUser(null);
        } catch (error) {
            toast.error('Error logging out')
            console.log('error in Logout Hook')
        } finally {
            setLoading(false)
        }
    }

    return { loading, Logout }
}

export default LogoutHook