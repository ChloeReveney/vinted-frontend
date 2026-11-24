import { useState } from "react";
import axios from "axios";
import "./publish.css";
import { FaPlus } from "react-icons/fa";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return token ? (
    <>
      <main className="publish">
        <div className="container">
          <h1>Vends ton arcticle</h1>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("condition", condition);
                formData.append("city", city);
                formData.append("brand", brand);
                formData.append("size", size);
                formData.append("color", color);
                formData.append("picture", picture);
                const response = await axios.post(
                  "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                  formData,
                  {
                    headers: {
                      authorization: `Bearer ${token}`,
                    },
                  },
                );
                Navigate(`/offer/${response.data._id}`);
              } catch (error) {
                error.response
                  ? setErrorMessage(error.response.data.message)
                  : setErrorMessage(error.message);
              }
            }}
          >
            <section className="picture-section">
              <div>
                <label htmlFor="picture" className="picture">
                  <FaPlus />
                  Ajoute une photo
                </label>
                <input
                  type="file"
                  id="picture"
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                  }}
                  className="input-file"
                />
              </div>
            </section>
            <section>
              <div className="title">
                <label>Titre</label>
                <input
                  type="text"
                  id="title"
                  placeholder="ex: Chemise Sézane verte"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <div className="description">
                <label>Décris ton article</label>
                <input
                  type="text"
                  id="description"
                  placeholder="ex: porté quelquefois, taille correctement"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
            </section>
            <section className="article-details">
              <div className="brand">
                <label>Marque</label>
                <input
                  type="text"
                  id="brand"
                  placeholder="ex: Zara"
                  value={brand}
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </div>
              <div className="size">
                <label>Taille</label>
                <input
                  type="text"
                  id="size"
                  placeholder="ex: L / 40 / 12"
                  value={size}
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </div>
              <div className="color">
                <label>Couleur</label>
                <input
                  type="text"
                  id="color"
                  placeholder="ex: Fushia"
                  value={color}
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </div>
              <div className="condition">
                <label>Etat</label>
                <input
                  type="text"
                  id="condition"
                  placeholder="Neuf avec étiquette"
                  value={condition}
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                />
              </div>
              <div className="city">
                <label>Lieu</label>
                <input
                  type="text"
                  id="location"
                  placeholder="ex: Paris"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </div>
            </section>
            <section>
              <div className="price">
                <label>Prix</label>
                <input
                  type="text"
                  id="price"
                  placeholder="0,00 €"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>
              <div className="exchange">
                <input
                  type="checkbox"
                  name="exchanges"
                  id="exchanges"
                  defaultChecked={false}
                />
                <label>Je suis intéressé(e) par les échanges</label>
              </div>
            </section>
            <button>Ajouter</button>
          </form>
        </div>
      </main>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
