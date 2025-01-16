import React from 'react';
import img1 from '../assets/sasha1.jpg';
import img2 from '../assets/sasha2.jpg';
import img3 from '../assets/sasha3.jpg';

const Home = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="mb-10 flex flex-col gap-4">
                <h1 className="text-6xl font-anton text-light-blue-500">Sasha and Joe are Getting Married!</h1>
                <h2 className="text-4xl font-semibold text-light-blue-500">Friday, July 25th, 2025 | Washington, D.C.</h2>
            </div>
            <div className="flex justify-between gap-4 max-w-screen">
                <img src={img3} alt="sasha and joe in hawaii" className="w-1/3 object-cover rounded-xl max-h-200"/>
                <img src={img2} alt="sasha and joe in art gallery" className="w-1/3 object-cover rounded-xl"/>
                <img src={img1} alt="sasha and joe on a rooftop" className="w-1/3 object-cover rounded-xl"/>
            </div>
        </div>
    )
}

export default Home;