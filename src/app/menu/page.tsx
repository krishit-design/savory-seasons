"use client"
import React, { useState } from 'react';
import "./menu.css";
import Header from '../components/Header/Header';
import Carousel from '../components/ui/testimonial-slider'; // Assuming this is correct (replace if needed)
import MenuSlider from '../components/ui/menu-slider'; // Assuming this is correct (replace if needed)

interface MenuItem {
  name: string;
  price: number;
  quantity: number;
}

const Menu = () => {

  return (

    <div className="h-[100vh] w-full bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025]">
      <Header />

      {/* {isCartOpen && (
        <div className="cart-popup">
          <h2>My Cart:</h2>
          <div>
            {cart.map((item, index) => (
              <h4 key={index}>{item.name} - ₹{item.price}</h4>
            ))}
          </div>
          <h3>Total: ₹{calculateTotal()}</h3>
        </div>
      )} */}
      <div className='pages menu-pages'>
        <input id='one' name='trigger' type='radio' />
        <input id='two' name='trigger' type='radio' />
        <input id='three' name='trigger' type='radio' />
        <input id='four' name='trigger' type='radio' />
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logoMenu'><img src="assets/images/logo-ss.svg" width="250px" alt="" /></div>
            <div className='pagenumber'>1 2</div>
            <div className='content'>
              <div className='content_center'>
                <h4>MENU</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='content'>
              <div className='content_center right'>
                <h4>MENU</h4>
              </div>
            </div>
            <div className='control next'>
              <label htmlFor='two'></label>
            </div>
          </div>
        </div>
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logoMenu'><img src="assets/images/logo-ss.svg" width="250px" alt="" /></div>
            <div className='pagenumber'>2 3</div>
            <div className='control'>
              <label htmlFor='one'></label>
            </div>
            <div className='content'>
              <div className='content_picture'>
                <img src='assets/images/menu-img/dish2.svg' />
              </div>
              <div className='content_offset'>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Sweets and Deserts</h3>
                  </div>
                  <div className="desc-content">
                    <p>Gulab Jamun</p>
                    <p>Icecream</p>
                  </div>
                </div>
              </div>
              <div className="menu-content">
                <div className="heading-add">
                  <h1>Taste Trio - 300</h1>
                  {/* <button onClick={() => addToCart("Taste Trio", 300)}>Add to cart</button> */}
                </div>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Starters</h3>
                  </div>
                  <div className="desc-content">
                    <p>Tomato</p>
                    <p>Hot n Sour</p>
                    <p> Hara Bhara Kabab</p>
                  </div>
                </div>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Main Menu</h3>
                  </div>
                  <div className="desc-content">
                    <p>Paneer</p>
                    <p>Mix  Vegetable</p>
                    <p>Dal</p>
                    <p>Rice</p>
                    <p>3 Butter Roti</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='hamburger'>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
            </div>
            <div className='control next'>
              <label htmlFor='three'></label>
            </div>
            <div className='bg'></div>
            <div className='footer'>
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
            <div className='content'>
              <div className='content_quote'>
                <h5>
                  <span className='quo'>
                    <i>"</i>
                  </span>
                  <span>Great taste at an </span>
                  <span>affordable price</span>
                  <span className='name'>Amita Sharma</span>
                  <span className='auth'>- NGO Coordinator</span>
                  <span className='quo'>"</span>
                </h5>
              </div>
              <div className='content_picture'>
                <img src='assets/images/menu-img/dish2.svg' />
              </div>
              <h1>
                Lorem ipsum dolor sit.
              </h1>
            </div>
          </div>
        </div>
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logoMenu'><img src="assets/images/logo-ss.svg" width="250px" alt="" /></div>
            <div className='pagenumber'>4 5</div>
            <div className='content'>
              <div className="menu-content">

                <div className="heading-add">
                  <h1>Flavor Fusion - 500</h1>
                  {/* <button onClick={() => addToCart("Flavor Fusion", 500)}>Add to cart</button> */}
                </div>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Main Menu</h3>
                  </div>
                  <div className="desc-content">
                    <p>Mocktails</p>
                    <p>Soups * 4</p>
                    <p>Chaats</p>
                    <p>Manchurian</p>
                    <p>Sabji * 3</p>
                    <p>5 Butter Roti</p>
                  </div>
                </div>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Sweets and Deserts</h3>
                  </div>
                  <div className="desc-content">
                    <p>Aamras / Rabdi - Jalebi</p>
                    <p>Icecream * 2</p>
                  </div>
                </div>
              </div>
              <div className='content_center'>
                <h4>Treat yourself to our top pick among these dishes </h4>
                <h6>Our bestseller</h6>
              </div>
            </div>
            <div className='control'>
              <label htmlFor='two'></label>
            </div>
          </div>
        </div>
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='hamburger'>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
            </div>
            <div className='control next'>
              <label htmlFor='four'></label>
            </div>
            <div className='bg'></div>
            <div className='content_centerimage'>
              <img src='assets/images/menu-img/dish3.svg' />
            </div>
            <div className='content'>
              <div className='content_center right'>
                <h4>Treat yourself to our top pick among these dishes </h4>
                <h6>Our bestseller</h6>
              </div>
            </div>
            <div className='footer'>
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='logoMenu'><img src="assets/images/logo-ss.svg" width="250px" alt="" /></div>
            <div className='pagenumber'>6 7</div>
            <div className='content'>
              <div className="content-head">
                <div className="heading-add">
                  <h1>Feast Medley - 800</h1>
                  {/* <button onClick={() => addToCart("Feast Medley", 800)}>Add to cart</button> */}
                </div>
              </div>
              <div className='content_section'>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Starter</h3>
                  </div>
                  <div className="desc-content">
                    <p>Mocktails * 3</p>
                    <p>Soups * 4</p>
                    <p>Italian mini / Bread pizza</p>
                    <p>Pasta * 2</p>
                    <p>Chilly paneer / spring roll</p>
                  </div>
                </div>
              </div>
              <div className='content_section'>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Main Menu</h3>
                  </div>
                  <div className="desc-content">
                    <p>Sabji * 3</p>
                    <p>Roti/Naan * 4</p>
                    <p>Dosa * 2</p>
                    <p>Rice</p>
                    <p>Dal * 2</p>
                    <p>Pulav * 2</p>
                    <p>Colddrinks * 2</p>
                  </div>
                </div>
              </div>
              <div className='content_section'>
                <div className="menu-items">
                  <div className="heading-content">
                    <h3>Sweets and Deserts</h3>
                  </div>
                  <div className="desc-content">
                    <p>Aamras / Rabdi - Jalebi</p>
                    <p>Icecream / Brownie</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='control'>
              <label htmlFor='three'></label>
            </div>
          </div>
        </div>
        <div className='pages_page'>
          <div className='pages_page__inner'>
            <div className='hamburger'>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
              <div className='hamburger_part'></div>
            </div>
            <div className='bg'></div>
            <div className='content'></div>
            <div className='footer'>
              <i className="fab fa-google-plus-g"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel/> */}
      <MenuSlider />
    </div>
  )
}

