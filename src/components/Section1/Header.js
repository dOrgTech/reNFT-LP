import React, { useState } from "react";
import {Links} from 'Constants'
import AOS from 'aos';
import 'aos/dist/aos.css';

import renftLogo from 'assets/header/renft-logo.svg';
import menu from 'assets/header/menu.svg';
import menuClose from 'assets/header/close.svg';
import twitterIcon from 'assets/social/twitter.svg';
import discordIcon from 'assets/social/discord.svg';
import telegramIcon from 'assets/social/telegram.svg';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Header Component
// ------------------------------------------------------------------------------------------------------- //
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='items-end mt-5 lg:mt-0 inline-flex justify-between mb-48 w-full box-border relative z-30 px-2p flex-wrap' data-aos="fade">

            {/* reNFT Logo */}
            <img src={renftLogo} alt='reNFT Logo'/>

            {/* Navigation for Desktop */}
            <nav className='hidden lg:inline-flex text-xs xl:text-sm justify-between w-3/5 max-w-3/5 font-pressstart h-14'>
                <a className='nav-link' href='#about'>ABOUT</a>
                <a className='nav-link' href='#partners'>PARTNERS</a>
                <a className='nav-link' href='#roadmap'>ROADMAP</a>
                <a className='nav-link' href='#tokenomics'>TOKENOMICS</a>
                <a className='nav-link' href='#team'>TEAM</a>
                <a className='nav-link' href='#news'>NEWS</a>
            </nav>

            {/* Social Icons */}
            <div className='hidden lg:inline-flex'>
                <a className='mr-4 social-link' href={Links.twitter}><img className='max-w-none' src={twitterIcon} alt='Twitter'/></a>
                <a className='mr-4 social-link' href={Links.discord}><img className='max-w-none' src={discordIcon} alt='Discord'/></a>
                <a className='social-link' href={Links.telegram}><img className='max-w-none' src={telegramIcon} alt='Telegram'/></a>
            </div>

            {/* Navigation for Tablet & Mobile */}
            <img className='lg:hidden mr-1 cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} src={menuOpen ? menuClose : menu} alt='Menu'/>
            <nav className={`${menuOpen ? "block" : "hidden"} lg:hidden items-center w-full px-2p mr-auto ml-auto z-10 mt-12 text-sm flex flex-col font-pressstart`}>
                <a className='nav-link-mobile' href='#about'>ABOUT</a>
                <a className='nav-link-mobile' href='#partners'>PARTNERS</a>
                <a className='nav-link-mobile' href='#roadmap'>ROADMAP</a>
                <a className='nav-link-mobile' href='#tokenomics'>TOKENOMICS</a>
                <a className='nav-link-mobile' href='#team'>TEAM</a>
                <a className='nav-link-mobile' href='#news'>NEWS</a>
                <div className='py-3 inline-flex'>
                    <a className='mr-4 social-link' href={Links.twitter}><img className='max-w-none' src={twitterIcon} alt='Twitter'/></a>
                    <a className='mr-4 social-link' href={Links.discord}><img className='max-w-none' src={discordIcon} alt='Discord'/></a>
                    <a className='social-link' href={Links.telegram}><img className='max-w-none' src={telegramIcon} alt='Telegram'/></a>
                </div>
            </nav>

        </header>
)}
// ------------------------------------------------------------------------------------------------------- //

export default Header;