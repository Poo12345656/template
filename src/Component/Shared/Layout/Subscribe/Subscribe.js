import React from "react";
import Text from "../../Text/Text";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import "./Subscribe.css";
import Service from "../../Service/Service";

function Subscribe() {
  return (
    <div className="subscribeWrapper">
      <div className="subscribeTittle">
        <Text
          test="Subscribe to the Handbags Store mailing list to receive updates on new arrivals, special offers and other discount information."
          as="p"
          className="newLetter"
        />
        <div className="subscribeField">
          <Input
            placeholder="Enter Your Email...."
            className="subscribeInputField"
          />

          <Button test="Subscribe" variant="secondary" />
        </div>
      </div>
      <div className="shoppingWrapper">
        
        <Service
          heading="FREE SHIPPING"
          description="On all order over $2000"
          showButton={false}
          
        />
        <div className="return">
        <Service
          heading="FREE RETURN"
          description="On 1st exchange in 30 days"
          showButton={false}
        />
        </div>
        
        <Service
          heading="MEMBER DISCOUNT"
          description="Register & save up to $29%"
          showButton={false}
        />
      </div>
    </div>
  );
}

export default Subscribe;
