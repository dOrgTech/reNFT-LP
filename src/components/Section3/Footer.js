import React from "react";
import {Links} from 'Constants'
import AOS from 'aos';
import 'aos/dist/aos.css';

import twitterIcon from 'assets/social/twitter.svg';
import discordIcon from 'assets/social/discord.svg';
import telegramIcon from 'assets/social/telegram.svg';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Footer Component
// ------------------------------------------------------------------------------------------------------- //
const Footer = () => 
    <footer className='mt-80 px-5p z-20 relative'>

        <div className='grid grid-cols-11rem-1fr grid-gap-x-6 grid-gap-y-12 justify-items-center md:justify-items-stretch z-20'>
            
            {/* Section 1 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="100">
                <h3 className='font-pressstart text-sm mb-1.5'>SECTION 1</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link1</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">LinkLink2</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link3</a></div>
                <div className='font-VT323 text-2xl'><a className='hover:underline' href="#">Link-Link4</a></div>
            </div>

            {/* Section 2 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="150">
                <h3 className='font-pressstart text-sm mb-1.5'>SECTION 2</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link1</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">LinkLink2</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link3</a></div>
                <div className='font-VT323 text-2xl'><a className='hover:underline' href="#">Link-Link4</a></div>
            </div>

            {/* Section 3 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="200">
                <h3 className='font-pressstart text-sm mb-1.5'>SECTION 3</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link1</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">LinkLink2</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link3</a></div>
                <div className='font-VT323 text-2xl'><a className='hover:underline' href="#">Link-Link4</a></div>
            </div>

            {/* Section 4 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="250">
                <h3 className='font-pressstart text-sm mb-1.5'>SECTION 4</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link1</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">LinkLink2</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">Link3</a></div>
                <div className='font-VT323 text-2xl'><a className='hover:underline' href="#">Link-Link4</a></div>
            </div>
        </div>

        {/* Bottom Footer */}
        <div className='font-VT323 text-2xl flex justify-between items-center mt-12 pb-2 flex-wrap' data-aos='fade-right' data-aos-delay="200" data-aos-anchor-placement='top-bottom'>
            <a className='hover:underline mb-1 mr-4' href={Links.copyright}>Copyright© 2021 &#123;reNFT&#125;</a>
            <a className='hover:underline mb-1 mr-4' href={Links.cookiePolicy}>Cookie Policy</a>
            <a className='hover:underline mb-1 mr-4' href={Links.terms}>Terms of Use</a>
            <a className='hover:underline mb-1 mr-4' href={Links.disclaimer}>Disclaimer</a>
            <a className='hover:underline mb-1 mr-4' href={Links.privacyPolicy}>Privacy Policy</a>

            <span className='inline-flex'>
                <a className='mr-4 social-link' href={Links.twitter}><img className='max-w-none' src={twitterIcon} alt='Twitter'/></a>
                <a className='mr-4 social-link' href={Links.discord}><img className='max-w-none' src={discordIcon} alt='Discord'/></a>
                <a className='social-link' href={Links.telegram}><img className='max-w-none' src={telegramIcon} alt='Telegram'/></a>
            </span>
        </div>

    </footer>
// ------------------------------------------------------------------------------------------------------- //

export default Footer;