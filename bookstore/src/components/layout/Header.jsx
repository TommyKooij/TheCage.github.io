import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoSite from "../../img/png-transparent-birdcage-drawing-bird-animals-pet-color.png";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 30px;
  background: rgb(156, 141, 143);
  background: linear-gradient(
    0deg,
    rgba(156, 141, 143, 1) 0%,
    rgba(132, 117, 119, 1) 100%
  );
  border: 1.5px #88665d;
  border-style: hidden hidden groove hidden;
`;

const Navigatie = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 40px;
  width: auto;
  height: 100%;
  padding: 0px 10px;
`;

const Logo = styled.div`
  margin: 40px 0px 0px 0px;
`;

const ButtonsHeader = styled.div`
  display: flex;
`;

const ButtonHeader = styled.button`
  position: relative;
  display: inline-block;
  height: 40px;
  width: 100px;
  margin: 10px;
  text-align: center;
  font-size: 20px;
  color: white;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  -webkit-text-stroke: 0.5px black;
  &:hover {
    cursor: pointer;
    color: #22d55e;
    -webkit-text-stroke: 0.5px #567568;
  }
`;

const AddBook = styled.button`
  height: 50px;
  width: 130px;
  color: white;
  background-color: #22d55e;
  text-align: center;
  border: 1px solid #22d55e;
  border-radius: 10px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #20c758;
  }
`;

const AccountButton = styled.button`
  display: inline-box;
  background: grey;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    background: #404e4d;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          <div className="header_image_site">
            <img src={logoSite} alt="logo" width="110px" height="110px"></img>
          </div>
        </Logo>
      </Link>
      <Navigatie>
        <ButtonsHeader>
          <Link to="/Novels">
            <ButtonHeader>Novels</ButtonHeader>
          </Link>
          <Link to="/Sketches">
            <ButtonHeader>Sketches</ButtonHeader>
          </Link>
        </ButtonsHeader>
        <Link to="/AddBook">
          <AddBook>+ Add Book</AddBook>
        </Link>
        <Link to="/Login">
          <AccountButton>
            <div className="account_button"></div>
          </AccountButton>
        </Link>
      </Navigatie>
    </HeaderContainer>
  );
};

export default Header;
