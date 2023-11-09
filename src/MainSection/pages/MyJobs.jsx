import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import MyTableRow from "../components/MyTableRow";

const MyJobs = () => {

    const [myJobs, setMyJobs] = useState(null)

    console.log(myJobs);

    const { user } = useContext(AuthContext)

    // console.log(user?.email);
    const url = `https://jobs-hq-server.vercel.app/jobs?userEmail=${user?.email}`

    // console.log(appliedData);

    useEffect(() => {
        axios.get(url)
            .then(data => setMyJobs(data.data))

    }, [url])


    return (



        <div>
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