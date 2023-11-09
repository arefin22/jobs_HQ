import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import { AuthContext } from "../auth/AuthProvider";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {

    const [appliedData, setAppliedData] = useState(null)

    const { user } = useContext(AuthContext)

    // console.log(user?.email);
    const url = `https://jobs-hq-server.vercel.app/applications?email=${user?.email}`

    // console.log(appliedData);

    useEffect(() => {
        axios.get(url)
            .then(data => setAppliedData(data.data))

    }, [url])

    const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredData =
        selectedCategory === 'All'
            ? appliedData
            : appliedData.filter(job => job.jobData.jobCategory === selectedCategory);

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    };


    return (
        <div className="bg-slate-100 dark:bg-slate-900 min-h-screen -mt-9">
            <div className="overflow-x-auto container mx-auto my-9 ">
                <Helmet>
                    <title>JOBsHQ | Applied Jobs</title>
                    <meta name='description' content='Beginner friendly page for learning React Helmet.' />
                </Helmet>



                <h2 className="text-5xl text-center font-bold p-4 text-slate-900 dark:text-white">Applied Jobs</h2>


                <div className="flex justify-end my-5">
                    <select className=" bg-slate-500 select w-full max-w-xs justify-end" onChange={handleCategoryChange}>
                        <option disabled>Pick One To Sort</option>
                        <option value="All">All</option>
                        <option value="On Site">On Site</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Part Time">Part Time</option>
                    </select>
                </div>



                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Expires On</th>
                            <th>resume</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filteredData?.map(data => <TableRow key={data._id} data={data}></TableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;