import React from 'react';
import frame_3_1 from '../images/frame_3_1.png';
import frame_3_2 from '../images/frame_3_2.png';
import frame_3_3 from '../images/frame_3_3.png';

const OurVision = () => {
    return (
        <div class="font-sans" style={{ background: "linear-gradient(135deg, #2AFADF 0%, #4C83FF 100%)"}}>
            <div class="relative h-0" >
                <div class="relative rounded-full" style={{
                    width: '160px', background: 'rgba(204, 118, 118, 0.2)',
                    height: '160px', left: '902px', top: '0px'
                }}>
                </div>
                <div class="relative rounded-full" style={{
                    width: '223px', background: 'rgba(70, 94, 251, 1)',
                    height: '223px', left: '1000px', top: '400px'
                }}></div>
            </div>
            <div class="flex" style={{ zIndex:5 }}>
                <div class="w-1/2 pr-5" style={{ zIndex:5 }}>
                    <img class="pl-10" src={ frame_3_1} alt="" style={{ zIndex:5 }}/>
                </div>
                <div class="w-1/2 pr-20 pt-20" style={{ zIndex:5 }}>
                    <div class="font-sans font-bold text-5xl text-white" style={{ zIndex:5 }}>
                        Our Vision
                    </div>
                    <div class="font-sans text-white text-3xl w-full pt-7">We are heading to bulid a club surrounded by talented, dedicate and top-class strudents recognizing by many contests and start-up technology in the future.
                    </div>
                    <div style={{ zIndex:5 }}>
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
