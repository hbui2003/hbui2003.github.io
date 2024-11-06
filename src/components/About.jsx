import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className='text-xl mt-20'>
          Throughout my academic journey, I've excelled in challenging courses like Data Structures, Algorithms, and Operating Systems. My hands-on experience as an IT Support Technician has honed my technical and troubleshooting skills, significantly improving system reliability and uptime for university facilities
          
          
        </p>
        <br />
        <p className='text-xl'>
        Beyond academics, I've led and contributed to impactful projects, such as developing a Java-based sales subsystem 
          with integrated data processing capabilities and building a responsive Tic Tac Toe web application. My diverse skill 
          set includes proficiency in Java, C/C++, Python, JavaScript, MySQL, and frameworks like React and Node.js.
        </p>
      </div>
    </div>
  )
}

export default About
