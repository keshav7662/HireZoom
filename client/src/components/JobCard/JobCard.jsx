import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './jobcard.module.css'
import companyLogo from '../../assets/companylogo.png'
import EmpLogo from '../../assets/empvector.png'
import Flag from '../../assets/flag.png'
import JobCardChip from './SkillChip/JobCardChip'
import { getAllJob } from '../../apis/Jobs'
import { AuthContext } from '../../Routes/Routes'
const JobCard = () => {
  const [allJobs, setAllJobs] = useState()
  const { isLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await getAllJob()
        setAllJobs(response.availableJobs)
      } catch (error) {
        console.log(error.error)
      }
    }
    fetchAllJobs();
  }, [])

  const viewDetail = async (id) => {
    try {
      navigate(`/job-details/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        allJobs && allJobs.map((item) => (
          <div className={styles.jobCards} key={item._id}>
            <div className={styles.companyIcon}>
              <img src={companyLogo} alt="" />
            </div>
            <div className={styles.allDataContainer}>
              <div className={styles.titleSkills}>
                <h3>{item.position}</h3>
                <div className={styles.requiredSkills}>
                  {
                    item.skills && item.skills.map((skill) => (
                      <JobCardChip selectedSkill={skill} />
                    ))
                  }
                </div>
              </div>
              <div className={styles.size_Salary_Location}>
                <img src={EmpLogo} alt="" />
                <p>11-50</p>
                <p>₹ {item.salary}</p>
                <img src={Flag} alt="" />
                <p>{item.location}</p>
              </div>
              <div className={styles.officeType_actionBtn}>
                <div className={styles.officeType}>
                  <span>{item.remote}</span>
                  <span>{item.jobType}</span>
                </div>
                <div className={styles.edit_view_btn}>
                  {isLogin && <button className={styles.edit_btn}>Edit Job</button>}
                  <button className={styles.view_btn} onClick={() => viewDetail(item._id)}>View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>


  )
}

export default JobCard
