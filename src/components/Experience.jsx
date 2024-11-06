import React from 'react'
import css from '../assets/experience/css.png'
import html from '../assets/experience/html.png'
import javascript from '../assets/experience/javascript.png'
import react from '../assets/experience/react.png'
import graphql from  '../assets/experience/graphql.png'
import github from '../assets/experience/github.png'
import tailwind from '../assets/experience/tailwind.png'
import nextjs from '../assets/experience/nextjs.png'

 
const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: github,
      title: 'Github',
      style: 'shadow-gray-500'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500'
    },
    {
      id: 7,
      src: nextjs,
      title: 'NextJS',
      style: 'shadow-white'
    },
    {
      id: 8,
      src: graphql,
      title: 'GraphQL',
      style: 'shadow-pink-500'
    },
  ]
  return (
    <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white pt-16 '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {
          experiences.map(({id, src, title, style}) => (
            <div key={id} 
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto' />
          <p className='mt-4'>{title}</p>
          </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
