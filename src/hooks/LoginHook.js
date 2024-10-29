import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const LoginHook = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()

    const Login = async (formData) => {

        const isValid = checkAllFields({ email: formData.email, password: formData.password })
        if (!isValid) return;



        try {
            setLoading(true)
            const baseUrl = 'http://localhost:5000/api/auth/login'
            const { data: res } = await axios.post(baseUrl, formData, { withCredentials: true })

            if (res.error) {
                toast.error(res.error)
                return
            }

            toast.success('Logged in successfully')
            sessionStorage.setItem('user', JSON.stringify(res));
            setAuthUser(res);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data);
            } else
                toast.error('Error logging in');

        } finally {
            setLoading(false)
        }
    }

    return { loading, Login }
}

export default LoginHook

function checkAllFields({ email, password }) {
    if (!email || !password) {
        toast.error('Please fill in the all fields')
        return false
    }
    if (password.length < 8) {
        toast.error('Password must be at least 8 characters')
        return false
    }

    if (!/[A-Z]/.test(password)) {
        toast.error('Password must contain at least one uppercase letter')
        return false
    }

    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
        toast.error('Password must contain at least one special character')
        return false
    }

    if (!/\d/.test(password)) {
        toast.error('Password must contain at least one number')
        return false
    }

    if (!email.includes('@')) {
        toast.error('Invalid email')
        return false
    }
    return true

}
