import React from "react";
import "./NavbarStyle.css";

function Navbar() {
  let data = [
    {
        id: 1,
        name: "Fashion",
        subcategories: [
          { id: 201, name: "Men", categories: ["Kurta", "Shirts", "Jeans"] },
          { id: 202, name: "Women", categories: ["Dresses", "Tops", "Skirts"] },
        ],
      },
      {
        id: 2,
        name: "Electronics",
        subcategories: [
          { id: 301, name: "Smartphones", categories: ["iPhone", "Samsung", "Google Pixel"] },
          { id: 302, name: "Laptops", categories: ["MacBook", "Dell", "HP"] },
        ],
      },
      {
        id: 3,
        name: "Home Decor",
        subcategories: [
          { id: 401, name: "Living Room", categories: ["Sofas", "Coffee Tables", "Rugs"] },
          { id: 402, name: "Bedroom", categories: ["Bedding", "Lamps", "Dressers"] },
        ],
      },
      {
        id: 4,
        name: "Sports and Outdoors",
        subcategories: [
          { id: 501, name: "Outdoor", categories: ["Camping Gear", "Hiking Equipment", "Bikes"] },
          { id: 502, name: "Fitness", categories: ["Yoga Mats", "Weights", "Treadmills"] },
        ],
      },
      {
        id: 5,
        name: "Books and Stationery",
        subcategories: [
          { id: 601, name: "Fiction", categories: ["Mystery", "Romance", "Science Fiction"] },
          { id: 602, name: "Office", categories: ["Notebooks", "Pens", "Desk Organizers"] },
        ],
      }
  ];


  return (
    <>
      <div className="menu_bar">
        {data.map(a => (
            <ul>
                <li>
                    <a href="#">{a.name}</a>
                    <div className="dropdown_menu">
                        {a.subcategories.map(b => (
                            <ul>
                                <li>
                                    <a href="#">{b.name}</a>
                                    <div className="dropdown_menu-1">
                                        {b.categories.map(c => (
                                            <ul>
                                                <li><a href="#">{c}</a></li>
                                            </ul>
                                        ))}
                                    </div> 
                                </li>
                            </ul>
                        ))}
                    </div>
                </li>
            </ul>
        ))}

      </div>
    </>
  );
}

export default Navbar;
