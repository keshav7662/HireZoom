const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    _id: {
        type:mongoose.Schema.Types.ObjectId,
        auto:true
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    companyName: {
        type:String,
        required:true
    },
    logoURL: {
        type:String,
        required:true
    },
    position: {
        type:String,
        required:true
    },
    salary: {
        type:String,
        required:true
    },
    jobType: {
        type:String,
        enum:['Full-Time','Intern','Contract'],
        required:true
    },
    remote: {
        type:String,
        enum:['Remote','Office'],
        required:true
    },
    location: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    aboutCompany: {
        type:String,
        required:true
    },
    skills: {
        type:[String],
        required:true
    },
    recruiterName: {
        type:String,
        reuired:true
    },
    additionalInfo: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('jobPosts',jobSchema)