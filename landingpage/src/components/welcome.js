import React from 'react';
import Vector_welcome from '../images/Vector_welcome.png'
import frame_1_1 from '../images/frame_1_1.png'
import SINNO_1 from '../images/SINNO_1.png'

const Welcome = () => {
    return (
        <div class="bg-gradient-to-br from-amber-300 via-purple-500 to-blue-700">
            <div class="absolute rounded-full bg-blue-300 opacity-25" style={{width: '265px',
height: '275px',left: '663px', top: '662px'}}></div>
            <div class="absolute rounded-full bg-blue-300 opacity-25  " style={{width: '267px',
height: '250px', top: '420px'}}></div>
            <div class="absolute rounded-full bg-yellow-300 opacity-25" style={{width: '231px',
height: '251px', left:'620px',top: '170px'}}></div>
            <div class="flex">
                <img class="ml-10" src={ SINNO_1}></img>
                <div class="ml-5 mt-6">
                    <p class="font-light text-5xl">Soict Innovation Club</p>
                </div>
                <div class="flex text-xl justify-between grid-cols-5 gap-x-12 ml-40 mt-10">
                    <a>Home</a>
                    <a>Products</a>
                    <a>Service</a>
                    <a>Hackathon</a>
                    <a>News</a>
                </div>
            </div>
            <div class="flex z-10">
                <div class="ml-36" style={{marginTop:'166px',width:'433px'}}>
                    <div class="z-10">
                        <p class="font-bold text-white" style={{fontSize:'64px'}}>We are ready to change the world</p>
                    </div>
                    <div class="rounded-3xl z-10" style={{background:'#BEF81B',width: '365px',
    height: '82px', marginTop:'61px'}}>
                        <p class="font-bold text-4xl px-14 py-5">More about us</p>
                    </div>
                </div>
                <div>
                    <img src={ frame_1_1} style={{marginTop:'100px', marginLeft:'134px', marginBottom:'282px'}}></img>
                </div>
            </div>
            <div>
                <img src={ Vector_welcome} style={{width:'1440px'}}></img>
            </div>

        </div>
    )
}

export default Welcome;