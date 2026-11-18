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
              const tab = element.product_details;
              return (
                <>
                  <article key={index}>
                    <div>{element.owner.account.username}</div>
                    <img src={element.product_pictures.secure_url} alt="" />
                    <div>{element.product_price}</div>
                    {tab.map((details, ind) => {
                      return (
                        <>
                          <div>{details.TAILLE}</div>
                          <div>{details.MARQUE}</div>
                        </>
                      );
                    })}
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
