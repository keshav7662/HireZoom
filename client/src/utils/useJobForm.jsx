import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createJob } from '../apis/Jobs';

const useJobForm = () => {
    const navigate = useNavigate();
    const [jobData, setJobData] = useState({
        companyName: '',
        logoURL: '',
        position: '',
        salary: '',
        jobType: '',
        remote: '',
        location: '',
        description: '',
        aboutCompany: '',
        skills: '',
        recruiterName: '',
        additionalInfo: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target

        setJobData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createJob(jobData)
        if (response) {
            alert('job created succesfully!')
            navigate('/job-details')
        }
    }
    return { jobData, handleInputChange, handleSubmit }
}

export default useJobForm
