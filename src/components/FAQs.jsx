import React from 'react';
import WeddingAccordion from './Accordion'

const FAQs = () => {

    const faqs = [
        {
            question: "What is the dress code for the wedding?",
            answer: "<b>Black Tie Optional / Indian Formal:</b> Think elegant and dazzling! Tuxes, gowns, or your finest indian outfits are preferred, but a sharp suit or a chic cocktail dress will do just fine. Dress to impress, but most importantly, dress to dance and have fun!"
        },
        {
            question: "What date should I RSVP by?",
            answer: "<b>RSVP by June 16th, 2025: </b> Please let us know if you’ll be joining us by June 16th, 2025. Your RSVP helps us plan all the details, from seating to dinner to dance floor space! We can’t wait to celebrate with you—don’t leave us hanging!"
        },
        {
            question: "Can I bring a date?",
            answer: "To keep our celebration intimate (and make sure there’s enough champagne to go around!), we can only accommodate the names listed on your invitation. Thank you for understanding—we can’t wait to celebrate with you!"
        },
        {
            question: "Can I bring my kids?",
            answer: "We adore your kids, but we intend for this to be an adult-only event. Take the night off, dress up, and get ready to celebrate—kid-free!"
        },
        {
            question: "Is there a group hotel block? Where should we stay if we are coming out of town?",
            answer: "We didn’t secure a hotel block, as the venue is centrally located in DC. But don’t worry—there are plenty of great hotels nearby! You can find a list of options in the Travel section of this website to help with your stay."
        },
        {
            question: "Will the wedding be indoors or outdoors?",
            answer: "No need to check the forecast—our entire wedding and reception will be <b>indoors!</b> So come ready to celebrate, no umbrella required!"
        },
        {
            question: "Is there parking available at the wedding venue?",
            answer: "Since the museum is in the heart of DC, there’s no dedicated parking lot. However, there are several paid parking garages nearby. For a stress-free experience, we recommend taking an Uber or Lyft to and from your hotel!"
        },
        {
            question: "Will there be an open bar?",
            answer: "<b>Absolutely!</b> We’ll be serving unlimited beer and wine, along with two handcrafted signature cocktails (Blue's Blueberry Mojito and Tofu's Mango Margherita). Our caterer can also create rail drinks using the spirits from our signature selections. We look forward to toasting with you!"
        },
        {
            question: "What type of food will be served at your wedding?",
            answer: "<div class='menu-faq-container'><div>We’re excited to share a delicious, fully vegetarian meal with you! Cocktail hour will feature tasty hors d'oeuvres, followed by a sit-down dinner with a fresh salad, your choice of entrée (selected when you RSVP), and a sweet dessert. Whether you’re vegetarian or not, we promise a meal that will leave you happy and satisfied!</div><div class='food-options'><b class='underline'>Entree Choices:</b><span><b>Tofu’s Tikka</b> – A flavorful Indian fusion dish served with basmati rice</span><span><b>Porcini Mushroom Ravioli</b> – Paired with asparagus for a rich, comforting bite</span><span><b>Sesame Soba Noodles with Fried Tofu</b> – A noodle dish with bold flavors and a bit of heat</span></div></div>"
        },
        {
            question: "Will there be meal options for guests with dietary restrictions or allergies?",
            answer: "We want all our guests to enjoy a delicious meal! If you have any dietary restrictions, please let us know when you RSVP, and we’ll coordinate with our caterer to accommodate your needs."
        },
        {
            question: "What time will the wedding reception end? Is there an after-party?",
            answer: "The reception will end at midnight, but if you’re not ready to call it a night, join us for an after-party at Johnny Pistolas! It’s a special spot for us—it’s where we had our first night out together! We’ll be there from 12 AM to 2 AM, and we’d love for you to keep the celebration going with us!"
        },
        {
            question: "I have more questions about your wedding, who can I contact?",
            answer: "Feel free to shoot us an email at joseph.delaney546@gmail.com or send us a quick text directly."
        },
    ]

    return (
        <div className="container mx-auto flex-center flex-col">
            <h4 className="faq-header text-4xl font-anton text-light-blue-100">We knew you were gonna ask that...</h4>
            <div className="flex flex-col faqs-container">
            {faqs.map(((faq, idx) => (
                <WeddingAccordion title={faq.question} description={faq.answer} key={`faq-${idx}`}></WeddingAccordion>
            )))}
            </div>
        </div>
    )
}

export default FAQs;