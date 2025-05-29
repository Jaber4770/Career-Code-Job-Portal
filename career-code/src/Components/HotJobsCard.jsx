import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const HotJobsCard = ({ job }) => {
    const {title,location,applicationDeadline, salaryRange, description, company,requirements,company_logo,_id} = job;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border-2 h-full p-4">
                <div className='flex gap-5 items-center pb-4'>
                    <figure>
                        <img
                            className='w-24'
                            src={company_logo}
                            alt="company logo" />
                    </figure>
                    <div className='flex flex-col'>
                        <div className="badge badge-secondary">{company}</div>
                        <span className='flex items-center gap-2'><FaLocationDot></FaLocationDot> {location}</span>
                    </div>
                </div>
                <div className="">
                    <h2 className="card-title text-3xl">
                        {title}
                    </h2>
                    <p>{description}</p>
                    <p>Deadline: {applicationDeadline}</p>
                    <p className="badge badge-outline">
                        Salary Range: {salaryRange.currency}: {salaryRange.min}-{salaryRange.max} </p>
                    <div className="card-actions mt-3">
                        {
                            requirements.map((req, i) => <div
                                key={i}
                                className="badge badge-outline">{req}</div>)
                        }
                    </div>
                </div>
                <div className='flex justify-end mt-5 btn-primary'>
                    <Link to={`/jobDetails/${_id}`}><button className='btn'>Show details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;