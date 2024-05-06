import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ScrollableComponent = ({ content, initialExpand = false, maxHeight = '5.2em', style = {} }) => {
  // State to manage the expanded state of the content
  const [expandText, setExpandText] = useState(initialExpand);

  // useRef hook to reference the scrollable div element
  const scrollableDivRef = useRef(null);

  
  const toggleText = () => {
    setExpandText(!expandText);
    if (scrollableDivRef.current && !expandText) {
      // Scroll to the top only when collapsing the content
      scrollableDivRef.current.scrollTop = 0;
    }
  };

  return (
    <div>
      <div
        ref={scrollableDivRef}
        style={{
          maxHeight: maxHeight, // Maximum height for collapsed content
          overflow: expandText ? 'auto' : 'hidden', // Allow scrolling when expanded, hide overflow when collapsed
          position: 'relative',
          display: '-webkit-box',
          WebkitLineClamp: expandText ? 'none' : '3', // Clamp lines when collapsed (using Webkit-specific property)
          WebkitBoxOrient: 'vertical', // Text direction for line clamping
          backgroundColor: expandText ? '#e8e6f0' : 'white', // Change background color on expansion
          borderRadius: '10px',
          padding: !expandText ? '10px 0px 20px 0px' : '10px 10px 20px 10px', // Adjust padding based on expansion state
          fontSize: '0.9rem',
          ...style, // Apply additional styles from props
        }}
      >
        {content}
      </div>
      <Button onClick={toggleText} sx={{ marginTop: 1 }}>
        {/* Display appropriate text and icon based on expansion state */}
        {expandText ? 'Show Less' : 'Show More'}
        <ExpandMoreIcon
          style={{
            transform: expandText ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.3s', // Animate icon rotation on toggle
          }}
        />
      </Button>
    </div>
  );
};

export default ScrollableComponent;
