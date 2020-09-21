import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Nanny = () => {
  return (
    <>
      <section id='nanny-description' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h1 className='font-bold text-primary'>Nannying</h1>
          <p>
            Are you feeling overwhelmed and noticing that your child or children are needing more support? Most parents and children need extra support. I can provide the support and co-regulation
            that children need to feel safe and to be able to learn to be more cooperative and grow. When the body feels safe, the brain comes on line and can think more clearly! This is helpful for
            the whole family, and I as a nanny seek to support not only the children, but the parents as well.
          </p>
          <p>
            I have been a kind, generous and loving nanny and babysitter for over 10 years. I practice loving boundaries, with words that acknowledge your children as their own unique, beautiful
            beings. I am all about facilitating a space for kids and families to feel safe, and come into their individual and positive traits.
          </p>
          <p>
            I studied Child Development in Undergrad, and will be specializing in Marriage and Family Therapy as I become a Licensed Therapist in the next few years. I am First Aid and CPR trained, as
            creating a safe space for your children is number one, with learning and fun being important as well.
          </p>
        </div>
      </section>

      <section id='nanny-schedule' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-primary'>Schedule a Consultation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum quos facilis nisi beatae dignissimos harum voluptatum aut natus minima aliquam, iste deleniti veritatis distinctio
            debitis atque non at temporibus quidem necessitatibus odio nesciunt? Reprehenderit veritatis ducimus fuga est voluptatum. I offer a free 20- minute consultation.
          </p>
          <Link href='#'>
            <div className='inline-flex items-center p-4 text-white rounded-full bg-b-purple'>
              <a className='mr-2 font-normal hover:no-underline' onClick={() => setExpanded(false)}>
                Schedule a consultation
              </a>
              <FaArrowRight></FaArrowRight>
            </div>
          </Link>
        </div>
      </section>

      <section id='nanny-pricing' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-primary'>Pricing</h2>
          <p>$25 per hour and some sliding scale slots available.</p>
        </div>
      </section>

      <section id='nanny-forms' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-primary'>Forms</h2>
          <p>
            Contract to read and sign and send back before the first session please. No obligation for a certain period of time, just understanding of what services entail. Clients do find that at
            least 3-4 months of practices are helpful.
          </p>
          <li>
            <a href='#'>Singing Lessons Contract</a>
          </li>
        </div>
      </section>

      <section id='nanny-testimonials' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-primary'>Testimonials (References Available)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum quos facilis nisi beatae dignissimos harum voluptatum aut natus minima aliquam, iste deleniti veritatis distinctio
            debitis atque non at temporibus quidem necessitatibus odio nesciunt? Reprehenderit veritatis ducimus fuga est voluptatum.
          </p>
          <p>
            I value and appreciate the time I spend tutoring anyone and everyone. I have advanced skills in courses ranging from Math to English to Social Studies and Science. Allowing your child to
            feel safe as we go into subjects that are challenging for them is so important. I attune to their needs and hold a kind and loving space for growth, learning, and study skills.
          </p>
        </div>
      </section>
    </>
  );
};

export default Nanny;
