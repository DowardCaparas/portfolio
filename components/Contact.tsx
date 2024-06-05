import React from "react";
import TextComponent from "./TextComponent";

const Contact = () => {
  return (
    <div id='contact' className="w-full container__padding">
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h2 className="text-2xl font-medium">Contact me</h2>
        <div className="border-r h-5 border-primary_blue"></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          itaque dolorem ea deleniti ut optio, repudiandae voluptates repellat
          ab odio in
        </p>
      </div>

      {/*container */}
      <div className="flex max-md:flex-col justify-between items-start gap-6">
        {/*Left Side Column 1 */}
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-start items-start">
            <h3>Have a Question?</h3>
            <p>I am here to help you</p>
            <p className="text-primary_purple">Email me at</p>
          </div>

          <div className="flex flex-col justify-start items-start gap-4">
            <h3>Current Location</h3>
            <p>Naic, Cavite</p>
          </div>
        </div>

        {/*Right Side Column 2 */}
        <TextComponent />

      </div>
    </div>
  );
};

export default Contact;
