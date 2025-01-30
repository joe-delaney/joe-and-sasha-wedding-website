import React from 'react'

const FlipCard = ({frontText, backText}) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front font-anton text-xl">
                    { frontText }
                </div>
                <div class="flip-card-back text-l">
                    { backText }
                </div>
            </div>
        </div>
    )
}

export default FlipCard;