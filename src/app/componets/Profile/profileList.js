import React from 'react';
import Marker from './../../assets/marker.png';
import Star from './../../assets/star.png';
import Heart from './../../assets/heart.png';
import Heart_1 from './../../assets/heart_1.png';
import SearchBar from './../SearchBar';


function List(props){
    return(
        <div className="w-full sm:w-1/3 md:w-2/6 mr-5 profile-list">

            <SearchBar/>

            { props.profileJson && props.profileJson.map((profile,index) => (
                
            <div key={index} className={`p-5 mt-5 border w-full rounded-lg sahdow-lg flex flex-col md:flex-row ${index === 1 ? "selected border-yellow-500 border-2" : "bg-white"}`}>
                <div className={index}>
                     <img src={ require(`./../../assets/${profile.img}`).default} alt="Avatar" />
                </div>
                <div className="w-full text-left md:pl-4 md:pr-2">
                    <div className="flex flex-row flex-wrap md:flex-nowrap justify-between">
                        <div className="flex flex-col"> 
                            <p className="text-xl text-gray-700 font-bold">{profile.name}</p>
                            <div className="flex flex-row">
                                <img className="p-1" 
                                src={Marker} alt="photo"/>
                                <p className="text-base font-normal location">{profile.location}</p>
                            </div>   
                        </div>
                        <div className="flex flex-row py-2 flex-wrap">
                            <div className="flex flex-row m-1 py-1 px-2 rounded star" >
                                <img className="p-1" src={Star} alt="photo"/>
                                <p className="text-yellow-500 font-bold pt-0.5">{profile.star}</p>
                            </div>
                            <div className="flex bg-gray-200 flex-row py-2 px-2 rounded-full">
                                {profile.favorite === "0" ? 
                                <img className="h-3 w-3 m-1" src={Heart} alt="photo"/> : <img className="h-3 w-3 m-1" src={Heart_1} alt="photo"/>
                                }
                            </div>
                        </div>
                    </div>
 
                   <div className="flex justify-start space-x-2 mt-1 skills">
                        {profile.skills && profile.skills.map((skill, i) => (
                            <p key={i} className="p-2 rounded">{skill}</p>
                        ))}
                    </div>  
                </div>
            </div>
            ))}
        </div>
    )
}

export default List;