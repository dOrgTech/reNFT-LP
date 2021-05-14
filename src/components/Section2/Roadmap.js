import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import roadmapTextImage from 'assets/roadmap/roadmap.svg';
import heart from 'assets/roadmap/heart.svg';

// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Roadmap Component
// ------------------------------------------------------------------------------------------------------- //
const Roadmap = () => 
    <div className='flex flex-col items-center px-5p'>

        {/* Title Image & Description */}
        <img id='roadmap' className='mt-64 mb-7 self-start' src={roadmapTextImage} alt='Roadmap' data-aos="fade"/>
        <h3 className='font-VT323 mb-28 lg:mb-8 text-2xl z-20 self-start' data-aos="fade">This is our plan. Consider it a rough timeline plz.</h3>

        <div className='flex items-center relative justify-center'>
            <div className='roadmap-wrapper grid items-center lg:items-stretch min-w-45p z-10'>
                
                {/* Q2 2021 */}
                <article className='roadmap-q2 self-start font-VT323 lg:mr-12 max-w-xl px-8 py-9 text-2xl box-content bg-pink border-black border-4 shadow-7px-black z-10' data-aos='fade-right' data-aos-anchor-placement='center-bottom'>
                    <h3 className='font-pressstart text-sm mb-9'>Q2 2021</h3>
                    <ul>
                        <li>- Ethereum Mainnet official launch</li>
                        <li>- $RENT Token Rollout</li>
                        <li>- DAO Launch</li>
                        <li>- Liquidity Mining Incentives</li>
                        <li>- Rarible NFT Marketplace Integration</li>
                    </ul>
                </article>

                {/* Q4 2021 */}
                <article className='roadmap-q4 self-end font-VT323 lg:mr-12 max-w-xl px-8 py-9 text-2xl box-content bg-yellow border-black border-4 shadow-7px-black z-10' data-aos='fade-right' data-aos-anchor-placement='center-bottom'>
                    <h3 className='font-pressstart text-sm mb-9'>Q4 2021</h3>
                    <ul>
                        <li>- Full Rental Statistics Dashboard</li>
                        <li>- Live leaderboard showing top renters and lenders (With special NFT rewards to gamify experience)</li>
                    </ul>
                </article>  

                {/* Line & Heart */}
                <div className='roadmap-line absolute lg:static h-115p lg:h-192 -top-20 right-1/2 w-5px bg-white'>
                    <div className='w-5 h-5 bg-white relative right-2 ml-px'></div>
                    <div className="hidden lg:block w-24 h-5px bg-white relative top-1/2"></div>
                    <div className="hidden lg:block w-24 h-5px bg-white relative top-1/4 right-24"></div>
                    <div className="hidden lg:block w-24 h-5px bg-white relative top-3/4 right-24"></div>
                    <img className='relative min-w-20 right-37px top-97p lg:top-93p' src={heart}/>
                </div>

                {/* Q3 2021 */}
                <article className='roadmap-q3 self-center font-VT323 lg:ml-12 max-w-xl px-8 py-9 z-10 text-2xl box-content bg-lightpurple border-black border-4 shadow-7px-black z-10' data-aos='fade-left' data-aos-anchor-placement='center-bottom'>
                    <h3 className='font-pressstart text-sm mb-9'>Q3 2021</h3>
                    <ul>
                        <li>- L2 Solutions Support</li>
                        <li>&nbsp;&nbsp;- Polygon, Immutable, and more</li>
                        
                        <li>- Collateral Free Rentals</li>
                        <li>&nbsp;&nbsp;- Direct project partnerships with NFT Games enabling collateral free renting</li>
                        
                        <li>- Further blockchains/L2s and protocol support (Polka-Dot, Avalanche, Flow Blockchain etc)</li>
                        <li>&nbsp;&nbsp;- According to market needs and NFT demands</li>
                    </ul>
                </article>

            </div>

        </div>

    </div>
// ------------------------------------------------------------------------------------------------------- //

export default Roadmap;