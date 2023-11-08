/* eslint-disable react/prop-types */


const TableRow = ({ data }) => {

const {resume, jobData} = data
const {photoUrl, jobTitle, expiresOn} = jobData
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
                {expiresOn.slice(0,10)}
            </td>
            <td>{resume}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default TableRow;