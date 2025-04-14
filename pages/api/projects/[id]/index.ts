import type { NextApiRequest, NextApiResponse } from "next";
import { PROJECTS } from "data/projects";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const project = PROJECTS.find((project) => project.id === parseInt(id as string));

  res.status(200).json(project);
}
