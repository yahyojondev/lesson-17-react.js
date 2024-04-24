import React from "react";
import Navbartop from "../navbartop/Navbartop";
import Navbarbotttom from "../navbarbottom/Navbarbotttom";

function Navbar() {
  return (
    <div className="navbar">
      <Navbartop />
      <Navbarbotttom />
    </div>
  );
}

export default Navbar;
