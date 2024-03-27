import { useState } from 'react';
import Logo from './assets/svgs/favico.svg';
import Description from './description';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <section className={`${darkMode ? 'bg-black' : 'bg-white'} text-${darkMode ? 'white' : 'black'} w- scroll-smooth h-screen overflow-auto px-5 pt-5 sm:px-3 sm:py-5 md:overflow-hidden`}>
        <nav className='flex justify-between p-4'>
          <a href="/">
            <img className="w-9 cursor-pointer bg-black rounded-[10rem]" src={Logo} alt="Logo" />
          </a>
          <ul className={`font-semibold gap-11 text-[1.2rem] ${darkMode ? 'text-white' : 'text-black'} hidden sm:flex`}>
            <li className='hover:transition-transform hover:scale-110'><a href="/">Home</a></li>
            <li className='hover:transition-transform hover:scale-110'><a href="">About</a></li>
            <li className='hover:transition-transform hover:scale-110'><a href="/">Projects</a></li>
            <li className='hover:transition-transform hover:scale-110'><a href="/">Reach Me</a></li>
          </ul>
          <div className={` cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`} onClick={toggleDarkMode}>
              {darkMode ? (
                <p className='text-[1.2rem] font-semibold text-[#fff]'>Light Mode</p>
              ) : (
                <p className='text-[1.2rem] font-semibold text-[#000]'>Dark Mode</p>
              )}
            </div>
            <div className="sm:hidden">
            <button className="p-1" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {showMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className={`fixed top-0 right-0 h-full w-1/2 bg-[#71797E] z-10 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden md:block`}>
            <button className="absolute top-0 left-0 mt-10 pl-5" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="font-semibold text-[1.3rem] flex flex-col justify-start h-full gap-8 mt-20 p-5">
              <li className='hover:transition-transform hover:scale-110'><a href="/">Home</a></li>
              <li className='hover:transition-transform hover:scale-110'><a href="">About</a></li>
              <li className='hover:transition-transform hover:scale-110'><a href="/">Projects</a></li>
              <li className='hover:transition-transform hover:scale-110'><a href="/">Reach Me</a></li>
            </ul>
          </div>
        </nav>
        <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
          <Description />
        </div>
      </section>
    </>
  );
}

export default App;
