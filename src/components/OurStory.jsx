import React from 'react';
import FlipCard from './FlipCard'

const OurStory = () => {

    const funFacts = [
        {
            front: "Do you know Tofu and Blue's original names?",
            back: "Tofu was named heukimja (meaning black sesame seed in Korean), but he was called Imja for short. When we adopted Blue, his name was Ron (and he had a brother named Harry).",
        },
        {
            front: "Sasha and Joe played Super Smash Bros on their first date. Who were their characters?",
            back: "Sasha played with Snake and Joe played with the Ice Climbers. Joe may or may not have won every game...",
        },
        {
            front: "What is Sasha's favorite item from Trader Joe's?",
            back: "Vegan Tikka Masala (at least four are purchased each time we go)",
        },
        {
            front: "What would Joe and Sasha order at the Cheesecake Factory?",
            back: "Avocado Egg Rolls, Korean Fried Cauliflower, and the Four Cheese Pasta",
        },
        {
            front: "What are Joe and Sasha's middle names?",
            back: "Joe's middle name is Anthony and Sasha's middle name is Sasha (and her first name is Nikki).",
        },
        {
            front: "Who do people say are Joe and Sasha's celebrity dopplegangers",
            back: "Zendaya and Tom Holland",
        },
    ]

    return (
        <div className="container mx-auto flex flex-col gap-20">
            <div className="our-story flex flex-col gap-8 justify-items-center bg-light-blue-100">
                <h4 className="text-3xl font-anton text-light-blue-500">And that Tofu and Blue, is how I met your mother...</h4>
                <div className="text-l text-light-blue-500 flex flex-col gap-3">
                    <p>It all began on a chilly Halloween night in 2019 at a party on O Street just outside Georgetown. The floor was sticky, the fridge was stocked with Natty Lites, and the air buzzed with that unmistakable energy of Halloweekend.</p>
                    <p>Joe almost skipped the party but threw on a last-minute Tony Stark costume and showed up. Meanwhile, Sasha made the 45-minute trek from UMD, excited for a night out and a date she had planned later at a bar—completely unaware of the persistent Iron Man impersonator about to enter her life.</p>
                    <p>At the party, Joe spotted a group of girls struggling to take a selfie. One of them immediately caught his eye, so he offered to take the photo. Later, he learned she was his friend Seray’s best friend from middle school. When he casually mentioned his interest, Seray asked, “Which one?” He replied, “The tall one.” She grinned. “I’ll see what I can do.” </p>
                    <p>Sasha, meanwhile, wasn’t exactly swooning over Tony Stark, but she noticed Joe kept finding ways to talk to her. As the group moved to a bar, they spent more time together, laughing and sharing stories. But then, her date arrived. She told Joe she’d be right back. Within minutes of sitting down with her date, she realized she’d much rather be with Joe.  </p>
                    <p>When Joe saw Sasha with another guy, panic set in. He rushed to Seray, convinced he had blown his shot. Just as he was spiraling, Sasha returned, asking for help ditching her date. (Joe may or may not remember the guy as “a total loser”, but that’s up for debate.) A quick escape plan was executed, and Joe’s hopes were restored. </p>
                    <p>From that moment on, Sasha saw Joe differently -- her sweet and now quite cute savior. They spent the rest of the night talking, dancing, and laughing about the chaos of the day.</p>
                    <p>By the end of the night, they shared a slice of pizza, exchanged numbers, and said goodnight... for now. While it’d be easy to say the rest is history, every great rom-com needs a little drama—but that’s a story for another time.  </p>
                    <p>Who would’ve thought that one Halloween night would lead to five years of love, two dogs, their first apartment in NYC, and a lifetime of memories?</p>
                    <p>And if there’s one thing to take away from this story—it’s a huge thank you to Seray.  </p>
                </div>
            </div>
            <div className="flip-cards-container flex flex-col gap-12">
                <h4 className="text-5xl font-anton text-light-blue-100">Fun Facts</h4>
                <div className="flip-cards flex">
                    {
                        funFacts.map(({front, back}) => {
                            return <FlipCard frontText={front} backText={back}></FlipCard>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurStory;