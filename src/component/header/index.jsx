import React from "react";
import s from "./index.module.scss";
import makeString from "../../app/makeString.js";
import { Link, NavLink } from "react-router";

const Index = () => {
  return (
    <div
      className={makeString([
        s.headerBackGround,
        s.spaseBetween,
        s.headerHeight,
      ])}
    >
      <nav>
        <NavLink to={"/"}>home</NavLink>
      </nav>
      <nav className={s.navSpace}>
        <NavLink to={"about"}>about us</NavLink>
        <NavLink to={"goals"}>our goals</NavLink>
        <NavLink to={"programs"}>our programs</NavLink>
        <NavLink to={"contacts"}>our contacts</NavLink>
      </nav>
    </div>
  );
};

export default Index;
