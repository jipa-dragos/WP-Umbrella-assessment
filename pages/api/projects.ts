import type { NextApiRequest, NextApiResponse } from "next";
import { PROJECTS } from "data/projects";

type Data = {
  name: string;
};
// this is the data  
    // id: 1,
    // name: "Project 1",
    // tags: ["blue"],
    // url: "https://wp-umbrella.com",
    // description: "This is a project",
    // userId: 1,

  // assign the type to projects 
type Project = {
  id: number;
  name: string;
  tags: string[];
  url: string;
  description: string;
  userId: number;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // This line simulates database retrieval.
  // but it should only be projects that have the userId === 1 so we must filter them
  const projects: Project[] = PROJECTS.filter((project) => project.userId === 1);
  // const projects = PROJECTS;
  /**
   * The database code is:
   * await prisma.project.findMany()
   */

  res.status(200).json(projects);
}
