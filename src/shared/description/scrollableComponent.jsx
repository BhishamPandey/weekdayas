import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ScrollableComponent = ({ content, initialExpand = false, maxHeight = '5.2em', style = {} }) => {
  const [expandText, setExpandText] = useState(initialExpand);

  const scrollableDivRef = useRef(null);

  const toggleText = () => {
    setExpandText(!expandText);
    if (scrollableDivRef.current && !expandText) {
      scrollableDivRef.current.scrollTop = 0;
    }
  };

  return (
    <div>
      <div
        ref={scrollableDivRef}
        style={{
          maxHeight: maxHeight,
          overflow: expandText ? 'auto' : 'hidden',
          position: 'relative',
          display: '-webkit-box',
          WebkitLineClamp: expandText ? 'none' : '3',
          WebkitBoxOrient: 'vertical',
          backgroundColor: expandText ? '#e8e6f0' : 'white',
          borderRadius: '10px',
          padding: !expandText ? '10px 0px 20px 0px' : '10px 10px 20px 10px',
          fontSize: '0.9rem',
          ...style,
        }}
      >
        {content}
      </div>
      <Button onClick={toggleText} sx={{ marginTop: 1 }}>
        {expandText ? 'Show Less' : 'Show More'}
        <ExpandMoreIcon
          style={{
            transform: expandText ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.3s',
          }}
        />
      </Button>
    </div>
  );
};

export default ScrollableComponent;
