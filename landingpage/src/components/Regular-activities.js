import React from 'react';
import frame_6_1 from '../images/frame_6_1.png';
import frame_6_2 from '../images/frame_6_2.png';
import frame_6_3 from '../images/frame_6_3.png';
const RegularActivities = () => {
    return (
        <div class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 pt-10 text-xl">
            <div class="font-bold w-1/6 pl-6 py-2 text-2xl rounded-r-xl bg-pink-300 shadow-2xl">
                Regular activities
            </div>
            <div class="flex justify-between pt-10 pb-20">
                <div class="w-1/4 bg-gray-300 ml-20 mb-16 mt-20 rounded-xl p-4 shadow-2xl">
                    <div class="flex justify-center">
                        <img class="h-64" src={frame_6_1} alt="" />
                    </div>
                    <div class="px-6 pb-6">
                        <div class="font-bold text-xl text-center">Co-working </div>
                        <div>Members continously dicuss, share experience and contribute to develop products as well as ideas for competition.</div>
                    </div>
                </div>
                <div class="w-1/4 bg-red-400 mt-36 rounded-xl p-4 shadow-2xl">
                    <div class="flex justify-center">
                        <img class="h-64" src={frame_6_2} alt="" />
                    </div>
                    <div class="px-6 pb-6">
                        <div class="font-bold text-xl text-center">Seminar</div>
                        <div>Involving in many seminars from big companies to get used to culture,environment and career prospect in working world.</div>
                    </div>
                </div>
                <div class="w-1/4 bg-red-100 mr-20 mb-36 rounded-xl p-4 shadow-2xl">
                    <div class="flex justify-center">
                        <img class="h-64" src={frame_6_3} alt="" />
                    </div>
                    <div class="px-6 pb-6">
                        <div class="font-bold text-xl text-center">Training </div>
                        <div>Trained by senior from different majjors each semester.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegularActivities;
