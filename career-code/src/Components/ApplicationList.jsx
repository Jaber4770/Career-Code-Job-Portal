import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise);
    console.log(applications);
    return (
        <div>
            <h1>You have applied to: {applications.length} jobs</h1>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, index) => (<ApplicationRow
                                key={application._id}
                                index={index}
                                application={application}
                            ></ApplicationRow>))}                        
                        </tbody>
                    </table>
                </div>




            </div>
        </div>
    );
};

export default ApplicationList;