import React from 'react';
import Slider from '../components/slider/home-v2';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about/home-v2';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap/home-v2';
import dataRoadmap from '../assets/fake-data/data-roadmap';

import Work from '../features/work/home-v2';
import dataWork from '../assets/fake-data/data-work';

import FAQ from '../features/faq/home-v2';
import dataFaq from '../assets/fake-data/data-faq';


function HomeTwo(props) {
    return (
        <div className='home-2'>
            <Slider data={dataSlider} />

            <About data={dataAbout} />

            <RoadMap data={dataRoadmap} />

           
            
            <Work data={dataWork} />

            

           

           

            <FAQ data={dataFaq} />
        </div>
    );
}

export default HomeTwo;