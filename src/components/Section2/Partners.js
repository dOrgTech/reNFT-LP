import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import partnersTextImage from 'assets/partners/partners.svg';
import logoPlaceholder from 'assets/partners/logo-placeholder.png';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Partners Component
// ------------------------------------------------------------------------------------------------------- //
const Partners = () => 
    <div className='flex flex-col items-center px-5p z-20'>

        {/* Title Image & Description */}
        <img id='partners' className='mt-60 mb-7 self-start z-20' src={partnersTextImage} alt='Partners' data-aos="fade"/>
        <h3 className='font-VT323 mb-8 text-2xl z-20 self-start' data-aos="fade">We are honoured to have partnerships with the following:</h3>

        {/* Parnters Logos */}
        <div className="grid grid-cols-11rem-1fr w-full grid-gap-8 justify-items-center z-20">
            <ParnterBox logoImage={logoPlaceholder} imageAlt='' fadeDirection='right' transitionDelay='100'/>
            <ParnterBox logoImage={logoPlaceholder} imageAlt='' fadeDirection='right' transitionDelay='150'/>
            <ParnterBox logoImage={logoPlaceholder} imageAlt='' fadeDirection='right' transitionDelay='200'/>
            <ParnterBox logoImage={logoPlaceholder} imageAlt='' fadeDirection='left' transitionDelay='200'/>
            <ParnterBox logoImage={logoPlaceholder} imageAlt='' fadeDirection='left' transitionDelay='150'/>
            <ParnterBox logoImage={logoPlaceholder} imageAlt='' fadeDirection='left' transitionDelay='100'/>
        </div>
        
    </div>
// ------------------------------------------------------------------------------------------------------- //


// Partners Box Component
// ------------------------------------------------------------------------------------------------------- //
const ParnterBox = (props) => 
    <div className={`box-transition-${props.transitionDelay} hover-remove-shadow box-content bg-white w-full border-black border-4 shadow-7px-black flex justify-center items-center h-full max-w-60 max-h-60`} data-aos={`fade-${props.fadeDirection}`} data-aos-anchor-placement='bottom-bottom'>
        <img src={props.logoImage} alt={props.imageAlt}/>
    </div>
// ------------------------------------------------------------------------------------------------------- //


export default Partners;