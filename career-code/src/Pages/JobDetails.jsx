import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const jobData = useLoaderData();
    // const { id } = useParams();
    // console.log(jobData);

    const { title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo, _id } = jobData;


    return (
        <div className='max-w-7xl mx-auto my-10 space-y-4'>
            <h1 className='text-center text-3xl font-bold'>Job details</h1>
            <div className='flex items-center gap-5'>
                <img src={company_logo} alt="" />
                <div>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p className='text-2xl font-semibold'>{company}</p>
                </div>
            </div>
            <div className='flex gap-5 my-5'>
                <span className='px-2 py-1 border-1 rounded-lg'><span className='font-bold'>Locatin: </span>{location}</span>
                <span className='px-2 py-1 border-1 rounded-lg'>{jobType}</span>
                <span className='px-2 py-1 border-1 rounded-lg'>
                    <span className='font-bold'>Category: </span>
                    {category}</span>
                <span className='px-2 py-1 border-1 rounded-lg'>
                    <span className='font-bold'>Deadline: </span>
                    {applicationDeadline}</span>
            </div>
            {/* <span>{salaryRange}</span> */}
            <span><span className='font-bold'>Job Details:</span> {description}</span>

            <p><span className='font-bold'>Skill Required:</span>{
                requirements.map(req => <span className='px-2'>{ req}</span>)
            }</p>
            <span>Job Status: <span className='bg-green-500 px-1 font-semibold rounded-sm'>{status}</span></span>
            <p className=''><span className='font-bold'>Your Responsibility: </span>{responsibilities}</p>
            <p className="">
                Salary Range: {salaryRange.currency}: {salaryRange.min}-{salaryRange.max} </p>
            <div className=' gap-5 my-4'>
                <p className='py-1 inline-block rounded-sm'>Contact: {hr_email}</p> <br />
                <p className='py-1 inline-block rounded-sm'>Author: {hr_name}</p>
            </div>
            <Link to={`/applyforjob/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;