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
      </div>
    </header>
  );
};

export default Header;
