import React from 'react';
import Aboutbanner from '../about/Aboutbanner';
import AboutSlider from './AboutSlider';
import Certificate from './Certificate';
import Counter from './Counter';

import Team from './Team';
import WhyUs from './WhyUs';
const About = () => {
    return (
        <div>
            <AboutSlider></AboutSlider>
            <Aboutbanner></Aboutbanner>
            <Counter></Counter>
            <Team></Team>
            <WhyUs></WhyUs>
            <Certificate></Certificate>
        </div>
    );
};

export default About;