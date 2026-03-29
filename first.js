
const images=["First","Second","third","fourth","fifth","sixth","seventh","eight","ninth","tenth"];

const restaurants_name = [
  "Domino's Pizza",
  "McDonald's",
  "KFC",
  "Burger King",
  "Subway",
  "Pizza Hut",
  "Starbucks",
  "Barbeque Nation",
  "Haldiram's",
  "Biryani By Kilo"
];

const foodTypes = [
  "Italian",
  "Chinese",
  "Indian",
  "Mexican",
  "Thai",
  "Japanese",
  "Mediterranean",
  "French",
  "American",
  "Korean"
];
const localRestaurantLocations = [
  "City Centre, Durgapur",
  "Bidhannagar, Durgapur",
  "Benachity, Durgapur",
  "Muchipara, Durgapur",
  "A-Zone, Durgapur",
  "B-Zone, Durgapur",
  "C-Zone, Durgapur",
  "Durgapur Station Area",
  "Sagarbhanga, Durgapur",
  "Fuljhore, Durgapur"
];

for(let i=0; i<100; i++){

    const obj={};
    obj["image"]=images[Math.floor(Math.random()*10)];

    obj["name"]=restaurants_name[Math.floor(Math.random()*10)];
    obj['rating']=Math.floor(Math.random()*5+1);
    obj['food_type']=foodTypes[Math.floor(Math.random()*10)];
    obj["Price_for_two"]=Math.floor(Math.random()*2401+100);
    obj["location"]=localRestaurantLocations[Math.floor(Math.random()*10)];
    obj["Distance_from_customer_house"]=`${(Math.random()*10+1).toFixed(1)}KM`;
    obj["offers"]=Math.floor(Math.random()*30);
    obj["alcohol"]=Math.random()>0.7;
    obj["Resturant_open_time"]=Math.floor(Math.random()*24);
    obj["Resturant_close_time"]=(obj["Resturant_open_time"]+12)%24;
 
    restaurants.push(obj);
}

// console.log(restaurants);


// // Step 1: Convert to JSON string
// const jsonData = JSON.stringify(restaurants, null, 2);

// // Step 2: Create a Blob (file-like object)
// const blob = new Blob([jsonData], {
//   type: "application/json"
// });

// // Step 3: Create download link
// const link = document.createElement("a");
// link.href = URL.createObjectURL(blob);
// link.download = "locations.json";

// // Step 4: Trigger download
// link.click();

///*For Browser ////

// function downloadJSON() {
//   const jsonData = JSON.stringify(restaurants, null, 2);

//   const blob = new Blob([jsonData], {
//     type: "application/json"
//   });

//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "locations.json";

//   link.click();
// }


/*** for node js */

const fs = require("fs");

const jsonData = JSON.stringify(restaurants, null, 2);

fs.writeFileSync("app_data.json", jsonData);

console.log("File created!");