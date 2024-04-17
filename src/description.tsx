import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import html from './assets/svgs/html.svg';
import css from './assets/svgs/css.svg';
import js from './assets/svgs/js.svg';
import tw from './assets/svgs/tailwindcss.svg';
import rct from './assets/svgs/react.svg';
import ts from './assets/svgs/ts.svg';
import git from './assets/svgs/git.svg';
import github from './assets/svgs/github.svg';
import avatar from './assets/images/Avatar.png'
import cv from './assets/Rotimi\'s CV.pdf';

function Description() {
    const [show, setShow] = useState(false);
    const mainRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShow(true);
                    observer.unobserve(entry.target);
                }
            });
        });
        if (mainRef.current) {
            observer.observe(mainRef.current);
        }

        return () => observer.disconnect();
    }, []);

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
        <main
            ref={mainRef}
            className={`transition-transform duration-[2s] transform ${
                show ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            {show && (
                <>
                    <section className="flex flex-col md:flex-row items-center justify-between sm:ml-[-3rem] md:ml-0">
                        <div className="order-2 md:order-1 sm:order-1">
                            <h1 className="sm:text-[2rem] md:text-[3.3rem] sm:ml-0 sm:mt-12 font-semibold mt-5 md:mt-[6rem] md:ml-2 text-[1.9rem] ">Hi, I'm Rotimi Babalola.</h1>
                            <h1 className="inline-block sm:text-[2rem] md:text-[3.3rem] sm:inline-block sm:mt-1 font-semibold md:mt-[-0.3rem] md:inline-block md:ml-2 text-[1.7rem] mt-0">UX Designer</h1>
                            <h1 className="inline-block sm:text-[2rem] md:text-[3.3rem] sm:inline-block sm:ml-2 sm:mt-1 font-semibold md:mt-[-0.3rem] md:inline-block md:ml-2 ml-2 text-[1.7rem] mt-0">and Developer.</h1>
                            <p className="text-[1.2rem] sm:mt-4 w-[22rem] mt-3 sm:w-[35rem] md:w-[53.5rem] md:ml-2 text-start">
                                I design, create, maintain websites using programming languages, frameworks, and tools.
                                I build interactive websites that can be accessible by clients &
                                users from anywhere around the world.
                                <p className='mt-4'>
                                    I like to <a href="https://twitter.com/devbabss" target="_blank" className='text-[#1DA1F2] border-b-2 border-[#1DA1F2]'>tweet</a> about tech and stuffs,
                                    while pushing <a href="https://github.com/justbabss" target="_blank" className='text-[#71797E] border-b-2 border-[#71797E]'>codes</a> for open source collaborations,
                                    also managing one to view <a href="https://instagram.com/dev.babss" target="_blank" className='text-[#FF007F] border-b-2 p-[0.0rem] border-[#FF007F]' >reels</a> but hey don't forget to check my <a href="https://www.linkedin.com/in/rotimi-babalola-a41768248/" target="_blank" className='text-[#0077b5] border-b-2 border-[#0077b5]'>professional</a> summary for networking.
                                </p>
                                <p className='mt-4'>Explore my previous works and collaborations by clicking <Link
                                    to={``}
                                    smooth={true}
                                    duration={500}
                                    className="inline-block arrow-down"
                                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                                >
                                    <span className=" text-[#50C878] border-b-2 border-[#50C878] cursor-pointer">projects</span>
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 animate-bounce inline-block"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                        />
                                    </svg> */}
                                </Link></p>
                            </p>
                        </div>

                        <div className="order-1 sm:order-2 md:order-2 mt-6 sm:mr-[-32rem] sm:mt-[-24rem] mb-2 md:mb-0 md:mr-[8rem] md:mt-7">
                            <img className="w-[7rem] sm:w-[6rem] md:w-[11rem]" src={avatar} alt="" />
                        </div>
                    </section>

                    <button 
                        className={`${darkMode ? 'border-white' : 'border-black'} border-2 border-black text-[1.3rem] mt-[1.5rem] md:mt-10 md:ml-2 p-2 sm:mt-[17rem] transition-transform hover:scale-110`}
                        onClick={toggleDarkMode}
                    >
                        <a href={cv} download>Download CV</a>
                    </button>

                    <div className="flex flex-wrap justify-between mt-9 md:mt-0 md:my-[5rem] sm:mt-[2rem] sm:mx-0">
                        <div className="flex justify-between w-full md:w-1/2 md:px-[0rem] md:ml-[0rem]">
                            <img className="w-12" src={html} alt="html logo" />
                            <img className="w-12" src={css} alt="css logo" />
                            <img className="w-12" src={js} alt="javascript logo" />
                            <img className="w-12 md:mr-[3rem]" src={tw} alt="tailwind logo" />
                        </div>
                        <div className="flex justify-between w-full md:px-[0rem] md:w-1/2 my-10">
                            <img className="w-12 md:ml-[3rem]" src={rct} alt="react logo" />
                            <img className="w-12" src={ts} alt="TypeScript logo" />
                            <img className="w-12" src={git} alt="git logo" />
                            <img className="w-12" src={github} alt="github logo" />
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}

export default Description;
