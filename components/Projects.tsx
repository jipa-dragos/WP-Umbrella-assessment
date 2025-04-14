"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tag } from "./Tag";

// We're Defining proper types for the data
interface Project {
  id: number;
  name: string;
  tags: string[];
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]); // added type to state
  const [isLoading, setIsLoading] = useState<boolean>(true); // added loading state
  const [error, setError] = useState<string | null>(null); // added error state

  // we're using another useEffect to fetch the data more cleanly and cleans up to avoid memory leaks and race conditions
  // and handle the loading and error states
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getProjects = async () => {
      try {
        const userId = "1";
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/api/projects?userId=${userId}`, { signal });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        const error = err as Error;
        if (error instanceof Error && error.name !== 'AbortError') {
          setError('Failed to fetch projects');
          console.error(err);
        }
      
      } finally {
        setIsLoading(false);
      }
    };

    getProjects();
    
    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading) return <div>Loading projects...</div>; // we could add a spinner here
  if (error) return <div>Error: {error}</div>; // we could add a retry button here or something
  if (projects.length === 0) return <div>No projects found.</div>; // we could add a button to create a new project here

  return (
    <div className="space-y-2">
      {projects.map((project) => (
        // we added the key here
        <div key={project.id} className="rounded p-2 bg-white"> 
          <div className="flex items-center gap-2">
          {project.tags.map((tag, index) => (
              <Tag tag={tag} key={`${project.id}-tag-${index}`} /> // improved key generation
            ))}
          </div>
          <p>
            (Id: {project.id}) Name: {project.name}
          </p>
          <Link href={`/projects/${project.id}`} className="underline">
            View project detail
          </Link>
        </div>
      ))}
    </div>
  );
}
