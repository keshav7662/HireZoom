import axios from 'axios'
const backendBaseUrl = import.meta.env.VITE_BACKEND_URL
export const registerUser = async (formData) => {
    try {
        const Url = `${backendBaseUrl}/register`
        const response = await axios.post(Url, formData)
        return response;
    } catch (error) {
        console.log(error)
        alert(error.response.data.error)
    }
}
export const loginUser = async (loginData) => {
    try {
        const Url = `${backendBaseUrl}/login`
        const response = await axios.post(Url, loginData)
        return response;
    } catch (error) {
        console.log(error)
        alert(error.response.data.error)
    }
}

export const createJob = async (jobData) => {
    try {
        const Url = `${backendBaseUrl}/create-job`
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token.token,
          };
        const response = await axios.post(Url, jobData, {headers})
        return response;
    } catch (error) {
        console.log(error)
        alert(error.response.data.error)
    }
}