import React from 'react'

const WavyMarquette = ( { text, numItems = 5 } ) => {
    const itemList = []

    for (let i = 0; i < numItems; i++) {
        itemList.push(
            <text className="animated-text font-anton"  dominant-baseline="middle" fill="white">
            <textPath
              startOffset="100%"
              href="#p1"
              className="text-4xl"
            >
              { text }
              <animate attributeName="startOffset" from="100%" to="-100%"
                    dur="10s" begin={`${i * 2}s`} repeatCount="indefinite" />
            </textPath>
          </text>
        );
    }

    
    return (
        <div className="marquette">
            <svg width="100%" height="200px" viewBox="0 0 1098.72 100">
            <symbol id="s1">
            <path
            id="p1"
            d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"
            />
            </symbol>
    
            <use href="#s1" className="path" />

            { itemList }
        </svg>
      </div>
    )
}

export default WavyMarquette