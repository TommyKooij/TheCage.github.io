import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { db } from "./firebaseconfig";

const Site = styled.div`
  width: auto;
  height: auto;
  background: #fffcf6;
`;

const TextContainer = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 0.75px #c4be9f;
`;

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`;

const Cover = styled.img`
  width: 400px;
  height: 500px;
  margin: 30px 0px 30px 30px;
  background-color: white;
  border: 1.5px solid #88665d;
`;

const BookDetails = styled.div`
  width: 400px;
  height: 500px;
  margin: 30px;
  background: rgb(137, 215, 169);
  background: linear-gradient(
    180deg,
    rgba(137, 215, 169, 1) 0%,
    rgba(84, 193, 129, 1) 100%
  );
  border: 1.5px solid #88665d;
`;

const HeaderTextDetails = styled.div`
  margin: 0px 0px 15px 15px;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 0.75px #c4be9f;
`;

const TextDetails = styled.div`
  margin: 0px 0px 0px 0px;
  text-align: left;
  font-size: 17px;
  color: white;
  -webkit-text-stroke: 0.75px #c4be9f;
`;

const ShowBook = () => {
  const [reasonList, setReasonList] = useState([]);
  const reasonCollection = collection(db, "Reason");

  useEffect(() => {
    const getReason = async () => {
      const data = await getDocs(reasonCollection);

      data.forEach((doc) => {
        setReasonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(doc.data());
        // console.log("hallo", );
      });
    };
    getReason();
  }, []);

  return (
    <Site>
      <Header />
      <TextContainer>
        {reasonList &&
          reasonList.map((book) => {
            return <div key={book.id}>{book.BookTitle}</div>;
          })}
      </TextContainer>
      <Container>
        <Cover></Cover>
        <BookDetails>
          {/* AUTHOR */}
          <HeaderTextDetails>
            Author:
            <TextDetails>
              {reasonList &&
                reasonList.map((book) => {
                  return <div key={book.id}>{book.BookAuthor}</div>;
                })}
            </TextDetails>
          </HeaderTextDetails>
          {/* GENRES */}
          <HeaderTextDetails>
            Genre(s):
            <TextDetails>Fantasy</TextDetails>
          </HeaderTextDetails>
          {/* PRICE */}
          <HeaderTextDetails>
            Price:
            <TextDetails>
              {reasonList &&
                reasonList.map((book) => {
                  return <div key={book.id}>€{book.BookPrice}</div>;
                })}
            </TextDetails>
          </HeaderTextDetails>

          {/* SIZE */}
          <HeaderTextDetails>
            Size:
            <TextDetails>
              {reasonList &&
                reasonList.map((book) => {
                  return <div key={book.id}>{book.BookPageNumber} pages</div>;
                })}
            </TextDetails>
          </HeaderTextDetails>
          {/* SYNOPSIS */}
          <HeaderTextDetails>
            Synopsis:
            <TextDetails>
              {reasonList &&
                reasonList.map((book) => {
                  return <div key={book.id}>"{book.BookSynopsis}"</div>;
                })}
            </TextDetails>
          </HeaderTextDetails>
        </BookDetails>
      </Container>
      <Footer />
    </Site>
  );
};

export default ShowBook;
