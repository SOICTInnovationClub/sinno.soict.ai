import React from 'react';
import fb from '../images/fb.png'
import git from '../images/git.png'
import insta from '../images/insta.png'
import linked from '../images/linked.png'
import sinno from '../images/sinno.png'


const Contact = () => {
    return (
        <div class="px-28 font-sans py-10" style={{ background: "linear-gradient(135deg, #C2FFD8 0%, #465EFB 100%)" }}>
            <div class="relative h-0" style={{ zIndex:0 }}>
                <div class="relative rounded-full" style={{width: '175px', background: 'rgba(255, 210, 111, 0.2)',
                height: '175px',left: '150px', bottom: '220px'}}>  
                </div>
                <div class="relative rounded-full" style={{width: '175px', background: 'rgba(202, 38, 255, 0.2)',
                height: '175px',left: '800px', bottom: '150px'}}></div>
                <div class="relative rounded-full" style={{width: '140px', background: {sinno},
                height: '140px',left: '1000px', bottom: '40px'}}>
                    <img class="w-full opacity-50" src={sinno} alt="" />
                </div>
            </div>
            <div class="pb-4 text-white text-xl font-bold" style={{ zIndex:5 }}>Contact information </div>
            <div class="rounded-2xl bg-white p-8 w-2/3 text-xl shadow-3xl border-2" style={{ zIndex:5 }}>
                <form action="" style={{ zIndex:5 }}>
                    <input class="w-full p-3 border shadow-lg rounded-xl pl-3 mb-4 outline-none" type="text" placeholder='Email or phone numbers' style={{ zIndex:5 }}/>
                    <div class="flex">
                        <input class="w-1/2 p-3 border shadow-lg rounded-xl pl-3 mr-2 outline-none" type="text" placeholder='First name'/>
                        <input class="w-1/2 p-3 border shadow-lg rounded-xl pl-3 ml-2 outline-none" type="text" placeholder='Lastname' style={{ zIndex:5 }}/>
                    </div>
                </form>
            </div>
            <div class="flex mt-10">
                <div class="text-white w-5/12">
                    <div class="text-3xl font-bold pt-4 pb-1">Our address</div>
                    <div class="">205, B1, Hanoi University of Science and Technology </div>
                    <div class="py-8">sinno@soict.hust.edu.vn</div>
                    <div class="">2022 SINNO. All right reserved.</div>
                </div>
                <div class="text-white pl-10">
                    <div class="text-3xl font-bold py-4">
                        Contact with us
                    </div>
                    <div class="flex">
                        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 w-14">
                            <a href="https://www.facebook.com/SINNOclub" target="_blank">
                                <img src={fb} alt="" />
                            </a>
                        </div>
                        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 w-16">
                            <a href="https://github.com/SOICTInnovationClub" target="_blank">
                                <img src={git} alt="" />
                            </a>
                        </div>
                        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-1 w-16">
                            <a href=""  target="_blank">
                                <img src={insta} alt="" />
                            </a>
                        </div>
                        <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-1 w-16">
                            <a href=""  target="_blank">
                                <img src={linked} alt="" />
                            </a>
                        </div>   
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;
