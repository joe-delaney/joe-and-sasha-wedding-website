import React from 'react';
import img1 from '../assets/sasha1.jpg';
import WavyMarquette from './WavyMarquette'

const Home = () => {
    return (
        <div className="homepage">
            <WavyMarquette text="WE ARE GETTING MARRIED!!"></WavyMarquette>
            <div className="container mx-auto p-6 home">
                <div className="flex homepage-container">
                    <img src={img1} alt="sasha and joe on a rooftop" className="rounded-xl w-1/2 homepage-img"/>
                    <div className="w-1/2 flex flex-col homepage-right">
                        <div className="flex flex-col homepage-right-text">
                            <h2 className="text-4xl font-semibold text-light-blue-100">July 25th, 2025</h2>
                            <h2 className="text-4xl font-semibold text-light-blue-100">Washington, D.C.</h2>
                        </div>
                        <button className="homepage-btn text-2xl font-semibold text-light-blue-100 flex">Click to RSVP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;