import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="mb-4 text-gray-100 bg-primary">
      <div className={`${styles.wrapper} px-4 py-2 my-container ${expanded && styles.expand}`}>
        <div className="flex items-center">
          <button className="p-1 mr-2 border rounded flex-center" onClick={() => setExpanded(e => !e)}>
            <FaBars className="w-6 h-6"></FaBars>
          </button>
          <h2 className="mb-0">Annie Lesny</h2>
        </div>
        <ul className={`${styles.links}`}>
          <li>
            <Link href="/nanny">
              <a className="underline">Nannying</a>
            </Link>
          </li>
          <li>
            <Link href="/vocal-coach">
              <a className="underline">Vocal Coaching</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="underline">Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/testimonials">
              <a className="underline">Testimonials</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="underline">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
