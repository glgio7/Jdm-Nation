import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100vw;
  height: 60px;

  background-color: #000;
  
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  .logo {
    height: 60px;

    border-radius: 10px;
    
    object-fit: contain;
  }

  ul {
    height: 100%;
    width: 80%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  li {
    font-size: 0.9rem;
  }

  a {
    display: flex;

    color: #fff;
    text-shadow: 0px 2px 12px rgba(70, 0, 220, 0.75);
  }

  a:focus {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    height: 120px;

    .logo,
    ul {
      width: 100%;
    }
    .logo {
      height: 96px;

      object-fit: contain;
    }

    ul {
      padding-bottom: 0.5rem;

      justify-content: space-around;
    }

    li {
      font-size: 0.8rem;
    }
  }
`;
