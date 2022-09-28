import React from "react";
import Service from "../../Service/Service";
import Img from "../../Img/Img";
import "./TrandingSection.css";

function TrandingSection() {
  return (
    <div className="trandingWrapper">
      <div className="trandingTittle">
        <Service
          heading="TRENDING NOW"
          description="Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero."
          showButton={true}
          buttonText="shop now"
        />
      </div>

      <div className="trandingImagWrapper">
        <div className="trandingImag">
          <div className="trad">
            <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/g1.jpg" />
          </div>
          <div className="trad">
            <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/g2.jpg" />
          </div>
          <div className="trad">
            <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/g3.jpg" />
          </div>
        </div>
        <div className="trandingImagScnd">
          <div className="trad">
            <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/g4.jpg" />
          </div>
          <div className="trad">
            <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/g5.jpg" />
          </div>
          <div className="trad">
            <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/g6.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrandingSection;
