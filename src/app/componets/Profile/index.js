import React from 'react';
import Avatar from './../../assets/profile_2.png';
import Marker from './../../assets/marker.png';
import Star from './../../assets/star.png';
import Heart from './../../assets/heart.png';
import Heart_1 from './../../assets/heart_1.png';
import Fb from './../../assets/fb.png';
import Linkedin from './../../assets/linkedin.png';
import Skype from './../../assets/skype.png';
import Arrow from './../../assets/arrow.png';
import profileJson from './../../script/profile.json';
import ProfileList from './profileList';

function Profile(){
    return(
    <section className="flex flex-row my-5">

        <ProfileList profileJson={profileJson} />

        <div className="w-full sm:w-3/3 md:w-4/6">
            <div className="px-6 py-5 border w-full bg-white rounded-lg flex flex-col md:flex-row">
                <div className="">
                    <img className="" 
                    src={Avatar} alt="photo"/>
                </div>
                <div className="w-full text-left md:pl-4">
                    <div className="flex flex-row flex-wrap md:flex-nowrap justify-between">
                        <div className="flex flex-col"> 
                            <p className="text-xl text-gray-700 font-bold">Maya Smith</p>
                            <div className="flex flex-row">
                                <img className="pl-0 p-1" src={Marker} alt="photo"/>
                                <p className="text-base font-normal location">Singapore</p>
                            </div>   
                            
                        </div>
                        <div className="flex flex-row py-2 flex-wrap">
                            <div className="flex bg-gray-200 flex-row px-3 py-2 rounded-full favorite">
                                <img className="w-3 h-3 m-1" src={Heart} alt="photo"/> 
                                <p>Add to Favorite</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                            <p className="text-base font-normal email">maya.smith@email.com</p>
                            </div>
                    <div className="flex flex-row flex-wrap md:flex-nowrap justify-between">
                        <div className="flex flex-row flex-wrap justify-start space-x-2 skills">
                            <p className="flex ml-0 m-2 p-2 rounded ">Blockchain</p>
                            <p className="flex m-2 p-2 rounded">Wordpress</p>
                            <p className="flex m-2 p-2 rounded">Java</p>
                            <p className="flex flex-row m-2 p-2 rounded">Angular</p>
                        </div>  
                        <div className="flex flex-row flex-wrap">
                                <div className="flex flex-row m-3 px-2 py-1 rounded star">
                                    <img className="w-3 h-3 m-1" src={Star} alt="photo"/>
                                    <p className="text-yellow-500 font-bold pt-0.5" >4.5</p>
                                </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-10">
                        <div className="p-5 border w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col text-14">
                            <p>Candidates</p>
                            <p className="card-num">752</p>
                        </div>
                        <div className="p-5 border w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col text-14">
                            <p >Interviews</p>
                            <p className="card-num">650</p>
                        </div>
                        <div className="p-5 border w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col text-14">
                            <p >Job Offers</p>
                            <p className="card-num">247</p>
                        </div>
                    </div>
                    <div className="flex flex-col my-10">
                        <h3 className="font-bold pb-6">About</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold">Contacts</h3>

                        <div className="w-full">
                            <div className="flex my-1 py-6 border-b">
                                <div className="w-2/6 h-10 py-3 px-1">
                                    <p className="">Address</p>
                                </div>
                                <div className="w-4/6 h-10 p-3">
                                    <p className="">3763 Dallas St. Simi Valley, New Hampshire 91785 United States</p>
                                </div>
                            </div>
                            <div className="flex my-1 py-6 border-b">
                                <div className="w-2/6 h-10 py-3 px-1">
                                    <p className="">Location</p>
                                </div>
                                <div className="w-4/6 h-10 p-3">
                                    <p className="">Singapore</p>
                                </div>
                            </div>
                            <div className="flex my-1 py-6 border-b">
                                <div className="w-2/6 h-10 py-3 px-1">
                                    <p className="">Phone</p>
                                </div>
                                <div className="w-4/6 h-10 p-3">
                                    <p className="">(120) 555-0113</p>
                                </div>
                            </div>
                            <div className="flex my-1 py-6 border-b">
                                <div className="w-2/6 h-10 py-3 px-1">
                                    <p className="">Email</p>
                                </div>
                                <div className="w-4/6 h-10 p-3">
                                    <p className="">maya.smith@email.com</p>
                                </div>
                            </div>
                            <div className="flex my-1 py-6 ">
                                <div className="w-2/6 h-10 py-3 px-1">
                                    <p className="">Socil Media</p>
                                </div>
                                <div className="w-4/6 p-3">
                                    <div className="flex flex-col">
                                        <a href="#" className="flex flex-row mb-1">
                                            <img className="pl-0 p-1" src={Fb} alt="photo"/>
                                            maya.smith
                                            <img className="p-2" src={Arrow} alt="photo"/>
                                        </a>
                                        <a href="#" className="flex flex-row mb-1">
                                            <img className="pl-0 p-1" src={Skype} alt="photo"/>
                                            maya.smith.1986
                                            <img className="p-2" src={Arrow} alt="photo"/>
                                        </a>
                                        <a href="#" className="flex flex-row mb-1">
                                            <img className="pl-0 p-1" src={Linkedin} alt="photo"/>
                                            real_mayasmith
                                            <img className="p-2" src={Arrow} alt="photo"/>
                                        </a>
                                    </div>
                                </div>
                            </div>  
                            <div className="flex pb-6">
                                <button className="py-2 px-6 view">View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Profile;