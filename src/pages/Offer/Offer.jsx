import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`,
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <main className="offer">
        <div className="container">
          {isLoading ? (
            <p>Chargement en cours...</p>
          ) : (
            <>
              <img
                src={data.product_image.secure_url}
                alt="photo du vêtement"
              />
              <aside>
                <p>{data.product_price} €</p>
                <div className="product-details">
                  {data.product_details.map((details) => {
                    return (
                      <>
                        {details.MARQUE && (
                          <p>
                            <span>MARQUE</span> {details.MARQUE}
                          </p>
                        )}
                        {details.TAILLE && (
                          <p>
                            <span>TAILLE</span> {details.TAILLE}
                          </p>
                        )}
                        {details.ÉTAT && (
                          <p>
                            <span>ÉTAT</span> {details.ÉTAT}
                          </p>
                        )}
                        {details.COULEUR && (
                          <p>
                            <span>COULEUR</span> {details.COULEUR}
                          </p>
                        )}
                        {details.EMPLACEMENT && (
                          <p>
                            <span>EMPLACEMENT</span> {details.EMPLACEMENT}
                          </p>
                        )}
                        {/* {details.MODES DE PAIEMENT && <span>MODES DE PAIEMENT {details.MODES DE PAIEMENT}</span>} */}
                      </>
                    );
                  })}
                </div>
                <div className="product-description">
                  <h1>{data.product_name}</h1>
                  <p>{data.product_description}</p>
                </div>
                <div className="offer-user">
                  <img
                    src={data.owner.account.avatar.secure_url}
                    alt="avatar"
                  />
                  <span>{data.owner.account.username}</span>
                </div>
                <button>Acheter</button>
              </aside>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Offer;
