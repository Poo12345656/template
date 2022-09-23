import React from "react";

function Menu() {
  const menuList = [
    { title: "HOME", url: "/" },
    { title: "ABOUT US", url: "/" },
    { title: "DROPDOWN", url: "/" },
    { title: "COLLECTIONS", url: "/" },
    { title: "CONTACT", url: "/" },
  
  ];
  return (
    <div>
      <ul>
        {menuList.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Menu;
