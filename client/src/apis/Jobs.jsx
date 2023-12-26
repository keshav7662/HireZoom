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
        const response = await axios.post(Url, jobData, {headers})
        return response;
    } catch (error) {
        console.log(error)
        alert(error.response.data.error)
    }
}

export const getJobData = async () => {
    try {
        const Url = `${backendBaseUrl}/job-details/658a879a5224e71081e694e6`
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token.token,
          };
        const response = await axios.get(Url,{headers})
        return response;
    } catch (error) {
        console.log(error.response.data.error)
    }
}