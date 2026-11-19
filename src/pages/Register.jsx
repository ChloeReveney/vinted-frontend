import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isConnected, setIsConnected] = useState(
    Cookies.get("token") ? true : false,
  );
  const navigate = useNavigate();

  return (
    <main className="register">
      <h1>S'inscrire</h1>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                email: email,
                username: name,
                password: password,
                newsletter: true,
              },
            );
            Cookies.set("token", response.data.token);
            setToken(response.data.token);
            navigate("/");
            console.log(response.data);
          } catch (error) {
            alert(error.response);
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
          <input type="checkbox" id="newsletter" defaultChecked={false} />
          <label>S'inscrire à notre newsletter</label>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button>S'inscrire</button>
        <Link to="/login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </main>
  );
};

export default Register;
