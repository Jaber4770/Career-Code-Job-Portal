import React, { use } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);
    console.log(jobs);
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mb-5'>Top<span>{jobs.length}</span> Hot Jobs for you.</h1>

            <div className='grid  grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;