import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import newsTextImage from 'assets/news/news.svg';
import newsCat from 'assets/news/cat.svg';
import newsNFTHack from 'assets/news/nft-hack.svg';
import newsImage from 'assets/news/news-image.svg';

// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);

// News Component
// ------------------------------------------------------------------------------------------------------- //
const News = () => 
    <div className='flex flex-col items-center px-5p relative z-20'>

        {/* Title Image & Description */}
        <img id='news' className='mt-52 mb-7 self-start' src={newsTextImage} alt='News' data-aos="fade"/>
        <h3 className='font-VT323 mb-28 lg:mb-8 text-2xl z-20 self-start' data-aos="fade">OMG, have a look at all the good things happening!!</h3>

        {/* News Boxes */}
        <div className="grid grid-cols-18rem-1fr w-full grid-gap-10 justify-items-center z-20">
            <NewsBox title='MOONCAT.SHOP' titleColor='purple' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsCat} link='#'/>
            <NewsBox title='SUPERFLUID NFT' titleColor='orange' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsNFTHack} link='#'/>
            <NewsBox title='CRYPTOPUNK.RENT' titleColor='purple' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsImage} link='#'/>
            <NewsBox title='SUPERFLUID NFT' titleColor='orange' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsCat} link='#'/>
            <NewsBox title='MOONCAT.SHOP' titleColor='purple' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsCat} link='#'/>
            
            <NewsBox title='SUPERFLUID NFT' titleColor='orange' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsNFTHack} link='#'/>
            <NewsBox title='CRYPTOPUNK.RENT' titleColor='purple' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsImage} link='#'/>
            <NewsBox title='SUPERFLUID NFT' titleColor='orange' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsCat} link='#'/>
            <NewsBox title='MOONCAT.SHOP' titleColor='purple' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsCat} link='#'/>
            <NewsBox title='SUPERFLUID NFT' titleColor='orange' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' image={newsNFTHack} link='#'/>
        </div>

    </div>
// ------------------------------------------------------------------------------------------------------- //


// News Box Component
// ------------------------------------------------------------------------------------------------------- //
const NewsBox = (props) => 
    <a href='#' className="flex flex-col hover-remove-shadow box-transition-150 box-content bg-white border-black border-4 shadow-7px-black flex justify-center items-center h-full px-5 py-1 max-w-72 max-h-68" data-aos='fade-right' data-aos-anchor-placement='center-bottom'>
        <img className='max-h-36 mb-3' src={props.image} alt={props.title}/>
        <div className='text-black font-VT323 text-2xl leading-7 mb-3'>{props.description}</div>
        <div className={`font-pressstart text-sm self-start ${props.titleColor == 'purple' ? 'text-purple' : 'text-orange'}`}>{props.title}</div>
    </a>
// ------------------------------------------------------------------------------------------------------- //

export default News;