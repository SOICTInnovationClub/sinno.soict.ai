import React from 'react';
import frame_4_1 from '../images/frame_4_1.png';
import frame_4_2 from '../images/frame_4_2.png';

const OurMission = () => {
    return (
        <div class="bg-gradient-to-b from-green-300 via-green-400 to-blue-300 px-24">
            <div class="w-1/2 pl-20 pt-20">
                <img class="pl-10" src={frame_4_1} alt="" />
            </div>
            <div class="pr-20 pt-20">
                <div class="font-black text-5xl text-white">
                    Our Mission
                </div>
                <div class="text-white text-xl w-3/4 pt-7">Building an environment where the members can develop their full potential is our first
                    mision. We provide powerful infrastructure data and IoT platform for members to easily
                    connect with each others. As the result, they can discover their own hidden talent and
                    choose the right path for their careers.
                </div>
                
            </div>
            <div class="w-1/2 pr-20 pt-20">
                    <img class="pl-10" src={frame_4_2} alt="" />
            </div>
        </div>
    );
}

export default OurMission;
