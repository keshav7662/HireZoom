import axios from 'axios'
const backendBaseUrl = import.meta.env.VITE_BACKEND_URL

export const createJob = async (jobData) => {
    try {
        const Url = `${backendBaseUrl}/create-job`
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token.token,
        };
        const response = await axios.post(Url, jobData, { headers })
        return response;
    } catch (error) {
        console.log(error)
        alert(error.response.data.error)
    }
}

export const getJobData = async (id) => {
    try {
        const Url = `${backendBaseUrl}/job-details/${id}`
        const response = await axios.get(Url)
        return response;
    } catch (error) {
        console.log(error.response.data.error)
    }
}

export const getAllJob = async () => {
    try {
        const Url = `${backendBaseUrl}/all-jobs`
        const response = await axios.get(Url)
        return response.data;
    } catch (error) {
        console.log(error.response.data.error)
    }
}