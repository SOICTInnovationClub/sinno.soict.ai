import React from 'react';
import logo_page_1 from '../images/logo_page_1.png';
import logo_page_2 from '../images/logo_page_2.png';
import logo_page_3 from '../images/logo_page_3.png';
import ReactPlayer from 'react-player';

const Contest = () => {
    return (
        <div class="font-sans px-24" style={{ background: "linear-gradient(135deg, #465EFB 0%, #C2FFD8 84.69%)"}}>
            
            <div class="justify-center flex pt-10">
                <div class="text-cente px-6 py-2 w-1/16 rounded-2xl text-white font-black text-6xl" style={{ background: "rgba(190, 248, 27, 0.2)" }}>Contest</div>
            </div>
            <div class="p-10 text-xl">
                <div class="py-4 flex">
                    <div class="w-1/6 justify-center flex bg-white rounded-xl mr-8 px-4 py-2 border shadow-2xl">
                        <img class="w-full" src={logo_page_1} alt="" />
                    </div>
                    <div class="w-5/6 py-8 pr-12">
                        <div class="font-bold">Soict -Hackathoon IBM </div>
                        <div>A technology playground for students  with mã nguồn mở and IBM technology to solve the social problems.</div>
                        <div class="text-blue-700"><a href="">More</a></div>
                    </div>
                </div>
                <div class="py-4 flex">
                    <div class="w-1/6 justify-center flex bg-white rounded-xl mr-8 px-4 py-2 border shadow-2xl">
                        <img class="w-full" src={logo_page_2} alt="" />
                    </div>
                    <div class="w-5/6 pr-12 py-8">
                        <div class="font-bold">Innovation Hackathon 2021</div>
                        <div>Held by SINNO and HIEC club , this was an energetic playground for people who passion about technology as well as ready for the new challenge</div>
                        <div class="text-blue-700"><a href="">More</a></div>
                    </div>
                </div>
                <div class="py-4 flex">
                    <div class="w-1/6 justify-center flex bg-white rounded-xl mr-8 px-4 py-2 border shadow-2xl">
                        <img class="w-full" src={logo_page_3} alt="" />
                    </div>
                    <div class="w-5/6 pr-12 py-8">
                        <div class="font-bold">Innovation day 2022</div>
                        <div>An special event of the year where the competitor show their best idea. The competition was held by HUST and TECHCOMBANK</div>
                        <div class="text-blue-700"><a href="">More</a></div>
                    </div>
                </div>
            </div>
            <div class="justify-center flex pb-10">
                <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-center px-6 py-6 w-1/16 rounded-3xl text-white font-black text-3xl" style={{ background: "linear-gradient(135deg, #C2FFD8 0%, #465EFB 100%)" }}>
                    Other Competitions
                </div>
            </div>
        </div>
    );
}

export default Contest;
