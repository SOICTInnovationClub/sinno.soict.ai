import React from 'react';
import Vector_welcome from '../images/Vector_welcome.png'
import frame_1_1 from '../images/frame_1_1.png'
import SINNO_1 from '../images/SINNO_1.png'
import sample from '../sinno.mp4';
import Buttom from './buttom';
const Welcome = () => {
    return (
        <div class="pt-5" style={{ background: 'linear-gradient(135deg, #E8D07A 0%, #5312D6 100%)' }}>
            <div class="absolute rounded-full bg-blue-300 opacity-25" style={{width: '265px',
            height: '275px',left: '1073px', top: '672px'}}></div>
            <div class="absolute rounded-full bg-blue-300 opacity-25  " style={{width: '267px',
            height: '250px', top: '420px'}}></div>
            <div class="absolute rounded-full bg-yellow-300 opacity-25" style={{width: '231px',
            height: '251px', left:'620px',top: '170px'}}></div>
            <div class="flex" style={{ zIndex:5 }}>
                <img class="ml-10" src={ SINNO_1} style={{ zIndex:5 }}></img>
                <div class="ml-5 mt-6">
                    <p class="font-light text-5xl">Soict Innovation Club</p>
                </div>
                <div class="flex text-xl justify-between grid-cols-5 gap-x-12 ml-40 mt-10">
                    <a class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Home</a>
                    <a class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Products</a>
                    <a class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Service</a>
                    <a class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Hackathon</a>
                    <a class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">News</a>
                </div>
            </div>
            <div class="flex z-10" style={{ zIndex:5 }}>
                <div class="ml-36" style={{marginTop:'166px',width:'433px', zIndex:5}}>
                    <div class="z-10">
                        <p class="font-bold text-white" style={{fontSize:'64px', zIndex:5}}>We are ready to change the world</p>
                    </div>
                    <div class="pl-20" style={{width: '665px',
                    height: '82px', marginTop:'91px', zIndex:5}}>
                       <Buttom></Buttom> 
                    </div>
                </div>
                <div style={{ zIndex:5 }}>
                    <img src={ frame_1_1} style={{marginTop:'100px', marginLeft:'134px', marginBottom:'282px', zIndex:5}}></img>
                </div>
            </div>
            <div class="px-20 pb-10">
                <video className='videoTag' controls>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
            <div>
                <svg class="w-full h-full" viewBox="0 0 1440 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 59.4574L60 52.4574C120 45.4574 240 31.4574 360 38.4574C480 45.4574 600 74.4574 720 59.4574C840 45.4574 960 -12.5426 1080 2.45741C1200 16.4574 1320 103.457 1380 146.457L1440 189.457H1380C1320 189.457 1200 189.457 1080 189.457C960 189.457 840 189.457 720 189.457C600 189.457 480 189.457 360 189.457C240 189.457 120 189.457 60 189.457H0V59.4574Z" fill="url(#paint0_linear_147_14)"/>
                    <defs>
                        <linearGradient id="paint0_linear_147_14" x1="35" y1="64" x2="60.5352" y2="404.862" gradientUnits="userSpaceOnUse">
                            <stop offset="0.367082" stop-color="#3C8CE7"/>
                            <stop offset="1" stop-color="#ABDCFF"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Welcome;