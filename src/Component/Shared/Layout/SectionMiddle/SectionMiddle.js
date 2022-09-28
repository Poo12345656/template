import React from "react";
import Text from "../../Text/Text";
import Service from "../../Service/Service";
import Img from "../../Img/Img";
import "./SectionMiddle.css";

function SectionMiddle() {
    return (
        <div>
            <div className="container">
                <div className="sectionMiddle">
                    <Service
                        heading="FAST & FREE DELIVERY"
                        description="Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero."
                    />
                    <Service
                        heading="SAFE & SECURE PAYMENTS"
                        description="Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero."
                    />
                    <Service
                        heading="100% MONEY BACK GUARANTEE"
                        description="Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero."
                    />
                </div>
            </div>
            <div className="collectionWrapper">
                <div className="collectionImg">
                    <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/banner1.jpg" />
                </div>
                <Service
                    heading="TRAVEL MUST HAVES"
                    description="Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero."
                    showButton={true}
                    buttonText="shop now"
                />
            </div>
            <div className="container">
                <div className="collection">

                    <Text
                        test="SAFETY MEETS STYLE"
                        as="h3"
                        className="collectionTittle"
                    />
                    <div className="collectionService ">

                        <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/c1.jpg" />
                        <Service
                            heading="NEED EXTRA SPACE ?"
                            description="Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero."
                            showButton={true}
                            buttonText="shop now"
                        />
                        <Img src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/c2.jpg" />
                    </div>




                </div>

            </div>

        </div>
    );
}

export default SectionMiddle;
