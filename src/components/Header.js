import React, { useEffect, useState } from 'react';
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
    link: '/nannying',
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
    <ul className={`${styles.links} px-0 sm:px-0 py-0 flex flex-wrap sm:text-lg sm:justify-between items-center my-container`}>
      {linkArray.map(({ link, title }, i) => (
        <div key={link}>
          <Link href={link}>
            <a className={`mr-4 sm:mr-8 tracking-wide hover:no-underline font-light text-b-yellow ${styles['header-link']}`}>{title}</a>
          </Link>
          {i !== linkArray.length - 1 && <span className='mr-4 font-light tracking-wide sm:mr-8 hover:no-underline text-b-yellow'>|</span>}
        </div>
      ))}
    </ul>
  </>
);

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [stickyState, setStickyState] = useState({
    prevScrollpos: 0,
    visible: true,
  });

  // Hide or show the menu.
  const handleScroll = () => {
    const { prevScrollpos } = stickyState;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setStickyState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyState]);

  return (
    <header className={`fixed z-50 w-full mb-4 ${styles.navbar} ${!stickyState.visible && styles.navbarHidden}`}>
      <div className={`text-gray-100 shadow-lg ${styles.bg}`}>
        <div className={`${styles.wrapper} px-4 py-4 my-container  ${expanded && styles.expand}`}>
          <div className='flex items-center'>
            <div className='flex-col'>
              <Link href='/'>
                <a className='text-3xl font-normal text-fancy hover:no-underline' onClick={() => setExpanded(false)}>
                  Soul-Centered Services
                </a>
              </Link>
              <Links></Links>
            </div>
            <Link href='#'>
              <div className='flex items-center p-4 ml-auto rounded-full bg-b-purple md:bg-b-faded-purple'>
                <a className='mr-2 font-normal hover:no-underline' onClick={() => setExpanded(false)}>
                  Book a consultation
                </a>
                <FaArrowRight></FaArrowRight>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

/**
 * import React, { Component } from "react";
import classnames from "classnames";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}
      >
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </nav>
    );
  }
}
 */
