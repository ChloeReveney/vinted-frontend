import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      <main>
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
                <p>{data.product_price}</p>
                {data.product_details.map((details) => {
                  return <div></div>;
                })}
                <div>
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
