import React, { useState, useContext } from 'react'
import NavBanner from '../../components/Banner/NavBanner'
import Search from '../../components/SeacrhBar/Search'
import styles from './home.module.css'
import { useNavigate } from 'react-router-dom'
import FilterChip from '../../components/FilteredChip/FilterChip'
import AddIcon from '../../assets/addjobicon.png'
import JobCard from '../../components/JobCard/JobCard'
import { AuthContext } from '../../Routes/Routes'
const Home = () => {
  const { isLogin } = useContext(AuthContext)
  const [selectedSkill, setSelectedSkill] = useState([])
  const options = ["HTML", "CSS", "JavaScript", "ReactJs", "NodeJs", "ExpressJs"];
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    skills: []
  })

  const handleChange = (e) => {
    const dropValue = e.target.value;
    if (!selectedSkill.includes(dropValue)) {
      setSelectedSkill([...selectedSkill, dropValue]);
      setQuery(() => ({
        skills: [...selectedSkill, dropValue]
      }))
    }
  }
  const handleAddJob = () => {
    navigate('/create-job')
  }
  const handleRemoveChip = (chipToRemove) => {
    const updatedSkills = selectedSkill.filter((skill) => skill !== chipToRemove)
    setSelectedSkill(updatedSkills)
    setQuery({
      skills: updatedSkills,
    })
  }
  return (
    <div className={styles.homepage_container}>
      <NavBanner />
      <div className={styles.filterArea}>
        <Search />
        <div className={styles.filterSection}>
          <div className={styles.skillsDropdown}>
            <select
              onChange={handleChange}
              name='filterSkill'
              value={selectedSkill[selectedSkill.length - 1] || ''}
            >
              <option value="" disabled>Select</option>
              {
                options.map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))
              }
            </select>
            <div className={styles.skillChip}>
              {
                selectedSkill && selectedSkill.map((item, index) => (
                  <FilterChip selectedSkill={item} key={index} removeChip={handleRemoveChip} />
                ))
              }
            </div>
          </div>
          <div className={styles.addJobBtn}>
            {
              isLogin &&
              <button onClick={handleAddJob}>
                <img src={AddIcon} alt="" />
                Add Job
              </button>
            }
          </div>
        </div>
        {
          selectedSkill.length > 0 ? (
            <button className={styles.clearBtn} onClick={() => {
              setSelectedSkill([])
              setQuery({
                skills: '',
              })
            }}>clear</button>
          ) : null
        }
      </div>
      <JobCard query={query} />
    </div>
  )
}

export default Home
