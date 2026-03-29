// create a card
        // 1.img
        // 2.Card_content
        //    1:card_header (Name and Rating)
       //     2:card_footer(food_type and price)
     //       3.card:location (location and distance);

const restaurants=[
  {
    "image": "Second",
    "name": "Haldiram's",
    "rating": 1,
    "food_type": "French",
    "Price_for_two": 327,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "5.0",
    "offers": 25,
    "alcohol": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "seventh",
    "name": "Starbucks",
    "rating": 2,
    "food_type": "Mexican",
    "Price_for_two": 1125,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "5.3",
    "offers": 13,
    "alcohol": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "sixth",
    "name": "Domino's Pizza",
    "rating": 3,
    "food_type": "American",
    "Price_for_two": 1497,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "3.8",
    "offers": 4,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "Second",
    "name": "Burger King",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 574,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "8.5",
    "offers": 17,
    "alcohol": false,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "third",
    "name": "Barbeque Nation",
    "rating": 2,
    "food_type": "Italian",
    "Price_for_two": 1904,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "5.0",
    "offers": 16,
    "alcohol": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "First",
    "name": "Subway",
    "rating": 2,
    "food_type": "Indian",
    "Price_for_two": 1724,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "2.7",
    "offers": 4,
    "alcohol": false,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "third",
    "name": "Starbucks",
    "rating": 4,
    "food_type": "American",
    "Price_for_two": 2175,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "6.0",
    "offers": 20,
    "alcohol": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "third",
    "name": "Biryani By Kilo",
    "rating": 5,
    "food_type": "Indian",
    "Price_for_two": 1262,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "4.0",
    "offers": 15,
    "alcohol": true,
    "Resturant_open_time": 4,
    "Resturant_close_time": 16
  },
  {
    "image": "tenth",
    "name": "KFC",
    "rating": 5,
    "food_type": "Italian",
    "Price_for_two": 735,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "9.3",
    "offers": 11,
    "alcohol": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "seventh",
    "name": "Domino's Pizza",
    "rating": 2,
    "food_type": "Indian",
    "Price_for_two": 2076,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "7.2",
    "offers": 13,
    "alcohol": false,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "fifth",
    "name": "Subway",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 1946,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "2.3",
    "offers": 24,
    "alcohol": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "third",
    "name": "Subway",
    "rating": 4,
    "food_type": "Italian",
    "Price_for_two": 2001,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "8.1",
    "offers": 2,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "ninth",
    "name": "Haldiram's",
    "rating": 1,
    "food_type": "Indian",
    "Price_for_two": 1306,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "2.7",
    "offers": 18,
    "alcohol": false,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "Second",
    "name": "Domino's Pizza",
    "rating": 1,
    "food_type": "Thai",
    "Price_for_two": 362,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "7.6",
    "offers": 13,
    "alcohol": false,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "First",
    "name": "KFC",
    "rating": 2,
    "food_type": "Mexican",
    "Price_for_two": 906,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "3.0",
    "offers": 14,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "Second",
    "name": "Barbeque Nation",
    "rating": 2,
    "food_type": "Italian",
    "Price_for_two": 2478,
    "location": "Fuljhore, Durgapur",
    "Distance_from_customer_house": "7.7",
    "offers": 7,
    "alcohol": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "third",
    "name": "Pizza Hut",
    "rating": 4,
    "food_type": "Italian",
    "Price_for_two": 374,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "2.2",
    "offers": 25,
    "alcohol": false,
    "Resturant_open_time": 21,
    "Resturant_close_time": 9
  },
  {
    "image": "fifth",
    "name": "KFC",
    "rating": 1,
    "food_type": "Japanese",
    "Price_for_two": 546,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "10.4",
    "offers": 18,
    "alcohol": true,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "seventh",
    "name": "Barbeque Nation",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 2250,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "10.4",
    "offers": 27,
    "alcohol": false,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "Second",
    "name": "Subway",
    "rating": 3,
    "food_type": "Mediterranean",
    "Price_for_two": 1912,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "2.5",
    "offers": 6,
    "alcohol": false,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "seventh",
    "name": "Subway",
    "rating": 4,
    "food_type": "Mexican",
    "Price_for_two": 843,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "5.8",
    "offers": 7,
    "alcohol": false,
    "Resturant_open_time": 6,
    "Resturant_close_time": 18
  },
  {
    "image": "sixth",
    "name": "Subway",
    "rating": 4,
    "food_type": "Chinese",
    "Price_for_two": 965,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "2.9",
    "offers": 0,
    "alcohol": false,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "sixth",
    "name": "Haldiram's",
    "rating": 5,
    "food_type": "Chinese",
    "Price_for_two": 717,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "9.6",
    "offers": 26,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "third",
    "name": "Pizza Hut",
    "rating": 3,
    "food_type": "Indian",
    "Price_for_two": 1121,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "10.9",
    "offers": 5,
    "alcohol": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "Second",
    "name": "Pizza Hut",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 1567,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "6.9",
    "offers": 25,
    "alcohol": false,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "third",
    "name": "McDonald's",
    "rating": 4,
    "food_type": "Thai",
    "Price_for_two": 1589,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "6.1",
    "offers": 15,
    "alcohol": true,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "tenth",
    "name": "Domino's Pizza",
    "rating": 1,
    "food_type": "Korean",
    "Price_for_two": 1416,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "7.4",
    "offers": 19,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "eight",
    "name": "McDonald's",
    "rating": 2,
    "food_type": "Italian",
    "Price_for_two": 894,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "7.9",
    "offers": 7,
    "alcohol": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "third",
    "name": "Haldiram's",
    "rating": 3,
    "food_type": "Indian",
    "Price_for_two": 2043,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "2.0",
    "offers": 1,
    "alcohol": true,
    "Resturant_open_time": 20,
    "Resturant_close_time": 8
  },
  {
    "image": "third",
    "name": "Subway",
    "rating": 3,
    "food_type": "Indian",
    "Price_for_two": 1077,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "5.2",
    "offers": 27,
    "alcohol": false,
    "Resturant_open_time": 6,
    "Resturant_close_time": 18
  },
  {
    "image": "First",
    "name": "McDonald's",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 286,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "7.8",
    "offers": 9,
    "alcohol": false,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "third",
    "name": "Pizza Hut",
    "rating": 3,
    "food_type": "Thai",
    "Price_for_two": 2005,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "8.6",
    "offers": 3,
    "alcohol": false,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "ninth",
    "name": "Domino's Pizza",
    "rating": 2,
    "food_type": "Mexican",
    "Price_for_two": 1626,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "5.9",
    "offers": 14,
    "alcohol": true,
    "Resturant_open_time": 10,
    "Resturant_close_time": 22
  },
  {
    "image": "fourth",
    "name": "Starbucks",
    "rating": 1,
    "food_type": "Mexican",
    "Price_for_two": 1236,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "2.6",
    "offers": 15,
    "alcohol": false,
    "Resturant_open_time": 19,
    "Resturant_close_time": 7
  },
  {
    "image": "sixth",
    "name": "Pizza Hut",
    "rating": 3,
    "food_type": "Indian",
    "Price_for_two": 402,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "6.2",
    "offers": 2,
    "alcohol": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "First",
    "name": "Domino's Pizza",
    "rating": 4,
    "food_type": "Thai",
    "Price_for_two": 1801,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "3.3",
    "offers": 2,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "Second",
    "name": "Starbucks",
    "rating": 2,
    "food_type": "French",
    "Price_for_two": 541,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "7.3",
    "offers": 19,
    "alcohol": true,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "First",
    "name": "Biryani By Kilo",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 166,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "5.0",
    "offers": 4,
    "alcohol": true,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "tenth",
    "name": "Starbucks",
    "rating": 3,
    "food_type": "Mediterranean",
    "Price_for_two": 2304,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "9.1",
    "offers": 2,
    "alcohol": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "eight",
    "name": "KFC",
    "rating": 3,
    "food_type": "Chinese",
    "Price_for_two": 1141,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "4.6",
    "offers": 8,
    "alcohol": false,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "third",
    "name": "Biryani By Kilo",
    "rating": 2,
    "food_type": "French",
    "Price_for_two": 1020,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "7.0",
    "offers": 4,
    "alcohol": true,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "tenth",
    "name": "Burger King",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 554,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "8.5",
    "offers": 3,
    "alcohol": false,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "fourth",
    "name": "KFC",
    "rating": 2,
    "food_type": "Japanese",
    "Price_for_two": 320,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "8.5",
    "offers": 23,
    "alcohol": true,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "sixth",
    "name": "Starbucks",
    "rating": 1,
    "food_type": "Japanese",
    "Price_for_two": 784,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "10.6",
    "offers": 18,
    "alcohol": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "fifth",
    "name": "McDonald's",
    "rating": 5,
    "food_type": "Thai",
    "Price_for_two": 2057,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "10.2",
    "offers": 20,
    "alcohol": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "fourth",
    "name": "KFC",
    "rating": 1,
    "food_type": "Mediterranean",
    "Price_for_two": 347,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "8.8",
    "offers": 29,
    "alcohol": false,
    "Resturant_open_time": 19,
    "Resturant_close_time": 7
  },
  {
    "image": "sixth",
    "name": "McDonald's",
    "rating": 4,
    "food_type": "Indian",
    "Price_for_two": 1377,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "4.9",
    "offers": 23,
    "alcohol": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "ninth",
    "name": "Starbucks",
    "rating": 2,
    "food_type": "Mediterranean",
    "Price_for_two": 499,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "4.4",
    "offers": 7,
    "alcohol": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "fourth",
    "name": "Pizza Hut",
    "rating": 3,
    "food_type": "Thai",
    "Price_for_two": 232,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "5.7",
    "offers": 7,
    "alcohol": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "First",
    "name": "Starbucks",
    "rating": 3,
    "food_type": "Mexican",
    "Price_for_two": 1226,
    "location": "Fuljhore, Durgapur",
    "Distance_from_customer_house": "10.4",
    "offers": 27,
    "alcohol": true,
    "Resturant_open_time": 10,
    "Resturant_close_time": 22
  },
  {
    "image": "Second",
    "name": "Barbeque Nation",
    "rating": 4,
    "food_type": "Thai",
    "Price_for_two": 733,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "8.8",
    "offers": 25,
    "alcohol": false,
    "Resturant_open_time": 19,
    "Resturant_close_time": 7
  },
  {
    "image": "ninth",
    "name": "McDonald's",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 1485,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "8.7",
    "offers": 6,
    "alcohol": false,
    "Resturant_open_time": 14,
    "Resturant_close_time": 2
  },
  {
    "image": "seventh",
    "name": "Barbeque Nation",
    "rating": 1,
    "food_type": "French",
    "Price_for_two": 896,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "3.4",
    "offers": 19,
    "alcohol": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "Second",
    "name": "Pizza Hut",
    "rating": 2,
    "food_type": "Mediterranean",
    "Price_for_two": 154,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "7.7",
    "offers": 24,
    "alcohol": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "ninth",
    "name": "Subway",
    "rating": 5,
    "food_type": "Korean",
    "Price_for_two": 2260,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "5.8",
    "offers": 15,
    "alcohol": false,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "Second",
    "name": "Barbeque Nation",
    "rating": 1,
    "food_type": "Mediterranean",
    "Price_for_two": 1602,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "8.1",
    "offers": 8,
    "alcohol": true,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "eight",
    "name": "Pizza Hut",
    "rating": 4,
    "food_type": "French",
    "Price_for_two": 786,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "10.7",
    "offers": 6,
    "alcohol": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "tenth",
    "name": "Burger King",
    "rating": 2,
    "food_type": "French",
    "Price_for_two": 1887,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "2.3",
    "offers": 4,
    "alcohol": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "tenth",
    "name": "Biryani By Kilo",
    "rating": 3,
    "food_type": "Indian",
    "Price_for_two": 877,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "2.7",
    "offers": 10,
    "alcohol": true,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "tenth",
    "name": "Subway",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 1044,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "7.8",
    "offers": 17,
    "alcohol": true,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "ninth",
    "name": "Domino's Pizza",
    "rating": 5,
    "food_type": "Chinese",
    "Price_for_two": 328,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "3.2",
    "offers": 1,
    "alcohol": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "Second",
    "name": "Subway",
    "rating": 5,
    "food_type": "Chinese",
    "Price_for_two": 540,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "2.5",
    "offers": 28,
    "alcohol": true,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "First",
    "name": "Domino's Pizza",
    "rating": 2,
    "food_type": "Korean",
    "Price_for_two": 627,
    "location": "Fuljhore, Durgapur",
    "Distance_from_customer_house": "4.1",
    "offers": 4,
    "alcohol": true,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "Second",
    "name": "KFC",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 594,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "10.6",
    "offers": 3,
    "alcohol": false,
    "Resturant_open_time": 14,
    "Resturant_close_time": 2
  },
  {
    "image": "Second",
    "name": "Starbucks",
    "rating": 4,
    "food_type": "Italian",
    "Price_for_two": 1447,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "6.0",
    "offers": 22,
    "alcohol": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "sixth",
    "name": "Haldiram's",
    "rating": 1,
    "food_type": "Mediterranean",
    "Price_for_two": 837,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "9.8",
    "offers": 4,
    "alcohol": false,
    "Resturant_open_time": 20,
    "Resturant_close_time": 8
  },
  {
    "image": "fourth",
    "name": "Domino's Pizza",
    "rating": 5,
    "food_type": "Italian",
    "Price_for_two": 2478,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "3.7",
    "offers": 24,
    "alcohol": true,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "sixth",
    "name": "KFC",
    "rating": 3,
    "food_type": "Mediterranean",
    "Price_for_two": 229,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "3.5",
    "offers": 22,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "seventh",
    "name": "Starbucks",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 674,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "5.1",
    "offers": 27,
    "alcohol": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "ninth",
    "name": "Starbucks",
    "rating": 5,
    "food_type": "American",
    "Price_for_two": 2415,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "7.8",
    "offers": 27,
    "alcohol": true,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "third",
    "name": "Barbeque Nation",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 1454,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "5.3",
    "offers": 13,
    "alcohol": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "sixth",
    "name": "KFC",
    "rating": 2,
    "food_type": "French",
    "Price_for_two": 1591,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "2.2",
    "offers": 2,
    "alcohol": false,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "fifth",
    "name": "Barbeque Nation",
    "rating": 1,
    "food_type": "American",
    "Price_for_two": 1430,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "8.9",
    "offers": 14,
    "alcohol": false,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "sixth",
    "name": "Domino's Pizza",
    "rating": 2,
    "food_type": "Chinese",
    "Price_for_two": 1425,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "6.6",
    "offers": 1,
    "alcohol": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "ninth",
    "name": "Domino's Pizza",
    "rating": 5,
    "food_type": "French",
    "Price_for_two": 1115,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "7.1",
    "offers": 15,
    "alcohol": false,
    "Resturant_open_time": 10,
    "Resturant_close_time": 22
  },
  {
    "image": "sixth",
    "name": "Subway",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 875,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "1.7",
    "offers": 20,
    "alcohol": false,
    "Resturant_open_time": 14,
    "Resturant_close_time": 2
  },
  {
    "image": "third",
    "name": "Barbeque Nation",
    "rating": 4,
    "food_type": "Thai",
    "Price_for_two": 631,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "3.5",
    "offers": 27,
    "alcohol": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "fifth",
    "name": "Barbeque Nation",
    "rating": 2,
    "food_type": "Thai",
    "Price_for_two": 458,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "6.2",
    "offers": 11,
    "alcohol": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "First",
    "name": "Subway",
    "rating": 1,
    "food_type": "Mexican",
    "Price_for_two": 658,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "3.8",
    "offers": 4,
    "alcohol": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "eight",
    "name": "Burger King",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 441,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "2.3",
    "offers": 2,
    "alcohol": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "fifth",
    "name": "Barbeque Nation",
    "rating": 2,
    "food_type": "Chinese",
    "Price_for_two": 1160,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "6.3",
    "offers": 1,
    "alcohol": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "eight",
    "name": "Burger King",
    "rating": 5,
    "food_type": "Japanese",
    "Price_for_two": 755,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "4.3",
    "offers": 21,
    "alcohol": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "third",
    "name": "KFC",
    "rating": 3,
    "food_type": "Chinese",
    "Price_for_two": 248,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "4.1",
    "offers": 5,
    "alcohol": false,
    "Resturant_open_time": 19,
    "Resturant_close_time": 7
  },
  {
    "image": "ninth",
    "name": "Pizza Hut",
    "rating": 4,
    "food_type": "Indian",
    "Price_for_two": 289,
    "location": "Durgapur Station Area",
    "Distance_from_customer_house": "3.2",
    "offers": 21,
    "alcohol": false,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "third",
    "name": "Biryani By Kilo",
    "rating": 3,
    "food_type": "Mexican",
    "Price_for_two": 1386,
    "location": "Benachity, Durgapur",
    "Distance_from_customer_house": "2.4",
    "offers": 7,
    "alcohol": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "fourth",
    "name": "Domino's Pizza",
    "rating": 1,
    "food_type": "Japanese",
    "Price_for_two": 1370,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "8.5",
    "offers": 20,
    "alcohol": true,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "fourth",
    "name": "Pizza Hut",
    "rating": 4,
    "food_type": "Indian",
    "Price_for_two": 1463,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "5.3",
    "offers": 22,
    "alcohol": true,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "seventh",
    "name": "Barbeque Nation",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 1517,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "2.1",
    "offers": 9,
    "alcohol": true,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "seventh",
    "name": "Barbeque Nation",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 1203,
    "location": "City Centre, Durgapur",
    "Distance_from_customer_house": "4.1",
    "offers": 22,
    "alcohol": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "third",
    "name": "Haldiram's",
    "rating": 5,
    "food_type": "French",
    "Price_for_two": 634,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "3.7",
    "offers": 3,
    "alcohol": true,
    "Resturant_open_time": 6,
    "Resturant_close_time": 18
  },
  {
    "image": "eight",
    "name": "Pizza Hut",
    "rating": 4,
    "food_type": "Chinese",
    "Price_for_two": 149,
    "location": "Sagarbhanga, Durgapur",
    "Distance_from_customer_house": "2.6",
    "offers": 11,
    "alcohol": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "First",
    "name": "KFC",
    "rating": 1,
    "food_type": "Indian",
    "Price_for_two": 988,
    "location": "Bidhannagar, Durgapur",
    "Distance_from_customer_house": "2.9",
    "offers": 1,
    "alcohol": false,
    "Resturant_open_time": 20,
    "Resturant_close_time": 8
  },
  {
    "image": "tenth",
    "name": "Burger King",
    "rating": 3,
    "food_type": "Mexican",
    "Price_for_two": 1989,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "8.0",
    "offers": 3,
    "alcohol": false,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "First",
    "name": "Domino's Pizza",
    "rating": 2,
    "food_type": "Indian",
    "Price_for_two": 644,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "1.9",
    "offers": 1,
    "alcohol": true,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "fourth",
    "name": "Haldiram's",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 1461,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "8.9",
    "offers": 11,
    "alcohol": true,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "sixth",
    "name": "McDonald's",
    "rating": 2,
    "food_type": "American",
    "Price_for_two": 324,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "4.4",
    "offers": 5,
    "alcohol": true,
    "Resturant_open_time": 19,
    "Resturant_close_time": 7
  },
  {
    "image": "fifth",
    "name": "Burger King",
    "rating": 4,
    "food_type": "Thai",
    "Price_for_two": 2235,
    "location": "C-Zone, Durgapur",
    "Distance_from_customer_house": "1.8",
    "offers": 10,
    "alcohol": true,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "tenth",
    "name": "Burger King",
    "rating": 3,
    "food_type": "Japanese",
    "Price_for_two": 2292,
    "location": "B-Zone, Durgapur",
    "Distance_from_customer_house": "10.3",
    "offers": 18,
    "alcohol": false,
    "Resturant_open_time": 21,
    "Resturant_close_time": 9
  },
  {
    "image": "ninth",
    "name": "Barbeque Nation",
    "rating": 3,
    "food_type": "Japanese",
    "Price_for_two": 606,
    "location": "A-Zone, Durgapur",
    "Distance_from_customer_house": "1.5",
    "offers": 3,
    "alcohol": false,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "fourth",
    "name": "Barbeque Nation",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 2256,
    "location": "Muchipara, Durgapur",
    "Distance_from_customer_house": "4.5",
    "offers": 23,
    "alcohol": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  }
]


