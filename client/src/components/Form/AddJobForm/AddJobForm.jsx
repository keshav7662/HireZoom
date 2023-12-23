import React from 'react'
import addIcon from '../../../assets/addjobicon.png'
import styles from './addJobForm.module.css'

const addJobForm = () => {
  return (
    <div className={styles.jobFormContainer}>
      <h1>Add Job description</h1>
      <form action="submit" className={styles.jobForm}>
        <div className={styles.formGroup}>
          <label htmlFor="CompanyName">Company Name</label>
          <input type="text" id="CompanyName" placeholder='Enter your company name here' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="LogoUrl">Add logo url</label>
          <input type="text" id="LogoUrl" placeholder='Enter the link' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="JobPosition">Job position</label>
          <input type="text" id="JobPosition" placeholder='Enter job position' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Salary">Monthly salary</label>
          <input type="tel" id="Salary" placeholder='Enter Amount in rupees' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Job Type">Job Type</label>
          <select className={styles.jobType}>
            <option value="" disabled selected>Select</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Intern">Intern</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Job Type">Remote/Office</label>
          <select className={styles.jobType}>
            <option value="" disabled selected>Select</option>
            <option value="Remote">Remote</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder='Enter location' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="jobDescription">Job Description</label>
          <textarea className={styles.describeInput} placeholder='Type the job description'></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="About Company">About Company</label>
          <textarea className={styles.describeInput} placeholder='Type about your company'></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="skills required">Skills Required</label>
          <input type="text" id="skills" placeholder='Enter the must have skills' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="information">Information</label>
          <input type="text" id="information" placeholder='Enter the additional information' />
        </div>
        <div className={styles.actionBtn}>
          <button className={styles.cancelBtn}>cancel</button>
          <button className={styles.addJobBtn}>
            <img src={addIcon} alt="" />
            Add Job
          </button>
        </div>
      </form>
    </div>
  )
}

export default addJobForm
