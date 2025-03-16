import React from "react";
import { PaystackButton } from "react-paystack";
import api from "../axiosInstance";
import toast from "react-hot-toast";

const PaystackPayment = ({
  btn_style,
  btn_text,
  subscriptionPlan,
  amount,
  email,
}) => {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY; // Replace with your Paystack public key
  const convertAmount = amount * 100; // Convert to cents (USD)

  const handleSubscribe = async () => {
    try {
      const { data } = await api.patch(`/api/v1/user/subscribe`, {
        subscriptionPlan,
      });

      console.log(data);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();

      toast.error(message);
    }
  };

  const componentProps = {
    email,
    amount: convertAmount,
    publicKey,
    currency: "USD", // ✅ Force transactions in USD
    text: btn_text,
    onSuccess: (reference) => {
      console.log("Payment successful!", reference);
      toast.success("Subscribtion payment was successful");
      handleSubscribe();
    },
    onClose: () => alert("Transaction closed without payment"),
  };

  return <PaystackButton {...componentProps} className={btn_style} />;
};

export default PaystackPayment;
