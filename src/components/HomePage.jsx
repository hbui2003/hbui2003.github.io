import React from 'react';
import HuyImage from '../assets/PhotoshopPreview_Image_2024-11-05.png';
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed'; // Import correctly

const HomePage = () => {
  return (
    <div name='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-16 md:pt-16'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full md:w-1/2'>
          {/* Greeting Text */}
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>Hello, it's me</h1>

          {/* Name */}
          <h2 className='text-5xl sm:text-7xl font-bold text-white'>Huy Bui</h2>

          {/* Typing Animation */} 
          <div className='text-white py-5 text-5xl'>
            <span className='mr-2'>I'm a</span> {/* Static white text */}
            <ReactTyped
              strings={[
                "UI/UX Designer",
                "Web Designer",
                "Data Analyst",
                "Content Creator"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className='font-bold glow-effect'
            /> 
          </div>
          <h2 className='text-gray-400 py-4 '>I am Huy Bui, a dedicated and ambitious Computer Science student. With a solid foundation in programming, mathematics, and software engineering, I bring a passion for solving complex problems and a commitment to delivering efficient and innovative solutions. </h2>

          {/* Projects Button */}
          <div>
            <Link
              to='Projects'
              smooth
              duration={500}
              offset={-80}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Projects
              <span className='group-hover:rotate-90 duration-300'>
                <TiArrowRightOutline size={20} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className='mt-8 md:mt-0 md:w-1/2 md:ml-10'>
          <img
            src={HuyImage}
            alt='my profile'
            className='rounded-full mx-auto w-2/3 md:w-3/4 border-4 border-cyan-500 shadow-lg'
            style={{
              boxShadow: '0 0 20px 5px rgba(0, 255, 255, 0.6)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;



// code with animation appear
// import React from 'react';
// import HuyImage from '../assets/PhotoshopPreview_Image_2024-11-05.png';
// import { TiArrowRightOutline } from "react-icons/ti";
// import { Link } from 'react-scroll';
// import { ReactTyped } from 'react-typed'; // Import correctly
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div name='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-16 md:pt-16'>
//       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
//         <motion.div
//           className='flex flex-col justify-center h-full md:w-1/2'
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Greeting Text */}
//           <motion.h1
//             className='text-3xl sm:text-4xl font-bold text-white'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Hello, it's me
//           </motion.h1>

//           {/* Name */}
//           <motion.h2
//             className='text-5xl sm:text-7xl font-bold text-white'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Huy Bui
//           </motion.h2>

//           {/* Typing Animation */}
//           <div className='text-white py-5 text-5xl'>
//             <span className='mr-2'>I'm a</span> {/* Static white text */}
//             <ReactTyped
//               strings={[
//                 "UI/UX Designer",
//                 "Web Designer",
//                 "Data Analyst",
//                 "Content Creator"
//               ]}
//               typeSpeed={50}
//               backSpeed={30}
//               loop
//               className='font-bold glow-effect'
//             /> 
//           </div>
//           <h2 className='text-gray-400 py-4 '>I am Huy Bui, a dedicated and ambitious Computer Science student. With a solid foundation in programming, mathematics, and software engineering, I bring a passion for solving complex problems and a commitment to delivering efficient and innovative solutions. </h2>

//           {/* Projects Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.4 }}
//           >
//             <Link
//               to='Projects'
//               smooth
//               duration={500}
//               offset={-80}
//               className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
//             >
//               Projects
//               <span className='group-hover:rotate-90 duration-300'>
//                 <TiArrowRightOutline size={20} className='ml-1' />
//               </span>
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Profile Image */}
//         <motion.div
//           className='mt-8 md:mt-0 md:w-1/2 md:ml-10'
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src={HuyImage}
//             alt='my profile'
//             className='rounded-full mx-auto w-2/3 md:w-3/4 border-4 border-cyan-500 shadow-lg'
//             style={{
//               boxShadow: '0 0 20px 5px rgba(0, 255, 255, 0.6)',
//             }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
