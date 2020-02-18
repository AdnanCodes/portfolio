import React from "react";
import logo from "../assets/cover.png";
const Easter = () => {
  return (
    <section>
      You found it
      <button onClick={() => window.open(logo, "_blank")}>
        Get that Cover Image
      </button>
    </section>
  );
};

export default Easter;
