import { Link, NavLink } from "react-router-dom";
import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from "../hooks/useTheme";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";


const Navbar = () => {

    const [currentUser, setCurrentUser] = useState(null)


    axios.get('https://jobs-hq-server.vercel.app/user')
        .then(res => {
            // if(res._id){
            //     const photo = res.photo;
            //     console.log(photo);
            // }
            const currentUserFind = res?.data.find(data => data.email === user?.email)
            setCurrentUser(currentUserFind);

            // console.log(res.data.find(data => data.email === user.email));
        })

    const { user, signOutFromSite } = useContext(AuthContext)

    // console.log(user);

    const navLinks = <>
        <NavLink className="mr-5 hover:text-gray-900 " to={'/'}>Home</NavLink>
        <NavLink className="mr-5 hover:text-gray-900 " to={'/jobs'}>All Jobs</NavLink>
        {
            user ? <>
                <NavLink className="mr-5 hover:text-gray-900 " to={'/appliedJobs'}>Applied Jobs</NavLink>
                <NavLink className="mr-5 hover:text-gray-900 " to={'/addJob'}>Add A Job</NavLink>
                <NavLink className="mr-5 hover:text-gray-900 " to={'/myJobs'}>My Jobs</NavLink>
            </>: ''
        }
        <NavLink className="mr-5 hover:text-gray-900 " to={'/blogs'}>Blogs</NavLink>
    </>

    const { changeTheme, mode } = useTheme()

    return (
        <header className="md:sticky top-0 z-50 text-gray-600 dark:text-white bg-white dark:bg-slate-800 body-font drop-shadow-lg">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {
                        mode === 'light' ?
                            <img src="https://i.ibb.co/sRFwWh7/logggooo-02.png" className="h-20" alt="" />
                            :
                            <img src="https://i.ibb.co/8bkmChn/logggooo-01.png" className="h-20" alt="" />
                    }
                    <h3 className="text-4xl font-semibold pl-5 text-slate-900 dark:text-white">JOBsHQ</h3>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex gap-4 flex-wrap items-center text-base justify-center">
                    {navLinks}
                </nav>

                <div className="flex flex-row justify-center items-center gap-7">
                    <button className="h-10" onClick={changeTheme}>{mode === 'light' ? <BsSun /> : <BsFillMoonFill />}</button>

                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={currentUser?.photo || user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-slate-900 rounded-box w-52">
                                    <li><a>Settings</a></li>
                                    <li><a onClick={signOutFromSite}>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <Link to={'/login'} className="p-4 rounded-full hover:bg-gray-500 bg-green-700 text-white">Login/SignUp</Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;