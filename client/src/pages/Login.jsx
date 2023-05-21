import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
import "../style/login.css";
import Favorite from "./Favorite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      await fetchUserData(token);

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(
        "https://api-bootcamp.do.dibimbing.id/api/v1/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Update state dengan data pengguna dari API
      setUsername(response.data.username);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  if (username) {
    // Jika nama pengguna tersedia, tampilkan komponen lain setelah login
    return <Favorite username={username} />;
  } else {

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6" className="m-auto text-center">
              <Form className="mb-5" onSubmit={handleLogin}>
                <FormGroup>
                  <Input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button
                  type="submit"
                  color="primary"
                  className="addTologin_btn"
                >
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
              {username && <p>Signed in as: {username}</p>}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
}
export default Login;
