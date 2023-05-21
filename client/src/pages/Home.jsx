import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from "../assets/images/carousel1.png";
import carousel2 from "../assets/images/carousel2.png";
import carousel3 from "../assets/images/carousel3.png";
import '../style/home.css'; 

const Home = () => {
  return (
    <div className="home">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="Slide 1"
          />
          <Carousel.Caption className="text-center"> 
            <p>The beauty of healthy food is not only visible from its appearance, but also provides benefits for the well-being of the soul.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Slide 1"
          />
          <Carousel.Caption className="text-center"> 
            <p> Find healthy food recipes that are not only good for your body, but also appetizing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Slide 2"
          />
          <Carousel.Caption className="text-center">
            <p>Get the best nutrition from natural foods rich in vitamins, minerals and fiber. Make healthy choices for a better life!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
