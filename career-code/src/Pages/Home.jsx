import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import BrowseCategory from '../Components/BrowseCategory';
import Hiring from '../Components/Hiring';
import JobsByLocation from '../Components/JobsByLocation';
import HotJobs from '../Components/HotJobs';



const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
// console.log(jobsPromise);

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <BrowseCategory></BrowseCategory>
            <Hiring></Hiring>
            <JobsByLocation></JobsByLocation>
            <Suspense fallback="Loading...">
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;