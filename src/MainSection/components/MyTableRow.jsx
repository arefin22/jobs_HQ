/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import Swal from 'sweetalert2'


const MyTableRow = ({ data }) => {
    const { _id, resume, photoUrl, jobTitle, expiresOn } = data
    // const { photoUrl, jobTitle, expiresOn } = jobData
    // console.log(resume, photoUrl, jobTitle, expiresOn);
    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                axios.delete(`https://jobs-hq-server.vercel.app/jobs/${id}`)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error("Error deleting job:", error);
                });
            }
        });
        // if (process) {
        //     axios.delete(`https://jobs-hq-server.vercel.app/jobs/${id}`)
        //         .then(response => {
        //             console.log(response);
        //         })
        //         .catch(error => {
        //             console.error("Error deleting job:", error);
        //         });
        // }

    }
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
                <button onClick={() => handleDelete(_id)} className="btn ml-3 btn-outline text-black my-3 hover:text-white dark:text-white w-1/3">Delete Job  <RiDeleteBin5Line /></button>
            </th>
        </tr>
    );
};

export default MyTableRow;