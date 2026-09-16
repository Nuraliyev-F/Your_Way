# TEXNIK TOPSHIRIQ (TZ)
## Mir-Jahon.uz saytining soddalashtirilgan (Modern MVP) Frontend platformasi

---

### 1. LOYIHA HAQIDA VA ASOSIY MAQSADLAR

**Loyiha maqsadi:**  
Mavjud `mir-jahon.uz` sayyohlik agentligi veb-saytining ortiqcha murakkabliklardan xoli, zamonaviy UI/UX dizaynga ega, tez yuklanuvchi va foydalanuvchiga qulay bo'lgan soddalashtirilgan **Frontend MVP** talqinini ishlab chiqish.

**Asosiy vazifalar:**
1. Foydalanuvchilarga sayyohlik yo'nalishlari, ekskursiyalar, mehmonxonalar va aviachiptalarni qulay ko'rish imkonini yaratish.
2. Aniq sanalar, mehmonxona toifasi va yo'lovchilar soni (kattalar va turli yoshdagi bolalar) bo'yicha **dinamik narx hisoblash kalkulyatorini** yaratish.
3. Foydalanuvchi uchun sayohatni onlayn bron qilish va buyurtma vaucherini olish jarayonini maksimal darajada osonlashtirish.
4. Faqat frontend qismi amalga oshirilishi sababli barcha ma'lumotlarni qulay **Mock API / JSON** servislari orqali ta'minlash.

---

### 2. TEXNOLOGIK STAK (FRONTEND)

- **Asosiy kutubxona:** React 19 (yoki 18+) + Vite
- **Routing:** `react-router-dom` (v6+)
- **Global State Management:** `zustand` yoki React Context API (valyuta, til, tanlangan tur, savat/bronlar uchun)
- **Styling:** Tailwind CSS yoki Zamonaviy Vanilla CSS / CSS Modules
- **Belgilar (Icons):** `lucide-react` (yoki `react-icons`)
- **Sana tanlagich:** `flatpickr` yoki `react-day-picker` / oddiy HTML5 date
- **Bildirishnomalar (Toasts):** `react-hot-toast` yoki `sonner`
- **Mock Data & State:** Mahalliy JSON ma'lumotlar bazasi va `localStorage` bilan integratsiya (haqiqiy backend bo'lmasa ham sayt to'liq jonli ishlaydi).

---

### 3. TIZIM STRUKTURASI VA SAHIFALAR RO'YXATI

1. **Header / Navbar:** Valyuta kursi ($ 1 = 12 800, € 1 = 13 900), Til tanlash (UZ/RU/EN), Asosiy menyu (Turlar, Ekskursiyalar, Biz haqimizda, Aloqa), Kirish / Profil tugmasi.
2. **Bosh sahifa (`/`):**
   - Hero banner (Aksiya va diqqatga sazovor joylar slayderi);
   - Tezkor qidiruv paneli (Qayerga, Qachon, Necha kishi);
   - Ommabop yo'nalishlar kartochkalari (Turkiya, Dubay, Bali, Tailand, Ozarbayjon, Sanatoriylar);
   - Video/Qo'llanma bloki ("Tizimdan foydalanish va bron qilish tartibi");
   - Nega biz? / Mijozlar fikrlari.
3. **Katalog sahifasi (`/tours` yoki `/excursions`):**
   - Chap tomonda filtrlar paneli (Mamlakat, Narx oralig'i, Kunlar soni, Mehmonxona yulduzi);
   - Saralash (Arzonroq, Qimmatroq, Mashhur);
   - Turlar grid ro'yxati (Rasm, Nomi, Davomiyligi, Boshlang'ich narxi, "Batafsil" tugmasi).
