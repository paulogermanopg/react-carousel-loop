import { useState, useEffect } from "react";
import * as S from "./styles";
import carouselEmpty from "../../assets/images/carouselEmpty.png";
import pangare from "../../assets/images/cavalo2.png";

const images = [pangare, pangare, pangare];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + images.length) % images.length)
      return "left";
    if (index === (currentIndex + 1) % images.length) return "right";
    return "hidden";
  };

  return (
    <S.CarouselContainer backgroundImage={carouselEmpty}>
      {images.map((image, index) => (
        <S.CarouselImage
          key={index}
          src={image}
          position={getPosition(index)}
        />
      ))}
    </S.CarouselContainer>
  );
}