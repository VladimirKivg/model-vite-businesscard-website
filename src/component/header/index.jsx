import React from "react";
import s from "./index.module.scss";
import makeString from "../../app/makeString.js";

const Index = () => {
  return (
    <div className={makeString([s.headerBackGround, s.spaseBetween])}>
      <div>home</div>
      <ul>
        <li>about us</li>
        <li>our doals</li>
        <li>our programs</li>
        <li>our contacts</li>
      </ul>
    </div>
  );
};

export default Index;
