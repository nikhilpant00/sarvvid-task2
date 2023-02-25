import React, { useState } from "react";

import Button from "./Button";
import Details from "./Details";
import TextBox from "./TextBox";

function Product({ props }) {
  const [showDetails, setShowDetails] = useState(false);

  const onClickHandler = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-xl px-10 shadow m-5">
      <div className="h-32 flex justify-between items-center">
        <p className="w-40">{props.company.name}</p>

        <TextBox className="w-32" heading="CONTACT" content={`${props.name}`} />

        <TextBox
          className="w-32"
          heading="CITY"
          content={`${props.address.city}`}
        />

        <TextBox
          className="w-32"
          heading="STATE"
          content={`${props.address.city}`}
        />

        <Button
          btnText={showDetails ? "Hide Details" : "View Details"}
          link="/"
          onClick={onClickHandler}
        />
      </div>

      <div className={showDetails ? "block" : "hidden"}>
        <Details props={props} />
        <p className="h-4"></p>
      </div>
    </div>
  );
}

export default Product;
