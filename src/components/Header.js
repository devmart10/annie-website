import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Header.module.css';

// TODO refactor the setExpanded(false) code
// this might be address when refactoring SEO to be page specific

const linkArray = [
  {
    link: '/tutoring',
    title: 'Tutoring',
  },
  {
    link: '/nanny',
    title: 'Nannying',
  },
  {
    link: '/singing-lessons',
    title: 'Singing Lessons',
  },
  // {
  //   link: '/pricing',
  //   title: 'Pricing',
  // },
  //   {
  //     link: "/testimonials",
  //     title: "Testimonials",
  //   },
  // {
  //   link: '/contact',
  //   title: 'Contact',
  // },
];

const Links = () => (
  <>
    <ul className={`${styles.links} px-4 sm:px-8 py-4 flex flex-wrap text-primary sm:text-lg sm:justify-between items-center my-container`}>
      {linkArray.map(({ link, title }) => (
        <Link href={link} key={link}>
          <a className={`mr-4 sm:mr-0 hover:no-underline ${styles['header-link']}`}>{title}</a>
        </Link>
      ))}
    </ul>
  </>
);

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className='mb-4'>
      <div className={`text-gray-100 shadow-lg ${styles.bg}`}>
        <div className={`${styles.wrapper} px-4 py-4 my-container  ${expanded && styles.expand}`}>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <a className='text-3xl font-normal text-fancy hover:no-underline' onClick={() => setExpanded(false)}>
                Soul-Centered Services
              </a>
            </Link>

            <Link href='#'>
              <div className='flex items-center p-4 rounded-full bg-b-faded-purple'>
                <a className='mr-2 font-normal hover:no-underline' onClick={() => setExpanded(false)}>
                  Schedule a consultation
                </a>
                <FaArrowRight></FaArrowRight>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Links></Links>
    </header>
  );
};

export default Header;
