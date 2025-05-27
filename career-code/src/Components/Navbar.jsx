import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Navbar = () => {

    const { user,logOut } = use(AuthContext);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("user vagse");
            })
            .catch(error => { console.log(error) });
    }

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar mx-auto max-w-7xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Career Code</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    {user ? <button className='btn' onClick={handleLogout}>Log Out</button>
                        :
                        <>
                            <Link className='btn' to='/login'>Login</Link>
                            <Link className='btn' to='/register'>Register</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;