import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";




const Footer = () => {
    const { mode } = useTheme()
    const { user } = useContext(AuthContext)

    const navLinks = <>
        <NavLink className="mr-5 hover:text-gray-900 " to={'/'}>Home</NavLink>
        <NavLink className="mr-5 hover:text-gray-900 " to={'/jobs'}>All Jobs</NavLink>
        {
            user ? <>
                <NavLink className="mr-5 hover:text-gray-900 " to={'/appliedJobs'}>Applied Jobs</NavLink>
                <NavLink className="mr-5 hover:text-gray-900 " to={'/addJob'}>Add A Job</NavLink>
                <NavLink className="mr-5 hover:text-gray-900 " to={'/myJobs'}>My Jobs</NavLink>
            </> : ''
        }
        <NavLink className="mr-5 hover:text-gray-900 " to={'/blogs'}>Blogs</NavLink>
    </>
    return (
        <footer className="text-slate-800 bg-white mx-auto drop-shadow-2xl dark:bg-slate-800 dark:text-slate-200 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center justify-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex w-4/6 flex-col-reverse justify-center items-center md:flex-row">
                    <div className="lg:w-1/4 md:w-1/2 w-full">
                        <p className="text-sm text-gray-500">Find your ideal job, whether you prefer the flexibility of remote work or the collaborative environment of onsite placements!</p>
                    </div>
                    <div className="lg:w-3/4 flex justify-center mx-auto text-center md:text-center">
                        <Link to={'/'} className="flex title-font font-medium items-center mx-auto text-gray-900 mb-4 md:mb-0">
                            {
                                mode === 'light' ?
                                    <img src="https://i.ibb.co/sRFwWh7/logggooo-02.png" className="h-40" alt="" />
                                    :
                                    <img src="https://i.ibb.co/8bkmChn/logggooo-01.png" className="h-40" alt="" />
                            }
                        </Link>
                    </div>
                </div>
                <div className="w-2/6 flex justify-center md:text-left text-center">
                    <div className=" w-full px-4">
                        <h2 className="title-font text-center font-medium text-slate-900 dark:text-slate-200 underline text-xl tracking-widest mb-3">Pages</h2>
                        <nav className="grid grid-cols-2 text-center md:w-2/4 mx-auto gap-2 ">
                            {navLinks}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-slate-900">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 ml-1" target="_blank">@knyttneve</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;