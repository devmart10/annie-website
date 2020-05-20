import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

import data from "../data/personal.json";

// TODO refactor the setExpanded(false) code
// this might be address when refactoring SEO to be page specific

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="mb-4 text-gray-100 bg-primary">
      <div className={`${styles.wrapper} px-4 py-2 my-container ${expanded && styles.expand}`}>
        <div className="flex items-center">
          <button className="p-1 mr-2 border rounded flex-center" onClick={() => setExpanded(e => !e)}>
            <FaBars className="w-6 h-6"></FaBars>
          </button>
          <Link href="/">
            <a className="text-3xl font-light hover:no-underline" onClick={() => setExpanded(false)}>
              {data.full_name}
            </a>
          </Link>
        </div>
        <ul className={`${styles.links}`}>
          <li>
            <Link href="/nanny">
              <a className="underline" onClick={() => setExpanded(false)}>
                Nannying
              </a>
            </Link>
          </li>
          <li>
            <Link href="/vocal-coach">
              <a className="underline" onClick={() => setExpanded(false)}>
                Vocal Coaching
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tutoring">
              <a className="underline" onClick={() => setExpanded(false)}>
                Tutoring
              </a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="underline" onClick={() => setExpanded(false)}>
                Fees
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/testimonials">
              <a className="underline" onClick={() => setExpanded(false)}>
                Testimonials
              </a>
            </Link>
          </li> */}
          <li>
            <Link href="/contact">
              <a className="underline" onClick={() => setExpanded(false)}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
