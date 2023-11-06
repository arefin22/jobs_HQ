/* eslint-disable react/prop-types */

const SingleJob = (job) => {
    const {id , postedBy, jobTitle, postingDate, applicationDeadline , salaryRange, applicantsNumber, jobType} = job.children[1]
    console.log(id , postedBy, jobTitle, postingDate, applicationDeadline , salaryRange, applicantsNumber, jobType);
    return (
        <div>
            <div className="card rounded-lg drop-shadow-xl w-auto min-h-[200px] ">
                <h2 className="text-2xl text-center">{jobTitle}</h2>
                <h2 className="text-lg text-center">Posted On : <i>{postingDate}</i></h2>
                <h2 className="text-lg text-center">Expire On : <i>{applicationDeadline}</i></h2>
            </div>
        </div>
    );
};

export default SingleJob;