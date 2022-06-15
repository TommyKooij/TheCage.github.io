import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const LoginContainer = styled.div`
  width: auto;
  height: auto;
  background: #fffcf6;
`;

const Container = styled.div`
  margin: 5vh 5vh 5vw 35vw;
  width: 400px;
  height: 320px;
  background: rgb(137, 215, 169);
  background: linear-gradient(
    180deg,
    rgba(137, 215, 169, 1) 0%,
    rgba(84, 193, 129, 1) 100%
  );
  border-radius: 15px;
  border: 1.5px solid #88665d;
`;

const TextContainer = styled.div`
  margin: 15px;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 0.75px #c4be9f;
`;

const FormBlock = styled.input`
  overflow: hidden;
  padding-left: 3px;
  padding-top: 3px;
  margin: 25px 15px 25px 40px;
  height: 32px;
  width: 300px;
  color: grey;
  background-color: white;
  border: 1px solid grey;
  border-radius: 15px;
  &:hover {
    cursor: text;
  }
`;

const LoginBtn = styled.div`
  overflow: hidden;
  margin: 10px 15px 25px 133px;
  height: 32px;
  width: 120px;
  color: white;
  background-color: #67f17e;
  border-radius: 5px;
  border-radius: 15px;
  border: 1px solid #183a37;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const newLoginData = { ...loginData, [e.target.name]: e.target.value };
    setLoginData(newLoginData);
  };
  const { email, password } = loginData;

  return (
    <LoginContainer>
      <div className="siteLogin">
        <Header />
        <Container>
          <TextContainer>Login</TextContainer>
          <FormBlock
            type="email"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={handleFormChange}
          ></FormBlock>
          <FormBlock
            type="password"
            name="password"
            placeholder="Password..."
            value={password}
            onChange={handleFormChange}
          ></FormBlock>
          <LoginBtn>Log In</LoginBtn>
        </Container>
        <Footer />
      </div>
    </LoginContainer>
  );
};

export default Login;
