import React from 'react';
import img1 from '../assets/our-story-1.jpg';
import img2 from '../assets/our-story-2.jpg';
import img3 from '../assets/our-story-3.jpg';

const OurStory = () => {

    return (
        <div className="container mx-auto flex flex-col gap-10 justify-items-center">
            <div className="flex justify-items-between gap-10 items-center">
                <div className="flex flex-col gap-2">
                    <p>It all started on Halloween 2019 at a party on O Street right outside Georgetown. Sasha, dressed as an angel, met Joe, dressed as Tony Stark (minus the goatee). After a night of great conversation and a little help from Sasha’s friend Seray, they exchanged numbers—because what better way to start a love story than with a little Halloween magic?</p>
                    <p>We didn’t talk much after that, just some sporadic texting and the occasional Snapchat. But when Sasha posted a story about playing Super Smash Bros., Joe couldn’t resist. He challenged her to a match, and thus began our first official date. We grabbed margaritas at El Centro, then went head-to-head in Smash Bros. Sasha was Snake; Joe was the Ice Climbers. Spoiler: Joe won every match (but she’s still convinced it was a fluke).</p>
                    <p>Over the next few months, we went on more dates, including Sasha being Joe’s date to ZY Formal and Joe visiting UMD for a night out at Turf. Then in March 2020, COVID hit. Sasha went home to Maryland, and Joe stayed on campus, but we weren’t about to let distance stop us. Facetime, puzzles, text games—we did everything we could to stay close. And then, on March 29, 2020, Joe officially asked Sasha to be his girlfriend.</p>
                </div>
                <img src={img3} className="w-1/2 object-cover rounded-xl img-h"/>
            </div>
            <div className="flex justify-items-between gap-10 items-center">
                <img src={img2} className="w-1/2 object-cover rounded-xl img-h"/>
                <div className="flex flex-col gap-2">
                    <p>Through the pandemic, we learned to navigate long-distance love, and in June 2020, Joe made the trip to Maryland to meet Sasha’s family. The pandemic had forced Sasha to invite him so early in the relationship, but even though they’d only seen each other virtually for months, things quickly clicked, and it felt like they had never been apart.</p>
                    <p>By March 2021, we were both in New York City. And in true city fashion, we found apartments across the street from each other on Park Avenue. After spending over a year in long-distance, we were finally able to explore the city together. We tried new restaurants, went to fun bars, and explored together on countless evening walks. There was so much to do, and it felt like the city was ours to discover.</p>
                    <p>In March 2023, we made the leap to move in together in a cozy one-bedroom apartment in Gramercy Park. It quickly became our first real home, filled with love and laughter. Then, in July 2023, we adopted our first dog, Tofu. After some paperwork and a few too many questions about the fact that he was in Korea, we decided we couldn’t live without him. He brought so much joy into our lives, and we couldn't imagine our days without him.</p>
                </div>
            </div>
            <div className="flex justify-items-between gap-10 items-center">
                <div className="flex flex-col gap-2">
                    <p>But we weren’t done. A few months later, in July 2024, we saw another adoption post for a dog named Blue. The adoption event was just a five-minute walk from our apartment, so we thought, "Why not go check him out?" Within minutes of meeting him, we knew he was meant to be ours. We brought Blue home the same day, and just like that, our family grew.</p>
                    <p>Then came the big moment. On July 25, 2024, Joe proposed. He spent the day setting up the apartment with flowers, candles, and most important of all, tuxedos for the dogs. Sasha had no idea it was happening. When she walked in, she was completely shocked, and of course, she said yes. We celebrated with our families at Kimberly Rooftop, celebrating our engagement in the very same spot we celebrated our one year dating anniversary.</p>
                    <p>In between all these milestones, we’ve traveled the world—Hawaii, Japan, Italy, and more local trips to Bar Harbor, Upstate New York, and Woodloch in the Poconos, where Sasha lovingly refers to it as "White People Camp." Every adventure has been a testament to our love, and we can’t wait for the many more to come. July 25th, 2025 is only the beginning!</p>
                </div>
                <img src={img1} className="w-1/2 object-cover rounded-xl img-h"/>
            </div>
            <h4 className="text-3xl font-anton text-light-blue-500">And that Tofu and Blue, is how I met your mother</h4>
        </div>
    )
}

export default OurStory;