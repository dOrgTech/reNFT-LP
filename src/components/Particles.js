import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import cloud1 from 'assets/animations/section1/cloud1.svg';
import cloud2 from 'assets/animations/section1/cloud2.svg';
import cloud3 from 'assets/animations/section1/cloud3.svg';
import cloud4 from 'assets/animations/section1/cloud4.svg';
import cloud5 from 'assets/animations/section1/cloud5.svg';
import cloud6 from 'assets/animations/section1/cloud6.svg';
import cloud7 from 'assets/animations/section1/cloud7.svg';
import cloud8 from 'assets/animations/section1/cloud8.svg';
import cloud9 from 'assets/animations/section1/cloud9.svg';
import moon from 'assets/animations/section1/moon.svg';
import coin from 'assets/animations/section1/coin.svg';
import p1Stars1 from 'assets/animations/section1/stars1.svg';
import p1Stars2 from 'assets/animations/section1/stars2.svg';
import p1Stars3 from 'assets/animations/section1/stars3.svg';
import p1Stars4 from 'assets/animations/section1/stars4.svg';
import p1Stars5 from 'assets/animations/section1/stars5.svg';

import p2Stars1 from 'assets/animations/section2/stars1.svg';
import p2Stars2 from 'assets/animations/section2/stars2.svg';
import p2Stars3 from 'assets/animations/section2/stars3.svg';
import bubbles1 from 'assets/animations/section2/bubbles1.svg';
import bubbles2 from 'assets/animations/section2/bubbles2.svg';
import bubbles3 from 'assets/animations/section2/bubbles3.svg';
import coins1 from 'assets/animations/section2/coins1.svg';
import coins2 from 'assets/animations/section2/coins2.svg';
import coins3 from 'assets/animations/section2/coins3.svg';

import p3Stars1 from 'assets/animations/section3/stars1.svg';
import p3Stars2 from 'assets/animations/section3/stars2.svg';
import p3Stars3 from 'assets/animations/section3/stars3.svg';
import p3Stars4 from 'assets/animations/section3/stars4.svg';
import p3Stars5 from 'assets/animations/section3/stars5.svg';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Section 1 Particles -> Moon, Coin, Clouds & Stars
// ------------------------------------------------------------------------------------------------------- //
const Particles1 = () => 
    <div>
        <img className="hidden lg:block moon particle" style={{top: 518,left: '3%'}} data-aos="zoom-in" data-aos-delay="650"  src={moon}/>
        <img className="hidden md:block coin particle" style={{top: 438,left: '85%'}} data-aos="flip-left" data-aos-delay="550" data-aos-duration="1200" src={coin}/>

        <img className="cloud-1 particle" style={{top: 472,left: '19%'}} data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud1}/>
        <img className="cloud-2 particle" style={{top: 882,left: '91%'}} data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud2}/>
        <img className="hidden md:block cloud-3 particle" style={{top: 113,left: '11%'}} data-aos="fade-right" data-aos-delay="300" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud3}/>
        <img className="cloud-4 particle" style={{top: 327,left: '93%'}} data-aos="fade-left" data-aos-delay="250" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud4}/>
        <img className="hidden md:block cloud-5 particle" style={{top: 381,left: '-3%'}} data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud5}/>
        <img className="hidden lg:block cloud-6 particle" style={{top: 609,left: '79%'}} data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud6}/>
        <img className="hidden lg:block cloud-7 particle" style={{top: 601,left: '-4%'}} data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud7}/>
        <img className="cloud-8 particle" style={{top: 140,left: '77%'}} data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud8}/>
        <img className="cloud-9 particle" style={{top: 536,left: '96%'}} data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={cloud9}/>

        <img className="stars1 particle" style={{top: 498,left: '15%'}} data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={p1Stars1}/>
        <img className="stars2 particle" style={{top: 698,left: '39%'}} data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={p1Stars2}/>
        <img className="stars3 particle" style={{top: 854,left: '52%'}} data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={p1Stars3}/>
        <img className="stars4 particle" style={{top: 460,left: '67%'}} data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={p1Stars4}/>
        <img className="stars5 particle" style={{top: 858,left: '85%'}} data-aos="fade-left" data-aos-delay="350" data-aos-anchor-placement='bottom-bottom' data-aos-once='true' src={p1Stars5}/>
    </div>
// ------------------------------------------------------------------------------------------------------- //


// Section 2 Particles -> Stars, Spaceships, Bubbles, & Coins
// ------------------------------------------------------------------------------------------------------- //
const Particles2 = () => 
    <div className='z-0'>
        <img className="s2-stars1 particle" style={{ top: 86, left: '2%' }} data-aos="fade-right" data-aos-anchor-placement='center-bottom' src={p2Stars1}/>
        <img className="s2-stars2 particle" style={{ top: 106, left: '38%' }} data-aos="fade-left" data-aos-anchor-placement='center-bottom' src={p2Stars2}/>
        <img className="s2-stars3 particle" style={{ top: 122, left: '72%'}} data-aos="fade-left" data-aos-anchor-placement='center-bottom' src={p2Stars3}/>

        <img className="bubbles1 particle" style={{ top: 1248, left: '-4%' }} data-aos="fade-right" data-aos-anchor-placement='center-bottom' src={bubbles1}/>
        <img className="hidden md:block bubbles2 particle" style={{ top: 720, left: '23%' }} data-aos="fade-right" data-aos-anchor-placement='center-bottom' src={bubbles2}/>
        <img className="bubbles3 particle" style={{ top: 775, left: '71%' }} data-aos="fade-left" data-aos-anchor-placement='center-bottom' src={bubbles3}/>

        <img className="hidden lg:block coins1 particle" style={{ top: 2200, left: '-6%' }} data-aos="fade-right" data-aos-anchor-placement='center-bottom' src={coins1}/>
        <img className="hidden lg:block coins2 particle" style={{ top: 1950, left: '39%' }} data-aos="flip-left" data-aos-anchor-placement='center-bottom' data-aos-delay="200" data-aos-duration="1200" src={coins2}/>
        <img className="coins3 particle" style={{ top: 1928, left: '90%' }} data-aos="fade-left" data-aos-anchor-placement='center-bottom' src={coins3}/>
    </div>
// ------------------------------------------------------------------------------------------------------- //


// Section 3 Particles -> Stars, Clouds, Spaceships & Cloud Unicorn
// ------------------------------------------------------------------------------------------------------- //

const Particles3 = () => 
    <div className='z-0'>
        <img className="s3-stars1 particle" style={{ top: 215, left: '17%' }} data-aos="fade-right" data-aos-anchor-placement='center-bottom' src={p3Stars1}/>
        <img className="hidden md:block s3-stars2 particle" style={{ top: 230, left: '70%' }} data-aos="fade-left" data-aos-anchor-placement='center-bottom' src={p3Stars2}/>
        <img className="hidden md:block s3-stars3 particle" style={{ top: 940, left: '46%' }} data-aos="fade-left"data-aos-delay="200" data-aos-anchor-placement='center-bottom' src={p3Stars3}/>
        <img className="s3-stars4 particle 2xl:-mt-24" style={{ top: 2455, left: '-2%' }} data-aos="fade-right" data-aos-anchor-placement='center-bottom' src={p3Stars4}/>
        <img className="s3-stars5 particle 2xl:-mt-24" style={{ top: 2455, left: '61%' }} data-aos="fade-left" data-aos-anchor-placement='center-bottom' src={p3Stars5}/>
    </div>
// ------------------------------------------------------------------------------------------------------- //


export { Particles1, Particles2, Particles3 }