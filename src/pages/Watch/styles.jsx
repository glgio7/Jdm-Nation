import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 96px);
  padding: 1rem 0;

  background-image: url("/img/data/cars-wallpaper.jpg");
  background-size: cover;
  background-position: center;
`;

export const VideosContainer = styled.div`
  background-color: rgba(15, 15, 15, 0.75);

  padding: 1rem;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 90%;
  height: calc(100vh - 128px);

  overflow-y: scroll;

  border-radius: 12px;

  position: relative;

  .player {
    position: absolute;
    top: 0;
    border: none;
    width: 100%;
    height: 100%;
    z-index: 5;

    iframe {
      border-radius: 12px;
      width: 100%;
      height: 100%;
    }
  }

  .player__close {
    position: absolute;

    cursor: pointer;

    border: none;
    border-radius: 10px 0 10px;
    width: 6rem;
    height: 4rem;

    right: 0rem;
    top: 0rem;

    background-color: #ff0000;
    color: #fff;

    font-size: 0.8rem;

    transition: all 250ms;

    &:hover {
      opacity: 0.75;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Video = styled.div`
  cursor: pointer;

  width: 25%;

  display: flex;
  align-items: center;
  flex-direction: column;

  text-align: center;

  margin: 1rem;

  position: relative;

  img {
    width: 100%;
    
    border-radius: 12px;
    
    object-fit: cover;
  }

  span {
    margin: 6px 0;
  }

  .action-thumbnail {
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .action-thumbnail__play {
    position: absolute;
    
    z-index: 1;
    
    width: 64px;
    height: 64px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
