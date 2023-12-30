import React, { useContext, useEffect, useState } from 'react'
import styles from './jobDescription.module.css'
import NavBanner from '../../components/Banner/NavBanner'
import Google from '../../assets/Google.png'
import Stipened from '../../assets/stipened.svg'
import Chip from '../../components/SkillsChip/Chip'
import { getRelativeTime } from '../../utils/TimeFormatter'
import { getJobData } from '../../apis/Jobs'
import { AuthContext } from '../../Routes/Routes'
import { useParams } from 'react-router-dom';

const JobDescription = () => {
  const { id } = useParams();
  const [jobDetail, setJobdetail] = useState({})
  const { isLogin } = useContext(AuthContext)
  useEffect(() => {
    viewDetails();
  }, []);

  const viewDetails = async () => {
    try {
      const response = await getJobData(id);
      setJobdetail(response.data.jobDetails);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  }

  return (
    <div className={styles.container}>
      <NavBanner />
      <div className={styles.jobDescPage}>
        <div className={styles.jobHeading}>
          <p>{`${jobDetail.position} work from ${jobDetail.remote} job/internship at ${jobDetail.companyName}`}</p>
        </div>
        <div className={styles.jobData}>
          <div className={styles.jobInfo}>
            <p>{getRelativeTime(jobDetail.createdAt)}</p>
            <p>{jobDetail.jobType}</p>
            {
              isLogin &&
              <div className={styles.companyName}>
                <div className={styles.companyLogo}>
                  <img src={Google} alt="" />
                </div>
                <p>{jobDetail.companyName}</p>
              </div>
            }
          </div>

          <div className={styles.jobPosition}>
            <h2>{jobDetail.position}</h2>
            {isLogin && <button className={styles.editBtn}>Edit Job</button>}
          </div>

          <div className={styles.location}>
            <p>{`${jobDetail.location} | India`}</p>
          </div>

          <div className={styles.salary}>
            <div className={styles.salaryLogo}>
              <img src={Stipened} alt="" />
              <p>stipend</p>
            </div>
            <p>{`Rs ${jobDetail.salary}/month`}</p>
          </div>

          <section className={styles.detailedInfo}>
            <div className={styles.aboutCompany}>
              <h4>About company</h4>
              <p>{`${jobDetail.aboutCompany}`}</p>
            </div>
            <div className={styles.aboutJob}>
              <h4>About job/internship</h4>
              <p>{`${jobDetail.description}`}</p>
            </div>
            <div className={styles.skills}>
              <h4>Skill(s) required</h4>
              <div>
                {Array.isArray(jobDetail.skills) &&
                  jobDetail.skills.map((skill, index) => <Chip key={index} skill={skill} />)
                }
              </div>
            </div>
            <div className={styles.additonalInfo}>
              <h4>Additional Info</h4>
              <p>{`${jobDetail.additionalInfo}`}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default JobDescription
