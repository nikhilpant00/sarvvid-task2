import React from "react";
import { Link } from "react-router-dom";

function Button({ btnText, link, onClick }) {
  return (
    <div>
      <Link to={link}>
        <button
          className="px-2 py-1 rounded-2xl text-white text-sm bg-red-500"
          onClick={onClick}
        >
          {btnText}
        </button>
      </Link>
    </div>
  );
}

export default Button;
