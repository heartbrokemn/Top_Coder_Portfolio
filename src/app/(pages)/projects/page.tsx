// app/projects/page.tsx

import { FetchProject } from "@/sanity/lib/fetchproject";
import Image from "next/image";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  technologies?: string[];
  github?: string;
  live?: string;
}

export default async function ProjectsPage() {
  const projects: Project[] = await FetchProject();

  return (
    <div className="min-h-screen bg-[#000116] text-white px-6 py-30">
      <h1 className="text-4xl font-bold text-purple-500 mb-10 text-center">My Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj: Project) => (
          <div key={proj._id} className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition-all">
            <Image
              src={proj.image?.asset?.url || "/fallback-image.jpg"}
              alt={proj.title}
              width={500}
              height={300}
              className="rounded-xl w-full h-56 object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{proj.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{proj.description}</p>

            <div className="mt-3 flex flex-wrap gap-2 text-sm text-purple-300">
              {proj.technologies?.map((tech: string, index: number) => (
                <span key={index} className="bg-purple-800 px-2 py-1 rounded-full">{tech}</span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              {proj.github && (
                <Link href={proj.github} target="_blank" className="text-blue-400 hover:underline">
                  GitHub
                </Link>
              )}
              {proj.live && (
                <Link href={proj.live} target="_blank" className="text-green-400 hover:underline">
                  Live
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
