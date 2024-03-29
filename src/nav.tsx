import { useState, useEffect } from 'react';
import Logo from './assets/svgs/favico.svg';

function Nav() {
  // Initialize state with the value from local storage if it exists, otherwise default to false
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  // Toggle dark mode and update local storage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  // Add a listener to update the state if the local storage changes (e.g., from another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      const newDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(newDarkMode);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
        <nav className='flex justify-between p-0'>
          <a href="/">
            <img className="w-9 cursor-pointer bg-black rounded-[10rem]" src={Logo} alt="Logo" />
          </a>
          <div className={` cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`} onClick={toggleDarkMode}>
            {darkMode ? (
              <p className='text-[1.2rem] font-semibold text-[#fff]'>Light Mode</p>
            ) : (
              <p className='text-[1.2rem] font-semibold text-[#000]'>Dark Mode</p>
            )}
          </div>
        </nav>
    </>
  );
}

export default Nav;
