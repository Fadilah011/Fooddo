import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Helmet from "../components/Helmet/Helmet";
import {  BsHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col, Card } from "react-bootstrap";
import config from '../api/config';
import addReview from '../api/addReview';
import '../style/allfood.css'; 



const AllFood = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/api/v1/foods`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
            apiKey: "w05KkI9AWhKxzvPFtXotUva-"
          }
        });

        setFoods(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
   
  }, []);

  useEffect(() => {
    const handleHover = () => {
      const cards = document.querySelectorAll('.food_card');

      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          card.classList.add('hovered');
        });

        card.addEventListener('mouseleave', () => {
          card.classList.remove('hovered');
        });
      });
    };

    handleHover();
  }, [])
  const handleAddReview = (foodId) => {
    const rating = 5; // Ganti dengan nilai rating yang sesuai
    const comment = "Ini adalah ulasan makanan yang bagus"; // Ganti dengan komentar yang sesuai
    addReview(foodId, rating, comment);
  }

  return (
    <div>
      <Helmet title="All-Foods" />
      <CommonSection title="All foods" />
      <section>
        <Container>
          {error && <p>Error: {error}</p>}
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="sorting_widget text-end"></div>
            </Col>
          </Row>
          <Row>
            {foods.map((food) => (
              <Col key={food.id} lg="3" md="6" sm="6" className="mb-4">
                <Card className="food_card" style={{ width: '300px', height: '400px' }}>
                  <Card.Img className="card_img"variant="top" src={food.imageUrl} alt={food.name} style={{ width: '300px', height: '200px' }} />
                  <Card.Body>
                    <div className='text'>
                    <Card.Title className="card_title">{food.name}</Card.Title>
                    <Card.Text className="card_text">{food.description}</Card.Text>
                    </div>
                    <div className="card_footer">
                      <span className="like_icon"><BsHeartFill /></span>
                      <span className="rating"><FaStar />{food.rating}</span>
                      <Link to={`/food/${food.id}`} className="view_detail">View Detail</Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default AllFood;