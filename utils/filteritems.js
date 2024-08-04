// Function to get unique country names from items

export const  getUniqueCountries = () => {
  const uniqueCountries = new Set();
  
  items.forEach(item => {
    if (item.country) {
      uniqueCountries.add(item.country);
    }
  });

  return Array.from(uniqueCountries);
};


export const  getUniqueReligions = () => {
  const uniqueReligion = new Set();
  
  items.forEach(item => {
    if (item.religion) {
      uniqueReligion.add(item.religion);
    }
  });

  return Array.from(uniqueReligion);
};

export const items = [
  {
    "arrivaldate": "8/6/2024",
    "religion": "None",
    "name": "Mathias Drago Sanchez Muriel",
    "preferredName": "Mathias",
    "contactInfo": "Phone: 0034620939371",
    "country": "Spain"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "None",
    "name": "Jimiah Filterman",
    "preferredName": "Jimiah",
    "contactInfo": "Phone: 6012998876",
    "country": "Bahamas"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "Islam",
    "name": "Khadiza Akter",
    "preferredName": "Asma",
    "contactInfo": "Phone: 6019130996",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "8/10/2024",
    "religion": "Islam",
    "name": "Amatun Noor Prapty",
    "preferredName": "Amatun",
    "contactInfo": "No valid contact info",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "7/25/2024",
    "religion": "Islam",
    "name": "Kamrul Islam",
    "preferredName": "Tan.",
    "contactInfo": "Phone: 8801990181968, WhatsApp: 8801990181968, Facebook: https://www.facebook.com/profile.php?id=100077337917258&mibextid=ZbWKwL",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "8/2/2024",
    "religion": "Islam",
    "name": "Shadman Shakib.",
    "preferredName": "Shadman",
    "contactInfo": "Phone: 01610027434",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "8/6/2024",
    "religion": "Islam",
    "name": "K M Salim Andalib",
    "preferredName": "Salim",
    "contactInfo": "Facebook: https://www.facebook.com/andalibopu",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "8/12/2024",
    "religion": "Islam",
    "name": "Md. Obaidullah",
    "preferredName": "Muhammad",
    "contactInfo": "Phone: 01726261746",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "8/10/2024",
    "religion": "Islam",
    "name": "Shefa Tabassum",
    "preferredName": "Shefa",
    "contactInfo": "Phone: 1521105054",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "7/28/2024",
    "religion": "None",
    "name": "Asmita Rahman",
    "preferredName": "Asmita",
    "contactInfo": "Phone: 8801706271478",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "08/02/2024",
    "religion": "None",
    "name": "Jo\u00e3o Vitor Gonzaga",
    "preferredName": "Jo\u00e3o",
    "contactInfo": "Phone: 5511949110263, WhatsApp: 5511949110263",
    "country": "Brazil"
  },
  {
    "arrivaldate": "7/30/2024",
    "religion": "Christianity",
    "name": "Paloma Izadora Aparecida Moreira Vieira",
    "preferredName": "Paloma",
    "contactInfo": "Phone: 5531984848886",
    "country": "Brazil"
  },
  {
    "arrivaldate": "08/12/2024",
    "religion": "None",
    "name": "Johanna Tarcson",
    "preferredName": "Johanna",
    "contactInfo": "No valid contact info",
    "country": "Germany"
  },
  {
    "arrivaldate": "8/23/2002",
    "religion": "None",
    "name": "Issaka Hassan Tia",
    "preferredName": "Issaka",
    "contactInfo": "Phone: 233593415889",
    "country": "Ghana"
  },
  {
    "arrivaldate": "8/12/2024",
    "religion": "Christianity",
    "name": "Richard kofi Boglo",
    "preferredName": "Richard",
    "contactInfo": "Phone: 0240031807",
    "country": "Ghana"
  },
  {
    "arrivaldate": "8/16/2024",
    "religion": "Christianity",
    "name": "Rockson Anokye (",
    "preferredName": "Rockson",
    "contactInfo": "Phone: 233241727035, WhatsApp: 233241727035",
    "country": "Ghana"
  },
  {
    "arrivaldate": "8/31/2024",
    "religion": "Christianity",
    "name": "Jeremiah Williams",
    "preferredName": "Jeremiah",
    "contactInfo": "Phone: 9295697195",
    "country": "Guyana"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "Hinduism",
    "name": "Abhishek Mishra",
    "preferredName": "Abhishek",
    "contactInfo": "Phone: 6018180658",
    "country": "India"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "Christianity",
    "name": "Mounica Kusuma",
    "preferredName": "Mounica",
    "contactInfo": "Mounica Kusuma (Facebook)",
    "country": "India"
  },
  {
    "arrivaldate": "7/24/2024",
    "religion": "Islam",
    "name": "Salwa Mohamed",
    "preferredName": "Salwa",
    "contactInfo": "Phone: 918590507151",
    "country": "India"
  },
  {
    "arrivaldate": "7/26/2024",
    "religion": "Islam",
    "name": "Salwa Mohamed Musarikandy",
    "preferredName": "Salwa",
    "contactInfo": "Facebook: https://www.facebook.com/Basil.mk/",
    "country": "India"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "Christianity",
    "name": "Jonathan Navara",
    "preferredName": "Jonathan",
    "contactInfo": "No valid contact info",
    "country": "India"
  },
  {
    "arrivaldate": "7/25/2024",
    "religion": "None",
    "name": "Lalitha Inturi",
    "preferredName": "Lalitha",
    "contactInfo": "Phone: 7693781483",
    "country": "Indian"
  },
  {
    "arrivaldate": "8/12/2024",
    "religion": "None",
    "name": "Jamilya",
    "preferredName": "Jamilya",
    "contactInfo": "Phone: 34615223569, WhatsApp: 34615223569",
    "country": "Kazakhstan"
  },
  {
    "arrivaldate": "8/10/2024",
    "religion": "Hinduism",
    "name": "Sandhya Thapa",
    "preferredName": "Sandhya",
    "contactInfo": "Facebook: https://www.facebook.com/share/j9W7tP2SMJvkjA6Q/?mibextid=qi2Omg",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/28/2024",
    "religion": "Hinduism",
    "name": "Rhishika Guragain",
    "preferredName": "Rhishika",
    "contactInfo": "No valid contact info",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "None",
    "name": "Pratima Rajbanshi",
    "preferredName": "Zenith",
    "contactInfo": "Zenith Chetri (Facebook)",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "None",
    "name": "Prasanna Rijal",
    "preferredName": "Prasanna",
    "contactInfo": "Phone: 6016581524",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/12/2024",
    "religion": "Hinduism",
    "name": "Bibek Ganesh",
    "preferredName": "Bibek",
    "contactInfo": "Phone: 9804949594",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/12/2024",
    "religion": "None",
    "name": "Niyati Tamang",
    "preferredName": "Niyati",
    "contactInfo": "Phone: 9779840726784",
    "country": "Nepal"
  },
  {
    "arrivaldate": "7/23/2024",
    "religion": "Hinduism",
    "name": "Sabin Shrestha",
    "preferredName": "Sabin",
    "contactInfo": "Phone: 9779860033148",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/3/2024",
    "religion": "None",
    "name": "Nhoojah Maharjan",
    "preferredName": "Nhoojah",
    "contactInfo": "No valid contact info",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/4/2024",
    "religion": "Hinduism",
    "name": "Aakash Bhatta",
    "preferredName": "Aakash",
    "contactInfo": "Phone: 9779848429607",
    "country": "Nepal"
  },
  {
    "arrivaldate": "7/25/2024",
    "religion": "Hinduism",
    "name": "Abhinay Shrestha",
    "preferredName": "Abhinay",
    "contactInfo": "Phone: 9779840219384",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "Buddhism",
    "name": "Sonam Gurung",
    "preferredName": "Sonam",
    "contactInfo": "Facebook: https://www.facebook.com/sonamchoedon103/",
    "country": "Nepal"
  },
  {
    "arrivaldate": "7/25/2024",
    "religion": "Hinduism",
    "name": "Leon Giri",
    "preferredName": "Leon",
    "contactInfo": "Phone: 9779842054748",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/11/2024",
    "religion": "Hinduism",
    "name": "Subodh Bhattarai",
    "preferredName": "Subodh",
    "contactInfo": "Facebook: https://www.facebook.com/subodh.bhattarai.477",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/5/2024",
    "religion": "Hinduism",
    "name": "Prasant Baral",
    "preferredName": "Prasant",
    "contactInfo": "Phone: 9779802425820",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "None",
    "name": "Tarbi Pyakurel",
    "preferredName": "Tarbi",
    "contactInfo": "Phone: 6013079272",
    "country": "Nepali"
  },
  {
    "arrivaldate": "8/19/2024",
    "religion": "None",
    "name": "Rubina Guragain",
    "preferredName": "Rubina",
    "contactInfo": "Phone: 4699686139",
    "country": "Nepali"
  },
  {
    "arrivaldate": "8/3/2024",
    "religion": "Christianity",
    "name": "Tolulope Ademulegun",
    "preferredName": "Tolu",
    "contactInfo": "Phone: 2347030805149",
    "country": "Nigeria"
  },
  {
    "arrivaldate": "7/1/2024",
    "religion": "Christianity",
    "name": "Verity Nwabuisi",
    "preferredName": "Verity",
    "contactInfo": "Phone: 16019131806",
    "country": "Nigeria"
  },
  {
    "arrivaldate": "8/10/2024",
    "religion": "Christianity",
    "name": "Chinenye Edomobi",
    "preferredName": "Chinenye",
    "contactInfo": "Phone: 9252045873",
    "country": "Nigeria"
  },
  {
    "arrivaldate": "8/7/2024",
    "religion": "Christianity",
    "name": "Ulunna Rita Ugoh",
    "preferredName": "Rita",
    "contactInfo": "Phone: 2348127744849",
    "country": "Nigeria"
  },
  {
    "arrivaldate": "8/6/2024",
    "religion": "Christianity",
    "name": "Ugochukwu Kenneth Oduwe",
    "preferredName": "Ugochukwu",
    "contactInfo": "Phone: 2349156495006",
    "country": "Nigeria"
  },
  {
    "arrivaldate": "8/4/2024",
    "religion": "Islam",
    "name": "Ayesha Maheen",
    "preferredName": "Ayesha",
    "contactInfo": "Phone: 03310241223",
    "country": "Pakistan"
  },
  {
    "arrivaldate": "8/1/2024",
    "religion": "Islam",
    "name": "Malik",
    "preferredName": "Malik",
    "contactInfo": "Phone: 6692494596",
    "country": "Pakistan"
  },
  {
    "arrivaldate": "1/8/2024",
    "religion": "Christianity",
    "name": "Nolubabalo Sishuba",
    "preferredName": "Luba",
    "contactInfo": "Luba Ruth Sishuba (Facebook)",
    "country": "South africa"
  },
  {
    "arrivaldate": "7/29/2024",
    "religion": "Islam",
    "name": "Babatunde Adebayo",
    "preferredName": "Babatunde",
    "contactInfo": "Phone: 447427171272",
    "country": "English"
  },
  {
    "arrivaldate": "8/15/2024",
    "religion": "Islam",
    "name": "Tohura Khanam Easha Tohura",
    "preferredName": "Tohura",
    "contactInfo": "Phone: 6013079716",
    "country": "Bangladesh"
  },
  {
    "arrivaldate": "8/15/2024",
    "religion": "Hinduism",
    "name": "Sandesh Bhattarai",
    "preferredName": "Sandesh",
    "contactInfo": "Phone: 6012998937",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/13/2024",
    "religion": "Christianity",
    "name": "Ayokanmi Osobukola",
    "preferredName": "Ayokanmi",
    "contactInfo": "Phone: 6019138488, WhatsApp: 2349073163885",
    "country": "Nigeria"
  },
  {
    "arrivaldate": "8/7/2024",
    "religion": "None",
    "name": "Suwan Aryal",
    "preferredName": "Suwan",
    "contactInfo": "Phone: 7734833993",
    "country": "Nepal"
  },
  {
    "arrivaldate": "8/14/2024",
    "religion": "Islam",
    "name": "Rabiu Musa",
    "preferredName": "Musa",
    "contactInfo": "Phone: 2348061363033",
    "country": "Nigeria"
  },
  {
    "arrivaldate": "8/20/2024",
    "religion": "None",
    "name": "Rabeea Fatima",
    "preferredName": "Rabeea",
    "contactInfo": "Phone: 6019138759",
    "country": "Pakistan"
  }
]
