import axios from 'axios'
const backendBaseUrl = import.meta.env.VITE_BACKEND_URL
import { toast } from 'react-toastify';

export const createJob = async (jobData) => {

    try {
        const Url = `${backendBaseUrl}/create-job`
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token.token,
        };
        const response = await axios.post(Url, jobData, { headers })
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

export const getJobData = async (id) => {
    try {
        const Url = `${backendBaseUrl}/job-details/${id}`
        const response = await axios.get(Url)
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

export const getAllJob = async (query) => {
    try {
        const Url = `${backendBaseUrl}/all-jobs`
        const response = await axios.get(Url, { params: query })
        return response.data;
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

export const editJob = async (id, EditedData) => {
    try {
        const Url = `${backendBaseUrl}/edit-job/${id}`
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token.token,
        };
        const response = await axios.put(Url, EditedData, { headers })
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
        return response
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