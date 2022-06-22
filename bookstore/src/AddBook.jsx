import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getFireBase,
  getFirestore,
  getDocs,
  collection,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";
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

const AddBook = () => {
  const [bookList, setBookList] = useState([]);
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
  const bookCollection = collection(db, "books");
  const bookCollectionRef = collection(db, "books");

  const addBook = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, novels, title), {
      BookTitle: title,
      BookAuthor: author,
      BookGenres: genres,
      BookPages: pages,
      BookPrice: price,
      BookSynopsis: synopsis,
      // bookPDF: File(getBookPDF),
      // coverPDF: File(getCoverPDF),
    });

    console.log("nieuw book");
  };

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(bookCollection);
      setBookList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBooks();
  }, []);

  const handleFormChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };

    setFormData(newFormData);
  };

  const { title, author, genres, pages, price, synopsis, novels } = formData;

  return (
    <Site>
      <Header />
      <Container>
        <form onSubmit={addBook}>
          <TextContainer>Add Book</TextContainer>
          <ContainerItem>
            <TextContainerItem>Title:</TextContainerItem>
            <FormBlock
              type="text"
              name="title"
              placeholder=""
              value={title}
              onChange={handleFormChange}
              required
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Novels:</TextContainerItem>
            <FormBlock
              type="text"
              name="novels"
              placeholder=""
              value={novels}
              onChange={handleFormChange}
              required
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Author:</TextContainerItem>
            <FormBlock
              type="text"
              name="author"
              placeholder=""
              value={author}
              onChange={handleFormChange}
              required
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Price:</TextContainerItem>
            <FormBlock
              type="number"
              name="price"
              placeholder=""
              value={price}
              onChange={handleFormChange}
              required
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Genre(s):</TextContainerItem>
            <FormBlock
              type="text"
              name="genres"
              placeholder=""
              value={genres}
              onChange={handleFormChange}
              required
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Size:</TextContainerItem>
            <FormBlock
              type="number"
              name="pages"
              placeholder=""
              value={pages}
              onChange={handleFormChange}
              required
            />
          </ContainerItem>
          <ContainerItem>
            <TextContainerItem>Synopsis:</TextContainerItem>
            <TextAreaBlock>
              <textarea
                name="synopsis"
                rows="8"
                cols="29"
                placeholder=""
                value={synopsis}
                onChange={handleFormChange}
                required
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
          </ContainerItem> */}
          <ContainerItem>
            <TextContainerItem>Cover:</TextContainerItem>
            <UploadCoverBtn type="file" />
          </ContainerItem>
          <UploadBtn type="submit" name="upload">
            Upload
          </UploadBtn>
        </form>
      </Container>
      <Footer />
    </Site>
  );
};

export default AddBook;
