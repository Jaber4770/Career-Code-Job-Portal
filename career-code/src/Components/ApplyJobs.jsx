import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyJobs = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    console.log(jobId, user)


    const hanleApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedin, github, resume);

        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume,
        }
        console.log(application);

        axios.post('http://localhost:3000/applications',application)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                      });
            }})
            .catch(error => console.log(error))





        // form.reset();

    }



    return (
        <div className=''>
            <h1 className='text-center text-3xl font-semibold'>Apply Jobs</h1>
            <div className='text-center'>
                <form onSubmit={hanleApply} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Your Details</legend>

                    <label className="label">LinkedIn</label>
                    <input type="url" name='linkedin' className="input" placeholder="LinkedIn id link" />

                    <label className="label">GitHub</label>
                    <input type="url" name='github' className="input" placeholder="Github id link" />

                    <label className="label">Resume</label>
                    <input type="url" name='resume' className="input" placeholder="Resume link" />
                    <input type="submit" className='btn btn-primary' value="Apply" />
                </form>
            </div>
        </div>
    );
};

export default ApplyJobs;