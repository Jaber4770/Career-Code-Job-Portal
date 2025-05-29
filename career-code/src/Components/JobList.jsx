import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsCreatedByPromise }) => {

    const jobs = use(jobsCreatedByPromise);

    return (
        <div>
            <h1 className='text-2xl font-semibold my-10 text-center'>{jobs.length} Job Posted by you</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Total Applied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job,index) => (
                                <tr key={job._id}>
                                    <th>{ index+1}</th>
                                    <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                    <td className='btn'><Link to={`/viewapplication/${job._id}`}>View Application</Link></td>
                            </tr>))
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;