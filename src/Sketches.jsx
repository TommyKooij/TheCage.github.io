import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { db } from "./firebaseconfig";

const Container = styled.div`
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

const Sketches = () => {
  const [getSketchList, setSketchList] = useState([]);
  const sketchCollection = collection(db, "sketches");

  useEffect(() => {
    const getSketches = async () => {
      const data = await getDocs(sketchCollection);
      setSketchList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSketches();
  }, []);

  return (
    <div className="siteSketches">
      <Header />
      <Container>
        <div className="container">
          <TextContainer>Sketches</TextContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Sketches;
