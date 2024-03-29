/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { useSelector } from "react-redux";

const CheckoutForm = ({
  fee,
  doctorName,
  doctorEmail,
  doctorCode,
  patientName,
  patientEmail,
  appointmentTime,
}) => {
  // console.log(doctorName, doctorEmail, doctorCode, patientName, patientEmail);
  const user = useSelector((state) => state.auth.user);
  const { email, displayName } = user || {};
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosPrivate = useAxiosPrivet();
  // console.log(displayName);
  const generateMeetId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  };
  // console.log(Date(appointmentTime));

  const randomId = generateMeetId();

  const handleAppointment = () => {
    const appointmentDetails = {
      doctorName,
      doctorCode,
      doctorEmail,
      patientName,
      patientEmail,
      appointmentTime: appointmentTime,
      fee,
      meetingId: randomId,
    };
    axiosPrivate.post("/appointments", appointmentDetails).then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: "Good job!",
          text: "Your Appointment is Successfully Booked!",
          icon: "success",
        });
      }
    });

    // console.log(appointmentDetails);
    document.getElementById('my_modal_2').close();
  };

  useEffect(() => {
    axiosPrivate.post("/create-payment-intent", { price: fee }).then((res) => {
      //   console.log(res);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosPrivate, fee]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("Payment Error", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 4500,
      });
    } else {
      //   console.log("Payment Successfull", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: { email } || "Anonymous",
            name: { displayName } || "Anonymous",
          },
        },
      });
    if (confirmError) {
      //   console.log("Confirm error", confirmError.message);
    } else {
      // console.log("Payment confirm", paymentIntent);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            onClick={handleAppointment}
            className="btn btn-outline btn-success my-5"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

