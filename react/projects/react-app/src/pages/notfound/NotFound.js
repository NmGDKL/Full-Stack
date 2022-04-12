import React from 'react'
import notFound from '../../assets/default-image.jpg'
import { Container } from './style'


const NotFound = () => {
  return (
    <div style={{ backgroundColor: "rgb(66, 167, 191)" }}>
        <Container>
            <p>Page Not Found</p>
            <img src={notFound} alt="" />
            
        </Container>
    </div>
  )
}

export default NotFound