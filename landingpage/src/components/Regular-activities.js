import React from 'react';
import frame_6_1 from '../images/frame_6_1.png';
import frame_6_2 from '../images/frame_6_2.png';
import frame_6_3 from '../images/frame_6_3.png';
import moment1 from '../images/moment1.png';
import moment2 from '../images/moment2.png';
import moment3 from '../images/moment3.png';
import moment4 from '../images/moment4.png';
import ThTien from '../images/ThTien.png';
import ADat from '../images/ADat.png';
import vt3 from '../images/Vector3.png';
import vt from '../images/Vector2.png';
const RegularActivities = () => {
    return (
        <div class="font-sans pt-10 text-xl" style={{ background: "linear-gradient(135deg, #F5CBFF 0%, #C346C2 100%)" }}>
            <div class="relative h-0">
                <div class="relative rounded-full" style={{width: '175px', background: 'rgba(190, 248, 27, 0.2)',
                height: '175px',left: '600px', top: '60px'}}>  
                </div>
                <div class="relative rounded-full" style={{width: '230px', background: 'rgba(239, 7, 7, 0.2)',
                height: '230px',left: '1150px', top: '0px'}}></div>
                <div class="relative rounded-full" style={{width: '175px', background: 'rgba(239, 7, 7, 0.2)',
                height: '175px',left: '870px', top: '120px'}}></div>
                <div class="relative rounded-full" style={{width: '175px', background: 'rgba(255, 233, 133, 0.2)',
                height: '175px',left: '340px', top: '20px'}}></div>
                <div class="relative rounded-full" style={{width: '225px', background: 'rgba(217, 217, 217, 0.2)',
                height: '225px',left: '320px', top: '50px'}}></div>
                <div class="relative rounded-full" style={{width: '250px', background: 'rgba(190, 248, 27, 0.2)',
                height: '250px',left: '620px', top: '350px'}}></div>
                <div class="relative rounded-full" style={{width: '200px', background: 'rgba(245, 203, 255, 0.2)',
                height: '200px',left: '620px', top: '820px'}}></div>
                <div class="relative rounded-full" style={{width: '200px', background: 'rgba(245, 203, 255, 0.2)',
                height: '200px',left: '450px', top: '1050px'}}></div>
                <div class="relative rounded-full" style={{width: '170px', background: 'rgba(70, 94, 251, 0.2)',
                height: '170px',left: '200px', top: '1000px'}}></div>
                <div class="relative rounded-full" style={{width: '200px', background: 'rgba(250, 116, 43, 0.2)',
                height: '200px',left: '620px', top: '1250px'}}></div>
            </div>
            <div class="font-bold w-1/6 pl-6 py-2 text-2xl rounded-r-xl shadow-2xl" style={{ background: "rgba(250, 116, 43, 0.2)" }}>
                Regular activities
            </div>
            <div class="flex justify-between pt-10 pb-20">
                <div class="w-1/4 ml-32 mb-16 mt-20 rounded-xl p-4 shadow-2xl" style={{ background: "#E5E5E5", zIndex:5 }}>
                    <div class="flex justify-center">
                        <img class="h-64" src={frame_6_1} alt="" />
                    </div>
                    <div class="px-6 pb-6">
                        <div class="font-bold text-xl text-center">Co-working </div>
                        <div>Members continously dicuss, share experience and contribute to develop products as well as ideas for competition.</div>
                    </div>
                </div>
                <div class="w-1/4 mt-36 rounded-xl mx-28 p-4 shadow-2xl" style={{ background: "#F58282" }}>
                    <div class="flex justify-center">
                        <img class="h-64" src={frame_6_2} alt="" />
                    </div>
                    <div class="px-6 pb-6">
                        <div class="font-bold text-xl text-center">Seminar</div>
                        <div>Involving in many seminars from big companies to get used to culture, environment and career prospect in working world.</div>
                    </div>
                </div>
                <div class="w-1/4 bg-red-100 mr-32 mb-36 rounded-xl p-4 shadow-2xl" style={{ background: "#F5CBFF", zIndex:5 }}>
                    <div class="flex justify-center">
                        <img class="h-64" src={frame_6_3} alt="" />
                    </div>
                    <div class="px-6 pb-6">
                        <div class="font-bold text-xl text-center">Training </div>
                        <div>Trained by senior from different majjors each semester.</div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-10 pb-10 text-white font-bold text-6xl" style={{ zIndex:5 }}>
                Moment of SINNO
            </div>
            <div class="px-10">
                <div>
                    <div class="flex">
                        <img class="w-1/2" src={moment1} alt="" style={{ zIndex:5 }}/>
                        <img class="w-1/2" src={moment2} alt="" style={{ zIndex:5 }}/>
                    </div>
                    <div class="flex">
                        <img class="w-3/4" src={moment3} alt="" style={{ zIndex:5 }}/>
                        <img class="w-1/4" src={moment4} alt="" style={{ zIndex:5 }}/>
                    </div>
                </div>
                <div class="flex pb-1 pl-16 ">
                    <div class="w-3/4 font-bold text-2xl">Like what you see? Click here for more features </div>
                    <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-1/8 font-bold ml-10 text-2xl border rounded-3xl text-center py-3 px-10" style={{ background: "#F5CBFF" }}>View more</div>
                </div>
            </div>
            <div>
                <img src={vt3} alt="" />
            </div>
            <div class="pt-10" style={{ background: "linear-gradient(135deg, #FFF3B0 0%, #CA26FF 100%)" }}>
                <div class="flex w-full pl-10">
                    <div class="w-1/4 rounded-3xl bg-white">
                        <img class="" src={ThTien} alt="" />
                    </div>
                    <div class="w-3/4">
                        <div class="h-3/4 text-center w-3/4 pt-10 pl-10">
                            <p class="text-7xl pl-4 text-left font-black">“</p>
                                As our second home , I want SINNO club become the place where students can have the best time and reach their full potential.
                            <p class="text-7xl pr-4 text-right font-black">“</p>
                            <p>-Nguyen Duc Tien- President of SINNO-</p>
                        </div>
                    </div>
                </div>
                <div class="flex w-full">
                    <div class="w-2/3">
                        <div class="text-center w-3/4 pt-36 pl-64">
                            Man City is the champion of champion
                            <p class="pt-8">Dang Tuan Dat- Vice President</p>
                        </div>
                    </div>
                    <div class="w-1/4 rounded-3xl bg-white mb-4">
                        <img class="" src={ADat} alt="" />
                    </div>
                </div>
                <div>
                    <img src={vt} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RegularActivities;
