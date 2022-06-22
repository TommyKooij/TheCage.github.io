import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getFirestore,
  getDocs,
  setDoc,
  collection,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { db } from "./firebaseconfig";
import { useParams } from "react-router-dom";

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
  margin: 5vh 5vh 5vw 35vw;
  width: 400px;
  height: auto;
  background: rgb(137, 215, 169);
  background: linear-gradient(
    180deg,
    rgba(137, 215, 169, 1) 0%,
    rgba(84, 193, 129, 1) 100%
  );
  border-radius: 15px;
  border: 1.5px solid #88665d;
`;

const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 40px;
  width: auto;
  height: auto;
`;

const TextContainerItem = styled.div`
  margin: 0px 0px 15px 15px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 0.75px #c4be9f;
`;

const FormBlock = styled.input`
  overflow: hidden;
  margin: 13px 15px 25px 0px;
  padding: 2px;
  height: 32px;
  width: 240px;
  color: grey;
  background-color: white;
  border: 1px solid grey;
  border-radius: 15px;
  &:hover {
    cursor: text;
  }
`;

const TextAreaBlock = styled.div`
  overflow: hidden;
  margin: 13px 15px 0px 0px;
  padding: 2px;
  height: auto;
  width: 240px;
  
  }
`;

const UploadCoverBtn = styled.input`
  overflow: hidden;
  margin: 20px;
  padding: 2px;
  height: 22px;
  width: auto;
  text-align: center;
`;

const UploadBtn = styled.button`
  overflow: hidden;
  margin: 40px 15px 25px 133px;
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
  &:active {
    color: #eeeeee;
    background-color: rgba(84, 193, 129, 1);
  }
`;

const EditBook = () => {
  const [formData, setFormData] = useState({
    BookTitle: "",
    BookAuthor: "",
    BookGenres: "",
    BookPages: "",
    BookPrice: "",
    BookSynopsis: "",
    bookPDF: "",
    coverPDF: "",
  });
  const { bookid } = useParams();

  const getBook = async () => {
    const data = await getDoc(doc(db, "Reason", bookid));

    const bookData = data.data();

    console.log(bookData);

    const {
      BookTitle,
      BookAuthor,
      BookGenres,
      BookPages,
      BookPrice,
      BookSynopsis,
    } = bookData;

    setFormData({
      BookTitle,
      BookAuthor,
      BookGenres,
      BookPages,
      BookPrice,
      BookSynopsis,
      // bookPDF: "",
      // coverPDF: "",
    });
  };

  useEffect(() => {
    getBook();
  }, []);

  const editBook = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, "Reason", bookid), {
      BookTitle,
      BookAuthor,
      BookGenres,
      BookPages,
      BookPrice,
      BookSynopsis,
      // bookPDF: File(getBookPDF),
      // coverPDF: File(getCoverPDF),
    });

    console.log("nieuw book");
  };

  const handleFormChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };

    setFormData(newFormData);
  };

  const {
    BookTitle,
    BookAuthor,
    BookGenres,
    BookPages,
    BookPrice,
    BookSynopsis,
  } = formData;

  return (
    <Site>
      <Header />
      <Container>
        <form onSubmit={editBook}>
          <TextContainer>Edit Book</TextContainer>
          <ContainerItem>
            <TextContainerItem>Title:</TextContainerItem>
            <FormBlock
              type="text"
              name="BookTitle"
              value={BookTitle}
              onChange={handleFormChange}
            />
          </ContainerItem>
          {/* <ContainerItem>
            <TextContainerItem>Novels:</TextContainerItem>
            <FormBlock
              type="text"
              name="novels"
              placeholder=""
              value={novels}
              onChange={handleFormChange}
              readOnly="readonly"
            />
          </ContainerItem> */}
          <ContainerItem>
            <TextContainerItem>Author:</TextContainerItem>
            <FormBlock
              type="text"
              name="BookAuthor"
              value={BookAuthor}
              onChange={handleFormChange}
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Price:</TextContainerItem>
            <FormBlock
              type="number"
              name="BookPrice"
              value={BookPrice}
              onChange={handleFormChange}
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Genre(s):</TextContainerItem>
            <FormBlock
              type="text"
              name="BookGenres"
              value={BookGenres}
              onChange={handleFormChange}
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Size:</TextContainerItem>
            <FormBlock
              type="number"
              name="BookPages"
              value={BookPages}
              onChange={handleFormChange}
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Synopsis:</TextContainerItem>
            <TextAreaBlock>
              <textarea
                name="BookSynopsis"
                rows="8"
                cols="29"
                value={BookSynopsis}
                onChange={handleFormChange}
              ></textarea>
            </TextAreaBlock>
          </ContainerItem>
          {/* <ContainerItem> 
          <TextContainerItem>Cover:</TextContainerItem>
          <UploadCoverBtn type="file" />
        </ContainerItem>*/}
          {/* <ContainerItem>
            <TextContainerItem>Book PDF:</TextContainerItem>
            <UploadCoverBtn type="file" />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Book PNG:</TextContainerItem>
            <UploadCoverBtn type="file" />
          </ContainerItem> */}
          <UploadBtn type="submit" name="upload">
            Upload
          </UploadBtn>
        </form>
      </Container>
      <Footer />
    </Site>
  );
};

export default EditBook;
