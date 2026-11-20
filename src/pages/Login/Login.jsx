import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = ({ token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <main className="login">
      <div className="container">
        <h1>Se connecter</h1>
        <form
          onSubmit={async (event) => {
            try {
              event.preventDefault();
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/login",
                {
                  email: email,
                  password: password,
                },
              );
              if (response.data.token) {
                Cookies.get("token", response.data.token);
                setToken(response.data.token);
                navigate("/");
              }
            } catch (error) {
              error.response
                ? setErrorMessage(error.response.data.message)
                : setErrorMessage(error.message);
            }
          }}
        >
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>
          <button>Se connecter</button>
          <Link to="/signup">
            <p className="account">Pas encore de compte ? Inscris-toi !</p>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
