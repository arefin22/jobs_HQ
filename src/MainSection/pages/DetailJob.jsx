import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmojiPeople, MdEditCalendar, MdOutlineAttachMoney } from "react-icons/md";
import axios from "axios";


const DetailJob = () => {
    const { id } = useParams()
    const [jobData, setJobData] = useState(null)

    console.log(jobData);
    // const { jobTitle, jobType, postedBy, postingDate, salaryRange, applicantsNumber, applicationDeadline } = jobDat

    // const { jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn } = jobData
    // console.log(jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, photoUrl, applicant, description, postedOn, expiresOn);


    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(data => {
                const specificJobData = data.data?.find(data => data._id === id)
                console.log(specificJobData);
                setJobData(specificJobData);
            })
    }, [id])

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
                                <Link className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3">Apply Now  &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailJob;