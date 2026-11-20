import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import "../Home/index.css";

const Home = (props) => {
  const { data } = props;
  return (
    <>
      <main>
        <Hero />
        <div className="container">
          <section className="offers">
            {data.offers.map((element, index) => {
              const tabDetails = element.product_details;
              return (
                <>
                  <article key={index}>
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
                      {tabDetails.map((detail, ind) => {
                        return detail.TAILLE ? (
                          <p className="size">{detail.TAILLE}</p>
                        ) : (
                          detail.MARQUE && (
                            <p className="brand">{detail.MARQUE}</p>
                          )
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
