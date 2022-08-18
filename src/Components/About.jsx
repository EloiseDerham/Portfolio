import React from 'react'
import ParticleBackground from './ParticleBackground';

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'> 
        <div className='flex flex-col justify-center items-center w-full h-full'>        
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>            
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Eloise, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p className='pt-2'>Im passionate about Generative art, AI and Creative coding. My artwork can be viewed on my instagram.
                  Im currently learning p5.js , touch designer and React.                  
                  </p > 
                  <p className='pt-2'>But i'd love to know more about App and Web dev so that i can incorporate my creative side with code!</p> 
                  
              </div>             
            </div>            
        </div>        
      </div>
    );
  };
  
  export default About;