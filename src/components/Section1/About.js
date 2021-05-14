import React from "react";
import {Links} from 'Constants'
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutTextImage from 'assets/about/about.svg';
import escrowImageRight from 'assets/about/escrow-right.png';
import escrowImageMiddle from 'assets/about/escrow-middle.png';
import escrowImageLeft from 'assets/about/escrow-left.png';
import escrowImageMobile from 'assets/about/escrow-mobile.png';
import dragonImage from 'assets/about/dragon.svg';
import treesImage from 'assets/about/trees.svg';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// About Component
// ------------------------------------------------------------------------------------------------------- //
const About = () => 
    <div id='about' className='flex flex-col items-center px-5p relative z-10'>

        {/* Title Image & Description */}
        <img className='mb-7 self-start' src={aboutTextImage} alt='ABOUT' data-aos="fade"/>
        <h3 className='font-VT323 text-2xl z-20 self-start' data-aos="fade">As of now NFTs can be sold, bought and transferred.<br/>reNFT is a rental protocol, enabling lending and borrowing of NFTs and it works like this:</h3>

        {/* Escrow Images for Desktop*/}
        <div className="mt-16 mb-20 hidden lg:inline-flex">
            <img className='max-w-3.5/10' src={escrowImageLeft} alt='reNFT Escrow' data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement='center-bottom' />
            <img className='max-w-1.5/5' src={escrowImageMiddle} alt='reNFT Escrow'data-aos="fade" data-aos-delay="100" data-aos-anchor-placement='center-bottom'  />
            <img className='max-w-3.5/10' src={escrowImageRight} alt='reNFT Escrow' data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement='center-bottom' />
        </div>
        
        {/* Escrow Image Mobile */}
        <img className='my-12 lg:hidden ' src={escrowImageMobile} alt='reNFT Escrow' data-aos="fade"/>

        {/* Project Proposal Description & Button */}
        <div className='text-center z-20' data-aos="fade">
            <p className='font-VT323 text-2xl z-20' data-aos="fade">For more details and the broader vision, press this</p>
            <a className='text-sm bg-lightyellow inline-flex items-center justify-center cursor-pointer h-10 font-pressstart w-72 mt-5 z-20 mb-36 lg:mb-16 filter hover:brightness-95 transform active:scale-99' href={Links.projectProposal}>PROJECT PROPOSAL</a>
        </div>
        
        {/* Trees & Dragon */}
        <div className='dragon-trees w-full flex justify-between items-baseline relative -mb-40 bottom-40'>
            <img src={treesImage} className='relative -left-16' data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement='bottom-bottom' />
            <img src={dragonImage} className='relative -right-32' data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement='bottom-bottom' />
        </div>

    </div>
// ------------------------------------------------------------------------------------------------------- //

export default About;