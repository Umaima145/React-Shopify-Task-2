import { Box } from '@mui/material'
import store_banner_1 from '../assets/store-banner-1.webp'
import React from 'react'

const Shopify_back_banner = () => {
  return (
  <Box sx={{
    background:"#041e18",
    padding:"80px"
  }}>
    <Box>
        <img 
        style={{
           
            borderRadius:"8px"
        }}
        src={store_banner_1}/>
    </Box>
  </Box>
  ) 
}

export default Shopify_back_banner
