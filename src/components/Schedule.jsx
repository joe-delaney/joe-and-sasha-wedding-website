import React from 'react';

const Schedule = () => {
    return (
        <div className="container mx-auto bg-light-blue-500 rounded-2xl p-10 flex flex-col justify-items-center items-center gap-10 text-white">
            <div className="flex-col flex justify-items-center items-center gap-6">
                <h1 className="text-4xl font-anton squiggly-underline">Wedding Details</h1>
                <div className="flex-col flex justify-items-center items-center gap-6">
                    <div className="flex-col flex justify-items-center items-center">
                        <h4 className="text-xl font-anton">When:</h4>
                        <h4>Friday, July 25th, 2025</h4>
                    </div>
                    <div className="flex-col flex justify-items-center items-center">
                        <h4 className="text-xl font-anton">Where:</h4>
                        <h4>National Museum of Women in the Arts</h4>
                        <h4>1250 New York Ave NW, Washington DC, DC 20005</h4>
                    </div>
                </div>
            </div>
            <div className="flex-col flex justify-items-center items-center gap-6">
                <h1 className="text-4xl font-anton squiggly-underline">Day of Schedule</h1>
                <div className="flex-col flex justify-items-center items-center gap-4">
                    <span><b>5:00 PM - 5:30 PM</b>: Arrival at Museum</span>
                    <span><b>5:30 PM</b>: Wedding Ceremony</span>
                    <span><b>6:15 PM</b>: Cocktail Hour</span>
                    <span><b>7:15 PM</b>: Dinner & Toasts</span>
                    <span><b>8:30 PM</b>: Special Performances & Dances</span>
                    <span><b>9:30 PM - Midnight</b>: Let's Dance!</span>
                </div>
            </div>
        </div>
    )
}

export default Schedule;