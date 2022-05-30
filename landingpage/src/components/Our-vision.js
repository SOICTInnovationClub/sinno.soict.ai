import React from 'react';
import frame_3_1 from '../images/frame_3_1.png';
import frame_3_2 from '../images/frame_3_2.png';
import frame_3_3 from '../images/frame_3_3.png';

const OurVision = () => {
    return (
        <div class="font-sans" style={{ background: "linear-gradient(135deg, #2AFADF 0%, #4C83FF 100%)"}}>
            <div class="relative h-0" >
                <div class="relative rounded-full opacity-25" style={{
                    width: '233px', background: 'rgba(204, 118, 118, 0.2)',
                    height: '234px', left: '1152px', top: '0px'
                }}>
                </div>
                <div class="relative rounded-full opacity-25" style={{
                    width: '283px', background: '#465EFB',
                    height: '283px', left: '1100px', top: '200px'
                }}></div>
                <div class=" relative rounded-full opacity-25" style={{
                    width: '244px', background: 'rgba(255, 210, 111, 0.2)',
                    height: '247px', left: '650px', bottom: '300px'
                }}></div>
            </div>
            <div class="flex" >
                <div class="w-1/2 pr-5">
                <img class="pl-10" src={ frame_3_1} alt=""/>
            </div>

            <div class="w-1/2 pr-20 pt-20" >
                <div class="font-sans text-5xl text-white">
                    Our Vision
                </div>
                <div class="font-sans text-white text-3xl w-full pt-7">We are heading to bulid a club surrounded by talented, dedicate and top-class strudents recognizing by many contests and start-up technology in the future.
                </div>
                <div>
                    <img class="pl-10" src={ frame_3_2} alt="" />
                </div>
                </div>
            </div>
            <div>
                <img class="w-full bottom-0" src={frame_3_3} alt="" />
            </div>
        </div>
    );
}

export default OurVision;
