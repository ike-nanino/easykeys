import AboutLayout from "@/components/AboutLayout";
import MobileNav from "@/components/MobileNav";
import NavBar from "@/components/NavBar";
import React from "react";

function AboutUS() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-transparent absolute w-full z-10 text-white">
        <div className="text-2xl font-bold text-green-400">Easy Keys</div>
        <div className="hidden lg:flex items-center gap-8">
          <NavBar />
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>

      <AboutLayout />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10 mx-4">
        <div>
          <h3>Redefining Luxury</h3>

          <h1 className="mt-4 text-3xl"> Welcome to Easy Keys Guest House</h1>
          

        </div>

        <div className="text-gray-500">
          <p>Easy Keys Guest House is the right choice for visitors who are searching for a combination of charm and a convenient location from where to explore the capital city of Ghana, Accra.</p>

          <p className="mt-8">The rooms are arranged on the ground through to the first floor of the Guest House. Our Guest House features unique design at every turn without compromising guest comfort.</p>

          <p className="mt-8">Easy Keys Guest House is located at Ataadeka near Ridoana Complex School with close proximity to Banks, Restaurants and Shopping Malls. </p>

          <p className="mt-8">A vibrant modern colour palette, complimented by natural light and locally influenced design and decor, make for an inviting, stylish and refreshing atmosphere.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
