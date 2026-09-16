// Narxlarni chiroyli formatlash funksiyasi
export const formatCurrency = (amount, currency = 'USD') => {
  if (amount === undefined || amount === null) return '0';

  if (currency === 'USD') {
    return '$ ' + new Intl.NumberFormat('en-US').format(amount);
  }

  if (currency === 'UZS') {
    return new Intl.NumberFormat('uz-UZ').format(amount) + " so'm";
  }

  return new Intl.NumberFormat('en-US').format(amount);
};
