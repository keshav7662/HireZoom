import React, { useEffect, useState } from 'react'
import AddJobForm from '../../components/Form/AddJobForm/AddJobForm'
import AddJobBanner from '../../components/Banner/AddJobBanner'
import styles from './addJob.module.css'
import { useParams } from 'react-router-dom';
import { getJobData } from '../../apis/Jobs';
const AddJob = () => {
  const [editFormData, setEditFormData] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchDataForEdit = async () => {
      try {
        const response = await getJobData(id);
        setEditFormData(response.data.jobDetails);
        if (response) {
          setIsFormOpen(true)
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchDataForEdit();
    }
  }, [id]);

  return (
    <>
      <div className={styles['addjob-page']}>
        <div className={styles.form}>
          <AddJobForm editFormData={editFormData} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} id={id} />
        </div>
        <div className={styles.banner}>
          <AddJobBanner />
        </div>
      </div>
    </>
  )
}

export default AddJob
