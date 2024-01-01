import React, { useEffect, useState } from 'react'
import addIcon from '../../../assets/addjobicon.png'
import styles from './addJobForm.module.css'
import useJobForm from '../../../utils/useJobForm'
import { useNavigate } from 'react-router-dom'

const addJobForm = ({ editFormData, isFormOpen, setIsFormOpen, id }) => {
  const { jobData, setJobData, handleInputChange, handleSubmit} = useJobForm({ isFormOpen, id });
  const navigate = useNavigate()
  useEffect(() => {
    if (editFormData) {
      setJobData(editFormData);
    }
  }, [editFormData, setJobData])
  return (
    <div className={styles.jobFormContainer}>
      <h1>Add Job description</h1>
      <form className={styles.jobForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="CompanyName">Company Name</label>
          <input type="text" name="companyName" placeholder='Enter your company name here' value={jobData.companyName} onChange={handleInputChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="LogoUrl">Add logo url</label>
          <input type="text" name="logoURL" placeholder='Enter the link' value={jobData.logoURL} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="JobPosition">Job position</label>
          <input type="text" name="position" placeholder='Enter job position' value={jobData.position} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Salary">Monthly salary</label>
          <input type="tel" name="salary" placeholder='Enter Amount in rupees' value={jobData.salary} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Job Type">Job Type</label>
          <select
            className={styles.jobType}
            name='jobType'
            value={jobData.jobType}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Intern">Intern</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Job Type">Remote/Office</label>
          <select
            className={styles.jobType}
            name='remote'
            value={jobData.remote}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select</option>
            <option value="Remote">Remote</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" placeholder='Enter location' value={jobData.location} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="jobDescription">Job Description</label>
          <textarea className={styles.describeInput} name='description' value={jobData.description} placeholder='Type the job description' onChange={handleInputChange}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="About Company">About Company</label>
          <textarea className={styles.describeInput} name='aboutCompany' value={jobData.aboutCompany} placeholder='Type about your company' onChange={handleInputChange} ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="skills required">Skills Required</label>
          <input type="text" name="skills" placeholder='Enter the must have skills' value={jobData.skills} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="information">Information</label>
          <input type="text" name="additionalInfo" placeholder='Enter the additional information' value={jobData.additionalInfo} onChange={handleInputChange} />
        </div>
        <div className={styles.actionBtn}>
          <button className={styles.cancelBtn} type='button' onClick={() => {
            setIsFormOpen(false)
            navigate('/all-jobs')
          }}>cancel</button>
          <button className={styles.addJobBtn} type='submit' >
            <img src={addIcon} alt="" />
            {isFormOpen ? <>Update Job</> : <>Add Job</>}
          </button>
        </div>
      </form>
    </div>
  )
}

export default addJobForm
