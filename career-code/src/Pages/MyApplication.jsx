import React, { Suspense } from 'react';
import ApplicationList from '../Components/ApplicationList';
import useAuth from '../Hook/useAuth';
import { myApplicationPromise } from '../api/applicationApi';


const MyApplication = () => {
    const { user } = useAuth();

    return (
        <div className='mx-auto max-w-7xl'>
            <h1 className='text-center text-3xl font-semibold my-8'>My Application</h1>
            <div>
                <Suspense>
                    <ApplicationList
                        myApplicationPromise={myApplicationPromise(user.email)}
                    ></ApplicationList>
                </Suspense>
            </div>
        </div>
    );
};

export default MyApplication;