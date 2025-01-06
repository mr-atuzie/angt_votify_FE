import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import axios from "axios";

const FlutterwavePayment = ({
  btn_style,
  btn_text,
  subscriptionPlan,
  amount,
}) => {
  const user = useSelector(selectUser);

  const handleSubscribe = async () => {
    try {
      const { data } = await axios.patch(`/api/v1/user/subscribe`, {
        subscriptionPlan,
      });

      console.log(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "USD",
    payment_options: "card, banktransfer",
    customer: {
      email: user?.email,
      phonenumber: user?.phone,
      name: user?.fullname,
    },
    customizations: {
      title: "2ruevote",
      description: `Payment services for 2ruvote ${subscriptionPlan?.name}`,
      logo: "https://yourbusiness.com/logo.png",
    },
  };

  const fwConfig = {
    ...config,
    text: btn_text,
    callback: (response) => {
      console.log(response);
      handleSubscribe();
      closePaymentModal(); // close modal programmatically
      toast.success("Subscribtion payment was successful");
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };
  return <FlutterWaveButton className={btn_style} {...fwConfig} />;
};

export default FlutterwavePayment;
