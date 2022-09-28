import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import HeaderMiddleSection from "./HeaderMiddleSection/HeaderMiddleSection";
import "./Layout.css";
function Layout({ children }) {
  return (
    <div>
      <div className="headerWrapper">
        <Header />
        <HeaderMiddleSection />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
