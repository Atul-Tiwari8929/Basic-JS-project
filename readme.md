<!--Restaurant Info>
1.Img 
2.Name
3.Rating
4.food type
5.price_for_two
6.location
7.distance
8.offers
9.Alcohol
10.Restaurant_opening_time
11.closing time


const obj{
  
  img:"link",
  Name:"Sohan";
  food_type:"Veg";
}

const resturants=[100objects];

<!-- 100 Dummy data create karo -->


  
//   // 1. Uncheck all radio buttons
//   const radios = document.querySelectorAll('input[name="filterOption"]');
//   radios.forEach(radio => radio.checked = false);

//   // 2. Show all restaurants again
//   getrestaurants(restaurants);

//   // 3. Close popup
//   document.getElementById("filterPopup").classList.add("hidden");
//document.querySelector('form')?.reset();  if inputs are inside a form // alternative approach


better approach

<!-- 

document.getElementById("clearfilter").addEventListener("click", () => {

  document.querySelectorAll('input[name="filterOption"]')
    .forEach(radio => radio.checked = false);

  document.getElementById("filterPopup").classList.add("hidden");

  getrestaurants(restaurants);
}); -->