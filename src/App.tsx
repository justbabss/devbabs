import { useState, useEffect } from 'react';
import Description from './description';
import Nav from './nav';

function App() {
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
      <section className={`${darkMode ? 'bg-black' : 'bg-white'} text-${darkMode ? 'white' : 'black'} w-full scroll-smooth h-screen overflow-auto px-2 pt-5 sm:px-7 sm:py-5 md:px-12 md:overflow-hidden`}>
        <div onClick={toggleDarkMode}><Nav/></div>
        <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
          <Description />
        </div>
      </section>
    </>
  );
}

export default App;
