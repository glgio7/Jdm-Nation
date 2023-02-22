import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;

  img {
    width: 100%;
  }

  .select__box {
    margin-top: 96px;

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

  h2 {
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

    min-height: 100vh;
  }

  .card__item {
    cursor: pointer;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .card__image {
    width: 180px;

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

    color: #fff;
  }

  .card__item:hover .card__image {
    opacity: 1;
  }

  .image__visualizer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 0;
    pointer-events: none;

    position: fixed;
    top: 0;

    width: 100vw;
    height: 100vh;

    backdrop-filter: blur(9px);
    transition: all 300ms;
  }

  .image__visualizer.active {
    pointer-events: all;
    opacity: 1;
  }

  .image__visualizer img {
    border-radius: 10px;

    object-fit: cover;

    width: 50%;
    max-height: 75vh;
  }

  .image__visualizer span {
    margin-block: 1rem;
    padding: 0.25rem 1rem;

    background-color: #000;

    border-radius: 3px;

    &::first-letter {
      color: #ff0000;
    }
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

    .card__lista{
      min-height: initial;
    }

    .card__item {
      width: 40%;
    }

    .card__image {
      width: 100%;
    }

    .image__visualizer img {
      border-radius: 10px;

      object-fit: cover;

      width: 80%;
      max-height: 75vh;
    }
  }
`;
