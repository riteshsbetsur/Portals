import React from "react";
import ReactDOM from "react-dom";

const Portals = () => {
  return ReactDOM.createPortal(
    <h1>Hello MERN</h1>,
    document.getElementById("portals")
    //!Portals = Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
  );
};

export default Portals;
