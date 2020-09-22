import React from 'react';
import { FaUser } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='flex flex-col items-center pt-4 mb-4 md:my-16'>
        {/* <div className='relative hidden md:block md:flex-shrink-0'>
          <img src='https://picsum.photos/500/500' alt='' className='w-full h-auto rounded-lg' />
          <div className='absolute inset-0 w-full h-full bg-white opacity-75'></div>
        </div> */}
        <div className='flex flex-col justify-between mb-24'>
          <h1 className='flex-shrink-0 m-0 mr-8 leading-none md:text-6xl md:mb-4 md:font-light'>Soul-Centered Services</h1>
          <p className='mt-4 md:text-2xl'>
            Soul-Centered Services is a conscious and kind tutoring, nannying, and singing lessons service. Emphasizing a positive learning environment, Soul-Centered Services focuses on assisting you
            and/or your child in developing a growth mindset and skills to fulfill any goal.
          </p>
        </div>
        <div className='flex items-center justify-between mb-16 mr-auto'>
          <p className='max-w-3xl py-4 '>
            <h1 className='m-0 mr-8 leading-none md:text-4xl md:mb-4 md:font-light'>Tutoring</h1>
            Tutoring includes K-12 studies, with an emphasis on English, Social Studies, Science, Arts, Math, and more. As a holistic-centered service, fundamental beliefs include child-centered
            growth, meeting the individual or family wherever they are at, and emphasizing skills and growing in places that need attention. As well, with a background in theater and music,
            Soul-Centered Services can include these art forms into the studies to create a well-rounded learning environment.
          </p>
        </div>
        <div className='flex items-center justify-between mb-16 ml-auto'>
          <p className='max-w-3xl p-4 text-right'>
            <h1 className='m-0 leading-none text-right md:text-4xl md:mb-4 md:font-light'>Nannying</h1>
            Nannying includes attentive and caring childcare, fulfilling the family’s needs. This can include housework, homework, cooking, play, creating, and rest. As I have studied Developmental
            Psychology, I know how important it is for children to have their needs met, and am present with your family to assist to make things easier for the entire family.
          </p>
        </div>
        <div className='flex items-center justify-between mb-16 mr-auto'>
          <p className='max-w-3xl py-4 '>
            <h1 className='m-0 mr-8 leading-none md:text-4xl md:mb-4 md:font-light'>Voice Lessons</h1>
            Voice Lessons include singing skill-building, working on tone, projection, confidence, and vocal abilities. Each week, we focus on new goals, songs, artists, and genres to develop the
            voice. We discuss progress and identify growth and needs arising from the previous week of practice. Warm-ups and exercises are taught, while building a repertoire of many songs. We then
            discuss goals for the following week. Lessons are very fun and active, as well as professional and goal-oriented, working with your needs.
          </p>
        </div>
        <div className='flex items-center justify-between mb-16 ml-auto'>
          <p className='max-w-3xl py-4 text-right '>
            <h1 className='m-0 leading-none text-right md:text-4xl md:mb-4 md:font-light'>Therapeutic Growth</h1>
            All three services can include therapeutic and/or spiritual growth techniques to increase self-confidence and grow the ability to feel comfortable, as well as skill growth. The goal is to
            live more from the authentic wholeness of the Soul (Carl Jung’s Perspective). As the practitioner is in the process of a Masters in Counseling, psychotherapeutic techniques can be included
            or not, depending on the needs of the family or student. This is a very collaborative space, focused on facilitating growth, care, and safety.
          </p>
        </div>
        {/* <div className='my-16'>
          <p className=''>
            <h1 className='m-0 mr-8 leading-none text-right md:text-4xl md:mb-4 md:font-light'>Therapeutic Growth</h1>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
