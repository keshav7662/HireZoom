import React, { useState } from 'react'
import addIcon from '../../../assets/addjobicon.png'
import styles from './addJobForm.module.css'
import useJobForm from '../../../utils/useJobForm'

const addJobForm = () => {
  const { jobData, handleInputChange, handleSubmit } = useJobForm();
  return (
    <div className={styles.jobFormContainer}>
      <h1>Add Job description</h1>
      <form className={styles.jobForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="CompanyName">Company Name</label>
          <input type="text" name="companyName" placeholder='Enter your company name here' onChange={handleInputChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="LogoUrl">Add logo url</label>
          <input type="text" name="logoURL" placeholder='Enter the link' onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="JobPosition">Job position</label>
          <input type="text" name="position" placeholder='Enter job position' onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Salary">Monthly salary</label>
          <input type="tel" name="salary" placeholder='Enter Amount in rupees' onChange={handleInputChange} />
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
          <input type="text" name="location" placeholder='Enter location' onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="jobDescription">Job Description</label>
          <textarea className={styles.describeInput} name='description' placeholder='Type the job description' onChange={handleInputChange}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="About Company">About Company</label>
          <textarea className={styles.describeInput} name='aboutCompany' placeholder='Type about your company' onChange={handleInputChange} ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="skills required">Skills Required</label>
          <input type="text" name="skills" placeholder='Enter the must have skills' onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="information">Information</label>
          <input type="text" name="additionalInfo" placeholder='Enter the additional information' onChange={handleInputChange} />
        </div>
        <div className={styles.actionBtn}>
          <button className={styles.cancelBtn} type='button'>cancel</button>
          <button className={styles.addJobBtn} type='submit'>
            <img src={addIcon} alt="" />
            Add Job
          </button>
        </div>
      </form>
    </div>
  )
}

export default addJobForm
