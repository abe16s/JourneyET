"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import './header.css';
import FilterSearch from './FilterSearch';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/Lalibela-bg-2.jpg')" }}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white flex items-center">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 mr-2 icon-color">
                <g>
                  <path d="m421 407c-12.406 0-22.5 10.094-22.5 22.5v7.5h-45.621l-29.407-340.146c-.335-3.877-3.58-6.854-7.472-6.854-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5c4.143 0 7.5-3.357 7.5-7.5 0-37.22-30.28-67.5-67.5-67.5s-67.5 30.28-67.5 67.5c0 4.143 3.357 7.5 7.5 7.5 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-3.892 0-7.137 2.977-7.472 6.854l-29.407 340.146h-45.621v-7.5c0-12.406-10.094-22.5-22.5-22.5s-22.5 10.094-22.5 22.5v75c0 4.143 3.357 7.5 7.5 7.5h360c4.143 0 7.5-3.357 7.5-7.5v-75c0-12.406-10.094-22.5-22.5-22.5zm-83.176 30h-41.73v-302h15.62zm-106.918-75h50.188v75h-50.188zm-29.323-242 1.297-15h106.24l1.297 15zm2.268-58.587c3.026-26.092 25.258-46.413 52.149-46.413s49.123 20.321 52.149 46.413c-8.546 3.192-14.649 11.441-14.649 21.087 0 2.63.465 5.152 1.298 7.5h-77.596c.833-2.348 1.298-4.87 1.298-7.5 0-9.646-6.103-17.895-14.649-21.087zm-3.565 73.587h15.62v91c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-91h50.188v212h-50.188v-91c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v181h-41.73zm198.214 317v15h-285v-15zm-300 45h-15v-67.5c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5zm15 0v-15h285v15zm315 0h-15v-67.5c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5z" fill="currentColor"></path>
                </g>
              </svg>
              JourneyET
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className={`flex space-x-4 text-black font-bold ${menuOpen ? '' : 'hidden'} md:flex`}>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <Link href="/destinations" legacyBehavior><a>Destinations</a></Link>
            <Link href="/notification" legacyBehavior><a>Notification</a></Link>
            <Link href="/about" legacyBehavior><a>About</a></Link>
            <Link href="/contact" legacyBehavior><a>Contact</a></Link>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <Link href="/signup" legacyBehavior>
            <a className="bg-yellow-300 text-white py-2 px-4 rounded font-bold">SIGN UP</a>
          </Link>
        </div>
      </div>
      <div className="container flex mx-auto px-32 text-center lg:items-start">
        <div className="header-title">
          <h1 className=" font-bold text-white leading-tight">
            <span className="block w-full">To the Land</span>
            <span className="block w-full">of <span className="text-yellow-300">Origin</span></span>
            <span className="block w-full text-yellow-300 mt-">ETHIOPIA</span>
          </h1>
        </div>
        <FilterSearch />
      </div>
    </header>
  );
};

export default Header;
