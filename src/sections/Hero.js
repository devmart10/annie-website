import React from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { RiParentLine } from 'react-icons/ri';
import { GiMicrophone, GiMusicalNotes } from 'react-icons/gi';

const TextBoxSection = ({ reverse, children, title, Icon }) => {
  return (
    <div className={`flex items-center mb-16 ${reverse && 'flex-row-reverse'}`}>
      <div className={`max-w-3xl py-4 ${reverse && 'text-right'}`}>
        <h1 className='m-0 font-bold leading-none text-b-yellow md:text-4xl md:mb-4'>{title}</h1>
        <p>{children}</p>
      </div>
      {Icon && <Icon className='hidden mx-32 md:w-16 md:h-16 xl:w-32 xl:h-32 md:block text-b-yellow'></Icon>}
    </div>
  );
};

const Hero = () => {
  return (
    <section id='hero'>
      <div className='flex flex-col pt-4 mb-4 md:my-16'>
        <div className='flex flex-col justify-between mb-24'>
          <h1 className='flex-shrink-0 m-0 mr-8 font-bold leading-none text-b-yellow md:text-6xl md:mb-4'>Soul-Centered Services</h1>
          <p className='mt-4 md:text-2xl'>
            Soul-Centered Services is a conscious and kind tutoring, nannying, and singing lessons service. Emphasizing a positive learning environment, Soul-Centered Services focuses on assisting you
            and/or your child in developing a growth mindset and skills to fulfill any goal.
          </p>
        </div>
        <TextBoxSection Icon={FiBookOpen} title='Tutoring'>
          Tutoring includes K-12 studies, with an emphasis on English, Social Studies, Science, Arts, Math, and more. As a holistic-centered service, fundamental beliefs include child-centered growth,
          meeting the individual or family wherever they are at, and emphasizing skills and growing in places that need attention. As well, with a background in theater and music, Soul-Centered
          Services can include these art forms into the studies to create a well-rounded learning environment.
        </TextBoxSection>
        <TextBoxSection reverse Icon={RiParentLine} title='Nannying'>
          Nannying includes attentive and caring childcare, fulfilling the family’s needs. This can include housework, homework, cooking, play, creating, and rest. As I have studied Developmental
          Psychology, I know how important it is for children to have their needs met, and am present with your family to assist to make things easier for the entire family.
        </TextBoxSection>
        <TextBoxSection Icon={GiMicrophone} title='Voice Lessons'>
          Voice Lessons include singing skill-building, working on tone, projection, confidence, and vocal abilities. Each week, we focus on new goals, songs, artists, and genres to develop the voice.
          We discuss progress and identify growth and needs arising from the previous week of practice. Warm-ups and exercises are taught, while building a repertoire of many songs. We then discuss
          goals for the following week. Lessons are very fun and active, as well as professional and goal-oriented, working with your needs.
        </TextBoxSection>
        <TextBoxSection reverse title='Therapeutic Growth'>
          All three services can include therapeutic and/or spiritual growth techniques to increase self-confidence and grow the ability to feel comfortable, as well as skill growth. The goal is to
          live more from the authentic wholeness of the Soul (Carl Jung’s Perspective). As the practitioner is in the process of a Masters in Counseling, psychotherapeutic techniques can be included
          or not, depending on the needs of the family or student. This is a very collaborative space, focused on facilitating growth, care, and safety.
        </TextBoxSection>
      </div>
    </section>
  );
};

export default Hero;
