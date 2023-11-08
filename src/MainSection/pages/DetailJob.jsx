import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmojiPeople, MdEditCalendar, MdOutlineAttachMoney } from "react-icons/md";
import axios from "axios";
import { AuthContext } from "../auth/AuthProvider";
import { toast } from "react-toastify";


const DetailJob = () => {
    const { id } = useParams()
    const [jobData, setJobData] = useState(null)
    const { user } = useContext(AuthContext)
    const [singleUserData, setSingleUserData] = useState(null)

    // console.log(singleUserData?.name);
    // console.log(jobData);
    // const { jobTitle, jobType, postedBy, postingDate, salaryRange, applicantsNumber, applicationDeadline } = jobDat

    // const { jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn } = jobData
    // console.log(jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn);


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
                // console.log(data.data);
                const aData = data.data
                const userData = aData.find(ss => ss.email === user?.email)
                setSingleUserData(userData);
                // console.log(userData?.email);
                // console.log('User Data email',user?.email);
                // const singleData = aData.find(aData?.email === user?.email)
                // console.log(singleData);
            })
    }, [user?.email])

    // useEffect(() => {
    //     axios.get('https://jobs-hq-server.vercel.app/applications')
    //         .then(data => {
    //             data.data.map(sdata => {
    //                 if (sdata.email !== user?.email) {
    //                     console.log(sdata)
    //                 }
    //                 console.log('No');
    //             })
    //         })
    // }, [user?.email])

    const handleSubmitApplication = e => {
        e.preventDefault()
        const from = e.target
        const userName = from.userName.value
        const email = from.userEmail.value
        const resume = from.resumeUrl.value
        const applicationData = { userName, email, resume , jobData}
        
        axios.post('https://jobs-hq-server.vercel.app/applications', applicationData)
            .then(data => {
                if (data.data.insertedId) {
                    toast('Application Successful')
                    from.reset()
                }
            })


    }

    return (

        <section className=" body-font bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt={jobData?.jobTitle} className="object-cover object-center h-full w-full" src={jobData?.photoUrl} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 sm:pr-8 sm:py-8">
                            {/* jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn */}
                            <div className="flex flex-col items-center justify-end">
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
                                <Link to={`/editJob/${jobData?._id}`} className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3">Edit Job  &#x270E;</Link>
                                {/* <Link className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3">Apply Now  &rarr;</Link> */}
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply Now  &rarr;</button>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailJob;