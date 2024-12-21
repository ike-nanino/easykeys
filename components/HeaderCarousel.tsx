import Header from "./Header";
import Carousel from "./Carousel";

function HeaderCarousel() {
  return (
    <div className="relative">
      <div className="absolute w-full z-10">
        <Header />
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default HeaderCarousel;
