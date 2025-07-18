import React from 'react';

const Schedule = () => {
    return (
        <div className="schedule container mx-auto bg-light-blue-100 p-10 text-light-blue-500 text-center flex">
            <div className="flex flex-col justify-items-center items-center gap-10">
                <div className="flex-col flex-center gap-10">
                    <h1 className="text-4xl font-anton squiggly-underline">Wedding Details</h1>
                    <div className="flex-col flex-center gap-6">
                        <div className="flex-col flex-center">
                            <h4 className="text-2xl font-anton">When:</h4>
                            <h4>Friday, July 25th, 2025</h4>
                        </div>
                        <div className="flex-col flex-center">
                            <h4 className="text-2xl font-anton">Where:</h4>
                            <h4 className="font-bold text-lg">National Museum of Women in the Arts</h4>
                            <h4>1250 New York Ave NW, Washington DC, DC 20005</h4>
                            <h4>5 PM - 12 AM</h4>
                        </div>
                    </div>
                </div>
                <div className="flex-col flex-center gap-10">
                    <h1 className="text-4xl font-anton squiggly-underline">Day of Schedule</h1>
                    <div className="flex-col flex-center gap-4">
                        <span><b>5:00 PM - 5:30 PM</b>: Arrival at Museum</span>
                        <span><b>5:30 PM</b>: Wedding Ceremony</span>
                        <span><b>6:15 PM</b>: Cocktail Hour</span>
                        <span><b>7:15 PM</b>: Dinner & Toasts</span>
                        <span><b>8:30 PM</b>: Special Performances & Dances</span>
                        <span><b>9:30 PM - Midnight</b>: Let's Dance!</span>
                    </div>
                </div>
                <div className="flex-col flex-center gap-10 bg-light-blue-500 text-light-blue-100 rounded-3xl p-4">
                    <h1 className="text-4xl font-anton squiggly-underline">After Party</h1>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h4 className="font-bold text-lg">Johnny Pistolas</h4>
                            <h4>2333 18th St NW, Washington, DC 20009</h4>
                            <h4>12 AM - 2 AM</h4>
                        </div>
                        <span>**yes...you are expected to rally**</span>
                    </div>
                </div>
                <div className="flex-col flex-center gap-10 bg-light-blue-500 text-light-blue-100 rounded-3xl p-4">
                    <h1 className="text-4xl font-anton squiggly-underline">Brunch the Next Day</h1>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h4 className="font-bold text-lg">Private Terrace and Event Space</h4>
                            <h4>1100 13th St NW, Suite 800, Washington, DC, 20005</h4>
                            <h4>10:30 AM - 1:30 PM</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;