import React from 'react';
import brochure from '../images/whatwedo/brochure.png';
import email from '../images/whatwedo/email.png';
import reminder from '../images/whatwedo/reminder.png';
import workflow from '../images/whatwedo/workflow.png';

const WhatWeDo = () => {
    return (
        <div class="bg-gradient-to-br from-sky-600 to-cyan-400 pt-16">
            <div class="flex justify-center">
                <div class="flex mx-96 justify-center py-12 bg-gradient-to-br from-cyan-300 to-blue-700" style={{width: '595px',
    height: '186px',borderRadius: '79px'}}>
                    <p class="font-bold text-white text-7xl">WHAT WE DO</p>
                </div>
            </div>
            <div class="mx-10">
                <div class="flex justify-between" style={{marginTop:'5.6rem', marginBottom:'5.6rem'}}>
                    <div class="bg-white rounded-3xl w-1/6 items-center drop-shadow-xl">
                        <div class="flex justify-center mt-10">
                            <img src={email} alt="emailtool"></img>
                        </div>
                        <div class="flex justify-center mt-11 mb-10">
                            <p class="font-bold text-4xl">Automail</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-3xl w-1/6 h-1/4 items-center mx-8 drop-shadow-xl">
                        <div class="relative flex justify-center mt-24 -left-10" style={{top:'-9rem'}}>
                            <img src={reminder} alt="reminder"></img>
                        </div>
                        <div class="flex justify-center mb-10" style={{marginTop:'-3.8rem'}}>
                            <p class="font-bold text-4xl">Reminder</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-3xl w-1/6 items-center drop-shadow-xl">
                        <div class="flex justify-center mt-9">
                            <img src={workflow} alt="workflow"></img>
                        </div>
                        <div class="flex justify-center mb-10" style={{marginTop:'5.5rem'}}>
                            <p class="font-bold text-4xl">Workflow</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-3xl w-1/6 items-center drop-shadow-xl">
                        <div class="flex justify-center mt-9">
                            <img src={brochure} alt="template"></img>
                        </div>
                        <div class="flex justify-center mb-10" style={{marginTop:'4.5rem'}}>
                            <p class="font-bold text-4xl">Template</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class='flex justify-center font-bold text-5xl'>
                <p class="text-white">SINNO|</p>
                <p class="text-cyan-400 ">Products </p>
                <p class="text-yellow-400">and </p>
                <p class="text-green-400">Services</p>
            </div>
            <div>
                <div class="flex relative top-10 justify-center">
                    <div class="flex justify-center">
                        <p class="text-white font-bold text-4xl">Wanna know more? Click here</p>
                    </div>
                    <div class="-mt-3 ml-12 bg-gradient-to-br from-cyan-200 to-sky-700 w-1/6 flex justify-center rounded-3xl" style={{height:'4rem'}}>
                        <button class="text-white font-bold text-4xl justify-center">More products</button>
                    </div>
                </div>
                    <svg class="w-full h-full"  viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0 302L60 281C120 259 240 216 360 209C480 202 600 230 720 274C840 317 960 374 1080 331C1200 288 1320 144 1380 72L1440 0V432H1380C1320 432 1200 432 1080 432C960 432 840 432 720 432C600 432 480 432 360 432C240 432 120 432 60 432H0V302Z" fill="url(#paint0_linear_139_49)"/>
                        <defs>
                            <linearGradient id="paint0_linear_139_49" x1="-53" y1="462" x2="191.967" y2="1271.03" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2AFADF"/>
                                <stop offset="0.917331" stop-color="#4C83FF"/>
                            </linearGradient>
                        </defs>
                    </svg>                
                </div>
        </div>
    )
}

export default WhatWeDo;