function getrestaurants(restaurants){

    const root= document.getElementById('root');

    restaurants.forEach(restaurant=>{

        // create a card
        // 1.img
        // 2.Card_content
        //    1:card_header (Name and Rating)
       //     2:card_footer(food_type and price)
     //       3.card:location (location and distance);


     const card =document.createElement('div');
     card.classList.add('card');

     // create img

     const image =document.createElement("img");
     image.src=`images/${restaurant.image}.jpg`;

     // card content

     const card_content= document.createElement('div');
     card_content.classList.add('card-content');

     // card header

     const card_header=document.createElement('div');

       card_header.classList.add('card-header');

         const h3=document.createElement('h3');

         h3.textContent=restaurant.name;

         const rating= document.createElement('span');

          rating.textContent=restaurant.rating;
     
          rating.classList.add("rating")
          

          card_header.append(h3);
          card_header.append(rating);


     // card footer

 
     const card_footer=document.createElement('div');

       card_footer.classList.add('card-footer');
       

     const food=document.createElement('span');
     food.classList.add('food');
     food.textContent=restaurant.food_type;
  

     const price=document.createElement('span');

     price.classList.add('price');

     price.textContent=`${restaurant.Price_for_two} Rs`;

     card_footer.append(food);
     card_footer.append(price);




     // card location
   const card_location=document.createElement('div');

       card_location.classList.add('card-location');
       

       
     const location=document.createElement('span');
     location.classList.add('location');
     location.textContent=restaurant.location;
  

     const distance=document.createElement('span');

     distance.classList.add('distance');

     distance.textContent=`${restaurant.Distance_from_customer_house}KM`;

     card_location.append(location);
     card_location.append(distance);

     

     card_content.append(card_header);
     card_content.append(card_footer);
     card_content.append(card_location);

       
     card.append(image);
     card.append(card_content);

     root.append(card);





    });
}

