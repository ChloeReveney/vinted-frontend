import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, Navigate } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP",
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;

  const options = {
    mode: "payment",
    amount: price,
    currency: "eur",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return token ? (
    <>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
        <span>{title}</span>
      </Elements>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
