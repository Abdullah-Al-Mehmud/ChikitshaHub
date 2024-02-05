import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = ({ fee, doctorName, doctorCode, patientName, patientEmail, appointmentTime}) => {
    console.log()
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm doctorName={doctorName} doctorCode={doctorCode} patientName={patientName} patientEmail={patientEmail} appointmentTime={appointmentTime} fee={fee}></CheckoutForm>
        </Elements>
    );
};

export default Payment;