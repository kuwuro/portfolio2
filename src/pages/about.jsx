import React, { useState, useEffect } from "react";
import me from "../assets/media/me.jpg";
import cover1 from "../assets/media/covers/ancient.png";
import cover2 from "../assets/media/covers/beginagain.png";
import cover3 from "../assets/media/covers/fridayiminlove.png";
import cover4 from "../assets/media/covers/ironlotus.png";
import cover5 from "../assets/media/covers/url.png";
import cover6 from "../assets/media/covers/whatwedidinthedesert.png";
import cover7 from "../assets/media/covers/bite.png";
import cover8 from "../assets/media/covers/crimeofpassion.png";
import cover9 from "../assets/media/covers/pictures.png";
import cover10 from "../assets/media/covers/dontbesoserious.png";
import spotifyDark from "../assets/icons/SpotifyDark.svg";
import spotifyLight from "../assets/icons/SpotifyLight.svg";
import GithubDark from '../assets/icons/GithubDark.svg';
import GithubLight from '../assets/icons/GithubLight.svg';
import LinkedinDark from '../assets/icons/LinkedinDark.svg';
import LinkedinLight from '../assets/icons/LinkedinLight.svg';
import DownloadCVDark from '../assets/icons/CvDark.svg';
import DownloadCVLight from '../assets/icons/CvLight.svg';
import { Trans, useTranslation } from "react-i18next";

function downloadCV() {
    if (i18n.language === 'en' || i18n.language === 'en-US') {
        window.open(cvENG, 'mozillaTab');
    } else if (i18n.language === 'es') {
        window.open(cvESP, 'mozillaTab');
    } else if (i18n.language === 'ca') {
        window.open(cvCAT, 'mozillaTab');
    }
  }

const songs = [
    {
        title: 'Ancient',
        artist: 'Progfox',
        cover: cover1
    },
    {
        title: 'Begin Again',
        artist: 'Daniel Olsén',
        cover: cover2
    },
    {
        title: 'Friday I\'m in Love',
        artist: 'The Cure',
        cover: cover3
    },
    {
        title: 'Iron Lotus',
        artist: 'Mili',
        cover: cover4
    },
    {
        title: 'URL 湖',
        artist: 'Webinar™',
        cover: cover5
    },
    {
        title: 'what we did in the desert',
        artist: 'eightiesheadachetape',
        cover: cover6
    },
    {
        title: 'BITE!',
        artist: 'HOYO-MIX',
        cover: cover7
    },
    {
        title: 'Crime of Passion',
        artist: 'Tim Atlas',
        cover: cover8
    },
    {
        title: 'Pictures',
        artist: 'Eyeliner',
        cover: cover9
    },
    {
        title: 'Don\'t Be so Serious',
        artist: 'Low Roar',
        cover: cover10
    }
];

