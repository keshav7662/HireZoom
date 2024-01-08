import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './jobcard.module.css'
import EmpLogo from '../../assets/empvector.png'
import Flag from '../../assets/flag.png'
import JobCardChip from './SkillChip/JobCardChip'
import { HandleEditJob } from '../../utils/HandleEditJob'
import { getAllJob } from '../../apis/Jobs'
import { AuthContext } from '../../Routes/Routes'
const JobCard = (props) => {
  const [allJobs, setAllJobs] = useState()
  const { isLogin } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        if (props.query) {
          const response = await getAllJob(props.query)
          setAllJobs(response.availableJobs)
          setLoading(false)
        }
      } catch (error) {
        console.log(error.error)
      }
    }
    fetchAllJobs();
  }, [props])

  const viewDetail = async (id) => {
    try {
      navigate(`/job-details/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {loading &&
        <div className={styles['loading-spinner-container']}>
          <div className={styles['loading-spinner']}></div>
          <p>Loading...</p>
        </div>}
      {
        allJobs && allJobs.map((item) => (
          <div className={styles.jobCards} key={item._id}>
            <div className={styles.companyIcon}>
              <img src={item.logoURL} alt="" />
            </div>
            <div className={styles.allDataContainer}>
              <div className={styles.titleSkills}>
                <h3>{item.position}</h3>
                <div className={styles.requiredSkills}>
                  {
                    item.skills && item.skills.map((skill, index) => (
                      <JobCardChip selectedSkill={skill} key={index} />
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
                  {isLogin && <button className={styles.edit_btn} onClick={() => HandleEditJob(item._id, navigate)}>Edit Job</button>}
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
