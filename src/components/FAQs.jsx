import React from 'react';

const FAQs = () => {

    const faqs = [
        {
            question: "What is the dress code for the wedding?",
            answer: "Indian formal or Black tie optional"
        },
        {
            question: "What date should I RSVP by?",
            answer: "June 25th, 2025"
        },
        {
            question: "Can I bring a date?",
            answer: "We will only be able to accommodate those listed on your invitation. Therefore, we regretfully ask our guests to please not bring a plus one, unless they are specifically named on the invitation."
        },
        {
            question: "Can I bring my kids?",
            answer: "We intend for this to be an adult only event."
        },
        {
            question: "Is there a group hotel block? Where should we stay if we are coming out of town?",
            answer: "As the event is in the heart of DC, we did not get a hotel block. We recommend reserving a room at one of the nearby hotels listed in the Travel section of this wedding website."
        },
        {
            question: "Will the wedding be indoors or outdoors?",
            answer: "The wedding ceremony and reception will be entirely indoors."
        },
        {
            question: "Is there parking available at the wedding venue?",
            answer: "The museum is located in the middle of DC, so there is no museum specific lot for the wedding. There are various paid parking garages nearby, but we recommend ubering to and from your hotel for maximum convenience."
        },
        {
            question: "Will there be an open bar?",
            answer: "There will be unlimited beer and wine as well as two signature cocktails. The caterer can also use any of the hard alcohol in the signature cocktails to make other rail drinks as well."
        },
        {
            question: "What type of food will be served at your wedding?",
            answer: "We'll be serving hors d'oeuvres at cocktail hour followed by a sit-down dinner including a salad, a main dish (to be selected when you RSVP), and dessert. Please note that our wedding will be fully vegetarian and we are confident that all of the items offered will have all guests leaving happy and satisfied!"
        },
        {
            question: "Will there be meal options for guests with dietary restrictions or allergies?",
            answer: "Please list any dietary restrictions when you RSVP and we will work with our caterer to ensure there is an option available."
        },
        {
            question: "What time will the wedding reception end? Is there an after-party?",
            answer: "The wedding reception will end at midnight. There will be an after party at the bar where Sasha and Joe spent their first night out together, Johnny Pistolas, from 12 AM - 2 AM"
        },
        {
            question: "I have more questions about your wedding, who can I contact?",
            answer: "Feel free to shoot us an email at joseph.delaney546@gmail.com or send us a quick text directly."
        },
    ]

    return (
        <div className="container mx-auto flex-center flex-col">
            <div className="flex flex-col gap-6">
            {faqs.map(((faq, idx) => (
                <div className="flex flex-col max-w-xl gap-2" key={idx}>
                    <h4 className="text-2xl font-semibold text-light-blue-500">{faq.question}</h4>
                    <h4 className="text-light-blue-900">{faq.answer}</h4>
                </div>
            )))}
            </div>
        </div>
    )
}

export default FAQs;