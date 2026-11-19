import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Register from "./pages/Register";
// import Login from "./pages/Login";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers",
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/offer/:id" element={<Offer />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/signup" element={<Register />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
