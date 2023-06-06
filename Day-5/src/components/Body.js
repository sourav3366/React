import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

//not using keys(not acceptable) <<< index as a key <<<<<<<<<<<<<<<< unique id as a key
const Body = () => {
//Normal js variable
// let listOfRestaurantsData = [
//     {
//       data: {
//         id: "446303",
//         name: "Third Wave Coffee",
//         cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
//         cuisines: ["Beverages", "Bakery", "Continental"],
//         tags: [],
//         costForTwo: 40000,
//         deliveryTime: 23,
//         avgRating: "3.8",
//       },
//     },
//     {
//       data: {
//         id: "446304",
//         name: "Dominos",
//         cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
//         cuisines: ["Beverages", "Bakery", "Continental"],
//         tags: [],
//         costForTwo: 40000,
//         deliveryTime: 23,
//         avgRating: "4.5",
//       },
//     },
//     {
//         data: {
//           id: "446305",
//           name: "MCD",
//           cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
//           cuisines: ["Beverages", "Bakery", "Continental"],
//           tags: [],
//           costForTwo: 40000,
//           deliveryTime: 23,
//           avgRating: "4.1",
//         },
//       }
//   ];

//Local State variable - super powerful variable
const [listOfRestaurants, setListOfRestaurants] =  useState(resList);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterData = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filterData)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
