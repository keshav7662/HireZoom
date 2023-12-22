import React from 'react'
import AddJobForm from '../../components/Form/AddJobForm/AddJobForm'
import AddJobBanner from '../../components/Banner/AddJobBanner'
const addJob = () => {
    return (
        <>
            <div>
                <AddJobForm />
            </div>
            <div>
                <AddJobBanner />
            </div>
        </>
    )
}

export default addJob
