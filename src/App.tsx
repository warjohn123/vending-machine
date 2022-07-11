import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
