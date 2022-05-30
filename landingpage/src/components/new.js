import React from 'react';
import bkai from '../images/bkai.png';
import vt3 from '../images/Vector1.png';
import phg from '../images/phg.png'
const New = () => {
    return (
        <div class="font-sans" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #58CFFB 100%)" }}>
            <div class="px-28 pt-10 pb-28">
                <div class="text-7xl font-black">
                    News
                    <div><img src="" alt="" /></div>
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
                <div class="right-0 relative"><img src={vt3} alt="" /></div>
            </div>
            
        </div>
    );
}

export default New;
