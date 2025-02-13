import React from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  description: string;
  salary: string;
  skills: string[];
  logo: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }: JobCardProps) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-4 max-w-2xl">
      <div className="flex items-start space-x-4">
        <img
          src={job.logo || "/api/placeholder/48/48"}
          alt={`${job.company || "Company"} logo`}
          className="w-12 h-12 rounded-lg"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{job.title || "Job Title"}</h3>
              <div className="text-gray-600 mt-1">{job.company || "Company Name"}</div>
            </div>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {job.type || "Full-time"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div>{job.location || "Location Not Available"}</div>
          <div>{job.salary || "Salary Not Disclosed"}</div>
          <div>{job.posted || "Recently Posted"}</div>
        </div>

        <p className="text-gray-700">{job.description || "No job description provided."}</p>

        <div className="flex flex-wrap gap-2">
          {job.skills && job.skills.length > 0 ? (
            job.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">
                {skill}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No skills listed.</span>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Save</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
