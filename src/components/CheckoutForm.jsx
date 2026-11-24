import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import "../pages/Payment/payment.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (error) => {
    setIsLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe) {
      return;
    }
    setIsLoading(true);

    const submitResult = await elements.submit();

    if (submitResult.error) {
      handleError(submitResult.error);
      return;
    }

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
    );

    const clientSecret = response.data.client_secret;

    const confirmedPayment = await stripe.confirmPayment({
      elements: elements,
      clientSecret: clientSecret,
      confirmParams: {
        return_url: "http://localhost:5173/",
      },
      redirect: "if_required",
    });

    if (confirmedPayment.error) {
      handleError(confirmedPayment.error.message);
    } else {
      setSuccess(true);
    }
  };

  return success ? (
    <p>Paiement effectué</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <PaymentElement className="elements" />
      <button disabled={!stripe || isLoading}>Pay</button>
      {errorMessage && <p className="red">{errorMessage}</p>}
    </form>
  );
};

export default CheckoutForm;
