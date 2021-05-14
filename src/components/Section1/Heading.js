import React from "react";
import {Links} from 'Constants'
import AOS from 'aos';
import 'aos/dist/aos.css';
import headingImage from 'assets/heading/heading.svg';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Heading Component
// ------------------------------------------------------------------------------------------------------- //
const Heading = () => 
    <div id='heading' className='flex flex-col items-center px-5p relative z-10' data-aos="fade" data-aos-delay="150" data-aos-once='true'>

        {/* Description & Title Image */}
        <h3 className='font-VT323 text-2xl z-20'>Let your stale NFTs generate revenue and borrow NFTs you could never afford!</h3>
        <img className='mt-11 mb-10 z-10' src={headingImage} alt='LEND AND RENT NFTs'/>
        
        {/* Launch Button */}
        <a className='relative z-10' href={Links.launchDApp}>
            <div className='launch-button-outer absolute'></div>
            <div className='launch-button-inner absolute w-60 h-10 font-pressstart text-sm filter hover:brightness-95'>
                LAUNCH DAPP
            </div>
        </a>
        
        {/* SignUp Input */}
        <div className='text-sm inline-flex justify-center flex-wrap mt-40 mb-72 font-pressstart z-10'>
            <input className='text-sm h-10 text-black box-border font-pressstart w-72 p-2 outline-none border-0' type='email'/>
            <div className='bg-purple inline-flex items-center justify-center cursor-pointer h-10 w-72 transition duration-300 ease-in-out filter hover:brightness-95'>SIGN UP FOR NEWS</div>
        </div>

    </div>
// ------------------------------------------------------------------------------------------------------- //

export default Heading;