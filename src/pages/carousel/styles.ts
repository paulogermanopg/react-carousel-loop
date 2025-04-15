import styled, { css } from "styled-components";

type CarouselImageProps = {
  position: "center" | "left" | "right" | "hidden";
};

type CarouselProps = {
  backgroundImage: string;
};

export const CarouselContainer = styled.div<CarouselProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
`;

const positionStyles = {
  center: css`
    transform: translateX(0) scale(1);
    z-index: 2;
    opacity: 1;
  `,
  left: css`
    transform: translateX(-50%) scale(0.8);
    z-index: 1;
    opacity: 0.5;
  `,
  right: css`
    transform: translateX(50%) scale(0.8);
    z-index: 1;
    opacity: 0.5;
  `,
  hidden: css`
    transform: translateX(100%) scale(0.8);
    z-index: 0;
    opacity: 0;
  `,
};

export const CarouselImage = styled.img<CarouselImageProps>`
  position: absolute;
  max-width: 60%;
  max-height: 80%;
  border-radius: 10px;
  transition: transform 0.8s ease, opacity 0.8s ease, z-index 0.8s ease;

  ${({ position }) => positionStyles[position]};
`;