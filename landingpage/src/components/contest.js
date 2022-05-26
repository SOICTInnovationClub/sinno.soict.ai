import React from 'react';
import logo_page_1 from '../images/logo_page_1.png';
import logo_page_2 from '../images/logo_page_2.png';
import logo_page_3 from '../images/logo_page_3.png';

const Contest = () => {
    return (
        <div class="bg-gradient-to-b from-blue-500 via-blue-400 to-green-300 px-24">
            <div class="justify-center flex pt-10">
                <div class="text-center bg-blue-400 px-6 pb-1 w-1/16 rounded-md text-white font-bold text-2xl">Contest</div>
            </div>
            <div class="pl-10">
                <div class="p-4 flex">
                    <div class="w-1/6 justify-center flex bg-white rounded-md mr-8 px-4 py-2 border">
                        <img class="h-36 w-5/6" src={logo_page_1} alt="" />
                    </div>
                    <div class="w-5/6 py-8 pr-12">
                        <div class="font-bold">Soict -Hackathoon IBM </div>
                        <div>A technology playground for students  with mã nguồn mở and IBM technology to solve the social problems.</div>
                        <div class="text-blue-700"><a href="">More</a></div>
                    </div>
                </div>
                <div class="p-4 flex">
                    <div class="w-1/6 justify-center flex bg-white rounded-md mr-8 px-4 py-2 border">
                        <img class="h-36 w-5/6" src={logo_page_2} alt="" />
                    </div>
                    <div class="w-5/6 pr-12 py-8">
                        <div class="font-bold">Innovation Hackathon 2021</div>
                        <div>Held by SINNO and HIEC club , this was an energetic playground for people who passion about technology as well as ready for the new challenge</div>
                        <div class="text-blue-700"><a href="">More</a></div>
                    </div>
                </div>
                <div class="p-4 flex">
                    <div class="w-1/6 justify-center flex bg-white rounded-md mr-8 px-4 py-2 border">
                        <img class="h-36 w-5/6" src={logo_page_3} alt="" />
                    </div>
                    <div class="w-5/6 pr-12 py-8">
                        <div class="font-bold">Innovation day 2022</div>
                        <div>An special event of the year where the competitor show their best idea. The competition was held by HUST and TECHCOMBANK</div>
                        <div class="text-blue-700"><a href="">More</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contest;