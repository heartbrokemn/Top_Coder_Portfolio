"use client";
import { motion } from "framer-motion";
import React from "react";

const ResumePage = () => {
  return (
    <div className=" min-h-screen md:px-16 bg-[#000116] text-white px-6 py-30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 border-b-4 border-purple-500 inline-block">
            My Resume
          </h1>
          <p className="text-gray-300 mb-6">
            Explore my experience, education and skills that define my journey in tech.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <div className="border-l-2 border-purple-600 pl-4 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Full Stack Developer</h3>
                <p className="text-gray-400 text-sm">Stylish Rascals | 2023 - Present</p>
                <p>Created modern web apps using Next.js, Tailwind, Sanity and Supabase.</p>
              </div>
              {/* Add more experience if needed */}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <div className="border-l-2 border-purple-600 pl-4 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Intermediate (ICS)</h3>
                <p className="text-gray-400 text-sm">Govt. College | 2021 - 2023</p>
              </div>
            </div>
          </div>

          <a
            href="/cv/shoaib.pdf"
            download
            className="inline-block bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-6 py-3 rounded-lg mt-4"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-6">
            {[
              { name: "HTML / CSS", level: "95%" },
              { name: "JavaScript / TypeScript", level: "85%" },
              { name: "React / Next.js", level: "90%" },
              { name: "Tailwind CSS", level: "90%" },
              { name: "Sanity / Supabase", level: "80%" },
              { name: "Photoshop / Illustrator", level: "98%" },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-1">
                  <motion.div
                    className="bg-purple-500 h-3 rounded-full"
                    style={{ width: skill.level }}
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
