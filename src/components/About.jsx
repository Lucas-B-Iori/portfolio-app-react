import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Ola, me chamo Lucas Iori e este é meu site.</p>
            </div>
            <div>
              <p>Gosto de estudar programação, sempre tento aprender algo novo dentro da área, sou iniciante e ainda não encontrei minha primeira vaga dentro do mercadi de trabalho. Estou buscando ela, mas enquanto não consigo tenho feito mais alguns desafios envolvendo códigos e aprendido o maximo possível.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
