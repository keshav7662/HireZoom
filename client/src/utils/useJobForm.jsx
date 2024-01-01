import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createJob } from '../apis/Jobs';
import { editJob } from '../apis/Jobs';

const useJobForm = ({ isFormOpen, id }) => {
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

    const handleCreateOrUpdateJob = async () => {
        if (isFormOpen) {
            const response = await editJob(id, jobData)
            if (response) {
                navigate('/all-jobs')
            }
        } else {
            const response = await createJob(jobData)
            if (response) {
                navigate('/all-jobs')
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleCreateOrUpdateJob()
    }
    return { jobData, setJobData, handleInputChange, handleSubmit }
}

export default useJobForm
