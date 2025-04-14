import { Projects } from "components/Projects";

export default function Home() {
  return (
    <div className="bg-slate-50 p-4 w-full h-full">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to <a href="https://nextjs.org">WP Umbrella</a>
      </h1>
      <Projects />
    </div>
  );
}
