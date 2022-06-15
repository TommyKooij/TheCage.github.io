import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Link } from "react-router-dom";
import { db } from "./firebaseconfig";

const Site = styled.div`
  width: auto;
  height: auto;
  background: #fffcf6;
`;

const TextContainer = styled.div`
  margin: 0px 0px 10px 0px;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 0.75px #c4be9f;
`;

const Container = styled.div`
  display: flex;
  width: auto;
  height: auto;
  background: #fffcf6;
`;

const ContainerItem = styled.div``;

const ContainerItemPct = styled.div`
  margin: 0px 0px 0px 30px;
  width: 270px;
  height: 300px;
  border: 1.5px #88665d;
  border-style: groove groove hidden groove;
`;

const ContainerItemTxt = styled.div`
  margin: 0px 0px 30px 30px;
  padding-top: 2px;
  width: 270px;
  height: 70px;
  background-color: rgba(156, 141, 143, 1);
  border: 1.5px #88665d;
  border-style: groove;
  text-align: center;
  font-size: 22px;
  color: white;
  font-weight: bold;
`;

const Novels = () => {
  const [getBookList, setBookList] = useState([]);
  const bookCollection = collection(db, "books");

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(bookCollection);
      setBookList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBooks();
  }, []);

  return (
    <Site>
      <Header />
      <TextContainer>Novels</TextContainer>
      <Container>
        <Link to="/ShowSeries" style={{ textDecoration: "none" }}>
          <ContainerItem>
            <ContainerItemPct></ContainerItemPct>
            <ContainerItemTxt>Reason</ContainerItemTxt>
          </ContainerItem>
        </Link>
        <ContainerItem>
          <ContainerItemPct></ContainerItemPct>
          <ContainerItemTxt>Habuchi: Crimson Sheen</ContainerItemTxt>
        </ContainerItem>
      </Container>
      <Footer />
    </Site>
  );
};

export default Novels;
