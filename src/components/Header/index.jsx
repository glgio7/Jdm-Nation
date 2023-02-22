import React from "react";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <>
      <StyledHeader onLoad={() => window.scrollTo(0,0)}>
        <h1>
          <img src="/img/jdmnationbase.png" alt="" className="logo" />
          <p>Da história à cultura, da tecnologia à velocidade!</p>
          <p>Uma paixão pela aventura.</p>
        </h1>
        <video autoPlay loop muted className="background-video">
          <source src="/img/drift-clip.mp4" type="video/mp4" />
        </video>
      </StyledHeader>
    </>
  );
}
