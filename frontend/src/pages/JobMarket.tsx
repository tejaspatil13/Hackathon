import { useState, useEffect } from "react";

interface Job {
  id: number;
  job_position: string;
  job_link: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  description: string;
  salary: string;
  skills: string[];
  logo: string;
}

const JobMarket = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://api.scrapingdog.com/linkedinjobs/?api_key=67adabca4dc0afaf6b015093&field=Product%20Manager&geoid=106300413&page=1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();
        console.log("Raw API Response:", data); // Debugging API response

        // Ensure jobList is an array
        const jobList = Array.isArray(data) ? data : data.jobs || data.results || data.list || [];

        if (!Array.isArray(jobList)) {
          throw new Error("Jobs data is not an array");
        }

        console.log("Processed Job List:", jobList);

        const formattedJobs: Job[] = jobList.map((job: Record<string, any>, index: number) => ({
          id: index,
          job_position: job.job_position || "No Title",
          job_link: job.job_link || "#",
          company: job.company || "Unknown Company",
          location: job.location || "Unknown Location",
          type: job.type || "Full-time",
          posted: job.posted || "Recently Posted",
          description: job.description || "No description available",
          salary: job.salary || "Not Disclosed",
          skills: Array.isArray(job.skills) ? job.skills : [],
          logo: job.logo || "/api/placeholder/48/48",
        }));

        setJobs(formattedJobs);
      } catch (error: any) {
        console.error("Error fetching jobs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Job Listings</h1>

      {loading && <p className="text-blue-500">Loading jobs...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 bg-white border rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">{job.job_position}</h2>
                <p className="text-gray-600">{job.company} - {job.location}</p>
                <p className="text-sm text-gray-500">{job.type} | {job.salary}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700">{job.description}</p>
            <a href={job.job_link} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-600 hover:underline">
              View Job
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMarket;
