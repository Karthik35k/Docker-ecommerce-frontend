export const processPayment = async (paymentData) => {
  // Simulate payment processing
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful payment (you can modify this logic)
      const success = paymentData.cardNumber && paymentData.cvv;
      resolve(success);
    }, 1000);
  });
};
