/* eslint-disable react/prop-types */

import { SlCalender } from "react-icons/sl";
import { MdOutlineEmojiPeople, MdEditCalendar, MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleJob = (job) => {

    // console.log(job);

    const { _id, jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, applicant, postedOn, expiresOn } = job.children[1]

    // const { _id, postedBy, jobTitle, postingDate, applicationDeadline, salaryRange, applicantsNumber, jobType } = job.children[1]
    // console.log(_id , postedBy, jobTitle, postingDate, applicationDeadline , salaryRange, applicantsNumber, jobType);

    // const handleClick = (_id) => {
    //     console.log(_id);
    // }

    return (
        <div>
            <div className="card rounded-lg drop-shadow-xl p-4 text-slate-800 dark:text-slate-200 bg-slate-300 dark:bg-slate-800 hover:border-slate-500 hover:border w-auto min-h-[200px] ">
                <h2 className="text-2xl font-bold text-blue-950 dark:text-sky-500">{jobTitle}</h2>
                <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">{postedBy}</h2>
                {/* <table className="w-2/3 my-5">
                    <tr className="text-lg ">
                        <td>Deadline :</td>
                        <td><i>{applicationDeadline}</i></td>
                    </tr>
                    <tr className="text-lg ">
                        <td>Posted On :</td>
                        <td><i>{postingDate}</i></td>
                    </tr>
                    <tr className="text-lg ">
                        <td>Salary Range :</td>
                        <td><i>{salaryRange}</i></td>
                    </tr>
                    <tr className="text-lg ">
                        <td>Total Applicant :</td>
                        <td><i>{applicantsNumber}</i></td>
                    </tr>
                </table> */}
                <div className="flex justify-start items-center gap-3">
                    <MdEditCalendar />
                    <h2 className="text-lg text-slate-800 dark:text-slate-200"><i>{postedOn}</i></h2>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <MdOutlineAttachMoney />
                    <h2 className="text-lg"> <i>$ {salaryFrom} - $ {salaryTo}</i></h2>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <MdOutlineEmojiPeople />
                    <h2 className="text-lg">Total Applicant : <i>{applicant}</i></h2>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <SlCalender />
                    <h2 className="text-lg">Deadline : <i>{expiresOn}</i></h2>
                </div>
                <div className="flex flex-row items-center justify-between">
                    {/* <button  onClick={() => handleClick(_id)} >View Details &rarr;</button> */}
                    <Link className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3" to={`/job/${_id}`}>View Details &rarr;</Link>
                    <h2 className="text-lg border text-center w-1/5 rounded-3xl">{jobCategory}</h2>
                </div>

            </div>
        </div>
    );
};

export default SingleJob;