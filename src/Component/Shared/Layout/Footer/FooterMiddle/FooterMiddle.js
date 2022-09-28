import React from "react";
import FooterMenuList from "../../../FooterMenuList/FooterMenuList";
import "./FooterMiddle.css";
import Text from "../../../Text/Text";
import {AiFillFacebook,AiFillTwitterCircle,AiFillGoogleCircle} from "react-icons/ai"

function FooterMiddle() {
  const menuPrimary = [
    { title: "HOME", url: "/" },
    { title: "ABOUT US", url: "/" },
    { title: "DROPDOWN", url: "/" },
    { title: "COLLECTIONS", url: "/" },
    { title: "CONTACT", url: "/" },
  ];
  const menuSecondary = [
    { title: "extra page", url: "/" },
    { title: "tearms & Conditions", url: "/" },
    { title: "shop single", url: "/" },
    { title: "contact us", url: "/" },
   
  ];
  const menuSocial = [
    { title: "login", url: "/" },
    { title: "register", url: "/" },
    { title: "privacy & policy", url: "/" },
   
  ];
  return (
    <div className="container">
<div className="footerWrapper">
      <div>
      <Text
        test="BAGGAGE ONLINE STORE"
      />
      </div>
      
      <div className="footerList">
        <FooterMenuList   list={menuPrimary} />
        <FooterMenuList  list={menuSecondary} />
        <FooterMenuList   list={menuSocial} />
      </div>
    </div>
    
    </div>
    
    
  );
}

export default FooterMiddle;
