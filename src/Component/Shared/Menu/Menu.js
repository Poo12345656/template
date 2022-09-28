import React from "react";
import "./Menu.css"

function Menu() {
  const menuHeaderList = [
    { title: "HOME", url: "/" },
    { title: "ABOUT US", url: "/" },
    { title: "DROPDOWN", url: "/" },
    { title: "COLLECTIONS", url: "/" },
    { title: "CONTACT", url: "/" },
  
  ];
  return (
    <div >
      <ul className="menuWrapper">
        {menuHeaderList.map((item, index) => {
          return <li className="menuList" key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Menu;
