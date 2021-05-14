import React from "react";
import {Links} from 'Constants'
import AOS from 'aos';
import 'aos/dist/aos.css';
import tokenomicsTextImage from 'assets/tokenomics/tokenomics.svg';
import circle from 'assets/tokenomics/circle.png';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Tokenomics Component
// ------------------------------------------------------------------------------------------------------- //
const Tokenomics = () => 
    <div className='flex flex-col items-center px-5p z-20'>

        {/* Title Image & Description */}
        <img id='tokenomics' className='mt-64 mb-7 self-start z-20' src={tokenomicsTextImage} alt='Tokenomics' data-aos="fade"/>
        <h3 className='font-VT323 mb-28 lg:mb-16 text-2xl z-20 self-start z-20' data-aos="fade">Our tokenomics breakdown. View our <a className="underline text-brightyellow" href={Links.projectProposal}>FULL PROPOSAL</a></h3>

        <div className='inline-flex mb-56 flex-wrap lg:flex-nowrap justify-center z-20'>       

            {/* Coin Circle Image */}
            <img className='object-contain mr-0 lg:mr-24 mb-24 lg:mb0' src={circle} data-aos="flip-right" data-aos-anchor-placement='center-bottom' data-aos-duration="900" />
            
            {/* Percentages */}
            <div className='max-w-lg'>
                <ul>
                    <li className='text-lightorange font-pressstart text-sm mb-16' data-aos='fade-left' data-aos-delay="100" data-aos-anchor-placement='center-bottom'>
                        <div className='inline-flex w-4 h-4 bg-lightorange relative right-2 mr-px'></div>CONTRIBUTORS / TREASURY AMOUNT: 60%
                        <div className='font-VT323 text-2xl text-white ml-4'>Reserved for use case proposals, strategic partnerships, incentives, etc.</div>
                    </li>
                    
                    <li className='text-orange font-pressstart text-sm mb-16' data-aos='fade-left' data-aos-delay="150" data-aos-anchor-placement='center-bottom'>
                        <div className='inline-flex w-4 h-4 bg-orange relative right-2 mr-px'></div>EARLY CONTRIBUTORS: 15%
                        <div className='font-VT323 text-2xl text-white ml-4'>Vested over 2 years</div>
                    </li>
                    
                    <li className='text-green font-pressstart text-sm mb-16' data-aos='fade-left' data-aos-delay="200" data-aos-anchor-placement='center-bottom'>
                        <div className='inline-flex w-4 h-4 bg-green relative right-2 mr-px'></div>COMMUNITY AIRDROPS: 15%
                        <div className='font-VT323 text-2xl text-white ml-4'>
                            <ul>
                                <li>- Discord/Twitter/Telegram follower airdrops</li>
                                <li>- Early GitCoin contributors</li>
                                <li>- NFT holders of specific projects with strong rental use cases (To be announced)</li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className='text-lightgreen font-pressstart text-sm' data-aos='fade-left' data-aos-delay="250" data-aos-anchor-placement='center-bottom'>
                        <div className='inline-flex w-4 h-4 bg-lightgreen relative right-2 mr-px'></div>LIQUIDITY PROVIDERS: 10%
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
// ------------------------------------------------------------------------------------------------------- //

export default Tokenomics;