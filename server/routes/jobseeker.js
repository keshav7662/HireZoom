const express = require('express')
const errorHandler = require('../Utils/ErrorHandler')
const jobList = require('../models/joblists')
const verifiedUser = require('../middlewares/userVerification')

const router = express.Router()

//create job
router.post('/create-job', verifiedUser, async (req, res) => {
    try {
        const { companyName, logoURL, position, salary, jobType, remote, location, description, aboutCompany, skills, additionalInfo } = req.body
        // need to check explicitly for skills because skillsInArray is assigned and it will result in an empty arrray
        if (!skills) {
            return res.status(400).json({
                error: 'All fields are mandatory!'
            })
        }
        let skillsInArray = skills
        if (typeof skills === 'string') {
            skillsInArray = skills.split(',').map(skill => skill.trim())
        }

        const existingPost = await jobList.findOne({ position, recruiterName: req.user.recruiterName })
        if (!existingPost) {
            const newJob = new jobList({
                companyName,
                logoURL,
                position,
                salary,
                jobType,
                remote,
                location,
                description,
                aboutCompany,
                skills: skillsInArray,
                recruiterName: req.user.recruiterName,
                additionalInfo
            })
            await newJob.save()
            return res.status(200).json({
                message: 'Job created successsfully!',
                newJob
            })
        } else {
            return res.status(400).json({
                error: 'This job already exists!'
            })
        }
    } catch (error) {
        errorHandler(res, error)
    }
})

//edit job
router.put('/edit-job/:id', verifiedUser, async (req, res) => {
    try {
        //get fields you wish to update
        const { id } = req.params
        const {
            companyName,
            position,
            logoURL,
            salary,
            jobType,
            remote,
            location,
            description,
            aboutCompany,
            skills,
            additionalInfo
        } = req.body;

        // Find the existing job by ID
        const existingJob = await jobList.findById(id);

        if (!existingJob) {
            return res.status(404).json({
                error: "Job you are looking to update doesn't exists!"
            });
        }

        // Check for duplicate details only if the details are being updated
        if ((companyName && companyName !== existingJob.companyName) || (position && position !== existingJob.position)) {
            // Check if a job with the same companyName and position already exists for the same recruiterName
            const duplicateJob = await jobList.findOne({
                companyName: companyName || existingJob.companyName,
                position: position || existingJob.position,
                recruiterName: req.user.recruiterName,
                _id: { $ne: id } // Exclude the current job ID from the search
            });

            if (duplicateJob) {
                return res.status(400).json({
                    error: 'This job already exists for the same recruiter!'
                });
            }
        }

        //convert skills into an array
        let skillsInArray = skills
        if (typeof skills === 'string') {
            skillsInArray = skills.split(',').map(skill => skill.trim())
        }

        // Update the job details
        await jobList.findByIdAndUpdate(id, {
            companyName: companyName || existingJob.companyName,
            position: position || existingJob.position,
            logoURL: logoURL || existingJob.logoURL,
            salary: salary || existingJob.salary,
            jobType: jobType || existingJob.jobType,
            remote: remote || existingJob.remote,
            location: location || existingJob.location,
            description: description || existingJob.description,
            aboutCompany: aboutCompany || existingJob.aboutCompany,
            skills: skillsInArray || existingJob.skills,
            recruiterName: req.user.recruiterName,
            additionalInfo: additionalInfo || existingJob.additionalInfo
        });

        return res.status(200).json({
            status: 'success',
            message: 'Job updated successfully!'
        });
    } catch (error) {
        errorHandler(res, error);
    }
});

//find job based on skills and job title
router.get('/all-jobs', async (req, res) => {
    try {
        const { skills, position } = req.query
        let query = {};
        if (skills) {
            // this checks whether the skills parameter is an array or not if not we will make it an array
            query.skills = { $in: Array.isArray(skills) ? skills : [skills] }
        }
        if (position) {
            query.position = position
        }
        const listAllJobs = Object.keys(query).length === 0 ? await jobList.find() : await jobList.find(query);
        if (!listAllJobs || listAllJobs.length === 0) {
            return res.json({
                status: 'Failed!',
                error: 'No job found based on this filter!'
            })
        }
        return res.status(200).json({
            status: 'Success',
            message: 'List of available jobs!',
            availableJobs: listAllJobs
        })
    } catch (error) {
        errorHandler(res, error)
    }
})

//get detail description of a job post
router.get('/job-details/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Find the job post by ID
        const jobDetails = await jobList.findById(id);
        if (!jobDetails) {
            return res.status(404).json({
                status: 'Failed!',
                error: 'Job not found!'
            });
        }
        return res.status(200).json({
            status: 'Success',
            message: 'Job details retrieved successfully!',
            jobDetails
        });
    } catch (error) {
        errorHandler(res, error);
    }
});

module.exports = router;