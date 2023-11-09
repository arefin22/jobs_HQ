import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import MyTableRow from "../components/MyTableRow";
import { Helmet } from "react-helmet-async";

const MyJobs = () => {

    const [myJobs, setMyJobs] = useState(null)

    console.log(myJobs);

    const { user } = useContext(AuthContext)

    // console.log(user?.email);
    // const url = `https://jobs-hq-server.vercel.app/jobs?userEmail=${user?.email}`
    const url = `http://localhost:5000/jobs?userEmail=${user?.email}`

    // console.log(appliedData);

    useEffect(() => {
        axios.get(url)
            .then(data => setMyJobs(data.data))

    }, [url])


    return (



        <div>
            <Helmet>
                <title>JOBsHQ | My Jobs</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <div className="overflow-x-auto container mx-auto my-9">
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
                            myJobs?.map(data => <MyTableRow key={data._id} data={data}></MyTableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;