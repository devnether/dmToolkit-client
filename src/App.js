import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<>Hello</>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
