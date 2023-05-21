import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/common-section/CommonSection";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        console.error("Password and confirm password do not match");
        return;
      }
      const response = await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/register",
        {
          name: name,
          email: email,
          password: password,
          passwordRepeat: confirmPassword,
          role: role,
          phoneNumber: phoneNumber,
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
      
      // Set username state
      const userResponse = await axios.get(
        "https://api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
     
      const user = userResponse.data;
      setUsername(user.username);

      navigate("/home");
    } catch (error) {
      console.error(error);
      console.log("sukses register");
    }
  };


  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
    <Container>
      <Row>
        <Col lg="6" md="8" className="m-auto text-center">
        <FormGroup>
                  <Input
                    type="text"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
          <Form onSubmit={handleRegister}>
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
            <FormGroup>
                  <Input
                    type="password"
                    required
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormGroup>
            <FormGroup>
              <Input
                type="select"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">-- Select Role --</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="tel"
                required
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" color="primary" className="register_btn">
              Register
              </Button>
          </Form>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </Col>
      </Row>
    </Container>
    </Helmet>
  );
};

export default Register;
