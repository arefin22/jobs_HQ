import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import { AuthContext } from "../auth/AuthProvider";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {

    const [appliedData, setAppliedData] = useState(null)

    const {user} = useContext(AuthContext)

    // console.log(user?.email);
    const url = `https://jobs-hq-server.vercel.app/applications?email=${user?.email}`

    // console.log(appliedData);

    useEffect(() => {
        axios.get(url)
            .then(data => setAppliedData(data.data))
    
    }, [url])


    return (
        <div className="overflow-x-auto container mx-auto my-9">
            <Helmet>
                <title>JOBsHQ | Applied Jobs</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Expires On</th>
                        <th>resume</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        appliedData?.map(data => <TableRow key={data._id} data={data}></TableRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AppliedJobs;