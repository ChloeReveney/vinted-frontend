import { Link } from "react-router-dom";
import "./index.css";
import hero from "../../assets/hero-24963eb2.jpg";

const Hero = ({ token }) => {
  return (
    <>
      <section className="hero">
        <img src={hero} alt="image dressing" className="dressing" />
        <div className="container">
          <section className="sort">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            {token ? (
              <Link to="/publish">
                <button>Commencer à vendre</button>
              </Link>
            ) : (
              <Link to="/login">
                <button>Commencer à vendre</button>
              </Link>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
