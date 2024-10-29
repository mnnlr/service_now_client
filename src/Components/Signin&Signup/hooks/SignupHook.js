import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignupHook = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const Signup = async (formData) => {
        let error = null; // To store the error message
        console.log(formData)
        console.log("data resived..")
        const isValid = checkAllFields({ name: formData.name, email: formData.email, password: formData.password });
        if (!isValid) {
            error = 'Please fill in all required fields correctly.';
            return { success: false, error };
        }

        try {
            setLoading(true);
            const baseUrl = 'http://localhost:5000/api/auth/signup';

            const { data: res } = await axios.post(baseUrl, formData, {
                withCredentials: true
            });

            console.log(res)

            if (!res.success) {
                error = res.error;
                toast.error(error);
                console.log("Error in signing up Response:" + res.error);
                return { success: false, error };
            }

            toast.success('Registered successfully');
            localStorage.setItem('user', JSON.stringify(res.user_data));
            localStorage.setItem('access_token', JSON.stringify(res.access_token));
            setAuthUser(res.user); // Updating auth context
            navigate('/signin');
            return { success: true }; // Return success if no error
        } catch (err) {
            console.log(err)
            error = err.response ? (err.response.data || 'Error signing up') : 'Network error or server is not reachable';
            toast.error(error);
            return { success: false, error }; // Return error message
        } finally {
            setLoading(false);
        }
    };

    return { loading, Signup };
};

export default SignupHook;

// Validation Function
function checkAllFields({ name, email, password }) {
    if (!name || !email || !password) {
        toast.error('Please fill in all fields');
        return false;
    }

    // if (!email.includes('@')) {
    //     toast.error('Invalid email');
    //     return false;
    // }

    // if (password.length <= 8) {
    //     toast.error('Password must be at least 8 characters');
    //     return false;
    // }

    // if (!/[A-Z]/.test(password)) {
    //     toast.error('Password must contain at least one uppercase letter');
    //     return false;
    // }

    // if (!/\d/.test(password)) {
    //     toast.error('Password must contain at least one number');
    //     return false;
    // }

    return true;
}
