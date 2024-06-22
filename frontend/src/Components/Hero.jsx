import React from 'react';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
    return (
        <div className='flex h-full bg-gray-400'>
            <div className="flex flex-column justify-center gap-4 pl-9 leading-tight flex-1">
                <h2 className='text-black font-semibold text-base'>New ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-icon flex items-center gap-5"> {/* Changed align-center to items-center */}
                        <p className='text-black font-bold text-base'>new</p>
                        <img src={hand_icon} alt="hand_icon" className='w-24' />
                    </div>
                    <p className='text-black font-bold text-base'>collections</p>
                    <p className='text-black font-bold text-base'>For everyone</p>
                </div>

                <div className="hero-latest flex flex-col items-center"> {/* Added flex-col and items-center */}
                <div className='w-80 h-16 rounded-full mt-6 bg-red-500 text-white font-semibold text-m flex justify-center items-center'>Latest Collection</div>
                <img src={arrow_icon} alt="arrow_icon" className="mt-3" /> {/* Added alt text for accessibility */}
            </div>
            </div>

            

            <div className="hr flex-1 flex justify-center items-center"> {/* Added flex and items-center */}
                <img src={hero_image} alt="hero_image" />
            </div>
        </div>
    );
};

export default Hero;
