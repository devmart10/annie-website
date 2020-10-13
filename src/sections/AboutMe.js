import React from 'react';

const AboutMe = () => {
  return (
    <section id='about-me' className='wow'>
      <div className='mb-4 section'>
        <h2 className='font-bold text-b-yellow'>About Annie</h2>
        <div className='flex items-center'>
          <img src='/image1.jpg' alt='Profile' className='w-32 h-auto mr-4 rounded-lg shadow-lg md:mr-8 md:w-64' />
          <div>
            <p className=''>
              Hi there! My name is Annie Lesny. I am a loving, hard-working, and dedicated individual seeking to facilitate a space for you and/or your family’s needs! I am currently a Masters student
              studying to be a Psychotherapist, focusing on the integration of Jungian and Somatic Psychology. I am a singer and musician, and a Summa Cum Laude graduate, and would love to be there to
              assist in your growth. I specialize and am experienced in Nannying, Tutoring, and Voice Lessons. All of which are available online right now and in-person as things shift, and for
              sliding scale fees. I am all about tuning into each person’s unique Soul development, and look forward to being here for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
