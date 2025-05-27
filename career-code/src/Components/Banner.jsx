import React from 'react';
import img1 from "../assets/team1.jpg";
import img2 from "../assets/team2.jpg";
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{
                            y: [-40, 30, -40],
                            transition: {
                                duration: 5,
                                repeat: Infinity
                            }
                        }}
                        src={img1}
                        className="max-w-[450px] shadow-2xl rounded-t-[40px] rounded-br-[40px] border-blue-500 border-s-8 border-b-8 z-50"
                    />
                    <motion.img
                        animate={{
                            x: [60, 150, 60],
                            transition: {
                                duration: 5,
                                delay: 1,
                                repeat: Infinity
                            }
                        }}
                        src={img2}
                        className="max-w-sm rounded-lg shadow-2xl rounded-t-[40px] rounded-br-[40px] border-blue-500 border-s-8 border-b-8 z-10"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{
        
                            transition:{duration:1.5}
                        }}
                        className="text-5xl font-bold">The <span className='text-blue-600'>Easiest Way</span> <br />
                        to Get Your New Job</motion.h1>
                    <p className="py-6">Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;