import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobsSectionHomePage = () => {


    const [jobsData , setjobsData] = useState(null)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobsData(data.jobPostings))
    },[])

    // console.log(jobsData);

    const jobTabs = <>
        <Tab className='min-w-[120px] p-6 rounded-full'>All</Tab>
        <Tab className='p-6 hover:outline-red-100 rounded-full'>On Site Job</Tab>
        <Tab className='p-6 hover:outline-red-100 rounded-full'>Remote Job</Tab>
        <Tab className='p-6 hover:outline-red-100 rounded-full'>Hybrid</Tab>
        <Tab className='p-6 hover:outline-red-100 rounded-full'>Part Time</Tab>
    </>




    return (
        <Tabs className='pt-10 text-center'>
            <TabList className='flex flex-row justify-center'>
                {jobTabs}
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-3 w-full'>
                    {
                        jobsData?.map(jobData => jobData?.length < 6 ? <JobCard key={jobData.id} >jobData={jobData}</JobCard> : '')
                    }
                    
                    <JobCard></JobCard>
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 5</h2>
            </TabPanel>
        </Tabs>
    );
};

export default JobsSectionHomePage;