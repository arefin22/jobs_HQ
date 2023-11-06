import { useLoaderData } from "react-router-dom";
import SingleJob from "../components/singleJob";


const Jobs = () => {

    const {jobPostings} = useLoaderData()
    // console.log(jobPostings.length);

    return (
        <div className="grid grid-cols-4 gap-4 mx-auto">
            {
                jobPostings.map(job => <SingleJob key={job.id} >job={job}</SingleJob>)
            }
        </div>
    );
};

export default Jobs;