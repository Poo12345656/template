import React from "react";
import { BsSearch } from "react-icons/bs";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Search.css";


function Search() {
  return (
    <div className="searchWrapper">
      <Input placeholder="Search Here..." />
    
      <BsSearch className="searchBtn" />
      
    </div>
  );
}

export default Search;
