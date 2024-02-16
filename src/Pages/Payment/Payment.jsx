import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

// eslint-disable-next-line react/prop-types
const Payment = ({ fee, doctorName, doctorEmail, doctorCode, patientName, patientEmail, appointmentTime}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm doctorName={doctorName} doctorEmail={doctorEmail} doctorCode={doctorCode} patientName={patientName} patientEmail={patientEmail} appointmentTime={appointmentTime} fee={fee}></CheckoutForm>
        </Elements>
    );
};

export default Payment;