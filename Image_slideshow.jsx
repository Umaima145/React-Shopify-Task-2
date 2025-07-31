import React, { useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import slideShowImg from '../../src/assets/slide-show-img.png'; // Update path as needed
import './Slideshow.css'; // External CSS for spotlight

const ImageSlideshow = () => {
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <Box
       className="inner-shadow-container"
      
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
          Apps for anything else
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, maxWidth: 700 }}>
          Shopify offers all the essentials out of the box, but if your business calls
          for something extra you have the <a href="#" style={{ color: '#5bc0ff' }}>Shopify App Store</a>
          —with 13,000+ commerce apps for whatever specialized features you might need.
        </Typography>
      </Container>

     <Box
        ref={containerRef}
        className={`scroll-strip ${hover ? 'paused' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}
        >

        <Box
          className="scroll-image"
          sx={{ backgroundImage: `url(${slideShowImg})` }}
        />

        {hover && (
          <div
            className="blue-overlay"
            style={{
              '--mouse-x': `${mousePos.x}px`,
              '--mouse-y': `${mousePos.y}px`,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ImageSlideshow;
