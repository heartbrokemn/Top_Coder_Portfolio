// components/Typewriter.tsx
"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
      <div className=" text-2xl md:text-3xl text-center flex max-w-md gap-2 font-bold text-purple-500">
          <span className=" text-center">I am Expert in  </span>
      <Typewriter
        options={{
          strings: [
            " Next.js 15",
            "TypeScript.",
            "Python.",
            "Sanity CMS.",
         
            "AI Chatbot.",
        
            
            "Tailwind Css.",
            "Fast Typist.",
            "Freelancer.",
          ],
          autoStart: true,
          loop: true,
          delay: 60,
        }}
      />
    </div>
  );
}
