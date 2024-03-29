import React from 'react';
import '../Css-file/Section2.css'
import '../Css-file/Section2sub.css'
import { Container,Row,Col } from 'react-bootstrap';
import { IoMdArrowDropright } from "react-icons/io";



function Section2sub1() {

  const hotelCards = [
      {
        offer:'7% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Flime.png&w=1920&q=75',
        title: 'Fresh Line',
        amount:'US$135.78',
      },
      {
        offer:'9% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FMiniPeppers.png&w=1920&q=75',
        title: 'Mini Papers',
        amount:'US$100.10',

      },
      {
        offer:'6% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75',
        title: 'Fresh Strawberry',
        amount:'US$98.70',
      },

    ]
  
  return (
    <Container className='first-carousel-container'>
           <Row className='first-carousel-row'>
      <Col md={6}>
      <div>     
      <h3 className='first-carousel-products'>All Products</h3>
      <p className='first-carousel-collections'>Best collection in 2021 for you!</p>
      </div>

      </Col>
      <Col className="first-carousel-col"md={6}>
        <div className='first-carousel-viewbtn'>
          <span>View all<IoMdArrowDropright  /></span>

        </div>
      </Col>
      </Row>
    <div className='first-carousel ms-auto'>
     
        {hotelCards.map((card, index) => (
          <div key={index} className='first-carousel-card1 '>
            <div className='first-carousel-color'>
            <p className='first-carousel-offer'>{card.offer}</p>
            <img src={card.imageSrc} alt={card.title} className='first-carousel-image' />
            <p className='first-carousel-title-name'>{card.title}</p>
            <p className='first-carousel-ml'>300ml</p>
            <div className='d-flex' >
            <span className='first-carousel-rating d-flex'>{card.amount}</span> 
            <span className='first-carousel-deleted' ><del>{card.amount}</del></span>
            </div>
            </div>
          </div>
        ))}

    </div>
    </Container>
  );
}

export default Section2sub1