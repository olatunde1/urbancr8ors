import React from 'react'
import { AppBar } from '@mui/material'
import Container from '@mui/material/Container';

const Banner = () => {
  return (
    <AppBar position="static" color=''>
      <Container maxWidth="xl">
        <div className='Banner'></div>
      </Container>
    </AppBar>
  )
}

export default Banner