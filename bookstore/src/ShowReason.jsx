import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Link } from "react-router-dom";
import { db } from "./firebaseconfig";
import deleteItem from "./img/UI/remove.png";
import updateItem from "./img/UI/update.png";

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

const ContainerItemDeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  z-index: 10;
  position: absolute;
  background-color: #f44336;
  border: 2px solid #922d50;
  &:hover {
    cursor: pointer;
  }
`;

const ContainerItemUpdateBtn = styled.button`
  margin: 0px 0px 0px 247px;
  width: 20px;
  height: 20px;
  z-index: 10;
  background-color: #67f17e;
  border: 2px solid #20c758;
  &:hover {
    cursor: pointer;
  }
`;

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

const ShowReason = () => {
  const [reasonList, setReasonList] = useState([]);
  const reasonCollection = collection(db, "Reason");

  useEffect(() => {
    const getReason = async () => {
      const data = await getDocs(reasonCollection);

      data.forEach((doc) => {
        setReasonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(doc.data());
        // console.log("wat is deze", );
      });
    };
    getReason();
  }, []);

  return (
    <Site>
      <Header />
      <TextContainer>
        Reason
        {/* {reasonList &&
          reasonList.map((book) => {
            return <div key={book.id}>{book.BookTitle}</div>;
          })} */}
      </TextContainer>
      <Container>
        {reasonList &&
          reasonList.map((book) => {
            return (
              <ContainerItem key={book.id}>
                <Link
                  to={`/ShowBook/${book.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ContainerItemPct>
                    <ContainerItemDeleteBtn>
                      <div className="delete_item">
                        <img
                          src={deleteItem}
                          alt="delete"
                          width="16px"
                          height="16px"
                        ></img>
                      </div>
                    </ContainerItemDeleteBtn>
                    <ContainerItemUpdateBtn>
                      <div className="update_item">
                        <img
                          src={updateItem}
                          alt="update"
                          width="16px"
                          height="16px"
                        ></img>
                      </div>
                    </ContainerItemUpdateBtn>
                  </ContainerItemPct>
                  <ContainerItemTxt>{book.BookTitle}</ContainerItemTxt>
                </Link>
              </ContainerItem>
            );
          })}
      </Container>
      <Footer />
    </Site>
  );
};

export default ShowReason;
