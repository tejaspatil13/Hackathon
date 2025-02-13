import React from "react";

interface JobCardProps {
  job: {
    id: number;
    job_position: string;
    job_link: string;
    company?: string;
    location?: string;
    type?: string;
    posted?: string;
    description?: string;
    salary?: string;
    skills?: string[];
    logo?: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">{job.job_position}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <a href={job.job_link} target="_blank" rel="noopener noreferrer">
        Apply Here
      </a>
    </div>
  );
};

export default JobCard;
