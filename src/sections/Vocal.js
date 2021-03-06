import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Vocal = () => {
  return (
    <>
      <section id='singing-description' className='wow'>
        <div className='mb-8 md:my-16 section'>
          <h1 className='font-bold text-b-yellow'>Singing Lessons</h1>
          <p>
            Are you someone that’s excited or anxious about singing but have never gotten the support you’ve needed to grow your inner and outer voice? Freeing your vocal chords can actually assist in
            reducing anxiety and depression, and help to increase self-confidence. Working with your body to access your inner voice also helps you access your inner resilience and creativity.
          </p>
          <p>
            I have been a singer since before I was born! I absolutely love singing and holding a space for clients to grow and come into their unique vocal expression. I incorporate Psycho-Spiritual
            methodologies to enhance self-confidence. The main key to singing from the Soul is accessing your inner truth from within, and freeing your expression. We work on this lovingly.
          </p>
        </div>
      </section>

      <section id='singing-schedule' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-b-yellow'>Book a consultation</h2>
          <p>
            To find out more about my services, I offer a free 20-minute consultation. I'm flexible with scheduling and am confident working with all kinds of people. Click the link and it will
            redirect you to a Google Form, where you can provide your contact details. I will reach out to you within 3 days to set up our consultation. I look forward to hearing from you!
          </p>
          <div className='inline-flex items-center p-4 text-white rounded-full bg-b-purple'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLScC9H1ULN8cfCZx8VPR2oYwg7dcnoh0pNrIrGagyAXv5Gryrg/viewform'
              target='_blank'
              className='mr-2 font-normal hover:no-underline'
              onClick={() => setExpanded(false)}
            >
              Book a consultation
            </a>
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
      </section>

      <section id='singing-pricing' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-b-yellow'>Pricing</h2>
          <p>$45 per hour and some sliding scale slots available.</p>
        </div>
      </section>

      <section id='singing-forms' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-b-yellow'>Forms</h2>
          <p>
            Contract to read and sign and send back before the first session please. No obligation for a certain period of time, just understanding of what services entail. Clients do find that at
            least 3-4 months of practices are helpful.
          </p>
          <li>
            <a href='#'>Singing Lessons Contract</a>
          </li>
        </div>
      </section>

      <section id='singing-testimonials' className='wow'>
        <div className='mb-8 md:mb-16 section'>
          <h2 className='font-bold text-b-yellow'>Testimonials (References Available)</h2>
          <ul className='pl-4 list-disc'>
            <li>
              <p>
                "Annie is a very thoughtful and understanding voice instructor. I have never taken voice lessons before, but she went at a good pace, pushing me to get better, but always making me
                feel comfortable. I have been surprised at my progress over the past few weeks, and I’m very grateful that I found her to work with me." <span className='italic'>~Zac P.</span>
              </p>
            </li>
            <li>
              <p>
                "Annie is one of a kind. Learning with Annie helped me to unlearn past notions that were no longer serving me in order to truly express my voice. Annie is always professional and
                understanding. Every time I meet with Annie I feel she has learned new things to better herself and her teachings. Interactions with Annie guarantee growth & inspire wonder. I highly
                recommend Annie as a teacher, coach, nanny, and friend. "<span className='italic'>~Maggie M.</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Vocal;
