import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = (props) => {
  const { data } = props;
  return (
    <>
      <main>
        <Hero />
        <div className="container">
          <section className="offers">
            {data.offers.map((element) => {
              const tabDetails = element.product_details;
              return (
                <>
                  <article>
                    <div className="user">
                      <img
                        src={element.owner.account.avatar.secure_url}
                        alt="avatar"
                      />
                      <span>{element.owner.account.username}</span>
                    </div>
                    <Link to={"/offer/" + element._id}>
                      <img
                        src={element.product_image.secure_url}
                        alt="image du vêtement"
                      />
                      <div className="price">{element.product_price} €</div>
                      {tabDetails.map((details) => {
                        return (
                          <>
                            <section className="brand-and-size">
                              <p>{details.TAILLE}</p>
                              <p>{details.MARQUE}</p>
                            </section>
                          </>
                        );
                      })}
                    </Link>
                  </article>
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
