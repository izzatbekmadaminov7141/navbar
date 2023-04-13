import React, { useState } from "react";
// nav Link
import { menuItems } from "./NavLInk";
// icons
import { BsSearch } from "react-icons/bs";
// style Navbar
import "./navbar.scss";
function Navbar_01() {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <h1 className="navbar__logo">Holid</h1>
        <ul className="list__group">
          {menuItems.map((item, index) => (
            <li className="list__item" key={index}>
              <a href={item.url} className="item__link">
                {item.title}
              </a>
            </li>
          ))}
          <li className="list__item_search">
            <BsSearch className="search__icon" onClick={() => setShow(!show)} />
            <input
              type="search"
              name="search"
              placeholder="search..."
              className={`search__form_input  ${show ? "input__show" : null}`}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar_01;