getrestaurants(restaurants);

document.getElementById("Alcohol").addEventListener('click',()=>{


    const result= restaurants.filter((obj)=>obj.alcohol);
  
    // document.getElementById('root').innerHTML="";

   document.getElementById('root').replaceChildren();
    getrestaurants(result);



})

document.getElementById('Rating').addEventListener('click',()=>{

      const result=restaurants.filter((obj)=>obj.rating>4.5);

       document.getElementById('root').replaceChildren();
       getrestaurants(result);

})

document.getElementById('filters').addEventListener('click',()=>{

//  document.getElementById('filterPopup').style.display='block';

document.getElementById("filterPopup").classList.remove("hidden");
})

document.getElementById('applyFilter').addEventListener('click',()=>{

    const element=document.querySelector('input[name="filterOption"]:checked');
      const answer=element.value;

      if(answer==="rating"){

        restaurants.sort((a,b)=>b.rating-a.rating); 


      }

      else if (answer==="costLowHigh"){
        restaurants.sort((a,b)=>a.Price_for_two-b.Price_for_two);
      }

      else if (answer==="highLow"){
        restaurants.sort((a,b)=>b.Price_for_two-a.Price_for_two);
      }

      else if(answer==="distance"){
        restaurants.sort((a,b)=>a.Distance_from_customer_house-b.Distance_from_customer_house);
      }

      document.getElementById('root').replaceChildren();
      document.getElementById("filterPopup").classList.add("hidden");
      getrestaurants(restaurants);
})

document.getElementById("clearfilter").addEventListener("click", () => {

  const element = document.querySelector('input[name="filterOption"]:checked');

  if (element) {
    element.checked = false;
  }

  document.getElementById("filterPopup").classList.add("hidden");

  getrestaurants(restaurants);
});