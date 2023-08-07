import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Meu nome é</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Lucas Bertolassi Iori
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Estudo Engenharia de Software
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Sou um Engenheiro de Software que esta na faculdade em busca de uma primeira vaga profissional. Tenho mais conhecimentos dentro da parte de Front-End, mas posso aprender e trabalhar com outras áreas também.
        </p>
        <div>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                Ver trabalho
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
