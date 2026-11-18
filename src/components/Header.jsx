import logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Header = () => {
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
          <div className="login">
            <button>S'inscrire</button>
            <button>Se connecter</button>
          </div>
          <button>Vends tes articles</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
