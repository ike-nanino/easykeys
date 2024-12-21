import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/gallery/Gallery";
import HeaderCarousel from "@/components/HeaderCarousel";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <div className="">
        <HeaderCarousel />
      </div>

      <Services />

      <Gallery />

      <AboutUs />

      
    </div>
  );
}
