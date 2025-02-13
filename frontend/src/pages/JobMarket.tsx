import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

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

const JobMarket: React.FC = () => {
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
        console.log("API Response:", data); // Debugging API response structure

        // Ensure jobs exist in the response
        const jobList = data.jobs || data.results || data.list || []; // Adjust based on actual response
        console.log("job list :",jobList);
        if (!Array.isArray(jobList)) {
          throw new Error("Jobs data is not an array");
        }

        const formattedJobs: Job[] = jobList.map((job: any, index: number) => ({
          id: index,
          title: job.title || "No Title",
          company: job.company || "Unknown Company",
          location: job.location || "Unknown Location",
          type: job.type || "Full-time",
          posted: job.posted || "Recently Posted",
          description: job.description || "No description available",
          salary: job.salary || "Not Disclosed",
          skills: job.skills || [],
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

  useEffect(() => {
    console.log("Jobs State Updated:", jobs); // ✅ Debugging `jobs` state
  }, [jobs]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Job Market</h2>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-6">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          !loading && <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default JobMarket;
