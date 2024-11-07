import { menu_list } from '../../assets/assets';
import './Adminres.css';
import React, { useState } from "react";

const RestaurantManager = () => {
  const [menuList, setMenuList] = useState(menu_list);
  const [newMenuName, setNewMenuName] = useState("");
  const [newRestaurantName, setNewRestaurantName] = useState("");
  const [newRestaurantAddress, setNewRestaurantAddress] = useState("");
  const [newRestaurantRating, setNewRestaurantRating] = useState("5.0");

  const addRestaurant = (menuIndex) => {
    if (!newRestaurantName || !newRestaurantAddress) return;

    const updatedMenuList = [...menuList];
    updatedMenuList[menuIndex].restaurants.push({
      name: newRestaurantName,
      image: "https://via.placeholder.com/150",
      address: newRestaurantAddress,
      Rating: newRestaurantRating,
      Timing: "30-40 mins",
      Address: newRestaurantAddress
    });
    setMenuList(updatedMenuList);
    setNewRestaurantName("");
    setNewRestaurantAddress("");
  };

  const deleteRestaurant = (menuIndex, restaurantIndex) => {
    const updatedMenuList = [...menuList];
    updatedMenuList[menuIndex].restaurants.splice(restaurantIndex, 1);
    setMenuList(updatedMenuList);
  };

  const addMenu = () => {
    if (!newMenuName) return;

    setMenuList([
      ...menuList,
      {
        menu_name: newMenuName,
        menu_image: "https://via.placeholder.com/150",
        restaurants: []
      }
    ]);
    setNewMenuName("");
  };

  return (
    <div className="restaurant-manager">
      <h1>Restaurant Management</h1>

      <div className="add-menu">
        <h2>Add New Menu</h2>
        <input
          type="text"
          placeholder="Menu Name"
          value={newMenuName}
          onChange={(e) => setNewMenuName(e.target.value)}
        />
        <button onClick={addMenu} disabled={!newMenuName}>Add Menu</button>
      </div>

      {menuList.map((menu, menuIndex) => (
        <div key={menuIndex} className="menu-section">
          <h2>{menu.menu_name}</h2>
         

          <div className="restaurant-list">
            <h3>Restaurants</h3>
            {menu.restaurants.map((restaurant, restaurantIndex) => (
              <div key={restaurantIndex} className="restaurant-item">
                <p>{restaurant.name}</p>
                <img style={{width: '150px',  
  height: '150px' ,
  objectfit: 'cover' ,
  borderradius: '8px',
  display: 'block'}} src={restaurant.image} alt={restaurant.name} />
                <p>{restaurant.address}</p>
                <p>Rating: {restaurant.Rating}</p>
                <button onClick={() => deleteRestaurant(menuIndex, restaurantIndex)}>Delete Restaurant</button>
              </div>
            ))}
          </div>

          <div className="add-restaurant">
            <h3>Add New Restaurant to {menu.menu_name}</h3>
            <input
              type="text"
              placeholder="Restaurant Name"
              value={newRestaurantName}
              onChange={(e) => setNewRestaurantName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Restaurant Address"
              value={newRestaurantAddress}
              onChange={(e) => setNewRestaurantAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Restaurant Rating"
              value={newRestaurantRating}
              onChange={(e) => setNewRestaurantRating(e.target.value)}
            />
            <button onClick={() => addRestaurant(menuIndex)} disabled={!newRestaurantName || !newRestaurantAddress}>Add Restaurant</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantManager;
