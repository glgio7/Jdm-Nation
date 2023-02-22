import styled from "styled-components";

export const StyledHeader = styled.header`
background-color: rgba(0, 0, 0, 1);
color: #fff;

font-family: "Kdam Thmor Pro", sans-serif;

width: 100%;
max-height: calc(100vh - 60px);

z-index: 5;

position: relative;

overflow: hidden;

.background-video {
  opacity: 0.5;

  position: absolute;
  
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  z-index: -1;
  
  scale: 1.5;
  
  width: 100vw;
  
  object-fit: cover;
  
  animation: 10s linear infinite opacityVideo;
}

img {
  width: 100%;
}

.logo {
  width: 360px;

  background-color: #000;
  
  border-radius: 10px;
  
  object-fit: contain;
  
  box-shadow: 0px 0px 30px #444 ;
}

h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border-radius: 6px;
  
  height: 100vh;
  
  animation: 5s linear opacityIn;
}

p {
  font-size: 1rem;
  text-align: center;
  
  animation: 6s linear textMain;
  
  &:first-of-type{
    margin-top: 3rem;
    margin-bottom: .5rem;
    
    animation: 5s linear textMain;
  }
}

@media screen and (max-width: 960px) {
  max-height: calc(100vh - 120px);

  h1{
  animation: 3s linear opacityIn;
  
  height: calc(100vh - 120px);
  }

  .logo{
    width: 240px;
  }

  p{
    max-width: 80%;
    
    animation: 4s linear textMain;

    &:first-of-type{
      margin-top: 1.5rem;
      
      animation: 3s linear textMain;
  }
}

  .background-video {
    top: 0;
    left: 25%;
    
    height: 100vh;
  }
}

//////// ANIMATIONS

@keyframes opacityIn {
  0% {
    /* pushes the sun down past the viewport */
    opacity: 0;
  }
  50% {
    /* returns the sun to its default position */
    opacity: 0;
  }
  75% {
    /* returns the sun to its default position */
    opacity: 1;
  }
}
@keyframes textMain {
  0% {
    /* pushes the sun down past the viewport */
    opacity: 0;
    transform: translateY(-10vh);
  }
  25% {
    /* pushes the sun down past the viewport */
    opacity: 0;
    transform: translateY(-10vh);
  }
  96% {
    /* pushes the sun down past the viewport */
    opacity: 0;
    transform: translateY(-10vh);
  }
  100% {
    /* returns the sun to its default position */
    opacity: 1;
    transform: translateX(1);
  }
}
@keyframes opacityVideo {
  0% {
    /* pushes the sun down past the viewport */
    opacity: 0;
  }
  25% {
    /* returns the sun to its default position */
    opacity: 0.25;
  }

  75% {
    /* returns the sun to its default position */
    opacity: 0.25;
  }
  100% {
    /* returns the sun to its default position */
    opacity: 0;
  }
}
`;
