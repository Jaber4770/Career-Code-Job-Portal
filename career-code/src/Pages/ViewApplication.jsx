import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const ViewApplication = () => {

    const viewApplicationData = useLoaderData();
    // console.log(viewApplicationData);
    return (
        <div>
            <h1>View {viewApplicationData.length} Application</h1>
            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>LinkedIn</th>
                                <th>Github</th>
                                <th>Resume</th>
                                {/* <th>Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {viewApplicationData.map((data, index) => (
                                <tr key={data._id}>
                                    <th>{index + 1}</th>
                                    <td>{data.applicant}</td>
                                    <td><Link to={data.linkedin}><FaLinkedin /></Link></td>
                                    <td><Link to={data.github}><FaGithub /></Link></td>
                                    <td><Link to={data.resume}><FaFileAlt /></Link></td>
                                    {/* <td>{data.status}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplication;