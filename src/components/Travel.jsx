import React from 'react';

const Travel = () => {
    const travelOptions = [
        {
            name: "Grand Hyatt Washington",
            address: "1000 H Street NW, Washington, DC, 20001",
            phone: "(202) 582-1234",
            website: "https://www.hyatt.com/grand-hyatt/en-US/wasgh-grand-hyatt-washington",
            description: "This hotel is about a 5 minute walk and a 1-2 minute drive from the venue.",
        },
        {
            name: "JW Marriott Washington DC",
            address: "1331 Pennsylvania Avenue NW, Washington, DC, 20004",
            phone: "(202)-393-2000",
            website: "https://www.marriott.com/en-us/hotels/wasjw-jw-marriott-washington-dc/overview/?nst=paid&hmGUID=e18758de-9384-4963-b82c-335a0f49e0bb",
            description: "This hotel is about an 8 minute walk and a 3-4 minute drive from the venue.",
        },
        {
            name: "Waldorf Astoria Washington DC",
            address: "1100 Pennsylvania Avenue Northwest, Washington, DC, 20004",
            phone: "(202)-695-1100",
            website: "https://www.hilton.com/en/hotels/dcawawa-waldorf-astoria-washington-dc/",
            description: "This hotel is about a 10 minute walk and a 3-4 minute drive from the venue.",
        },
        {
            name: "Hyatt Regency Crystal City",
            address: "2799 Richmond Hwy, Arlington, VA, 22202",
            phone: "(703) 418 1234",
            website: "https://www.hyatt.com/hyatt-regency/en-US/wasrc-hyatt-regency-crystal-city-at-reagan-national-airport",
            description: "This hotel is a cheaper option very close to the airport and still only about a 15 minute drive from the venue.",
        },
        {
            name: "Ronald Reagan Washington National Airport",
            address: "2401 Ronald Reagan Washington National Airport Access Rd, Arlington, VA 22202",
            phone: "",
            website: "",
            description: "This is the closest airport to the venue and it is about a 10 minute drive away.",
        },
        {
            name: "Washington Union Station",
            address: "50 Massachusetts Ave NE, Washington, DC 20002",
            phone: "",
            website: "",
            description: "This is the closest train station to the venue and it is about an 8 minute drive away.",
        },
    ]

    return (
        <div className="container mx-auto flex-center flex-col">
            <div className="flex flex-col gap-8">
            {travelOptions.map(((option, idx) => (
                <div className="flex-center flex-col max-w-xl gap-2 text-center" key={idx}>
                    <h4 className="font-anton text-2xl text-light-blue-500">{option.name.toUpperCase()}</h4>
                    <h4>{option.address}</h4>
                    {option.phone ? <h4>{option.phone}</h4> : ""}
                    <span>{option.description}</span>
                    {option.website ? <a href={option.website} target="_blank" rel="noreferrer" className="flex-center border w-32 h-8 rounded-lg bg-light-blue-500 text-white">Website</a> : ""}
                </div>
            )))}
            </div>
        </div>
    )
}

export default Travel