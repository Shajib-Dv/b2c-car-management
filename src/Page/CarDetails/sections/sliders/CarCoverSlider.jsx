/** @format */

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Images = [
  { id: 1, img: "https://i.ibb.co/qrm9dTZ/recar1.png" },
  { id: 2, img: "https://i.ibb.co/PQXG7TY/Rectangle-178.png" },
  { id: 3, img: "https://i.ibb.co/qrm9dTZ/recar1.png" },
  { id: 4, img: "https://i.ibb.co/PQXG7TY/Rectangle-178.png" },
];
const CarCoverSlider = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        axis="horizontal"
        infiniteLoop={true}
        emulateTouch
      >
        {Images &&
          Images.map((img) => (
            <div key={img.id}>
              <img src={img.img} alt="image" />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CarCoverSlider;
