import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Register = ({ token, setToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  return (
    <main className="register">
      <div className="container">
        <h1>S'inscrire</h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                {
                  email: email,
                  username: name,
                  password: password,
                  newsletter: true,
                },
              );
              if (response.data.token) {
                Cookies.set("token", response.data.token, { expires: 14 });
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
              type="text"
              id="name"
              placeholder="Nom d'utilisateur"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
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
            {errorMessage && <p className="error">{errorMessage}</p>}
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
          </div>
          <div className="newsletter">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              defaultChecked={false}
            />
            <label>S'inscrire à notre newsletter</label>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button>S'inscrire</button>
          <Link to="/login">
            <p className="account">Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Register;
