import React from 'react';
import img1 from '../assets/sasha1.jpg';
import gif from '../assets/lance-lebron-blow.gif'
import WavyMarquette from './WavyMarquette'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homepage bg-light-blue-500">
            <WavyMarquette text="WE ARE GETTING MARRIED!!"></WavyMarquette>
            <div className="flex homepage-section-1 bg-light-blue-500">
                <img src={img1} alt="sasha and joe on a rooftop" className="rounded-xl w-1/2 homepage-img"/>
                <div className="w-1/2 flex flex-col homepage-right">
                    <div className="flex flex-col homepage-right-text">
                        <h2 className="text-4xl font-semibold text-light-blue-100">July 25th, 2025</h2>
                        <h2 className="text-4xl font-semibold text-light-blue-100">Washington, D.C.</h2>
                    </div>
                    <NavLink to="/rsvp">
                        <button className="homepage-btn text-2xl font-semibold text-light-blue-100 flex">Click to RSVP</button>
                    </NavLink>
                </div>
            </div>
            <div className="relative rounded-bottom-container">
                <div className="absolute rounded-bottom"></div>
            </div>
            <div className="homepage-section-2">
                    <div className="gif-text-header flex flex-col">
                        <h4 className="text-6xl text-light-blue-500 font-anton">Don't BLOW it!</h4>
                        <span className="gif-text-subheader text-light-blue-500 text-xl"><NavLink to="/rsvp" className="underline">RSVP</NavLink> today for a celebration you will never forget! </span>
                    </div>
                    <img src={gif} alt="lance stephenson blowing in Lebron's ear" className="homepage-gif"></img>
            </div>
        </div>
    )
}

export default Home;