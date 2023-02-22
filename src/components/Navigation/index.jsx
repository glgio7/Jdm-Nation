import React from "react";
import { Link } from "react-router-dom";
import { StyledNavBar } from "./styles";

export default function Navigation() {
  return (
    <StyledNavBar>
    <Link to={"/"}>
    <img src="/img/jdmnationbase.png" alt="" className="logo" />
    </Link>
      <ul>
      <li>
        <Link to={"/"}>
          Home
        </Link>
        </li>
        <li>
          <Link to={"/cars"}>Carros</Link>
        </li>
          <li>
        <Link to={""}>Drift Videos
        </Link>
        </li>
        <li>
        <Link to={""}>
        Contato
        </Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}
