/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MyTableRow = ({ data }) => {
    const {_id,  resume, photoUrl, jobTitle, expiresOn } = data
    // const { photoUrl, jobTitle, expiresOn } = jobData
    // console.log(resume, photoUrl, jobTitle, expiresOn);
    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{jobTitle}</div>
                    </div>
                </div>
            </td>
            <td>
                {expiresOn.slice(0, 10)}
            </td>
            <td>{resume}</td>
            <th>
                <Link className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3" to={`/job/${_id}`}>View Details &rarr;</Link>
            </th>
        </tr>
    );
};

export default MyTableRow;