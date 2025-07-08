import { Box,Typography } from '@mui/material'
import store_banner_1 from '../assets/store-banner-1.webp'
import React from 'react'

const Shopify_back_banner = () => {
  return (
  <Box class="banner-main">

    <Box class="banner-container">
    <Box>
        <img 
        style={{
           
            borderRadius:"8px"
        }}
        src={store_banner_1}/>
        
      <Box class="text-box">
        <Typography
        sx={
          {
            fontSize: "32px",
            lineHeight: "normal",
            fontWeight: "300",
            letterSpacing:"normal",
            paddingBottom:"50px"
          }
        }
        >
          <blockquote>
          “Shopify Capital has given us the funding we need to stock up on inventory and grow rapidly.” 
          </blockquote> 
        </Typography>
        <Typography
        sx={
          {
            fontSize: "18px",
            lineHeight: "normal",
            fontWeight: "300",
            letterSpacing:"normal"
          }
        }
        >
          Jessica Wise
        </Typography>

         <Typography
         sx={
          {
            fontSize: "18px",
            lineHeight: "normal",
            fontWeight: "300",
            letterSpacing:"normal"
          }
        }
        >
          CEO, Hell Babes
        </Typography>

      </Box>  
      
      </Box>

    <Box>
    <Typography sx={{
      color:"white",
      fontSize:"48px",
      fontWeight:"300"
    }}>Shopify has your back</Typography>

    <Typography class="banner-desc">Whether you need help expanding the team, ramping up marketing, or keeping surprise bestsellers in stock, Shopify Capital is here to lend a hand.</Typography>
    
    
    <Box
    sx={{
      borderLeft:"2px solid #36f4a4",
      marginBottom:"20px",
      paddingLeft:"15px"
    }}
    >
    <Typography
    sx={{
      color:"#fff",
      fontSize:"32px",
      fontWeight:"300",
      letterSpacing:"Normal"
    }}
    >$5B loaned out so far</Typography>
    <Typography
    sx={{
      color:"#99b3ad",
      fontSize:"18px",
      fontWeight:"300",
      lineHeight:"Normal",
    }}
    >Invested in Shopify merchants</Typography>
    </Box>

    <Box
    sx={{
      borderLeft:"2px solid #36f4a4",
      marginBottom:"20px",
      paddingLeft:"15px"
    }}
    >
    <Typography
    sx={{
      color:"#fff",
      fontSize:"32px",
      fontWeight:"300",
      letterSpacing:"Normal"
    }}
    >Loans up to $2M</Typography>
    <Typography
    sx={{
      color:"#99b3ad",
      fontSize:"18px",
      fontWeight:"300",
      lineHeight:"Normal",
    }}
    >Offers tailored to meet your needs</Typography>
    </Box>

    <Box
    sx={{
      borderLeft:"2px solid #36f4a4",
      marginBottom:"20px",
      paddingLeft:"15px"
    }}
    >
    <Typography
    sx={{
      color:"#fff",
      fontSize:"32px",
      fontWeight:"300",
      letterSpacing:"Normal"
    }}
    >0% equity</Typography>
    <Typography
    sx={{
      color:"#99b3ad",
      fontSize:"18px",
      fontWeight:"300",
      lineHeight:"Normal",
    }}
    >No stake taken—ever</Typography>
    </Box>

    </Box>

  </Box>
  </Box>
  ) 
}

export default Shopify_back_banner
