export const formatPrice= (priceInUSD) => {
  // Assuming 1 USD = 83 INR for example
  const conversionRate = 83; // Current exchange rate, adjust as necessary
  const priceInINR = priceInUSD * conversionRate;

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceInINR);
};