function About({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();

    const [randomSong, setRandomSong] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setRandomSong(songs[randomIndex]);
    }, []);
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start overflow-auto" style={{ height: `${screenWidth < 1080 ? '100vh' : '85vh'}` }}>
            <div className="grid lg:grid-cols-2 lg:gap-10 w-full lg:h-full lg:mb-0 mb-72">
                <div className="flex flex-col justify-center items-center lg:mt-0 mt-5 lg:mb-0 mb-2">
                    <div className="lg:w-120 lg:h-120 w-52 h-52 rounded-full waviy border-0 z-20" style={{ backgroundImage: `url(${me})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="w-2/5 h-10 bg-black blur-2xl rounded-full z-10"></div>
                </div>
                <div className="flex flex-col justify-center items-start gap-2 lg:-ml-20 -ml-0 lg:mb-8 mb-0 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <h2 className="lg:text-7xl text-4xl font-poppins dark:text-white fade-up-text mb-2 lg:-ml-1" style={{ animationDelay: (screenWidth <= 1080) ? `0.3s` : `0s` }}>ENRIC ARMENGOL</h2>
                        <p className="font-dmsans dark:text-white fade-up-text lg:w-11/12 w-full" style={{ animationDelay: (screenWidth <= 1080) ? `0.4s` : `0.1s` }}>
                            <Trans
                                i18nKey="aboutMe.part1"
                                components={{ 1: <strong /> }}
                                values={{
                                    bold1ENG: 'Superior Grade in Web Application Development (DAW)',
                                    bold1ESP: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
                                    bold1CAT: "Grau Superior de Desenvolupament d`Aplicacions Web (DAW)",
                                    bold2ENG: 'design and front-end',
                                    bold2ESP: 'diseño y front-end',
                                    bold2CAT: 'disseny i front-end',
                                }}
                            />
                        </p>
                        <p className="font-dmsans dark:text-white fade-up-text lg:w-11/12 w-full" style={{ animationDelay: (screenWidth <= 1080) ? `0.5s` : `0.2s` }}>
                            <Trans
                                i18nKey="aboutMe.part2"
                                components={{ 1: <strong /> }}
                                values={{
                                    bold3ENG: 'care and passion',
                                    bold3ESP: 'pequeños detalles y la pasión',
                                    bold3CAT: 'petits detalls i la passió'
                                }}
                            />
                        </p>
                        <p className="font-dmsans dark:text-white fade-up-text lg:w-11/12 w-full" style={{ animationDelay: (screenWidth <= 1080) ? `0.6s` : `0.3s` }}>
                            {t('aboutMe.part3')}
                        </p>
                        <p className="font-dmsans dark:text-white fade-up-text lg:w-11/12 w-full" style={{ animationDelay: (screenWidth <= 1080) ? `0.7s` : `0.4s` }}>
                            <Trans
                                i18nKey="aboutMe.part4"
                                components={{ 1: <strong /> }}
                                values={{
                                    email: 'armengolgarciaenric@gmail.com'
                                }}
                            />
                        </p>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5 justify-between lg:w-11/12 w-full">
                        <div id="player" className="mt-4 px-5 py-4 bg-black20 dark:bg-white10 rounded-xl flex items-center fade-up-text" style={{ animationDelay: (screenWidth <= 1080) ? `1.1s` : `0.5s` }}>
                            {randomSong && (
                                <>
                                    <div alt={`${randomSong.title} cover`} className="w-16 h-16 rounded-full mr-4 music-spin relative" style={{ backgroundImage: `url(${randomSong.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div>
                                        <p className="text-sm text-black font-dmsans dark:text-gray-200">Recently played
                                            <img src={darkMode ? spotifyDark : spotifyLight} alt="Spotify" className="w-5 h-5 inline-block align-top ml-2" />
                                        </p>
                                        <p className="text-lg font-dmsans font-semibold dark:text-white">{randomSong.title}</p>
                                        <p className="text-sm font-dmsans  font-semibold dark:text-gray-200">{randomSong.artist}</p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex gap-6 justify-center items-center mt-4 fade-up-text order-first lg:order-last" style={{ animationDelay: (screenWidth <= 1080) ? `0.8s` : `0.6s` }}>
                            <a href="https://github.com/kuwuro" target="_blank" rel="noreferrer" className="fade-up-text" style={{ animationDelay: (screenWidth <= 1080) ? `0.9s` : `0.7s` }}>
                                {!darkMode ? (
                                    <img src={GithubLight} alt="Github" className="w-12 h-12 hover:scale-110 transition duration-200" />
                                ) : (
                                    <img src={GithubDark} alt="Github" className="w-12 h-12 hover:scale-110 transition duration-200" />
                                )}
                            </a>
                            <a href="https://www.linkedin.com/in/enric-armengol/" target="_blank" rel="noreferrer" className="fade-up-text" style={{ animationDelay: (screenWidth <= 1080) ? `1s` : `0.8s` }}>
                                {!darkMode ? (
                                    <img src={LinkedinLight} alt="Linkedin" className="w-12 h-12 hover:scale-110 transition duration-200" />
                                ) : (
                                    <img src={LinkedinDark} alt="Linkedin" className="w-12 h-12 hover:scale-110 transition duration-200" />
                                )}
                            </a>
                            <button onClick={downloadCV} className="fade-up-text" style={{ animationDelay: (screenWidth <= 1080) ? `1.1s` : `0.9s` }}>
                                {!darkMode ? (
                                    <img src={DownloadCVLight} alt="Download CV" className="w-11 h-11 hover:scale-110 transition duration-200" />
                                ) : (
                                    <img src={DownloadCVDark} alt="Download CV" className="w-11 h-11 hover:scale-110 transition duration-200" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
