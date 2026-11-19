import logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

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
          {isConnected ? (
            <button className="red">Se déconnecter</button>
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
          <button>Vends tes articles</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
