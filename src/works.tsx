import { useEffect, useRef, useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import Mhi from './assets/images/mhi.png';
import Geekops from './assets/images/Geekops.png';
import Growthclub from './assets/images/Growthclub.png';
import Movibox from './assets/images/Moviebox.png';

export default function Works() {
    const [showMhi, setShowMhi] = useState(false);
    const [showGeekops, setShowGeekops] = useState(false);
    const [showGrowthclub, setShowGrowthclub] = useState(false);
    const [showMovibox, setShowMovibox] = useState(false);
    const mainRefMhi = useRef(null);
    const mainRefGeekops = useRef(null);
    const mainRefGrowthclub = useRef(null);
    const mainRefMovibox = useRef(null);

    useEffect(() => {
        const observerMhi = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowMhi(true);
                    observerMhi.unobserve(entry.target);
                }
            });
        });
        if (mainRefMhi.current) {
            observerMhi.observe(mainRefMhi.current);
        }

        const observerGeekops = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowGeekops(true);
                    observerGeekops.unobserve(entry.target);
                }
            });
        });
        if (mainRefGeekops.current) {
            observerGeekops.observe(mainRefGeekops.current);
        }

        const observerGrowthclub = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowGrowthclub(true);
                    observerGrowthclub.unobserve(entry.target);
                }
            });
        });
        if (mainRefGrowthclub.current) {
            observerGrowthclub.observe(mainRefGrowthclub.current);
        }

        const observerMovibox = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowMovibox(true);
                    observerMovibox.unobserve(entry.target);
                }
            });
        });
        if (mainRefMovibox.current) {
            observerMovibox.observe(mainRefMovibox.current);
        }

        return () => {
            observerMhi.disconnect();
            observerGeekops.disconnect();
            observerGrowthclub.disconnect();
            observerMovibox.disconnect();
        };
    }, []);

    return (
        <main className="">
            <div className=" mt-[23rem] md:mt-[0rem]">
                <div className=" flex flex-col justify-between md:mt-0 mt-10 gap-7 md:flex-row">
                    <img
                        ref={mainRefMhi}
                        className={`transition-transform duration-[5s] transform w-[38rem] ${showMhi ? '-translate-x-0' : '-translate-x-full'
                            }`}
                        src={Mhi}
                        alt=""
                    />
                    <p
                        className={`transition-transform duration-[5s] transform text-justify md:ml-6 font-light md:text-[1.2rem] ${
                            showMhi ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {showMhi && (
                            <>The Mercy House Initiative is a nonprofit organization dedicated to assisting homeless individuals by providing shelter,
                                food, and support services. The project, developed using HTML, CSS, and Vanilla JavaScript, includes features such as a homepage showcasing the organization's mission,
                                a donation page for contributing money or supplies, a volunteer page with information on how to get involved, an events page listing upcoming activities, a gallery displaying images of the organization's work,
                                and a contact page with contact details. The project welcomes contributions from the community and is licensed under the MIT License.

                                <div className=" flex justify-start gap-24 mt-5">
                                    <a href="https://mhi-seven.vercel.app/" target='_blank'><button className=" border-2 border-[#71797E] p-2">View Webiste</button></a>
                                </div>
                            </>
                        )}
                    </p>
                </div>
                <div className=" flex flex-col justify-between md:mt-16 mt-10 gap-7 md:flex-row">
                    <img
                        ref={mainRefGeekops}
                        className={`transition-transform duration-[5s] transform w-[38rem] ${showGeekops ? '-translate-x-0' : '-translate-x-full'
                            }`}
                        src={Geekops}
                        alt=""
                    />
                    <p
                        className={`transition-transform duration-[5s] transform text-justify md:ml-6 font-light md:text-[1.2rem] ${
                            showGeekops ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {showGeekops && (
                            <>GeekOps is a comprehensive software platform designed to assist final year students, companies, and individuals with their development projects.
                                With GeekOps, you can collaborate on projects, access expert guidance, and use project management tools to ensure project success. The platform includes a dashboard where you can track project progress, milestones, and team contributions.
                                Additionally, GeekOps features an affiliate page where you can promote the platform and earn rewards, as well as a leaderboard to showcase top contributors and projects.


                                <div className=" flex justify-start gap-24 mt-5">
                                    <a href="https://geekops.tech/" target='_blank'><button className=" border-2 border-[#71797E] p-2">View Webiste</button></a>
                                </div>
                            </>
                        )}
                    </p>
                </div>
                <div className=" flex flex-col justify-between md:mt-16 mt-10 gap-7 md:flex-row">
                    <img
                        ref={mainRefGrowthclub}
                        className={`transition-transform duration-[5s] transform w-[38rem] ${showGrowthclub ? '-translate-x-0' : '-translate-x-full'
                            }`}
                        src={Growthclub}
                        alt=""
                    />
                    <p
                        className={`transition-transform duration-[5s] transform text-justify md:ml-6 font-light md:text-[1.2rem] ${
                            showGrowthclub ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {showGrowthclub && (
                            <>Growth Club is a financial platform designed to facilitate USD trading, saving, funding, and sending. Users can easily manage their finances through the platform,
                                which offers a seamless experience for trading and saving USD from their wallets. Additionally, users can fund their accounts to enable trading or send USD to other users. The platform includes a user-friendly dashboard where users can track their transactions,
                                savings, and trading activities. An admin page is also available for managing user funding and transactions. With Growth Club, users can efficiently manage their finances and make transactions with ease.


                                <div className=" flex justify-start gap-24 mt-5">
                                    <a href="https://growthclub.life/" target='_blank'><button className=" border-2 border-[#71797E] p-2">View Webiste</button></a>
                                </div>
                            </>
                        )}
                    </p>
                </div>
                <div className=" flex flex-col justify-between md:mt-16 mt-10 gap-7 md:flex-row">
                    <img
                        ref={mainRefMovibox}
                        className={`transition-transform duration-[5s] transform w-[38rem] ${showMovibox ? '-translate-x-0' : '-translate-x-full'
                            }`}
                        src={Movibox}
                        alt=""
                    />
                    <p
                        className={`transition-transform duration-[5s] transform text-justify md:ml-6 font-light md:text-[1.2rem] ${
                            showMovibox ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {showMovibox && (
                            <>The MovieBox is an engaging application powered by React, designed to offer users an immersive movie browsing experience.
                                It leverages API integration to fetch data, ensuring that users can effortlessly explore and discover a vast collection of movies. The application provides real-time updates on movie availability and details,
                                enhancing the user's ability to make informed decisions about what to watch. With a sleek and intuitive interface, MovieBox makes it easy for users to search for specific movies, browse by genre, and access detailed information such as ratings,
                                reviews, and cast information.


                                <div className=" flex justify-start gap-24 mt-5">
                                    <a href="https://hng-task-2-five.vercel.app/" target='_blank'><button className=" border-2 border-[#71797E] p-2">View Webiste</button></a>
                                </div>
                            </>
                        )}
                    </p>
                </div>
            </div>

            <div className='w-full flex flex-col justify-center mt-[4rem] sm:mt-[4rem] md:mt-[7rem] items-center h-[0rem] mb-[3rem]'>
                <div className="flex gap-16 sm:gap-32">
                    <a href="https://www.linkedin.com/in/rotimi-babalola-a41768248/" target="_blank">
                        <AiFillLinkedin size={30} />
                    </a>
                    <a href="https://twitter.com/devbabss" target="_blank">
                        <AiFillTwitterCircle size={30} />
                    </a>
                    <a href="https://github.com/justbabss" target="_blank">
                        <AiFillGithub size={30} />
                    </a>
                    <a href="https://instagram.com/dev.babss" target="_blank">
                        <AiFillInstagram size={30} />
                    </a>
                </div>
            </div>

        </main>


    )
}