4. **Turning batafsil sahifasi (`/tour/:id`):**
   - Fotogalereya va turning to'liq tavsifi;
   - Kunlik dastur (Itinerary - 1-kun, 2-kun...);
   - Narxga nimalar kiritilgan / kiritilmagan;
   - **Bron kalkulyatori:**
     * Sayohat davrini tanlash (Sana oraliqlari, masalan: 7 kecha, bo'sh o'rinlar soni);
     * Mehmonxona tanlash;
     * Yo'lovchilar sonini kiritish (+ / - tugmalari):
       - Katta yoshdagilar (12+)
       - Kichik bolalar (0 - 1.99 yosh - INF)
       - O'rta bolalar (2 - 5.99 yosh - CHD)
       - Katta bolalar (6 - 11.99 yosh - CHD)
     * Jonli hisoblanadigan umumiy summa (Jami narx va B2B agentlik narxi);
     * "Telegramda ulashish" va "Bron qilish" tugmalari.
5. **Buyurtmani rasmiylashtirish sahifasi (`/booking`):**
   - Tanlangan tur va sanalar xulosasi;
   - Sayohatchilar anketasi (F.I.SH, Pasport seriya/raqam, Tug'ilgan sana, Telefon);
   - Aviachipta jadvali (Aviakompaniya, Bagaj, Uchish va qo'nish vaqtlari);
   - Buyurtmani tasdiqlash va yuklab olinadigan PDF/Vaucher ko'rinishi.
6. **Avtorizatsiya & Profil (`/login`, `/register`, `/profile`):**
   - Kirish va ro'yxatdan o'tish modallari;
   - Shaxsiy kabinetda buyurtmalar tarixi va holati ("Kutilmoqda", "Tasdiqlandi").
7. **Statik sahifalar:**
   - Biz haqimizda (`/about`);
   - Kontaktlar va lokatsiya xaritasi (`/contact`);
   - Footer (Kompaniya ma'lumotlari, ijtimoiy tarmoqlar, ommaviy oferta).

---

### 4. LOYIHANING TO'LIQ FAYLLAR VA PAPKALAR STRUKTURASI (PROJECT DIRECTORY TREE)

Har bir dasturchi o'ziga tegishli papka va fayllarni aniq bilishi uchun loyihaning boshlang'ich fayllar arxitekturasi quyidagicha tuziladi:

```text
tekshir/ (Loyiha ildizi)
├── public/
│   ├── favicon.ico
│   └── images/                     # Rasmlar, logotiplar va bannerlar
├── src/
│   ├── assets/                     # SVG ikonlar, umumiy media resurslar
│   │   ├── logo.svg
│   │   └── flags/                  # Til bayroqlari (uz.svg, ru.svg, en.svg)
│   │
│   ├── components/                 # Qayta ishlatiluvchi komponentlar
│   │   ├── layout/                 # [DEV 1] Sayt ramkasi (Header, Footer, Menu)
│   │   │   ├── Navbar.jsx          # Valyuta kursi, til, navigatsiya va profil tugmasi
│   │   │   ├── SubHeader.jsx       # Breadcrumbs va tezkor tugmalar
│   │   │   ├── Footer.jsx          # Aloqa, ijtimoiy tarmoqlar, litsenziya
│   │   │   └── MobileDrawer.jsx    # Mobil qurilmalar uchun yon menyu
│   │   │
│   │   ├── ui/                     # [DEV 1] Umumiy Dizayn Tizimi (Design System)
│   │   │   ├── Button.jsx          # Primary, Secondary, Outline, Ghost variantlari
│   │   │   ├── Input.jsx           # Matnli kiritish maydoni (validatsiya bilan)
│   │   │   ├── Select.jsx          # Maxsus tanlov (dropdown) komponenti
│   │   │   ├── Modal.jsx           # Universal modal oyna (pop-up)
│   │   │   ├── Badge.jsx           # Teglar va statuslar (Chegirma, Aksiya, Yangi)
│   │   │   ├── Card.jsx            # Asosiy kartochka konteyneri
│   │   │   └── PageLoader.jsx      # Sahifa yuklanayotganda chiquvchi spanner/skelet
│   │   │
│   │   ├── home/                   # [DEV 2] Bosh sahifa bloklari
│   │   │   ├── HeroSlider.jsx      # Aksiya va turlar slayderi (Swiper/Carousel)
│   │   │   ├── QuickSearchBar.jsx  # Tezkor qidiruv paneli (Qayerga, Qachon, Odam soni)
│   │   │   ├── DestinationGrid.jsx # Yo'nalishlar kartochkalari (Turkiya, Dubay, Bali...)
│   │   │   ├── VideoGuideBanner.jsx# "Tizimdan foydalanish" video/banner vidjeti
│   │   │   └── WhyUsSection.jsx    # "Nega biz?" va mijozlar ishonchi bloki
│   │   │
│   │   ├── tours/                  # [DEV 3] Katalog va Ro'yxat komponentlari
│   │   │   ├── TourCard.jsx        # Bitta turning kartochkasi (rasm, narx, muddat)
│   │   │   ├── TourFilterSidebar.jsx # Mamlakat, narx slideri, yulduz, toifa filtrlari
│   │   │   ├── SortBar.jsx         # Narx va mashhurlik bo'yicha saralash
│   │   │   ├── Pagination.jsx      # Sahifalash yoki "Yana ko'rsatish" tugmasi
│   │   │   └── EmptyState.jsx      # Qidiruv bo'yicha hech narsa topilmaganda xabar
│   │   │
│   │   ├── tour-detail/            # [DEV 4] Turning batafsil sahifasi & Kalkulyator
│   │   │   ├── TourGallery.jsx     # Turning rasmlar galereyasi / slayder
│   │   │   ├── TourInfoTabs.jsx    # Dastur (itinerary), mehmonxona, kiritilgan xizmatlar
│   │   │   ├── BookingCalculator.jsx # Asosiy dinamik kalkulyator
│   │   │   ├── DurationSelector.jsx# Sayohat davri va sanalarni tanlash
│   │   │   ├── PassengerCounter.jsx# Kattalar, INF (0-2), CHD (2-6, 6-12) soni hisoblagichi
│   │   │   └── PriceSummaryCard.jsx# Jami narx, B2B narx, Telegramda ulashish tugmasi
│   │   │
│   │   ├── checkout/               # [DEV 5] Buyurtma rasmiylashtirish va Vaucher
│   │   │   ├── PassengerForm.jsx   # Yo'lovchilar anketasi (Pasport, Tug'ilgan sana, Tel)
│   │   │   ├── FlightTicketsTable.jsx # Tanlangan aviachipta jadvali va bagaj ma'lumotlari
│   │   │   ├── OrderSummaryCard.jsx# Buyurtma xulosasi (tanlangan tur, sanalar, narx)
│   │   │   └── VoucherCard.jsx     # Tasdiqlangan buyurtma vaucheri (Chop etish - Print)
│   │   │
│   │   └── auth/                   # [DEV 6] Avtorizatsiya komponentlari
│   │       ├── LoginModal.jsx      # Tizimga kirish modali
│   │       └── RegisterModal.jsx   # Ro'yxatdan o'tish modali
│   │
│   ├── pages/                      # To'liq sahifalar (Views)
│   │   ├── HomePage.jsx            # [DEV 2] Bosh sahifa
│   │   ├── ToursPage.jsx           # [DEV 3] Turlar katalogi sahifasi
│   │   ├── TourDetailPage.jsx      # [DEV 4] Turning batafsil ma'lumot va kalkulyator sahifasi
│   │   ├── CheckoutPage.jsx        # [DEV 5] Bron qilish va yo'lovchi ma'lumotlarini kiritish
│   │   ├── BookingSuccessPage.jsx  # [DEV 5] Muvaffaqiyatli buyurtma va vaucher sahifasi
│   │   ├── ProfilePage.jsx         # [DEV 6] Foydalanuvchi shaxsiy kabineti
│   │   ├── MyBookingsPage.jsx      # [DEV 6] Mening buyurtmalarim tarixi sahifasi
│   │   ├── AboutPage.jsx           # [DEV 6] Biz haqimizda sahifasi
│   │   ├── ContactPage.jsx         # [DEV 6] Bog'lanish va manzil sahifasi
│   │   └── NotFoundPage.jsx        # [DEV 1] 404 sahifasi
│   │
│   ├── routes/                     # Marshrutlash (Routing)
│   │   └── AppRoutes.jsx           # [DEV 1] Barcha URL yo'llar va Layout birlashmasi
│   │
│   ├── context/                    # Global State (Holat boshqaruvi)
│   │   ├── CurrencyContext.jsx     # [DEV 1] Valyuta kursi (USD, UZS, EUR)
│   │   ├── BookingContext.jsx      # [DEV 4 & 5] Bron qilinayotgan turning ma'lumotlari
│   │   └── AuthContext.jsx         # [DEV 6] Foydalanuvchi sessiyasi (kirgan/chiqqan)
│   │
│   ├── data/                       # [DEV 6] Mock JSON ma'lumotlar bazasi
│   │   ├── tours.json              # Turlar, narxlar, kunlik dasturlar, rasmlar
│   │   ├── destinations.json       # Mamlakatlar va shaharlar ro'yxati
│   │   ├── flights.json            # Aviachiptalar (jadval, aviakompaniya, bagaj)
│   │   └── reviews.json            # Sayohatchilar fikrlari
│   │
│   ├── services/                   # [DEV 6] API va Yordamchi servislar
│   │   ├── api.js                  # Turlarni olish, qidirish, buyurtmani saqlash
│   │   └── storage.js              # localStorage bilan ishlash (vaucherlar, sessiya)
│   │
│   ├── utils/                      # [DEV 1] Yordamchi funksiyalar
│   │   ├── formatCurrency.js       # Narxlarni chiroyli formatlash (12 500 000 so'm / $950)
│   │   └── formatDate.js           # Sanalarni formatlash (16.09.2026)
│   │
│   ├── App.jsx                     # [DEV 1] Asosiy ilova o'rami (Providerlar va Routes)
│   ├── main.jsx                    # React ilovasini ishga tushirish (entry point)
│   └── index.css                   # Global stillar va asosiy ranglar palitrasi
│
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

### 5. LOYIHANI 6 NAFAR FRONTEND DASTURCHIGA TAQSIMLASH

Jamoa a'zolari bir-biriga xalaqit bermasligi, Git'da to'qnashuvlar (merge conflicts) bo'lmasligi uchun har bir dasturchiga mustaqil javobgarlik sohasi biriktiriladi.

```
                    ┌────────────────────────────────────────────────────────┐
                    │      DEV 1: Team Lead / Arxitektura & UI Kit           │
                    │   Layout, Routing, Navbar, Footer, UI komponentlar     │
                    └───────────────────────────┬────────────────────────────┘
                                                │
         ┌───────────────────┬──────────────────┼──────────────────┬──────────────────┐
         ▼                   ▼                  ▼                  ▼                  ▼
  ┌──────────────┐    ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │    DEV 2     │    │    DEV 3     │   │    DEV 4     │   │    DEV 5     │   │    DEV 6     │
  │ Bosh sahifa, │    │ Katalog,     │   │ Turning      │   │ Checkout,    │   │ Auth, Profil,│
  │ Hero Slider, │    │ Filtrlar,    │   │ batafsil     │   │ Sayohatchilar│   │ Mock API va  │
  │ Qidiruv,     │    │ Saralash va  │   │ sahifasi &   │   │ formasi,     │   │ Statik       │
  │ Ommabop      │    │ Turlar       │   │ Dinamik      │   │ Aviabiletlar,│   │ sahifalar    │
  │ yo'nalishlar │    │ ro'yxati     │   │ Kalkulyator  │   │ Vaucher      │   │              │
  └──────────────┘    └──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
```

---

#### 👨‍💻 DASTURCHI 1: Team Lead / Frontend Arxitekturasi & Design System
* **Asosiy vazifasi:** Loyihaning poydevorini qurish, umumiy ko'rinish va takrorlanuvchi komponentlarni tayyorlash.
* **Ishlab chiqadigan fayllari va komponentlari:**
  - `src/components/layout/Navbar.jsx` (Valyuta indikatori, til tugmasi, menyu havolalari, mobil menyu);
  - `src/components/layout/Footer.jsx` (Kompaniya manzili, telefonlar, havolalar, litsenziya);
  - `src/components/ui/` umumiy UI to'plami:
    * `Button.jsx` (Primary, Secondary, Outline, Danger);
    * `Modal.jsx` (Qayta ishlatiluvchi universal modal oyna);
    * `Input.jsx`, `Select.jsx`, `Badge.jsx`;
    * `Loader.jsx` va `PageLoader.jsx`;
  - `src/routes/AppRoutes.jsx` (Barcha sahifalar marshrutlari va sahifa shablonlari - MainLayout);
  - `src/context/ThemeCurrencyContext.jsx` (Valyuta kurslarini boshqarish: USD <-> UZS).
* **Qabul qilish mezoni (DoD):**
  - Loyiha toza ishga tushadi, barcha sahifalar bo'sh marshrutlar bilan bog'langan;
  - Navbar va Footer barcha sahifalarda responsiv (mobil va desktop) ko'rinishda ishlaydi.

---

#### 👨‍💻 DASTURCHI 2: Bosh sahifa (Home Page) & Vizual Bloklar
* **Asosiy vazifasi:** Foydalanuvchi birinchi ko'radigan bosh sahifaning estetik va interaktiv qismini yaratish.
* **Ishlab chiqadigan fayllari va komponentlari:**
  - `src/pages/HomePage.jsx`;
  - `src/components/home/HeroSlider.jsx` (Aksiyalar va go'zal turlar slayderi);
  - `src/components/home/QuickSearchBar.jsx` (Bosh sahifadagi tezkor qidiruv vidjeti: Yo'nalish tanlash, sana tanlash, "Qidirish" bosilganda Katalog sahifasiga yo'naltirish);
  - `src/components/home/DestinationGrid.jsx` (Mamlakatlar bo'yicha kartochkalar: Turkiya, Dubay, Malayziya va h.k.);
  - `src/components/home/VideoGuideBanner.jsx` (Mir-Jahondagi kabi "Tizimdan foydalanish va bron qilish tartibi" video/banner bloki);
  - `src/components/home/WhyUsSection.jsx` (Afzalliklar va ishonchli xizmatlar bloki).
* **Qabul qilish mezoni (DoD):**
  - Slayder silliq harakatlanadi;
  - Qidiruv vidjetida yo'nalish tanlanib "Qidirish" bosilganda filtr parametrlari bilan katalog sahifasiga o'tadi;
  - Mobil ekranlarda kartochkalar va bannerlar to'g'ri joylashadi.

---

#### 👨‍💻 DASTURCHI 3: Turlar Katalogi, Filtrlar & Qidiruv Tizimi
* **Asosiy vazifasi:** Barcha turlarni qulay ko'rish, saralash va filtrlash tizimini yaratish.
* **Ishlab chiqadigan fayllari va komponentlari:**
  - `src/pages/ToursPage.jsx`;
  - `src/components/tours/TourCard.jsx` (Turning rasmi, nomi, joylashuvi, davomiyligi, narxi, "Batafsil" tugmasi);
  - `src/components/tours/TourFilterSidebar.jsx`:
    * Mamlakat/shahar bo'yicha filtr (checkbox/select);
    * Narx oralig'i (min/max range slider);
    * Tur toifasi (Ekskursion, Plyaj, Sanatoriy);
    * Davomiyligi (3-5 kun, 7-10 kun va h.k.);
  - `src/components/tours/SortBar.jsx` (Arzonroq, Qimmatroq, Eng mashhur);
  - `src/components/tours/Pagination.jsx` yoki cheksiz yuklash (Load More);
  - `src/components/tours/EmptyState.jsx` (Natija topilmaganda chiquvchi xabar).
* **Qabul qilish mezoni (DoD):**
  - Foydalanuvchi filtrlarni o'zgartirganda turlar ro'yxati darhol moslashadi;
  - Narx bo'yicha saralash to'g'ri ishlaydi;
  - URL query parametrlari orqali qidiruv (`?country=turkey&sort=price_asc`) saqlanadi.

---

#### 👨‍💻 DASTURCHI 4: Turning batafsil sahifasi & Dinamik Kalkulyator (Loyiha markazi)
* **Asosiy vazifasi:** Har bir turning ichki sahifasini ko'rsatish va sayohat narxini yo'lovchilar/sanalarga qarab jonli hisoblab beruvchi kalkulyatorni yaratish.
* **Ishlab chiqadigan fayllari va komponentlari:**
  - `src/pages/TourDetailPage.jsx`;
  - `src/components/tour-detail/TourGallery.jsx` (Turning rasmlari galereyasi);
  - `src/components/tour-detail/TourInfoTabs.jsx` (Tavsif, Dastur jadvali, Narxga kiritilgan/kiritilmagan xizmatlar);
  - `src/components/tour-detail/BookingCalculator.jsx`:
    * Sayohat davrini tanlash (Sana oraliqlari: masalan 16.09.2026 - 23.09.2026, 7 kecha);
    * Mehmonxona tanlash selekti;
    * Yo'lovchilar soni sanagichi:
      - Katta yoshdagilar (12+)
      - INF (0 - 1.99 yosh)
      - CHD (2 - 5.99 yosh)
      - CHD (6 - 11.99 yosh)
    * Jonli jami summani hisoblash formulasini tuzish;
    * B2B narxini ko'rsatish/yashirish tugmasi;
    * Telegram orqali ulashish havolasi;
    * "Bron qilishga o'tish" tugmasi (barcha hisoblangan ma'lumotlarni saqlab keyingi bosqichga o'tkazadi).
* **Qabul qilish mezoni (DoD):**
  - Har qanday yo'lovchi qo'shilganda yoki o'chirilganda jami narx to'g'ri qayta hisoblanadi;
  - Tanlangan sanada bo'sh o'rinlar soni ko'rsatiladi;
  - "Bron qilish" bosilganda ma'lumotlar global state (yoki localStorage)ga saqlanib checkout sahifasiga yo'naltiriladi.

---

#### 👨‍💻 DASTURCHI 5: Buyurtma rasmiylashtirish (Checkout), Aviabiletlar & Vaucher
* **Asosiy vazifasi:** Sayohatchilar ma'lumotlarini qabul qilish, aviachiptalar jadvali va yakuniy buyurtma vaucherini shakllantirish.
* **Ishlab chiqadigan fayllari va komponentlari:**
  - `src/pages/CheckoutPage.jsx` va `src/pages/BookingSuccessPage.jsx`;
  - `src/components/checkout/PassengerForm.jsx`:
    * Har bir yo'lovchi (kattalar va bolalar soniga qarab dinamik formalar);
    * Pasport ma'lumotlari: Ism, Familiya, Pasport seriya/raqam, Tug'ilgan sana;
    * Aloqa ma'lumotlari: Telefon raqam, E-mail;
  - `src/components/checkout/FlightTicketsInfo.jsx` (Aviachipta varianti: Aviakompaniya, Yuk hajmi, Jo'nash va kelish vaqti);
  - `src/components/checkout/OrderSummaryCard.jsx` (Tanlangan turning qisqa kartasi va jami to'lov miqdori);
  - `src/components/checkout/VoucherCard.jsx` (Bron qilingandan so'ng ekranda chiquvchi rasmiy vaucher / buyurtma cheki, Chop etish - Print funksiyasi bilan).
* **Qabul qilish mezoni (DoD):**
  - Formadagi barcha maydonlar validatsiyadan o'tadi (telefon formati, pasport raqami to'g'riligi);
  - Buyurtma muvaffaqiyatli saqlanadi va chiroyli vaucher sahifasiga o'tadi;
  - Chop etish (Print) bosilganda faqat vaucher qismi qog'ozga chiqadi.

---

#### 👨‍💻 DASTURCHI 6: Avtorizatsiya, Foydalanuvchi Kabineti & Mock API / Servislar
* **Asosiy vazifasi:** Tizimga kirish/ro'yxatdan o'tish, shaxsiy profil, buyurtmalar tarixi va butun jamoa foydalanishi uchun soxta ma'lumotlar (Mock API) qatlamini yaratish.
* **Ishlab chiqadigan fayllari va komponentlari:**
  - `src/data/`:
    * `tours.json` (Barcha turlar, narxlar, sanalar, rasmlar, dasturlar);
    * `destinations.json` (Mamlakatlar va shaharlar ro'yxati);
    * `flights.json` (Parvoz jadvallari);
  - `src/services/api.js` (Turlarni olish, bitta turni ID bo'yicha olish, qidirish, buyurtmani saqlash funksiyalari);
  - `src/components/auth/LoginModal.jsx` va `RegisterModal.jsx`;
  - `src/pages/ProfilePage.jsx` (Foydalanuvchi ma'lumotlari, Parolni yangilash);
  - `src/pages/MyBookingsPage.jsx` (Mening buyurtmalarim ro'yxati va holatlari: "Yangi", "Kutilmoqda", "Bekor qilingan");
  - `src/pages/AboutPage.jsx` va `ContactPage.jsx` (Kompaniya haqidagi statik sahifalar).
* **Qabul qilish mezoni (DoD):**
  - Jamoa a'zolari `api.js` orqali ma'lumotlarni osonlikcha chaqirib ishlata oladilar;
  - Login/Register shakli `localStorage`da tokenni simulyatsiya qiladi va foydalanuvchi holatini saqlaydi;
  - Shaxsiy kabinetda avval qilingan barcha buyurtmalar ro'yxati ko'rinadi.

---

### 6. LOYIHANI BOSQICHMA-BOSQICH AMALGA OSHIRISH REJASI (SPRINT REJASI)

| Bosqich | Muddat | Bajariladigan ishlar | Mas'ullar |
| :--- | :--- | :--- | :--- |
| **1-Bosqich: Poydevor va Mock Data** | 1-3 kun | Git repo sozlash, loyiha arxitekturasi, Mock JSON fayllar, Umumiy UI komponentlar (Button, Input, Modal, Layout) | Dev 1, Dev 6 |
| **2-Bosqich: Sahifalar va Komponentlar** | 4-8 kun | Bosh sahifa, Turlar katalogi, Turning batafsil sahifasi, Kalkulyator, Checkout formasi va Auth | Barcha dasturchilar (Dev 1 - Dev 6) |
| **3-Bosqich: Integratsiya va O'zaro bog'lash** | 9-11 kun | Qidiruvdan katalogga, katalogdan detalga, kalkulyatordan checkoutga ma'lumotlar oqimini ulash | Barcha dasturchilar |
| **4-Bosqich: Testlash, Responsive va Jilo berish** | 12-14 kun | Mobil moslashuvchanlikni tekshirish, xatolarni to'g'rilash, animatsiyalar, cross-browser test | Barcha jamoa |

---

### 7. GIT VA JAMOA BILAN ISHLASH TARTIBI (GIT WORKFLOW)

To'qnashuvlar (conflicts) kelib chiqmasligi uchun:
1. **Asosiy shoxlar:**
   - `main` - Faqat tayyor, sinovdan o'tgan barqaror kod.
   - `develop` - Barcha ishlab chiqilgan xususiyatlar birlashadigan shox.
2. **Har bir dasturchi uchun alohida shox (branch naming):**
   - Dev 1: `feature/layout-and-design-system`
   - Dev 2: `feature/home-page-and-slider`
   - Dev 3: `feature/tours-catalog-and-filters`
   - Dev 4: `feature/tour-details-and-calculator`
   - Dev 5: `feature/checkout-and-vouchers`
   - Dev 6: `feature/auth-profile-and-mock-api`
3. **Pull Request (PR) qoidasi:**
   - Har bir dasturchi o'z ishini tugatgach `develop` shoxiga PR ochadi.
   - Dev 1 (Team Lead) kodni tekshirib (Code Review), keyin birlashtiradi (merge).
   - Hech kim to'g'ridan-to'g'ri `main` yoki `develop` shoxiga `push` qilmaydi!

---

### 8. YAKUNIY NATIJA (DELIVERABLES)

Ushbu TZ asosida ishlab chiqilgan veb-ilova:
1. `mir-jahon.uz` kabi turlar va sayohatlarni to'liq qamrab oladi, lekin undan 5 barobar yengil, zamonaviy va tushunarli ishlaydi.
2. Har qanday qurilmada (telefon, planshet, kompyuter) mukammal ko'rinadi.
3. 6 kishilik jamoa o'rtasida aniq chegaralanganligi sababli ish 2-3 hafta ichida sifatli yakunlanadi.
