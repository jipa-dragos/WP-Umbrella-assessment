"use client";
import { Tag } from "components/Tag";
import { useEffect, useState } from "react";

// we define proper type for project data
interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
}

export default function Home({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null); // we can add the type to state
  const [isLoading, setIsLoading] = useState<boolean>(true); // here too
  const [error, setError] = useState<string | null>(null); // here too


  // we can use async/await to make the code cleaner
  // we can also use the AbortController to cancel the fetch request if the component unmounts
  // this is useful to avoid memory leaks and unnecessary network requests
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProject = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/api/projects/${params.id}`, { signal });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setProject(data);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(`Failed to fetch project details: ${err.message}`);
          console.error(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
    
    return () => { // cleanup function
      controller.abort();
    };
  }, [params.id]); // Add params.id as dependency to make the effect run when the id changes

  if (isLoading) return <div>Loading project details...</div>; /// we could add a spinner here
  if (error) return <div className="text-red-500">Error: {error}</div>; // we could add a retry button here or something
  if (!project) return <div>Project not found</div>; // we could add a button to create a new project here

  return (
    <div className="bg-slate-50 p-4 w-full h-full">
      <h1 className="text-3xl font-bold mb-8">Project: {project.name}</h1>
      <div className="flex items-center gap-2">
        {project.tags.map((tag, index) => ( // we can use index as key here
          <Tag tag={tag} key={`tag-${project.id}-${index}`} /> // improve key by adding project id
        ))}
      </div>
      <p>Id: {project.id}</p>
      <p>{project.description}</p>
    </div>
  );
}
