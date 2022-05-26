import React from 'react';
import frame_3_1 from '../images/frame_3_1.png';
import frame_3_2 from '../images/frame_3_2.png';

const OurVision = () => {
    return (
        <div class="flex pt-10 bg-gradient-to-b from-blue-400 to-blue-300">
            <div class="w-1/2 pr-5">
                <img class="pl-10" src={ frame_3_1} alt="" />
            </div>
            <div class="w-1/2 pr-20 pt-20">
                <div class="font-black text-3xl text-white">
                    Our Vision
                </div>
                <div class="text-white text-xl w-3/4 pt-7">We are heading to bulid a club surrounded by talented, dedicate and top-class strudents recognizing by many contests and start-up technology in the future.</div>
                <div>
                    <img class="pl-10" src={ frame_3_2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default OurVision;
