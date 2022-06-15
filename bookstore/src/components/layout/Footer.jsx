import React from "react";
import styled from "styled-components";
import twitter from "../../img/Twitter_Logo.png";
import facebook from "../../img/Facebook_Logo.png";
import instagram from "../../img/Instagram_Logo.png";

const FooterContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  z-index: 1;
  color: grey;
  background: rgb(156, 141, 143);
  background: linear-gradient(
    0deg,
    rgba(132, 117, 119, 1) 0%,
    rgba(156, 141, 143, 1) 100%
  );
  border: 1.5px #88665d;
  border-style: groove hidden hidden hidden;
`;

const FooterContents = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin: 30px 40px;
`;

const FooterLinks = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  font-size: 20px;
  color: white;
  text-decoration: none;
  border: none;
  -webkit-text-stroke: 0.5px black;
  &:hover {
    cursor: pointer;
    color: #22d55e;
    -webkit-text-stroke: 0.5px #567568;
  }
`;

const TextFooter = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  font-size: 20px;
  color: white;
  text-decoration: none;
  border: none;
  -webkit-text-stroke: 0.5px black;
`;

const ImgFooter = styled.div`
  width: auto;
  height: auto;
  position: relative;
  bottom: 10px;
  margin: 0px 20px 0px 40px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterLinks>About Me</FooterLinks>
      </FooterContents>
      <FooterContents>
        <TextFooter>Socials:</TextFooter>
        <ImgFooter>
          <img src={twitter} alt="twitter" width="50px" height="50px"></img>
        </ImgFooter>
        <ImgFooter>
          <img src={facebook} alt="facebook" width="50px" height="50px"></img>
        </ImgFooter>
        <ImgFooter>
          <img src={instagram} alt="instagram" width="50px" height="50px"></img>
        </ImgFooter>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
