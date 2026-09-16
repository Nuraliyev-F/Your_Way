import toursData from '../data/tours.json';

// Barcha turlarni olish (ixtiyoriy filtrlash bilan)
export const getTours = async (filters = {}) => {
  // Haqiqiy tarmoq so'rovini simulyatsiya qilish (200ms delay)
  await new Promise((resolve) => setTimeout(resolve, 200));

  let results = [...toursData];

  if (filters.country && filters.country !== 'all') {
    results = results.filter((tour) =>
      tour.country.toLowerCase().includes(filters.country.toLowerCase())
    );
  }

  if (filters.maxPrice) {
    results = results.filter((tour) => tour.basePriceUSD <= Number(filters.maxPrice));
  }

  if (filters.search) {
    const q = filters.search.toLowerCase();
    results = results.filter(
      (tour) =>
        tour.title.toLowerCase().includes(q) ||
        tour.country.toLowerCase().includes(q) ||
        tour.city.toLowerCase().includes(q)
    );
  }

  return results;
};

// Bitta turni ID orqali olish
export const getTourById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 150));
  const tour = toursData.find((t) => t.id === Number(id));
  if (!tour) throw new Error('Tur topilmadi');
  return tour;
};

// Buyurtmani saqlash (localStorage orqali)
export const saveBooking = async (bookingData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const existing = JSON.parse(localStorage.getItem('my_bookings') || '[]');
  const newBooking = {
    ...bookingData,
    bookingId: 'MJ-' + Math.floor(100000 + Math.random() * 900000),
    createdAt: new Date().toISOString(),
    status: 'Tasdiqlandi'
  };
  existing.unshift(newBooking);
  localStorage.setItem('my_bookings', JSON.stringify(existing));
  return newBooking;
};

// Buyurtmalar tarixini olish
export const getMyBookings = () => {
  return JSON.parse(localStorage.getItem('my_bookings') || '[]');
};
