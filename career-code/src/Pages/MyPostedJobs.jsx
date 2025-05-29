import React, { Suspense } from 'react';
import useAuth from '../Hook/useAuth';
import JobList from '../Components/JobList';

const jobsCreatedByPromise = email => {
    return fetch(`http://localhost:3000/jobs?email=${email}`).then(res => res.json())
}


const MyPostedJobs = () => {
    
    const { user } = useAuth();

    return (
        <div>
            <Suspense fallback="Loading posted jobs...">
                <JobList
                    jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;