import logo from "../../assets/Vinted_logo.png";
import "./index.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Cookies from "js-cookie";

const Header = ({ token, setToken }) => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo Vinted" />
        </Link>
        <div>
          <FiSearch />
          <input
            type="text"
            placeholder="Recherche des articles"
            className="search"
          />
        </div>
        <section className="buttons">
          {token ? (
            <button
              onClick={() => {
                Cookies.remove("token");
                setToken(null);
              }}
              className="red"
            >
              Se déconnecter
            </button>
          ) : (
            <div className="header-login">
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </div>
          )}
          <Link to="/login">
            <button className="sale">Vends tes articles</button>
          </Link>
        </section>
      </div>
    </header>
  );
};

export default Header;
