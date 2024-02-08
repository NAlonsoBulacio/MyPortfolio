import React from 'react';

const Welcome = () => {
  return (
    <div className='mx-auto max-w-[1223px] h-full flex items-center'>
      <div className='w-2/3 text-white'>
        <h1 className='font-poppins-900 text-8xl text-left pl-4'>HOLA! Soy Nico.</h1>
        <h3 className='text-left text-2xl pl-4'>Soy <span>Full Stack Developer</span></h3>
        <p className='font-poppins-200 text-left text-lg pl-4'>
          I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (in case you've got an empty canvas layin' around 🎨). Let's connect!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
