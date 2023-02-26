import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;

  img {
    width: 100%;
  }

  .select__box {
    margin-top: 1rem;

    display: flex;
    justify-content: space-evenly;

    width: 30vw;
  }

  .select__box span {
    width: 45%;
  }

  select {
    background-color: #000;

    border: none;

    width: 45%;

    text-align: center;

    border-radius: 3px;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

    margin: 0 auto;

    background-color: #111;
  }

  .container h2 {
    width: 100vw;

    text-align: left;

    margin-left: 5vw;
    margin-block: 2rem;
  }

  h2::first-letter {
    color: #ff0000;

    font-weight: bold;
  }

  .card__lista {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

    min-height: calc(100vh - 202px);
  }

  .card__item {
    cursor: pointer;

    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
  }

  .card__image {
    width: 224px;
    /* height: 100%; */

    object-fit: cover;
    object-position: 50%;

    aspect-ratio: 12/16;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);

    opacity: 0.8;

    transition: all 200ms;
  }

  .card__item span {
    margin-block: 0.5rem;
    margin-left: 1.25rem;
    max-width: 80%;
    text-align: center;

    color: #fff;
  }

  .card__item:hover .card__image {
    opacity: 1;
  }

  .info-visualizer {
    display: flex;
    position: relative;
    align-items: center;

    padding: 0 1rem;

    opacity: 0;
    pointer-events: none;

    position: fixed;
    top: 0;

    width: 100vw;
    height: 100vh;

    backdrop-filter: blur(9px);
    transition: all 200ms;
  }

  .info-visualizer.active {
    pointer-events: all;
    opacity: 1;
  }
  .info-visualizer__close{
    position: absolute;
    
    cursor: pointer;
    
    border: none;
    border-radius: 10px  0 10px;
    
    right: 1rem ;
    width: 60px;
    top: 1rem;
    
    background-color: #ff0000;
    color: #FFF;
    
    font-size: .8rem;
    
    transition: all 250ms;

    &:hover{
      opacity: .75;
    }
  }

  .info-visualizer img {
    border-radius: 10px 0 0 10px;
    
    object-fit: cover;
    
    height: 90vh;
    max-width: 40%;
  }

  .info-visualizer__details {
    background-color: rgb(0,0,0, .85);
    
    border-radius: 0 10px 10px 0;
    
    height: 90vh;
    width: 60%;
  }

  .info-visualizer__details li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    
    margin-top: 1rem;
  }

  .info-visualizer__details h2{
    color: #FFF;
    
    &::first-letter{
      color: #ff0000;
    }
  }
  
  .info-visualizer__details h3 {
    color: #ff0000;
  }

  @media screen and (max-width: 768px) {
    .container {
      max-width: 95%;
    }

    .select__box {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100vw;

      margin-top: 1rem;
    }

    select,
    .select__box span {
      margin-block: 0.5rem;

      width: 80%;
    }

    h2 {
      text-align: center;

      margin-left: 0;
    }

    .card__lista {
      min-height: initial;
    }

    .card__item {
      width: 40%;
    }

    .card__image {
      width: 100%;
    }

    .info-visualizer {
      flex-direction: column;
      padding: 0;
    }

    .info-visualizer img {
    border-radius: 10px 10px 0 0;
    
    object-fit: cover;
    
    /* height: 90vh; */
    max-width: 100vw;
  }
  
  .info-visualizer__details{
    width: 100vw;
    
    border-radius: 0 0 10px 10px;
    
    overflow-y: auto;
  }
  }
`;
