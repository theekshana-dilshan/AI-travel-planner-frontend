import React from 'react';
import { Button } from '../ui/button';

function Hero(){
    return(
        <div className='flex flex-col items-center mx-56 gap-9'>
            <h1 className='font-extrabold text-[50px] text-center mt-16'>
                <span className='text-[#E16A54]'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips
            </h1>
            <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom Itineraries tailored to your interest and budget</p>
            <Button>Get stated</Button>
        </div>
    )
}

export default Hero