import React from 'react';
import useAuth from '../Hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {

    const { user } = useAuth();

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        const { salaryMin, salaryMax, currency, ...newJob } = data;
        newJob.salaryRange = { salaryMin, salaryMax, currency };
        // console.log(newJob);
        newJob.status = "active";
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());

        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());

        // sending data to database:
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if ((res.data.insertedId)) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Job Post has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .then(error => { error && alert(error)})



    }






    return (
        <div className='mx-auto border max-w-7xl'>
            <div className=''>
                <h1 className='text-center text-4xl my-4 font-semibold'>Add jobs</h1>
                <div className='flex justify-center items-center min-h-screen'>
                    <form onSubmit={handleAddJob}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                            <legend className="text-center fieldset-legend">Job Details</legend>

                            <label className="label">Job Title</label>
                            <input required type="text" name='title' className="input w-full" placeholder="Job Title" />

                            <label className="label">Company Name</label>
                            <input required type="text"
                                name="company"
                                className="input w-full" placeholder="Company Name" />

                            <label className="label">Location</label>
                            <input required type="text"
                                name="location"
                                className="input w-full" placeholder="California" />

                            <label className="label">Company Logo</label>
                            <input required type="url"
                                name="logo"
                                className="input w-full" placeholder="company logo url" />

                            <fieldset className="filter">
                                <label className="label">Job type</label>
                                <input className="btn btn-square" type="reset" value="×" />
                                <input className="btn" type="radio" name="type" aria-label="On-site" value="On-site" />
                                <input className="btn" type="radio" name="type" value="remote" aria-label="Remote" />
                                <input className="btn" type="radio" value="hybrid" name="type" aria-label="Hybrid" />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Job Category</legend>
                                <select name='category' defaultValue="Pick a browser" className="select">
                                    <option disabled={true}>Select Category</option>
                                    <option>Engineering</option>
                                    <option>Finance</option>
                                    <option>Marketing</option>
                                </select>
                                <span className="label">Optional</span>
                            </fieldset>

                            <div>
                                <legend className="fieldset-legend">Salary</legend>
                                <div className='flex gap-3'>
                                    <div>
                                        <legend className="fieldset-legend">Minimum Salary</legend>
                                        <input name='salaryMin' type="text" placeholder="Minimum salary" className="input" />
                                    </div>
                                    <div>
                                        <legend className="fieldset-legend">Maximum Salary</legend>
                                        <input name='salaryMax' type="text" placeholder="Maximum salary" className="input" />
                                    </div>
                                    <div>
                                        <legend className="fieldset-legend">Currency</legend>
                                        <select name='currency' defaultValue="Pick a browser" className="select">
                                            <option disabled={true}>Select currency</option>
                                            <option>BDT</option>
                                            <option>USD</option>
                                            <option>EURO</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <legend className="fieldset-legend">Description</legend>
                                <textarea className="textarea" placeholder="Description" name='description'></textarea>
                            </div>

                            <div>
                                <legend className="fieldset-legend">Requirements</legend>
                                <textarea className="textarea" placeholder="Job requirements (separate them by comma)." name='requirements'></textarea>
                            </div>

                            <div>
                                <legend className="fieldset-legend">Responsibilities</legend>
                                <textarea className="textarea" placeholder="Job Responsibilities (separate them by comma)." name='responsibilities'></textarea>
                            </div>

                            <fieldset className="fieldset  rounded-box">
                                <legend className="fieldset-legend">HR info</legend>

                                <label className="label">HR Email</label>
                                <input type="Email" className="input"
                                    name="hr_email"
                                    defaultValue={user.email}
                                    placeholder="HR Email" />

                                <label className="label">HR Name</label>
                                <input type="text"
                                    name="hr_name" className="input" placeholder="HR Nmae" />
                            </fieldset>

                            <div>
                                <legend className="fieldset-legend">Deadline</legend>
                                <input name='deadline' type="date" className="input" />
                            </div>

                            <input type="submit" value="Publish" className="btn btn-neutral mt-4" />

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;