export const paymentOptions = {
    key: "rzp_test_Az3dFnm0KKSd2A", // Replace with your Razorpay Test Key
    amount: 10000, // Amount in paise (100 INR)
    payment_capture: true,
    currency: "INR", // Currency code
    name: "amit", // Title for your organization to display in checkout modal
    // image, // custom logo  url
    order_id: "order_Ilu91YlSKGHWzd", // order id from props
    // This handler menthod is always executed in case of succeeded payment
    handler: (response) => {
      console.log("succeeded");
      console.log(response);
      paymentId.current = response.razorpay_payment_id;

      // Most important step to capture and authorize the payment. This can be done of Backend server.
      const succeeded =
        crypto
          .HmacSHA256(
            `${orderId}|${response.razorpay_payment_id}`,
            keySecret
          )
          .toString() === response.razorpay_signature;

      // If successfully authorized. Then we can consider the payment as successful.
      if (succeeded) {
        handlePayment("succeeded", {
          orderId,
          paymentId,
          signature: response.razorpay_signature,
        });
      } else {
        handlePayment("failed", {
          orderId,
          paymentId: response.razorpay_payment_id,
        });
      }
    },
    modal: {
      confirm_close: true, // this is set to true, if we want confirmation when clicked on cross button.
      // This function is executed when checkout modal is closed
      // There can be 3 reasons when this modal is closed.
      ondismiss: async (reason) => {
        const {
          reason: paymentReason,
          field,
          step,
          code,
        } = reason && reason.error ? reason.error : {};
        // Reason 1 - when payment is cancelled. It can happend when we click cross icon or cancel any payment explicitly.
        if (reason === undefined) {
          console.log("cancelled");
          handlePayment("Cancelled");
        }
        // Reason 2 - When modal is auto closed because of time out
        else if (reason === "timeout") {
          console.log("timedout");
          handlePayment("timedout");
        }
        // Reason 3 - When payment gets failed.
        else {
          console.log("failed");
          handlePayment("failed", {
            paymentReason,
            field,
            step,
            code,
          });
        }
      },
    },
    // This property allows to enble/disable retries.
    // This is enabled true by default.
    retry: {
      enabled: false,
    },
    timeout: 900, // Time limit in Seconds
    theme: {
      color: "", // Custom color for your checkout modal.
    },
  };