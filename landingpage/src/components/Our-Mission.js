import React from 'react';
import frame_4_1 from '../images/frame_4_1.png';
import frame_4_2 from '../images/frame_4_2.png';

const OurMission = () => {
    return (
        <div class="font-sans px-24" style={{background: "linear-gradient(135deg, #92FFC0 0%, #002661 100%)" }}>
            <div class="relative h-0">
                <div class="border relative rounded-full opacity-25" style={{
                    width: '265px', background: 'rgba(190, 248, 27, 0.2)',
                    height: '272px', left: '842px', top: '452px'
                }}>
                </div>
                <div class="border relative rounded-full opacity-25" style={{
                    width: '224px', background: 'rgba(0, 38, 97, 0.2)',
                    height: '222px', left: '305px', top: '97px'
                }}></div>
                <div class="border relative rounded-full opacity-25" style={{
                    width: '239px', background: 'rgba(255, 210, 111, 0.2)',
                    height: '233px', left: '219px', bottom: '400px'
                }}></div>
            </div>
            <div class="w-full pr-5" >
                <img class="float-right w-1/3 " style={{top: '200px', zIndex: 1 }} src={frame_4_1} alt="" />
            </div>

            <div class="pr-20">
                <div class="font-sans text-5xl text-white">
                    Our Mission
                </div>
                <div class="font-sans text-white text-xl w-3/4 pt-7">Building an environment where the members can develop their full potential is our first
                    mision. We provide powerful infrastructure data and IoT platform for members to easily
                    connect with each others. As the result, they can discover their own hidden talent and
                    choose the right path for their careers.
                </div>
                
            </div>
            <div class="w-1/2 pr-20">
                    <img class="pl-10" src={frame_4_2} alt="" />
            </div>
        </div>
    );
}

export default OurMission;
