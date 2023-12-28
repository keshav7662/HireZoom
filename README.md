# HireZoom - Full Stack Web Application

HireZoom is a full stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Vite for the frontend. It provides a platform for job seekers and employers to connect through job listings. The application includes features such as job listing, filtering, editing, and viewing detailed job information.

## Features

### 1. Job Listing Page

- **Add Filters Based on Skills:**
  - Users can filter job listings based on specific skills, making it easier to find relevant opportunities.

- **List All Job Postings:**
  - Display a comprehensive list of all job posts available on HireZoom.

- **Share Using Public Link:**
  - Each job post has a unique public link that users can share with others, facilitating easy sharing and access.

- **Edit Job Post:**
  - Employers can edit and update their job posts as needed.

### 2. View Job Detail

- **View Job Details:**
  - Users can view detailed information about a specific job, including job description, requirements, and application instructions.

- **Share Using Public Link:**
  - Similar to the job listing page, each job detail has a public link for easy sharing.

## Getting Started

To run the HireZoom application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/keshav7662e/hirezoom.git
   cd HireZoom
2. **Install the dependecies:**
    ```bash
     # Install server and client dependencies
    cd server && npm install
    cd ../client && npm install
3. **Start the frontend (Vite) and backend (using nodemon):**
     ```bash
     # Start the frontend
    cd client && npm run dev
    # Start the backend
    cd ../server && nodemon Server.js
