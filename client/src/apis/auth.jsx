import axios from 'axios'
import { toast } from 'react-toastify';
const backendBaseUrl = import.meta.env.VITE_BACKEND_URL
export const registerUser = async (formData) => {
    try {
        const Url = `${backendBaseUrl}/register`
        const response = await axios.post(Url, formData)
        toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        return response;
    } catch (error) {
        toast.error(error.response.data.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}
export const loginUser = async (loginData) => {
    try {
        const Url = `${backendBaseUrl}/login`
        const response = await axios.post(Url, loginData)
        toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        return response;
    } catch (error) {
        toast.error(error.response.data.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}

export const allUsers = async () => {
    try {
        const Url = `${backendBaseUrl}/all-users`
        const response = await axios.get(Url)
        toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        return response;
    } catch (error) {
        toast.error(error.response.data.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}

