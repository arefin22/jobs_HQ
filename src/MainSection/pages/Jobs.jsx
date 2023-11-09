import { useLoaderData } from "react-router-dom";
import SingleJob from "../components/singleJob";
import { Helmet } from "react-helmet-async";
// import Title from "../components/Title";


const Jobs = () => {

    const jobs = useLoaderData()
    // console.log(jobs.length);

    return (
        <div className="bg-slate-100 dark:bg-slate-900">

            <Helmet>
                <title>JOBsHQ | All Jobs</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>

            {/* <Title></Title> */}

            <h2 className="text-5xl text-center font-bold p-4 text-slate-900 dark:text-white">Jobs</h2>
            <p className="text-center">All Posted Jobs : {jobs.length}</p>

            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 p-10  gap-4 mx-auto container">
                {
                    jobs.map(job => <SingleJob key={job._id} >job={job}</SingleJob>)
                }
                
            </div>
        </div>
    );
};

export default Jobs;