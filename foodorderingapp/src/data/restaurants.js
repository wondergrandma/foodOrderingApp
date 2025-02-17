const restaurants = [
  {
    id: 1,
    name: "The Green Fork",
    cuisine: "Vegetarian",
    location: "New York, NY",
    rating: 4.5,
    menu: [
      { name: "Quinoa Buddha Bowl", price: 16.99 },
      { name: "Cauliflower Wings", price: 12.99 },
      { name: "Beyond Burger", price: 15.99 },
      { name: "Mushroom Risotto", price: 18.99 },
      { name: "Kale Caesar Salad", price: 13.99 },
      { name: "Vegetable Curry", price: 17.99 },
      { name: "Sweet Potato Tacos", price: 14.99 },
      { name: "Zucchini Noodles", price: 15.99 },
      { name: "Falafel Plate", price: 16.99 },
      { name: "Avocado Toast", price: 11.99 },
    ],
    hours: {
      monday: "11:00-22:00",
      tuesday: "11:00-22:00",
      wednesday: "11:00-22:00",
      thursday: "11:00-22:00",
      friday: "11:00-00:50",
      saturday: "10:00-23:00",
      sunday: "10:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 2,
    name: "Sushi World",
    cuisine: "Japanese",
    location: "Los Angeles, CA",
    rating: 4.7,
    menu: [
      { name: "Dragon Roll", price: 18.99 },
      { name: "Salmon Nigiri", price: 15.99 },
      { name: "Spicy Tuna Roll", price: 16.99 },
      { name: "Tempura Udon", price: 17.99 },
      { name: "California Roll", price: 14.99 },
      { name: "Miso Soup", price: 5.99 },
      { name: "Chicken Teriyaki", price: 19.99 },
      { name: "Rainbow Roll", price: 20.99 },
      { name: "Edamame", price: 6.99 },
      { name: "Gyoza", price: 8.99 },
    ],
    hours: {
      monday: "12:00-22:30",
      tuesday: "12:00-22:30",
      wednesday: "12:00-22:30",
      thursday: "12:00-22:30",
      friday: "12:00-23:30",
      saturday: "12:00-23:30",
      sunday: "12:00-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 3,
    name: "Bistro 101",
    cuisine: "French",
    location: "Paris, France",
    rating: 4.2,
    menu: [
      { name: "Coq au Vin", price: 24.99 },
      { name: "Beef Bourguignon", price: 26.99 },
      { name: "French Onion Soup", price: 12.99 },
      { name: "Escargot", price: 18.99 },
      { name: "Ratatouille", price: 19.99 },
      { name: "Croque Monsieur", price: 15.99 },
      { name: "Duck Confit", price: 28.99 },
      { name: "Quiche Lorraine", price: 16.99 },
      { name: "Steak Frites", price: 27.99 },
      { name: "Bouillabaisse", price: 29.99 },
    ],
    hours: {
      monday: "Closed",
      tuesday: "18:00-22:30",
      wednesday: "18:00-22:30",
      thursday: "18:00-22:30",
      friday: "18:00-23:30",
      saturday: "12:00-23:30",
      sunday: "12:00-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 4,
    name: "Pasta Paradise",
    cuisine: "Italian",
    location: "Rome, Italy",
    rating: 4.8,
    menu: [
      { name: "Spaghetti Carbonara", price: 16.99 },
      { name: "Fettuccine Alfredo", price: 15.99 },
      { name: "Lasagna", price: 18.99 },
      { name: "Penne Arrabbiata", price: 14.99 },
      { name: "Ravioli", price: 17.99 },
      { name: "Risotto ai Funghi", price: 19.99 },
      { name: "Gnocchi", price: 16.99 },
      { name: "Osso Buco", price: 28.99 },
      { name: "Tiramisu", price: 8.99 },
      { name: "Cannoli", price: 6.99 },
    ],
    hours: {
      monday: "11:30-22:30",
      tuesday: "11:30-22:30",
      wednesday: "11:30-22:30",
      thursday: "11:30-22:30",
      friday: "11:30-23:30",
      saturday: "11:30-23:30",
      sunday: "11:30-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 5,
    name: "Curry House",
    cuisine: "Indian",
    location: "London, UK",
    rating: 4.3,
    menu: [
      { name: "Butter Chicken", price: 17.99 },
      { name: "Chicken Tikka Masala", price: 16.99 },
      { name: "Palak Paneer", price: 15.99 },
      { name: "Biryani", price: 18.99 },
      { name: "Naan Bread", price: 3.99 },
      { name: "Dal Makhani", price: 14.99 },
      { name: "Samosas", price: 6.99 },
      { name: "Tandoori Chicken", price: 19.99 },
      { name: "Malai Kofta", price: 16.99 },
      { name: "Gulab Jamun", price: 5.99 },
    ],
    hours: {
      monday: "12:00-23:00",
      tuesday: "12:00-23:00",
      wednesday: "12:00-23:00",
      thursday: "12:00-23:00",
      friday: "12:00-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-22:30",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 6,
    name: "The Tacos Corner",
    cuisine: "Mexican",
    location: "Austin, TX",
    rating: 4.6,
    menu: [
      { name: "Street Tacos", price: 12.99 },
      { name: "Enchiladas", price: 15.99 },
      { name: "Burrito Bowl", price: 14.99 },
      { name: "Quesadillas", price: 13.99 },
      { name: "Nachos Supreme", price: 16.99 },
      { name: "Chiles Rellenos", price: 17.99 },
      { name: "Fajitas", price: 19.99 },
      { name: "Guacamole", price: 8.99 },
      { name: "Churros", price: 6.99 },
      { name: "Tres Leches", price: 7.99 },
    ],
    hours: {
      monday: "11:00-22:00",
      tuesday: "11:00-22:00",
      wednesday: "11:00-22:00",
      thursday: "11:00-22:00",
      friday: "11:00-23:00",
      saturday: "11:00-23:00",
      sunday: "11:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 7,
    name: "The Burger Joint",
    cuisine: "American",
    location: "Chicago, IL",
    rating: 4.4,
    menu: [
      { name: "Classic Cheeseburger", price: 13.99 },
      { name: "Bacon BBQ Burger", price: 15.99 },
      { name: "Mushroom Swiss Burger", price: 14.99 },
      { name: "Buffalo Wings", price: 12.99 },
      { name: "Caesar Salad", price: 10.99 },
      { name: "Sweet Potato Fries", price: 5.99 },
      { name: "Onion Rings", price: 6.99 },
      { name: "Milkshake", price: 6.99 },
      { name: "Apple Pie", price: 5.99 },
      { name: "Hot Dog", price: 8.99 },
    ],
    hours: {
      monday: "11:00-22:00",
      tuesday: "11:00-22:00",
      wednesday: "11:00-22:00",
      thursday: "11:00-22:00",
      friday: "11:00-23:00",
      saturday: "11:00-23:00",
      sunday: "11:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 8,
    name: "La Patisserie",
    cuisine: "French",
    location: "Paris, France",
    rating: 4.9,
    menu: [
      { name: "Croissant", price: 3.99 },
      { name: "Pain au Chocolat", price: 4.99 },
      { name: "Macaron Box", price: 15.99 },
      { name: "Éclair", price: 5.99 },
      { name: "Tarte Tatin", price: 6.99 },
      { name: "Mille-feuille", price: 7.99 },
      { name: "Opera Cake", price: 8.99 },
      { name: "Crème Brûlée", price: 7.99 },
      { name: "Profiterole", price: 6.99 },
      { name: "Baguette", price: 2.99 },
    ],
    hours: {
      monday: "07:00-19:00",
      tuesday: "07:00-19:00",
      wednesday: "07:00-19:00",
      thursday: "07:00-19:00",
      friday: "07:00-19:00",
      saturday: "07:00-20:00",
      sunday: "08:00-18:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 9,
    name: "Seafood Haven",
    cuisine: "Seafood",
    location: "Sydney, Australia",
    rating: 4.5,
    menu: [
      { name: "Grilled Salmon", price: 24.99 },
      { name: "Fish and Chips", price: 18.99 },
      { name: "Seafood Platter", price: 45.99 },
      { name: "Lobster Tail", price: 39.99 },
      { name: "Shrimp Scampi", price: 22.99 },
      { name: "Clam Chowder", price: 9.99 },
      { name: "Oysters", price: 19.99 },
      { name: "Crab Cakes", price: 16.99 },
      { name: "Mussels", price: 17.99 },
      { name: "Calamari", price: 14.99 },
    ],
    hours: {
      monday: "12:00-22:00",
      tuesday: "12:00-22:00",
      wednesday: "12:00-22:00",
      thursday: "12:00-22:00",
      friday: "12:00-23:00",
      saturday: "12:00-23:00",
      sunday: "12:00-21:30",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 10,
    name: "Spicy Thai",
    cuisine: "Thai",
    location: "Bangkok, Thailand",
    rating: 4.1,
    menu: [
      { name: "Pad Thai", price: 14.99 },
      { name: "Green Curry", price: 16.99 },
      { name: "Tom Yum Soup", price: 12.99 },
      { name: "Papaya Salad", price: 11.99 },
      { name: "Basil Chicken", price: 15.99 },
      { name: "Massaman Curry", price: 17.99 },
      { name: "Spring Rolls", price: 7.99 },
      { name: "Drunken Noodles", price: 15.99 },
      { name: "Mango Sticky Rice", price: 8.99 },
      { name: "Thai Iced Tea", price: 4.99 },
    ],
    hours: {
      monday: "11:30-22:00",
      tuesday: "11:30-22:00",
      wednesday: "11:30-22:00",
      thursday: "11:30-22:00",
      friday: "11:30-23:00",
      saturday: "11:30-23:00",
      sunday: "11:30-21:30",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 11,
    name: "Dim Sum Dynasty",
    cuisine: "Chinese",
    location: "San Francisco, CA",
    rating: 4.6,
    menu: [
      { name: "Har Gow (Shrimp Dumplings)", price: 8.99 },
      { name: "Siu Mai", price: 7.99 },
      { name: "BBQ Pork Buns", price: 6.99 },
      { name: "Egg Tarts", price: 5.99 },
      { name: "Chicken Feet", price: 7.99 },
      { name: "Rice Rolls", price: 9.99 },
      { name: "Lo Mai Gai", price: 8.99 },
      { name: "Turnip Cake", price: 6.99 },
      { name: "Spring Rolls", price: 7.99 },
      { name: "Mango Pudding", price: 5.99 },
    ],
    hours: {
      monday: "11:00-21:30",
      tuesday: "11:00-21:30",
      wednesday: "11:00-21:30",
      thursday: "11:00-21:30",
      friday: "11:00-22:30",
      saturday: "10:00-22:30",
      sunday: "10:00-21:30",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 12,
    name: "Mediterranean Oasis",
    cuisine: "Mediterranean",
    location: "Athens, Greece",
    rating: 3.1,
    menu: [
      { name: "Mixed Meze Platter", price: 24.99 },
      { name: "Moussaka", price: 18.99 },
      { name: "Souvlaki Plate", price: 19.99 },
      { name: "Greek Salad", price: 12.99 },
      { name: "Spanakopita", price: 11.99 },
      { name: "Grilled Octopus", price: 26.99 },
      { name: "Lamb Gyros", price: 16.99 },
      { name: "Dolmades", price: 9.99 },
      { name: "Baklava", price: 7.99 },
      { name: "Greek Coffee", price: 4.99 },
    ],
    hours: {
      monday: "12:00-23:00",
      tuesday: "12:00-23:00",
      wednesday: "12:00-23:00",
      thursday: "12:00-23:00",
      friday: "12:00-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 13,
    name: "Seoul Kitchen",
    cuisine: "Korean",
    location: "Seoul, South Korea",
    rating: 3.5,
    menu: [
      { name: "Bibimbap", price: 16.99 },
      { name: "Korean BBQ Set", price: 32.99 },
      { name: "Kimchi Jjigae", price: 15.99 },
      { name: "Japchae", price: 14.99 },
      { name: "Tteokbokki", price: 13.99 },
      { name: "Samgyeopsal", price: 24.99 },
      { name: "Haemul Pajeon", price: 18.99 },
      { name: "Sundubu Jjigae", price: 15.99 },
      { name: "Bingsu", price: 9.99 },
      { name: "Soju", price: 6.99 },
    ],
    hours: {
      monday: "11:30-22:00",
      tuesday: "11:30-22:00",
      wednesday: "11:30-22:00",
      thursday: "11:30-22:00",
      friday: "11:30-23:00",
      saturday: "11:30-23:00",
      sunday: "11:30-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 14,
    name: "Tapas & Vino",
    cuisine: "Spanish",
    location: "Barcelona, Spain",
    rating: 4.6,
    menu: [
      { name: "Patatas Bravas", price: 8.99 },
      { name: "Jamón Ibérico", price: 22.99 },
      { name: "Gambas al Ajillo", price: 16.99 },
      { name: "Paella (for two)", price: 42.99 },
      { name: "Croquetas", price: 9.99 },
      { name: "Chorizo in Wine", price: 12.99 },
      { name: "Tortilla Española", price: 10.99 },
      { name: "Albondigas", price: 11.99 },
      { name: "Churros con Chocolate", price: 7.99 },
      { name: "Sangria (pitcher)", price: 24.99 },
    ],
    hours: {
      monday: "17:00-00:00",
      tuesday: "17:00-00:00",
      wednesday: "17:00-00:00",
      thursday: "17:00-00:00",
      friday: "17:00-02:00",
      saturday: "17:00-02:00",
      sunday: "17:00-23:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 15,
    name: "Brazilian Grill",
    cuisine: "Brazilian",
    location: "Rio de Janeiro, Brazil",
    rating: 4.5,
    menu: [
      { name: "Rodizio (all you can eat)", price: 45.99 },
      { name: "Feijoada", price: 22.99 },
      { name: "Pão de Queijo", price: 6.99 },
      { name: "Moqueca", price: 26.99 },
      { name: "Picanha", price: 32.99 },
      { name: "Coxinha", price: 8.99 },
      { name: "Acarajé", price: 12.99 },
      { name: "Hearts of Palm Salad", price: 10.99 },
      { name: "Brigadeiros", price: 5.99 },
      { name: "Caipirinha", price: 9.99 },
    ],
    hours: {
      monday: "12:00-22:30",
      tuesday: "12:00-22:30",
      wednesday: "12:00-22:30",
      thursday: "12:00-22:30",
      friday: "12:00-23:30",
      saturday: "12:00-23:30",
      sunday: "12:00-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 16,
    name: "Vietnam House",
    cuisine: "Vietnamese",
    location: "Ho Chi Minh City, Vietnam",
    rating: 4.4,
    menu: [
      { name: "Pho Bo", price: 12.99 },
      { name: "Banh Mi", price: 8.99 },
      { name: "Spring Rolls", price: 7.99 },
      { name: "Bun Cha", price: 13.99 },
      { name: "Com Tam", price: 11.99 },
      { name: "Banh Xeo", price: 10.99 },
      { name: "Ca Phe Sua Da", price: 4.99 },
      { name: "Cao Lau", price: 14.99 },
      { name: "Che Ba Mau", price: 5.99 },
      { name: "Goi Cuon", price: 8.99 },
    ],
    hours: {
      monday: "10:00-22:00",
      tuesday: "10:00-22:00",
      wednesday: "10:00-22:00",
      thursday: "10:00-22:00",
      friday: "10:00-23:00",
      saturday: "10:00-23:00",
      sunday: "10:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 17,
    name: "Marrakesh Nights",
    cuisine: "Moroccan",
    location: "Marrakesh, Morocco",
    rating: 4.7,
    menu: [
      { name: "Tagine Lamb", price: 24.99 },
      { name: "Couscous Royal", price: 22.99 },
      { name: "Pastilla", price: 18.99 },
      { name: "Harira Soup", price: 8.99 },
      { name: "Moroccan Mezze", price: 16.99 },
      { name: "Grilled Merguez", price: 15.99 },
      { name: "Mint Tea", price: 4.99 },
      { name: "Zaalouk", price: 9.99 },
      { name: "Rfissa", price: 19.99 },
      { name: "Moroccan Pastries", price: 7.99 },
    ],
    hours: {
      monday: "12:00-23:00",
      tuesday: "12:00-23:00",
      wednesday: "12:00-23:00",
      thursday: "12:00-23:00",
      friday: "12:00-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-23:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 18,
    name: "Nordic Kitchen",
    cuisine: "Scandinavian",
    location: "Copenhagen, Denmark",
    rating: 2.1,
    menu: [
      { name: "Smørrebrød Selection", price: 18.99 },
      { name: "Gravlax", price: 16.99 },
      { name: "Swedish Meatballs", price: 19.99 },
      { name: "Pickled Herring", price: 14.99 },
      { name: "Potato Dumplings", price: 15.99 },
      { name: "Salmon Soup", price: 12.99 },
      { name: "Lingonberry Duck", price: 28.99 },
      { name: "Aquavit Platter", price: 25.99 },
      { name: "Cardamom Buns", price: 5.99 },
      { name: "Cloudberry Parfait", price: 8.99 },
    ],
    hours: {
      monday: "11:00-22:00",
      tuesday: "11:00-22:00",
      wednesday: "11:00-22:00",
      thursday: "11:00-22:00",
      friday: "11:00-23:00",
      saturday: "10:00-23:00",
      sunday: "10:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 19,
    name: "Istanbul Delights",
    cuisine: "Turkish",
    location: "Istanbul, Turkey",
    rating: 4.6,
    menu: [
      { name: "Mixed Kebab Platter", price: 28.99 },
      { name: "Lahmacun", price: 9.99 },
      { name: "Pide", price: 12.99 },
      { name: "Manti", price: 16.99 },
      { name: "Imam Bayildi", price: 14.99 },
      { name: "Iskender Kebab", price: 22.99 },
      { name: "Turkish Tea", price: 2.99 },
      { name: "Mercimek Çorbası", price: 7.99 },
      { name: "Künefe", price: 8.99 },
      { name: "Baklava Selection", price: 10.99 },
    ],
    hours: {
      monday: "11:00-23:00",
      tuesday: "11:00-23:00",
      wednesday: "11:00-23:00",
      thursday: "11:00-23:00",
      friday: "11:00-00:00",
      saturday: "11:00-00:00",
      sunday: "11:00-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 20,
    name: "Peruvian Flavors",
    cuisine: "Peruvian",
    location: "Lima, Peru",
    rating: 4.7,
    menu: [
      { name: "Ceviche Mixto", price: 19.99 },
      { name: "Lomo Saltado", price: 21.99 },
      { name: "Aji de Gallina", price: 17.99 },
      { name: "Anticuchos", price: 12.99 },
      { name: "Causa Rellena", price: 11.99 },
      { name: "Chupe de Camarones", price: 18.99 },
      { name: "Pisco Sour", price: 9.99 },
      { name: "Papa a la Huancaina", price: 8.99 },
      { name: "Arroz con Mariscos", price: 22.99 },
      { name: "Picarones", price: 7.99 },
    ],
    hours: {
      monday: "12:00-22:00",
      tuesday: "12:00-22:00",
      wednesday: "12:00-22:00",
      thursday: "12:00-22:00",
      friday: "12:00-23:00",
      saturday: "12:00-23:00",
      sunday: "12:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 21,
    name: "Russian Table",
    cuisine: "Russian",
    location: "Moscow, Russia",
    rating: 4.5,
    menu: [
      { name: "Beef Stroganoff", price: 23.99 },
      { name: "Borscht", price: 12.99 },
      { name: "Chicken Kiev", price: 19.99 },
      { name: "Pelmeni", price: 16.99 },
      { name: "Beef Golubtsy", price: 18.99 },
      { name: "Olivier Salad", price: 11.99 },
      { name: "Caviar Blini", price: 24.99 },
      { name: "Shashlik", price: 21.99 },
      { name: "Syrniki", price: 8.99 },
      { name: "Russian Tea", price: 4.99 },
    ],
    hours: {
      monday: "11:00-23:00",
      tuesday: "11:00-23:00",
      wednesday: "11:00-23:00",
      thursday: "11:00-23:00",
      friday: "11:00-00:00",
      saturday: "11:00-00:00",
      sunday: "11:00-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 22,
    name: "Caribbean Paradise",
    cuisine: "Caribbean",
    location: "Kingston, Jamaica",
    rating: 4.6,
    menu: [
      { name: "Jerk Chicken", price: 18.99 },
      { name: "Curry Goat", price: 21.99 },
      { name: "Oxtail Stew", price: 23.99 },
      { name: "Ackee and Saltfish", price: 16.99 },
      { name: "Rice and Peas", price: 6.99 },
      { name: "Plantains", price: 5.99 },
      { name: "Callaloo", price: 8.99 },
      { name: "Rum Punch", price: 7.99 },
      { name: "Coconut Shrimp", price: 15.99 },
      { name: "Sweet Potato Pudding", price: 6.99 },
    ],
    hours: {
      monday: "11:00-22:00",
      tuesday: "11:00-22:00",
      wednesday: "11:00-22:00",
      thursday: "11:00-22:00",
      friday: "11:00-23:00",
      saturday: "11:00-23:00",
      sunday: "11:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 23,
    name: "Lebanese Garden",
    cuisine: "Lebanese",
    location: "Beirut, Lebanon",
    rating: 4.7,
    menu: [
      { name: "Mixed Grill", price: 26.99 },
      { name: "Hummus", price: 7.99 },
      { name: "Tabbouleh", price: 8.99 },
      { name: "Shawarma Plate", price: 16.99 },
      { name: "Kibbeh", price: 12.99 },
      { name: "Fattoush", price: 9.99 },
      { name: "Manakish", price: 8.99 },
      { name: "Lebanese Coffee", price: 4.99 },
      { name: "Kunafa", price: 7.99 },
      { name: "Moutabal", price: 8.99 },
    ],
    hours: {
      monday: "11:00-22:30",
      tuesday: "11:00-22:30",
      wednesday: "11:00-22:30",
      thursday: "11:00-22:30",
      friday: "11:00-23:30",
      saturday: "11:00-23:30",
      sunday: "11:00-22:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: true,
  },
  {
    id: 24,
    name: "Ethiopian Experience",
    cuisine: "Ethiopian",
    location: "Addis Ababa, Ethiopia",
    rating: 4.5,
    menu: [
      { name: "Mixed Tibs", price: 18.99 },
      { name: "Doro Wat", price: 16.99 },
      { name: "Injera Platter", price: 22.99 },
      { name: "Shiro", price: 14.99 },
      { name: "Kitfo", price: 19.99 },
      { name: "Misir Wat", price: 13.99 },
      { name: "Ethiopian Coffee", price: 4.99 },
      { name: "Sambusa", price: 6.99 },
      { name: "Kategna", price: 7.99 },
      { name: "Fitfit", price: 12.99 },
    ],
    hours: {
      monday: "11:30-22:00",
      tuesday: "11:30-22:00",
      wednesday: "11:30-22:00",
      thursday: "11:30-22:00",
      friday: "11:30-23:00",
      saturday: "11:30-23:00",
      sunday: "11:30-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 25,
    name: "Malaysian Street Food",
    cuisine: "Malaysian",
    location: "Kuala Lumpur, Malaysia",
    rating: 1.0,
    menu: [
      { name: "Nasi Lemak", price: 11.99 },
      { name: "Char Kway Teow", price: 12.99 },
      { name: "Laksa", price: 13.99 },
      { name: "Satay Set", price: 15.99 },
      { name: "Roti Canai", price: 5.99 },
      { name: "Rendang", price: 16.99 },
      { name: "Teh Tarik", price: 3.99 },
      { name: "Curry Puff", price: 4.99 },
      { name: "Cendol", price: 5.99 },
      { name: "Mee Goreng", price: 11.99 },
    ],
    hours: {
      monday: "10:00-22:00",
      tuesday: "10:00-22:00",
      wednesday: "10:00-22:00",
      thursday: "10:00-22:00",
      friday: "10:00-23:00",
      saturday: "10:00-23:00",
      sunday: "10:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
  {
    id: 26,
    name: "Polish Hearth",
    cuisine: "Polish",
    location: "Warsaw, Poland",
    rating: 4.5,
    menu: [
      { name: "Pierogi Assortment", price: 16.99 },
      { name: "Bigos", price: 14.99 },
      { name: "Żurek Soup", price: 8.99 },
      { name: "Kotlet Schabowy", price: 18.99 },
      { name: "Golonka", price: 21.99 },
      { name: "Kopytka", price: 12.99 },
      { name: "Polish Beer", price: 6.99 },
      { name: "Placki Ziemniaczane", price: 11.99 },
      { name: "Pączki", price: 4.99 },
      { name: "Kompot", price: 3.99 },
    ],
    hours: {
      monday: "12:00-22:00",
      tuesday: "12:00-22:00",
      wednesday: "12:00-22:00",
      thursday: "12:00-22:00",
      friday: "12:00-23:00",
      saturday: "12:00-23:00",
      sunday: "12:00-21:00",
    },
    delivery: [15, 25, 30, 40, 55],
    specialOffer: false,
  },
];

export default restaurants;
