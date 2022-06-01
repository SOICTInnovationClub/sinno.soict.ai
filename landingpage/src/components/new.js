import React from 'react';
import bkai from '../images/bkai.png';
import vt3 from '../images/Vector1.png';
import phg from '../images/phg.png'
import sinno from '../images/sinno.png'
const New = () => {
    return (
        <div class="font-sans" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #58CFFB 100%)" }}>
            <div class="px-28 pt-10 pb-28" style={{ zIndex:10 }}>
                <div class="text-7xl font-black flex" style={{ zIndex:10 }}>
                    <div>News</div>
                    <div><img class="w-12 mt-5 ml-5" src={sinno} alt="" style={{ zIndex:10 }} /></div>
                </div>
                <div class="flex font-bold text-xl">
                    <div class="w-3/4">
                        <div>BKAI- Naver Challenge 2022 have finished successfully and the award belong to Mancity.</div>
                        <div class="pr-16">
                            <img src={bkai} alt="" />
                        </div>
                        <div class="text-center flex">
                            <div class="w-3/4">Like what you see? Click for more update </div>
                            <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-1/4 font-bold ml-10 bg-white border rounded-3xl text-center py-3 px-8">View more</div>
                        </div>
                    </div>
                    <div class="w-1/4 px-4">
                        <div class="border-b border-black pb-1">GreenConnector is called for the first prized of Innovation Day </div>
                        <div class="border-b border-black pb-1 pt-3">Starting “ Training AI Engineer Programs” Confederation</div>
                        <div class="border-b border-black pb-1 pt-3">Talented Scholarship SamSung-STP 2021</div>
                        <div class="pt-3">Mancity lost CL but they win the future by signning Erling Halland</div>
                    </div>
                </div>
            </div>
            <div class="">
                <img class="h-96 absolute right-28 float-right z-10" src={phg} alt="" />
                <svg class="w-full h-full" viewBox="0 0 1440 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 83.8868L60 90.8868C120 97.8868 240 112.887 360 97.8868C480 83.8868 600 40.8868 720 18.8868C840 -3.11323 960 -3.11323 1080 4.88677C1200 11.8868 1320 25.8868 1380 32.8868L1440 40.8868V342.887H1380C1320 342.887 1200 342.887 1080 342.887C960 342.887 840 342.887 720 342.887C600 342.887 480 342.887 360 342.887C240 342.887 120 342.887 60 342.887H0V83.8868Z" fill="url(#paint0_linear_196_5)"/>
                        <defs>
                            <linearGradient id="paint0_linear_196_5" x1="-118" y1="372" x2="105.579" y2="1062.86" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0110721" stop-color="#C2FFD8"/>
                                <stop offset="1" stop-color="#736EFE"/>
                            </linearGradient>
                        </defs>
                    </svg>
            </div>
            
        </div>
    );
}

export default New;
