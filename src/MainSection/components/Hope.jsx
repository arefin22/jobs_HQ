import  { useState } from 'react';

const jobsData = [
  { id: 1, title: 'Job 1', jobType: 'Full Time' },
  { id: 2, title: 'Job 2', jobType: 'Part Time' },
  { id: 2, title: 'Job 2', jobType: 'Part Time' },
  { id: 3, title: 'Job 3', jobType: 'Freelance' },
  { id: 3, title: 'Job 3', jobType: 'Freelance' },
  { id: 3, title: 'Job 3', jobType: 'Freelance' },
  { id: 3, title: 'Job 3', jobType: 'Freelance' },
  { id: 2, title: 'Job 2', jobType: 'Part Time' },
  { id: 3, title: 'Job 3', jobType: 'Freelance' },
  { id: 2, title: 'Job 2', jobType: 'Part Time' },
  { id: 3, title: 'Job 3', jobType: 'Freelance' },
  // ...more job objects
];

const Hope = () => {
  const [jobTypeFilter, setJobTypeFilter] = useState('All'); // Initial filter value

  const filteredJobs = jobsData.filter((job) => {
    if (jobTypeFilter === 'All') {
      return true; // Return all jobs if filter is set to 'All'
    }
    return job.jobType === jobTypeFilter; // Filter jobs based on jobTypeFilter value
  });

  return (
    <div>
      <label>
        Filter by Job Type:
        <select
          value={jobTypeFilter}
          onChange={(e) => setJobTypeFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Freelance">Freelance</option>
        </select>
      </label>

      <ul>
        {filteredJobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hope;