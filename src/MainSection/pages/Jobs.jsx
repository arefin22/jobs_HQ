import { useLoaderData } from "react-router-dom";
// import SingleJob from "../components/singleJob";
import { Helmet } from "react-helmet-async";
import JobsTable from "../components/JobsTable";
import { useEffect, useState } from "react";
// import Title from "../components/Title";


const Jobs = () => {

    const jobs = useLoaderData()
    // console.log(jobs.length);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6

    const [jobsData, setjobsData] = useState(null)
    // const [jobTypeFilter, setJobTypeFilter] = useState('All');
    // console.log(jobsData);
    useEffect(() => {
        fetch('https://jobs-hq-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setjobsData(data))
    }, [])



    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const findedJobs = jobs?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(jobsData?.length / itemsPerPage);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset current page when search term changes
    };

    const filteredJobs = jobsData
        ? jobsData?.filter((job) =>
            job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div className="bg-slate-100 min-h-screen dark:bg-slate-900">

            <Helmet>
                <title>JOBsHQ | All Jobs</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>

            {/* <Title></Title> */}

            <h2 className="text-5xl text-center font-bold p-4 text-slate-900 dark:text-white">Jobs</h2>
            <p className="text-center">All Posted Jobs : {jobs.length}</p>

            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search by Job Title"
                    className="input w-full max-w-xs"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="overflow-x-auto container mx-auto my-9">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Job Title</th>
                            <th>Posted By</th>
                            <th>Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filteredJobs?.map(data => <JobsTable key={data._id} data={data}></JobsTable>)
                        }

                    </tbody>
                </table>
            </div>
            {/* <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 p-10  gap-4 mx-auto container">
                {
                    jobs.map(job => <SingleJob key={job._id} >job={job}</SingleJob>)
                }
                
            </div> */}
            <div className="pagination mx-auto p-7 text-center">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePaginationClick(pageNumber)}
                        className={pageNumber === currentPage ? 'active btn btn-outline bg-white dark:bg-slate-900' : 'btn btn-outline'}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Jobs;