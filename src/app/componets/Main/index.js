import React from 'react';
import Header from './../Header';
import ProfileCard from './../Profile';
import './../../../App.css';
import './../../style/style.scss';

function Main(){
    return (
        <div className="App">
            <Header/>
            <div className="">
                <div className="flex bg-white">
                    <div className="flex container mx-auto px-4 justify-between">
                    <div className="flex sm:flex-row">
                        <button className="font-bold nav-text text-black py-4 mr-6 block hover:text-blue-500 focus:outline-none border-b-2 border-yellow-500">
                            Dashboard
                        </button>
                        <button className="nav-text text-black py-4 mx-6 block hover:text-blue-500 focus:outline-none">
                            My Network
                        </button>
                        <button className="nav-text text-black py-4 mx-6 block hover:text-blue-500 focus:outline-none">
                           Jobs
                        </button>
                        <button className="nav-text text-black py-4 mx-6 block hover:text-blue-500 focus:outline-none">
                           Applicants
                        </button>
                        <button className="nav-text text-black py-4 mx-6 block hover:text-blue-500 focus:outline-none">
                           Wallet
                        </button>
                        <button className="nav-text text-black py-4 mx-6 block hover:text-blue-500 focus:outline-none">
                           Chat
                        </button>
                        <button className="nav-text text-black py-4 mx-6 block hover:text-blue-500 focus:outline-none">
                           Performance
                        </button>
                    </div>
                    <div className="flex">
                        <p className="py-4 date">Saturday, June 10, 2021</p>
                    </div>
                    </div>
                  
                </div>
                <div className="container mx-auto">
                    <div className="flex my-10">
                        <h1 className="font-normal text-3xl" style={{color:'#1F263E'}}>Recruiters</h1>
                    </div>

                    <ProfileCard/>
                </div>
            </div>
        </div>
    )
}

export default Main;