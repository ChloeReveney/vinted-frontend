import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = (props) => {
  const { data } = props;
  return (
    <>
      <main>
        <Hero />
        <div className="container">
          <section className="offer">
            {data.offers.map((element, index) => {
              const tabDetails = element.product_details;
              return (
                <>
                  <Link to="/offer/element._id">
                    <article>
                      <div className="user">
                        <img
                          src={element.owner.account.avatar.url}
                          alt="avatar"
                        />
                        <span>{element.owner.account.username}</span>
                      </div>
                      <img src={element.product_image.url} alt="" />
                      <div className="price">{element.product_price} €</div>
                      {tabDetails.map((details, ind) => {
                        return (
                          <>
                            <section className="brand-and-size">
                              <div>{details.TAILLE}</div>
                              <div>{details.MARQUE}</div>
                            </section>
                          </>
                        );
                      })}
                    </article>
                  </Link>
                </>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
