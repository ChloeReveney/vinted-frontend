import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(
    Cookies.get("token") ? true : false,
  );

  return (
    <main className="login">
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
            Cookies.get("token", response.data.token);
            // setToken(response.data.token);
            navigate("/");
          } catch (error) {
            alert(error.response);
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
        </div>
        <button>Se connecter</button>
        <Link to="/signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </main>
  );
};

export default Login;
