import React from "react";
import { PaystackButton } from "react-paystack";

const PaystackPayment = () => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "customer@example.com",
    amount: 5000 * 100, // Amount in kobo
    publicKey: "pk_test_820864edf00e25d73eeb6bf0d1df11ff33fa62e9",
  };

  const handleSuccess = (response) => {
    console.log("Success:", response);
  };

  const handleClose = () => {
    console.log("Transaction was closed.");
  };

  return (
    <PaystackButton
      {...config}
      text="Pay Now"
      onSuccess={handleSuccess}
      onClose={handleClose}
    />
  );
};

export default PaystackPayment;
