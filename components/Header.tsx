
import React from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent text-white">
      <div className="text-2xl font-bold">Easy Keys</div>
      <div className="hidden lg:flex items-center gap-8">
        <NavBar />
      </div>

      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
