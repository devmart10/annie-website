import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

import data from "../data/personal.json";

// TODO refactor the setExpanded(false) code
// this might be address when refactoring SEO to be page specific

const linkArray = [
  {
    link: "/tutoring",
    title: "Tutoring",
  },
  {
    link: "/nanny",
    title: "Nannying",
  },
  {
    link: "/vocal-coach",
    title: "Vocal Coaching",
  },
  {
    link: "/pricing",
    title: "Pricing",
  },
  //   {
  //     link: "/testimonials",
  //     title: "Testimonials",
  //   },
  {
    link: "/contact",
    title: "Contact",
  },
];

const Links = () => (
  <>
    <ul
      className={`${styles.links} px-4 sm:px-8 py-4 flex flex-wrap text-primary sm:text-lg sm:justify-between items-center my-container`}
    >
      {linkArray.map(({ link, title }) => (
        <Link as="li" href={link} key={link}>
          <a className={`mr-4 sm:mr-0 hover:no-underline ${styles["header-link"]}`}>{title}</a>
        </Link>
      ))}
    </ul>
  </>
);

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="mb-4">
      <div className={`text-gray-100 shadow-lg ${styles.bg}`}>
        <div className={`${styles.wrapper} px-4 py-4 my-container  ${expanded && styles.expand}`}>
          <div className="flex items-center">
            <Link href="/">
              <a className="text-3xl font-normal hover:no-underline" onClick={() => setExpanded(false)}>
                Soul-Centered Services
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Links></Links>
    </header>
  );
};

export default Header;
