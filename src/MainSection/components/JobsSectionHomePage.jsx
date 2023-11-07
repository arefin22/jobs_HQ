import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import SingleJob from './singleJob';
// import { Link } from 'react-router-dom';

const JobsSectionHomePage = () => {

    const [jobsData, setjobsData] = useState(null)
    const [jobTypeFilter, setJobTypeFilter] = useState('All');
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobsData(data.jobPostings))
    }, [])

    const jobTabs = <>
        <Tab value='All' className='min-w-[120px] p-6 rounded-full'>All</Tab>
        <Tab value='Full Time' className='p-6 hover:outline-red-100 rounded-full'>Full Time Job</Tab>
        <Tab value='Remote' className='p-6 hover:outline-red-100 rounded-full'>Remote Job</Tab>
        <Tab value='Hybrid' className='p-6 hover:outline-red-100 rounded-full'>Hybrid</Tab>
        <Tab value='Part Time' className='p-6 hover:outline-red-100 rounded-full'>Part Time</Tab>
    </>


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = jobsData?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(jobsData?.length / itemsPerPage);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <Tabs className='pt-10'>
            <TabList className='flex flex-col md:flex-row justify-center text-center' value={jobTypeFilter} onChange={(e) => setJobTypeFilter(e.target.value)}>
                {jobTabs}
            </TabList>

            <TabPanel>
                <div className='grid md:grid-cols-3 p-5 gap-4 container mx-auto'>
                    {
                        currentJobs?.map(jobData => <SingleJob key={jobData.id} >jobData={jobData}</SingleJob>)
                    }
                </div>
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
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 p-5 gap-4 container mx-auto'>
                    {
                        jobsData?.filter(jobData => jobData?.jobType === 'Full Time').map(job => <SingleJob key={job.id} >jobData={job}</SingleJob>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 p-5 gap-4 container mx-auto'>
                    {
                        jobsData?.filter(jobData => jobData?.jobType === 'Remote').map(job => <SingleJob key={job.id} >jobData={job}</SingleJob>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 p-5 gap-4 container mx-auto'>
                    {
                        jobsData?.filter(jobData => jobData?.jobType === 'Hybrid').map(job => <SingleJob key={job.id} >jobData={job}</SingleJob>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 p-5 gap-4 container mx-auto'>
                    {
                        jobsData?.filter(jobData => jobData?.jobType === 'Part Time').map(job => <SingleJob key={job.id} >jobData={job}</SingleJob>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default JobsSectionHomePage;