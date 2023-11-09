import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const images = [
//   { id: 1, img: "https://i.ibb.co/qrm9dTZ/recar1.png" },
//   { id: 2, img: "https://i.ibb.co/PQXG7TY/Rectangle-178.png" },
//   { id: 3, img: "https://i.ibb.co/qrm9dTZ/recar1.png" },
//   { id: 4, img: "https://i.ibb.co/PQXG7TY/Rectangle-178.png" },
// ];
const CarCoverSlider = ({images}) => {
  return (
    <div className="flex-1">
      <Carousel
        autoPlay={true}
        axis="horizontal"
        infiniteLoop={true}
        emulateTouch
      >
        {images &&
          images.map((img,idx) => (
            <div key={idx} className=" -z-10">
              <img src={img} alt="image" className="w-full h-full object-cover"/>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CarCoverSlider;
