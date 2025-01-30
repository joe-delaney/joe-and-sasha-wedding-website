import React from 'react';

const Travel = () => {
    return (
        <div className="travel container mx-auto flex-center flex-col bg-light-blue-100 text-light-blue-500">
            <div className="travel-sections flex flex-col gap-8">
                <div className="travel-section flex flex-col gap-6">
                    <span className="travel-header font-anton text-5xl squiggly-underline">Getting to DC</span>
                    <div className="flex travel-items">
                        <div className="flex flex-col gap-3 travel-item">
                            <span className="font-anton text-xl">Ronald Reagan Washington National Airport</span>
                            <p>If flying into Washington, D.C., we recommend choosing to fly into this airport as it is the closest to the venue. It is only about a 10 minute drive from the museum.</p>
                        </div>
                        <div className="flex flex-col gap-3 travel-item">
                            <span className="font-anton text-xl">Washington Union Station</span>
                            <p>If taking the train into Washington, D.C., we recommend choosing this station as the destination stop as it is the closest to the venue. It is only about a 10 minute drive from the museum.</p>
                        </div>
                    </div>
                </div>
                <div className="travel-section flex flex-col gap-6">
                    <span className="travel-header font-anton text-5xl squiggly-underline">Hotels</span>
                    <div className="flex travel-items">
                        <div className="flex flex-col gap-3 travel-item">
                            <span className="font-anton text-xl">Grand Hyatt Washington</span>
                            <p>This hotel is about a 5 minute walk and a 1-2 minute drive from the venue.</p>
                            <a href="https://www.hyatt.com/grand-hyatt/en-US/wasgh-grand-hyatt-washington" target="_blank" rel="noreferrer" className="flex-center border w-32 h-8 rounded-lg bg-light-blue-500 text-white">Website</a>
                        </div>
                        <div className="flex flex-col gap-3 travel-item">
                            <span className="font-anton text-xl">JW Marriott Washington DC</span>
                            <p>This hotel is about an 8 minute walk and a 3-4 minute drive from the venue.</p>
                            <a href="https://www.marriott.com/en-us/hotels/wasjw-jw-marriott-washington-dc/overview/?nst=paid&hmGUID=e18758de-9384-4963-b82c-335a0f49e0bb" target="_blank" rel="noreferrer" className="flex-center border w-32 h-8 rounded-lg bg-light-blue-500 text-white">Website</a>
                        </div>
                        <div className="flex flex-col gap-3 travel-item">
                            <span className="font-anton text-xl">Waldorf Astoria Washington DC</span>
                            <p>This hotel is about a 10 minute walk and a 3-4 minute drive from the venue.</p>
                            <a href="https://www.hilton.com/en/hotels/dcawawa-waldorf-astoria-washington-dc/" target="_blank" rel="noreferrer" className="flex-center border w-32 h-8 rounded-lg bg-light-blue-500 text-white">Website</a>
                        </div>
                        <div className="flex flex-col gap-3 travel-item">
                            <span className="font-anton text-xl">Washington Union Station</span>
                            <p>This hotel is a cheaper option very close to the airport and still only about a 15 minute drive from the venue.</p>
                            <a href="https://www.hyatt.com/hyatt-regency/en-US/wasrc-hyatt-regency-crystal-city-at-reagan-national-airport" target="_blank" rel="noreferrer" className="flex-center border w-32 h-8 rounded-lg bg-light-blue-500 text-white">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel