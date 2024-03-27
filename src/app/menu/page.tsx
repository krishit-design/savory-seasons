"use client";
import React from 'react';
import "./menu.css";
import Header from '../components/Header/Header';

const Menu = () => {
  return (
    
    <div className="h-[100vh] w-full bg-black dark:bg-grid-black/[0] bg-grid-white/[0.025]">
      <Header/>
      <div className='pages'>
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
                <h2>Subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna, vitae eleifend velit. Donec dui turpis, viverra vitae lobortis commodo, lobortis et ex.</p>
              </div>
              <div className="menu-content">
                <h1>Khushiyon ka Thali - 300</h1>
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
                {/* <div className="menu-items">
                  <div className="heading-content">
                    <h3>Kababs</h3>
                  </div>
                  <div className="desc-content">
                  </div>
                </div> */}
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
                  <span>This is a quote</span>
                  <span>from someone</span>
                  <span className='name'>Jamie Coulter</span>
                  <span className='auth'>- Jcoulterdesign</span>
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
                <h1>Dil Se Daawat</h1>
                <p>Item</p>
                <p>Item</p>
                <p>Item</p>
                <p>Item</p>
                <p>Item</p>
                <p>Item</p>

              </div>
              <div className='content_center'>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
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
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
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
              <h1 className="content-head">Shandaar Swad Sargam</h1>
              <div className='content_section'>
                <h2>Super</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna, vitae eleifend velit.</p>
              </div>
              <div className='content_section'>
                <h2>Awesome</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna, vitae eleifend velit.</p>
              </div>
              <div className='content_section'>
                <h2>Great</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum sapien posuere ut. Nunc eget ullamcorper turpis. Sed in vehicula magna.</p>
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
