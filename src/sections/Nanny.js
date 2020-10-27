import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Nanny = () => {
  return (
    <>
      <section id='nanny-description' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h1 className='font-bold text-b-yellow'>Nannying</h1>
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
          <h2 className='font-bold text-b-yellow'>Book a consultation</h2>
          <p>
            To find out more about my services, I offer a free 20-minute consultation. I'm flexible with scheduling and am confident working with all kinds of people. Click the link and it will
            redirect you to a Google Form, where you can provide your contact details. I will reach out to you within 3 days to set up our consultation. I look forward to hearing from you!
          </p>
          <Link href='#'>
            <div className='inline-flex items-center p-4 text-white rounded-full bg-b-purple'>
              <a className='mr-2 font-normal hover:no-underline' onClick={() => setExpanded(false)}>
                Book a consultation
              </a>
              <FaArrowRight></FaArrowRight>
            </div>
          </Link>
        </div>
      </section>

      <section id='nanny-pricing' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-b-yellow'>Pricing</h2>
          <p>$25 per hour and some sliding scale slots available.</p>
        </div>
      </section>

      <section id='nanny-forms' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-b-yellow'>Forms</h2>
          <p>
            Contract to read and sign and send back before the first session please. No obligation for a certain period of time, just understanding of what services entail. Clients do find that at
            least 3-4 months of practices are helpful.
          </p>
          <li>
            <a href='#'>Nannying Contract</a>
          </li>
        </div>
      </section>

      <section id='nanny-testimonials' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-b-yellow'>Testimonials (References Available)</h2>
          <ul className='pl-4 list-disc'>
            <li>
              <p>
                "Annie has been an amazing asset to our family. From the minute she entered our home, we had every confidence she would have no trouble wrangling our 3 children, with both kindness and
                the structure and boundaries children need. She is self-assured, and competent. And FUN! She brings music and play and joy in her bag of “tricks.” Our children count the sleeps until
                her return. I would recommend her 100%" <span className='italic'>~ Emily G.</span>
              </p>
            </li>
            <li>
              <p>
                "Annie is everything we hope for in a nanny: great with the kids, reliable, dependable, and communicative. Annie was our after-school nanny when our children were five and eight years
                old. We trusted her to drive our children to their various activities, take them to the pool, and explore local parks. The kids loved their time with Annie; we were all sad to wish her
                farewell when she moved away for graduate school. All of us appreciated her positive energy, can-do attitude, and big heart." <span className='italic'>~Lina D.</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Nanny;
