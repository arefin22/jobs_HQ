import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmojiPeople, MdEditCalendar, MdOutlineAttachMoney } from "react-icons/md";
import axios from "axios";
import { AuthContext } from "../auth/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin5Line } from "react-icons/ri";


const DetailJob = () => {
    const { id } = useParams()
    const [jobData, setJobData] = useState(null)
    const { user } = useContext(AuthContext)
    const [singleUserData, setSingleUserData] = useState(null)

    // console.log(singleUserData?.name);
    // console.log(user);
    // console.log("Job Data here", jobData);
    // console.log(jobData?.userEmail !== user?.email ? 'New User' : 'old User');



    useEffect(() => {
        axios.get('https://jobs-hq-server.vercel.app/jobs')
            .then(data => {
                const specificJobData = data.data?.find(data => data._id === id)
                // console.log(specificJobData);
                setJobData(specificJobData);
            })
    }, [id])

    useEffect(() => {
        axios.get('https://jobs-hq-server.vercel.app/user')
            .then(data => {
                const aData = data.data
                const userData = aData.find(ss => ss.email === user?.email)
                setSingleUserData(userData);
            })
    }, [user?.email])


    const isJobExpired = () => {
        if (jobData && jobData.expiresOn) {
            const jobExpirationDate = new Date(jobData.expiresOn);
            const currentDate = new Date();
            return jobExpirationDate < currentDate;
        }
        return false; // If jobData or expiresOn is not available, consider the job as not expired
    };

    const handleApplyClick = () => {
        if (isJobExpired()) {
          toast.error("This job posting has expired.");
        } else {
          document.getElementById("my_modal_5").showModal();
        }
      };

    const handleSubmitApplication = e => {
        e.preventDefault()
        const from = e.target
        const userName = from.userName.value
        const email = user?.email
        const resume = from.resumeUrl.value
        const applicationData = { userName, email, resume, jobData }

        // isJobExpired = () => {
        //     const { jobExpiryDate } = this.state;
        //     const currentDate = new Date().toISOString().split("T")[0]; // Get current date in "YYYY-MM-DD" format
        //     return jobExpiryDate < currentDate;
        //   };

        axios.post('https://jobs-hq-server.vercel.app/applications', applicationData)
            .then(data => {
                if (data.data.insertedId) {
                    toast('Application Successful')
                    from.reset()
                }
            })


    }

    const handleDelete = id => {
        const process = confirm("Delete Confirmation")
        if (process) {
            axios.delete(`https://jobs-hq-server.vercel.app/jobs/${id}`)
                .then(data => {
                    console.log(data);
                })
        }

    }


    return (

        <section className=" body-font bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300">
            <Helmet>
                <title>JOBsHQ | Details</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt={jobData?.jobTitle} className="object-cover object-center h-full w-full" src={jobData?.photoUrl} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 sm:pr-8 sm:py-8">
                            {/* jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn */}
                            <div className="flex flex-col items-center justify-end">
                                <div className="w-10 rounded-full">
                                    <img src={jobData?.logo} />
                                </div>
                                <h2 className="font-medium title-font mt-4 text-gray-900 dark:text-white text-lg">{jobData?.jobTitle}</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">{jobData?.postedBy}</p>
                                <div className="flex items-center gap-2">
                                    <MdOutlineAttachMoney />
                                    <p className="text-base">{jobData?.salaryFrom} - {jobData?.salaryTo}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdEditCalendar />
                                    <p className="text-base">{jobData?.postedOn?.slice(0, 10)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <SlCalender />
                                    <p className="text-base">{jobData?.expiresOn?.slice(0, 10)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdOutlineEmojiPeople />
                                    <p className="text-base">{jobData?.Applicant} person</p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">{jobData?.description}</p>
                            <div className="flex flex-col">
                                {
                                    jobData?.userEmail !== user?.email ?

                                        <div>
                                            <button onClick={handleApplyClick} className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3" >Apply Now  &rarr;</button>
                                            {/* onClick={() => document.getElementById('my_modal_5').showModal()} */}
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">Apply Now!</h3>
                                                    <form onSubmit={handleSubmitApplication}>
                                                        <div className="p-2 w-full">
                                                            {/* User Name */}
                                                            <div className="relative">
                                                                <label htmlFor="userName" className="leading-7 text-sm text-gray-600">User Name</label>
                                                                <input type="text" id="userName" readOnly defaultValue={user?.displayName || singleUserData?.name} name="userName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                            </div>
                                                            {/* Email Name */}
                                                            <div className="relative">
                                                                <label htmlFor="userEmail" className="leading-7 text-sm text-gray-600">Email Name</label>
                                                                <input type="email" id="userEmail" readOnly defaultValue={user?.email} name="userEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                            </div>
                                                            {/* Resume Name */}
                                                            <div className="relative">
                                                                <label htmlFor="resumeUrl" className="leading-7 text-sm text-gray-600">Resume URL</label>
                                                                <input type="text" id="resumeUrl" placeholder="Your Resume Link Here..." name="resumeUrl" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 text-slate-950 placeholder:text-slate-800 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                            </div>
                                                            {/* Submit Button */}
                                                            <div className="relative">
                                                                <button className="btn btn-accent w-full my-5" type="submit">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn">Close</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </div>
                                        :
                                        <div>
                                            <Link to={`/editJob/${jobData?._id}`} className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3">Edit Job  &#x270E;</Link>
                                            {/* <Link to={`/editJob/${jobData?._id}`} className="btn ml-3 btn-outline text-black my-3 hover:text-white dark:text-white w-1/3">Delete Job  <RiDeleteBin5Line /></Link> */}
                                            <button onClick={() => handleDelete(id)} className="btn ml-3 btn-outline text-black my-3 hover:text-white dark:text-white w-1/3">Delete Job  <RiDeleteBin5Line /></button>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailJob;