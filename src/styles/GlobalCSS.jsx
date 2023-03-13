import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`


*{
  padding: 0;
  margin: 0;
  
  box-sizing: border-box;
  
  list-style: none;
  
  color: #fff;
  
  font-family: "Kdam Thmor Pro", sans-serif;
  font-synthesis: none;
  font-weight: normal;

}

body{
  background-color: #101010;

  position: relative;
  
  width: 100vw;
  
  overflow-x: hidden;

}

a{
  text-decoration: none;
}
`;
