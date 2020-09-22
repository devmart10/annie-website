import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Tutoring = () => {
  return (
    <>
      <section id='tutoring-description' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h1 className='font-bold text-primary'>Tutoring</h1>
          <p>
            Are you and/ or your children feeling overwhelmed by schoolwork? Is it affecting your relationship and making things extra difficult? Most children and parents need extra support. When we
            feel supported, we’re able to feel calmer and more resilient. The brain then comes online to be able to learn more.
          </p>
          <p>
            I value and appreciate the time I spend tutoring anyone and everyone. I have advanced skills in courses ranging from Math to English to Social Studies and Science. Allowing your child to
            feel safe as we go into subjects that are challenging for them is so important. I attune to their needs and hold a kind and loving space for growth, learning, and study skills.
          </p>
        </div>
      </section>

      <section id='tutoring-schedule' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-primary'>Schedule a Consultation</h2>
          <p>
            To find out more about my services, I offer a free 20-minute consultation. I'm flexible with scheduling and am confident working with all kinds of people. Click the link and it will
            redirect you to a Google Form, where you can provide your contact details. I will reach out to you within 3 days to set up our consultation. I look forward to hearing from you!
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

      <section id='tutoring-pricing' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-primary'>Pricing</h2>
          <p>$25 per hour and some sliding scale slots available.</p>
        </div>
      </section>

      <section id='tutoring-forms' className='wow'>
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

      <section id='tutoring-testimonials' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-primary'>Testimonials (References Available)</h2>
          <ul className='pl-4 list-disc'>
            <li>
              <p>
                One of my biggest struggles was being able to help my daughter Bianca with her studies. When I found Annie was willing to meet with my daughter and tutor her, I was open to the idea.
                My daughter was behind in her school work and was finding it frustrating to catch up and maintain with her studies. Annie’s patience and approach with Bianca in her tutoring made a
                huge impact with a very successful outcome. I would definitely recommend Annie Lesny and am glad to say that we are continuing to use her service for Bianca’s sophomore school year.
                <span className='italic'> ~Reynaldo G.</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Tutoring;
