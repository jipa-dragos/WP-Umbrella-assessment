import { Queue, Worker } from "bullmq";
import { getRedisConnection } from "./getRedisConnection";

export function start() {
  try {
    const queue = new Queue("pings", {
      defaultJobOptions: {
        removeOnComplete: 100, // remove the job after 100 completions otherwise the troubleshooting will be impossible
        removeOnFail: 100, // remove the job after 100 failures otherwise the troubleshooting will be impossible
      },
      connection: getRedisConnection(),
    });

    // we are going to change the frequency of the job to 2 minutes
    queue.add(
      "pings",
      {
        frequency: 1,
      },
      {
        repeat: { pattern: "*/2 * * * *" }, // we repeat every 2 minutes (cron format)
        jobId: "ping-scheduler", // we are going to use the same jobId to avoid creating multiple jobs
      }, 
    );
  } catch (error) {
    console.error("Queue initialization error:", error);
  }

  try {
    const worker = new Worker(
      "pings",
      async (job) => {
        try {
          const response = await fetch(`http://localhost:3000/api/projects`);
          
          if (!response.ok) { // we are checking if the response is ok
            throw new Error(`API request failed with status: ${response.status}`);
          }

          const data = await response.json();

          if (!Array.isArray(data)) { // we are checking if the data is an array
            throw new Error("Expected array of projects from API");
          }

          for (const project of data) {
            const response = await fetch(project.url);

            if (response.status === 200) {
              // =====
              // No need to review this part
              console.log("Ok");
              // =====
            }
          }
        } catch (error) {
          // =====
          // No need to review this part
          // =====
        }
      },
      {
        connection: getRedisConnection(),
      }
    );
  } catch (error) {
    console.log(error);
  }
}

start();
