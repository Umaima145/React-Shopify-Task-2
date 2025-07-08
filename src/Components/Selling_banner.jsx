import { Box, Link, Typography } from '@mui/material'
import banner_img from '../assets/selling-banner.png'
import React from 'react'

const Selling_banner = () => {
  return (
    <>
    <Box
    class="selling-banner-container" 
    sx={{
        background:"#02090a",
        padding:"40px 80px"
    }}
    >
       <Typography sx={{
        color:"#30deee",
        fontSize:"22px",
        fontWeight:"400"
       
        }}
        >
            Online and in person</Typography>
       <Box class="selling-banner-textContainer">
        <Typography class="selling-banner-heading">Sell here, there, and everywhere</Typography>
        <Typography
        sx={{
            color:"#9797a2",
            fontSize:"18px",
            fontWeight:"200",
        }}
        >
        Get a stunning store that’s made to sell—whether you build from scratch or start fast with pre-built themes.</Typography>
       </Box>
       <Box>
        <img src={banner_img} width={"100%"}/>
       </Box>
    </Box>
    </>
  )
}

export default Selling_banner