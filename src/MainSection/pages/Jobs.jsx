import { useLoaderData } from "react-router-dom";
import SingleJob from "../components/singleJob";
// import Title from "../components/Title";


const Jobs = () => {

    const { jobPostings } = useLoaderData()
    // console.log(jobPostings.length);

    return (
        <div className="bg-slate-100 dark:bg-slate-900">
        

            {/* <Title></Title> */}

            <h2 className="text-5xl text-center font-bold p-4 text-slate-900 dark:text-white">Jobs</h2>
            <p className="text-center">All Posted Jobs : {jobPostings.length}</p>

            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 p-10  gap-4 mx-auto container">
                {
                    jobPostings.map(job => <SingleJob key={job.id} >job={job}</SingleJob>)
                }
            </div>
        </div>
    );
};

export default Jobs;