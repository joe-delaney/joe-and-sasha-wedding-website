import React, { useState, useRef, useEffect } from 'react';

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); // Get the full height of the content
    }
  }, [description]); 

  return (
    <div className="accordion">
      <div 
        className="accordion-header"
        onClick={toggleAccordion}
      >
        <span className="font-anton text-light-blue-100">{title}</span>
        <div className="text-light-blue-100 accordion-icon">{isOpen ? '-' : '+'}</div>
      </div>
    <div
        ref={contentRef}
        className={`accordion-content text-light-blue-100 ${isOpen ? 'open' : ''}`}
        style={{
          height: isOpen ? `${contentHeight + 20}px` : '0px',
        }}
    >
        {<p>{description}</p>}
    </div>
    </div>
  );
};

export default Accordion;