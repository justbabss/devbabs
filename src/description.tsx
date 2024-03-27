import { useEffect, useRef, useState } from 'react';
import html from './assets/svgs/html.svg';
import css from './assets/svgs/css.svg';
import js from './assets/svgs/js.svg';
import tw from './assets/svgs/tailwindcss.svg';
import rct from './assets/svgs/react.svg';
import ts from './assets/svgs/ts.svg';
import git from './assets/svgs/git.svg';
import github from './assets/svgs/github.svg';
import avatar from './assets/images/Avatar.png'

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

    return (
        <main
            ref={mainRef}
            className={`transition-transform duration-[5s] transform ${
                show ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {show && (
                <>
                    <section className="flex flex-col md:flex-row items-center justify-between sm:mt-[0rem]">
                        <div className="order-2 md:order-1 sm:order-1">
                            <h1 className="sm:text-4xl sm:ml-8 sm:mt-12 font-semibold mt-5 md:mt-[5rem] text-[1.8rem] ">Hi, I'm Rotimi Babalola.</h1>
                            <h1 className="sm:text-4xl sm:ml-8 sm:mt-5 font-semibold md:mt-5 text-[1.8rem] mt-1">UX Designer.</h1>
                            <h1 className="sm:text-4xl sm:ml-8 sm:mt-5 font-semibold md:mt-5 text-[1.8rem] mt-1">and Developer.</h1>
                            <p className=" text-[1.3rem] sm:ml-8 w-[20rem] mt-5 sm:w-[40rem] md:w-[45rem]">
                                I design, create, maintain websites and web applications
                                using a combination of programming languages, frameworks, and tools.
                                I build dynamic and interactive websites that can be accessible by clients &
                                users from anywhere around the world.
                            </p>
                        </div>

                        <div className="order-1 sm:order-2 md:order-2 mt-6 sm:mr-[-25rem] sm:mt-[-20rem] mb-2 md:mb-0 md:mr-[8rem] md:mt-7">
                            <img className="w-[7rem] sm:w-[7rem] md:w-[11rem]" src={avatar} alt="" />
                        </div>
                    </section>

                    <div className="flex flex-wrap justify-between mt-7 md:mt-3 md:my-[5rem] sm:mt-[11rem] sm:mx-8">
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
