import React from 'react'
import farmartT from '../assets/portfolio/oop_project.jpg'
import Tictactoe from '../assets/portfolio/TicTacToe.png'
import navbar from '../assets/portfolio/navbar.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


const Project = () => {
  const projects = [
    {
      id: 1,
      src: farmartT,
      title: 'OOP Farmart Project',
      description: 'An object-oriented programming project focused on farm management tools and interfaces.',
      link: 'https://github.com/hbui2003/OOP_FarMartT_System', // Replace with your GitHub URL
    },
    {
      id: 2,
      src: Tictactoe,
      title: 'Tic Tac Toe Game',
      description: 'A classic Tic Tac Toe game implemented in JavaScript, HTML, and CSS.',
      link: 'https://github.com/yourusername/tic-tac-toe', // Replace with your GitHub URL
    },
    {
      id: 3,
      src: farmartT,
      title: 'Another Farmart Project',
      description: 'A different version of the Farmart project with extended features.',
      link: 'https://github.com/yourusername/another-farmart-project', // Replace with your GitHub URL
    },
    {
      id: 4,
      src: reactSmooth,
      title: 'Smooth Scroll Project',
      description: 'A React project featuring smooth scrolling navigation between sections.',
      link: 'https://github.com/yourusername/smooth-scroll-project', // Replace with your GitHub URL
    },
    {
      id: 5,
      src: navbar,
      title: 'Responsive Navbar',
      description: 'A fully responsive and modern navbar built using React and Tailwind CSS.',
      link: 'https://github.com/yourusername/responsive-navbar', // Replace with your GitHub URL
    },
    {
      id: 6,
      src: reactWeather,
      title: 'Weather App',
      description: 'A weather forecasting app built with React and OpenWeather API integration.',
      link: 'https://github.com/yourusername/weather-app', // Replace with your GitHub URL
    },

  ]
  return (
    <div name='Projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-16 pb-24'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='pt-6'>Check out some of my work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({ id, src, title, description, link }) => (
            <a
              key={id}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300'
            >
              <img src={src} alt={title} className='h-48 w-full rounded-md' />
              <div className='p-4'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <p className='text-gray-400 text-sm mt-2'>{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
