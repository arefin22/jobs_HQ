import { Link } from "react-router-dom";


const JobsTable = (job) => {
    // console.log(job);
    // const { _id, jobTitle, postedBy, salaryFrom, salaryTo, jobCategory, applicant, postedOn, expiresOn } = job.children[1]
    const {_id, jobTitle, postedBy, salaryFrom, salaryTo, postedOn, expiresOn, photoUrl } = job.data
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
                {postedBy}
            </td>
            <td>
                {postedOn.slice(0, 10)}
            </td>
            <td>
                {expiresOn.slice(0, 10)}
            </td>
            <td>${salaryFrom} - ${salaryTo}</td>
            <th>
                <Link className="btn btn-outline text-black my-3 hover:text-white dark:text-white w-1/3" to={`/job/${_id}`}>View Details &rarr;</Link>
            </th>
        </tr>
    );
};

export default JobsTable;