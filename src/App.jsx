import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cookies from "js-cookie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [token, setToken] = useState(Cookies.get("token") || null);

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
            <Header token={token} setToken={setToken} />
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/offer/:id" element={<Offer />} />
              <Route
                path="/login"
                element={<Login token={token} setToken={setToken} />}
              />
              <Route
                path="/signup"
                element={<Register token={token} setToken={setToken} />}
              />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
