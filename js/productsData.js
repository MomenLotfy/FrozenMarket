// data.js
const productsData = {
  honey: [
    { id: 1, name: "عسل  برسيم 1ك", price: "68 ج.م", image: "images/honey1.jpg" },
    { id: 2, name: " عسل حبة البركة 1ك", price: "78 ج.م", image: "images/honey2.jpg" },
    { id: 3, name: "عسل موالح 1ك", price: "158 ج.م", image: "images/honey3.jpg" },
    { id: 4, name: "عسل مكسرات أوله 1ك", price: "190 ج.م", image: "images/honey4.jpg" },
    { id: 5, name: "عسل مكسرات 1/2ك", price: "65 ج.م", image: "images/honey5.jpg" },
    { id: 6, name: "عسل مكسرات 1ك", price: "190 ج.م", image: "images/honey6.jpg" },
    { id: 7, name: "عسل علاجي 1ك", price: "150 ج.م", image: "images/honey7.jpg" },
    { id: 8, name: "عسل زيادة الوزن 1ك", price: "210 ج.م", image: "images/honey8.jpg" },
    { id: 9, name: "عسل  مانعة 1ك", price: "220 ج.م", image: "images/honey9.jpg" },
    { id: 10, name: "عسل  طاقة 1ك", price: "240 ج.م", image: "images/honey10.jpg" },
    { id: 11, name: " غذاء ملكات 5جرام ", price: "55 ج.م", image: "images/honey11.jpg" }
  ],
  butter: [
    { id: 1, name: "زبدة كرستال 1ك", price: "125 ج.م", image: "images/butter1.jpg" },
    { id: 2, name: "زبدة فيرن 1ك", price: "139 ج.م", image: "images/butter2.jpg" },
    { id: 3, name: "زبدة زيتون 700جرام", price: "125 ج.م", image: "images/butter3.jpg" },
  ],
  mozzarella: [
    { id: 1, name: "موتزاريلا (الحمد) 1ك", price: "135 ج.م", image: "images/mozzarella1.jpg" },
    { id: 2, name: "موتزاريلا مكس (الحمد) 200جرام", price: "35 ج.م", image: "images/mozzarella2.jpg" },
    { id: 3, name: "موتزاريلا (الحمد) 400 جرام", price: "58 ج.م", image: "images/mozzarella3.jpg" },
    { id: 4, name: "موتزاريلا مكس (الحمد) 500جرام", price: "68 ج.م", image: "images/mozzarella4.jpg" },
    { id: 5, name: "موتزاريلا الجوهرة 1ك", price: "128 ج.م", image: "images/mozzarella5.jpg" },
  ],
  nuts: [
    { id: 1, name: " فسدق 1ك", price: "710 ج.م", image: "images/cashew.jpg" },
    { id: 2, name: " كاجو 1ك", price: "620 ج.م", image: "images/almond.jpg" },
    { id: 3, name: " عين جمل غامق 1ك", price: "370 ج.م", image: "images/pistachio.jpg" },
    { id: 4, name: " عين جمل فاتح 1ك", price: "400 ج.م", image: "images/mixed_nuts.jpg" },
    { id: 5, name: " مكسرات مشكلة", price: "350 ج.م", image: "images/mixed_nuts.jpg" },

  ],
  chicken: [
    { id: 1, name: "فليه فراخ 1ك", price: "70 ج.م", image: "images/chicken1.jpg" },
    { id: 2, name: "فليه فراخ 900جرام", price: "60 ج.م", image: "images/chicken2.jpg" },
    { id: 3, name: "فليه فراخ 800جرام", price: "80 ج.م", image: "images/chicken3.jpg" },
    { id: 4, name: " كبد وقوانص (طبق)", price: "90 ج.م", image: "images/chicken4.jpg" },
    { id: 5, name: "اجنحة فراح 900جرام", price: "100 ج.م", image: "images/chicken5.jpg" },
    { id: 6, name: "وراك فراخ 900جرام", price: "110 ج.م", image: "images/chicken6.jpg" }
  ],
  chickencrackers: [
    { id: 1, name: "بانيه (رودي)", price: "30 ج.م", image: "images/chicken_crackers1.jpg" },
    { id: 2, name: "  بانيه (مزايا)", price: "50 ج.م", image: "images/chicken_crackers2.jpg" },
    { id: 3, name: "  بانيه (الحمد)", price: "70 ج.م", image: "images/chicken_crackers3.jpg" },
    { id: 4, name: "  بانيه (ميزه)", price: "90 ج.م", image: "images/chicken_crackers4.jpg" },
    { id: 5, name: "  بانيه (شيكيتيتا)", price: "110 ج.م", image: "images/chicken_crackers5.jpg" },
    { id: 6, name: "  بانيه (توابل شرقيه)", price: "130 ج.م", image: "images/chicken_crackers6.jpg" },
    { id: 7, name: "  بانيه (حلواني)", price: "30 ج.م", image: "images/chicken_crackers1.jpg" },
    { id: 8, name: "  استريس (الحمد)", price: "50 ج.م", image: "images/chicken_crackers2.jpg" },
    { id: 9, name: "  استريس (ميزه ابيض)", price: "70 ج.م", image: "images/chicken_crackers3.jpg" },
    { id: 10, name: "  استريس (ميزه الوان)", price: "90 ج.م", image: "images/chicken_crackers4.jpg" },
    { id: 11, name: "  استريس (میزه شفاف)", price: "110 ج.م", image: "images/chicken_crackers5.jpg" },
    { id: 12, name: "  (استربس (اطياب ابيض", price: "130 ج.م", image: "images/chicken_crackers6.jpg" },
    { id: 13, name: "  استرس (اطياب الوان)", price: "30 ج.م", image: "images/chicken_crackers1.jpg" },
    { id: 14, name: "  استربس (حلواني)", price: "50 ج.م", image: "images/chicken_crackers2.jpg" }
  ],
  meat: [
    { id: 1, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meat1.jpg" },
    { id: 2, name: "ستيك لحم", price: "200 ج.م", image: "images/meat2.jpg" },
    { id: 3, name: "كبدة", price: "150 ج.م", image: "images/meat3.jpg" },
    { id: 4, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meat4.jpg" },
    { id: 5, name: "ستيك لحم", price: "200 ج.م", image: "images/meat5.jpg" },
    { id: 6, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meat6.jpg" },
    { id: 7, name: "ستيك لحم", price: "200 ج.م", image: "images/meat7.jpg" },
    { id: 8, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meat8.jpg" },
    { id: 9, name: "ستيك لحم", price: "200 ج.م", image: "images/meat9.jpg" }
  ],
  meatderivatives: [
    { id: 1, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meatderivatives1.jpg" },
    { id: 2, name: "ستيك لحم", price: "200 ج.م", image: "images/meatderivatives2.jpg" },
    { id: 3, name: "كبدة", price: "150 ج.م", image: "images/meatderivatives3.jpg" },
    { id: 4, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meatderivatives4.jpg" },
    { id: 5, name: "ستيك لحم", price: "200 ج.م", image: "images/meatderivatives5.jpg" },
    { id: 6, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meatderivatives6.jpg" },
    { id: 7, name: "ستيك لحم", price: "200 ج.م", image: "images/meatderivatives7.jpg" },
    { id: 8, name: "لحمة مفرومة", price: "130 ج.م", image: "images/meatderivatives8.jpg" },
    { id: 9, name: "ستيك لحم", price: "200 ج.م", image: "images/meatderivatives9.jpg" }
  ],
  fish: [
    { id: 1, name: "سمك فيليه", price: "150 ج.م", image: "images/fish1.jpg" },
    { id: 2, name: "جمبري مقشر", price: "300 ج.م", image: "images/fish2.jpg" },
    { id: 3, name: "كبدة", price: "150 ج.م", image: "images/fish3.jpg" },
    { id: 4, name: "لحمة مفرومة", price: "130 ج.م", image: "images/fish4.jpg" },
    { id: 5, name: "ستيك لحم", price: "200 ج.م", image: "images/fish5.jpg" },
    { id: 6, name: "لحمة مفرومة", price: "130 ج.م", image: "images/fish6.jpg" },
    { id: 7, name: "ستيك لحم", price: "200 ج.م", image: "images/fish7.jpg" },
    { id: 8, name: "لحمة مفرومة", price: "130 ج.م", image: "images/fish8.jpg" },
    { id: 9, name: "ستيك لحم", price: "200 ج.م", image: "images/fish9.jpg" },
    { id: 10, name: "سمك فيليه", price: "150 ج.م", image: "images/fish10.jpg" },
    { id: 11, name: "جمبري مقشر", price: "300 ج.م", image: "images/fish11.jpg" }
  ],
  fishfruits: [
    { id: 1, name: "فواكه البحر", price: "200 ج.م", image: "images/fishfruits1.jpg" },
    { id: 2, name: "جمبري", price: "300 ج.م", image: "images/fishfruits2.jpg" },
    { id: 3, name: "كابوريا", price: "250 ج.م", image: "images/fishfruits3.jpg" },
    { id: 4, name: "سبيط", price: "350 ج.م", image: "images/fishfruits4.jpg" }
  ]

};

