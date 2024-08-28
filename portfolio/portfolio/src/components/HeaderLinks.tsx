import { useState, useEffect } from 'react';
import { TfiAlignJustify } from "react-icons/tfi";
import Animate from '../animate/Animate';
import { links } from "../enum/Datas";
import '../CSS/Header.css';
import "../App.css";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export default function HeaderLinks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id='header-bg' className="h-screen w-full shadow-2xl shadow-black">
      <header className="flex justify-center items-center">
        <nav id='nav-header' className={`mt-20 bg-gray-700 bg-opacity-60 p-2 pl-12 pr-12 rounded-2xl shadow-black shadow-2xl fixed ${isMobile ? "w-full" : ""}`}>
          {/* Büyük ekranlarda gösterilecek */}
          <ul id='nav-links' className={`flex m-0 mx-auto gap-16 text-gray-200 text-2xl ${isMobile && !menuOpen ? "hidden" : "flex"}`}>
            {links.map((link) => (
              <a
                href={link.href}
                key={link.id}
                className="flex items-center justify-center gap-1 hover:cursor-pointer hover:text-white transition-all duration-500"
                onClick={(e) => {
                  document.querySelector(`#${link.id}`).scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                <span className="pl-1 text-xl p-2 font-bold">{link.title}</span>
              </a>
            ))}
          </ul>

          {/* Küçük ekranlarda gösterilecek Menü ikonu */}
          {isMobile && (
            <div onClick={toggleMenu} className="cursor-pointer">
              <TfiAlignJustify id='little-nav-icon' className="text-white text-3xl" />
            </div>
          )}
        </nav>
      </header>

      {/* HOME INFO ELEMENTS */}
      <div id='home-info-animate' className="text-center mt-48 mr-32 text-white flex flex-col justify-center items-center pr-48">
        <Animate type="scroll" /> <br />
        <div id='header-info-div' className='flex flex-col gap-9 font-bold text-8xl justify-center items-start'>
          <h1 className='opacity-70'>I am transforming,</h1>
          <h1 className='ml-16'>Technology to art,</h1>
          <h1 className='ml-32'>Projects to success...</h1>
        </div>
      </div>

      {/* Buttons */}
      <div id='home-info-buttons' className='flex justify-start ml-60 mt-32 gap-12 items-center text-white'>
        <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            id='home-info-button-1'
            className='border border-black bg-blue-400 py-2 pr-24 pl-24 rounded-3xl hover:bg-blue-800 duration-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-black'>
          Contact
        </button>
        <button 
                    onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}

        id='home-info-button-2' className="border border-gray-400 py-2 pl-32 pr-32 rounded-3xl opacity-75 hover:bg-white hover:text-black transition duration-500">
          About
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-12 h-24 w-16 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition duration-300'>
          ↑
        </button>
      )}
    </div>
  );
}
