import Image from 'next/image'
import React from 'react'
import TypewriterText from './typewriter'

const HeroSection = () => {
  return (
    <main className="bg-[#000116] text-white  py-12 px-4 md:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left w-full  md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold md:mt-7 mb-4">
            WELCOME TO TOP UP CODER
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-purple-400 mb-4">
            Hi, my name is Shoaib Khan
          </h2>

          {/* Typewriter Effect */}
          <div className="text-lg md:text-sm  text-purple-300 mb-6">
            <TypewriterText />
          </div>

          <p className="text-gray-400 text-sm  md:text-base max-w-xl ">
            I am a passionate developer and designer who loves turning ideas into reality
            through beautiful and functional websites. Whether its crafting clean code,
            designing intuitive UIs, or solving complex problems — I am always excited to take on a new challenge.
          </p>

          {/* Technologies */}
          <ul className="flex justify-center md:justify-start gap-4 opacity-70 mt-4">
            {["t1", "t2", "t3", "t4", "t5"].map((tech, idx) => (
              <li key={idx}>
                <Image src={`/images/${tech}.png`} alt={tech} width={30} height={30} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/herobg.jpg"
            alt="Hero background"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full max-w-sm"
          />
        </div>
      </div>
    </main>
  )
}

export default HeroSection
