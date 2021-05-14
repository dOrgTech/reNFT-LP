import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Section1/Header';
import Heading from './components/Section1/Heading';
import About from './components/Section1/About';
import Partners from './components/Section2/Partners';
import Roadmap from './components/Section2/Roadmap';
import Tokenomics from './components/Section2/Tokenomics';
import Team from './components/Section3/Team';
import News from './components/Section3/News';
import Footer from './components/Section3/Footer';
import { Particles1, Particles2, Particles3 }  from './components/Particles';


ReactDOM.render(
  <React.StrictMode>
    
    <div className='section-gradient'>
        <Header/>
        <Heading/>
        <About/>
        <Particles1/>
    </div>

    <div className='relative section-gradient'>
        <Partners/>
        <Roadmap/>
        <Tokenomics/>
        <Particles2/>
    </div>

    <div className='relative section-gradient'>
        <Team/>
        <News/>
        <Footer/>
        <Particles3/>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);
