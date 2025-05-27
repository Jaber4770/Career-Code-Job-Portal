import React from 'react';

const Hiring = () => {
    return (
        <div className='border-2 flex justify-between p-2 rounded-lg  items-center mb-20'>
            <div>
                <img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-left-hiring.cc0e2e85.svg" alt="" />
            </div>
            <div>
                <h1  className='text-2xl'>We Are</h1>
                <h1  className='text-5xl'>HIRING</h1>
            </div>
            <div>
                <p className='text-2xl'>Let’s Work Together <br />
                & Explore Opportunities</p>
            </div>
            <div>
                <button className='btn btn-primary'>Apply Now</button>
            </div>
            <div>
                <img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-right-hiring.0dfda9a2.svg" alt="" />
            </div>
        </div>
    );
};

export default Hiring;