export default Menu;

// components/Menu.js
// "use client"
// // components/Menu.js
// import { useState } from 'react';

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState<string[]>([]);
//   const [selectedDish, setSelectedDish] = useState<string>("");
//   const [selectedTopping, setSelectedTopping] = useState<string>("");

//   const dishes: { [key: string]: string[] } = {
//     "Burger": ["Aloo Tiki", "Cheese", "Bacon"],
//     "Pizza": ["Pepperoni", "Mushroom", "Olives"],
//     "Salad": ["Grilled Chicken", "Avocado", "Croutons"],
//     "Pasta": ["Alfredo Sauce", "Pesto", "Meatballs"]
//   };

//   const handleDishChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedDish(e.target.value);
//     setSelectedTopping("");
//   };

//   const handleToppingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedTopping(e.target.value);
//   };

//   const addItem = () => {
//     if (selectedDish !== "" && selectedTopping !== "") {
//       const newItem = `${selectedTopping} ${selectedDish}`;
//       if (!menuItems.includes(newItem)) {
//         setMenuItems([...menuItems, newItem]);
//       }
//       setSelectedTopping("");
//     }
//   };

//   const removeItem = (item: string) => {
//     setMenuItems(menuItems.filter(i => i !== item));
//   };

//   return (
//     <div id="menu">
//       <h2>Menu:</h2>
//       <ul id="menu-items">
//         {menuItems.map((item, index) => (
//           <li key={index}>
//             {item} <button onClick={() => removeItem(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <select value={selectedDish} onChange={handleDishChange}>
//         <option value="">Select Dish</option>
//         {Object.keys(dishes).map((dish, index) => (
//           <option key={index} value={dish}>{dish}</option>
//         ))}
//       </select>
//       {selectedDish !== "" &&
//         <select value={selectedTopping} onChange={handleToppingChange}>
//           <option value="">Select Topping</option>
//           {dishes[selectedDish as keyof typeof dishes].map((topping, index) => (
//             <option key={index} value={topping}>{topping}</option>
//           ))}
//         </select>
//       }
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// };

// export default Menu;
