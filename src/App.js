import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import CampaignList from "./components/CampaignList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<CampaignList />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
