import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Novels from "./Novels";
import Sketches from "./Sketches";
import AddBook from "./AddBook";
import Login from "./Login";
import ShowBook from "./ShowBook";
import ShowReason from "./ShowReason";
import ShowHabuchi from "./ShowHabuchi";
import EditBook from "./EditBook";

const App = () => {
  return (
    <div className="site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Novels" element={<Novels />} />
        <Route path="/Sketches" element={<Sketches />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ShowBook/:bookid" element={<ShowBook />} />
        <Route path="/ShowReason" element={<ShowReason />} />
        <Route path="/ShowHabuchi" element={<ShowHabuchi />} />
        <Route path="/EditBook/:bookid" element={<EditBook />} />
      </Routes>
    </div>
  );
};

export default App;
