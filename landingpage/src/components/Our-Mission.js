import React from 'react';
import frame_4_1 from '../images/frame_4_1.png';
import frame_4_2 from '../images/frame_4_2.png';
const OurMission = () => {
    return (
        <div class="font-sans px-28" style={{background: "linear-gradient(135deg, #92FFC0 0%, #002661 100%)" }}>
            <div class="relative h-0">
                <div class="relative rounded-full" style={{
                    width: '215px', background: 'rgba(190, 248, 27, 0.2)',
                    height: '212px', left: '542px', top: '200px'
                }}>
                </div>
                <div class="relative rounded-full" style={{
                    width: '224px', background: 'rgba(0, 38, 97, 0.2)',
                    height: '222px', left: '805px', top: '400px'
                }}></div>
            </div>
            <div class="w-5/12 float-right" style={{ zIndex:5 }}>
                <img class="float-right w-full relative ml-12" style={{ top:"-150px", right:"-100px"}} src={frame_4_1} alt=""/>
            </div>
            <div class="w-full relative" style={{bottom:"-150px", zIndex:5 }}>
                <div class="font-sans font-bold text-5xl text-white" style={{ zIndex:5 }}>
                    Our Mission
                </div>
                <div class="font-sans text-white text-xl w-full pt-7" style={{ zIndex:5 }}>Building an environment where the members can develop their full potential is our first
                    mision. We provide powerful infrastructure data and IoT platform for members to easily
                    connect with each others. As the result, they can discover their own hidden talent and
                    choose the right path for their careers.
                </div>
            </div>
            <div class="w-7/12">
                <img class="w-full relative" style={{ bottom:"-108px", left:"-100px"}} src={frame_4_2} alt="" />
            </div>
        </div>
    );
}

export default OurMission;
