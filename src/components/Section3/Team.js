import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import teamTextImage from 'assets/team/team.svg';
import teamPhoto from 'assets/team/photo.svg';
import teamCircle from 'assets/team/circle.svg';
import discordIcon from 'assets/social/discord.svg';
import telegramIcon from 'assets/social/telegram.svg';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Team Component
// ------------------------------------------------------------------------------------------------------- //
const Team = () => 
    <div className='flex flex-col items-start px-5p relative z-20'>

        {/* Title Image & Description */}
        <img id='team' className='mt-60 mb-7 z-20' src={teamTextImage} alt='Team' data-aos="fade"/>
        <h3 className='font-VT323 mb-8 text-2xl z-20' data-aos="fade">This is our beautiful CORE TEAM in all its basedness. Some call us the boyband of crypto.</h3>

        {/* Team Logos */}
        <div className="grid grid-cols-11rem-1fr justify-center w-full grid-gap-8 z-20">
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
        </div>


        <h3 className='font-VT323 mb-8 mt-28 text-2xl z-20' data-aos="fade">But we couldn’t do it without the wisdom being constantly dropped on us by our beautiful <span className='font-pressstart text-sm'>ADVISORS.</span></h3>

        {/* Advisors Logos */}
        <div className="grid grid-cols-18rem-1fr justify-center w-full grid-gap-8 z-20">
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
            <TeamMember name='LUIS F. MASALLERA' title='Founding Member & CDO' photo={teamPhoto} discordLink='#' telegramLink='#'/>  
        </div>

    </div>
// ------------------------------------------------------------------------------------------------------- //


// Team/Advisror Member Component
// ------------------------------------------------------------------------------------------------------- //
const TeamMember = (props) => 
    <div className="transition duration-300 ease-in-out transform hover:scale-105 justify-self-center">
        <div className='justify-self-center' data-aos='fade-right' data-aos-anchor-placement='center-bottom'>
            <div className="relative mb-4">
                <img src={teamCircle}/>
                <img className='absolute top-7 left-9 max-w-55p' src={props.photo} alt={props.name}/>
            </div>
            <div className='font-pressstart text-sm text-center'>{props.name}</div>
            <div className='font-VT323 text-2xl text-center mb-4'>{props.title}</div>
            <div className='text-center'>
                <a className='inline-flex mr-4' href={props.discordLink}><img className='max-w-none' src={discordIcon} alt='Discord'/></a>
                <a className='inline-flex' href={props.telegramLink}><img className='max-w-none' src={telegramIcon} alt='Telegram'/></a>
            </div>
        </div>
    </div>
// ------------------------------------------------------------------------------------------------------- //


export default Team;