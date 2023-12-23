import React from 'react'
import AddJobForm from '../../components/Form/AddJobForm/AddJobForm'
import AddJobBanner from '../../components/Banner/AddJobBanner'
import styles from './addJob.module.css'
const AddJob = () => {
    return (
        <>
            <div className={styles['addjob-page']}>
                <div className={styles.form}>
                    <AddJobForm />
                </div>
                <div className={styles.banner}>
                    <AddJobBanner />
                </div>
            </div>
        </>
    )
}

export default AddJob
